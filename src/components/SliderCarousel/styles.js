import styled, { css } from 'styled-components';

import { pxToRem } from 'logic/pxToRem';
import { mobile } from 'visual/medias';

export const Container = styled.div`
  overflow: hidden;
  margin-top: ${pxToRem(40)};

  ul {
    list-style-type: none;
    
    ${mobile(css`
      display: flex;
      width: 300% !important;
    `)}
    li {
      ${mobile(css`
        /* width: 100% !important; */
      `)}
    }
  }
`;
