import ThemedView from "@/components/ThemedView";
import { Text } from "react-native-paper";

export default function Index() {
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
