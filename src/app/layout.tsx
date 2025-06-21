import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lo que tu videojuego favorito dice de ti",
  description:
    "Busca tu juego favorito y la IA te dirá qué piensa sobre tí. Desarrollado por Pablo Zafra",
  // icons: {
  //   icon: "media/favicon.png",
  // },
  other: {
    google: "notranslate",
  },
  // openGraph: {
  //   title: "Pablo Zafra",
  //   description: "Front-end developer, UI/UX designer, Motion Designer",
  //   url: "https://pablozafra.dev",
  //   siteName: "Pablo Zafra Portafolio",
  //   images: [
  //     {
  //       url: "https://www.pablozafra.dev/media/og-main-img.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Pablo Zafra - Front-end developer, UI/UX designer, Motion Designer",
  //     },
  //   ],
  //   locale: "en_EN",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Pablo Zafra",
  //   description: "Front-end developer, UI/UX designer, Motion Designer",
  //   images: ["https://www.pablozafra.dev/media/og-main-img.jpg"],
  // },
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
        <div className="flex flex-col items-center justify-center w-full min-h-screen py-5">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-21">
            <main className="flex flex-col w-full py-32 px-11 gap-16">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
