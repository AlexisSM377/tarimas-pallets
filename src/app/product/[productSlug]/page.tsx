'use client'

import { useGetProductsBySlug } from "@/lib/get-product-by-slug";
import { ResultType } from "@/types/response";
import { useParams } from "next/navigation";
import { CarouselProductImage } from "./components/carousel-product-image";
import { InfoProduct } from "./components/info-product";
import SkeletonProduct from "./components/skeleton-product";


export default function Page() {

    const params = useParams()
    const { productSlug } = params


    const { result }: ResultType = useGetProductsBySlug(productSlug as string)
    if (result === null) {
        return <SkeletonProduct />
    }

    return (
        <div className="max-w-7xl py-4 mx-auto sm:py-32 mt-20 sm:px-24">
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div >
                    <CarouselProductImage images={result[0].images} />
                </div>
                <div className="sm:px-12 mt-2 space-y-4">
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    )
}