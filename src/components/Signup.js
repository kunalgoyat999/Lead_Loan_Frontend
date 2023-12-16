import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Link,
  Text,
} from "@chakra-ui/react";
import FormController from "../helper/FormController";
import PasswordInput from "../helper/PasswordInput";
import validator from 'validator'; // Import the validator package
import { createUser } from '../services/api';
import { useNavigate } from "react-router-dom";

const SignupBox = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    policyAccepted: false,
  });
  const navigate = useNavigate()

  const [errors, setErrors] = useState({}); // Track form errors

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validator.isEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.username.length < 5) {
      newErrors.username = "Login ID should be at least 5 characters";
    }

    if (formData.password.length < 5) {
      newErrors.password = "Password should be at least 5 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.policyAccepted) {
      newErrors.policyAccepted = "You must accept the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Perform form submission
      try {
        createUser(formData).then((res)=> {
          // console.log("resss", res.data.jwt)
          // if(res.data.message == "admin login succesfully"){
            
            Alert("User Created Successfully")
          // }
        })
      } catch (error) {
        console.error('Create User Error:', error);
      }

    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <FormController
          label="Enter Email Address"
          placeholder="Enter Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        /> */}
        <FormController
          label="Enter Login ID"
          placeholder="Enter your Login Id"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          helpertext={'(Login ID should be atleast 5 characters)'}
        />

        <FormControl  my="1em" isInvalid={errors.password}>
          <FormLabel>Enter Password</FormLabel>
          <PasswordInput
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {
            !errors.password ? <FormHelperText>{'(Password should be atleast 5 character)'}</FormHelperText> :
            <FormErrorMessage>{errors.password}</FormErrorMessage>
            
          }
        </FormControl>

        <FormControl  my="1em" isInvalid={errors.confirmPassword}> 
          <FormLabel>Confirm Password</FormLabel>
          <PasswordInput
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
            <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
        </FormControl>

        <Box className="checkBox_box">
          
          <FormControl  my="1em" >
         
            By signing up, you are agreeing to{" "}
            <Link color="var(--primaryCOlor)"> Privacy Policy</Link>{" "}
              <FormErrorMessage>{errors.policyAccepted}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="blue" bg="#4160D8" w="35%">
            Create
          </Button>
        </Box>
      </form>
    </>
  );
};

export default SignupBox;
