import ThemedView from "@/@overrides/ThemedView";
import BodyOption from "@/components/home/bodyOptions";
import MainCards from "@/components/shared/mainCards";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

// Home Page
export default function Index() {
  return (
    <ThemedView style={styles.contaier}>
      <Text style={styles.greeting}>Hello, User</Text>

      <Text style={styles.expenseText} variant="titleSmall">
        Your Upcoming Payment
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
  greeting: {
    // backgroundColor: "red",
    alignSelf: "flex-start",
    left: "5%",
    marginTop: 10,
    fontSize: 45,
    fontWeight: 100,
  },
  contaier: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  expenseText: {
    position: "fixed",
    marginTop: "2%",
    marginBottom: "2%",
    alignSelf: "flex-start",
    marginLeft: 20,
    textAlign: "left",
    fontWeight: 900,
    letterSpacing: -0.1,
  },

  menuText: {
    // left: "-38%",
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 900,
    letterSpacing: -0.1,
  },
});
