import Input from "@/components/ui/input";
import { useLogin } from "@/hooks/auth.action";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SignInWithEmailForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, isPending } = useLogin();

  const submit = () => {
    login({
      email,
      password,
    });
  };
  return (
    <>
      <View className="flex-row items-center gap-2">
        <View className="bg-primary-500 size-14 rounded-2xl"></View>
        <Text className="font-bold text-2xl">Connectly</Text>
      </View>
      <View className="gap-2 items-center">
        <Text className="text-3xl font-bold">Welcome Back</Text>
        <Text className="font-medium">
          Sign in to your account to continue.
        </Text>
      </View>

      <View className="w-full gap-3">
        <Input
          onChangeText={setEmail}
          placeholder="you.example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          label={"Email"}
        />
        <Input
          placeholder="Enter your password"
          onChangeText={setPassword}
          secureTextEntry
          label={"Password"}
        />
        <Link className="self-end " href="/">
          Forgot Password?
        </Link>
      </View>
      <TouchableOpacity
        disabled={isPending}
        onPress={submit}
        className="items-center w-full justify-center p-4 bg-primary-500 rounded-full"
      >
        <Text className="font-semibold">Sign In</Text>
      </TouchableOpacity>
      <Text>
        Don&apos;t have an account?{" "}
        <Link className="font-semibold " href="/onboarding/email/sign-up">
          Sign Up
        </Link>
      </Text>
    </>
  );
};

export default SignInWithEmailForm;
