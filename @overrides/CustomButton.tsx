import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import ThemedView from "./ThemedView";

type CustomIconButtonProps = {
  buttonIcon: string;
  iconSize?: number;
  style?: any;
  onPress?: () => void;
};

export default function CustomIconButton({
  buttonIcon,
  iconSize = 30,
  style,
  onPress,
  ...props
}: CustomIconButtonProps) {
  const { isDarkTheme } = useCustomTheme();
  const darkOnLight = isDarkTheme ? darkModeBG : lightModeBG;
  const altDarkOnLight = isDarkTheme ? lightModeBG : darkModeBG;

  return (
    <ThemedView
      {...props}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: darkOnLight,
          boxShadow: `${altDarkOnLight} 3px 3px`,
          borderColor: altDarkOnLight,
        },
      ]}
    >
      <IconButton
        icon={buttonIcon}
        iconColor={altDarkOnLight}
        size={iconSize}
        onPress={onPress}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50,
    top: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    borderWidth: 2,
    marginRight: 20,
  },
});
