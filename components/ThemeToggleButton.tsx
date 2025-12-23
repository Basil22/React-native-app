import { useCustomTheme } from "@/hooks/useCustomTheme";
import { Switch } from "react-native-paper";

export default function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return <Switch value={isDarkTheme} onValueChange={toggleTheme} />;
}
