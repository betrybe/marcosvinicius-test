import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/themes';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={ theme }>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
