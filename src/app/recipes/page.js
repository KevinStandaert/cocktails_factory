import React from "react";
import CocktailCard from "../../components/CocktailCard";

const Recipes = () => {
  const dataUrl = "/recipes/cards";

  return (
    <div className="flex min-h-screen flex-col items-center p-12 md:p-36">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="mb-20 text-2xl font-bold sm:mb-36 md:text-6xl">
          Recettes de cocktails
        </h1>
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          <CocktailCard dataUrl={dataUrl} />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
