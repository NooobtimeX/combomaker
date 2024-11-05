const projectl = {
  id: "2xko",
  name: "2XKO",
  img: "/game/icon/2xko.png",
  items: [
    {
      name: "Directional",
      items: [
        { name: "b", img: "/2xko/button/b.webp", isSwapHorizontal: true },
        { name: "db", img: "/2xko/button/db.webp", isSwapHorizontal: true },
        { name: "d", img: "/2xko/button/d.webp" },
        { name: "df", img: "/2xko/button/df.webp", isSwapHorizontal: true },
        { name: "f", img: "/2xko/button/f.webp", isSwapHorizontal: true },
        { name: "uf", img: "/2xko/button/uf.webp", isSwapHorizontal: true },
        { name: "u", img: "/2xko/button/u.webp" },
        { name: "ub", img: "/2xko/button/ub.webp", isSwapHorizontal: true },
      ],
    },
    {
      name: "Action",
      items: [
        { name: "Light Attack", img: "/2xko/button/L.webp" },
        { name: "Medium Attack", img: "/2xko/button/M.webp" },
        { name: "Heavy Attack", img: "/2xko/button/H.webp" },
        { name: "Special 1", img: "/2xko/button/S1.webp" },
        { name: "Special 2", img: "/2xko/button/S2.webp" },
        { name: "Tag Button", img: "/2xko/button/Tag.webp" },
      ],
    },
    {
      name: "Special",
      items: [
        { name: "(", img: "/2xko/button/(.png" },
        { name: ")", img: "/2xko/button/).png" },
        { name: "+", img: "/2xko/button/+.png" },
        { name: "HOLD", img: "/2xko/button/HOLD.png" },
        { name: "OR", img: "/2xko/button/OR.png" },
        { name: "INAIR", img: "/2xko/button/INAIR.png" },
        { name: "WHILE BLOCKING", img: "/2xko/button/WHILEBLOCKING.png" },
        { name: "WHILE STANDING", img: "/2xko/button/WHILESTANDING.png" },
        { name: "ON KNOCKDOWN", img: "/2xko/button/ONKNOOKDOWN.png" },
        { name: "ON WAKE-UP", img: "/2xko/button/ONWAKE-UP.png" },
      ],
    },
  ].map((category, categoryIndex) => ({
    ...category,
    items: category.items.map((item, itemIndex) => ({
      ...item,
      id: categoryIndex * 100 + itemIndex, // Ensure unique IDs across categories
    })),
  })),
};

export default projectl;
