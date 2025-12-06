import Card from "@/app/(private)/components/Card";
import { StatsGridProps } from "../Types";

export default function StatsGrid({ stats, palette }: StatsGridProps) {
    return (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
                <Card
                    key={stat.label}
                    surface={palette.surface}
                    padding="p-4"
                    className="shadow-lg overflow-hidden"
                    overlayClassName={`bg-gradient-to-r ${stat.color}`}
                >
                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-tight text-pink-200">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className={palette.textMuted}>{stat.detail}</p>
                    </div>
                </Card>
            ))}
        </section>
    );
}
