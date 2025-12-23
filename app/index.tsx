import ThemedView from "@/@overrides/ThemedView";
import ThemeToggle from "@/@overrides/ThemeToggleButton";
import BottomBar from "@/components/bottomBar";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeToggle />
      <BottomBar />
    </ThemedView>
  );
}
