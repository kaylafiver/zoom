// https://github.com/facebook/stylex/issues/281

import * as stylex from '@stylexjs/stylex';
import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import { color } from './color.stylex';

// import { light } from './light'; //Will not work

// -- Use this
// export const lightTheme = stylex.createTheme(color, {
//   primaryText: 'red',
//   backgroundColor: 'red',
// });
// -- OR --
// Need to define light var here !! CANNOT use import
const light = {
  backgroundColor: colors.gray1,
  colorCircleButton: colors.cyan11,
  bgColorCircleButton: colors.cyan2,

  primaryText: 'red',
};
export const lightTheme = stylex.createTheme(color, light);


const dark = {
  backgroundColor: colors.gray11,
  colorCircleButton: colors.cyan2,
  bgColorCircleButton: colors.cyan11,

  primaryText: 'grey',
}
export const darkTheme = stylex.createTheme(color, dark);

const DARK = '@media (prefers-color-scheme: dark)';
export const autoTheme = stylex.createTheme(color, {
  primaryText: { default: light.primaryText, [DARK]: dark.primaryText },
  backgroundColor: { default: light.backgroundColor, [DARK]: dark.backgroundColor },
});

