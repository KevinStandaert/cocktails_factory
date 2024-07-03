import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-36">
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-sm md:text-lg">Découvrez l&apos;Art des Cocktails avec</h2>
        <h1 className="md:text-6xl text-2xl font-bold">COC<span className="text-serria-500">K</span>TAIL<span className="text-serria-500">S</span> FACTORY</h1>
        <p className="md:px-24 mt-6 ms:mt-8 text-xs md:text-lg">
        Bienvenue sur Cocktails Factory, votre destination ultime pour explorer et apprécier l&apos;art exquis des cocktails. Que vous soyez un amateur passionné ou un curieux désireux d&apos;explorer de nouvelles saveurs, notre site vous invite à plonger dans un univers de créativité et de raffinement.
        </p>
      </div>
    </main>
  );
}
