import { StrictMode } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import GlobalStyle from './components/GlobalStyle';
import theme from './theme';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
