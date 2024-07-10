"use client";

import React from "react";
import Image from "next/image";
import useFetchData from "../utils/apiClient";
import Link from "next/link";

const CocktailCard = ({ dataUrl }) => {
  const { data: cocktails, loading, error } = useFetchData(dataUrl);

  if (loading) {
    return <div className="mt-24 text-xl">Chargement...</div>;
  }
  if (error) {
    return <div className="mt-24 text-xl">Erreur de chargement...</div>;
  }

  return cocktails.map((cocktail) => (
    <Link
      href={`/recipes/${cocktail.id}`}
      key={cocktail.id}
      className="mx-10 flex h-72 flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 p-4 sm:-mx-2 sm:h-96 sm:w-64"
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
    </Link>
  ));
};

export default CocktailCard;
