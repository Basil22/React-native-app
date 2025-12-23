import { useCustomTheme } from "@/hooks/useCustomTheme";
import { Stack } from "expo-router";
import { ReactNode } from "react";
import ThemeToggle from "./ThemeToggleButton";

type ThemedStackProps = {
  children: ReactNode;
};

export default function ThemedStack({ children, ...props }: ThemedStackProps) {
  const { isDarkTheme } = useCustomTheme();

  return (
    <Stack
      {...props}
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkTheme ? "#000000" : "#ffffff",
        },
        headerTintColor: isDarkTheme ? "#ffffff" : "#000000",
        headerRight: () => <ThemeToggle />,
      }}
    >
      {children}
    </Stack>
  );
}
