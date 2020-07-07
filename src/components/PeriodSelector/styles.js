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
`;
