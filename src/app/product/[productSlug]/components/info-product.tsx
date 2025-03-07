import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/format-price"
import { ProductType } from "@/types/product"
import { Grid2x2Plus, PencilRuler, Ruler, Weight } from "lucide-react"

export type InfoProductProps = {
    product: ProductType
}

export const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl block mt-3">{product.productName}</h1>
            </div>
            <Separator className="my-4" />
            <p className="text-base block text-justify">{product.description}</p>
            <Separator className="my-4" />

            <div>
                <h2 className="text-lg font-semibold">Especificaciones Técnicas</h2>
                {product.size.data.map((size) => (
                    <div key={size.alto} className="grid grid-cols-2 gap-y-3 py-4">
                        <p className="flex items-center gap-2">
                            <Grid2x2Plus size={24} />
                            Ancho: {size.ancho}
                        </p>
                        <p className="flex items-center gap-2">
                            <Ruler size={24} />
                            Largo: {size.largo}
                        </p>
                        <p className="flex items-center gap-2">
                            <PencilRuler size={24} />
                            Alto: {size.alto}
                        </p>
                        <p className="flex items-center gap-2">
                            <Weight size={24} />
                            Peso: {size.peso}
                        </p>
                    </div>
                ))}
            </div>
            <Separator className="my-4" />

            <div className="flex justify-between mt-4">
                <div className="flex items-center">
                    <h2 className="text-lg">Precio:</h2>
                    <p className="text-lg font-bold ml-2 dark:text-yellow-600">{formatPrice(product.price)}</p>
                </div>
                <div className="flex items-center">
                    <h2 className="text-lg">Stock:</h2>
                    <p className="text-lg font-medium ml-2">{product.stock}</p>
                </div>
            </div>
        </div>

    )
}