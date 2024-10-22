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
    <div className="py-2">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap justify-center gap-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="flex w-full transform flex-col items-center overflow-hidden rounded-2xl p-2 shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/5"
            >
              <a href={game.id}>
                <img
                  alt={game.name}
                  src={game.img}
                  className="mx-auto h-48 w-auto rounded-lg object-contain"
                  width={200}
                  height={200}
                />
              </a>
              <h2 className="mt-5 text-center text-sm font-semibold sm:text-lg md:text-xl">
                {game.name}
              </h2>
              <div className="mt-5 flex justify-center">
                <a href={game.id}>
                  <button className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300">
                    CREATE COMBO
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
