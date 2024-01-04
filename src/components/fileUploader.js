import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { Input, Box, Text, Button, useToast } from "@chakra-ui/react";
import axios from 'axios';
import { uploadbulklead } from "../services/api"

const FileUploader = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const token = localStorage.getItem("jwt_token");
  const toast = useToast();

  const readExcelFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      onUpload(excelData);
      setUploading(false);
    };

    reader.readAsBinaryString(file);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileChange = () => {
    if (selectedFile) {
      setUploading(true);
      readExcelFile(selectedFile);

      // Add logic to send file to API with token in headers
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios.post('http://13.200.255.136:8009/leads/imports', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log('File uploaded successfully:', response.data);
          // Handle response if needed
          toast({
            title: `File uploaded successfully`,
            status: "success",
            position: "top-right",
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          // Handle error if needed
          toast({
            title: `File uploading Failed`,
            status: "error",
            position: "top-right",
            isClosable: true,
          });
        });
    }
  };

  return (
    <Box mx="6em">
      <Text mb={4}>File Input Example</Text>

      <Box {...getRootProps()} style={dropzoneStyles}>
        <Input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag & drop a file here, or click to select a file</p>
        )}
      </Box>

      {selectedFile && (
        <Text mt={4}>
          Selected File: {selectedFile.name} (Size: {selectedFile.size} bytes)
        </Text>
      )}

      <Button mt={4} colorScheme="teal" onClick={handleFileChange}>
        Upload
      </Button>

      {uploading && <p>Uploading...</p>}
    </Box>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUploader;
