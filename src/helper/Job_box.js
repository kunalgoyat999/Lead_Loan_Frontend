import { Box, Button, Image, Text } from "@chakra-ui/react";
import Job_Image from "../assests/images/common/JobIcon.png";
import "../assests/styles.css";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BiCalendarMinus, BiLogoTelegram } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobBox = ({ logo, title, type, location, date }) => {
  let [bookmark, setBookmark] = useState(false);
  let navigate = useNavigate()

  return (
    <Box className="job_box" onClick={()=>navigate('/job-details',{ state: { data: {title,type,location,date} } })}>
      <Box className="job_box_firstsec">
        <Box>
          <Image src={Job_Image} w="30%" mr="3" mb="3" />
          <Box>
            <Text
              borderRadius="15"
              background="#E1E7FF"
              p="0.4em"
              px="4"
              fontSize="sm"
              fontWeight="semibold"
            >
              {" "}
              {type}
            </Text>
          </Box>
        </Box>

        <Button
          bg="none"
          _hover={{ background: "none" }}
          className="bookmark_icon"
          onClick={() => {
            setBookmark(!bookmark);
          }}
        >
          {bookmark ? <BsBookmarkFill /> : <BsBookmark />}
        </Button>
      </Box>

      <Text fontSize="lg" mt="3" fontWeight="semibold">
        {title}
      </Text>

      <Box className="job_box_secondsec">
        <Box>
          <FaBagShopping />
          <Text fontWeight="medium" fontSize="small">
            mark inc
          </Text>
        </Box>
        <Box>
          <HiOutlineLocationMarker />
          <Text fontWeight="medium" fontSize="small">
            {location}
          </Text>
        </Box>
        <Box>
          <BiCalendarMinus />
          <Text fontWeight="medium" fontSize="small">
            {date}
          </Text>
        </Box>
      </Box>

      <Box className="job_box_thirdsec">
        <Button colorScheme="blue" bg="#4160D8" fontSize="small" w="60%">
          Apply
        </Button>
        <Button colorScheme="blue" variant="outline">
          <BiLogoTelegram />
        </Button>
        <Button colorScheme="blue" variant="outline">
          <AiFillMessage />
        </Button>
      </Box>
    </Box>
  );
};

export default JobBox;
