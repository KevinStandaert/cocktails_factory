import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlass,
  faWandMagicSparkles,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="from-lily-500 sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r to-black px-4 text-sm font-bold">
      <Link className="transition-all hover:scale-105 active:blur-sm" href="/">
        <Image
          className="-mb-3 -mt-3"
          src="/logo-rbg.webp"
          width={180}
          height={100}
          alt="Cocktails Factory logo"
        />{" "}
      </Link>

      <ul className="mr-2 flex items-center gap-6">
        <li>
          <Link className="flex items-center" href="/">
            <FontAwesomeIcon
              className="text-serria-500 mr-2 w-8"
              icon={faMartiniGlass}
            />
            <span className="hover:text-serria-500 active:text-serria-700 transition-all hover:scale-105">
              Recettes de cocktails
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center" href="/">
            <FontAwesomeIcon
              className="text-serria-500 mr-2 w-8"
              icon={faWandMagicSparkles}
            />
            <span className="hover:text-serria-500 active:text-serria-700 transition-all hover:scale-105">
              L&apos;art du cocktail
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center" href="/">
            <FontAwesomeIcon
              className="text-serria-500 mr-2 w-8"
              icon={faShop}
            />
            <span className="hover:text-serria-500 active:text-serria-700 transition-all hover:scale-105">
              Où acheter ?
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
