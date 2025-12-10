import Footer from "@/components/Footer";
import Button from "@/components/ui/Button/Button";
import Header from "@/components/ui/header/Header";

const highlights = [
    "Planejamento ajustado ao seu ritmo",
    "Monitoramento de progresso em tempo real",
    "UX minimalista com foco no treino",
    "Seguranca e privacidade garantidas",
];

export default function RegisterPage() {
    return (
        <div className="relative min-h-screen bg-slate-950 text-white flex flex-col">
            <div className="absolute inset-0 opacity-60 pointer-events-none -z-10">
                <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-700 blur-3xl"></div>
                <div className="absolute right-0 top-36 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
                <div className="absolute left-1/3 bottom-12 h-60 w-60 rounded-full bg-slate-900 blur-3xl"></div>
            </div>

            <Header
                className="container mx-auto p-6"
                actionClassName="flex justify-end w-72"
                heading={
                    <>
                        Project
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                            Gym
                        </span>
                    </>
                }
                action={
                    <>
                        <Button as="link" href="/" variant="ghost" className="text-blue-100 hover:text-white hover:bg-white/5">
                            Home
                        </Button>
                        <Button as="link" href="/login" variant="outline" className="border-blue-400/60 text-blue-100 hover:bg-blue-500/10 focus-visible:outline-blue-300">
                            Login
                        </Button>
                    </>
                }
            />

            <main className="container relative z-10 mx-auto flex-1 px-6 py-8 lg:py-12 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Conta gratuita</p>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-white">
                        Cadastre-se e acompanhe seus treinos com um visual limpo.
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl">
                        Centralize dados de progresso, metas e planos semanais em uma experiencia coerente, menos
                        colorida e mais focada no que importa: sua evolucao.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-slate-800 bg-white/5 p-4 backdrop-blur-sm text-slate-200"
                            >
                                <p className="text-sm text-blue-200">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-40 blur-2xl"></div>
                    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md">
                        <div className="mb-6 flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm text-blue-300">Novo cadastro</p>
                                <h2 className="text-2xl font-bold text-white">Crie sua conta</h2>
                            </div>
                            <span className="rounded-full border border-blue-500/60 px-3 py-1 text-xs uppercase tracking-wide text-blue-100 bg-blue-500/10">
                                Seguro
                            </span>
                        </div>

                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm text-slate-200" htmlFor="name">
                                    Nome completo
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                                    placeholder="Seu nome"
                                    autoComplete="name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-slate-200" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                                    placeholder="voce@email.com"
                                    autoComplete="email"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-200" htmlFor="password">
                                        Senha
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                                        placeholder="********"
                                        autoComplete="new-password"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-200" htmlFor="confirmPassword">
                                        Confirmar senha
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                                        placeholder="********"
                                        autoComplete="new-password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-sm text-slate-300">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500"
                                />
                                <label htmlFor="terms" className="leading-relaxed">
                                    Concordo com os termos de uso e politica de privacidade do Project Gym.
                                </label>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-blue-300"
                                >
                                    Criar conta gratuita
                                </Button>
                                <Button
                                    as="link"
                                    href="/login"
                                    variant="outline"
                                    size="lg"
                                    className="border-blue-400/60 text-blue-100 hover:bg-blue-500/10 focus-visible:outline-blue-300"
                                >
                                    Ja tenho conta
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
