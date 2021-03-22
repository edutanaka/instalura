import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme, { colors } from '../src/theme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function changeMode() {
    return setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      { isDarkMode === false && (
        <ThemeProvider theme={() => {
          const mix = { colors, ...theme };
          return mix;
        }}
        >
          <GlobalStyle />
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Component changeMode={changeMode} isDarkMode={isDarkMode} {...pageProps} />
        </ThemeProvider>
      )}

      { isDarkMode === true && (
        <ThemeProvider theme={() => {
          const mix = { colors: colors.modes.dark, ...theme };
          return mix;
        }}
        >
          <GlobalStyle />
          { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <Component changeMode={changeMode} isDarkMode={isDarkMode} {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}
