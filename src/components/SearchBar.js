import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000); // Délais pour le debouncing

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.length >= 3) {
      onSearch(debouncedQuery); // Lance la recherche uniquement si la requête a au moins 3 caractères
    }
  }, [debouncedQuery, onSearch]);

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