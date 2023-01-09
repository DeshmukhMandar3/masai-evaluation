import React from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ProjectsCard = ({ items }) => {
  const router = useRouter();
  function openRepo(link) {
    router.push(link);
  }
  return (
    <div style={{ margin: "20px" }}>
      <Text
        fontSize="25px"
        fontWeight={"bold"}
        textAlign={"center"}
        margin="25px"
      >
        Projects
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        {items &&
          items.map((el) => {
            return (
              <Box
                bg={("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                key={el.id}
                padding={"20px"}
                onClick={() => openRepo(el.html_url)}
              >
                <h3>{el.name}</h3>
                <p>forks-count : {el.forks_count}</p>
                <p>language : {el.language}</p>
                <p>score : {el.score}</p>
              </Box>
            );
          })}
      </SimpleGrid>
    </div>
  );
};

export default ProjectsCard;
