import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  display: table;
  background-color: ${COLORS.white};
  border-radius: ${pxToRem(42)};
  margin: 0 auto;
  border: ${pxToRem(1.5)} solid ${COLORS.primary};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  display: flex;
`;
