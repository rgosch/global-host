import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  font-size: ${pxToRem(18)};
  font-weight: 800;
  border-radius: ${pxToRem(45)};
  display: table;
  text-align: center;
  text-decoration: none;

  ${p => p.contrast && css`
    background-color: ${COLORS.contrast};
  `}
`;
