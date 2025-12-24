import ThemedStack from "@/@overrides/ThemedStack";
import { INDEX_PAGE } from "@/constants/routes";
import { PreferenceProvider } from "@/contexts/themeContextProvider";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <PreferenceProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ThemedStack>
            <Stack.Screen name={INDEX_PAGE} />
          </ThemedStack>
        </SafeAreaView>
      </SafeAreaProvider>
    </PreferenceProvider>
  );
}
