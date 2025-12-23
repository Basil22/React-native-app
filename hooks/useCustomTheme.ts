import { PreferenceContext } from "@/contexts/themeContextProvider";
import { useContext } from "react";

export const useCustomTheme = () => {
  const context = useContext(PreferenceContext);

  if (!context) {
    throw new Error("useCustomTheme must be used within PreferenceProvider");
  }

  return context;
};
