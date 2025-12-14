"use client"

import Footer from "@/components/Footer";
import Button from "@/components/ui/Button/Button";
import Header from "../../components/ui/header/Header";
import { api } from "@/services/api";
import { useState } from "react";
import Swal from 'sweetalert2'
import GradientText
    from "@/components/ui/Gradient/GradientText";
interface UserRegisterProps {
    name: string;
    email: string;
}

export default function Page() {

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<UserRegisterProps>({
        name: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);

            await api.post("/auth/user/request", {
                name: form.name,
                email: form.email,
            });

            Swal.fire({
                title: 'Sucesso',
                text: 'Sua solicitação de registro foi encaminhada',
                icon: "success",
                confirmButtonText: 'OK'
            })

            console.log("Registro solicitado com sucesso");
        } catch (error) {
            console.error("Erro ao solicitar registro", error)

            Swal.fire({
                title: 'Erro',
                text: 'Não foi possivel solicitar o registro',
                icon: "error",
                confirmButtonText: 'Cool'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col">
            <div className="w-full container mx-auto p-6">
                <Header
                    className="container mx-auto p-6"
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
                            <Button as="link" href="/login" variant="outline"> Login </Button>
                            <Button as="link" href="/register" className="ml-2"> Registro </Button>
                        </>
                    }
                />
            </div>

            <main className="flex-1">
                <div className="container pt-12 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center px-6">
                    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-90 font-bold leading-tight text-center md:text-left">
                            Transforme
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-blue-500 to-blue-600">
                                Seu Corpo
                            </span>
                            <br />
                            hoje mesmo!
                        </h1>
                        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-slate-300">
                            Acompanhe seus treinos, monitore sua evolucao e alcance seus objetivos com nossa plataforma
                            inteligente em uma paleta coerente de azul, branco e preto.
                        </p>

                        <form
                            onSubmit={handleRegister}
                            className="bg-gray-800/50 backdrop-blur-sm w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-700"
                        >
                            <div className="mb-4">
                                <label
                                    className="block text-blue-300 py-2 font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Comece sua jornada
                                </label>
                                <input
                                    className="shadow appearance-none border border-gray-600 bg-gray-900 rounded w-full p-3 text-white leading-tight focus:ring-2 focus:ring-pink-500 focus:outline-none transition hover:scale-[1.01] duration-300 ease-in-out"
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className="mt-5 shadow appearance-none border border-gray-600 bg-gray-900 rounded w-full p-3 text-white leading-tight focus:ring-2 focus:ring-pink-500 focus:outline-none transition hover:scale-[1.01] duration-300 ease-in-out"
                                    id="name"
                                    type="text"
                                    placeholder="Digite seu nome"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                    {loading ? "Enviando..." : "Criar Conta Gratis"}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="w-full xl:w-3/5 p-12 overflow-hidden flex justify-center">
                        <div className="relative w-full max-w-lg transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
                            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-700 rounded-lg blur-lg opacity-75"></div>
                            <img
                                src="/dashboard-mockup.png"
                                alt="Dashboard Preview"
                                className="relative rounded-lg border-2 border-slate-800 shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
