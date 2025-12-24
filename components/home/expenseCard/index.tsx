import { darkModeBG } from "@/constants/themeColors";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function ExpenseCard() {
  const router = useRouter();

  return (
    <Pressable
      style={styles.iconContainer}
      onPress={() => router.push("/expenses")}
    >
      <Icon source="script-text" size={60} color={darkModeBG} />

      <Text style={styles.text}>All Payments</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    top: 10,
    lineHeight: 20,
    letterSpacing: -0.5,
  },
});
