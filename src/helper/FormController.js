import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const FormController = ({ label, placeholder, name, value, onChange, error, helpertext }) => {
  return (
    <FormControl my="1em" isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <Input
        fontSize="small"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {
        error ? 
      <FormErrorMessage>{error}</FormErrorMessage> : <FormHelperText>{helpertext}</FormHelperText>
}
    </FormControl>
  );
};

export default FormController;
