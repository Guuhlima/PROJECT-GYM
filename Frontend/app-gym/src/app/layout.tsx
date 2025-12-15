import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider, ThemeBackground } from "@/providers/ThemeProvide";

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
            <body>
                <ThemeProvider defaultTheme="primary">
                    <ThemeBackground>{children}</ThemeBackground>
                </ThemeProvider>
            </body>
        </html>
    );
}
