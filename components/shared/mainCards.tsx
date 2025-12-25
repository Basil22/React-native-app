import ThemedView from "@/@overrides/ThemedView";
import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";

export default function MainCards() {
  const theme = useTheme();
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

      <ThemedView
        style={[
          styles.button,
          {
            backgroundColor: theme.colors.primaryContainer,
            boxShadow: `${altDarkOnLight} 2px 2px`,
            borderColor: altDarkOnLight,
          },
        ]}
      >
        <Button style={{ backgroundColor: "#ec5a5a" }}>
          <Text
            style={{ letterSpacing: 0.2, color: "white", fontWeight: 700 }}
            variant="labelSmall"
          >
            Mark As Completed
          </Text>
        </Button>
      </ThemedView>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
    left: "-60%",
    lineHeight: 50,
  },
  button: {
    position: "absolute",
    right: 0,
    width: "auto",
    height: "auto",
    justifyContent: "center",
    alignContent: "center",
    bottom: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
});
