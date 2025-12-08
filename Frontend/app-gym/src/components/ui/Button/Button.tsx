'use client'

import Link from "next/link";
import React from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const baseButtonClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold tracking-tight transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses: Record<Variant, string> = {
    primary:
        "bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-pink-400",
    outline:
        "border border-pink-400/60 text-pink-100 hover:bg-pink-500/10 hover:text-white focus-visible:outline-pink-300",
    ghost: "text-gray-200 hover:text-white hover:bg-white/5 focus-visible:outline-pink-300",
};

const sizeClasses: Record<Size, string> = {
    md: "px-4 py-2.5 text-sm md:text-base",
    lg: "px-5 py-3.5 text-base md:text-lg",
};

type ButtonAsButton = {
    as?: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
    as: "link";
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type BaseButtonProps = {
    variant?: Variant;
    size?: Size;
    className?: string;
    children: React.ReactNode;
};

type ButtonProps = BaseButtonProps & (ButtonAsButton | ButtonAsLink);

function cx(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export default function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    const composedClasses = cx(baseButtonClasses, variantClasses[variant], sizeClasses[size], className);

    if (props.as === "link") {
        const { href, as: _as, ...rest } = props;
        return (
            <Link href={href} className={composedClasses} {...rest}>
                {children}
            </Link>
        );
    }

    const { as: _as, ...buttonProps } = props as ButtonAsButton;

    return (
        <button className={composedClasses} {...buttonProps}>
            {children}
        </button>
    );
}
