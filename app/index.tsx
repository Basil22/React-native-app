import ThemedView from "@/components/ThemedView";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { Text } from "react-native-paper";

export default function Index() {
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Current device theme is: </Text>
    </ThemedView>
  );
}
