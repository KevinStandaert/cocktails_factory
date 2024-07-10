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
    return <div className="mt-24 text-xl">Erreur de chargement des données...</div>;
  }

  return (
    <div>
      <h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      <p>{cocktail.taste_type}</p>
      <p>Method: {cocktail.method_name}</p>
      <p>Glass: {cocktail.glass_name}</p>
      <p>Categories: {cocktail.category_name.join(", ")}</p>
      <p>Ustensils: {cocktail.ustensil_name.join(", ")}</p>
      <div>
        Ingredients:
        <ul>
          {cocktail.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipesIdPage;
