import Link from "next/link";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button/Button";
import Header from "@/components/ui/header/Header";

export default function LoginPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white flex flex-col">
            <div className="absolute inset-0 opacity-40 pointer-events-none -z-10">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-500 blur-3xl"></div>
                <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-green-400 blur-3xl"></div>
                <div className="absolute left-1/3 bottom-10 h-56 w-56 rounded-full bg-purple-600 blur-3xl"></div>
            </div>

            <Header
                className="container mx-auto p-6"
                actionClassName="flex justify-end w-72"
                heading={
                    <>
                        Project
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-green-400 via-pink-500 to-purple-500">
                            Gym
                        </span>
                    </>
                }
                action={
                    <>
                        <Button as="link" href="/" variant="ghost" size="md">
                            Home
                        </Button>
                        <Button as="link" href="/dashboard" variant="outline" size="md">
                            Dashboard
                        </Button>
                    </>

                }
            />

            <main className="container relative z-10 mx-auto flex-1 px-6 py-8 lg:py-12 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-pink-400">Acesso exclusivo</p>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                        Continue a jornada que voce comecou na landing.
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl">
                        Entre na plataforma para acompanhar treinos, progresso e planos personalizados que combinam com
                        o visual vibrante do Project Gym.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-gray-800 bg-white/5 p-4 backdrop-blur-sm">
                            <p className="text-sm text-gray-400">Evolucao em tempo real</p>
                            <p className="mt-2 font-semibold text-white">Graficos e insights alinhados aos seus objetivos.</p>
                        </div>
                        <div className="rounded-xl border border-gray-800 bg-white/5 p-4 backdrop-blur-sm">
                            <p className="text-sm text-gray-400">Planos inteligentes</p>
                            <p className="mt-2 font-semibold text-white">Recomendacoes rapidas para treinos e nutricao.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 opacity-40 blur-2xl"></div>
                    <div className="relative rounded-2xl border border-gray-800 bg-neutral-900/80 p-8 shadow-2xl backdrop-blur-md">
                        <div className="mb-6 space-y-2">
                            <p className="text-sm text-pink-400">Bem-vindo de volta</p>
                            <h2 className="text-2xl font-bold">Acesse sua conta</h2>
                            <p className="text-sm text-gray-400">
                                Use o mesmo ritmo da landing para entrar e continuar sua experiencia.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-300" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full rounded-lg border border-gray-800 bg-neutral-950 px-4 py-3 text-white shadow-inner focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40 transition"
                                    placeholder="voce@email.com"
                                    autoComplete="email"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-300" htmlFor="password">
                                    Senha
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full rounded-lg border border-gray-800 bg-neutral-950 px-4 py-3 text-white shadow-inner focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40 transition"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-700 bg-neutral-950 text-pink-500 focus:ring-pink-500"
                                    />
                                    Lembrar acesso
                                </label>
                                <Link href="#" className="text-pink-300 hover:text-pink-100 transition-colors">
                                    Esqueci a senha
                                </Link>
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Entrar
                            </Button>

                            <p className="text-center text-sm text-gray-400">
                                Nao tem conta?{" "}
                                <Link href="/" className="text-green-400 hover:text-white transition-colors">
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
