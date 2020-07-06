import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.header`
  background-color: ${COLORS.primary};
  padding: ${pxToRem(17)} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;

export const Logo = styled.img`
  max-height: ${pxToRem(40)};
`;
