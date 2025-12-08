import Button from "@/components/ui/Button/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { WeightCardProps } from "../Types";

export default function WeightCard({ palette, theme }: WeightCardProps) {
    return (
        <Card surface={palette.surface} className="space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-pink-300">Registrar peso</p>
                    <h3 className="text-xl font-semibold">Ajuste sua meta semanal</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${palette.pill}`}>Mock</span>
            </div>

            <Input label="Peso (kg)" placeholder="Ex: 72.4" tone={theme} type="number" />
            <Button className="w-full" size="md">
                Salvar (mock)
            </Button>
            <div className="flex items-center justify-between">
                <p className={`${palette.textMuted} text-sm`}>
                    Registrar peso 3x/semana ajuda a acompanhar tendencia real.
                </p>
            </div>
        </Card>
    );
}