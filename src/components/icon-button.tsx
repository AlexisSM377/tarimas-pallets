import { cn } from "@/lib/utils";

interface IconButtonProps {
    onclick: () => void;
    icon: React.ReactElement
    className?: string
}
export const IconButton = (props: IconButtonProps) => {
    const { onclick, icon, className } = props
    return (
        <button
            onClick={onclick}
            className={cn("rounded-full flex items-center bg-white shadow-md p-2 hover:scale-110 transition", className)}>
            {icon}
        </button>
    )
}