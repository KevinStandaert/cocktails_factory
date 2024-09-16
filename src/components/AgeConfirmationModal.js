"use client";
import { useState, useEffect } from "react";

const AgeConfirmationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const isConfirmed = localStorage.getItem("ageConfirmed");
    if (!isConfirmed) {
      setIsModalOpen(true);
    } else if (isConfirmed === "false") {
      localStorage.removeItem("ageConfirmed");
      setIsModalOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setIsModalOpen(false);
  };

  const handleDeny = () => {
    localStorage.setItem("ageConfirmed", "false");
    window.location.reload(); // Recharge la page pour empêcher l'accès au contenu
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-90 text-center">
      <div className="rounded-lg bg-serria-400 p-6 text-white shadow-xl shadow-black">
        <h2 className="mb-10 text-3xl">Cocktails Factory</h2>
        <p className="mb-4 text-2xl">Je suis majeur</p>

        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={handleConfirm}
            className="rounded-lg bg-metal-400 px-4 py-2 font-bold text-white shadow-md shadow-black hover:bg-metal-800 active:bg-metal-400"
          >
            Oui
          </button>
          <button
            onClick={handleDeny}
            className="rounded-lg bg-red-400 px-4 py-2 font-bold text-white shadow-md shadow-black hover:bg-red-800 active:bg-red-400"
          >
            Non
          </button>
        </div>
        <p className="mb-2">
        Site internet réservé aux personnes majeures
        </p>
        
      </div>
    </div>
  );
};

export default AgeConfirmationModal;
