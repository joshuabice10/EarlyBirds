export const theme = {
  colors: {
    primary: "#6367FF",
    secondary: "#8494FF",
    light: "#C9BEFF",
    background: "#FFDBFD",
    text: "#272727ff",
    error: "#B00020",
    grey: "#9E9E9E",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fonts: {
    header: "BalsamiqSans_700Bold",
    subheader: "Grandstander_600SemiBold",
    body500: "Grandstander_500Medium",
    body400: "Grandstander_400Regular",
  },
};

export type Theme = typeof theme;
