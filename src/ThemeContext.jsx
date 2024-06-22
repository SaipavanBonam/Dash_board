
import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

export const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.palette.mode === 'light' ? darkTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
