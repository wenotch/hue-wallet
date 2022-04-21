import React from "react";
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Link,
} from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex padding={"40px 0"} align={"center"} justify="space-between">
      <Box>
        <Link
          p={"7px 0"}
          borderRadius="5px"
          href="/"
          fontWeight={"bold"}
          color="white"
          fontSize={"xl"}
          _hover={{
            color: "hue.base",
            bg: "white",
            textDecoration: "none",
          }}
        >
          Hue Wallet
        </Link>
      </Box>

      <Flex align={"center"}>
        <Link color="white">How it works</Link>
        <Link
          href="/login"
          border={"1px solid white"}
          color="white"
          rounded={"full"}
          p="5px 20px"
          mx="25px"
          _hover={{
            bg: "hue.base",
          }}
        >
          Login
        </Link>
        <Link
          href="/signup"
          border={"1px solid"}
          borderColor="hue.base"
          color="white"
          rounded={"full"}
          p="5px 20px"
          bg="hue.base"
          _hover={{
            bg: "transparent",
          }}
        >
          Sign up
        </Link>
      </Flex>
    </Flex>
  );
}
