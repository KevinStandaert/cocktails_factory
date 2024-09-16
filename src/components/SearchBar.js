import { useState, useEffect } from "react";

const SearchBar = ({ onSearch, clearQuery }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.length >= 3) {
        onSearch(query); // Lance la recherche si la requête a au moins 3 caractères
      }
    }, 1000); // Délais pour le debouncing

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  useEffect(() => {
    if (clearQuery) {
      setQuery(""); // Réinitialiser le champ de recherche si clearQuery est appelé
    }
  }, [clearQuery]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center gap-1 ml-2 text-gray-950">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Rechercher..."
        aria-label="Barre de recherche"
        className="w-full rounded-xl border py-2 md:px-6 px-1"
      />
    </div>
  );
};

export default SearchBar;