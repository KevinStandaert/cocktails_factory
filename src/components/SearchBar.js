import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000); // Délai de 1000 ms pour le debouncing

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.length >= 3) { // Lance la recherche si la requête a au moins 3 caractères
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
  };

  return (
    <form className="flex items-center gap-1 ml-2 text-gray-950" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Rechercher..."
        className="w-full rounded-xl border py-2 md:px-6 px-1"
      />
    </form>
  );
};

export default SearchBar;