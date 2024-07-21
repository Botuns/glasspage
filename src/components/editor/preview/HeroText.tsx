import { EditableTextarea, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ContentEditableField from "../ContentEditableField";

const HeroText = () => {
  return (
    <Stack w={"full"}>
      <ContentEditableField
        as={Heading}
        inputAs={EditableTextarea}
        hoverBg="primary.900"
        inputFontSize="2rem"
        inputMinHeight="7rem"
        defaultValue={"Transform Your Ideas into Reality"}
        editableWrapperStyleProps={{ color: "shade.white" }}
        editablePreviewStyleProps={{
          color: "primary.200",
          padding: 0,
        }}
      />
      <ContentEditableField
        as={Text}
        inputAs={EditableTextarea}
        hoverBg="primary.900"
        inputFontSize="1rem"
        inputMinHeight="7rem"
        editableWrapperStyleProps={{ color: "shade.white" }}
        defaultValue={
          "Build, innovate, and scale with our powerful development tools and resources. Join a community of creators and push the boundaries of what's possible. Your journey to extraordinary starts here."
        }
        editablePreviewStyleProps={{
          color: "shade.white",
          padding: 0,
        }}
      />
    </Stack>
  );
};

export default HeroText;
