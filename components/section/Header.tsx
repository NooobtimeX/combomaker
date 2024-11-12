"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "COMBO MAKER", href: "/game" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-background/75 sticky top-0 z-40 mb-1 rounded-b-xl shadow-xl backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="bg-800 inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/favicon.ico"
                  className="w-9"
                  alt="HoYoSmash"
                  width={36}
                  height={36}
                />
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-red-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute z-50 w-full rounded-xl bg-gray-900 p-2 sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-red-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
