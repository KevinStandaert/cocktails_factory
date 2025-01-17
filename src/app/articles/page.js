import React from "react";

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Liste des articles",
  description:
    "Explorez notre gamme d’articles pour approfondir vos connaissances sur l’univers du bar.",
  openGraph: {
    type: "website",
    url: "https://cocktails-factory.vercel.app/articles",
    title: "Liste des articles | Cocktails Factory - Fabrique à Cocktails",
    description:
      "Explorez notre gamme d’articles pour approfondir vos connaissances sur l’univers du bar.",
    images: [
      {
        url: "https://cocktails-factory.vercel.app/logo_cocktails_factory.webp",
        width: 1024,
        height: 1024,
        alt: "Image représentant les articles pour apprendre à faire des cocktails",
      },
    ],
  },
};

const Articles = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col gap-2 text-center">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href={"/articles/materials"}
            className="mx-10 flex h-[500px] w-72 flex-col items-center justify-between rounded-xl bg-black bg-opacity-10 px-1 sm:-mx-2 sm:w-64"
          >
            <Image
              src={"/materiels.webp"}
              alt={"materiels du barman"}
              width={250}
              height={200}
              className="mb-6 mt-6 h-40 w-auto rounded-xl shadow-xl shadow-black brightness-95 transition-all duration-700 hover:scale-110 hover:brightness-110 sm:h-52"
            />
            <h2 className="font-bold text-orange-500 sm:text-2xl">
              Le materiels
            </h2>
            <div className="relative my-2 flex h-full items-center justify-center">
              <p className="text-pretty p-2 text-xs sm:text-sm">
                Toutes les informations essentielles à connaître sur les
                différents outils du barman.
              </p>
            </div>
          </Link>
          <Link
            href={"/articles/ingredients"}
            className="mx-10 flex h-[500px] w-72 flex-col items-center justify-between rounded-xl bg-black bg-opacity-10 px-1 sm:-mx-2 sm:w-64"
          >
            <Image
              src={"/ingredients.webp"}
              alt={"les ingrédients du barman"}
              width={250}
              height={200}
              className="mb-6 mt-6 h-40 w-auto rounded-xl shadow-xl shadow-black brightness-95 transition-all duration-700 hover:scale-110 hover:brightness-110 sm:h-52"
            />
            <h2 className="font-bold text-orange-500 sm:text-2xl">
              Les ingrédients
            </h2>
            <div className="relative my-2 flex h-full items-center justify-center">
              <p className="text-pretty p-2 text-xs sm:text-sm">
                La connaissance des produits est essentiel pour créer vos
                propres recettes comme un vrai pro.
              </p>
            </div>
          </Link>
          <Link
            href={"/articles/techniques"}
            className="mx-10 flex h-[500px] w-72 flex-col items-center justify-between rounded-xl bg-black bg-opacity-10 px-1 sm:-mx-2 sm:w-64"
          >
            <Image
              src={"/techniques.webp"}
              alt={"technique de cocktail"}
              width={250}
              height={200}
              className="mb-6 mt-6 h-40 w-auto rounded-xl shadow-xl shadow-black brightness-95 transition-all duration-700 hover:scale-110 hover:brightness-110 sm:h-52"
            />
            <h2 className="font-bold text-orange-500 sm:text-2xl">
              Les techniques
            </h2>
            <div className="relative my-2 flex h-full items-center justify-center">
              <p className="text-pretty p-2 text-xs sm:text-sm">
                Découvrez toutes les techniques indispensables pour réaliser
                tous les cocktails du monde.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
