import Providers from "@/components/providers";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import "./global.css";

export default function RootLayout() {
  return (
    <Providers>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <Toast />
      </SafeAreaProvider>
    </Providers>
  );
}
