import Image from "next/image"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

export const Hero = () => {
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
                        <div className="flex flex-col sm:flex-row gap-4 w-40 justify-center mx-auto">
                            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white font-medium">
                                Ver Catálogo <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/10 text-black font-medium hover:bg-white/20 border-white">
                                Contactar Ahora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}