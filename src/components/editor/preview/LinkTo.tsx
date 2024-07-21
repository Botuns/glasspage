import { EditableInput, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ContentEditableField from "../ContentEditableField";

const LinkTo = () => {
  return (
    <Stack w={"full"} spacing={0} bg={"primary.900"} padding={"1rem"}>
      <ContentEditableField
        as={Text}
        inputAs={EditableInput}
        hoverBg="primary.400"
        inputFontSize="1rem"
        defaultValue={"Github"}
        editablePreviewStyleProps={{
          color: "shade.white",
          padding: 0,
          whiteSpace: "nowrap",
          fontSize: "1rem",
          fontWeight: 700,
        }}
      />
      <ContentEditableField
        as={Text}
        inputAs={EditableInput}
        hoverBg="primary.400"
        inputFontSize="1rem"
        defaultValue={"Checkout my open source projects"}
        editablePreviewStyleProps={{
          color: "primary.400",
          padding: 0,
          fontSize: "0.875rem",
        }}
      />
    </Stack>
  );
};

export default LinkTo;
