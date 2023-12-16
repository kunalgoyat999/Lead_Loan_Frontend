import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';

const FileUploader = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      onUpload(excelData);
    };

    reader.readAsBinaryString(file);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file)

    setSelectedFile(file);
    // Handle the selected file as needed
  };

  return (
    // <div {...getRootProps()} style={dropzoneStyles}>
    //   <input {...getInputProps()} />
    //   <p>{isDragActive ? 'Drop the file here ...' : 'Drag and drop a file here, or click to select a file'}</p>
    // </div>
    <div>
      <h1>File Input Example</h1>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <p>
          Selected File: {selectedFile.name} (Size: {selectedFile.size} bytes)
        </p>
      )}
    </div>
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
