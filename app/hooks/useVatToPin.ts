import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export function useVatToPin() {
  return useMutation({
    mutationFn: async (AFM: string) => {
      const { data } = await api.post("/get-pin", { AFM });
      return data?.data?.[0]?.PIN_A;
    },
  });
}
