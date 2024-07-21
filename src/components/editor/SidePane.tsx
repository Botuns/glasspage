import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SidePane = () => {
  return (
    <Box
      padding={"1rem"}
      bg={"dark"}
      position={"fixed"}
      left={0}
      top={0}
      h={"100vh"}
    >
      <Text fontWeight={700} fontSize={"2rem"} color={"shade.white"}>
        Customize your page
      </Text>
    </Box>
  );
};

export default SidePane;
