import React from "react";
import { useTheme } from "@/providers/ThemeProvide";
import { THEME_OPTIONS, ThemeKey } from "./theme";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as ThemeKey)}
            className="rounded px-3 py-2 text-black"
        >
            {THEME_OPTIONS.map((key) => (
                <option key={key} value={key}>
                    {key}
                </option>
            ))}
        </select>
    );
}
