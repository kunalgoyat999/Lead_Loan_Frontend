import { useEffect, useState } from "react";
import assets from "../assests";
import { Text, Button, Box } from "@chakra-ui/react";
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
    <Box display="flex" justifyContent="space-evenly">
      <div style={{ flex: "1", margin: "1%" }}>
        <img src={assets.images.LOGIN.BANNER} alt="" style={{ width: "500px" }} />
      </div>
      <div style={{ flex: "1", margin: "1%" }}>
        <Text as="b" fontSize="3xl" m="1">
          Welcome to Fin Access
        </Text>
        <Loginbox />
      </div>
    </Box>
  );
};


export default LoginPage;
