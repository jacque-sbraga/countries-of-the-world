import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from './Router';
import light from './themes/light';
import dark from './themes/dark';
import Container from './components/Container';
import Header from './components/Header';

function App() {
  const darkMode = useSelector((state) => state.reducer.darkMode);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? dark : light}>
        <Container>
          <Header />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
