import React from "react";

// La fonction pour récupérer les données côté serveur
async function fetchMaterial(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/materials/${id}`);
  if (!res.ok) {
    throw new Error("Erreur de chargement des données");
  }
  return res.json();
}

// La fonction pour générer des métadonnées
export async function generateMetadata({ params }) {
  const material = await fetchMaterial(params.id);
  return {
    title: `${material.name}`,
    description: `Découvrez l'utilisation de ${material.name} grâce à cocktails factory !`,
    alternates: {
      canonical: `https://cocktails-factory.vercel.app/materials/${params.id}`,
    },
    openGraph: {
      type: "website",
      url: `https://cocktails-factory.vercel.app/materials/${params.id}`,
      title: `${material.name} | Cocktails Factory - Fabrique à Cocktails`,
      description: `Découvrez l'utilisation de ${material.name} grâce à cocktails factory !`,
      images: [
        {
          url: `https://cocktails-factory.vercel.app/${material.url_image}`,
          width: 1024,
          height: 1024,
          alt: `Image représentant ${material.name}`,
        },
      ],
    },
  };
}

const MaterialsIdPage = async ({ params }) => {
  const { id } = params;
  const material = await fetchMaterial(id);

  return (
    <div className="container mx-auto mt-8 rounded-xl bg-black bg-opacity-10 p-6">
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
          <div className="flex h-[250px] flex-col items-center overflow-hidden rounded-xl bg-black bg-opacity-10 px-2 md:h-[450px] lg:h-[500px] xl:h-[700px]">
            <div className="mb-4 mt-6 flex font-bold sm:mb-6 sm:mt-8 sm:text-3xl">
              <h2>
                <strong className="text-orange-500">Qu&apos;est-ce</strong>
                &nbsp;que c&apos;est ?
              </h2>
            </div>

            <div className="flex h-[85%] flex-col items-start justify-center px-2">
              <p className="mb-8 overflow-y-auto p-2 text-justify text-sm sm:text-base md:p-4 lg:text-xl">
                {material.description}
              </p>
            </div>
          </div>

          {/*third card*/}
          <div className="flex h-[250px] flex-col items-center overflow-hidden rounded-xl bg-black bg-opacity-10 px-2 md:h-[450px] lg:h-[500px] xl:h-[700px]">
            <div className="mb-4 mt-6 flex font-bold sm:mb-6 sm:mt-8 sm:text-3xl">
              <h2>
                Comment l&apos;
                <strong className="text-orange-500">utiliser</strong>&nbsp;?
              </h2>
            </div>

            <div className="flex h-[85%] flex-col items-start justify-center px-2">
              <p className="mb-8 overflow-y-auto p-2 text-justify text-sm sm:text-base md:p-4 lg:text-xl">
                {material.use}
              </p>
            </div>
          </div>

          {/*fourth card*/}
          <div
            className="row-start-3 h-[250px] rounded-xl bg-cover bg-center shadow-xl shadow-black md:h-[450px] lg:h-[500px] xl:h-[700px]"
            style={{ backgroundImage: `url(/${material.url_image_2})` }}
          ></div>

          {/*fifth card*/}
          <div
            className="h-[250px] rounded-xl bg-cover bg-center shadow-xl shadow-black md:h-[450px] lg:h-[500px] xl:h-[700px]"
            style={{ backgroundImage: `url(/${material.url_image_3})` }}
          ></div>

          {/*sixth card*/}
          <div className="flex h-[250px] flex-col items-center overflow-hidden rounded-xl bg-black bg-opacity-10 px-2 md:h-[450px] lg:h-[500px] xl:h-[700px]">
            <div className="mb-4 mt-6 flex font-bold sm:mb-6 sm:mt-8 sm:text-3xl">
              <h2>
                Et si j&apos;
                <strong className="text-orange-500">en ai pas</strong>&nbsp;?
              </h2>
            </div>

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

export default MaterialsIdPage;
