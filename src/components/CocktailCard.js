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
      className="mx-10 flex h-[500px] w-72 flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 px-1 sm:-mx-2 sm:w-64"
    >
      <Image
        src={`/${cocktail.url_image}`}
        alt={cocktail.name}
        width={250}
        height={200}
        className="mt-6 h-40 w-auto rounded-xl mb-6 shadow-xl shadow-black sm:h-52"
      />
      <h2 className="font-bold text-serria-500 sm:text-2xl">{cocktail.name}</h2>
      <div className="relative my-2 flex h-full w-full items-center justify-center">
        <p className="text-center text-xs sm:text-sm">
          {cocktail.ingredients.join(", ")}
        </p>
      </div>
      <p className="mb-2 text-center text-xs sm:text-sm">{cocktail.taste}</p>
    </Link>
  ));
};

export default CocktailCard;
