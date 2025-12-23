import { useCustomTheme } from "@/hooks/useCustomTheme";
import { Switch } from "react-native-paper";

export default function ThemeToggle({ ...props }) {
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return <Switch {...props} value={isDarkTheme} onValueChange={toggleTheme} />;
}
