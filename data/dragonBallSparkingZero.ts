const dragonBallSparkingZero = {
  id: "dragon_ball_sparking_zero",
  name: "Dragon Ball: Sparking Zero",
  img: "/game/icon/dragonballsparkingzero.webp",
  items: [
    {
      name: "Playstation",
      items: [
        { name: "Left", img: "/game/playstation_5/D-Pad Left.webp" },
        { name: "Down", img: "/game/playstation_5/D-Pad Down.webp" },
        { name: "Right", img: "/game/playstation_5/D-Pad Right.webp" },
        { name: "Up", img: "/game/playstation_5/D-Pad Up.webp" },
        { name: "Left", img: "/game/playstation_5/Left Stick Left.webp" },
        { name: "Down", img: "/game/playstation_5/Left Stick Down.webp" },
        { name: "Right", img: "/game/playstation_5/Left Stick Right.webp" },
        { name: "Up", img: "/game/playstation_5/Left Stick Up.webp" },
        { name: "Left", img: "/game/playstation_5/Right Stick Left.webp" },
        { name: "Down", img: "/game/playstation_5/Right Stick Down.webp" },
        { name: "Right", img: "/game/playstation_5/Right Stick Right.webp" },
        { name: "Up", img: "/game/playstation_5/Right Stick Up.webp" },
        { name: "", img: "/game/playstation_5/Left Stick Click.webp" },
        { name: "", img: "/game/playstation_5/Right Stick Click.webp" },
        { name: "Rush Attack", img: "/game/playstation_5/Square.webp" },
        { name: "Step", img: "/game/playstation_5/Cross.webp" },
        { name: "Perception", img: "/game/playstation_5/Circle.webp" },
        { name: "Ki Blast", img: "/game/playstation_5/Triangle.webp" },
        { name: "Ascend", img: "/game/playstation_5/L1.webp" },
        { name: "Descend", img: "/game/playstation_5/L2.webp" },
        { name: "Guard", img: "/game/playstation_5/R1.webp" },
        { name: "Ki Charge", img: "/game/playstation_5/R2.webp" },
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

export default dragonBallSparkingZero;
