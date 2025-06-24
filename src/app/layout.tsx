import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";
import { GameSelectedProvider } from "@/context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "¿Qué dice tu videojuego favorito de ti?",
  description:
    "Busca tu juego favorito y la IA te dirá qué piensa sobre ti. Desarrollado por Pablo Zafra.",
  icons: {
    icon: "media/favicon.png",
  },
  other: {
    google: "notranslate",
  },
  openGraph: {
    title: "¿Qué dice tu videojuego favorito de ti?",
    description:
      "Busca tu juego favorito y la IA te dirá qué piensa sobre tí. Desarrollado por Pablo Zafra.",
    url: "https://loquetuvideojuegofavoritodicedeti.pablozafra.dev/",
    siteName: "Lo que tu videojuego favorito dice de ti",
    images: [
      {
        url: "https://loquetuvideojuegofavoritodicedeti.pablozafra.dev/media/result.jpg",
        width: 1200,
        height: 630,
        alt: "Lo que tu videojuego favorito dice de ti",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lo que tu videojuego favorito dice de ti",
    description:
      "Busca tu juego favorito y la IA te dirá qué piensa sobre tí. Desarrollado por Pablo Zafra",
    images: [
      "https://loquetuvideojuegofavoritodicedeti.pablozafra.dev/media/result.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className="notranslate max-h-100 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-dark-X [&::-webkit-scrollbar-thumb]:bg-gray [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-turquesa"
    >
      <body
        className={`relative ${inter.variable} bg-gray-dark-X font-Inter text-white antialiased grid-pattern`}
      >
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen py-5">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl min-h-[calc(100vh-4rem)] gap-11 md:gap-21">
            <main className="flex-grow flex flex-col items-center justify-center w-full py-16 md:py-22 px-6 md:px-11 gap-11 md:gap-16">
              <GameSelectedProvider>{children}</GameSelectedProvider>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
