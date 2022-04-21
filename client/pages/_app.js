import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;

const colors = {
  hue: {
    base: "#A5396F",
  },
};

export const theme = extendTheme({ colors });
