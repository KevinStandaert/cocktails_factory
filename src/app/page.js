import Image from "next/image";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-36">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-sm md:text-lg">
          Découvrez l&apos;Art du Cocktail avec
        </h2>
        <h1 className="text-2xl font-bold md:text-6xl">
          COC<span className="text-serria-500">K</span>TAIL
          <span className="text-serria-500">S</span> FACTORY
        </h1>
        <h2 className="ms:mt-8 mt-6 text-xs md:px-24 md:text-lg">
          Bienvenue sur Cocktails Factory, votre destination ultime pour
          explorer et apprécier l&apos;art exquis des cocktails. Que vous soyez
          un amateur passionné ou un curieux désireux d&apos;explorer de
          nouvelles saveurs, notre site vous invite à plonger dans un univers de
          créativité et de raffinement.
        </h2>
      </div>
      <h3 className="text-md -mb-20 mt-20 sm:mt-36 sm:text-3xl">
        <span className="font-bold text-serria-500">Inspirations</span> du
        moments
      </h3>
      <Carousel />
      <h3 className="text-md mb-8 mt-20 self-start px-4 sm:mt-36 sm:text-3xl">
        Ce que nous vous
        <span className="font-bold text-serria-500"> offrons</span>
      </h3>
      <div className="flex flex-col px-4 text-xs md:text-lg">
        <ul className="flex flex-col gap-8">
          <li>
            <span className="font-bold text-serria-500">
              Recettes Authentiques et Innovantes
            </span>
            : Parcourez notre collection de recettes de cocktails classiques et
            contemporains, toutes conçues pour éveiller vos papilles et éblouir
            vos invités.
          </li>
          <li>
            <span className="font-bold text-serria-500">Guides et Astuces</span>
            : Apprenez les techniques de préparation des cocktails comme un
            professionnel grâce à nos guides détaillés et nos conseils
            pratiques.
          </li>
          <li>
            <span className="font-bold text-serria-500">
              Exploration des Ingrédients
            </span>
            : Découvrez les ingrédients clés qui transforment chaque cocktail en
            une expérience sensorielle unique.
          </li>
        </ul>
      </div>
      <h3 className="text-md mb-8 mt-20 self-start px-4 sm:mt-36 sm:text-3xl">
        <span className="font-bold text-serria-500">Pourquoi </span>nous choisir
        ?
      </h3>
      <p className="px-4 text-xs md:text-lg">
        Chez Coc<span className="font-bold text-serria-500">k</span>tail
        <span className="font-bold text-serria-500">s </span> Factory, nous
        célébrons l&apos;art du cocktail avec passion et dévotion. Notre mission
        est de vous inspirer à créer des moments mémorables autour de boissons
        savoureuses et élégantes. Rejoignez notre communauté et laissez-vous
        séduire par l&apos;art de l&apos;assemblage des saveurs et des arômes.{" "}
        <br />
        <br /> Explorez, apprenez, créez et partagez votre amour pour les
        cocktails avec Coc<span className="font-bold text-serria-500">k</span>
        tail<span className="font-bold text-serria-500">s </span> Factory.
      </p>
      <footer></footer>
    </main>
  );
}
