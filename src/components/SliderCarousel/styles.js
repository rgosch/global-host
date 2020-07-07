import styled, { css } from 'styled-components';

import { pxToRem } from 'logic/pxToRem';
import { mobileTablet } from 'visual/medias';

export const Container = styled.div`
  overflow: hidden;
  margin-top: ${pxToRem(40)};

  .slide {
    ${mobileTablet(css`
      max-width: 80%;
    `)}
  }
`;
