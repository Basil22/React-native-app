import ThemedView from "@/@overrides/ThemedView";
import BodyOption from "@/components/home/bodyOptions";
import MainCards from "@/components/incomingExpenses/mainCards";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

// Home Page
export default function Index() {
  return (
    <ThemedView style={styles.contaier}>
      <Text style={styles.expenseText} variant="titleSmall">
        Upcoming Payment
      </Text>
      <MainCards />

      <Text style={styles.menuText} variant="titleSmall">
        Menu
      </Text>
      <BodyOption />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  expenseText: {
    position: "fixed",
    marginTop: "5%",
    marginBottom: "2%",
    left: "-25%",
    textAlign: "left",
    fontWeight: 400,
  },

  menuText: {
    left: "-38%",
    marginTop: 20,
  },
});
