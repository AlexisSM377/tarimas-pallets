/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel"

interface CarouselProductImageProps {
    images: {
        id: number
        url: string
    }[]

}

export const CarouselProductImage = (props: CarouselProductImageProps) => {
    const { images } = props
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL
    return (
        <div className="sm:px-16 p-2 pt-10">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            <img
                                src={`${API_URL}${image.url}`}
                                alt="Image product"
                                className="rounded-md"
                            />

                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}