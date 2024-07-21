import React, { useState } from "react";
import {
  EditablePreview,
  Input,
  Editable,
  Tooltip,
  StyleProps,
} from "@chakra-ui/react";

interface ContentEditableFieldProps {
  as: any;
  defaultValue: string;
  editablePreviewStyleProps: StyleProps;
  editableWrapperStyleProps?: StyleProps;
  hoverBg: string;
  inputAs: any;
  inputFontSize: string;
  inputMinHeight?: string;
}

const ContentEditableField = (props: ContentEditableFieldProps) => {
  const [canNotEdit, setCanNotEdit] = useState(false);
  const {
    defaultValue,
    editablePreviewStyleProps,
    hoverBg,
    inputAs,
    as,
    inputFontSize,
    inputMinHeight,
    editableWrapperStyleProps,
  } = props;
  return (
    <Editable
      as={as}
      defaultValue={defaultValue}
      isDisabled={canNotEdit}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      {...editableWrapperStyleProps}
      padding={0}
      m={0}
    >
      <Tooltip
        hidden={canNotEdit}
        label="Click to edit"
        shouldWrapChildren={true}
      >
        <EditablePreview
          {...editablePreviewStyleProps}
          padding={0}
          {...(!canNotEdit && {
            _hover: {
              background: hoverBg,
            },
          })}
        />
      </Tooltip>
      <Input
        py={2}
        px={4}
        as={inputAs}
        fontSize={inputFontSize}
        minH={inputMinHeight}
        outline={"none"}
        boxShadow={"none"}
        _focus={{
          outline: "none",
          border: "none",
          background: hoverBg,
          boxShadow: "none",
          ring: "none",
        }}
        _hover={{
          boxShadow: "none",
        }}
        _active={{
          outline: "none",
          boxShadow: "none",
        }}
      />
    </Editable>
  );
};

export default ContentEditableField;
