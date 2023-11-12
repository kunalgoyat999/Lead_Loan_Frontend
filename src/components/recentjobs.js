import { Box, Button, Text } from "@chakra-ui/react";
import JobBox from "../helper/Job_box";

const Recentjobs = () => {
  return (
    <>
      <Box w="80%" m="auto">
        <Text fontSize="2xl" my="10" fontWeight="semibold">
          {" "}
          Recent Jobs
        </Text>
        <Box className="recentjobs_container">
          <JobBox
            title="Software Manual tester"
            type="Permanent"
            company="Marks INC."
            location="Mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software Manual tester"
            type="Permanent"
            company="Marks INC."
            location="Mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software Manual tester"
            type="Permanent"
            company="Marks INC."
            location="Mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software Manual tester"
            type="Permanent"
            company="Marks INC."
            location="Mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software Manual tester"
            type="Permanent"
            company="Marks INC."
            location="Mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software Manual tester"
            type="Permanent"
            company="Marks INC."
            location="Mumbai, india"
            date="9th nov 2022"
          />
        </Box>
        <Button variant='outline' my='2em' mx='40%' colorScheme='blue'>Load More</Button>
      </Box>
    </>
  );
};

export default Recentjobs;
