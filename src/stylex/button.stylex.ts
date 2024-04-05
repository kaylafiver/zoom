import * as stylex from '@stylexjs/stylex';
import { tokens } from './tokens.stylex';

export const button = stylex.create({
  circleSvgIcon: {
    fontSize: '2rem',
    color: {
      default: tokens.colorButton,
      ":hover": tokens.bgColorButton
    },
    backgroundColor: {
      default: tokens.bgColorButton,
      ":hover": tokens.colorButton
    },
    cursor: {
      default: "default",
      ":hover": "pointer"
    },
    padding: '0.35rem',
    borderRadius: '50%',
  },
  navbar: {
    color: {
      default: tokens.colorButton,
      ":hover": tokens.bgColorButton
    },
    backgroundColor: {
      default: tokens.bgColor,
      ":hover": tokens.colorButton
    },
    cursor: {
      default: "default",
      ":hover": "pointer"
    },
    padding: '0.35rem 1rem',
    borderRadius: '0.35rem',
  }
});