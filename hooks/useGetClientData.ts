import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import type { ClientResponse } from "@/lib/interfaces";

export function useGetClientData() {
  return useMutation<ClientResponse, Error, string>({
    mutationFn: async (AFM: string) => {
      const { data } = await api.post("/get-client-data", { AFM });
      return data;
    },
  });
}
