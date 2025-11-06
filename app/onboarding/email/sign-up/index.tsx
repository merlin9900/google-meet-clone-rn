import SignUpWithEmailForm from "@/components/onboarding/signUpWithEmail/form";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const EmailSignUp = () => {
  return (
    <SafeAreaView className="flex-1 p-4 items-center justify-center gap-4">
      <SignUpWithEmailForm />
    </SafeAreaView>
  );
};

export default EmailSignUp;
