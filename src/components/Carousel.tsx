import { useContext } from "react";
import Card from "./Card";
import { context, defaultValue } from "../context/Context";

export default function Carousel() {
  const cards = [
    { categorie: "all", img: "car.png" },
    { categorie: "bags", img: "image_1.png" },
    { categorie: "clothes", img: "image_7.png" },
    { categorie: "caps", img: "image_5.png" },
    { categorie: "cups", img: "image_6.png" },
  ];

  const { setData } = useContext(context);

  const handlerCategory = (categorie: string) => {
    const filteredData = defaultValue.filter(
      (item) => item.categorie === categorie
    );
    if (!setData) return;
    if (categorie === "all") {
      return setData(defaultValue);
    }
    setData(filteredData);
  };

  return (
    <>
      <h1 className="p-4 text-2xl font-bold text-white">Categories</h1>
      <main className="no-scrollbar h-62 mb-14 flex w-full items-center justify-center gap-5 overflow-x-scroll">
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            categorie={card.categorie}
            styles="w-64 !h-28 min-w-40"
            onClick={() => handlerCategory(card.categorie)}
          />
        ))}
      </main>
    </>
  );
}
