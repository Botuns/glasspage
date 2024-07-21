import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorEditor = () => {
  const [color, setColor] = useState("#aabbcc");
  return (
    <Box className="color-editor">
      <HexColorPicker color={color} onChange={setColor} />
    </Box>
  );
};

export default ColorEditor;
