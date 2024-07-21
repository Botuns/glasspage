import { EditableInput, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ContentEditableField from "../ContentEditableField";
import { useFormContext, useWatch } from "react-hook-form";

const LinkTo = () => {
  const { control } = useFormContext();
  const {
    professionalLinks: {
      linkTo: {
        heading: headingStyles,
        subText: subTextStyles,
        bgColor: cardBg,
      },
    },
  } = useWatch({ control });
  return (
    <Stack w={"full"} spacing={0} bg={cardBg} padding={"1rem"}>
      <ContentEditableField
        as={Text}
        inputAs={EditableInput}
        hoverBg="primary.400"
        inputFontSize="1rem"
        defaultValue={"Github"}
        name={"professionalLinks.linkTo.heading"}
        editablePreviewStyleProps={{
          color: headingStyles.textColor,
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
        name={"professionalLinks.linkTo.subText"}
        editablePreviewStyleProps={{
          color: subTextStyles.textColor,
          padding: 0,
          fontSize: "0.875rem",
        }}
      />
    </Stack>
  );
};

export default LinkTo;
