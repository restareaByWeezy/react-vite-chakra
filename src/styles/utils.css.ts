import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

// HOVER
export const iconHover = style({
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.g_trans1,
      cursor: 'pointer',
    },
  },
});

// TRANSITION
export const showWithScale = style({
  transition: 'all 0.8s ease',
  transform: 'scale(1)',
});
