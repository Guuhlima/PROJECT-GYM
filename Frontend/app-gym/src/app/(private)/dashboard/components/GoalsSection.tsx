import Button from "@/components/ui/Button/Button";
import Card from "../../components/Card";
import { GoalsSectionProps } from "../Types";

export default function GoalsSection({ goals, palette }: GoalsSectionProps) {
    return (
        <Card surface={palette.surface} className="space-y-5">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Metas ativas</h3>
                <Button variant="ghost" size="md">
                    Nova meta (mock)
                </Button>
            </div>
            <div className="space-y-4">
                {goals.map((goal) => (
                    <div key={goal.title} className="space-y-2">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">{goal.title}</p>
                            <span className={`${palette.textMuted} text-sm`}>{goal.progress}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
                                style={{ width: `${goal.progress}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
