import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  background-color: ${COLORS.white};
  margin: 10px;
  border: ${pxToRem(1)} solid ${COLORS.border};
  border-radius: ${pxToRem(3)};
`;

export const Icon = styled.img`
  width: ${pxToRem(45)};
  margin: 0 auto;
`;

export const Section = styled.div`
  padding: 30px 0;

  &:not(:last-child) {
    border-bottom: ${pxToRem(1)} solid ${COLORS.border};
  }
`;

export const Title = styled.h2`
  font-size: ${pxToRem(18)};
  text-align: center;
  color: ${COLORS.primary};
  font-weight: bold;
  margin-top: 10px;
`;

export const TotalPrices = styled.div`
  font-size: ${pxToRem(12)};
  text-align: center;
  color: ${COLORS.dark};
`;

export const OldTotalPrice = styled.span`
  text-decoration: line-through;
`;

export const NewTotalPrice = styled.span`
  font-weight: bold;
`;
