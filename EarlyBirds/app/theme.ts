export const theme = {
  colors: {
    primary: '#6367FF',
    secondary: '#8494FF',
    light: '#C9BEFF',
    background: '#FFDBFD',
    text: '#272727ff',
    error: '#B00020',
    grey: '#9E9E9E',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    header: {
      fontSize: 24,
      fontWeight: 'bold' as const,
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal' as const,
    },
  },
};

export type Theme = typeof theme;
