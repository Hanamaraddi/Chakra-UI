import { PlusSquareIcon } from "@chakra-ui/icons";
import { Heading, HStack } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <HStack bg="skyblue" h="50px">
        <PlusSquareIcon boxSize={25}></PlusSquareIcon>
        <Heading>PhotoPlus</Heading>
      </HStack>
    </div>
  );
};
