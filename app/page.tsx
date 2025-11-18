import ProductCategories from "@/components/product-categories"
import { IProductCategories } from "@/lib/interfaces"

const data: IProductCategories[] = [
  { FAMILY: "DONUT" },
  { FAMILY: "ΑΛΛΟ" },
  { FAMILY: "ΑΡΤΟΠΟΙΗΜΑΤΑ" },
  { FAMILY: "ΣΦΟΛΙΑΤΑ" },
]

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-6">
      <ProductCategories data={data} />
    </div>
  )
}
