import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function MainCards() {
  const { isDarkTheme } = useCustomTheme();
  const altDarkOnLight = isDarkTheme ? lightModeBG : darkModeBG;

  return (
    <Card
      style={[
        styles.card,
        { boxShadow: `${altDarkOnLight} 3px 3px`, borderColor: altDarkOnLight },
      ]}
    >
      <Text style={styles.cardHeaderText}>Home{"\n"}Rent</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    // display: "flex",
    // flexDirection: "column",
    // position: "absolute",
    // top: 20,
    width: "90%",
    height: 200,
    borderWidth: 3,
    backgroundColor: "#86ddcd",
  },
  cardHeaderText: {
    fontSize: 50,
    fontWeight: "900",
    letterSpacing: -2,
    top: 10,
    left: 10,
    lineHeight: 50,
  },
});
