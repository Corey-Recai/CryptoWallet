import { eStyle } from 'interfaces';

export const getStyles = (styleObject: eStyle) =>
  Object.entries(styleObject).map(([style, value]) => `${style}: ${value};`);
