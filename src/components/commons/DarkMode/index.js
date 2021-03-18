/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const DarkModeWrapper = styled.button`  
  position: fixed;  
  cursor: pointer;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.background.light.contrastColor};
  bottom: 5px;
  right: 5px;

  ${breakpointsMedia({
    xs: css`
      padding: 15px;            
    `,
    md: css`
      padding: 20px;
    `,
  })}
`;

export function DarkMode({ changeMode }) {
  return (
    <DarkModeWrapper onClick={changeMode} />
  );
}

DarkMode.propTypes = {
  changeMode: PropTypes.func.isRequired,
};
