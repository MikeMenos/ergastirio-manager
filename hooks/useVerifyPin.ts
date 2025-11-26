import { verifyPin } from "@/app/login/actions/verifyPin";
import { useMutation } from "@tanstack/react-query";

export function useVerifyPin() {
  return useMutation({
    mutationFn: async (pin: string) => {
      await verifyPin(pin);
    },
  });
}
