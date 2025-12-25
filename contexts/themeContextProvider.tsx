import { darkModeBG, lightModeBG } from "@/constants/themeColors";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: isDarkTheme ? darkModeBG : lightModeBG,
            }}
          >
            {children}
          </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>
    </PreferenceContext.Provider>
  );
};
