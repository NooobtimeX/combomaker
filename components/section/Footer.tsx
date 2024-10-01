import Link from "next/link";

const links = [
  {
    section: "Games",
    items: [{ text: "All Game", href: "/game" }],
  },
  {
    section: "Information",
    items: [
      { text: "About Us", href: "/about_us" },
      { text: "Privacy Policy", href: "/privacy_policy" },
      { text: "Terms and Conditions", href: "/terms_and_conditions" },
      { text: "Contact Us", href: "/contact_us" },
    ],
  },
];

const images = [
  {
    src: "/game/2xko.svg",
    alt: "Tekken 8",
    href: "https://tk8.tekken-official.jp/en/",
  },
  {
    src: "/game/dragonballsparkingzero.png",
    alt: "Tekken 8",
    href: "https://tk8.tekken-official.jp/en/",
  },
  {
    src: "/game/tekken8.png",
    alt: "Tekken 8",
    href: "https://tk8.tekken-official.jp/en/",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content bottom-0 mx-auto max-w-6xl rounded-t-xl p-4 backdrop-blur">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {links.map((linkGroup, groupIndex) => (
          <div className="mb-6" key={groupIndex}>
            <div className="mb-2.5 font-bold uppercase">
              {linkGroup.section}
            </div>
            <ul className="mb-0 list-none">
              {linkGroup.items.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 m-auto mx-auto flex max-w-sm flex-nowrap justify-center gap-2">
          {images.map((image, index) => (
            <a key={index} href={image.href} className="m-auto">
              <img
                className="my-auto rounded-xl object-cover"
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="text-blue-400 hover:underline">
            combomaker.net | ComboMaker!
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
