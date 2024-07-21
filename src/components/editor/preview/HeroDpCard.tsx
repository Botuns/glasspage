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
import { useFormContext, useWatch } from "react-hook-form";

const HeroDpCard = () => {
  const { control } = useFormContext();
  const {
    hero: {
      dp: { heading: heroStyles, subText: subTextStyles, bgColor: cardBg },
    },
  } = useWatch({ control });
  return (
    <Flex
      bg={cardBg}
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
          name="hero.dp.heading"
          inputAs={EditableInput}
          hoverBg="primary.400"
          inputFontSize="2rem"
          defaultValue={"Sam Altman"}
          editablePreviewStyleProps={{
            color: heroStyles.textColor,
            bg: heroStyles.bgColor,
            padding: 0,
            whiteSpace: "nowrap",
          }}
        />
        <ContentEditableField
          as={Text}
          name="hero.dp.subText"
          inputAs={EditableInput}
          hoverBg="primary.400"
          inputFontSize="1rem"
          defaultValue={"Senior, frontend developer"}
          editablePreviewStyleProps={{
            color: subTextStyles.textColor,
            bg: subTextStyles.bgColor,
            padding: 0,
          }}
        />
      </Stack>
    </Flex>
  );
};

export default HeroDpCard;
