const apiURl = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (path) => {
  const response = await fetch(`${apiURl}${path}`);
  if (!response.ok) {
    throw new Error(`Erreur HTTP! statut: ${response.status}`);
  }
  return response.json();
};
