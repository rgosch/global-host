import { createGlobalStyle } from 'styled-components';

import { Montserrat } from 'visual/fonts';
import { COLORS } from 'visual/constants';

export const GlobalStyle = createGlobalStyle`
  ${Montserrat}

  body, html {
    min-height: 100vh;
    background-color: ${COLORS.secondary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
