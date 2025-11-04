import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  className?: string;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  children,
  ...props
}) => {
  return (
    <View className="gap-2">
      {label && <Text className="font-semibold">{label}</Text>}
      <TextInput
        placeholderTextColor="#9CA3AF"
        className="rounded-full border p-4"
        {...props}
      />
      {children}
      {error && <Text className="text-red-500">{error}</Text>}
    </View>
  );
};

export default Input;
