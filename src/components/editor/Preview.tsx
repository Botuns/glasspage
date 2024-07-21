"use client";
import { Box, Flex, Heading, Stack, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Projects from "./preview/Projects";

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
        <Stack w={"full"}>
          <Heading color={"primary.200"}>
            Transform Your{" "}
            <chakra.span color={"primary.200"}>Ideas</chakra.span> into Reality
          </Heading>
          <Text color={"shade.white"}>
            Build, innovate, and scale with our powerful development tools and
            resources. Join a community of creators and push the boundaries of
            what&apos;s possible. Your journey to extraordinary starts here.
          </Text>
        </Stack>
        <Flex
          bg={"primary.200"}
          padding={"1rem"}
          width={"full"}
          h={"100%"}
          alignItems={"end"}
          gap={"1rem"}
        >
          <Box position={"relative"} width={"50%"} h={"100%"}>
            <Image
              fill
              alt=""
              objectFit="cover"
              src={
                "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
              }
            />
          </Box>
          <Stack w={"full"} spacing={0}>
            <Heading color={"primary.900"} whiteSpace={"nowrap"}>
              Sam Altman
            </Heading>
            <Text color={"dark"}>Senior, frontend developer</Text>
          </Stack>
        </Flex>
      </Flex>
      <Stack padding={"1rem"} spacing={1}>
        <Flex gap={"2rem"}>
          <Stack w={"full"} spacing={0} bg={"primary.900"} padding={"1rem"}>
            <Heading color={"white"} fontSize={"1rem"}>
              Github
            </Heading>
            <Text color={"shade.white"}>Senior, frontend developer</Text>
          </Stack>
          <Stack w={"full"} spacing={0} bg={"primary.900"} padding={"1rem"}>
            <Heading color={"white"} fontSize={"1rem"}>
              Blog
            </Heading>
            <Text color={"shade.white"}>Senior, frontend developer</Text>
          </Stack>
        </Flex>
        <Flex gap={"2rem"}>
          <Stack w={"full"} spacing={0} bg={"primary.900"} padding={"1rem"}>
            <Heading color={"white"} fontSize={"1rem"}>
              LinkedIn
            </Heading>
            <Text color={"shade.white"}>Senior, frontend developer</Text>
          </Stack>
          <Stack w={"full"} spacing={0} bg={"primary.900"} padding={"1rem"}>
            <Heading color={"white"} fontSize={"1rem"}>
              Resume
            </Heading>
            <Text color={"shade.white"}>Senior, frontend developer</Text>
          </Stack>
        </Flex>
      </Stack>
      <Projects />
    </Stack>
  );
};

export default Preview;
