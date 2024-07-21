"use client";
import {
  Button,
  EditableInput,
  Flex,
  PopoverFooter,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import ColorEditor from "./ColorEditor";
import ContentEditableField from "./ContentEditableField";
import { useEditorContext } from "./EditorContext";

const styleGroup = [
  {
    label: "Background Color",
    Editor: ColorEditor,
    styleKey: "bgColor",
  },
  {
    label: "Border styles",
  },
  {
    label: "Font Color",
    Editor: ColorEditor,
    styleKey: "textColor",
  },
  {
    label: "Font Family",
  },
];

const EditorBar = () => {
  const { editingElement } = useEditorContext();

  return (
    <Flex
      justify={"center"}
      position={"fixed"}
      w="full"
      zIndex={100000}
      left={0}
      top={10}
    >
      <Flex
        rounded={"full"}
        alignItems="center"
        justifyContent="space-between"
        bg="rgba(255, 255, 255, 0.3)" // Set the background color with opacity for the blur effect
        backdropFilter="blur(8px)"
        boxShadow={"lg"}
        px={2}
        py={2}
      >
        {styleGroup.map((group) => {
          const { label, Editor, styleKey } = group;
          return (
            <Popover key={label}>
              <PopoverTrigger>
                <Button rounded={"full"} bg={"none"}>
                  {label}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                bg="rgba(255, 255, 255, 0.3)" // Set the background color with opacity for the blur effect
                backdropFilter="blur(8px)"
                shadow={"lg"}
                border={"none"}
                mt={3}
                rounded={"0.5rem"}
              >
                <PopoverCloseButton color={"white"} />
                <PopoverHeader
                  border={"none"}
                  color={"shade.white"}
                  fontWeight={700}
                  pb={0}
                >
                  {editingElement}
                </PopoverHeader>
                <PopoverBody>
                  {Editor ? (
                    <Editor name={`${editingElement}.${styleKey}`} />
                  ) : (
                    <></>
                  )}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          );
        })}

        <Button rounded={"full"}>Save Updates</Button>
      </Flex>
    </Flex>
  );
};

export default EditorBar;
