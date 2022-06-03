import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/components/GlobalStyle';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ margin: '3em' }}>
          <GlobalStyle />
          <Story />
        </div>
      </ThemeProvider>
    );
  },
];
