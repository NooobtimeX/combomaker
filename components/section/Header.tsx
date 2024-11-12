"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "GAMES", href: "/games" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-background/75 sticky top-0 z-40 mb-1 rounded-b-2xl shadow-xl backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={handleMenuToggle}
              className=" inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500  focus:ring-inset"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex-shrink-0 flex">
              <Link href="/" className="m-auto">
                <Image
                  src="/favicon.ico"
                  className="w-9"
                  alt="HoYoSmash"
                  width={36}
                  height={36}
                />
              </Link>
            </div>
            <Link href="/" className="hidden md:flex items-center">
              <h2>combo maker</h2>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <div className="relative">
              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-gray-300 hover:text-red-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute z-50 w-full rounded-xl bg-gray-900 p-2 md:hidden rounded-b-xl">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-red-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
