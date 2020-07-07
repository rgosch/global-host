import { RESOLUTIONS } from "visual/constants";

export function checkBreakpoint(width) {
  const isMobile = width <= RESOLUTIONS.mobile.max;
  const isTablet = width >= RESOLUTIONS.tablet.min && width <= RESOLUTIONS.tablet.max;

  return {
    isMobile,
    isTablet,
  };
}

/**
 * Get Visible Slides by Resolution
 * 
 * @param {Number} width 
 * 
 * @returns {Number}
 */
export function getVisibleSlides(width) {
  let value = 3;
  const { isMobile, isTablet } = checkBreakpoint(width);

  if (isMobile) value = 1;
  if (isTablet) value = 2;

  return value;
}
