import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Main" }} />
      <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
    </Stack>
  );
}
