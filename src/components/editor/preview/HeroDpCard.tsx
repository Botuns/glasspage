import {
  Box,
  EditableInput,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ContentEditableField from "../ContentEditableField";

const HeroDpCard = () => {
  return (
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
        <ContentEditableField
          as={Heading}
          inputAs={EditableInput}
          hoverBg="primary.400"
          inputFontSize="2rem"
          defaultValue={"Sam Altman"}
          editablePreviewStyleProps={{
            color: "primary.900",
            padding: 0,
            whiteSpace: "nowrap",
          }}
        />
        <ContentEditableField
          as={Text}
          inputAs={EditableInput}
          hoverBg="primary.400"
          inputFontSize="1rem"
          defaultValue={"Senior, frontend developer"}
          editablePreviewStyleProps={{
            color: "dark",
            padding: 0,
          }}
        />
      </Stack>
    </Flex>
  );
};

export default HeroDpCard;
