"use client";

import React from "react";
import useFetchData from "../../../utils/apiClient";

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
    <div className="min-h-screen items-center p-6 md:p-36">
      <div className="text-center">
        <h1 className="mb-20 text-2xl font-bold sm:mb-36 md:text-6xl">
          {cocktail.name}
        </h1>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:grid-rows-4 sm:gap-20">
          <div className="h-[500px] md:h-[600px] bg-green-500"></div>
          <div className="h-[500px] sm:h-[600px] bg-red-500"></div>
          <div className="h-[500px] sm:h-[600px] bg-orange-500"></div>
          <div className="h-[500px] sm:h-[600px] bg-blue-500"></div>
          <div className="sm:col-span-2 h-[500px] sm:h-[450px] bg-indigo-500"></div>
          <div className="sm:col-span-2 h-[500px] sm:h-[450px] bg-pink-500"></div>
        </div>
      </div>
    </div>

    
  );
};

export default RecipesIdPage;
