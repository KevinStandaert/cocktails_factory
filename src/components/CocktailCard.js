"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchData } from "../utils/apiClient";

const CocktailCard = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const data = await fetchData("/recipes/cards");
        setCocktails(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur de récupération des cocktails:", error);
      }
    };
    getCocktails();
  }, []);

  if (loading) {
    return <div className="mt-24 text-xl">Chargement...</div>;
  }
  return cocktails.map((cocktail) => (
    <div
      key={cocktail.id}
      className="{`mx-10 flex h-72 flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 p-4 sm:-mx-2 sm:h-96 sm:w-64"
    >
      <Image
        src={"/cocktail2.jpg"}
        alt={cocktail.name}
        width={250}
        height={200}
        className="h-36 w-auto rounded-xl sm:h-48"
      />
      <h2 className="font-bold text-serria-500 sm:text-2xl">{cocktail.name}</h2>
      <p className="text-center text-xs sm:text-sm">
        {cocktail.ingredients.join(", ")}
      </p>
      <p className="text-center text-xs sm:text-sm">{cocktail.taste}</p>
    </div>
  ));
};

export default CocktailCard;
