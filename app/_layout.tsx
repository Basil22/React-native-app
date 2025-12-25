import ThemedStack from "@/@overrides/ThemedStack";
import { PreferenceProvider } from "@/contexts/themeContextProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <PreferenceProvider>
      <ThemedStack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </ThemedStack>
    </PreferenceProvider>
  );
}
