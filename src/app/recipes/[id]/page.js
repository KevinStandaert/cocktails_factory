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
    <div className="container mx-auto mt-8 rounded-xl bg-serria-300 bg-opacity-10 p-6">
      <div className="w-full text-center">
        <h1 className="mb-20 mt-10 text-center text-4xl font-bold sm:mb-36 md:text-6xl lg:mt-24">
          {cocktail.name}
        </h1>

        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-4 lg:gap-20">
          {/*first card*/}
          <div className="h-[500px] max-h-[700px] rounded-xl bg-[url('/cocktail1.jpg')] bg-cover bg-center md:h-[700px]"></div>
          {/*second card*/}
          <div className="h-[500px] max-h-[700px] rounded-xl bg-serria-300 bg-opacity-10 lg:h-[700px]">
            <div className="flex h-full flex-col items-start justify-between px-4 py-6 sm:text-xl">
              <div className="ml-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faFaceGrinTongue}
                  />
                  Goût:
                </h2>
                <p className="ml-2">{cocktail.taste_type}</p>
              </div>

              <div className="ml-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faMartiniGlass}
                  />
                  Verre:
                </h2>
                <p>{cocktail.glass_name}</p>
              </div>

              <div className="ml-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faGear}
                  />
                  Méthode:
                </h2>
                <p>{cocktail.method_name}</p>
              </div>

              <div className="ml-2 flex flex-col flex-wrap items-start sm:ml-8 sm:flex-row sm:items-center">
                <h2 className="mb-2 mr-2 font-bold sm:mb-0">
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
                <h2 className="mr-2 font-bold">
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
              <p className="text-serria-500">{cocktail.description}</p>
            </div>
          </div>
          {/*third card*/}
          <div className="h-[500px] max-h-[700px] rounded-xl bg-serria-300 bg-opacity-10 lg:h-[700px]">
            <h2 className="-mb-8 mt-4 self-center text-xl font-bold sm:-mb-2 sm:text-2xl lg:-mb-8 lg:mt-8">
              <strong className="text-serria-500">Préparation </strong>du
              cocktail {cocktail.name}
            </h2>
            <div className="flex h-full flex-col items-start justify-evenly p-4 sm:text-xl lg:p-6">
              <ul className="list list-inside list-disc text-justify text-xs sm:text-base">
                <li className="mb-2 sm:mb-6">{cocktail.step_1}</li>
                <li className="mb-2 sm:mb-6">{cocktail.step_2}</li>
                <li className="mb-2 sm:mb-6">{cocktail.step_3}</li>
                <li className="mb-2 sm:mb-6">{cocktail.step_4}</li>
                <li className="mb-2 sm:mb-6">{cocktail.step_5}</li>
                <li className="mb-2 sm:mb-6">{cocktail.step_6}</li>
              </ul>
            </div>
          </div>
          {/*fourth card*/}
          <div className="h-[500px] max-h-[700px] rounded-xl bg-serria-300 bg-opacity-10 lg:h-[700px]">
            <h2 className="mt-4 self-center text-xl font-bold sm:text-2xl lg:-mb-8 lg:mt-8">
              <strong className="text-serria-500">Les conseils</strong> du pro
            </h2>
            <div className="flex h-full flex-col items-center justify-center p-4 sm:p-6 sm:text-xl">
              <p className="text-justify text-base lg:text-xl">
                {cocktail.advice}
              </p>
            </div>
          </div>
          {/*fifth card*/}
          <div className="h-[500px] rounded-xl bg-serria-300 bg-opacity-10 lg:col-span-2 lg:h-[550px]">
            <div className="flex h-full flex-col items-center p-4 sm:items-start sm:p-6 sm:text-xl">
              <h2 className="my-4 text-xl font-bold sm:text-2xl lg:my-8">
                <strong className="text-serria-500">Historique </strong>du{" "}
                {cocktail.name}
              </h2>
              <p className="text-justify text-base lg:text-xl">
                {cocktail.history}
              </p>
            </div>
          </div>
          {/*sixth card*/}
          <div className="h-[500px] bg-pink-500 lg:col-span-2 lg:h-[550px]"></div>
        </div>
      </div>
    </div>
  );
};

export default RecipesIdPage;
