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
    title: `Mira lo que me ha dicho la IA por encantarme ${name}`,
    description: `Esta página te dice lo que la IA piensa de ti, según tu videojuego favorito.`,
    openGraph: {
      title: `Mira lo que me ha dicho la IA por encantarme ${name}`,
      description: `Esta página te dice lo que la IA piensa de ti, según tu videojuego favorito.`,
      images: [coverImg, ...previousImages],
      url: `https://loquetuvideojuegofavoritodicedeti.pablozafra.dev/game/${id}`,
      siteName: "Lo que tu videojuego favorito dice de ti",
      type: "website",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: `Mira lo que me ha dicho la IA por encantarme ${name}`,
      description: `Esta página te dice lo que la IA piensa de ti, según tu videojuego favorito.`,
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
