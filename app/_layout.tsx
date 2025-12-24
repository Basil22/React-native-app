import ThemedStack from "@/@overrides/ThemedStack";
import { EXPENSES_PAGE, INDEX_PAGE } from "@/constants/routes";
import { PreferenceProvider } from "@/contexts/themeContextProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <PreferenceProvider>
      <ThemedStack>
        <Stack.Screen name={INDEX_PAGE} />
        <Stack.Screen name={EXPENSES_PAGE} />
      </ThemedStack>
    </PreferenceProvider>
  );
}
