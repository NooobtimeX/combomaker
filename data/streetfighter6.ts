const tekken8 = {
  id: "street_fighter_6",
  name: "Street Fighter 6",
  img: "/game/icon/streetfighter6.webp",
  items: [
    {
      name: "Directional",
      items: [
        { name: "natural", img: "/game/street_figther_6/n.svg" },
        { name: "b", img: "/game/tekken8/b.webp", isSwapHorizontal: true },
        { name: "db", img: "/game/tekken8/db.webp", isSwapHorizontal: true },
        { name: "d", img: "/game/tekken8/d.webp" },
        { name: "df", img: "/game/tekken8/df.webp", isSwapHorizontal: true },
        { name: "f", img: "/game/tekken8/f.webp", isSwapHorizontal: true },
        { name: "uf", img: "/game/tekken8/uf.webp", isSwapHorizontal: true },
        { name: "u", img: "/game/tekken8/u.webp" },
        { name: "ub", img: "/game/tekken8/ub.webp", isSwapHorizontal: true },
      ],
    },
    {
      name: "Action",
      items: [
        {
          name: "LP",
          img: "/game/street_figther_6/LP.webp",
        },
        {
          name: "MP",
          img: "/game/street_figther_6/MP.webp",
        },
        {
          name: "HP",
          img: "/game/street_figther_6/HP.webp",
        },
        {
          name: "LK",
          img: "/game/street_figther_6/LK.webp",
        },
        {
          name: "MK",
          img: "/game/street_figther_6/MK.webp",
        },
        {
          name: "HK",
          img: "/game/street_figther_6/HK.webp",
        },
        {
          name: "Drive Impact",
          img: "/game/street_figther_6/DI.webp",
        },
        {
          name: "Drive RUSH",
          img: "/game/street_figther_6/DR.webp",
        },
      ],
    },
    {
      name: "Special",
      items: [
        { name: "next", img: "/game/tekken8/next.webp" },
        { name: "+", img: "/game/2xko/button/+.webp" },
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
export default tekken8;
