"use client"

import ProductCard from "@/components/product-card";
import { useGetProductsPerFamily } from "@/hooks/useGetProductsPerFamily";
import { appStore } from "@/stores/appStore";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function FamilyProducts() {
    const { clientData, setHydrated, hydrated, branchNumber } = appStore();
    const pathname = usePathname()
    const family = pathname.split("/")[2];
    const trdr = clientData?.data[0].TRDR as string
    const branch = clientData?.data[0].BRANCH as string

    useEffect(() => {
        appStore.persist.rehydrate();
        setHydrated();
    }, [setHydrated]);

    const { data, isLoading } = useGetProductsPerFamily({ family, trdr, branch })

    if (!hydrated) return null;
    if (clientData && clientData?.count > 1 && !branchNumber) redirect("/stores");

    if (isLoading) return <div>Loading...</div>

    return (
        data?.map(item => (
            <ProductCard product={item} key={item.MTRL} />
        ))
    );
}
