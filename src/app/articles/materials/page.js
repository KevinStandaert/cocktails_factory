import React from "react";
import MaterialCard from "../../../components/materialCard";

export const metadata = {
  title: "Liste du matériels",
  description:
    "Découvrez tout le matériel indispensable pour devenir un véritable barman.",
  alternates: {
    canonical: "https://cocktails-factory.vercel.app/materials",
  },
  openGraph: {
    type: "website",
    url: "https://cocktails-factory.vercel.app/articles/materials",
    title: "Liste du matériels | Cocktails Factory - Fabrique à Cocktails",
    description:
      "Découvrez tout le matériel indispensable pour devenir un véritable barman.",
    images: [
      {
        url: "https://cocktails-factory.vercel.app/materiels.webp",
        width: 1024,
        height: 1024,
        alt: "Image représentant le matériels pour faire des cocktails",
      },
    ],
  },
};

const MaterialsList = () => {
  const dataUrl = "/materials";

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col gap-2 text-center">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          <MaterialCard dataUrl={dataUrl} />
        </div>
      </div>
    </div>
  );
};

export default MaterialsList;
