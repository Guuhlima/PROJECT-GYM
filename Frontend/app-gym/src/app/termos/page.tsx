import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermosPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-pink-500 blur-3xl" />
                <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-green-400 blur-3xl" />
                <div className="absolute left-1/3 bottom-10 h-56 w-56 rounded-full bg-purple-600 blur-3xl" />
            </div>

            <header className="relative z-10 container mx-auto px-6 py-10 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-indigo-300">
                    Project<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Gym</span>
                </Link>
                <Link href="/privacidade" className="text-sm text-pink-300 hover:text-pink-100 transition-colors">
                    Política de privacidade
                </Link>
            </header>

            <main className="relative z-10 container mx-auto px-6 pb-12 space-y-8 flex-1">
                <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
                <div className="grid gap-6 md:grid-cols-2">
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">1. Conta e acesso</h2>
                        <p className="text-gray-300 text-sm">
                            Você é responsável por manter suas credenciais seguras. Não compartilhe login e senha. Ao
                            detectar atividade suspeita, altere a senha imediatamente.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">2. Dados e privacidade</h2>
                        <p className="text-gray-300 text-sm">
                            Usamos dados para personalizar sua experiência de treino. Consulte a Política de Privacidade
                            para saber como coletamos, armazenamos e protegemos as informações.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">3. Conteúdo</h2>
                        <p className="text-gray-300 text-sm">
                            Planos, treinos e insights são sugestões. Sempre consulte um profissional de saúde antes de
                            iniciar qualquer rotina de exercícios.
                        </p>
                    </section>
                    <section className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm space-y-3">
                        <h2 className="text-xl font-semibold">4. Uso adequado</h2>
                        <p className="text-gray-300 text-sm">
                            Não é permitido usar a plataforma para fins ilegais, compartilhar conteúdo ofensivo ou
                            tentar obter acesso não autorizado.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
