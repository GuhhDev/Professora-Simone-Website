export const theme = {
  colors: {
    primary: '#f43f5e', // rose-500
    primaryDark: '#be123c', // rose-700
    background: '#fff1f2', // rose-50
    text: '#475569', // gray-600
    white: '#ffffff',
  },
  breakpoints: {
    md: '768px',
  },
  transitions: {
    default: '0.2s ease-in-out',
  },
  shadows: {
    header: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme;
