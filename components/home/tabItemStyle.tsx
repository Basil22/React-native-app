import ThemedView from "@/@overrides/ThemedView";
import { darkModeBG } from "@/constants/themeColors";
import { Icon, Text, useTheme } from "react-native-paper";

type TabItemProps = {
  focused: boolean;
  label: string;
  icon: string;
};

export default function TabItem({ icon, focused, label }: TabItemProps) {
  const theme = useTheme();
  return (
    <ThemedView
      style={{
        borderRadius: focused ? 30 : 0,
        width: 90,
        height: focused ? 50 : undefined,
        backgroundColor: focused ? "#ec5a5a" : theme.colors.primaryContainer,
        borderWidth: focused ? 2 : 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: focused ? `${darkModeBG} 3px 3px` : undefined,
      }}
    >
      <Icon source={icon} color={focused ? "white" : "grey"} size={20} />
      <Text
        style={{
          color: focused ? "white" : "grey",
          fontSize: 10,
        }}
      >
        {label}
      </Text>
    </ThemedView>
  );
}
