"use client";

import { React, useState, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlass,
  faWandMagicSparkles,
  faShop,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État du menu mobile
  const [isModalOpen, setIsModalOpen] = useState(false); // État de la modal de recherche
  const [searchResults, setSearchResults] = useState([]); // Résultats de recherche
  const [clearQuery, setClearQuery] = useState(false); // Réinitialisation de la barre de recherche

  // Gestion de l'ouverture et fermeture du menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fonction appelée lors du clic sur un lien dans le menu pour fermer le menu
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Fermeture du menu
  };

  // Fonction pour récupérer les résultats de recherche
  const fetchResults = useCallback(async (query) => {
    if (query.length === 0) {
      setSearchResults([]);
      return;
    }
    try {
      // Normaliser la requête de recherche pour retirer les accents
      const normalizedQuery = query
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recipes/cards?search=${query}`,
      );
      if (!res.ok)
        throw new Error("Erreur lors de la récupération des données.");
      const data = await res.json();

      // Filtrer les résultats en comparant les versions normalisées (sans accents)
      const filteredResults = data.filter((cocktail) => {
        const normalizedName = cocktail.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        return normalizedName.includes(normalizedQuery);
      });

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
      setSearchResults([]);
    }
  }, []);

  // Fonction appelée pour lancer la recherche
  const handleSearch = useCallback(
    (query) => {
      setIsModalOpen(true); // Ouvre la modal
      fetchResults(query); // Fait la recherche
      setClearQuery(false); // Ne réinitialise pas la recherche immédiatement
    },
    [fetchResults],
  );

  // Fermeture de la modal de recherche et réinitialisation de la barre de recherche
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setClearQuery(true); // Réinitialise le champ de recherche lorsque la modal se ferme
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r from-metal-600 to-black px-4 py-4 text-sm font-bold">
      <Link className="transition-all hover:scale-105 active:blur-sm" href="/">
        <Image
          className="-mb-3 -mt-3 h-auto w-24 lg:w-40"
          src="/logo-rbg.webp"
          priority
          width={180}
          height={100}
          alt="Cocktails Factory logo"
        />
      </Link>

      {/* Menu mobile */}
      <div className="absolute right-16 mr-2 md:hidden">
        <SearchBar onSearch={handleSearch} clearQuery={clearQuery} />{" "}
        {/* Barre de recherche mobile */}
      </div>

      <div className="relative md:hidden">
        <button
          aria-label="Ouvrir le menu"
          className={`${isMenuOpen ? "hidden" : "block"} p-2`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className="mr-2 h-8 w-8 text-serria-600"
            icon={faBars}
          />
        </button>
      </div>

      <div
        className={`${isMenuOpen ? "flex" : "hidden"} fixed inset-0 z-10 mx-8 mt-[25%] h-[50%] items-center justify-center rounded-lg bg-serria-200 bg-opacity-90 p-4 text-metal-950`}
      >
        <button
          aria-label="Fermer le menu"
          className={`${isMenuOpen ? "block" : "hidden"} absolute right-2 top-4 p-2`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className="mr-2 h-8 w-8 text-serria-600"
            icon={faXmark}
          />
        </button>
        <nav>
          <ul className="flex flex-col gap-8 text-lg">
            <li onClick={handleLinkClick}>
              <Link className="flex items-center" href="/recipes">
                <FontAwesomeIcon
                  className="mr-2 w-8 text-serria-600"
                  icon={faMartiniGlass}
                />
                <strong className="transition-all hover:scale-105 hover:text-serria-600 active:text-serria-700">
                  Recettes de cocktails
                </strong>
              </Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link className="flex items-center" href="/articles">
                <FontAwesomeIcon
                  className="mr-2 w-8 text-serria-600"
                  icon={faWandMagicSparkles}
                />
                <strong className="transition-all hover:scale-105 hover:text-serria-600 active:text-serria-700">
                  L&apos;art du cocktail
                </strong>
              </Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link className="flex items-center" href="/">
                <FontAwesomeIcon
                  className="mr-2 w-8 text-serria-600"
                  icon={faShop}
                />
                <strong className="transition-all hover:scale-105 hover:text-serria-600 active:text-serria-700">
                  Où acheter ?
                </strong>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu grand écran */}
      <nav className="hidden items-center gap-6 md:flex">
        <ul className="mr-2 flex items-center gap-6">
          <li>
            <Link className="flex items-center" href="/recipes">
              <FontAwesomeIcon
                className="mr-2 w-8 text-serria-600"
                icon={faMartiniGlass}
              />
              <strong className="py-6 transition-all hover:scale-105 hover:text-serria-600 active:text-serria-700">
                Recettes de cocktails
              </strong>
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="/articles">
              <FontAwesomeIcon
                className="mr-2 w-8 text-serria-600"
                icon={faWandMagicSparkles}
              />
              <strong className="py-6 transition-all hover:scale-105 hover:text-serria-600 active:text-serria-700">
                L&apos;art du cocktail
              </strong>
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="/">
              <FontAwesomeIcon
                className="mr-2 w-8 text-serria-600"
                icon={faShop}
              />
              <strong className="py-6 transition-all hover:scale-105 hover:text-serria-600 active:text-serria-700">
                Où acheter ?
              </strong>
            </Link>
          </li>
        </ul>
        <div className="mr-2">
          <SearchBar onSearch={handleSearch} clearQuery={clearQuery} />{" "}
          {/* Barre de recherche pour grand écran */}
        </div>
      </nav>

      {/* Modal de recherche */}
      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        searchResults={searchResults}
        clearSearch={() => setClearQuery(true)}
      />
    </header>
  );
};

export default Header;
