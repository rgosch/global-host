import styled, { css } from 'styled-components';

import { pxToRem } from 'logic/pxToRem';
import { COLORS } from 'visual/constants';

export const Container = styled.label`
  padding: ${pxToRem(10)} ${pxToRem(15)};
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  &, label {
    cursor: pointer;
  }

  ${p => p.selected && css`
    border-radius: ${pxToRem(42)};
    background-color: ${COLORS.primary};
  `}
`;

export const Input = styled.input`
  position: absolute;
  left: -999pc;
  right: -999pc;
`;

export const FakeInput = styled.label`
  width: ${pxToRem(21)};
  height: ${pxToRem(21)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${pxToRem(21)};
  position: relative;
  border: ${pxToRem(2)} solid ${COLORS.primary};

  ${p => p.selected && css`
    border-color: ${COLORS.secondary};

    &:after {
      content: '';
      display: block;
      width: ${pxToRem(21 - 10)};
      height: ${pxToRem(21 - 10)};
      border-radius: ${pxToRem(21 - 10)};
      background-color: ${COLORS.secondary};
    }
  `}
`;

export const Title = styled.label`
  font-size: ${pxToRem(14)};
  padding-left: ${pxToRem(5)};
  color: ${COLORS.primary};

  ${p => p.selected && css`
    color: ${COLORS.secondary};
    font-weight: bold;
  `}
`;
