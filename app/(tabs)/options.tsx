import ThemedView from "@/@overrides/ThemedView";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function MoreOptions() {
  return (
    <ThemedView style={styles.text}>
      <Text>Options under Constuction...</Text>;
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
