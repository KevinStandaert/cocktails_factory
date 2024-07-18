"use client";

import React from "react";
import useFetchData from "../../../utils/apiClient";
import Image from "next/image";

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
        <h1 className="mb-20 mt-10 lg:mt-24 text-center text-4xl font-bold sm:mb-36 md:text-6xl">
          {cocktail.name}
        </h1>

        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-4 lg:gap-20">
          <div className="h-[500px] max-h-[600px] bg-[url('/cocktail1.jpg')] bg-cover bg-center md:h-[600px]"></div>
          <div className="h-[500px] max-h-[600px] bg-red-500 lg:h-[600px]"></div>
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
