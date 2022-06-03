import { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --desaturated-red: ${theme.color.primary.desaturatedRed};
    --soft-red: ${theme.color.primary.softRed};
    --dark-grayish-red: ${theme.color.neutral.darkGrayishRed};
    --gradient-white-softwhite: ${theme.color.gradient.whiteToSoftWhite};
    --gradient-softred-pink: ${theme.color.gradient.softRedToPink};
    --fs-body: ${theme.typography.body.fontSize};
    --fw-light: ${theme.typography.font.weight.light};
    --fw-regular: ${theme.typography.font.weight.regular};
    --fw-semi-bold: ${theme.typography.font.weight.semiBold};
    --ff-jesefin-sans: ${theme.typography.font.family.josefinSans};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  body {
    font-size: var(--fs-body);
    font-family: var(--ff-jesefin-sans);
  }
`;

export default GlobalStyle;
