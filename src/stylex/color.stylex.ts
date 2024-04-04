import * as stylex from '@stylexjs/stylex';

export const color = stylex.defineVars({
  backgroundColor: 'lime',
  colorCircleButton: 'lime',
  bgColorCircleButton: 'lime',

  primaryText: 'lime',
});

// -- OR --
// A constant can be used to avoid repeating the media query
// const DARK = '@media (prefers-color-scheme: dark)';

// export const color = stylex.defineVars({
//   primaryText: {default: light.primaryText, [DARK]: dark.primaryText},
//   backgroundColor: {default: light.backgroundColor, [DARK]: dark.backgroundColor},
// });
