'use client'
import { ProductCard } from "@/components/productsCard"
import { SkeletonSchema } from "@/components/skeletonSchema"
import { useGetProducts } from "@/lib/get-products"
import { ProductType } from "@/types/product"
import { ResultType } from "@/types/response"

export default function Page() {
    const { result, loading }: ResultType = useGetProducts()
    return (
        <div className="max-w-5xl py-4 mx-auto sm:py-16 mt-24">
            {
                loading ? (
                    <p className="text-center">Loading...</p>
                ) : result !== null && result.length > 0 ? (
                    <div>
                        <h1 className="text-6xl font-semibold text-center">
                            Madera
                        </h1>
                        <p className="text-center text-lg font-medium mt-3">
                            Busca y encuentra la madera que necesitas
                        </p>
                    </div>
                ) : (
                    <p className="text-center">No products found</p>
                )
            }
            <div className="sm:flex sm:justify-center sm:items-center">
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-2">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result !== null && result.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}