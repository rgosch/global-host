import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Badge = styled.span`
  background-color: ${COLORS.tertiary};
  color: ${COLORS.white};
  font-size: ${pxToRem(12)};
  font-weight: bold;
  padding: 3px 5px;
  border-radius: ${pxToRem(22)};
`;
