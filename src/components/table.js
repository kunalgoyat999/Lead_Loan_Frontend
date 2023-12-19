import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Radio,
  Link,
  Button,
  background,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react";
import "../App.css";
import { GrFormNext } from "react-icons/gr";
import FileUploader from "./fileUploader";
import { useEffect, useState } from "react";
import { getAllLeadByAdmin, getLeadByEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const Tablebox = ({ btn_title, path, jobslist, btnremove, wid, btncolor }) => {
  const [admin, setAdmin] = useState(false);
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  const [checkedValues, setCheckedValues] = useState([]);

  const handleUpload = (data) => {
    console.log("Uploaded Excel data:", data);
    // Handle the uploaded data as needed
  };

  useEffect(() => {
    let role = localStorage.getItem("role");
    let employeeId = localStorage.getItem("empolyeeId");
    let token = localStorage.getItem("jwt_token");

    if (role != "USER") {
      setAdmin(true);
    }

    console.log("empolye", employeeId);
    if (employeeId != null) {
      try {
        getLeadByEmployee(token, employeeId).then((res) => {
          console.log("ressemployee", res);
        });
      } catch (error) {
        console.log("error", error);
      }
    } else {
      getAllLeadByAdmin(token).then((res) => {
        if (res.status == 200) {
          console.log("allLead", res.data.length);
          setLeads(res.data);
        }
      });
    }
  }, []);

  const handleEditClick = (id) => {
    navigate("/single-lead", { state: { id } });
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    console.log("value,", value, "isChecked", isChecked)
    // Update the state based on the checkbox change
    if (isChecked) {
      setCheckedValues((prevCheckedValues) => [...prevCheckedValues, value]);
    } else {
      setCheckedValues((prevCheckedValues) =>
        prevCheckedValues.filter((item) => item !== value)
      );
    }
  };

  const handleAssign = () => {
    console.log("checkedValues", checkedValues)
    // if()
  }

  return (
    <div style={{}}>
      {/* <Text >
        Welcome to Fin Access
      </Text> */}

      {admin && (
        <>
        <Flex justify="flex-end"> 
          <Button
            colorScheme={btncolor ? btncolor : "teal"}
            bg={btncolor ? btncolor : "teal"}
            fontSize="medium"
            fontWeight="normal"
            px="3em"
            mr="6em"
            my="2em"
            mt="7em"
            onClick={() => handleAssign()}
          >
            {`${btn_title} `}
            {btncolor == "red" ? "" : ""}
          </Button>
          </Flex>

          <FileUploader onUpload={handleUpload} />
        </>
      )}
      <div
        style={{
          marginTop: admin ? "0px" : "90px",
        }}
      >
        <TableContainer
          w={wid ? wid : "85%"}
          m="auto"
          mt='3em'
          border="1px solid #D9D9D9"
          borderRadius="0.5em"
        >
          <Table variant="striped" colorScheme="teal" >
            <Thead className="table_head">
              <Tr background="#FAFAFA">
                {tableArr[0].map((ele) => (
                  <Th>{ele} </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody className="table_body">
              {leads.length != 0
                ? leads.map((ele, index) => {
                    return (
                      <Tr key={index}>
                        <Td>
                          <input
                            type="checkbox"
                            value={ele.id}
                            // checked={checkedValues.includes(ele.id)}
                            onChange={handleCheckboxChange}
                          />
                        </Td>
                        <Td>{ele.createdAt}</Td>
                        <Td>{ele.name}</Td>
                        <Td>{ele.gender}</Td>
                        <Td>{ele.loan_amount}</Td>
                        <Td>{ele.status.toUpperCase()}</Td>
                        <Td>
                          {ele.remark != null
                            ? ele.remark[ele.remark.length - 1].message
                            : "NO_REMARK"}
                        </Td>
                        <Td>
                          <Button h='7'
                          bg='transparent'
                          onClick={() => handleEditClick(ele.id)}
                          >
                          <FiEdit />
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })
                : null}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Tablebox;

let tableArr = [
  ["", "Date", "Name", "Mobile", "Loan Amount", "Status", "Remark", "Edit"],
  [
    <Link color="blue.500">65454-sdvsdv</Link>,
    "Irvine , California , USA",
    "08/30/2023",
    "incurence",
    "Claims Analyst",
    <Link color="blue">dfvdvd</Link>,
    <Box className="Box_Status">Applied</Box>,
  ],
];
