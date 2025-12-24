import ThemedView from "@/@overrides/ThemedView";
import { darkModeBG } from "@/constants/themeColors";
import { StyleSheet } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function ExpenseCard() {
  return (
    <ThemedView style={[styles.iconContainer, { backgroundColor: "white" }]}>
      <Icon source="script-text" color={darkModeBG} size={60} />
      <Text style={styles.text} variant="labelLarge">
        All Payments
      </Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: "10%",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    // alignContent: "space-evenly",
    paddingTop: "20%",
  },

  text: {
    fontSize: 18,
    top: 5,
    lineHeight: 20,
    letterSpacing: -0.5,
  },
});
