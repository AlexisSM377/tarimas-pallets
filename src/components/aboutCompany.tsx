/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetAbout } from "@/lib/get-about";
import { ResultType } from "@/types/response";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Avatar } from "./avatar";
import { Contact } from "./contact";

export const AboutCompany = () => {
    const { result, loading }: ResultType = useGetAbout();

    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL
    return (
        <section id="nosotros" className="py-16 max-w-5xl mx-auto">
            <div className="container">
                <div className="">
                    {
                        loading && (
                            <div className="skeleton h-6 w-48 mb-4"></div>
                        )
                    }
                    {result !== null && (
                        <div>
                            <h2 className="text-3xl font-bold mb-16 text-center ">{result.nameCompany}</h2>
                            <div className="grid grid-cols-1  md:grid-cols-2  gap-12 px-4">
                                <img
                                    src={API_URL + result.logo.url}
                                    alt={result.nameCompany}
                                    className="w-full h-96 object-cover rounded-sm"
                                />
                                <div className="flex flex-col ">
                                    <p className="text-justify">
                                        <BlocksRenderer content={result.description} />
                                    </p>
                                    <div className="flex items-center">
                                        <Shield className="h-5 w-5 text-amber-700 mr-2" />
                                        <span>Garantía de calidad</span>
                                    </div>
                                </div>
                            </div>

                            <Accordion type="single" collapsible className="sm:max-w-2xl md:max-2xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg">
                                        Mision
                                    </AccordionTrigger>
                                    <AccordionContent className="text-justify text-base">
                                        {result.mission}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-lg">
                                        Vision
                                    </AccordionTrigger>
                                    <AccordionContent className="text-justify text-base">
                                        {result.vision}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-lg">
                                        Valores
                                    </AccordionTrigger>
                                    <AccordionContent className="text-center text-base">
                                        <BlocksRenderer content={result.values} />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>


                        </div>
                    )}


                    <Avatar />
                    <Contact />

                </div>

            </div>

        </section>
    )
}