import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import type { IProductItem } from "@/lib/interfaces";

export function useGetProductsPerFamily({ family, trdr, branch }: { family: string; trdr: string; branch: string }) {
    return useQuery<IProductItem[], Error>({
        queryKey: ["products-per-family"],
        queryFn: async () => {
            const { data } = await api.post("/get-products-per-family", { family, trdr, branch });
            return data.data;
        },
    });
}
