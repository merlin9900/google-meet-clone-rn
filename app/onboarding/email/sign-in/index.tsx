import SignInWithEmailForm from "@/components/onboarding/signInWithEmail/form";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const EmailSignIn = () => {
  return (
    <SafeAreaView className="flex-1 p-4 items-center justify-center gap-6">
      <SignInWithEmailForm />
    </SafeAreaView>
  );
};

export default EmailSignIn;
