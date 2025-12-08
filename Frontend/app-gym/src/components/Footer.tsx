import Link from "next/link";

interface FooterProps {
    onTermsClick?: () => void;
    onPrivacyClick?: () => void;
    currentYear?: number;
}

export default function Footer({ onTermsClick, onPrivacyClick, currentYear }: FooterProps) {
    const year = currentYear ?? new Date().getFullYear();
    const renderNavItem = (label: string, href: string, onClick?: () => void) =>
        onClick ? (
            <button type="button" className="hover:text-white transition-colors" onClick={onClick}>
                {label}
            </button>
        ) : (
            <Link href={href} className="hover:text-white transition-colors">
                {label}
            </Link>
        );

    return (
        <footer className="border-t border-gray-800 bg-neutral-950 text-gray-300">
            <div className="container mx-auto flex flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                    <span>Project</span>
                    <span className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        Gym
                    </span>
                </div>

                <nav className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    {renderNavItem("Termos", "/termos", onTermsClick)}
                    {renderNavItem("Privacidade", "/privacidade", onPrivacyClick)}
                </nav>

                <p className="text-xs text-gray-500">&copy; {year} Project Gym. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
