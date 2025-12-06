import Modal from "../../components/Modal";
import { DashboardModalProps } from "../Types";

export default function DashboardModal({ modalType, onClose }: DashboardModalProps) {
    if (!modalType) return null;

    const content = {
        quick: {
            title: "Termos rapidos de uso",
            description: "Este modal e mockado. Consulte Termos e Privacidade para detalhes completos.",
            list: [
                "Use sua conta apenas voce.",
                "Dados sao usados para personalizar sua jornada.",
                "Treinos sao sugestoes; procure um profissional.",
            ],
            primaryLabel: "Ver Termos completos",
            primaryOnClick: () => (window.location.href = "/termos"),
        },
        terms: {
            title: "Termos de Uso",
            description: "Resumo rapido dos termos para esta area privada.",
            list: [
                "Mantenha suas credenciais em sigilo; altere a senha em caso de suspeita.",
                "Nao utilize a plataforma para fins ilegais ou ofensivos.",
                "Planos e treinos sao sugestoes; consulte um profissional de saude.",
            ],
        },
        privacy: {
            title: "Politica de Privacidade",
            description: "Como tratamos dados nesta area mockada.",
            list: [
                "Coletamos informacoes de uso para personalizar treinos e progresso.",
                "Nao vendemos dados; usamos apenas para analytics internos.",
                "Voce pode solicitar exclusao quando desejar.",
            ],
        },
    }[modalType];

    return (
        <Modal
            title={content.title}
            description={content.description}
            isOpen
            onClose={onClose}
            primaryAction={
                content.primaryLabel
                    ? {
                        label: content.primaryLabel,
                        onClick: content.primaryOnClick ?? onClose,
                    }
                    : undefined
            }
        >
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                {content.list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Modal>
    );
}