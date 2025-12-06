'use client';

import type { Theme } from "../Types/ThemeMode";

interface ThemeToggleProps {
    theme: Theme;
    onChange: (theme: Theme) => void;
}

export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
    const isDark = theme === "dark";
    const handleToggle = () => onChange(isDark ? "light" : "dark");

    return (
        <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            aria-pressed={isDark}
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
        >
            {isDark ? <MoonIcon /> : <SunIcon />}
            <span>{isDark ? "Escuro" : "Claro"}</span>
        </button>
    );
}

function SunIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-300">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07-1.41 1.41M6.34 17.66l-1.41 1.41m0-13.66 1.41 1.41m10.32 10.32 1.41 1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-200">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
    );
}
