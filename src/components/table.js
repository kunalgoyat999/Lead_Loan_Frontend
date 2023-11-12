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
} from "@chakra-ui/react";
import "../App.css";
import { GrFormNext } from 'react-icons/gr'

const Tablebox = ({ btn_title, path, jobslist, btnremove, wid,btncolor }) => {


  return (
    <>

    {
      btnremove ?<></> : <Button
      colorScheme={btncolor? btncolor :"blue"}
      bg={btncolor? btncolor :"#4160D8"}
      fontSize="medium"
      fontWeight="normal"
      px="3em"
      ml="20%"
      my="2em"
      mt='7em'
    >
      {`${btn_title} ` }{btncolor=='red'? '':''}
    </Button>
    }
      
      <TableContainer
        w={wid? wid : "60%"}
        m="auto"
        border="1px solid #D9D9D9"
        borderRadius="0.5em"
      >
        <Table variant="striped" colorScheme="whiteAlpha" size="md">
          <Thead className="table_head">
            <Tr background="#FAFAFA">
              {
                tableArr[0].map(ele=><Th>{ele} </Th>)
              }
            </Tr>
          </Thead>
          <Tbody className="table_body">
            <Tr>
              {
                tableArr[1].map(ele => <Td>{ele} </Td>)
             }
            </Tr>
            
            <Tr background="#FAFAFA">
            {
                tableArr[1].map(ele => <Td>{ele} </Td>)
             }
            </Tr>
            <Tr>
            {
                tableArr[1].map(ele => <Td>{ele} </Td>)
             }
            </Tr>
            <Tr background="#FAFAFA">
            {
                tableArr[1].map(ele => <Td>{ele} </Td>)
             }
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tablebox;


let tableArr = [[ 
  "",
"#Reffernce",
"Location",
"Date Applied",
"Job Category",
"Job Type",
"Resume",
"Status"],
[
 
  <input
    type="radio"
    name="Job_title"
    id="table_radio"
    value="1"
    defaultChecked
  />,
,
  <Link color="blue.500">65454-sdvsdv</Link>
,'Irvine , California , USA'
,'08/30/2023'
,'incurence'
,'Claims Analyst',
  <Link color="blue">dfvdvd</Link>,
  <Box className="Box_Status">Applied</Box>
]]