import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Link,
  Checkbox,
  useToast
} from "@chakra-ui/react";
import PasswordInput from "../helper/PasswordInput";
import FormController from "../helper/FormController";
import { Link as Links } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const LoginBox = () => {
  const [formData, setFormData] = useState({
    adminid: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    adminid: "",
    password: "",
  });
  let toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (loginCredentials) => {
    try {
      login(loginCredentials).then((res) => {
        console.log("resss", res);
        if (
          res.data.message == "admin login succesfully" ||
          res.data.message == "user login succesfully"
        ) {
          localStorage.setItem("jwt_token", res.data.jwt);
          localStorage.setItem("role", res.data.user.role);
          localStorage.setItem("userName", res.data.user.adminid);
          let userDetail = res.data.user;

          if (res.data.user.role != "ADMIN") {
            localStorage.setItem("empolyeeId", res.data.user.id);
          }
          navigate("/dashboard");

      }).catch(error => {
        
        if(error.response.status === 404 || error.response.status === 401){
          let waring =  "Invalid Credentials" ;
          toast({
            title: `${waring}`,
            status: "warning",
            position: "top-right",
            isClosable: true,
          })
        }
        
        }
      });
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const newErrors = {};

    if (!formData.adminid.trim()) {
      newErrors.adminid = "Login ID is required.";
    }

    if (!formData.password.trim() || formData.password === "") {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Perform your login logic here
      // You can access form data with formData.adminid and formData.password
      console.log(formData);
      handleLogin(formData);
      // navigate('/')
    }
  };

  return (
    <>
      <FormController
        label="Login Id"
        placeholder="Enter your Login Id"
        name="adminid"
        value={formData.adminid}
        onChange={(e) => setFormData({ ...formData, adminid: e.target.value })}
        error={errors.adminid}
      />

      <FormControl isRequired my="1em" isInvalid={!!errors.password}>
        <FormLabel>Enter your Password</FormLabel>
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>

      <Box className="checkBox_box">
        <Checkbox size="sm" colorScheme="blue">
          Remember Credentials
        </Checkbox>

        <Link color="red.400" fontSize="sm">
          <Links to="/resetPassword">Forgot Password</Links>
        </Link>
      </Box>
      <Box className="login_submit">
        <Button
          type="submit"
          colorScheme="blue"
          bg="#4160D8"
          size="md"
          my="1em"
          w="30%"
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </Box>
    </>
  );
};

export default LoginBox;
