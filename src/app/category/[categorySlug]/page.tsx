'use client'
import { ProductCard } from "@/components/productsCard"
import { Separator } from "@/components/ui/separator"
import { useGetCategoryProduct } from "@/lib/get-category-product"
import { ProductType } from "@/types/product"
import { ResultType } from "@/types/response"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const params = useParams()
    const { categorySlug } = params

    const { result, loading }: ResultType = useGetCategoryProduct(categorySlug as string)

    const [filterCategory, setFilterCategory] = useState('')

    const filteredProducts = result !== null && !loading && (
        result.filter((product: ProductType) => {
            const category = filterCategory === '' || product.madera_category.slug === filterCategory
            return category
        })
    )

    return (
        <div className="max-w-5xl py-4 mx-auto sm:py-16 sm:px-24 mt-36">
            <div className="flex items-center justify-between">
                {result !== null && !loading && (
                    <h1 className="text-3xl font-medium">{result[0].madera_category.name}</h1>
                )}
            </div>
            <Separator />
            <div>
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
                    {loading && (
                        <p>Loading...</p>
                    )}
                    {filteredProducts !== undefined && filteredProducts.length > 0 && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </div>


        </div>
    )
}