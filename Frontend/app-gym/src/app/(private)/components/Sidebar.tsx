'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProps } from "../Types/SidebarProps";

export default function Sidebar({ theme, items, footerSlot, collapsed, onToggle }: SidebarProps) {
    const pathname = usePathname();
    const isDark = theme === "dark";

    const baseBg = isDark ? "bg-slate-950/80 border-slate-800" : "bg-white border-slate-200 shadow-lg";
    const textMuted = isDark ? "text-slate-400" : "text-slate-500";

    return (
        <aside
            className={`hidden lg:flex ${collapsed ? "w-20" : "w-64"} flex-col rounded-2xl border ${baseBg} backdrop-blur-md p-4 space-y-4 sticky top-6 h-[calc(100vh-48px)]`}
        >
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-300">{collapsed ? "PG" : "Project Gym"}</p>
                    {!collapsed && <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Painel</h2>}
                    {!collapsed && <p className={`text-sm ${textMuted}`}>Navegacao rapida</p>}
                </div>
                <button
                    type="button"
                    aria-label={collapsed ? "Expandir sidebar" : "Recolher sidebar"}
                    className="rounded-full bg-white/10 px-2 py-1 text-sm text-white hover:bg-white/20 transition"
                    onClick={onToggle}
                >
                    {collapsed ? ">>" : "<<"}
                </button>
            </div>

            <nav className="space-y-2">
                {items.map((item) => {
                    const active = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition ${active
                                ? "bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg"
                                : isDark
                                    ? "text-slate-200 hover:bg-white/5"
                                    : "text-slate-800 hover:bg-slate-100"
                                }`}
                        >
                            <span>{collapsed ? item.label.slice(0, 1) : item.label}</span>
                            {item.badge && !collapsed && (
                                <span className="text-[10px] uppercase tracking-wide bg-white/20 rounded-full px-2 py-0.5">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>
            {footerSlot && (
                <div className={`mt-auto pt-4 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
                    {!collapsed && footerSlot}
                </div>
            )}
        </aside>
    );
}
