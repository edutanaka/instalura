import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme, { colors } from '../../../../theme';
import GlobalStyle from '../../../../theme/GlobalStyle';

export default function WebsiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={() => ({
      // colors: (isDarkMode
      //   ? colors.modes.dark
      //   : colors),
      colors,
      ...theme,
    })}
    >
      <GlobalStyle />
      {/* <DarkMode isDarkMode={isDarkMode} changeMode={changeMode} /> */}
      { children}

    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
