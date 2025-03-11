import { ProductType } from "@/types/product"
import Link from "next/link"
import { CarouselImages } from "./carouselImages"
import { formatPrice } from "@/lib/format-price"
import { Card } from "./ui/card"

type ProductsCardProps = {
    product: ProductType
}

export const ProductCard = (props: ProductsCardProps) => {
    const { product } = props

    return (
        <Card className="py-4 border border-gray-500 shadow-none">
            <Link href={`/product/${product.slug}`} className="relative p-2 transition-all duration-100 rounded-lg ">
                <div className="absolute flex items-center  gap-3 px-2 z-[1] top-4 ">
                    <p className="px-2 py-1 text-sm text-white bg-black dark:bg-white dark:text-black rounded-lg  font-medium">
                        {product.madera_category.name}
                    </p>
                </div>
                <CarouselImages product={product} />
                <div className="mt-3">
                    <p className="text-sm font-semibold text-center">{product.productName}</p>
                    <p className="font-bold opacity-70 text-center text-xs">{formatPrice(product.price)}</p>
                </div>
            </Link>

        </Card>
    )
}