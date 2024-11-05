import DisplayGames from "@/components/section/DisplayGames";
import Button from "@/components/ui/Button";

const games = [
  {
    id: "2xko",
    name: "2xko",
    img: "/game/icon/2xko.png",
  },
  {
    id: "dragon_ball_sparking_zero",
    name: "Dragon Ball: Sparking Zero",
    img: "/game/icon/dragonballsparkingzero.jpg",
  },
  {
    id: "tekken_8",
    name: "Tekken 8",
    img: "/game/icon/tekken8.jpg",
  },
  {
    id: "street_fighter_6",
    name: "Street Fighter 6",
    img: "/game/icon/streetfighter6.jpg",
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
              <p className="m-2 text-lg leading-8">
                Craft your own combos and share them with the world!
              </p>
              <Button text={"See all game"} variant="confirm" />
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
