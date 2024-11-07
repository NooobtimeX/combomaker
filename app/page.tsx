import DisplayGames from "@/components/section/DisplayGames";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Features from "@/components/Features";

const games = [
  {
    id: "2xko",
    name: "2xko",
    img: "/game/icon/2xko.webp",
  },
  {
    id: "dragon_ball_sparking_zero",
    name: "Dragon Ball: Sparking Zero",
    img: "/game/icon/dragonballsparkingzero.webp",
  },
  {
    id: "tekken_8",
    name: "Tekken 8",
    img: "/game/icon/tekken8.webp",
  },
  {
    id: "street_fighter_6",
    name: "Street Fighter 6",
    img: "/game/icon/streetfighter6.webp",
  },
];
export const metadata: Metadata = {
  title: "Combo Maker",
  description: "Craft your own combos and share them with the world!",
  keywords: ["combo", "maker", "game", "fighting", "games", "combos"],
  openGraph: {
    title: "Combo Maker",
    description: "Craft your own combos and share them with the world!",
    url: "https://combo-maker.com",
    type: "website",
    images: [
      {
        url: "https://combo-maker.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Combo Maker",
      },
    ],
  },
};
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
              <Image
                src={"/combo.webp"}
                alt="combomaker.net"
                width={300}
                height={300}
                className="mx-auto py-2"
                priority
              />
              <p className="m-2 text-lg leading-8">
                Craft your own combos and share them with the world!
              </p>
              <Link href="/game">
                <button className="border border-green-500 text-green-500 transition duration-200 hover:bg-green-500 hover:text-white">
                  See all game
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Popular Game</h2>
        <DisplayGames games={games} />
      </div>
      <div>
        <Features />
      </div>
    </div>
  );
}
