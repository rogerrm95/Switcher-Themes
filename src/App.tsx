import React from 'react';
import { ThemeProvider } from 'styled-components'
import useThemeState from './hooks/useThemeState'; // Hook //

import { Header } from './components/Header'
import { Footer } from './components/Footer';
import { Content } from './components/Content';

import GlobalStyle from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {

  const [theme, setTheme] = useThemeState('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;