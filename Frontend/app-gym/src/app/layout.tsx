import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Gym",
    description: "Transforme seu corpo hoje mesmo!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
