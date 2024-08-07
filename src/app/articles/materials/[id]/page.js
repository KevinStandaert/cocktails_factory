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
      <div className="w-full text-center">
        <h1 className="mb-20 mt-10 text-4xl font-bold sm:mb-36 md:text-6xl lg:mt-24">
          {material.name}
        </h1>

        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-3 lg:gap-20">
          {/*first card*/}
          <div
            className="h-[250px] rounded-xl bg-cover bg-center shadow-xl shadow-black md:h-[450px] lg:h-[500px] xl:h-[700px]"
            style={{ backgroundImage: `url(/${material.url_image_1})` }}
          ></div>

          {/*second card*/}
          <div className="flex h-[250px] flex-col items-center rounded-xl bg-serria-300 bg-opacity-10 px-2 md:h-[450px] lg:h-[500px] xl:h-[700px]">
            <h2 className="mb-6 mt-8 flex text-xl font-bold sm:text-3xl">
              <strong className="text-serria-500">Qu&apos;est-ce </strong>
              &nbsp;que c&apos;est ?
            </h2>

            <div className="flex h-[85%] flex-col items-start justify-center px-2">
              <p className="mb-8 overflow-y-auto p-2 text-justify text-sm sm:text-base md:p-4 lg:text-xl">
                {material.description}
              </p>
            </div>
          </div>

          {/*third card*/}
          <div className="flex h-[250px] flex-col items-center rounded-xl bg-serria-300 bg-opacity-10 px-2 md:h-[450px] lg:h-[500px] xl:h-[700px]">
            <h2 className="mb-6 mt-8 flex text-xl font-bold sm:text-3xl">
              Comment l&apos;
              <strong className="text-serria-500">utiliser</strong>&nbsp;?
            </h2>

            <div className="flex h-[85%] flex-col items-start justify-center px-2">
              <p className="mb-8 overflow-y-auto p-2 text-justify text-sm sm:text-base md:p-4 lg:text-xl">
                {material.use}
              </p>
            </div>
          </div>

          {/*fourth card*/}
          <div
            className="h-[250px] rounded-xl bg-cover bg-center shadow-xl shadow-black md:h-[450px] lg:h-[500px] xl:h-[700px]"
            style={{ backgroundImage: `url(/${material.url_image_2})` }}
          ></div>

          {/*fifth card*/}
          <div
            className="h-[250px] rounded-xl bg-cover bg-center shadow-xl shadow-black md:h-[450px] lg:h-[500px] xl:h-[700px]"
            style={{ backgroundImage: `url(/${material.url_image_3})` }}
          ></div>

          {/*sixth card*/}
          <div className="flex h-[250px] flex-col items-center rounded-xl bg-serria-300 bg-opacity-10 px-2 md:h-[450px] lg:h-[500px] xl:h-[700px]">
            <h2 className="mb-6 mt-8 flex text-xl font-bold sm:text-3xl">
              Et si j&apos;
              <strong className="text-serria-500">en ai pas</strong>&nbsp;?
            </h2>

            <div className="flex h-[85%] flex-col items-start justify-center px-2">
              <p className="mb-8 overflow-y-auto p-2 text-justify text-sm sm:text-base md:p-4 lg:text-xl">
                {material.alternative}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleIdPage;
