'use client'
import { CategoryCard } from "@/components/categoryCard"
import { useGetCategoryMadera } from "@/lib/get-madera-category"
import { CategoryType } from "@/types/category"
import { ResultType } from "@/types/response"

export default function Page() {

    const { result, loading }: ResultType = useGetCategoryMadera()
    return (
        <div className="max-w-5xl py-4 mx-auto sm:py-16 mt-24">

            {loading ? (
                <p className="text-center">Loading...</p>

            ) : result !== null && result.length > 0 ? (
                <div>
                    <h1 className="text-5xl font-bold text-center">
                        CATEGORÍAS
                    </h1>
                    <p className="text-center font-medium text-base mt-3">
                        Aquí encontrarás todas las categorías de productos que manejamos.
                    </p>
                </div>

            ) : (
                <p className="text-center">No products found</p>
            )}
            <div className="sm:flex sm:justify-center sm:items-center">
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-2">

                    {result !== null && result.map((category: CategoryType) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}