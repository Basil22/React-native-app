import { DARKMODEBG, LIGHTMODEBG } from "@/constants/themeColors";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import ThemedView from "./ThemedView";

type CustomIconButtonProps = {
  buttonIcon: string;
  iconSize?: number;
  buttonSize?: number;
  customStyle?: any;
  onPress?: () => void;
};

export default function CustomIconButton({
  buttonIcon,
  iconSize = 30,
  buttonSize = 50,
  customStyle,
  onPress,
  ...props
}: CustomIconButtonProps) {
  const { isDarkTheme } = useCustomTheme();
  const darkOnLight = isDarkTheme ? DARKMODEBG : LIGHTMODEBG;
  const altDarkOnLight = isDarkTheme ? LIGHTMODEBG : DARKMODEBG;

  return (
    <ThemedView
      {...props}
      style={[
        styles.buttonContainer,
        {
          width: buttonSize,
          height: buttonSize,
          backgroundColor: darkOnLight,
          boxShadow: `${altDarkOnLight} 2px 2px`,
          borderColor: altDarkOnLight,
        },
        customStyle,
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
    top: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    borderWidth: 2,
    marginRight: 10,
  },
});
