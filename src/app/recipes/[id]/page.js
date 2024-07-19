"use client";

import React from "react";
import useFetchData from "../../../utils/apiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlass,
  faSpoon,
  faGear,
  faWineBottle,
  faFaceGrinTongue,
} from "@fortawesome/free-solid-svg-icons";

export const dynamic = "force-static";

const RecipesIdPage = ({ params: { id } }) => {
  const { data: cocktail, loading, error } = useFetchData(`/recipes/${id}`);

  if (loading) {
    return <div className="mt-24 text-xl">Chargement...</div>;
  }

  if (error) {
    return (
      <div className="mt-24 text-xl">Erreur de chargement des données...</div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="w-full text-center">
        <h1 className="mb-20 mt-10 text-center text-4xl font-bold sm:mb-36 md:text-6xl lg:mt-24">
          {cocktail.name}
        </h1>

        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-4 lg:gap-20">
          <div className="h-[500px] max-h-[600px] rounded-xl bg-[url('/cocktail1.jpg')] bg-cover bg-center md:h-[600px]"></div>
          <div className="h-[500px] max-h-[600px] bg-serria-300 rounded-xl bg-opacity-10 lg:h-[600px]">
            
            <div className="flex h-full flex-col items-start justify-between p-4 sm:text-xl">
              <p className="flex">{cocktail.description}</p>

              <div className="flex items-center ml-2 sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faFaceGrinTongue}
                  />
                  Goût:
                </h2>
                <p>{cocktail.taste_type}</p>
              </div>

              <div className="flex items-center ml-2 sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faMartiniGlass}
                  />
                  Verre:
                </h2>
                <p>{cocktail.glass_name}</p>
              </div>

              <div className="flex items-center ml-2 sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faGear}
                  />
                  Méthode:
                </h2>
                <p>{cocktail.method_name}</p>
              </div>

              <div className="flex items-start sm:items-center flex-col sm:flex-row ml-2 sm:ml-8">
                <h2 className="mr-2 mb-2 sm:mb-0 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faSpoon}
                  />
                  Ustensils:
                </h2>
                <ul className="flex">
                  <li className="flex">{cocktail.ustensil_name.join(", ")}</li>
                </ul>
              </div>

              <div className="ml-2 sm:ml-8">
                <h2 className="mb-2 mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faWineBottle}
                  />
                  Ingrédients:
                </h2>
                <ul className="flex flex-col">
                  {cocktail.ingredients.map((ingredient) => (
                    <li className="flex" key={ingredient.id}>
                      {ingredient.quantity} ml {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[500px] max-h-[600px] bg-orange-500 lg:h-[600px]"></div>
          <div className="h-[500px] max-h-[600px] bg-blue-500 lg:h-[600px]"></div>
          <div className="h-[300px] bg-indigo-500 lg:col-span-2 lg:h-[450px]"></div>
          <div className="h-[300px] bg-pink-500 lg:col-span-2 lg:h-[450px]"></div>
        </div>
      </div>
    </div>
  );
};

export default RecipesIdPage;
