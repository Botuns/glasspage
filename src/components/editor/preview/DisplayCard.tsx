import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  EditableInput,
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
import ContentEditableField from "../ContentEditableField";

const DisplayCard = ({
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
        <Stack w={"full"} color="white" pt={"0.5rem"} spacing={0}>
          {/* todo: figure out how to make a link */}
          <ContentEditableField
            as={Heading}
            inputAs={EditableInput}
            hoverBg="primary.400"
            inputFontSize="2rem"
            defaultValue={title}
            editablePreviewStyleProps={{
              padding: 0,
              whiteSpace: "nowrap",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "bold",
              color: "primary.200",
            }}
          />

          <ContentEditableField
            as={Text}
            inputAs={EditableInput}
            hoverBg="primary.400"
            inputFontSize="1rem"
            defaultValue={desc}
            editablePreviewStyleProps={{
              color: "primary.400",
              padding: 0,
              fontSize: "sm",
            }}
          />
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

export default DisplayCard;
