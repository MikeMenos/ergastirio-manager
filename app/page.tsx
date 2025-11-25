"use client";

import ProductCategories from "@/components/product-categories";
import { IProductCategories } from "@/lib/interfaces";
import { appStore } from "@/stores/appStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const data: IProductCategories[] = [
  { FAMILY: "DONUT" },
  { FAMILY: "ΑΛΛΟ" },
  { FAMILY: "ΑΡΤΟΠΟΙΗΜΑΤΑ" },
  { FAMILY: "ΣΦΟΛΙΑΤΑ" },
];

export default function Home() {
  const { clientData, setHydrated, hydrated } = appStore();

  useEffect(() => {
    appStore.persist.rehydrate();
    setHydrated();
  }, [setHydrated]);

  if (!hydrated) return null;
  if (clientData && clientData?.data.length > 1) redirect("/stores");

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-6">
      <ProductCategories data={data} />
    </div>
  );
}
