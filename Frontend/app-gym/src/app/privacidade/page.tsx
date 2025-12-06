import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacidadePage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-green-500 blur-3xl" />
                <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-pink-400 blur-3xl" />
                <div className="absolute left-1/3 bottom-10 h-56 w-56 rounded-full bg-purple-600 blur-3xl" />
            </div>

            <header className="relative z-10 container mx-auto px-6 py-10 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-indigo-300">
                    Project<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Gym</span>
                </Link>
                <Link href="/termos" className="text-sm text-pink-300 hover:text-pink-100 transition-colors">
                    Termos de uso
                </Link>
            </header>

            <main className="relative z-10 container mx-auto px-6 pb-12 space-y-8 flex-1">
                <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
                <div className="grid gap-6 md:grid-cols-2">
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">1. Coleta de dados</h2>
                        <p className="text-gray-300 text-sm">
                            Coletamos informações de cadastro, treinos e progresso para entregar recomendações
                            personalizadas e acompanhar sua evolução.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">2. Uso</h2>
                        <p className="text-gray-300 text-sm">
                            Os dados são usados para analytics internos, sugestões de treino e notificações relevantes.
                            Não vendemos suas informações.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">3. Armazenamento</h2>
                        <p className="text-gray-300 text-sm">
                            Mantemos dados em ambientes controlados e aplicamos criptografia em trânsito. Você pode
                            solicitar a exclusão a qualquer momento.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">4. Cookies</h2>
                        <p className="text-gray-300 text-sm">
                            Utilizamos cookies para manter sua sessão ativa e lembrar preferências, incluindo o tema
                            escuro/claro.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
