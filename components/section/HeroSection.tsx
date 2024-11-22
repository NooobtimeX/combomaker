"use client";

import React from "react";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <link rel="canonical" href="https://combomaker.net/" />
      <div className="mb-10 mt-2 text-white">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-6">
            <div className="text-center">
              <h1 className="font-bold text-red-600">COMBO MAKER!</h1>
              <img
                src={"/combo.webp"}
                alt="combomaker.net"
                width={300}
                height={60}
                className="mx-auto py-2"
              />
              <p className="m-2 text-lg leading-8">
                Craft your own <span className="text-red-500">combos</span> and
                share them with the world!
              </p>
              <Link href="/game">
                <button className="border border-red-500 text-red-500 transition duration-200 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl">
                  See all games
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
