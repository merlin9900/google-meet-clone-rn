import { Link } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [signInMode, setSignInMode] = useState<"" | "email" | "google">("");
  return (
    <SafeAreaView className="flex-1 p-4">
      <View className="items-center justify-center flex-1">
        <View className="flex-1 items-center gap-4 justify-center">
          <View className="size-32 bg-primary-500 rounded-lg"></View>
          <View className="items-center">
            <Text className="text-5xl font-bold">Welcome to</Text>
            <Text className="text-5xl font-bold">Connectly</Text>
          </View>
          <Text className="text-lg">Seamless connections, anywhere</Text>
        </View>
        <View className="justify-self-end gap-4 w-full">
          <Link asChild href="/onboarding/email/sign-in">
            <TouchableOpacity
              onPress={() => setSignInMode("google")}
              className="items-center w-full justify-center p-4 bg-primary-500 rounded-full"
            >
              <Text className="font-semibold">Sign in with Google</Text>
            </TouchableOpacity>
          </Link>
          <Link asChild href="/onboarding/email/sign-in">
            <TouchableOpacity
              onPress={() => setSignInMode("email")}
              className="items-center w-full justify-center p-4 bg-gray-200 rounded-full"
            >
              <Text className="font-semibold">Sign in with Email</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
