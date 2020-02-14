import theme from 'styled-theming';
import { red } from '../colors';

export const hoverLineColor = theme('mode', {
  light: red,
  dark: red,
  transparentLight: red,
  transparentDark: red,
});
