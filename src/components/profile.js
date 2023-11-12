import { Box, Text } from "@chakra-ui/react";
import { GrEdit } from 'react-icons/gr';
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
} from '@chakra-ui/react';

const Profile_Container = () => {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + "  "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes();
  return (
    <>
      <Box color='#666' letterSpacing='wide' >
        <GrEdit style={{ marginLeft: '97%', fontSize: '1.5em', color: 'red' }} />
        <Text>{` This candidate was last updated on ${datetime}`}</Text>

        <Text fontWeight='medium' fontSize='xl' my='5' color='black'> Personal Details</Text>

        <Table variant='' width='50%' id="profile_dropdown_table">
          <Tbody>
            {
              Object.keys(Personal_Details).map(key => (
                <Tr key={key} color=''>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='semibold'>{key}</Td>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='normal'>{Personal_Details[key]}</Td>
                </Tr>
              ))
            }
          </Tbody>

        </Table>

        <Text fontWeight='medium' fontSize='xl' my='5' color='black'> Contanct Details</Text>

        <Table variant='' width='60%'>
          <Tbody>
            {
              Object.keys(Contanct_Details).map(key => (
                <Tr key={key} color=''>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='semibold'>{key}</Td>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='normal'>{Personal_Details[key]}</Td>
                </Tr>
              ))
            }
          </Tbody>

        </Table>


        <Text fontWeight='medium' fontSize='xl' my='5' color='black'> Proffesional Details</Text>

        <Table variant='' width='60%'>
          <Tbody>
            {
              Object.keys(Proffesional_Details).map(key => (
                <Tr key={key} color=''>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='semibold'>{key}</Td>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='normal'>{Personal_Details[key]}</Td>
                </Tr>
              ))
            }
          </Tbody>

        </Table>


        <Text fontWeight='medium' fontSize='xl' my='5' color='black'> Refferal Details</Text>

        <Table variant='' width='60%'>
          <Tbody>
            {
              Object.keys(Refferal_Details).map(key => (
                <Tr key={key} color=''>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='semibold'>{key}</Td>
                  <Td paddingLeft='0em' py='0.2em' fontWeight='medium'>{Personal_Details[key]}</Td>
                </Tr>
              ))
            }
          </Tbody>

        </Table>

      </Box>
    </>
  )
}

export default Profile_Container;

let Personal_Details =
{
  "Profile Name": 'Kunal',
  "Salutation": '',
  "First Name": '',
  "Last Name": '',
  "Middle Name/Initial": '',
  'Known As': '',
  "E-Mail": '',
  "Mother's Name": '',
  "Country": 'India',
  "State / Province": 'Maharastra',
  "City": 'Pune',
  "Address": 'Pune, 1st street',
  "Zip / Postal Code": '4350013',
  "Gender": '',
  "Marital Status": '',
  "Birth Place": '',
  "Birth Date": '',
  "Nationality": '',
  "Residency Country": '',
  "Citizenship Country": '',
  "Legal Identification Number": '2525154'
}

let Contanct_Details = {
  "Contact Preference": "",
  "Phone #": "23659456",
  "Alt.Phone #": "",
  "Business Phone #": '',
  "Fax #": "",
  "Pager #": "",
  "Exr.": "",
  "Web Site": ""
}

let Proffesional_Details = {
  "Career Level": "",
  "Total Experience": "",
  "Current Position Title": "",
  "Current Salary/Rate": "0.00",
  "Authorization To Work": "",
  "Security Clearance": "Yes",
  "Immediate Start Indicator": "No"
}

let Refferal_Details = {
  "Refferal Source": "",
  "Specific Source": ""
}