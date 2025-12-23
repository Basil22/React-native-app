import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";

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
  const deviceTheme = useColorScheme();
  const isDeviceDark = deviceTheme === "dark";

  const [isDarkTheme, setIsThemeDark] = useState<boolean>(isDeviceDark);

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

  return (
    <PreferenceContext.Provider value={preferencesValue}>
      {children}
    </PreferenceContext.Provider>
  );
};
