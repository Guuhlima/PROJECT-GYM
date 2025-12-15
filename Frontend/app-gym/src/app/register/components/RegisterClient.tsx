"use client";

import Footer from "@/components/Footer";
import Button from "@/components/ui/Button/Button";
import Header from "@/components/ui/header/Header";
import { RegisterUsuario } from "../Type";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";
import { api } from "@/services/api";
import { highlights } from "../Data";
import GradientText from "@/components/ui/Gradient/GradientText";

export default function RegisterPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const tokenFromQuery = searchParams?.get("token");
    const token = useMemo(() => tokenFromQuery?.trim() ?? "", [tokenFromQuery]);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<RegisterUsuario>({
        age: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!token) {
            Swal.fire({
                title: "Erro",
                text: "Token ausente ou invalido, abra o link enviado no email.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        const ageNumber = Number(form.age);
        if (!Number.isFinite(ageNumber) || ageNumber < 1) {
            Swal.fire({
                title: "Erro",
                text: "Idade invalida.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        if (form.password.length < 8) {
            Swal.fire({
                title: "Erro",
                text: "A senha deve ter pelo menos 8 caracteres.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        if (form.password !== form.confirmPassword) {
            Swal.fire({
                title: "Erro",
                text: "As senhas nao conferem.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        if (!form.terms) {
            Swal.fire({
                title: "Erro",
                text: "Voce precisa aceitar os termos.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        try {
            setLoading(true);

            await api.post(`/auth/user/create/${token}`, {
                password: form.password,
                age: ageNumber,
            });

            Swal.fire({
                title: "Sucesso",
                text: "Usuario criado com sucesso, voce ja pode realizar o login",
                icon: "success",
                confirmButtonText: "OK",
            });

            router.push("/login");
        } catch (error) {
            console.error("Erro ao criar usuario", error);

            Swal.fire({
                title: "Erro",
                text: "Erro ao criar usuario",
                icon: "error",
                confirmButtonText: "OK",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-slate-950 text-white flex flex-col overflow-hidden selection:bg-blue-500/70 selection:text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute -left-24 -top-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
                <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-cyan-500/25 blur-[120px]" />
                <div className="absolute left-1/3 bottom-0 h-56 w-56 rounded-full bg-slate-900/80 blur-[90px]" />
                <div className="absolute inset-x-10 top-36 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
            </div>

            <div className="w-full container mx-auto px-6 pt-8">
                <Header
                    actionClassName="flex justify-end w-72"
                    heading={
                        <>
                            Project
                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={4}
                                showBorder={false}
                                className="custom-class"
                            >
                                Gym
                            </GradientText>
                        </>
                    }
                    action={
                        <>
                            <Button as="link" href="/" variant="ghost" className="hover:text-blue-200">
                                Home
                            </Button>
                            <Button as="link" href="/login" variant="outline" className="ml-2">
                                Login
                            </Button>
                        </>
                    }
                />
            </div>

            <main className="relative mt-9 z-10 flex-1 container mx-auto px-6 pb-14 max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.95fr] items-start">
                    <section className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                            <span className={`h-2 w-2 rounded-full ${token ? "bg-emerald-400" : "bg-amber-400"} animate-pulse`} />
                            Convite {token ? "validado" : "pendente"}
                        </div>

                        <div className="space-y-3">
                            <p className="text-blue-200 text-sm md:text-base">Finalizar cadastro</p>
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight">Crie sua senha e comece a treinar</h1>
                            <p className="text-slate-300 text-sm md:text-base max-w-xl">
                                Defina uma senha segura, confirme seus dados e aceite nossos termos para liberar seu acesso ao
                                painel do Project Gym. Tudo rapido, claro e sem distracoes.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-white/5 px-4 py-3 backdrop-blur-sm shadow-sm shadow-blue-900/20"
                                >
                                    <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4 text-slate-950"
                                        >
                                            <path d="M5 12l4 4L19 6" />
                                        </svg>
                                    </span>
                                    <p className="text-sm text-slate-200 leading-snug">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="relative">
                        <div
                            className="absolute -inset-px rounded-3xl bg-linear-to-br from-blue-600/60 via-indigo-500/30 to-cyan-400/60 blur"
                            aria-hidden="true"
                        />
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-8 shadow-2xl shadow-blue-900/40 backdrop-blur-xl">
                            <div className="mb-6 flex items-center justify-between gap-3">
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-[0.15em] text-blue-200/80">Passo 2 de 2</p>
                                    <h2 className="text-xl font-semibold">Defina seus acessos</h2>
                                </div>
                                <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-200">
                                    Token {token ? "ok" : "faltando"}
                                </span>
                            </div>

                            <form onSubmit={handleCreateUser} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-200" htmlFor="age">
                                        Idade
                                    </label>
                                    <input
                                        id="age"
                                        type="number"
                                        min={1}
                                        className="w-full rounded-xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-white shadow-inner shadow-black/40 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder:text-slate-500"
                                        value={form.age}
                                        onChange={handleChange}
                                        placeholder="21"
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
                                            className="w-full rounded-xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-white shadow-inner shadow-black/40 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder:text-slate-500"
                                            value={form.password}
                                            onChange={handleChange}
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
                                            className="w-full rounded-xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-white shadow-inner shadow-black/40 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder:text-slate-500"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="********"
                                            autoComplete="new-password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-sm text-slate-300">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        checked={form.terms}
                                        onChange={handleChange}
                                        className="mt-1 h-5 w-5 rounded-md border border-slate-700 bg-slate-900 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                                    />
                                    <label htmlFor="terms" className="leading-relaxed">
                                        Concordo com os termos de uso e politica de privacidade do Project Gym.
                                    </label>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                        {loading ? "Criando..." : "Concluir cadastro"}
                                    </Button>
                                    <p className="text-xs text-slate-400 text-center">
                                        Seus dados sao criptografados e armazenados com seguranca.
                                    </p>
                                </div>
                            </form>

                            {!token && (
                                <p className="mt-4 text-sm text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-xl px-4 py-3">
                                    Token nao encontrado na URL. Abra o link do email (ex: <code>?token=...</code>).
                                </p>
                            )}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
