import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
`;

const darkTheme = {
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#bb86fc',
  },
};

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;