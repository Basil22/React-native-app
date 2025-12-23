import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

type PreferenceContextType = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

type PreferenceProviderProps = {
  children: ReactNode;
};

export const PreferenceContext = createContext<
  PreferenceContextType | undefined
>(undefined);

export const PreferenceProvider = ({ children }: PreferenceProviderProps) => {
  // Read the theme of the device
  // const deviceTheme = useColorScheme();
  // const isDeviceDark = deviceTheme === themeConst.DARK;

  const [isDarkTheme, setIsThemeDark] = useState<boolean>(false);

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isDarkTheme);
  }, [isDarkTheme]);

  const preferencesValue = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [toggleTheme, isDarkTheme]
  );

  const theme = isDarkTheme ? MD3DarkTheme : MD3LightTheme;

  return (
    <PreferenceContext.Provider value={preferencesValue}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </PreferenceContext.Provider>
  );
};
