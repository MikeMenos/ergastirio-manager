"use client";

import StoreCard from "@/components/store-card";
import { appStore } from "@/stores/appStore";
import Link from "next/link";
import { useEffect } from "react";

export default function Stores() {
  const { clientData, hydrated, setHydrated, setIsStoreSelected } = appStore();

  useEffect(() => {
    appStore.persist.rehydrate();
    setHydrated();
  }, [setHydrated]);

  if (!hydrated) return null;

  return (
    <>
      {clientData?.data.map((item) => (
        <Link key={item.BRANCH} href={'/'} onClick={() => setIsStoreSelected(true)}>
          <StoreCard data={item} />
        </Link>
      ))}
    </>
  );
}
