import { games } from "@/data/games";

export default function HomePage() {
  return (
    <div>
      <link rel="canonical" href="https://combomaker.net/game/" />
      <div>
        <h1 className="my-2 text-center">Combo Maker All Game</h1>
        <div className="container mx-auto mb-4 px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
            {games.map((game, index) => (
              <div key={index}>
                <div className="px-2 pt-1">
                  <a href={game.id}>
                    <img
                      alt={game.name}
                      src={game.img}
                      className="mx-auto my-auto h-40 w-auto rounded-xl object-contain"
                      width={200}
                      height={200}
                    />
                  </a>
                </div>
                <h2 className="text-center text-sm sm:text-base md:text-2xl">
                  {game.name}
                </h2>
                <div className="flex justify-center">
                  <a href={game.id}>
                    <button>Create!</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
