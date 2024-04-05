// https://github.com/facebook/stylex/issues/281
// https://open-props.style/#colors

import * as stylex from '@stylexjs/stylex';
import { colors as opcolors } from '@stylexjs/open-props/lib/colors.stylex';
// import { fonts as opfonts } from '@stylexjs/open-props/lib/fonts.stylex';
import { tokens } from './tokens.stylex';

// import { light } from './light'; //Will not work

// -- Use this
// export const lightTheme = stylex.createTheme(color, {
//   primaryText: 'red',
//   backgroundColor: 'red',
// });
// -- OR --
// Need to define light var here !! CANNOT use import
export const light = {
  bgColor: opcolors.gray1,
  colorText: opcolors.gray8,

  colorButton: opcolors.cyan11,
  bgColorButton: opcolors.cyan2,


};
export const lightTheme = stylex.createTheme(tokens, light);

export const dark = {
  bgColor: opcolors.gray11,
  colorText: opcolors.gray2,

  colorButton: opcolors.cyan2,
  bgColorButton: opcolors.cyan11,

}
export const darkTheme = stylex.createTheme(tokens, dark);

const DARK = '@media (prefers-color-scheme: dark)';
export const autoTheme = stylex.createTheme(tokens, {
  colorText: { default: light.colorText, [DARK]: dark.colorText },
  bgColor: { default: light.bgColor, [DARK]: dark.bgColor },
});

// https://github.com/facebook/stylex/discussions/227#discussioncomment-7915325
