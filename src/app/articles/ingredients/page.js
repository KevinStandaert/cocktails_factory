import React from "react";
import CocktailCard from "../../../components/CocktailCard";

const Recipes = () => {
  const dataUrl = "/recipes/cards";

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col gap-2 text-center">
        <div className="grid gap-20 md:grid-cols-2 xl:grid-cols-3">
          <CocktailCard dataUrl={dataUrl} />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
