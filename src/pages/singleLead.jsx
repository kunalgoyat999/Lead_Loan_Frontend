import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Select,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { getSingleLead, updateLead } from "../services/api";

const SingleLead = () => {
  const [singleLead, setSingleLead] = useState({});
  const location = useLocation();
  const { id } = location.state;
  const [selectedOption, setSelectedOption] = useState("");
  const [remark, setRemark] = useState("");
  const toast = useToast();
  const [createTime, setCreateTime] = useState("");
  let token = localStorage.getItem("jwt_token");

  useEffect(() => {
    getSingleLead(token, id)
      .then((res) => {
        setSingleLead(res.data);
        const dateObject = new Date(res.data.createdAt);
        const formattedDate = dateObject.toLocaleDateString();
        const formattedTime = dateObject.toLocaleTimeString();
        setCreateTime(formattedDate);
      })
      .catch((err) => {
        toast({
          title: `${err.response.status} code`,
          status: "error",
          position: "bottom",
          isClosable: true,
        });
      });
  }, [id]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setRemark(event.target.value);
  };

  const handleEditClick = () => {
    const data = {
      remark: remark,
      status: selectedOption,
    };

    updateLead(id, data)
      .then((res) => {
        if (res.data === "Lead updated successfully") {
          let success = "Lead updated successfully";
          toast({
            title: success,
            status: "success",
            position: "bottom",
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating lead:", error);
      });
  };

  return (
    <Box maxW="800px" mx="auto" mt="4">
      <Box bg="gray.100" p="6" rounded="md" shadow="md">
        <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="center">
          Lead Details
        </Text>
        <Text fontWeight="bold">Name:</Text>
        <Text>{singleLead.name}</Text>
        <Text fontWeight="bold" mt="4">
          Gender:
        </Text>
        <Text>{singleLead.gender}</Text>
        <Text fontWeight="bold" mt="4">
          Phone No:
        </Text>
        <Text>{singleLead.phone_number}</Text>
        <Text fontWeight="bold" mt="4">
          Loan Amount:
        </Text>
        <Text>{singleLead.loan_amount}</Text>
        <Text fontWeight="bold" mt="4">
          Loan Type:
        </Text>
        <Text>{singleLead.loan_type}</Text>
        <Text fontWeight="bold" mt="4">
          Remark:
        </Text>
        {singleLead.remark != null ? (
          singleLead.remark.map((ele, index) => {
            const dateObject = new Date(ele.time);
            const formattedDate = dateObject.toLocaleDateString();
            const formattedTime = dateObject.toLocaleTimeString();
            return (
              <Text key={index} ml="4">
               {(index+1) +")."} {ele.message}  - [{formattedDate ? formattedDate : '-' }]
              </Text>
            );
          })
        ) : (
          <Text>No remarks available</Text>
        )}
        <Text fontWeight="bold" mt="4">
          Status:
        </Text>
        <Text>{singleLead.status}</Text>
        <Text fontWeight="bold" mt="4">
          Created At:
        </Text>
        <Text>{createTime}</Text>
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="-- Choose One --"
          mt="6"
        >
          <option value="Inserted">Inserted</option>
          <option value="In Progress">In Progress</option>
          <option value="Documents">Documents</option>
          <option value="Loan Disburse">Loan Disburse</option>
        </Select>
        <Input
          placeholder="Add Remark"
          value={remark}
          onChange={handleInputChange}
          mt="4"
        />
        <Button
          mt="6"
          colorScheme="teal"
          size="lg"
          onClick={handleEditClick}
          w="100%"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SingleLead;
