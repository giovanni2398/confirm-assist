import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between shadow">
          <div className="font-bold text-lg tracking-wide">ConfirmAssist</div>
          <nav className="flex gap-4">
            {/* Aqui podem entrar botões de navegação, filtros, config, etc. */}
          </nav>
        </header>
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
