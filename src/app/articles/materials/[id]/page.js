"use client";

import React from "react";
import useFetchData from "../../../../utils/apiClient";

export const dynamic = "force-static";

const ArticleIdPage = ({ params: { id } }) => {
  const { data: material, loading, error } = useFetchData(`/materials/${id}`);

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
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-3 lg:gap-20">
        {material.name}
      </div>
    </div>
  );
};

export default ArticleIdPage;
