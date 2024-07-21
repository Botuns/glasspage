import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useFormContext, useWatch } from "react-hook-form";

const ColorEditor = ({ name }: { name: string }) => {
  const { setValue, control } = useFormContext();
  const value = useWatch({ name, control });
  return (
    <Box className="color-editor">
      <HexColorPicker
        color={value}
        onChange={(color) => setValue(name, color)}
      />
    </Box>
  );
};

export default ColorEditor;
