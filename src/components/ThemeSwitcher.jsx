import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
     
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeProvider>
  );
};

export default App;
