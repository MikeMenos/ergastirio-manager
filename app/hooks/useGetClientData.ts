import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import type { ClientResponse } from "@/lib/interfaces";

export function useGetClientData(AFM?: string) {
  return useQuery<ClientResponse>({
    queryKey: ["vatToPin"],
    queryFn: async () => {
      const { data } = await api.post("/get-client-data", { AFM: 996973228 });
      return data;
    },
    staleTime: 0,
  });
}
