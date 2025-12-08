import React from "react";
import type { Theme } from "../Types/ThemeMode";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    tone?: Theme;
}

const baseStyles =
    "w-full rounded-lg px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500";

const toneStyles: Record<Theme, string> = {
    dark: "bg-neutral-950 border border-gray-800 text-white placeholder:text-gray-500",
    light: "bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400",
};

export default function Input({ label, helperText, tone = "dark", className = "", ...props }: InputProps) {
    return (
        <label className="block space-y-2 text-sm">
            {label && <span className={tone === "dark" ? "text-gray-200" : "text-slate-700"}>{label}</span>}
            <input className={`${baseStyles} ${toneStyles[tone]} ${className}`} {...props} />
            {helperText && (
                <span className={tone === "dark" ? "text-gray-400" : "text-slate-500"}>{helperText}</span>
            )}
        </label>
    );
}
