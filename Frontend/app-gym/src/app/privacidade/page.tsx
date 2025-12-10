import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacidadePage() {
    return (
        <div className="relative min-h-screen bg-slate-950 text-white flex flex-col">
            <div className="absolute inset-0 opacity-50 pointer-events-none -z-10">
                <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-blue-700 blur-3xl" />
                <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-blue-500 blur-3xl" />
                <div className="absolute left-1/3 bottom-10 h-56 w-56 rounded-full bg-slate-900 blur-3xl" />
            </div>

            <header className="relative z-10 container mx-auto px-6 py-10 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white">
                    Project
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                        Gym
                    </span>
                </Link>
                <Link href="/termos" className="text-sm text-blue-300 hover:text-blue-100 transition-colors">
                    Termos de uso
                </Link>
            </header>

            <main className="relative z-10 container mx-auto px-6 pb-12 space-y-8 flex-1">
                <h1 className="text-3xl md:text-4xl font-bold">Politica de Privacidade</h1>
                <div className="grid gap-6 md:grid-cols-2">
                    <section className="rounded-2xl border border-slate-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold text-blue-100">1. Coleta de dados</h2>
                        <p className="text-slate-300 text-sm">
                            Coletamos informacoes de cadastro, treinos e progresso para entregar recomendacoes
                            personalizadas e acompanhar sua evolucao.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-slate-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold text-blue-100">2. Uso</h2>
                        <p className="text-slate-300 text-sm">
                            Os dados sao usados para analytics internos, sugestoes de treino e notificacoes relevantes.
                            Nao vendemos suas informacoes.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-slate-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold text-blue-100">3. Armazenamento</h2>
                        <p className="text-slate-300 text-sm">
                            Mantemos dados em ambientes controlados e aplicamos criptografia em transito. Voce pode
                            solicitar a exclusao a qualquer momento.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-slate-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold text-blue-100">4. Cookies</h2>
                        <p className="text-slate-300 text-sm">
                            Utilizamos cookies para manter sua sessao ativa e lembrar preferencias, incluindo o tema
                            escuro/claro.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
