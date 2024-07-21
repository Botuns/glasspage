import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";

const ProjectItem = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <Box height={"max-content"}>
      <Stack
        height={"max-content"}
        h={"20rem"}
        bg={"primary.900"}
        p={4}
        justifyContent={"space-between"}
      >
        <Stack w={"full"} color="white" pt={"1rem"} spacing={0}>
          <Link
            href="https://unsplash.com/"
            _hover={{ textDecoration: "none" }}
          >
            <HStack alignItems={"center"}>
              <Heading
                textDecoration={"none"}
                as="h3"
                fontSize="24px"
                fontWeight="bold"
                color={"primary.200"}
              >
                {title}
              </Heading>

              {/* <GoLinkExternal /> */}
            </HStack>
          </Link>
          <Text fontSize={"sm"} color={"primary.400"}>
            {desc}
          </Text>
        </Stack>
        <Box position={"relative"} h={"70%"} w={"full"}>
          <Box
            position={"absolute"}
            top={0}
            left={0}
            w={"full"}
            h={"full"}
            bg={"primary.900"}
            opacity={"40%"}
            zIndex={10}
          />
          <Image src={image} objectFit="cover" fill alt="img" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProjectItem;
