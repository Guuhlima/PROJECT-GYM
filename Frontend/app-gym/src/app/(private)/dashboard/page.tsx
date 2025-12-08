'use client';

import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button/Button";
import Sidebar from "../components/Sidebar";
import { NavItem } from "../Types/SidebarProps";
import ThemeToggle from "@/app/(private)/components/ThemeToggle";
import type { Theme } from "@/app/(private)/Types/ThemeMode";
import { Stat, Goal, ModalType, PlanItem, WorkoutItem } from "./Types";
import DashboardModal from "./components/DashboardModal";
import StatsGrid from "./components/StatsGrid";
import WorkoutSection from "./components/WorkoutSection";
import { WeeklyPlanSection } from "./components/WeeklyPlanSection";
import GoalsSection from "./components/GoalsSection";
import WeightCard from "./components/WeightCard";

const navItems: NavItem[] = [
    { label: "Dashboard", href: "/dashboard", badge: "hoje" },
    { label: "Perfil", href: "/profile" },
    { label: "Historico", href: "/history" },
    { label: "Configuracoes", href: "/settings" },
];

const stats: Stat[] = [
    { label: "Treinos concluidos", value: "12", detail: "+3 esta semana", color: "from-green-400 to-emerald-500" },
    { label: "Calorias queimadas", value: "7.8k", detail: "media 520 kcal/dia", color: "from-pink-500 to-orange-500" },
    { label: "Sessoes ativas", value: "5", detail: "cardio, perna, core", color: "from-purple-500 to-blue-500" },
    { label: "Dias de consistencia", value: "21", detail: "meta: 30 dias", color: "from-amber-400 to-pink-500" },
];

const todaysWorkout: WorkoutItem[] = [
    { name: "Aquecimento HIIT", sets: "3x", reps: "45s / 15s", intensity: "Alta" },
    { name: "Agachamento Livre", sets: "4x", reps: "10-12 reps", intensity: "Alta" },
    { name: "Remada Curvada", sets: "4x", reps: "8-10 reps", intensity: "Media" },
    { name: "Prancha Abdominal", sets: "3x", reps: "60s", intensity: "Media" },
];

const weeklyPlan: PlanItem[] = [
    { day: "Seg", focus: "Inferiores + HIIT", status: "Concluido" },
    { day: "Ter", focus: "Superiores", status: "Concluido" },
    { day: "Qua", focus: "Cardio + Core", status: "Concluido" },
    { day: "Qui", focus: "Lower + Gluteo", status: "Pendente" },
    { day: "Sex", focus: "Upper + Mobilidade", status: "Planejado" },
    { day: "Sab", focus: "Descanso ativo", status: "Planejado" },
];

const goals: Goal[] = [
    { title: "Reduzir 3% de BF", progress: 62 },
    { title: "Aumentar carga de agachamento em 15kg", progress: 45 },
    { title: "Dormir 8h por noite", progress: 70 },
];

export default function Dashboard() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [modalType, setModalType] = useState<ModalType>(null);
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
                <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"></div>
                <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"></div>
                <div className="absolute left-1/3 bottom-8 h-60 w-60 rounded-full bg-purple-600/15 blur-3xl"></div>
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
                                <Button variant="ghost" size="md" onClick={() => setModalType("terms")}>
                                    Termos e politicas
                                </Button>
                            </div>
                        }
                    />
                </div>

                <div className="flex-1 flex flex-col">
                    <header className="container mx-auto px-6 pt-8 pb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-pink-400">Project Gym</p>
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight">Dashboard</h1>
                            <p className={`${palette.textMuted} mt-2 max-w-2xl`}>
                                Mantenha-se alinhado com o plano de treinos, visualize progresso e prepare as proximas
                                sessoes. Dados mockados por enquanto.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-3 md:items-end">
                            <ThemeToggle theme={theme} onChange={setTheme} />
                            <div className="flex gap-2">
                                <Button variant="ghost" size="md" as="link" href="/login">
                                    Trocar conta
                                </Button>
                                <Button variant="outline" size="md" onClick={() => setModalType("quick")}>
                                    Ver termos rapidos
                                </Button>
                            </div>
                        </div>
                    </header>

                    <main className="container mx-auto px-6 pb-10 space-y-8 flex-1">
                        <StatsGrid stats={stats} palette={palette} />

                        <div className="grid gap-6 xl:grid-cols-3">
                            <WorkoutSection items={todaysWorkout} palette={palette} />
                            <WeightCard palette={palette} theme={theme} onOpenModal={() => setModalType("terms")} />
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            <WeeklyPlanSection items={weeklyPlan} palette={palette} />
                            <GoalsSection goals={goals} palette={palette} />
                        </div>
                    </main>

                    <Footer onTermsClick={() => setModalType("terms")} onPrivacyClick={() => setModalType("privacy")} />
                </div>
            </div>

            <DashboardModal modalType={modalType} onClose={() => setModalType(null)} />
        </div>
    );
}