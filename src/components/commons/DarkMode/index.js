/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import darkmodeOff from './animations/darkModeOff.json';
import darkmodeOn from './animations/darkModeOn.json';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const DarkModeWrapper = styled.button`  
  position: fixed;  
  cursor: pointer;
  border-radius: 5px;  
  background-color: ${({ theme }) => theme.colors.background.light.contrastColor};
  bottom: 15px;
  right: 15px;

  ${breakpointsMedia({
    xs: css`
      width: 50px;
      height: 30px;
    `,
    md: css`
      width: 60px;
      height: 40px;
    `,
  })}
`;

export function DarkMode({ changeMode, isDarkMode }) {
  return (
    <DarkModeWrapper
      onClick={changeMode}
    >
      <Lottie
        config={{
          animationData: isDarkMode
            ? darkmodeOn // https://lottiefiles.com/16544-dark-mode-on
            : darkmodeOff, // https://lottiefiles.com/16545-dark-mode-off
        }}
      />
    </DarkModeWrapper>
  );
}

DarkMode.propTypes = {
  changeMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
