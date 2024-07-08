"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "../utils/apiClient";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const data = await fetchData("/recipes/cards/random");
        setCocktails(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur de récupération des cocktails:", error);
      }
    };
    getCocktails();
  }, []);


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
    return <div>Chargement...</div>;
  }

  return (
    <div className="relative flex items-center justify-center text-metal-950 sm:py-16">
      <button className="absolute left-0 z-20" onClick={handlePrevClick}>
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
              key={cocktail.name}
              className={`absolute transition-all duration-[800ms] ${position}`}
              style={{
                transform: `translateX(${
                  position === "center" ? 0 : (index - currentIndex) * 100
                }%)`,
                zIndex: position === "center" ? 10 : 1,
              }}
            >
              <div
                className={`mx-6 flex flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 p-4 sm:-mx-2 sm:h-96 sm:w-64 ${scale} ${blur}`}
              >
                <Image
                  src={"/cocktail1.jpg"}
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
                
              </div>
            </div>
          );
        })}
      </div>
      <button className="absolute right-0 z-20" onClick={handleNextClick}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-8 w-8 text-metal-300 sm:text-metal-950"
        />
      </button>
    </div>
  );
};

export default Carousel;
