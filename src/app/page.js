import Carousel from "../components/Carousel";
import Link from "next/link";

export default function Home() {
  const dataUrl = "/recipes/cards/random";
  
  return (
    <div className="flex min-h-screen flex-col items-center p-12 md:p-36">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-sm md:text-lg">
          Découvrez l&apos;Art du Cocktail avec
        </h2>
        <h1 className="text-2xl font-bold md:text-6xl">
          COC<strong className="text-serria-500">K</strong>TAIL
          <strong className="text-serria-500">S</strong> FACTORY
        </h1>
        <h2 className="ms:mt-8 mt-6 text-xs md:px-24 md:text-lg">
          Bienvenue sur Cocktails Factory, votre destination ultime pour
          explorer et apprécier l&apos;art exquis des cocktails. Que vous soyez
          un amateur passionné ou un curieux désireux d&apos;explorer de
          nouvelles saveurs, notre site vous invite à plonger dans un univers de
          créativité et de raffinement.
        </h2>
      </div>
      <h3 className="-mb-20 mt-20 sm:mt-36 sm:text-3xl">
        <strong className="font-bold text-serria-500">Inspirations</strong> du
        moments
      </h3>
      <Carousel dataUrl={dataUrl}/>

      <div className="mb-20 flex max-w-[1920px] flex-col rounded-xl bg-serria-300 bg-opacity-10 px-8 py-10 text-xs sm:py-20 md:text-lg">
        <h3 className="mb-8 self-start text-base sm:text-3xl">
          Ce que nous vous
          <strong className="font-bold text-serria-500"> offrons</strong>
        </h3>
        <ul className="flex flex-col gap-6">
          <li>
            <Link
              className="py-6 font-bold text-serria-500 transition-all hover:text-serria-400 active:text-serria-800"
              href="/recipes"
            >
              Recettes Authentiques et Innovantes
            </Link>
            : Parcourez notre collection de recettes de cocktails classiques et
            contemporains, toutes conçues pour éveiller vos papilles et éblouir
            vos invités.
          </li>
          <li>
            <Link
              className="py-6 font-bold text-serria-500 transition-all hover:text-serria-400 active:text-serria-800"
              href="/articles"
            >
              Guides et Astuces
            </Link>
            : Apprenez les techniques de préparation des cocktails comme un
            professionnel grâce à nos guides détaillés et nos conseils
            pratiques.
          </li>
          <li>
            <Link
              className="py-6 font-bold text-serria-500 transition-all hover:text-serria-400 active:text-serria-800"
              href="/"
            >
              Exploration des Ingrédients
            </Link>
            : Découvrez les ingrédients clés qui transforment chaque cocktail en
            une expérience sensorielle unique.
          </li>
        </ul>
      </div>
      <div className="mb-20 flex max-w-[1920px] flex-col rounded-xl bg-serria-300 bg-opacity-10 px-8 py-10 text-xs sm:py-20 md:text-lg">
        <h3 className="mb-8 self-start text-base sm:text-3xl">
          <strong className="font-bold text-serria-500">Pourquoi </strong> nous
          choisir ?
        </h3>
        <ul className="flex flex-col gap-6">
          <li>
            Chez Coc<span className="font-bold text-serria-500">k</span>tail
            <span className="font-bold text-serria-500">s </span> Factory, nous
            célébrons l&apos;art du cocktail avec passion et dévotion. Notre
            mission est de vous inspirer à créer des moments mémorables autour
            de boissons savoureuses et élégantes. Rejoignez notre communauté et
            laissez-vous séduire par l&apos;art de l&apos;assemblage des saveurs
            et des arômes.
          </li>
          <li>
            Explorez, apprenez, créez et partagez votre amour pour les cocktails
            avec Coc<span className="font-bold text-serria-500">k</span>
            tail<span className="font-bold text-serria-500">s </span> Factory.
          </li>
        </ul>
      </div>
      <div className="mb-20 flex max-w-[1920px] flex-col rounded-xl bg-serria-300 bg-opacity-10 px-8 py-10 text-xs sm:py-20 md:text-lg">
        <h3 className="mb-8 self-start text-base sm:text-3xl">
          Notre
          <strong className="font-bold text-serria-500"> Engagement </strong>
          envers la Qualité
        </h3>
        <ul className="flex flex-col gap-6">
          <li>
            La<strong className="font-bold text-serria-500"> qualité </strong>
            est au coeur de tout ce que nous faisons. Nous nous engageons à vous
            offrir des recettes de cocktails de la plus haute qualité, élaborées
            avec des ingrédients soigneusement sélectionnés et testées par nos
            <strong className="font-bold text-serria-500">
              {" "}
              experts en mixologie
            </strong>
            . Chaque cocktail est conçu pour offrir une expérience gustative
            exceptionnelle, garantissant que chaque gorgée est un véritable
            plaisir.
          </li>
          <li>
            Rejoignez-nous dans cette quête de l&apos;excellence et découvrez la
            différence qu&apos;une approche axée sur la qualité peut faire dans
            <strong className="font-bold text-serria-500">
              {" "}
              l&apos;art de la mixologie
            </strong>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}
