import * as stylex from '@stylexjs/stylex';
import { color } from './color.stylex';

export const button = stylex.create({
  circleSvgIcon: {
    fontSize: '2rem',
    color: {
      default: color.colorCircleButton,
      ":hover": color.bgColorCircleButton
    },
    backgroundColor: {
      default: color.bgColorCircleButton,
      ":hover": color.colorCircleButton
    },
    cursor: {
      default: "default",
      ":hover": "pointer"
    },
    padding: '0.35rem',
    borderRadius: '50%',
  }
});