import ThemedView from "@/@overrides/ThemedView";
import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import ExpenseCard from "./expenseCard";
import OtherOption from "./otherOptions";

export default function BodyOption() {
  const { isDarkTheme } = useCustomTheme();
  const altDarkOnLight = isDarkTheme ? lightModeBG : darkModeBG;
  return (
    <ThemedView style={styles.cardContainer}>
      <Card
        style={[
          styles.card,
          {
            boxShadow: `${altDarkOnLight} 3px 3px`,
            borderColor: altDarkOnLight,
          },
        ]}
      >
        <ExpenseCard />
      </Card>

      <Card
        style={[
          styles.card,
          {
            boxShadow: `${altDarkOnLight} 3px 3px`,
            borderColor: altDarkOnLight,
          },
        ]}
      >
        <OtherOption />
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // top: 10,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "flex-start",
  },

  cardButton: {
    width: "auto",
    height: "auto",
  },

  card: {
    backgroundColor: "white",
    width: "40%",
    margin: 15,
    marginTop: 5,
    height: 150,
    borderWidth: 2,
  },
});
