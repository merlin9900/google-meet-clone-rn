import Input from "@/components/ui/input";
import { useRegister } from "@/hooks/auth.action";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

const SignUpWithEmailForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { register, isPending } = useRegister();

  const submit = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Passwords do not match",
      });
      return;
    }

    register({
      name,
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
      <Text className="text-3xl font-bold text-left self-start">
        Create your account
      </Text>

      <View className="w-full gap-4 flex-1">
        <Input
          placeholder="Enter your full name"
          label={"Full Name"}
          onChangeText={setName}
        />
        <Input
          placeholder="Enter your email"
          onChangeText={setEmail}
          label={"Email"}
        />
        <Input
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={setPassword}
          label={"Password"}
        />
        <Input
          placeholder="Confirm your password"
          textContentType="password"
          secureTextEntry
          onChangeText={setConfirmPassword}
          label={"Confirm Password"}
        />
      </View>
      <TouchableOpacity
        onPress={submit}
        className="items-center w-full justify-center p-4 bg-primary-500 rounded-full"
      >
        <Text className="font-semibold">Create Account</Text>
      </TouchableOpacity>
      <Text>
        Already have an account?{" "}
        <Link className="font-semibold" href="/onboarding/email/sign-in">
          Sign In
        </Link>
      </Text>
    </>
  );
};

export default SignUpWithEmailForm;
