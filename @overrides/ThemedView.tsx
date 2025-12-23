import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

type ThemeViewProps = ViewProps & {
  children: ReactNode;
};

export default function ThemedView({
  children,
  style,
  ...props
}: ThemeViewProps) {
  // Default colors will be theme based
  const { isDarkTheme } = useCustomTheme();
  const backgroundColor = isDarkTheme ? darkModeBG : lightModeBG;

  return (
    <View {...props} style={[{ backgroundColor }, style]}>
      {children}
    </View>
  );
}
