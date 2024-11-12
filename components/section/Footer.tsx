"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const links = [
  { text: "About Us", href: "/about_us" },
  { text: "Privacy Policy", href: "/privacy_policy" },
  { text: "Terms and Conditions", href: "/terms_and_conditions" },
  { text: "Contact Us", href: "/contact_us" },
];

const images = [
  {
    alt: "2xko",
    src: "/footer/icon/2xko.webp",
  },
  {
    alt: "Dragon Ball: Sparking Zero",
    src: "/footer/icon/dragonballsparkingzero.webp",
  },
  {
    alt: "Tekken 8",
    src: "/footer/icon/tekken8.webp",
  },
  {
    alt: "Street Fighter 6",
    src: "/footer/icon/streetfighter6.webp",
  },
];

const Footer: React.FC = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bottom-0 mx-auto max-w-6xl rounded-t-xl p-4">
      <div className="mb-4 flex flex-wrap items-center justify-center space-x-4">
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <div key={index} className="list-none">
              <Link href={link.href}>{link.text}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="gap-6">
        <div className="m-auto mx-auto flex max-w-sm flex-nowrap justify-center gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="m-auto transition duration-300 hover:scale-105"
            >
              <Image
                className="my-auto rounded-xl object-cover"
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-sm">
        <span>
          © {year || ""}{" "}
          <Link href="/" className="text-red-500 hover:underline">
            combomaker.net | ComboMaker!
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
