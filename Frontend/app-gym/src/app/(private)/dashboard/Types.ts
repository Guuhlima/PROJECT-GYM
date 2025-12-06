import { Theme } from "../Types/ThemeMode";

export interface Stat {
    label: string;
    value: string;
    detail: string;
    color: string;
}

export interface WorkoutItem {
    name: string;
    sets: string;
    reps: string;
    intensity: "Alta" | "Media" | "Baixa";
}

export interface PlanItem {
    day: string;
    focus: string;
    status: "Concluido" | "Pendente" | "Planejado";
}

export interface Goal {
    title: string;
    progress: number;
}

export interface DashboardModalProps {
    modalType: ModalType;
    onClose: () => void;
}

export interface StatsGridProps {
    stats: Stat[];
    palette: {
        surface: string;
        textMuted: string;
    };
}

export interface GoalsSectionProps {
    goals: Goal[];
    palette: {
        surface: string;
        textMuted: string;
    };
}

export interface WeeklyPlanSectionProps {
    items: PlanItem[];
    palette: {
        surface: string;
        textMuted: string;
    };
}

export interface WeightCardProps {
    palette: {
        surface: string;
        textMuted: string;
        pill: string;
    };
    theme: Theme;
    onOpenModal: () => void;
}

export interface WorkoutSectionProps {
    items: WorkoutItem[];
    palette: {
        surface: string;
        textMuted: string;
        pill: string;
    };
}

export type ModalType = "quick" | "terms" | "privacy" | null;