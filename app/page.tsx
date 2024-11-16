import Features from "@/components/Features";
import Stat from "@/components/Stat";
import DisplayGames from "@/components/section/DisplayGames";
import HeroSection from "@/components/section/HeroSection";
import type { Metadata } from "next";

const games = [
  {
    id: "2xko",
    name: "2xko",
    img: "https://firebasestorage.googleapis.com/v0/b/combomaker/o/gameicon%2F2xko.webp?alt=media",
  },
  {
    id: "dragon_ball_sparking_zero",
    name: "Dragon Ball: Sparking Zero",
    img: "https://firebasestorage.googleapis.com/v0/b/combomaker/o/gameicon%2Fdragonballsparkingzero.webp?alt=media",
  },
  {
    id: "tekken_8",
    name: "Tekken 8",
    img: "https://firebasestorage.googleapis.com/v0/b/combomaker/o/gameicon%2Ftekken8.webp?alt=media",
  },
  {
    id: "street_fighter_6",
    name: "Street Fighter 6",
    img: "https://firebasestorage.googleapis.com/v0/b/combomaker/o/gameicon%2Fstreetfighter6.webp?alt=media",
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
      <HeroSection />
      <DisplayGames games={games} />
      <div>
        <Features />
      </div>
      <div>
        <h2 className="text-center text-red-500">Fighting game community</h2>
        <Stat />
      </div>
    </div>
  );
}
