import { useEffect, useState } from "react";
import assets from "../assests";
import { Text, Button } from "@chakra-ui/react";
import Loginbox from "../components/login";
import SignupBox from "../components/Signup";
import "../assests/styles.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(status, "fffdsc");
  }, []);

  return (
    <div className="register_box">
      {/* <div>
        <img src={assets.images.LOGIN.BANNER} alt="" />
      </div> */}
      <div className="register_container">
        <Text as="b" fontSize="3xl" m="1">
          Welcome to Fin Access
        </Text>
        {/* <div className="login_signupToggle"> */}

        {/* <Button
            colorScheme= "blue"
            bg="#4160D8"
            color= "white"
            borderRadius="5em"
            w="45%"
            variant="solid"
            onClick={() => {
              navigate('/signup')
            }}
          >
            Create User
          </Button> */}
        {/* </div> */}
        {/* <Loginbox /> */}

        <SignupBox />
      </div>
    </div>
  );
};

export default SignupPage;
