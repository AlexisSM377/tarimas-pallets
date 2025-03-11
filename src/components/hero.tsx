'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { LinkWhatsapp } from "./linkWhatsapp"

export const Hero = () => {
    const router = useRouter()

    return (
        <section className="relative pt-32 max-w-7xl mx-auto px-4">

            <div className="relative h-[600px]">
                <Image
                    src="/cover.jpg"
                    alt="Madera de alta calidad"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center sm:px-2 pt-28">
                <div className="container">
                    <div className="max-w-xl space-y-5 justify-center text-center mx-auto">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                            Madera de la más alta calidad para tus proyectos
                        </h1>
                        <p className="text-xl text-white">
                            Ofrecemos la mejor selección de maderas nacionales e importadas para construcción, carpintería y
                            decoración.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Button onClick={() => router.push('/productos')} className="p-6">
                                <span className="text-base font-semibold">Ver Productos</span>
                                <ChevronRight size={20} />
                            </Button>
                            <LinkWhatsapp style="black" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}