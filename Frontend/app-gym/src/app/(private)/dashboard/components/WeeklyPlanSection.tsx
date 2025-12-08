import Button from "@/components/ui/Button/Button";
import Card from "../../components/Card";
import { WeeklyPlanSectionProps } from "../Types";

export function WeeklyPlanSection({ items, palette }: WeeklyPlanSectionProps) {
    return (
        <Card surface={palette.surface} className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Plano semanal</h3>
                <Button variant="ghost" size="md">
                    Editar (mock)
                </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((item) => (
                    <Card key={item.day} surface={palette.surface} padding="p-3" rounded="rounded-xl">
                        <p className="text-sm text-pink-300">{item.day}</p>
                        <p className="font-semibold">{item.focus}</p>
                        <p className={`${palette.textMuted} text-sm`}>{item.status}</p>
                    </Card>
                ))}
            </div>
        </Card>
    );
}