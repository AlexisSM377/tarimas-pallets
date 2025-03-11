import React from 'react';

interface ButtonHoverProps {
    href?: string;
    style?: keyof typeof STYLES;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    [key: string]: any;
}

const STYLES: Record<string, string> = {
    white: "text-black hover:bg-black hover:text-white",
    black: "text-white bg-black border-black hover:bg-white hover:border-black hover:text-black",
    yellow: "text-black bg-[#ade175] border-[#ade175] hover:bg-white hover:border-black flex items-center",
    transparent: "text-white bg-transparent border-white hover:bg-white hover:text-black",
} as const;

export const ButtonHover = (props: ButtonHoverProps) => {
    const { href, style, className, disabled, ...restOfProps } = props;
    const Component = href ? 'a' : 'button';
    const currentStyle = style && STYLES[style] ? STYLES[style] : STYLES.white;

    return (
        <Component
            className={[
                "px-5 py-3 border flex justify-center gap-2 transition items-center rounded-md",
                currentStyle,
                className,
                style !== "yellow" ? "effect01" : "",
                disabled ? "cursor-not-allowed pointer-events-none" : "",
            ].join(' ')}
            disabled={disabled}
            href={href}
            {...restOfProps}
        >
            {props.children}
        </Component>
    );
};
