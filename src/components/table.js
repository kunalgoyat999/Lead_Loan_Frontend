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
  Flex,
  useToast
} from "@chakra-ui/react";
import "../App.css";
import { GrFormNext } from "react-icons/gr";
import FileUploader from "./fileUploader";
import { useEffect, useState } from "react";
import {
  assignLead,
  getAllEmployees,
  getAllLeadByAdmin,
  getLeadByEmployee,
} from "../services/api";
import "../assests/css/table.css";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const Tablebox = ({ btn_title, path, jobslist, btnremove, wid, btncolor }) => {
  const [admin, setAdmin] = useState(false);
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  const [checkedValues, setCheckedValues] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  let toast = useToast();
  let token = localStorage.getItem("jwt_token");

  const handleUpload = (data) => {
    console.log("Uploaded Excel data:", data);
    // Handle the uploaded data as needed
  };

  useEffect(() => {
    let role = localStorage.getItem("role");
    let employeeId = localStorage.getItem("empolyeeId");

    if (role != "USER") {
      setAdmin(true);
    }

    console.log("empolye", employeeId);
    if (employeeId != null) {
      try {
        getLeadByEmployee(token, employeeId).then((res) => {
          console.log("ressemployee", res);
          setLeads(res.data)
        }).catch((error) => {
          console.log("error", error);
        })
      } catch (error) {
        console.log("error", error);
      }
    } else {
      getAllLeadByAdmin(token).then((res) => {
        if (res.status == 200) {
          console.log("allLead", res.data.length);
          setLeads(res.data);
        }
      }).catch((error) => {
        console.log("error", error);
      })
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
    console.log("checkedValues", checkedValues);
    getAllEmployees(token).then((res) => {
      console.log("resss", res.data);
      setEmployees(res.data);
    }).catch((error) => {
      console.log("error", error);
    });
  };
  const handleAssigneDone = () => {
    console.log(
      "token, employeeId, checkedValues",
      token,
      employeeId,
      checkedValues
    );
    let data = {
      leads: checkedValues,
    };
    assignLead(token, employeeId, data).then((res) => {
      console.log("assignLead", res);
      if (res.status == 200) {
        let success = "Lead Assign Successful";
        toast({
          title: `${success}`,
          status: "success",
          position: "bottom",
          isClosable: true,
        });
      }
      closeModal();
    }).catch((error) => {
      console.log("error", error);
    });
  };
  useEffect(() => {
    if (employees.length != 0) {
      setModalOpen(true);
    }
  }, [employees]);
  const closeModal = () => {
    setModalOpen(false);
  };


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
                  const dateObject = new Date(ele.createdAt);

                    // Format the date and time
                    const formattedDate = dateObject.toLocaleDateString();
                    const formattedTime = dateObject.toLocaleTimeString();

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
                        <Td>{formattedDate}</Td>
                        <Td>{ele.name}</Td>
                        <Td>{ele.gender}</Td>
                        <Td>{ele.phone_number}</Td>
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
      <div className="App">
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                {employees.length != 0 &&
                  employees.map((ele) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <input
                          type="radio"
                          value={employeeId}
                          name="employeeRadio"
                          checked={employeeId === ele.id}
                          onChange={() => setEmployeeId(ele.id)}
                        />
                        <p color="black" style={{ marginLeft: "20px" }}>
                          {ele.email}
                        </p>
                      </div>
                    );
                  })}
                <div style={{ display: "flex", marginTop: "20px" }}>
                  <span
                    onClick={handleAssigneDone}
                    style={{
                      marginRight: "20px",
                      backgroundColor: "green",
                      padding: "5px",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    <p style={{ color: "white" }}> Assign </p>
                  </span>
                  <span
                    onClick={closeModal}
                    style={{
                      marginRight: "20px",
                      backgroundColor: "red",
                      padding: "5px",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    <p style={{ color: "white" }}> Close </p>
                  </span>
                </div>
                {/* <p>Modal Content Goes Here</p> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tablebox;

let tableArr = [
  ["", "Date", "Name", "Gender", "Mobile", "Loan Amount", "Status", "Remark", "Edit"],
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
