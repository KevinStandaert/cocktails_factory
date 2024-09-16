"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchModal = ({ isOpen, onClose, searchResults, clearSearch }) => {
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
    <div className="fixed inset-0 z-50 bg-black text-gray-950 bg-opacity-70 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg w-full max-w-3xl max-h-[80vh] overflow-auto relative"
      >
        <button
          onClick={() => {
            onClose();
            clearSearch(); // Efface la barre de recherche
          }}
          className="absolute top-0 right-2 p-1 text-4xl text-serria-600"
        >
          ×
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Résultats de recherche</h2>
          {searchResults && searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {searchResults.map((cocktail) => (
                <Link
                  href={`/recipes/${cocktail.id}`}
                  key={cocktail.id}
                  onClick={() => {
                    onClose();
                    clearSearch(); // Efface la barre de recherche
                  }}
                  className="flex flex-col items-center justify-between rounded-xl bg-serria-300 bg-opacity-10 p-4"
                >
                  <Image
                    src={`/${cocktail.url_image}`}
                    alt={cocktail.name}
                    priority
                    width={250}
                    height={200}
                    className="h-40 w-auto rounded-xl mb-4 shadow-xl"
                  />
                  <h3 className="font-bold text-serria-600 text-lg">{cocktail.name}</h3>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-xl text-center mt-4">Aucun résultat trouvé.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;