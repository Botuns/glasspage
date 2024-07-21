"use client";

import EditorBar from "@/components/editor/EditorBar";
import React from "react";
import { chakra } from "@chakra-ui/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <chakra.main>
      <EditorBar />
      {children}
    </chakra.main>
  );
};

export default Layout;
