"use client";

import { useState, useEffect } from "react";

interface Game {
  id: string;
  name: string;
  img: string;
}

interface DisplayGamesProps {
  games: Game[];
}

export default function DisplayGames({ games }: DisplayGamesProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 0.5 seconds
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-2">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap justify-center gap-4">
          {games.map((game, index) => (
            <div
              key={index}
              className={`flex w-full transform flex-col items-center overflow-hidden rounded-2xl p-2 shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/5 ${
                loading ? "animate-pulse bg-gray-800" : ""
              }`}
            >
              {loading ? (
                <div className="h-48 w-full rounded-lg bg-gray-900" />
              ) : (
                <a href={game.id}>
                  <img
                    alt={game.name}
                    src={game.img}
                    className="mx-auto h-48 w-auto rounded-lg object-contain"
                    width={200}
                    height={200}
                  />
                </a>
              )}
              <h2 className="mt-5 overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm font-semibold sm:text-lg md:text-xl">
                {loading ? (
                  <div className="h-4 w-3/4 rounded-md bg-gray-900"></div>
                ) : (
                  game.name
                )}
              </h2>
              <div className="mt-5 flex justify-center">
                {loading ? (
                  <div className="h-10 w-24 rounded-2xl bg-gray-900" />
                ) : (
                  <a href={game.id}>
                    <button className="rounded-2xl bg-green-500 px-4 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300">
                      CREATE COMBO
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
