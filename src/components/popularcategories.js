import { Box, Text } from "@chakra-ui/react";
import Categoriebox from "../helper/popularcatbox";
import engineer from "../assests/images/common/Engeneeringlogo@2x.png";
import maintance_facility from "../assests/images/common/maintance_facility.png";
import Humar_Resource from "../assests/images/common/Humar_Resource.png";
import technology from "../assests/images/common/technology.png";
import Excutive_management from "../assests/images/common/Excutive-management.png";
import Transportation from "../assests/images/common/Transportation.png";
import Education from "../assests/images/common/Education.png";
import Sales_Marketing from "../assests/images/common/Sales_Marketing.png";

const Popularcaegories = () => {
  return (
    <>
    <Box w="80%" m="auto">
      <Text fontSize="2xl" my="10" fontWeight="semibold">
        {" "}
        Popular Categories
      </Text>
      <Box className="popular_container">
        <Categoriebox title="Engineering" logo={engineer} />
        <Categoriebox title="Property Maintenance and Facilities" logo={maintance_facility} />
        <Categoriebox title="Human Resources" logo={Humar_Resource} />
        <Categoriebox title="Technology" logo={technology} />
        <Categoriebox title="Executive/Management" logo={Excutive_management} />
        <Categoriebox title="Transportation" logo={Transportation} />
        <Categoriebox title="Sales and Marketing" logo={Sales_Marketing} />
        <Categoriebox title="Education" logo={Education} />
      </Box>
    </Box>
    </>
  );
};

export default Popularcaegories;
