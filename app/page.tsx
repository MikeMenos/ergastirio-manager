"use client"

import ProductCategories from "@/components/product-categories"
import { IProductCategories } from "@/lib/interfaces"
import { appStore } from "@/stores/appStore";
import { useGetClientData } from "./hooks/useGetClientData";
import { redirect } from "next/navigation";

const data: IProductCategories[] = [
  { FAMILY: "DONUT" },
  { FAMILY: "ΑΛΛΟ" },
  { FAMILY: "ΑΡΤΟΠΟΙΗΜΑΤΑ" },
  { FAMILY: "ΣΦΟΛΙΑΤΑ" },
]

export default function Home() {

  const { vat } = appStore();
  const { data: clientdata, isLoading, isError } = useGetClientData(vat);

  if (clientdata && clientdata?.data.length > 1) redirect('/stores')

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-6">
      <ProductCategories data={data} />
    </div>
  )
}
