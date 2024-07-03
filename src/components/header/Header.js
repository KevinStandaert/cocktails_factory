"use client";

import { React, useState } from "react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  return (
    <header className="from-metal-300 sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r to-black px-4 text-sm font-bold">
      <Link className="transition-all hover:scale-105 active:blur-sm" href="/">
        <Image
          className="-mb-3 -mt-3"
          src="/logo-rbg.webp"
          width={180}
          height={100}
          alt="Cocktails Factory logo"
        />{" "}
      </Link>

      {/* menu mobile screen */}
      <div className="relative md:hidden">
        <button
          aria-label="Ouvrir le menu"
          className={`${isMenuOpen ? "hidden" : "block"} p-2`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className="mr-2 h-8 w-8 text-serria-500"
            icon={faBars}
          />
        </button>
      </div>

      <div
        className={`${isMenuOpen ? "flex" : "hidden"} text-metal-950 fixed inset-0 z-10 mx-8 mt-[25%] h-[50%] items-center justify-center rounded-lg bg-serria-200 bg-opacity-90 p-4`}
      >
        <button
          aria-label="Fermer le menu"
          className={`${isMenuOpen ? "block" : "hidden"} absolute right-2 top-4 p-2`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className="mr-2 h-8 w-8 text-serria-500"
            icon={faXmark}
          />
        </button>
        <nav>
          <ul className="flex flex-col gap-8 text-lg">
            <li onClick={handleLinkClick}>
              <Link className="flex items-center" href="/">
                <FontAwesomeIcon
                  className="mr-2 w-8 text-serria-500"
                  icon={faMartiniGlass}
                />
                <span className="transition-all hover:scale-105 hover:text-serria-500 active:text-serria-700">
                  Recettes de cocktails
                </span>
              </Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link className="flex items-center" href="/">
                <FontAwesomeIcon
                  className="mr-2 w-8 text-serria-500"
                  icon={faWandMagicSparkles}
                />
                <span className="transition-all hover:scale-105 hover:text-serria-500 active:text-serria-700">
                  L&apos;art du cocktail
                </span>
              </Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link className="flex items-center" href="/">
                <FontAwesomeIcon
                  className="mr-2 w-8 text-serria-500"
                  icon={faShop}
                />
                <span className="transition-all hover:scale-105 hover:text-serria-500 active:text-serria-700">
                  Où acheter ?
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* menu full screen */}
      <nav className="hidden items-center gap-6 md:flex">
        <ul className="mr-2 flex items-center gap-6">
          <li>
            <Link className="flex items-center" href="/">
              <FontAwesomeIcon
                className="mr-2 w-8 text-serria-500"
                icon={faMartiniGlass}
              />
              <span className="transition-all hover:scale-105 hover:text-serria-500 active:text-serria-700">
                Recettes de cocktails
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="/">
              <FontAwesomeIcon
                className="mr-2 w-8 text-serria-500"
                icon={faWandMagicSparkles}
              />
              <span className="transition-all hover:scale-105 hover:text-serria-500 active:text-serria-700">
                L&apos;art du cocktail
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="/">
              <FontAwesomeIcon
                className="mr-2 w-8 text-serria-500"
                icon={faShop}
              />
              <span className="transition-all hover:scale-105 hover:text-serria-500 active:text-serria-700">
                Où acheter ?
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
