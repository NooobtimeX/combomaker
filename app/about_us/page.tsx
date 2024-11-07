import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Combo Maker",
  description:
    "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
  openGraph: {
    title: "About Us | Combo Maker",
    description:
      "Learn more about Combo Maker, the interactive way for players to rate their favorite characters.",
    url: "https://combomaker.net/about_us",
    type: "website",
    images: [
      {
        url: "https://combomaker.net/favicon.ico",
        width: 800,
        height: 600,
        alt: "Combo Maker",
      },
    ],
  },
};

const AboutUs: React.FC = () => {
  const images = [
    { src: "/game/icon/tekken8.webp", alt: "Tekken 8" },
    { src: "/game/icon/2xko.webp", alt: "2xko" },
    {
      src: "/game/icon/dragonballsparkingzero.webp",
      alt: "dragonball sparking zero",
    },
    { src: "/game/icon/streetfighter6.webp", alt: "street fighter 6" },
  ];

  const statistics = [
    { value: "", label: "Tekken 8" },
    { value: "", label: "2xko" },
    { value: "", label: "dragonball sparking zero" },
    { value: "", label: "street fighter 6" },
  ];

  return (
    <div className="relative py-4">
      <link rel="canonical" href="https://combomaker.net/about_us/" />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-12 lg:grid-cols-2">
          <div className="order-last grid w-full grid-cols-2 items-start justify-center gap-6 sm:grid-cols-2 lg:order-first">
            {images.map((image, index) => (
              <Image
                key={index}
                className="rounded-xl object-cover"
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
              />
            ))}
          </div>
          <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                <h1 className="font-manrope text-center text-4xl font-bold leading-normal lg:text-start">
                  Combo<span className="text-4xl text-green-500">Maker</span>!
                </h1>
                <p className="text-center text-base font-normal leading-relaxed lg:text-start">
                  Welcome to ComboMaker, your go-to platform for creating custom
                  fighting game combos! Our web app allows you to craft unique
                  combos with ease, empowering both casual players and
                  competitive gamers to explore new possibilities and improve
                  their gameplay. With an intuitive interface and support for
                  multiple fighting games, ComboMaker is designed to enhance
                  your experience by giving you full control over combo
                  creation, testing, and sharing. Whether you re a beginner or
                  an expert, we re here to help you level up your skills and
                  unleash your creativity.
                </p>
              </div>
              <h2 className="mx-auto -mb-2 text-center">Characters</h2>
              <div className="grid w-full grid-cols-2 items-center justify-center gap-5 sm:grid-cols-4 sm:gap-10 lg:justify-start">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start"
                  >
                    <h3 className="font-manrope text-center text-4xl font-bold leading-normal">
                      {stat.value}
                      <span className="text-4xl text-green-500">+</span>
                    </h3>
                    <h6 className="text-center text-base font-normal leading-relaxed">
                      {stat.label}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
