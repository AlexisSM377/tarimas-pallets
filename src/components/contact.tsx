import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export const Contact = () => {
    return (
        <section id="contacto" className="max-w-5xl py-24 mx-auto  px-4 ">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>

                <div >
                    {/* <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-6">Envíanos un mensaje</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nombre
                                    </label>
                                    <Input id="name" placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="tu@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Asunto
                                </label>
                                <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Mensaje
                                </label>
                                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} />
                            </div>
                            <Button className="w-full ">Enviar Mensaje</Button>
                        </form>
                    </div> */}

                    <div className="bg-white dark:bg-[#161616] p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-amber-700 mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Dirección</p>
                                        <p className="text-muted-foreground">Av. de los Árboles 1234, Ciudad Forestal</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="h-5 w-5 text-amber-700 mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Teléfono</p>
                                        <p className="text-muted-foreground">+52 56 2830 3302</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="h-5 w-5 text-amber-700 mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-muted-foreground">info@maderapremium.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Horario de Atención</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Lunes a Viernes</span>
                                    <span>8:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábados</span>
                                    <span>9:00 - 13:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingos</span>
                                    <span>Cerrado</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}