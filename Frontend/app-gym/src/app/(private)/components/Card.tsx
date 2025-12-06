import React from "react";
import { CardProps } from "../Types/CardsProps";

export default function Card({
    surface,
    className = "",
    padding = "p-6",
    rounded = "rounded-2xl",
    overlayClassName,
    children,
}: CardProps) {
    return (
        <div className={`relative ${rounded} ${surface} ${padding} ${className}`}>
            {overlayClassName && <div className={`absolute inset-0 opacity-30 blur-2xl ${overlayClassName}`} aria-hidden />}
            <div className="relative">{children}</div>
        </div>
    );
}
