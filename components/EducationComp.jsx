import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";

const EducationComp = () => {
  return (
    <Box bg={("white", "gray.900")} boxShadow={"2xl"} rounded={"lg"} p={3}>
      <Card>
        <CardHeader>
          <Heading size="md">Education</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Masai School, Bangalore
              </Heading>
              <Text pt="2" fontSize="sm">
                Full Stack Web Development (Jul,2022-Present)
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                University of Mumbai
              </Heading>
              <Text pt="2" fontSize="sm">
                B.E. Mechanical (Jul,2016-Jul,2019)
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Government Polytechnic Thane
              </Heading>
              <Text pt="2" fontSize="sm">
                Diploma in Mechanical Engineering (Jul,2013-Jul,2016)
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default EducationComp;
