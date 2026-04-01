import { BalsamiqSans_700Bold } from "@expo-google-fonts/balsamiq-sans";
import {
  Grandstander_400Regular,
  Grandstander_500Medium,
  Grandstander_600SemiBold,
} from "@expo-google-fonts/grandstander";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { createContext, useContext } from "react";
import { Theme, theme } from "../util/theme";

const ThemeContext = createContext<Theme>(theme);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    BalsamiqSans_700Bold,
    Grandstander_600SemiBold,
    Grandstander_500Medium,
    Grandstander_400Regular,
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Main" }} />
      <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
    </Stack>
  );
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
