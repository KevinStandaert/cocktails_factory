"use client";

import React from "react";
import Image from "next/image";
import useFetchData from "../utils/apiClient";
import Link from "next/link";

const MaterialCard = ({ dataUrl }) => {
  const { data: materials, loading, error } = useFetchData(dataUrl);

  if (loading) {
    return <div className="mt-24 text-xl">Chargement...</div>;
  }
  if (error) {
    return <div className="mt-24 text-xl">Erreur de chargement...</div>;
  }

  return materials.map((material) => (
    <Link
      href={`/articles/materials/${material.id}`}
      key={material.id}
      className="group mx-10 flex h-[300px] w-72 flex-col items-center justify-center rounded-xl bg-black bg-opacity-10 p-1 transition-all duration-700 hover:bg-opacity-30 sm:-mx-2 sm:w-64"
    >
      <Image
        src={`/${material.url_image_1}`}
        alt={material.name}
        priority
        width={250}
        height={200}
        className="mb-6 mt-6 h-40 w-auto rounded-xl shadow-xl shadow-black brightness-95 transition-all duration-700 group-hover:rotate-2 group-hover:scale-105 group-hover:brightness-110 sm:h-52"
      />
      <h2 className="font-bold text-orange-500 sm:text-2xl">{material.name}</h2>
    </Link>
  ));
};

export default MaterialCard;
