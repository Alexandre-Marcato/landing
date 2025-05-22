import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ursula Caetano - Hipnoterapia Clínica Especializada",
  description: "Hipnoterapeuta clínica especializada em transformação pessoal, tratamento de ansiedade, fobias e mudança de hábitos. Agende sua sessão.",
  keywords: "hipnoterapia, hipnose clínica, ansiedade, fobias, mudança de hábitos, parar de fumar, autoestima, tratamento alternativo",
  openGraph: {
    title: "Ursula Caetano - Hipnoterapia Clínica",
    description: "Hipnoterapeuta especializada oferecendo sessões personalizadas para sua transformação pessoal.",
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
