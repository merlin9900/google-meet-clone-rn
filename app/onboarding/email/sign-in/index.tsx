import Input from "@/components/ui/input";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmailSignIn = () => {
  return (
    <SafeAreaView className="flex-1 p-4 items-center justify-center gap-6">
      <View className="flex-row items-center gap-2">
        <View className="bg-blue-500 size-14 rounded-2xl"></View>
        <Text className="font-bold text-2xl">Connectly</Text>
      </View>
      <View className="gap-2 items-center">
        <Text className="text-3xl font-bold">Welcome Back</Text>
        <Text className="font-medium">
          Sign in to your account to continue.
        </Text>
      </View>

      <View className="w-full gap-3">
        <Input placeholder="you.example.com" label={"Email"} />
        <Input
          placeholder="Enter your password"
          secureTextEntry
          label={"Password"}
        />
        <Link className="self-end" href="/">
          Forgot Password?
        </Link>
      </View>
      <TouchableOpacity className="items-center w-full justify-center p-4 bg-blue-200 rounded-full">
        <Text className="font-semibold">Sign In</Text>
      </TouchableOpacity>
      <Text>
        Don't have an account?{" "}
        <Link className="font-semibold" href="/onboarding/email/sign-up">
          Sign Up
        </Link>
      </Text>
    </SafeAreaView>
  );
};

export default EmailSignIn;
