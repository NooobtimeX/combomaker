const tekken8 = {
  id: "tekken_8",
  name: "Tekken 8",
  img: "https://firebasestorage.googleapis.com/v0/b/combomaker/o/gameicon%2Ftekken8.webp?alt=media",
  items: [
    {
      name: "Directional",
      items: [
        { name: "natural", img: "/game/tekken8/natural.webp" },
        { name: "b", img: "/game/tekken8/b.webp", isSwapHorizontal: true },
        { name: "db", img: "/game/tekken8/db.webp", isSwapHorizontal: true },
        { name: "d", img: "/game/tekken8/d.webp" },
        { name: "df", img: "/game/tekken8/df.webp", isSwapHorizontal: true },
        { name: "f", img: "/game/tekken8/f.webp", isSwapHorizontal: true },
        { name: "uf", img: "/game/tekken8/uf.webp", isSwapHorizontal: true },
        { name: "u", img: "/game/tekken8/u.webp" },
        { name: "ub", img: "/game/tekken8/ub.webp", isSwapHorizontal: true },
        { name: "bp", img: "/game/tekken8/bp.webp", isSwapHorizontal: true },
        {
          name: "dbp",
          img: "/game/tekken8/dbp.webp",
          isSwapHorizontal: true,
        },
        { name: "dp", img: "/game/tekken8/dp.webp" },
        {
          name: "dfp",
          img: "/game/tekken8/dfp.webp",
          isSwapHorizontal: true,
        },
        { name: "fp", img: "/game/tekken8/fp.webp", isSwapHorizontal: true },
        {
          name: "ufp",
          img: "/game/tekken8/ufp.webp",
          isSwapHorizontal: true,
        },
        { name: "up", img: "/game/tekken8/up.webp" },
        {
          name: "ubp",
          img: "/game/tekken8/ubp.webp",
          isSwapHorizontal: true,
        },
      ],
    },
    {
      name: "Action",
      items: [
        { name: "1", img: "/game/tekken8/1.webp" },
        { name: "2", img: "/game/tekken8/2.webp" },
        { name: "3", img: "/game/tekken8/3.webp" },
        { name: "4", img: "/game/tekken8/4.webp" },
        { name: "1+2", img: "/game/tekken8/1+2.webp" },
        { name: "3+4", img: "/game/tekken8/3+4.webp" },
        { name: "1+3", img: "/game/tekken8/1+3.webp" },
        { name: "2+4", img: "/game/tekken8/2+4.webp" },
        { name: "1+4", img: "/game/tekken8/1+4.webp" },
        { name: "2+3", img: "/game/tekken8/2+3.webp" },
        { name: "1+2+3", img: "/game/tekken8/1+2+3.webp" },
        { name: "1+2+4", img: "/game/tekken8/1+2+4.webp" },
        { name: "1+3+4", img: "/game/tekken8/1+3+4.webp" },
        { name: "2+3+4", img: "/game/tekken8/2+3+4.webp" },
        { name: "1+2+3+4", img: "/game/tekken8/1+2+3+4.webp" },
      ],
    },
    {
      name: "Special",
      items: [
        { name: "bracket_left", img: "/game/tekken8/bracket_left.webp" },
        { name: "bracket_right", img: "/game/tekken8/bracket_right.webp" },
        { name: "next", img: "/game/tekken8/next.webp" },
        { name: "comma", img: "/game/tekken8/comma.webp" },
        { name: "tilde", img: "/game/tekken8/tilde.webp" },
        { name: "jf", img: "/game/tekken8/jf.webp" },
        { name: "delay", img: "/game/tekken8/delay.webp" },
        { name: "balconybreak", img: "/game/tekken8/balconybreak.webp" },
        { name: "floorbreak", img: "/game/tekken8/floorbreak.webp" },
        { name: "floorblast", img: "/game/tekken8/floorblast.webp" },
        { name: "wallbound", img: "/game/tekken8/wallbound.webp" },
        { name: "wallblast", img: "/game/tekken8/wallblast.webp" },
        { name: "wallbreak", img: "/game/tekken8/wallbreak.webp" },
        { name: "heatdash", img: "/game/tekken8/heatdash.webp" },
        { name: "tornado", img: "/game/tekken8/tornado.webp" },
      ],
    },
    {
      name: "Status",
      items: [
        { name: "counter hit", img: "/game/tekken8/counterhit.webp" },
        { name: "during heat", img: "/game/tekken8/duringheat.webp" },
        { name: "during sidestep", img: "/game/tekken8/duringsidestep.webp" },
        { name: "heat", img: "/game/tekken8/heat.webp" },
        { name: "hold", img: "/game/tekken8/hold.webp" },
        { name: "rage", img: "/game/tekken8/rage.webp" },
        { name: "ssl", img: "/game/tekken8/ssl.webp" },
        { name: "ssr", img: "/game/tekken8/ssr.webp" },
        { name: "swl", img: "/game/tekken8/swl.webp" },
        { name: "swr", img: "/game/tekken8/swr.webp" },
        { name: "while crouching", img: "/game/tekken8/whilecrouching.webp" },
        { name: "while rising", img: "/game/tekken8/whilerising.webp" },
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