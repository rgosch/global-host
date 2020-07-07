import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: ${pxToRem(350)};
  background-color: ${COLORS.white};
  border-radius: ${pxToRem(20)};
  margin: 0 auto;
  border: ${pxToRem(1)} solid ${COLORS.primary};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;
