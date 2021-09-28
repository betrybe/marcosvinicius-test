import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/themes';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
