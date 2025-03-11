/* eslint-disable @next/next/no-img-element */
import { CategoryType } from "@/types/category"
import Link from "next/link"

type CategoryCardProps = {
    category: CategoryType
}
export const CategoryCard = (props: CategoryCardProps) => {
    const { category } = props
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

    return (
        <Link href={`/category/${category.slug}`}>
            <div className="px-2">
                <img
                    src={API_URL + category.mainImage.url}
                    alt={category.name}
                    className="w-full h-68 rounded-sm object-cover  transition duration-300 ease-in-out hover:scale-105"
                />
                <h2 className="text-lg font-medium text-center pt-6">{category.name}</h2>
            </div>
        </Link>
    )
}