/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { useGetProducts } from "@/lib/get-products"
import { ResultType } from "@/types/response"
import { SkeletonSchema } from "./skeletonSchema"
import { ProductType } from "@/types/product"
import { Card, CardContent } from "./ui/card"
import { IconButton } from "./icon-button"
import { Expand } from "lucide-react"
import { useRouter } from "next/navigation"
import { formatPrice } from "@/lib/format-price"

export const Products = () => {
    const { result, loading }: ResultType = useGetProducts()
    const router = useRouter()
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL
    return (
        <section id="productos" className="py-16 max-w-5xl mx-auto px-4">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-4">Nuestros Productos</h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Disponemos de una amplia variedad de maderas para satisfacer todas tus necesidades
                </p>

                <Carousel>
                    <CarouselContent>
                        {loading && (
                            <SkeletonSchema grid={3} />
                        )}
                        {result !== null && (
                            result.map((product: ProductType) => {
                                return (
                                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 group">
                                        <div className="p-1">
                                            <Card className="py-4 border border-gray-200 shadow-none">
                                                <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                    <img
                                                        src={API_URL + product.images[0].url}
                                                        alt={product.productName} className="rounded-sm w-auto h-72"
                                                    />
                                                    <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                        <div className="flex justify-center gap-x-6">
                                                            <IconButton onclick={() => router.push(`product/${product.slug}`)} icon={<Expand size={20} />} className="text-gray-900 cursor-pointer" />

                                                        </div>
                                                    </div>
                                                </CardContent>
                                                <div className="">
                                                    <h3 className="text-sm font-semibold text-center">{product.productName}</h3>
                                                    <p className="font-bold dark:text-yellow-600 flex justify-end items-end py-2 px-6">{formatPrice(product.price)}</p>
                                                </div>
                                            </Card>
                                        </div>

                                    </CarouselItem>
                                )
                            })
                        )}

                    </CarouselContent>

                </Carousel>




                <div className="mt-12 text-center">
                    <Button size="lg" >
                        Ver Catálogo Completo
                    </Button>
                </div>
            </div>
        </section>
    )
}