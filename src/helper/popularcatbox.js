import { Box, Image, Text } from "@chakra-ui/react";

const Categoriebox = ({ logo, title }) => {
  return (
    <Box className="cat_box">
      <Image width="30%" src={logo} />
      <Text mt="1em" fontWeight="semibold" >
        {title}{" "}
      </Text>
    </Box>
  );
};

export default Categoriebox;
