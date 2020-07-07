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
  font-size: ${pxToRem(22)};
  text-align: center;
  color: ${COLORS.primary};
  font-weight: 800;
  margin-top: 10px;
`;

export const TotalPrices = styled.div`
  text-align: center;
`;

export const PlainText = styled.span`
  font-size: ${pxToRem(12)};
  text-align: center;
  color: ${COLORS.dark};
  display: table;
  margin: 0 auto;
`;

export const OldTotalPrice = styled(PlainText)`
  text-decoration: line-through;
  display: inline;
`;

export const NewTotalPrice = styled(PlainText)`
  font-weight: bold;
  display: inline;
`;

export const ParcelSection = styled.div`
  color: ${COLORS.primary};
  font-size: ${pxToRem(18)};
  text-align: center;
  margin-top: 5px;
`;

export const ParcelAmount = styled.span`
  font-size: ${pxToRem(22)};
  font-weight: 800;
  margin-left: ${pxToRem(3)};
`;
