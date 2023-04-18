import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

globalStyle('body', {
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  boxSizing: 'border-box',
  lineHeight: 1.5,
  WebkitFontSmoothing: `antialiased`,
  fontFamily: 'Pretendard-Regular',
  paddingRight: 'calc(var(--removed-body-scroll-bar-size )) !important', // FIX: radix scroll library bug must be fixed
});

globalStyle('#root', {
  isolation: `isolate`,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
});

// DRAG COLOR
globalStyle('::selection', {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});
globalStyle('::-moz-selection', {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

// FOCUS
globalStyle(':focus', {
  outlineColor: vars.color.primary,
});
globalStyle(':focus-visible', {
  outlineColor: vars.color.primary,
});
globalStyle('::-moz-focus-inner', {
  border: 0,
});

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
  all: `unset`,
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
  all: 'unset',
});

globalStyle('ul, li', {
  all: 'unset',
  listStyle: 'none',
});

globalFontFace('Pretendard-Regular', {
  src: 'https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff',
});
