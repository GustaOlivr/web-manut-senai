import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Aside } from "@/components/aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manut System",
  description: "Sistema de gerenciamento de Manutenções",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "discord-dark", "dracula-dark", "oficina"]}
        >
          <main className="h-screen overflow-hidden flex">
            <Aside />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
