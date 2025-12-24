import ThemedView from "@/@overrides/ThemedView";
import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";

type BottomBarProps = {
  children: ReactNode;
};

export default function BottomBar({ children }: BottomBarProps) {
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
      <ThemedView
        style={[
          styles.buttonsContainer,
          {
            backgroundColor: theme.colors.primaryContainer,
          },
        ]}
      >
        {children}
      </ThemedView>
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
    justifyContent: "center",
    paddingHorizontal: 24,
    borderTopWidth: 4,
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    left: 5,
    alignItems: "baseline",
  },
});
