import React from "react";

import Link from "next/link";
import Image from "next/image";

const Articles = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col gap-2 text-center">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href={"/articles/materials"}
            className="mx-10 flex h-[500px] w-72 flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 px-1 sm:-mx-2 sm:w-64"
          >
            <Image
              src={"/materiels.webp"}
              alt={"materiels du barman"}
              width={250}
              height={200}
              className="mb-6 mt-6 h-40 w-auto rounded-xl shadow-xl shadow-black sm:h-52"
            />
            <h2 className="font-bold text-serria-500 sm:text-2xl">Le materiels</h2>
            <div className="relative my-2 flex h-full items-center justify-center">
              <p className="text-pretty text-xs p-2 sm:text-sm">Toutes les informations essentielles à connaître sur les différents outils du barman.</p>
            </div>
          </Link>
          <Link
            href={"/articles/ingredients"}
            className="mx-10 flex h-[500px] w-72 flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 px-1 sm:-mx-2 sm:w-64"
          >
            <Image
              src={"/ingredients.webp"}
              alt={"les ingrédients du barman"}
              width={250}
              height={200}
              className="mb-6 mt-6 h-40 w-auto rounded-xl shadow-xl shadow-black sm:h-52"
            />
            <h2 className="font-bold text-serria-500 sm:text-2xl">
              Les ingrédients
            </h2>
            <div className="relative my-2 flex h-full items-center justify-center">
              <p className="text-pretty p-2 text-xs sm:text-sm">La connaissance des produits est essentiel pour créer vos propres recettes comme un vrai pro.</p>
            </div>
          </Link>
          <Link
            href={"/articles/techniques"}
            className="mx-10 flex h-[500px] w-72 flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 px-1 sm:-mx-2 sm:w-64"
          >
            <Image
              src={"/techniques.webp"}
              alt={"technique de cocktail"}
              width={250}
              height={200}
              className="mb-6 mt-6 h-40 w-auto rounded-xl shadow-xl shadow-black sm:h-52"
            />
            <h2 className="font-bold text-serria-500 sm:text-2xl">
              Les techniques
            </h2>
            <div className="relative my-2 flex h-full items-center justify-center">
              <p className="text-pretty p-2 text-xs sm:text-sm">Découvrez toutes les techniques indispensables pour réaliser tous les cocktails du monde.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
