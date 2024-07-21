import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";

const workData = [
  {
    id: "nblbns",
    title: "Project One",
    desc: "Description for Project 1",
    image:
      "https://images.unsplash.com/photo-1639861558729-16fff52bd7c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    baseColor: "#588B8B",
  },
  {
    id: "knvaly",
    title: "Project Two",
    desc: "Description for Project 2",
    image:
      "https://cdn.dribbble.com/userupload/10197479/file/original-0f5cac8c4e668443967ee0e50fdbcac6.png?resize=2048x1536",
    baseColor: "#C8553D",
  },
  {
    id: "jkvnou",
    title: "Project Three",
    desc: "Description for Project 3",
    image:
      "https://cdn.dribbble.com/userupload/10172783/file/original-5a358c07634088cc35ce3f1894a88c51.png?resize=2048x1536",
    baseColor: "#38497D",
  },
  {
    id: "avaonv",
    title: "Project Four",
    desc: "Description for Project 4",
    image:
      "https://cdn.dribbble.com/userupload/10182826/file/original-684ad28563e7e1ddd16b961a815e22db.jpg?resize=2048x1536",
    baseColor: "#78588C",
  },
];

const Projects = () => {
  return (
    <Box id={"work"}>
      <Stack spacing={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {workData.map((item) => (
            <ProjectItem {...item} key={item.id} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Projects;
