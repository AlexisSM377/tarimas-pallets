import { Trees } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className=" py-12 pt-16 px-4  text-gray-300">
            <div className="container max-w-7xl mx-auto">
                <div className="flex justify-center gap-8 flex-col md:flex-row">
                    <div >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Trees className="h-6 w-6 text-amber-500" />
                            <span className="text-xl font-bold ">Tarimas y Pallets México</span>
                        </div>
                        <p className="text-sm">
                            Ofrecemos la mejor selección de maderas para tus proyectos, con calidad garantizada y servicio
                            excepcional.
                        </p>
                    </div>
                    {/* 
                    <div>
                        <h3 className="font-semibold text-white mb-4">Productos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Maderas Nacionales
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Maderas Importadas
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Tableros
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Vigas
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Decks
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Empresa</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Sostenibilidad
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Certificaciones
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Trabaja con Nosotros
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* <div>
              <h3 className="font-semibold text-white mb-4">Suscríbete</h3>
              <p className="text-sm mb-4">Recibe nuestras novedades y ofertas especiales</p>
              <form className="flex gap-2">
                <Input
                  placeholder="Tu email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button className="bg-amber-700 hover:bg-amber-800">Enviar</Button>
              </form>
            </div> */}
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">© {new Date().getFullYear()} Tarimas y Pallets México. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="text-sm hover:text-amber-500 transition-colors">
                            Términos y Condiciones
                        </Link>
                        <Link href="#" className="text-sm hover:text-amber-500 transition-colors">
                            Política de Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}