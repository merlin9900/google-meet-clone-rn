import { LoginInput } from "@/lib/schema/auth.schema";
import { AuthService } from "@/lib/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { mutate: login, isPending } = useMutation({
    mutationFn: async (payload: LoginInput) => await AuthService.login(payload),
    onSuccess: () => {},
    onError: () => {},
  });
  return { login, isPending };
};
