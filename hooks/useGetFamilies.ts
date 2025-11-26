import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import type { IFamilyCategories } from "@/lib/interfaces";

export function useGetFamilies() {
    return useQuery<IFamilyCategories[], Error>({
        queryKey: ["families"],
        queryFn: async () => {
            const { data } = await api.post("/get-families");
            return data.data;
        },
    });
}
