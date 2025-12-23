import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import AddButton from "./addButton";
import SettingsButton from "./settingsButton";

export default function BottomBar() {
  const { isDarkTheme } = useCustomTheme();
  const theme = useTheme();

  return (
    <Surface
      style={[
        styles.surface,
        {
          backgroundColor: theme.colors.primaryContainer,
          borderTopColor: isDarkTheme ? lightModeBG : darkModeBG,
        },
      ]}
    >
      <AddButton />
      <SettingsButton />
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    borderTopWidth: 4,
  },
});
