/**
 * Scaling method of the line-height regarding its given font-size.
 * This scaling formula also exists in scss utils function p-line-height.
 * @param fontSize
 * @returns number
 */
export const lineHeight = (fontSize: number): number => {
  const e = 2.71828;
  const exactLineHeightFactor = 0.911 / ( 2.97 + 0.01 * Math.pow( e, 0.2 * fontSize ) ) + 1.2;
  const exactLineHeightPx = fontSize * exactLineHeightFactor;
  let remainingPx = exactLineHeightPx % 4;

  if (remainingPx > 2) {
    remainingPx = remainingPx - 4;
  }

  return exactLineHeightPx - remainingPx;
};

