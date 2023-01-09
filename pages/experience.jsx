import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Box margin={"30px"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
      <Box margin={"30px"}>
        <Heading fontSize={"md"}>1. Full stack Developer at Masai School</Heading>
        <Text>May 2022 - Present</Text>
      </Box>
      <Box margin={"30px"}>
        <Heading fontSize={"md"}>2. Event Manager at Lakshya school</Heading>
        <Text>april 2021 - april 2022</Text>
      </Box>

      <Box margin={"30px"}>
        <Heading fontSize={"md"}>3. Teacher at Lakshya school</Heading>
        <Text>april 2019 - april 2021</Text>
      </Box>
    </Box>
  );
};

export default Experience;
