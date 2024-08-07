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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-90">
      <div className="rounded-lg bg-serria-400 p-6 text-white shadow-xl shadow-black">
        <h2 className="mb-4 text-2xl">Confirmez votre âge</h2>
        <p className="mb-4">
          You must be at least 18 years old to visit this site...
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleConfirm}
            className="rounded bg-metal-400 px-4 py-2 font-bold text-white hover:bg-metal-800 active:bg-metal-400"
          >
            I am 18 or older
          </button>
          <button
            onClick={handleDeny}
            className="rounded bg-red-400 px-4 py-2 font-bold text-white hover:bg-red-800 active:bg-red-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeConfirmationModal;
