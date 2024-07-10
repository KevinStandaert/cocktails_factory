"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useFetchData from "../utils/apiClient";
import Link from "next/link";

const Carousel = ({ dataUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const { data: cocktails, loading, error } = useFetchData(dataUrl);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cocktails.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cocktails.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (loading) {
    return <div className="my-36 text-xl">Chargement...</div>;
  }
  if (error) {
    return <div className="my-36 text-xl">Erreur de chargement...</div>;
  }

  return (
    <div className="relative flex items-center justify-center text-metal-950 sm:py-16">
      <button
        aria-label="recette precedente"
        className="absolute left-0 z-20"
        onClick={handlePrevClick}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="h-8 w-8 text-metal-950"
        />
      </button>
      <div className="relative flex h-[500px] w-[350px] items-center justify-center overflow-hidden sm:w-[600px]">
        {cocktails.map((cocktail, index) => {
          let position;
          if (index === currentIndex) {
            position = "center";
          } else {
            position = "side";
          }

          let scale;
          if (position === "center") {
            scale = "scale-100";
          } else {
            scale = "scale-75";
          }

          let blur;
          if (position !== "center") {
            blur = "blur-sm";
          } else {
            blur = "";
          }

          return (
            <div
              key={cocktail.id}
              className={`absolute transition-all duration-[800ms] ${position}`}
              style={{
                transform: `translateX(${
                  position === "center" ? 0 : (index - currentIndex) * 100
                }%)`,
                zIndex: position === "center" ? 10 : 1,
              }}
            >
              <Link
                href={`/recipes/${cocktail.id}`}
                className={`mx-10 flex h-72 flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 p-4 sm:-mx-2 sm:h-96 sm:w-64 ${scale} ${blur}`}
              >
                <Image
                  src={"/cocktail1.jpg"}
                  alt={cocktail.name}
                  width={250}
                  height={200}
                  className="h-36 w-auto rounded-xl sm:h-48"
                />
                <h2 className="font-bold text-serria-500 sm:text-2xl">
                  {cocktail.name}
                </h2>
                <p className="text-center text-xs sm:text-sm">
                  {cocktail.ingredients.join(", ")}
                </p>
                <p className="text-center text-xs sm:text-sm">
                  {cocktail.taste}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <button
        aria-label="image suivante"
        className="absolute right-0 z-20"
        onClick={handleNextClick}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-8 w-8 text-metal-300 sm:text-metal-950"
        />
      </button>
    </div>
  );
};

export default Carousel;
