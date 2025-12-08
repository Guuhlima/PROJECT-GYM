
import Link from 'next/link';

export default function Page() {
    return (
        <div className="h-full bg-neutral-900 text-white min-h-screen font-sans selection:bg-pink-500 selection:text-white">
            <div className="w-full container mx-auto p-6">
                <div className="w-full flex items-center justify-between">
                    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        Project<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Gym</span>
                    </a>

                    <div className="flex w-1/2 justify-end content-center gap-4">
                        <Link href="/dashboard" className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300">
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container pt-12 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center px-6">
                <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                        Transforme
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-green-400 via-pink-500 to-purple-500">
                            Seu Corpo
                        </span>
                        <br />
                        hoje mesmo!
                    </h1>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-gray-300">
                        Acompanhe seus treinos, monitore sua evolução e alcance seus objetivos com nossa plataforma inteligente.
                    </p>

                    <form className="bg-gray-800/50 backdrop-blur-sm w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-700">
                        <div className="mb-4">
                            <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
                                Comece sua jornada
                            </label>
                            <input
                                className="shadow appearance-none border border-gray-600 bg-gray-900 rounded w-full p-3 text-white leading-tight focus:ring-2 focus:ring-pink-500 focus:outline-none transition hover:scale-[1.01] duration-300 ease-in-out"
                                id="emailaddress"
                                type="text"
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-4">
                            <Link
                                href="/dashboard"
                                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-3 px-6 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out w-full text-center"
                            >
                                Criar Conta Grátis
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="w-full xl:w-3/5 p-12 overflow-hidden flex justify-center">
                    <div className="relative w-full max-w-lg transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-500 rounded-lg blur-lg opacity-75"></div>
                        <img
                            src="/dashboard-mockup.png"
                            alt="Dashboard Preview"
                            className="relative rounded-lg border-2 border-gray-700 shadow-2xl"
                        />
                    </div>
                </div>

                <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in text-gray-500">
                    <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; 2024 Project Gym</a>
                </div>
            </div>
        </div>
    )
}
