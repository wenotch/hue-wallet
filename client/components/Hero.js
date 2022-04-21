import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Flex>
      <Box width={"50%"} mt="100px">
        <Text fontWeight={"bold"} color={"white"} fontSize="35px">
          Internet Banking
        </Text>
        <Text color={"whiteAlpha.800"}>
          Enjoy the convenience of banking on your own terms, wherever and
          whenever. Hue bank provides you a secure way to access your accounts,
          manage payments, check your statements and much more, 24 hours a day.
        </Text>
        <Box mt="30px">
          {" "}
          <Link
            href="/signup"
            bg="hue.base"
            color={"white"}
            px="20px"
            py="10px"
          >
            Get Started
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default Hero;
