import Link from "next/link";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button/Button";
import Header from "@/components/ui/header/Header";

export default function LoginPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex flex-col">
            <div className="absolute inset-0 opacity-60 pointer-events-none -z-10">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-700 blur-3xl"></div>
                <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
                <div className="absolute left-1/3 bottom-10 h-56 w-56 rounded-full bg-slate-900 blur-3xl"></div>
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
                        <Button as="link" href="/" variant="ghost">
                            Home
                        </Button>
                        <Button as="link" href="/dashboard" variant="outline">
                            Dashboard
                        </Button>
                    </>
                }
            />

            <main className="container relative z-10 mx-auto flex-1 px-6 py-8 lg:py-12 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Acesso exclusivo</p>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                        Continue a jornada com um visual mais limpo em tons de azul.
                    </h1>
                    <p className="text-lg text-slate-300 max-w-xl">
                        Entre na plataforma para acompanhar treinos, progresso e planos personalizados com uma paleta
                        consistente em azul, branco e preto.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-slate-800 bg-white/5 p-4 backdrop-blur-sm">
                            <p className="text-sm text-slate-400">Evolucao em tempo real</p>
                            <p className="mt-2 font-semibold text-white">Graficos e insights alinhados aos seus objetivos.</p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-white/5 p-4 backdrop-blur-sm">
                            <p className="text-sm text-slate-400">Planos inteligentes</p>
                            <p className="mt-2 font-semibold text-white">Recomendacoes rapidas para treinos e nutricao.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-40 blur-2xl"></div>
                    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md">
                        <div className="mb-6 space-y-2">
                            <p className="text-sm text-blue-300">Bem-vindo de volta</p>
                            <h2 className="text-2xl font-bold">Acesse sua conta</h2>
                            <p className="text-sm text-slate-400">
                                Use a mesma energia da landing para entrar e continuar sua experiencia.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm text-slate-200" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                                    placeholder="voce@email.com"
                                    autoComplete="email"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-slate-200" htmlFor="password">
                                    Senha
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                                    placeholder="********"
                                    autoComplete="current-password"
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm text-slate-400">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500"
                                    />
                                    Lembrar acesso
                                </label>
                                <Link href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
                                    Esqueci a senha
                                </Link>
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Entrar
                            </Button>

                            <p className="text-center text-sm text-slate-400">
                                Nao tem conta?{" "}
                                <Link href="/register" className="text-blue-300 hover:text-white transition-colors">
                                    Criar gratuitamente
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
