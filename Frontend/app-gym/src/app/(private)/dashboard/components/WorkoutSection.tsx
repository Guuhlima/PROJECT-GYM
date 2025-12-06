import Card from "@/app/(private)/components/Card";
import { WorkoutSectionProps } from "../Types";

export default function WorkoutSection({ items, palette }: WorkoutSectionProps) {
    return (
        <Card surface={palette.surface} className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-pink-300">Treino de hoje</p>
                    <h2 className="text-2xl font-semibold">Full Body + HIIT</h2>
                    <p className={palette.textMuted}>45-60 minutos - foco em performance e core</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${palette.pill}`}>Assinatura Pro</span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
                {items.map((item) => (
                    <Card
                        key={item.name}
                        surface={palette.surface}
                        padding="px-4 py-3"
                        rounded="rounded-xl"
                        className="flex items-start justify-between"
                    >
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className={`${palette.textMuted} text-sm`}>
                                {item.sets} · {item.reps}
                            </p>
                        </div>
                        <span className="text-xs font-semibold text-pink-200">{item.intensity}</span>
                    </Card>
                ))}
            </div>
        </Card>
    );
}
