const tekken8 = {
  id: "street_fighter_6",
  name: "Street Fighter 6",
  img: "/game/icon/streetfighter6.webp",
  items: [
    {
      name: "Directional",
      items: [
        { name: "natural", img: "/street_figther_6/n.svg" },
        { name: "b", img: "/tekken8/b.webp", isSwapHorizontal: true },
        { name: "db", img: "/tekken8/db.webp", isSwapHorizontal: true },
        { name: "d", img: "/tekken8/d.webp" },
        { name: "df", img: "/tekken8/df.webp", isSwapHorizontal: true },
        { name: "f", img: "/tekken8/f.webp", isSwapHorizontal: true },
        { name: "uf", img: "/tekken8/uf.webp", isSwapHorizontal: true },
        { name: "u", img: "/tekken8/u.webp" },
        { name: "ub", img: "/tekken8/ub.webp", isSwapHorizontal: true },
      ],
    },
    {
      name: "Action",
      items: [
        {
          name: "LP",
          img: "/street_figther_6/LP.png",
        },
        {
          name: "MP",
          img: "/street_figther_6/MP.png",
        },
        {
          name: "HP",
          img: "/street_figther_6/HP.png",
        },
        {
          name: "LK",
          img: "/street_figther_6/LK.png",
        },
        {
          name: "MK",
          img: "/street_figther_6/MK.png",
        },
        {
          name: "HK",
          img: "/street_figther_6/HK.png",
        },
        {
          name: "Drive Impact",
          img: "/street_figther_6/DI.png",
        },
        {
          name: "Drive RUSH",
          img: "/street_figther_6/DR.png",
        },
      ],
    },
    {
      name: "Special",
      items: [
        { name: "next", img: "/tekken8/next.webp" },
        { name: "+", img: "/2xko/button/+.png" },
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
