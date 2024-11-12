"use client";

import Image from "next/image";
import Link from "next/link";

interface Game {
  id: string;
  name: string;
  img: string;
}

interface DisplayGamesProps {
  games: Game[];
}

export default function DisplayGames({ games }: DisplayGamesProps) {
  return (
    <div className="py-4">
      <h2 className="text-center text-red-500 mb-4">Popular Game</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative transform overflow-hidden rounded-xl shadow-xl transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <a
                href={game.id}
                className="aspect-w-1 aspect-h-1 block w-full overflow-hidden rounded-t-xl"
              >
                <Image
                  alt={game.name}
                  src={game.img}
                  className="h-full w-full rounded-xl object-cover"
                  width={500}
                  height={500}
                  priority={index === 0}
                />
              </a>
              <div className="flex flex-col items-center space-y-2">
                <h3 className="truncate text-center text-lg font-semibold">
                  {game.name}
                </h3>
                <div className="mx-auto flex w-full justify-center pb-2">
                  <Link href={game.id}>
                    <button className="border border-red-500 text-red-500 transition duration-200 hover:bg-red-500 hover:text-white">
                      CREATE COMBO
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
