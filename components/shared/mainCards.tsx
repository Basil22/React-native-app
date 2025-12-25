import ThemedView from "@/@overrides/ThemedView";
import {
  DARKMODEBG,
  LIGHTMODEBG,
  RETRO_GREEN,
  RETRO_RED,
  WHITE,
} from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";

export default function MainCards() {
  const theme = useTheme();
  const { isDarkTheme } = useCustomTheme();
  const altDarkOnLight = isDarkTheme ? LIGHTMODEBG : DARKMODEBG;

  return (
    <Card
      style={[
        styles.card,
        { boxShadow: `${altDarkOnLight} 3px 3px`, borderColor: altDarkOnLight },
      ]}
    >
      <Text style={styles.cardHeaderText}>Home{"\n"}Rent</Text>

      <ThemedView style={styles.cardAmount}>
        <Text style={styles.amountText}>Rs. 10000</Text>
      </ThemedView>

      <ThemedView
        style={[
          styles.button,
          {
            backgroundColor: theme.colors.primaryContainer,
            boxShadow: `${altDarkOnLight} 2px 2px`,
          },
        ]}
      >
        <Button style={{ backgroundColor: RETRO_RED }}>
          <Text
            style={{ letterSpacing: 0.2, color: WHITE, fontWeight: 700 }}
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
    backgroundColor: RETRO_GREEN,
  },
  cardHeaderText: {
    fontSize: 50,
    fontWeight: "900",
    letterSpacing: -2,
    top: 10,
    left: "-60%",
    lineHeight: 50,
  },
  cardAmount: {
    height: "50%",
    position: "absolute",
    alignSelf: "flex-end",
    right: "-60%",
    left: "60%",
    top: 10,
    justifyContent: "flex-end",
    backgroundColor: RETRO_GREEN,
  },
  amountText: {
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: -0.5,
    alignSelf: "baseline",
  },
  button: {
    display: "flex",
    flexDirection: "row",
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
