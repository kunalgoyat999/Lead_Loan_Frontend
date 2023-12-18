import { useEffect, useState } from "react";
import assets from "../assests";
import { Text, Button } from "@chakra-ui/react";
import Loginbox from "../components/login";
import SignupBox from "../components/Signup";
import "../assests/styles.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(status, "fffdsc");
  }, []);

  return (
    <div style={{display: "flex", justifyContent: "space-around", marginTop: "50px"}}>
      <div>
        <img src={assets.images.LOGIN.BANNER} alt="" style={{width: "500px"}}/>
      </div>
      <div >
        <Text as="b" fontSize="3xl" m="1">
          Welcome to Fin Access
        </Text>
        {/* <div className="login_signupToggle"> */}
        {/* <Button
            color="white" 
            colorScheme="blue" 
            bg="#4160D8" 
            borderRadius="5em"
            w="48%"
            variant="solid"
            onClick={() => {
              navigate('/login')
            }}
          >
            Login
          </Button> */}

        {/* <Button
            colorScheme="" 
            bg="" 
            color="black"
            borderRadius="5em"
            w="45%"
            variant="solid"
            onClick={() => {
              navigate('/signup')
            }}
          >
            Signup
          </Button> */}
        {/* </div> */}
        <Loginbox />
      </div>
    </div>
  );
};

export default LoginPage;
