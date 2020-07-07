import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  display: table;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  border-radius: ${pxToRem(42)};
  border: ${pxToRem(1.5)} solid ${COLORS.primary};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  color: ${COLORS.primary};
  font-size: ${pxToRem(12)};
  margin-bottom: ${pxToRem(10)};
  text-align: center;
  font-weight: bold;
`;
