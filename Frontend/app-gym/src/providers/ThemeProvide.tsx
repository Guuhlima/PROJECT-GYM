"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeKey, THEME_OPTIONS, ThemeVariants } from "@/components/theme/theme";

type ThemeContextValue = {
    theme: ThemeKey;
    setTheme: (theme: ThemeKey) => void;
    hydrated: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function isValidTheme(value: unknown): value is ThemeKey {
    return typeof value === "string" && (THEME_OPTIONS as readonly string[]).includes(value);
}

export function ThemeProvider({
    children,
    defaultTheme = "primary",
}: React.PropsWithChildren<{ defaultTheme?: ThemeKey }>) {
    const [theme, setThemeState] = useState<ThemeKey>(defaultTheme);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const saved = window.localStorage.getItem("app-theme");
        if (isValidTheme(saved)) {
            setThemeState(saved);
        }
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        window.localStorage.setItem("app-theme", theme);
    }, [theme, hydrated]);

    const setTheme = (theme: ThemeKey) => setThemeState(theme);

    const value = useMemo(() => ({ theme, setTheme, hydrated }), [theme, hydrated]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme deve ser usado dentro de <ThemeProvider />");
    return ctx;
}

export function ThemeBackground({ children }: React.PropsWithChildren) {
    const { theme } = useTheme();
    const bgClass = ThemeVariants[theme] ?? ThemeVariants.primary;

    return <div className={`${bgClass} min-h-screen`}>{children}</div>;
}
