import React from "react";
import CocktailCard from "../../components/CocktailCard";

export const metadata = {
  title: "Liste des recettes",
  description:
    "Découvrez toutes les recettes de cocktails disponibles sur cocktails factory !",
  openGraph: {
    type: "website",
    url: "https://cocktails-factory.vercel.app/recipes",
    title: "Liste des recettes | Cocktails Factory - Fabrique à Cocktails",
    alternates: {
      canonical: "https://cocktails-factory.vercel.app/recipes",
    },
    description:
      "Découvrez toutes les recettes de cocktails disponibles sur cocktails factory !",
    images: [
      {
        url: "https://cocktails-factory.vercel.app/logo_cocktails_factory.webp",
        width: 1024,
        height: 1024,
        alt: "Image représentant les recettes de cocktails factory",
      },
    ],
  },
};

const Recipes = () => {
  const dataUrl = "/recipes/cards";

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="mb-2 self-start text-nowrap text-2xl font-bold sm:mb-4 md:text-5xl">
          Recettes de cocktails
        </h1>
        <h2 className="mb-20 self-end text-nowrap text-sm sm:mb-36 md:text-base lg:text-xl">
          Élevez vos sens,{" "}
          <strong className="text-orange-500">une recette à la fois</strong>...
        </h2>
        <div className="grid gap-20 md:grid-cols-2 xl:grid-cols-3">
          <CocktailCard dataUrl={dataUrl} />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
