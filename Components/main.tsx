import { Alert, Text, useColorScheme, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function Main() {
  const theme = useTheme();

  const currentDeviceTheme = useColorScheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => Alert.alert("its a me, Mario!")}>
        Click here
      </Button>
      <Text>Current device theme is: {currentDeviceTheme}</Text>
    </View>
  );
}
