import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';
import { Button } from 'visual/styles/Button';

export const Container = styled.div`
  background-color: ${COLORS.white};
  margin: 10px;
  border: ${pxToRem(1)} solid ${COLORS.border};
  border-radius: ${pxToRem(3)};
  position: relative;

  ${p => p.isBestSeller && css`
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: ${pxToRem(10)};
      background-color: ${COLORS.contrast};
      border-top-left-radius: ${pxToRem(3)};
      border-top-right-radius: ${pxToRem(3)};
      position: absolute;
      top: ${pxToRem(-8)};
    }
  `}

  ${p => p.isBestSeller && css`
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: ${pxToRem(5)};
      background-color: ${COLORS.contrast};
      border-bottom-left-radius: ${pxToRem(3)};
      border-bottom-right-radius: ${pxToRem(3)};
      position: absolute;
      bottom: ${pxToRem(-5)};
    }
  `}
`;

export const Icon = styled.img`
  width: ${pxToRem(45)};
  margin: 0 auto;
`;

export const Section = styled.div`
  padding: 30px;

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

export const Hire = styled(Button)`
  margin: ${pxToRem(20)} 0;
`;

export const FreeDomain = styled(PlainText)`
  font-weight: bold;
  font-size: ${pxToRem(14)};
`;

export const SaveContainer = styled.div`
  text-align: center;
  margin-top: ${pxToRem(5)};
`;

export const SaveAmount = styled(PlainText)`
  color: ${COLORS.primary};
  display: inline-block;
  margin-right: ${pxToRem(3)}
`;
