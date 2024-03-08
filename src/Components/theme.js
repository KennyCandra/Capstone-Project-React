import { extendTheme } from "@chakra-ui/react";

const theme1 = extendTheme({
  fonts: {
    heading: "'Markazi Text', serif",
    body: "'Karla', sans-serif",
  },
  styles: {
    global: {
      "h1, h2, h3, h4, h5, h6": {
        fontFamily: "'Markazi Text', serif",
        fontOpticalSizing: "auto",
        fontWeight: "500",
        fontStyle: "normal",
      },
      h1: {
        fontSize: "40px",
      },
      body: {
        fontFamily: "'Karla', sans-serif",
        fontOpticalSizing: "auto",
        fontWeight: "300",
        fontStyle: "normal",
        color: "black",
      },
    },
  },
});

export default theme1;