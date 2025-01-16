"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchModal = ({
  isOpen,
  onClose,
  searchResults,
  clearSearch,
  query,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
        clearSearch(); // Efface la barre de recherche
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, clearSearch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 text-gray-950">
      <div
        ref={modalRef}
        className="relative max-h-[80vh] w-full max-w-3xl overflow-auto rounded-lg bg-white"
      >
        <button
          onClick={() => {
            onClose();
            clearSearch(); // Efface la barre de recherche
          }}
          className="absolute right-2 top-0 p-1 text-4xl text-orange-500"
        >
          ×
        </button>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-bold">
            Résultats de recherche pour :{" "}
            <span className="text-orange-500">{query}</span>
          </h2>
          {searchResults && searchResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {searchResults.map((cocktail) => (
                <Link
                  href={`/recipes/${cocktail.id}`}
                  key={cocktail.id}
                  onClick={() => {
                    onClose();
                    clearSearch(); // Efface la barre de recherche
                  }}
                  className="flex flex-col items-center justify-between rounded-xl bg-orange-500 bg-opacity-10 p-4"
                >
                  <Image
                    src={`/${cocktail.url_image}`}
                    alt={cocktail.name}
                    priority
                    width={250}
                    height={200}
                    className="mb-4 h-40 w-auto rounded-xl shadow-xl"
                  />
                  <h3 className="text-lg font-bold text-orange-500">
                    {cocktail.name}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-4 text-center text-xl">
              Aucun résultat trouvé.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
