"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cocktails = [
  {
    id: 1,
    name: "Cocktail 1",
    image: "/cocktail1.jpg",
    ingredients: "Ingrédient 1, Ingrédient 2",
    taste: "Doux",
  },
  {
    id: 2,
    name: "Cocktail 2",
    image: "/cocktail2.jpg",
    ingredients: "Ingrédient 3, Ingrédient 4",
    taste: "Aigre",
  },
  {
    id: 3,
    name: "Cocktail 3",
    image: "/cocktail3.jpg",
    ingredients: "Ingrédient 5, Ingrédient 6",
    taste: "Amer",
  },
  {
    id: 4,
    name: "Cocktail 4",
    image: "/cocktail4.jpg",
    ingredients: "Ingrédient 7, Ingrédient 8",
    taste: "Sucré",
  },
  {
    id: 5,
    name: "Cocktail 5",
    image: "/cocktail5.jpg",
    ingredients: "Ingrédient 9, Ingrédient 10",
    taste: "Salé",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cocktails.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cocktails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPositionClass = (index) => {
    if (index === currentIndex) return "translate-x-0 z-10";
    if (index === (currentIndex + 1) % cocktails.length) return "translate-x-full z-5";
    if (index === (currentIndex - 1 + cocktails.length) % cocktails.length) return "-translate-x-full z-5";
    return "translate-x-full z-0";
  };

  return (
    <div className="relative flex items-center justify-center text-metal-950 sm:py-16">
      <button className="absolute left-0 z-20" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faArrowLeft} className="h-8 w-8 text-metal-950" />
      </button>
      <div className="relative flex h-[500px] w-[350px] items-center justify-center overflow-hidden sm:w-[600px]">
        {cocktails.map((cocktail, index) => {
          const positionClass = getPositionClass(index);
          const isActive = index === currentIndex;
          const scale = isActive ? "scale-100" : "scale-75";
          const blur = isActive ? "" : "blur-sm";

          return (
            <div
              key={cocktail.id}
              className={`absolute transition-transform duration-700 ease-in-out transform ${positionClass}`}
            >
              <div className={`mx-4 flex flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 p-4 sm:-mx-2 sm:h-96 sm:w-64 ${scale} ${blur}`}>
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  width={250}
                  height={200}
                  className="h-48 w-auto rounded-xl"
                />
                <h2 className="font-bold text-serria-500 sm:text-2xl">
                  {cocktail.name}
                </h2>
                <p className="text-center text-xs sm:text-sm">
                  {cocktail.ingredients}
                </p>
                <p className="text-sm">{cocktail.taste}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="absolute right-0 z-20" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faArrowRight} className="h-8 w-8 text-metal-300 sm:text-metal-950" />
      </button>
    </div>
  );
};

export default Carousel;
