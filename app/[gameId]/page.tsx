import { Metadata } from "next";
import ComboMaker from "@/components/ComboMaker";
import { games } from "@/data/games";

function getGameById(gameId: string) {
  return games.find((game) => game.id.toString() === gameId);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gameId: string }>;
}): Promise<Metadata> {
  const { gameId } = await params;
  const game = getGameById(gameId);

  if (!game) {
    return {
      title: `Game Not Found - ComboMaker`,
      alternates: {
        canonical: `https://combomaker.net/${gameId}/`,
      },
    };
  }

  const title = `${game.name} Combo Maker | combomaker.net`;
  const description = `${game.name} Combo Maker is a web application that allows players to create, customize, and experiment with their own combos and share with others.`;
  const url = `https://combomaker.net/${game.id}/`;
  const imageUrl = `https://combomaker.net${game.img}`;
  const imageAlt = `${game.name} Combo Maker`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

// Generate static paths for all game IDs
export async function generateStaticParams() {
  return games.map((game) => ({
    gameId: game.id.toString(),
  }));
}

// Page component
export default async function GamePage({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;

  return (
    <div>
      <ComboMaker gameId={gameId} />{" "}
    </div>
  );
}
