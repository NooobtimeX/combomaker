import DisplayGames from "@/components/section/DisplayGames";

const games = [
  {
    id: "dragon_ball_sparking_zero",
    name: "Dragon Ball: Sparking Zero",
    img: "/game/dragonballsparkingzero.png",
  },
  {
    id: "tekken_8",
    name: "Tekken 8",
    img: "/game/tekken8.png",
  },
  {
    id: "street_fighter_6",
    name: "Street Fighter 6",
    img: "/game/streetfighter6.webp",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <link rel="canonical" href="https://combomaker.net/" />
      <div className="mb-10 mt-2 rounded-xl text-white">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-green-600">
                Combo Maker!
              </h1>
              <p className="0 m-2 text-lg leading-8">
                Craft your own combos and share them with the world!
              </p>
              <button className="rounded-2xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                See all game
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Popular Game</h2>
        <DisplayGames games={games} />
      </div>
    </div>
  );
}
