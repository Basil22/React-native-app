import TabItem from "@/components/home/tabItemStyle";
import { BLACK, DARKMODEBG } from "@/constants/themeColors";
import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";

export default function BottomNavBarLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: DARKMODEBG,
        headerShown: false,
        tabBarShowLabel: false,
        animation: "shift",
        tabBarStyle: {
          borderTopWidth: 3,
          borderColor: BLACK,
          height: "10%",
          backgroundColor: theme.colors.primaryContainer,
        },
        tabBarIconStyle: {
          marginTop: "15%",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              icon={focused ? "home" : "home-outline"}
              focused={focused}
              label="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="expenses"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              focused={focused}
              icon={focused ? "script-text" : "script-text-outline"}
              label="Expenses"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="options"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem icon={"dots-vertical"} focused={focused} label="Options" />
          ),
        }}
      />
    </Tabs>
  );
}
