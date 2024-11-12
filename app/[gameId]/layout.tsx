import { notFound } from "next/navigation";
import { games } from "@/data/games"; // Adjust the import path as necessary
import type { Metadata } from "next";

type GameItem = {
  id: number;
  name: string;
  img: string;
  isSwapHorizontal?: boolean;
};

type GameCategory = {
  name: string;
  items: GameItem[];
};

type Game = {
  id: string;
  name: string;
  img: string;
  description: string;
  items: GameCategory[];
};

function getGameById(gameId: string): Game {
  const game = games.find((game) => game.id === gameId);
  if (!game) {
    notFound(); // This will render the 404 page
  }
  return game as Game;
}

export async function generateMetadata(props: {
  params: Promise<{ gameId: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const gameId = Array.isArray(params.gameId)
    ? params.gameId[0]
    : params.gameId;
  const game = getGameById(gameId);
  const title = `${game.name} Combo Maker | combomaker.net`;
  const description = `${game.name} Combo Maker is a web application that allows players to create, customize, and experiment with their own combos and share them with others.`;
  const url = `https://combomaker.net/${game.id}`;
  const imageUrl = `https://combomaker.net${game.img}`;
  const imageAlt = `${game.name} Combo Maker`;

  return {
    title,
    description,
    keywords: `${game.name} combo maker,${game.name},combo maker,create combo`,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: imageAlt,
        },
      ],
    },
  };
}

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ gameId: string }>;
}) {
  const params = await props.params;
  const gameId = Array.isArray(params.gameId)
    ? params.gameId[0]
    : params.gameId;
  const game = getGameById(gameId);

  return (
    <div>
      <h1 className="mb-4 text-center font-bold text-red-500">
        {game.name} Combo Maker
      </h1>
      {props.children}
      <p className="mx-auto max-w-2xl">
        {game.name} Combo Maker is a web application that allows players to
        create, customize, and experiment with their own combos and share them
        with others.
      </p>
    </div>
  );
}
