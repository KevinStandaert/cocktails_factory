import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlass,
  faSpoon,
  faGear,
  faWineBottle,
  faFaceGrinTongue,
} from "@fortawesome/free-solid-svg-icons";

// La fonction pour récupérer les données côté serveur
async function fetchCocktail(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`);
  if (!res.ok) {
    throw new Error('Erreur de chargement des données');
  }
  return res.json();
}

// La fonction pour générer des métadonnées
export async function generateMetadata({ params }) {
  const cocktail = await fetchCocktail(params.id);
  return {
    title: `Recette de ${cocktail.name}`,
    description: `Découvrez comment réaliser la recette de ${cocktail.name} avec ${cocktail.ingredients.length} ingrédients grâce à cocktails factory !`,
    openGraph: {
      type: 'website',
      url: `https://cocktails-factory.vercel.app/recipes/${params.id}`,
      title: `Recette de ${cocktail.name} | Cocktails Factory - Fabrique à Cocktails`,
      description: `Découvrez comment réaliser la recette de ${cocktail.name} avec ${cocktail.ingredients.length} ingrédients grâce à cocktails factory !`,
      images: [
        {
          url: `https://cocktails-factory.vercel.app/${cocktail.url_image}`,
          width: 1024,
          height: 1024,
          alt: `Image représentant ${cocktail.name}`,
        },
      ],
    },
  };
}

const RecipesIdPage = async ({ params }) => {
  const { id } = params;
  const cocktail = await fetchCocktail(id);

  const backgroundImage = `url(/${cocktail.url_image})`;

  return (
    <div className="container mx-auto mt-8 rounded-xl bg-serria-300 bg-opacity-10 p-6">
      <div className="w-full text-center">
        <h1 className="mb-20 mt-10 text-center text-4xl font-bold sm:mb-36 md:text-6xl lg:mt-24">
          {cocktail.name}
        </h1>

        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-3 lg:gap-20">
          {/*first card*/}
          <div
            className="h-[550px] max-h-[700px] w-full rounded-xl bg-cover bg-center shadow-xl shadow-black md:h-[700px]"
            style={{ backgroundImage }}
          ></div>
          {/*second card*/}
          <div className="h-[550px] max-h-[700px] rounded-xl bg-serria-300 bg-opacity-10 md:h-[700px]">
            <div className="flex h-full flex-col items-start justify-between gap-1 px-4 py-6 sm:text-xl">
              <div className="ml-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-600"
                    icon={faFaceGrinTongue}
                  />
                  Goût:
                </h2>
                <p className="ml-2">{cocktail.taste_type}</p>
              </div>

              <div className="ml-2 mt-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-600"
                    icon={faMartiniGlass}
                  />
                  Verre:
                </h2>
                <p>{cocktail.glass_name}</p>
              </div>

              <div className="ml-2 mt-2 flex items-baseline sm:ml-8">
                <h2 className="mr-2 font-bold">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-600"
                    icon={faGear}
                  />
                  Méthode:
                </h2>
                <p>{cocktail.method_name}</p>
              </div>

              <div className="ml-2 flex flex-col flex-wrap items-start sm:ml-8 sm:flex-row sm:items-baseline">
                <h2 className="mb-2 mr-2 font-bold sm:mb-0">
                  <FontAwesomeIcon
                    className="mr-4 text-2xl text-serria-600"
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
                    className="mr-4 text-2xl text-serria-600"
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
              <p className="overflow-y-auto p-2 text-justify text-sm md:p-4 md:text-xl">
                {cocktail.description}
              </p>
            </div>
          </div>
          {/*third card*/}
          <div className="flex h-[550px] max-h-[700px] flex-col items-center rounded-xl bg-serria-300 bg-opacity-10 px-2 md:h-[700px]">
            <div className="mb-6 mt-8 flex text-center text-xl font-bold sm:text-3xl">
              <h2>
                <strong className="text-serria-600">Préparation </strong>du
                cocktail {cocktail.name}
              </h2>
            </div>
            <div className="flex h-[85%] flex-col items-start justify-center p-4 lg:p-6">
              <ul className="mb-8 list-inside list-disc overflow-y-auto p-2 text-left text-sm sm:text-base md:p-4 lg:text-xl">
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
          <div className="flex h-[550px] max-h-[700px] flex-col items-center rounded-xl bg-serria-300 bg-opacity-10 px-2 md:h-[700px]">
            <h2 className="mb-6 mt-8 flex text-xl font-bold sm:text-3xl">
              <strong className="text-serria-600">Les conseils</strong>&nbsp;du
              pro
            </h2>

            <div className="flex h-[85%] flex-col items-start justify-center px-2">
              <p className="mb-8 overflow-y-auto p-2 text-justify text-sm sm:text-base md:p-4 lg:text-xl">
                {cocktail.advice}
              </p>
            </div>
          </div>
          {/*fifth card*/}
          <div className="flex h-[550px] max-h-[550px] flex-col items-center rounded-xl bg-serria-300 bg-opacity-10 px-2 lg:col-span-2">
            <div className="mb-6 mt-8 flex text-center text-xl font-bold sm:text-3xl">
              <h2>
                <strong className="text-serria-600">Historique</strong>
                &nbsp;du&nbsp;
                {cocktail.name}
              </h2>
            </div>
            <div className="flex h-[85%] flex-col items-start justify-center px-2">
              <p className="mb-14 overflow-y-auto p-2 text-justify text-sm sm:text-base md:p-4 lg:text-xl">
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