import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../schema/themeSchema';
import { useAppSelector } from '../app/hooks';

const WithTheme = ({ children }: any) => {
  const { mode } = useAppSelector((state) => state.app);
  return (
    <ThemeProvider theme={mode == 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default WithTheme;
