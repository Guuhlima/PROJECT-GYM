"use client"

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button/Button";
import GradientText from "@/components/ui/Gradient/GradientText";
import Header from "@/components/ui/header/Header";
import Sidebar from "../components/Sidebar";
import { NavItem } from "../Types/SidebarProps";
import { Theme } from "../Types/ThemeMode";

const navItems: NavItem[] = [
    { label: "Dashboard", href: "/dashboard", badge: "hoje" },
    { label: "Perfil", href: "/profile" },
    { label: "Historico", href: "/history" },
    { label: "Configuracoes", href: "/settings" },
];

const goals = [
    { title: "Reduzir BF para 16%", progress: 62 },
    { title: "Manter 5x/semana", progress: 75 },
    { title: "Atingir 82kg com qualidade", progress: 48 },
];

const habits = [
    { label: "Sono medio", value: "7h 30m" },
    { label: "Agua/dia", value: "2.8L" },
    { label: "Passos/dia", value: "9.4k" },
    { label: "Ultima sessao", value: "Hoje, 06:20" },
];

const recentSessions = [
    { title: "Lower + HIIT", date: "Seg, 12 Fev", intensity: "Alta", calories: "540 kcal" },
    { title: "Upper + Core", date: "Dom, 11 Fev", intensity: "Media", calories: "420 kcal" },
    { title: "Cardio Intervalado", date: "Sex, 09 Fev", intensity: "Alta", calories: "390 kcal" },
];

export default function Profile() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const isDark = theme === "dark";

    const palette = useMemo(
        () => ({
            surface: isDark
                ? "bg-neutral-900/70 border border-gray-800"
                : "bg-white border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
            textMuted: isDark ? "text-gray-400" : "text-slate-600",
            textStrong: isDark ? "text-white" : "text-slate-900",
            pill: isDark ? "bg-white/5 border border-white/10 text-white" : "bg-slate-100 text-slate-800",
            background: isDark ? "bg-neutral-950 text-white" : "bg-slate-50 text-slate-900",
        }),
        [isDark]
    );

    return (
        <div className={`${palette.background} min-h-screen`}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl"></div>
                <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
                <div className="absolute left-1/3 bottom-8 h-60 w-60 rounded-full bg-slate-900/40 blur-3xl"></div>
            </div>

            <div className="relative z-10 flex min-h-screen">
                <div className="hidden lg:block p-6">
                    <Sidebar
                        theme={theme}
                        items={navItems}
                        collapsed={sidebarCollapsed}
                        onToggle={() => setSidebarCollapsed((prev) => !prev)}
                        footerSlot={
                            <div className="space-y-2">
                                <p className={`text-sm ${palette.textMuted}`}>Area privada mockada</p>
                                <Button variant="ghost" size="md">
                                    Termos e politicas
                                </Button>
                            </div>
                        }
                    />
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="container mx-auto px-6 pt-8 pb-4">
                        <Header
                            className="p-0"
                            actionClassName="flex justify-end"
                            heading={
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={4}
                                    showBorder={false}
                                    className="text-3xl md:text-4xl font-bold"
                                >
                                    Perfil
                                </GradientText>
                            }
                        />
                        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Project Gym</p>
                                <h2 className="text-2xl font-semibold leading-tight">Resumo da conta e progresso</h2>
                                <p className={`${palette.textMuted} mt-2 max-w-2xl`}>
                                    Ajuste dados pessoais, acompanhe evolucao e preferencia de treinos. Dados mockados
                                    por enquanto.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="outline" size="md">
                                    Editar perfil
                                </Button>
                                <Button variant="ghost" size="md">
                                    Upload foto
                                </Button>
                            </div>
                        </div>
                    </div>

                    <main className="container mx-auto px-6 pb-10 space-y-8 flex-1">
                        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                            <section className={`relative overflow-hidden rounded-2xl p-6 ${palette.surface}`}>
                                <div className="absolute inset-0 opacity-60 blur-3xl bg-linear-to-r from-blue-600/20 via-blue-500/10 to-emerald-400/20" />
                                <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center">
                                    <div className="h-20 w-20 rounded-2xl bg-linear-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center text-3xl font-bold">
                                        GA
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <h3 className="text-xl font-semibold">Gustavo Alves</h3>
                                            <span className={`text-xs px-3 py-1 rounded-full ${palette.pill}`}>Plano Pro</span>
                                            <span className={`text-xs px-3 py-1 rounded-full ${palette.pill}`}>Objetivo: Cutting</span>
                                        </div>
                                        <p className={palette.textMuted}>Desde Jan/2024 • Ultimo ajuste: 2 dias atras</p>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                                            {[
                                                { label: "Altura", value: "1,80 m" },
                                                { label: "Peso", value: "84,2 kg" },
                                                { label: "Idade", value: "28" },
                                                { label: "Experiencia", value: "Intermediario" },
                                            ].map((item) => (
                                                <div
                                                    key={item.label}
                                                    className={`rounded-xl px-4 py-3 ${isDark ? "bg-white/5" : "bg-slate-100"}`}
                                                >
                                                    <p className={`text-xs ${palette.textMuted}`}>{item.label}</p>
                                                    <p className="font-semibold">{item.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className={`rounded-xl px-4 py-3 ${isDark ? "bg-white/5" : "bg-slate-100"}`}>
                                            <p className="text-xs uppercase tracking-wide text-green-400">Consistencia</p>
                                            <p className="text-2xl font-bold">87%</p>
                                            <p className={`text-xs ${palette.textMuted}`}>Media ultimos 30 dias</p>
                                        </div>
                                        <Button variant="ghost" size="md">
                                            Ver historico
                                        </Button>
                                    </div>
                                </div>
                            </section>

                            <section className={`rounded-2xl p-6 space-y-5 ${palette.surface}`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Progresso</p>
                                        <h3 className="text-xl font-semibold">Peso e rotina</h3>
                                    </div>
                                    <Button variant="outline" size="md">
                                        Atualizar
                                    </Button>
                                </div>
                                <div className="rounded-xl p-4 bg-linear-to-r from-blue-600/10 via-blue-500/5 to-emerald-400/10 border border-blue-500/20">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className={`text-sm ${palette.textMuted}`}>Peso atual</p>
                                            <p className="text-3xl font-bold">84,2 kg</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-sm ${palette.textMuted}`}>Meta</p>
                                            <p className="text-xl font-semibold">82,0 kg</p>
                                            <p className="text-xs text-green-400">-2,2 kg restantes</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 h-2 rounded-full bg-slate-200/40">
                                        <div className="h-full w-[68%] rounded-full bg-linear-to-r from-blue-500 to-emerald-400"></div>
                                    </div>
                                    <p className={`text-xs mt-2 ${palette.textMuted}`}>Media semanal: -0,4 kg</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "Treinos/semana", value: "5/5", hint: "objetivo atingido" },
                                        { label: "Tempo medio", value: "54m", hint: "por sessao" },
                                        { label: "Cardio", value: "2x", hint: "HIIT + corrida" },
                                        { label: "Forca", value: "3x", hint: "upper/lower/core" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className={`rounded-xl px-4 py-3 ${isDark ? "bg-white/5" : "bg-slate-100"}`}
                                        >
                                            <p className={`text-xs ${palette.textMuted}`}>{item.label}</p>
                                            <p className="text-lg font-semibold">{item.value}</p>
                                            <p className={`text-[11px] ${palette.textMuted}`}>{item.hint}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            <section className={`rounded-2xl p-6 space-y-4 ${palette.surface}`}>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold">Habitos</h3>
                                    <Button variant="ghost" size="md">
                                        Ajustar
                                    </Button>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {habits.map((item) => (
                                        <div
                                            key={item.label}
                                            className={`rounded-xl px-4 py-3 flex items-center justify-between ${isDark ? "bg-white/5" : "bg-slate-100"}`}
                                        >
                                            <p className={`text-sm ${palette.textMuted}`}>{item.label}</p>
                                            <p className="font-semibold">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className={`rounded-xl px-4 py-3 ${isDark ? "bg-white/5" : "bg-slate-100"}`}>
                                    <p className="text-sm font-semibold">Notas rapidas</p>
                                    <p className={`text-sm mt-1 ${palette.textMuted}`}>
                                        Dormindo melhor apos reduzir cafeina a noite e alongar 10m antes de deitar.
                                    </p>
                                </div>
                            </section>

                            <section className={`rounded-2xl p-6 space-y-4 ${palette.surface}`}>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold">Metas atuais</h3>
                                    <Button variant="outline" size="md">
                                        Editar
                                    </Button>
                                </div>
                                <div className="space-y-3">
                                    {goals.map((goal) => (
                                        <div key={goal.title}>
                                            <div className="flex items-center justify-between">
                                                <p className="font-medium">{goal.title}</p>
                                                <span className="text-sm text-blue-400">{goal.progress}%</span>
                                            </div>
                                            <div className="mt-2 h-2 rounded-full bg-slate-200/40">
                                                <div
                                                    className="h-full rounded-full bg-linear-to-r from-blue-500 to-emerald-400"
                                                    style={{ width: `${goal.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <section className={`rounded-2xl p-6 space-y-4 ${palette.surface}`}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Ultimas sessoes</h3>
                                <Button variant="ghost" size="md">
                                    Ver todas
                                </Button>
                            </div>
                            <div className="grid md:grid-cols-3 gap-3">
                                {recentSessions.map((session) => (
                                    <div
                                        key={session.title}
                                        className={`rounded-xl px-4 py-3 space-y-2 ${isDark ? "bg-white/5" : "bg-slate-100"}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold">{session.title}</p>
                                            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300">
                                                {session.intensity}
                                            </span>
                                        </div>
                                        <p className={`text-sm ${palette.textMuted}`}>{session.date}</p>
                                        <p className="text-sm font-medium text-emerald-400">{session.calories}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
