import Input from "@/components/ui/input";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmailSignUp = () => {
  return (
    <SafeAreaView className="flex-1 p-4 items-center justify-center gap-4">
      <View className="flex-row items-center gap-2">
        <View className="bg-blue-500 size-14 rounded-2xl"></View>
        <Text className="font-bold text-2xl">Connectly</Text>
      </View>
      <Text className="text-3xl font-bold text-left self-start">
        Create your account
      </Text>

      <View className="w-full gap-4 flex-1">
        <Input placeholder="Enter your full name" label={"Full Name"} />
        <Input placeholder="Enter your email" label={"Email"} />
        <Input
          placeholder="Enter your password"
          secureTextEntry
          label={"Password"}
        />
        <Input
          placeholder="Confirm your password"
          textContentType="password"
          secureTextEntry
          label={"Confirm Password"}
        />
      </View>
      <TouchableOpacity className="items-center w-full justify-center p-4 bg-blue-200 rounded-full">
        <Text className="font-semibold">Create Account</Text>
      </TouchableOpacity>
      <Text>
        Already have an account?{" "}
        <Link className="font-semibold" href="/onboarding/email/sign-in">
          Sign In
        </Link>
      </Text>
    </SafeAreaView>
  );
};

export default EmailSignUp;
