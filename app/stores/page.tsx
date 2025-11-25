"use client";

import StoreCard from "@/components/store-card";
import { appStore } from "@/stores/appStore";
import { useEffect } from "react";

export default function Stores() {
  const { clientData, hydrated, setHydrated } = appStore();

  useEffect(() => {
    appStore.persist.rehydrate();
    setHydrated();
  }, [setHydrated]);
  console.log(clientData);
  if (!hydrated) return null;

  return (
    <>
      {clientData?.data.map((item) => (
        <StoreCard data={item} key={item.BRANCH} />
      ))}
    </>
  );
}
