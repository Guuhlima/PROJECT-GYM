export const ThemeVariants = {
  primary: "bg-slate-950",
  secondary: "bg-gray-500",
  dark: "bg-black",
  white: "bg-white",
} as const;

export type ThemeKey = keyof typeof ThemeVariants;

export const THEME_OPTIONS = Object.keys(ThemeVariants) as ThemeKey[];
