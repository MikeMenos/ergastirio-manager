import { useMutation } from "@tanstack/react-query";
import { verifyPin } from "../login/actions/verifyPin";

export function useVerifyPin() {
  return useMutation({
    mutationFn: async (pin: string) => {
      await verifyPin(pin);
    },
  });
}
