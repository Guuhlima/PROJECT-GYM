import { Theme } from "./ThemeMode";

export interface NavItem {
    label: string;
    href: string;
    badge?: string;
}

export interface SidebarProps {
    theme: Theme;
    items: NavItem[];
    footerSlot?: React.ReactNode;
    collapsed: boolean;
    onToggle: () => void;
}
