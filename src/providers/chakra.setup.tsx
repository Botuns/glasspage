"use client";

import { theme } from "@/theme";
import { chakra, ChakraProvider } from "@chakra-ui/react";
import { DM_Sans } from "next/font/google";

interface ChakraSetupProps {
  children: React.ReactNode;
}

const dm_sans = DM_Sans({ subsets: ["latin"] });

const ChakraSetup = ({ children }: ChakraSetupProps) => {
  return (
    <ChakraProvider theme={theme}>
      <chakra.main className={dm_sans.className}>{children}</chakra.main>
    </ChakraProvider>
  );
};

export default ChakraSetup;
