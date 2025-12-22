import Main from "@/Components/main";
import { PaperProvider } from "react-native-paper";

export default function Index() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
