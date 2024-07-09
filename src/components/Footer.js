import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 p-4 text-center text-xs text-white">
      <p>
        © 2024{" "}
        <Link
          target="_blank"
          className="transition-all hover:scale-105 hover:text-serria-500 active:text-serria-700"
          href="https://kevinstandaert.github.io/"
        >
          Kevin Standaert
        </Link>{" "}
        - Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
