/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { IconButton } from "./icon-button"
import { Expand } from "lucide-react"
import { useRouter } from "next/navigation"

type CarouselImagesProps = {
    product: ProductType
}

export const CarouselImages = (props: CarouselImagesProps) => {
    const { product } = props
    const router = useRouter()
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL


    return (
        <Carousel opts={{ align: 'start' }} className="w-full">

            <CarouselContent>
                {product.images.map((image) => (
                    <CarouselItem key={image.id} className="group">

                        <img src={API_URL + image.url} alt='Product Image' className="rounded-sm w-auto" />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center gap-x-6">
                                <IconButton onclick={() => router.push(`product/${product.slug}`)} icon={<Expand size={20} />} className="text-gray-900 cursor-pointer" />

                            </div>
                        </div>
                    </CarouselItem>

                ))}
            </CarouselContent>

        </Carousel>
    )
}


