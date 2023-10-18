import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import light from './themes/light';
import dark from './themes/dark';
import Container from './components/Container';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('light');
  const validateTheme = theme === 'dark';

  const themeToggle = () => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={validateTheme ? dark : light}>
        <Container>
          <Header themeToggle={themeToggle} isDark={validateTheme} />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
