import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mb-8 p-4 text-center text-xs sm:text-base text-white">
      <p>
        © 2024{" "}
        <Link
          target="_blank"
          className="transition-all hover:text-serria-500 py-8 active:text-serria-700"
          href="https://kevinstandaert.github.io/"
        >
          Kévin Standaert
        </Link>{" "}
        - Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
