import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type CartRequestBody = {
    // Replace with your actual body shape
    count: number;
    productId: string;
    // ...
};

async function postCart(body: CartRequestBody) {
    const { data } = await axios.post("/add-to-cart", body);
    return data;
}

export function useAddToCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (body: CartRequestBody) => postCart(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });
}
