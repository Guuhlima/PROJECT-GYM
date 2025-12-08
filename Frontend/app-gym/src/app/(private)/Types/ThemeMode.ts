export type Theme = "dark" | "light";

export interface ThemeToggleProps {
    theme: Theme;
    onChange: (theme: Theme) => void;
}