import { css } from 'styled-components';

import { RESOLUTIONS } from 'visual/constants';

export const mobile = content => css`
  @media (max-width: ${RESOLUTIONS.mobile.max}px) {
    ${content}
  }
`;

export const mobileTablet = content => css`
  @media (max-width: ${RESOLUTIONS.tablet.max}px) {
    ${content}
  }
`;

export const tablet = content => css`
  @media (min-width: ${RESOLUTIONS.tablet.min}px) and (max-width: ${RESOLUTIONS
      .tablet.max}px) {
    ${content}
  }
`;

export const tabletDesktop = content => css`
  @media (min-width: ${RESOLUTIONS.tablet.min}px) {
    ${content}
  }
`;

export const desktop = content => css`
  @media (min-width: ${RESOLUTIONS.desktop.min}px) {
    ${content}
  }
`;
