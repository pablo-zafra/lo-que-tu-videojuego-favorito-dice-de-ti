import { Metadata, ResolvingMetadata } from "next";
import { getGameById } from "@/lib";

type MetadataProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const game = await getGameById(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const { name, coverImg } = game;

  return {
    title: `Lo que tu videojuego favorito, ${name}, dice de ti.`,
    description: `Esto es lo que la IA piensa de ti, si tu juego favorito es ${name}.`,
    openGraph: {
      url: `https://loquetuvideojuegofavoritodicedeti.pablozafra.dev/game/${id}`,
      siteName: "Lo que tu videojuego favorito dice de ti",
      images: [coverImg, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: `Lo que tu videojuego favorito, ${name}, dice de ti.`,
      description: `Esto es lo que la IA piensa de ti, si tu juego favorito es ${name}.`,
      images: [coverImg, ...previousImages],
    },
  };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
