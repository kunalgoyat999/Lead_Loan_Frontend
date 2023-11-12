import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import "../App.css";
import { useNavigate } from 'react-router-dom'
import FormController from "../helper/FormController";
// import "../assests/styles.css";
import { color } from "framer-motion";


const Resetpassword = () => {
  let navigate = useNavigate()
  return (
    <>
      <div class="reset_container">
        <Box className="resetPassword_box">
          <Text py="2" fontWeight="medium" fontSize="2xl">
            Forgotten your password?
          </Text>
          <Text
            pr="8"
            fontWeight="semibold"
            color="blackAlpha.700"
            lineHeight="1.4"
          >
            There is nothing to worry about ,Please enter your registered email
            address with us and your credentials will be sent to your inbox.
          </Text>
          <FormController
            w="90%"
            lable="Enter Email Address"
            placeholder="Enter registered email"
          />
          <Box className="button_container">
            <ButtonGroup w="100%">
              <Button
                colorScheme="twitter"
                fontWeight="normal"
                w="35%"
                variant="outline"
                onClick={()=>{navigate('/login')}}
              >
                Back to Login
              </Button>
              <Button
              colorScheme='blue'
                bg="var(--primaryCOlor)"
                fontWeight="normal"
                color="white"
                w="60%"
              >
                Request Username/Password
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Resetpassword;
