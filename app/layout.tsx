import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tobePro - Seu site no ar em 24 horas",
  description: "Criamos sites e sistemas profissionais com preços acessíveis. Site no ar em 24h, cardápio digital para restaurantes, sistemas personalizados. Fale conosco no WhatsApp!",
  keywords: "site em 24 horas, criação de sites, sistemas personalizados, cardápio digital, restaurante, desenvolvimento web, tobePro",
  authors: [{ name: "tobePro" }],
  openGraph: {
    title: "tobePro - Seu site no ar em 24 horas",
    description: "Criamos sites e sistemas profissionais com preços acessíveis. Site no ar em 24h!",
    type: "website",
    locale: "pt_BR",
    siteName: "tobePro",
  },
  twitter: {
    card: "summary_large_image",
    title: "tobePro - Seu site no ar em 24 horas",
    description: "Criamos sites e sistemas profissionais com preços acessíveis.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/tobepro-favicon.png",
    apple: "/tobepro-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
