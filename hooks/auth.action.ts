import { LoginInput, RegisterInput } from "@/lib/schema/auth.schema";
import { AuthService } from "@/lib/services/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export const useLogin = () => {
  const router = useRouter();
  const { mutate: login, isPending } = useMutation({
    mutationFn: async (payload: LoginInput) => await AuthService.login(payload),
    onSuccess: async (data) => {
      try {
        await AsyncStorage.setItem("access_token", data.token);
        Toast.show({
          type: "success",
          text1: "Logged in",
        });
        router.navigate("/home");
      } catch (e) {
        console.log(e);
      }
    },
    onError: (err) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: err.message,
      });
    },
  });
  return { login, isPending };
};

export const useRegister = () => {
  const router = useRouter();
  const { mutate: register, isPending } = useMutation({
    mutationFn: async (payload: RegisterInput) =>
      await AuthService.register(payload),
    onSuccess: async (data) => {
      try {
        Toast.show({
          type: "success",
          text1: "User registered successfully",
        });
        router.navigate("/onboarding/email/sign-in");
      } catch (e) {
        console.log(e);
      }
    },
    onError: (err) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: err.message,
      });
    },
  });
  return { register, isPending };
};
