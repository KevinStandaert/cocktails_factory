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
  const backgroundImage = `url(/${cocktail.url_image})`;

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

        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-3 lg:gap-20">
          {/*first card*/}
          <div
            className="m-auto h-[500px] max-h-[700px] w-full rounded-xl bg-cover bg-center shadow-xl shadow-black lg:h-[700px]"
            style={{ backgroundImage }}
          ></div>
          {/*second card*/}
          <div className="h-[500px] max-h-[700px] rounded-xl  bg-serria-300 bg-opacity-10 lg:h-[700px]">
            <div className="flex h-full flex-col items-start justify-between gap-1 px-4 py-6 sm:text-xl">
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

              <div className="ml-2 mt-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faMartiniGlass}
                  />
                  Verre:
                </h2>
                <p>{cocktail.glass_name}</p>
              </div>

              <div className="ml-2 mt-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faGear}
                  />
                  Méthode:
                </h2>
                <p>{cocktail.method_name}</p>
              </div>

              <div className="ml-2 flex flex-col flex-wrap items-start sm:ml-8 sm:flex-row sm:items-baseline">
                <h2 className="mb-2 mr-2 font-bold sm:mb-0">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faSpoon}
                  />
                  Ustensils:
                </h2>
                <ul className="flex md:mt-2">
                  <li className="flex text-left">
                    {cocktail.ustensil_name.join(", ")}
                  </li>
                </ul>
              </div>

              <div className="ml-2 mt-2 flex flex-col sm:ml-8">
                <h2 className="mr-2 flex font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-500"
                    icon={faWineBottle}
                  />
                  Ingrédients:
                </h2>
                <ul className="md:mt-2">
                  {cocktail.ingredients.map((ingredient, index) => (
                    <li className="flex" key={ingredient.id || index}>
                      {ingredient.quantity} {ingredient.unit} {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="overflow-y-auto p-2 text-justify text-sm text-serria-500 md:p-4 md:text-xl">
                {cocktail.description}
              </p>
            </div>
          </div>
          {/*third card*/}
          <div className="h-[500px] max-h-[700px] rounded-xl overflow-hidden bg-serria-300 bg-opacity-10 px-2 lg:h-[700px]">
            <h2 className="-mb-8 mt-4 self-center text-xl font-bold sm:text-3xl lg:-mb-8 lg:mt-8">
              <strong className="text-serria-500">Préparation </strong>du
              cocktail {cocktail.name}
            </h2>
            <div className="flex h-full flex-col items-start justify-center p-4 over  lg:p-6">
              <ul className="list list-inside list-disc text-justify text-xs overflow-y-auto md:text-base lg:text-xl">
                <li className="mb-2 lg:mb-6">{cocktail.step_1}</li>
                <li className="mb-2 lg:mb-6">{cocktail.step_2}</li>
                <li className="mb-2 lg:mb-6">{cocktail.step_3}</li>
                <li className="mb-2 lg:mb-6">{cocktail.step_4}</li>
                <li className="mb-2 lg:mb-6">{cocktail.step_5}</li>
                <li className="mb-2 lg:mb-6">{cocktail.step_6}</li>
              </ul>
            </div>
          </div>
          {/*fourth card*/}
          <div className="h-[500px] max-h-[700px] rounded-xl bg-serria-300 bg-opacity-10 lg:h-[700px]">
            <h2 className="mt-6 self-center text-xl font-bold sm:text-3xl lg:-mb-8 lg:mt-8">
              <strong className="text-serria-500">Les conseils</strong> du pro
            </h2>
            <div className="flex h-full flex-col items-center justify-center p-4 sm:p-6 sm:text-xl">
              <p className="-mt-8 px-4 text-justify text-sm sm:text-base lg:px-8 lg:text-xl">
                {cocktail.advice}
              </p>
            </div>
          </div>
          {/*fifth card*/}
          <div className="h-[500px] rounded-xl bg-serria-300 bg-opacity-10 lg:col-span-2 lg:h-[550px]">
            <h2 className="mt-6 self-center text-xl font-bold px-2 sm:text-3xl lg:-mb-8 lg:mt-8">
              <strong className="text-serria-500">Historique </strong>du{" "}
              {cocktail.name}
            </h2>
            <div className="flex h-full flex-col items-center justify-center p-4 sm:p-6 sm:text-xl">
              <p className="-mt-8 mb-8 px-4 text-justify sm:text-base text-sm md:px-16 lg:text-xl">
                {cocktail.history}
              </p>
            </div>
          </div>
          {/*sixth card*/}
          {/* <div className="h-[500px] bg-pink-500 lg:col-span-2 lg:h-[550px]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default RecipesIdPage;
