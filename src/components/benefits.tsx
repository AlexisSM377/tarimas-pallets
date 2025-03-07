import { ThumbsUp, Trees, Truck } from "lucide-react"

export const Benefits = () => {
    return (

        <section id="beneficios" className="py-16 px-4">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 ">¿Por qué elegir nuestra madera?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 dark:text-white">
                    <div className="bg-[#161616] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <Trees className="h-6 w-6 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Madera Sostenible</h3>
                        <p className="text-muted-foreground dark:text-gray-300">
                            Toda nuestra madera proviene de bosques gestionados de forma sostenible y responsable.
                        </p>
                    </div>
                    <div className="bg-[#161616] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <ThumbsUp className="h-6 w-6 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Calidad Superior</h3>
                        <p className="text-muted-foreground dark:text-gray-300">
                            Seleccionamos cuidadosamente cada pieza para garantizar la mejor calidad en todos nuestros productos.
                        </p>
                    </div>
                    <div className="bg-[#161616] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <Truck className="h-6 w-6 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
                        <p className="text-muted-foreground dark:text-gray-300">
                            Contamos con servicio de entrega a domicilio para que recibas tu pedido en el menor tiempo posible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}