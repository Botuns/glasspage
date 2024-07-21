"use client";
import { Box, Flex, Heading, Stack, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Projects from "./preview/Projects";
import HeroText from "./preview/HeroText";
import HeroDpCard from "./preview/HeroDpCard";
import LinkTo from "./preview/LinkTo";

const Preview = () => {
  return (
    <Stack spacing={"7rem"} w={"full"} px="10%" bg={"primary.700"} py={"3rem"}>
      <Flex
        padding={"1rem"}
        h={"50vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"4rem"}
      >
        <HeroText />
        <HeroDpCard />
      </Flex>
      <Stack padding={"1rem"} spacing={1}>
        <Flex gap={"2rem"}>
          <LinkTo />
          <LinkTo />
        </Flex>
        <Flex gap={"2rem"}>
          <LinkTo />
          <LinkTo />
        </Flex>
      </Stack>
      <Projects />
    </Stack>
  );
};

export default Preview;
