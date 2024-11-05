"use client";

import Button from "@/components/ui/Button";

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
    <div className="py-6">
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
                <img
                  alt={game.name}
                  src={game.img}
                  className="h-full w-full rounded-xl object-cover"
                  width={200}
                  height={200}
                />
              </a>
              <div className="flex flex-col items-center space-y-2">
                <h2 className="truncate text-center text-lg font-semibold">
                  {game.name}
                </h2>
                <div className="mx-auto flex w-full justify-center pb-2">
                  <Button
                    variant="confirm"
                    text="CREATE COMBO"
                    link={game.id}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
