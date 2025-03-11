/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetCategoryMadera } from "@/lib/get-madera-category"
import { CategoryType } from "@/types/category"
import { ResultType } from "@/types/response"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"

export const MaderaCategory = () => {

    const { result, loading }: ResultType = useGetCategoryMadera()
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

    return (
        <div className="max-w-5xl py-24 mx-auto sm:py-24 px-4">
            <div>
                <h2 className="px-6 pb-4 text-xl sm:pb-8 sm:text-3xl text-center font-bold">
                    Categorías de madera
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Aquí encontrarás todas las categorías de productos que manejamos.
                </p>
                <Link href='' className="flex justify-end text-blue-500 text-lg font-bold">Ver todas</Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
                {!loading && result !== undefined && (
                    result.slice(0, 3).map((category: CategoryType) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                        >
                            <Card>
                                <CardContent>
                                    <img
                                        src={API_URL + category.mainImage.url}
                                        alt={category.name}
                                        className="w-full h-68 rounded-xs object-cover  transition duration-300 ease-in-out hover:scale-105"
                                    />
                                    <h2 className="text-lg font-medium text-center pt-6">{category.name}</h2>
                                </CardContent>
                            </Card>

                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}