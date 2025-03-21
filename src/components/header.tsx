'use client'
import { cn } from "@/lib/utils"
import { Trees } from "lucide-react"
import { useId, useState } from "react"
import { ModeToggle } from "./toggle-theme"
import Link from "next/link"

export const Header = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const navbarId = useId()

    return (
        <header className="header-animate backdrop-blur-[10px] md:backdrop-blur-0 w-full mb-10 overflow-hidden z-[999] py-8  px-4 md:px-8">
            <div className="grid items-center justify-center md:justify-normal w-full grid-cols-[auto_1fr] gap-x-10 md:flex max-w-7xl mx-auto">
                <Link href={"/"} className="flex items-center gap-2">
                    <Trees className="h-6 w-6 text-amber-700" />
                    <div className="max-md:-mb-1">
                        <h3
                            className="font-semibold uppercase max-md:h-4 md:text-2xl text-lg flex flex-row items-center gap-x-2 "
                        >
                            Tarimas y Pallets
                        </h3>
                        <span
                            className="uppercase  text-base font-bold max-md:text-sm text-amber-700"
                        >
                            México
                        </span>
                    </div>
                </Link>
                <nav
                    id={navbarId}
                    className={cn(
                        'col-span-full overflow-x-auto row-[2/3] grid md:block grid-rows-[0fr] transition-[grid-template-rows]',
                        {
                            'grid-rows-[1fr]': isNavbarOpen
                        }
                    )}
                >
                    <ul className="flex flex-col items-center overflow-x-auto overflow-y-hidden md:overflow-hidden md:flex-row">
                        {NAV_ITEMS.map(({ href, title }, index) => (
                            <li
                                key={index}
                                className='flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto'
                            >
                                <a
                                    href={href}
                                    className='flex items-center justify-center w-full gap-1 px-5 py-4 text-xl duration-300 md:w-auto md:py-2 md:text-lg hover:scale-110'
                                >

                                    {title}
                                </a>
                            </li>
                        ))}

                    </ul>

                </nav>
                <div className="flex items-center justify-end gap-4 mr-4 md:ml-auto ">
                    <ModeToggle />


                    <button
                        className="flex items-center justify-center py-2 md:hidden"
                        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        aria-expanded={isNavbarOpen}
                        aria-controls={navbarId}
                        title="Mostrar menú"
                        aria-label="Mostrar menú"
                    >
                        <div className="flex items-center justify-center p-2 cursor-pointer group">
                            <div className="space-y-2">
                                <span className={cn('block h-1 w-8 origin-center rounded-full bg-amber-500 transition-transform ease-in-out', { 'translate-y-1.5 rotate-45': isNavbarOpen })}></span>
                                <span className={cn('block h-1 w-8 origin-center rounded-full bg-amber-500 transition-transform ease-in-out', { 'w-8 -translate-y-1.5 -rotate-45': isNavbarOpen })}></span>
                            </div>
                        </div>
                    </button>
                </div>

            </div>

        </header>
    )
}


const NAV_ITEMS = [
    {
        href: "/madera",
        title: 'Productos'
    },
    {
        href: "/categories",
        title: 'Categorías'
    },
    {
        href: "/about",
        title: 'Nosotros'
    },
    {
        href: "/#contacto",
        title: 'Contacto'
    }
]