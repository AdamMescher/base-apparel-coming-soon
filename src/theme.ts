const theme = {
  color: {
    primary: {
      desaturatedRed: "hsl(0, 36%, 70%)",
      softRed: "hsl(0, 93%, 68%)"
    },
    neutral: {
      darkGrayishRed: "hsl(0, 6%, 24%)"
    },
    gradient: {
      whiteToSoftWhite:
        "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
      softRedToPink:
        "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))"
    }
  },
  typography: {
    body: {
      fontSize: "16px"
    },
    font: {
      family: {
        josefinSans: "'Josefin Sans', sans-serif"
      },
      weight: {
        light: 300,
        regular: 400,
        semiBold: 600
      }
    }
  }
};

export default theme;
