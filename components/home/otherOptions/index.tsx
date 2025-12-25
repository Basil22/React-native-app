import { darkModeBG } from "@/constants/themeColors";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function OtherOption() {
  const router = useRouter();

  return (
    <Pressable
      style={styles.iconContainer}
      onPress={() => router.push("/options")}
    >
      <Icon source="dots-vertical" size={60} color={darkModeBG} />

      <Text style={styles.text}>Other options</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: "100%",
    height: "95%",
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
