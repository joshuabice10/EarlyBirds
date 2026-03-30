import { Stack } from "expo-router";
import React, { createContext, useContext } from 'react';
import { Theme, theme } from './theme';

const ThemeContext = createContext<Theme>(theme);

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Main" }} />
      <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
    </Stack>
  );
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);