const projectl = {
  id: "2xko",
  name: "2XKO",
  img: "/game/icon/2xko.webp",
  items: [
    {
      name: "Directional",
      items: [
        { name: "b", img: "/game/2xko/button/b.webp", isSwapHorizontal: true },
        {
          name: "db",
          img: "/game/2xko/button/db.webp",
          isSwapHorizontal: true,
        },
        { name: "d", img: "/game/2xko/button/d.webp" },
        {
          name: "df",
          img: "/game/2xko/button/df.webp",
          isSwapHorizontal: true,
        },
        { name: "f", img: "/game/2xko/button/f.webp", isSwapHorizontal: true },
        {
          name: "uf",
          img: "/game/2xko/button/uf.webp",
          isSwapHorizontal: true,
        },
        { name: "u", img: "/game/2xko/button/u.webp" },
        {
          name: "ub",
          img: "/game/2xko/button/ub.webp",
          isSwapHorizontal: true,
        },
      ],
    },
    {
      name: "Action",
      items: [
        { name: "Light Attack", img: "/game/2xko/button/L.webp" },
        { name: "Medium Attack", img: "/game/2xko/button/M.webp" },
        { name: "Heavy Attack", img: "/game/2xko/button/H.webp" },
        { name: "Special 1", img: "/game/2xko/button/S1.webp" },
        { name: "Special 2", img: "/game/2xko/button/S2.webp" },
        { name: "Tag Button", img: "/game/2xko/button/Tag.webp" },
      ],
    },
    {
      name: "Special",
      items: [
        { name: "(", img: "/game/2xko/button/(.webp" },
        { name: ")", img: "/game/2xko/button/).webp" },
        { name: "+", img: "/game/2xko/button/+.webp" },
        { name: "HOLD", img: "/game/2xko/button/HOLD.webp" },
        { name: "OR", img: "/game/2xko/button/OR.webp" },
        { name: "INAIR", img: "/game/2xko/button/INAIR.webp" },
        { name: "WHILE BLOCKING", img: "/game/2xko/button/WHILEBLOCKING.webp" },
        { name: "WHILE STANDING", img: "/game/2xko/button/WHILESTANDING.webp" },
        { name: "ON KNOCKDOWN", img: "/game/2xko/button/ONKNOOKDOWN.webp" },
        { name: "ON WAKE-UP", img: "/game/2xko/button/ONWAKE-UP.webp" },
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
