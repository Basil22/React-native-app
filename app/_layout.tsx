import ThemedStack from "@/components/ThemedStack";
import { PreferenceProvider } from "@/contexts/themeContextProvider";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PreferenceProvider>
      <PaperProvider>
        <ThemedStack>
          <Stack.Screen name="index" />
        </ThemedStack>
      </PaperProvider>
    </PreferenceProvider>
  );
}
