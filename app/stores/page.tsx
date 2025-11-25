"use client"

import StoreCard from "@/components/store-card";
import { appStore } from "@/stores/appStore";
import { useGetClientData } from "../hooks/useGetClientData";


export default function Stores() {
    const { vat } = appStore();
    const { data, isLoading, isError } = useGetClientData(vat);

    return (
        data?.data.map(item => (
            <StoreCard data={item} key={item.BRANCH} />
        ))
    );
}
