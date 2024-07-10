import { useState, useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Fonction fetchData pour récupérer des données depuis l'API
export const fetchData = async (path) => {
  const response = await fetch(`${apiUrl}${path}`);
  if (!response.ok) {
    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
  }
  return response.json();
};

// Hook personnalisé useFetchData pour encapsuler la logique de récupération des données
const useFetchData = (dataUrl) => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromUrl = async () => {
      try {
        const result = await fetchData(dataUrl);
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDataFromUrl();
  }, [dataUrl]);

  return { data, loading, error };
};

export default useFetchData;
