import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-8 flex items-center justify-center p-4 text-center text-xs text-white sm:text-base">
      
        {" "}
        <Link
          target="_blank"
          className="py-8 transition-all hover:text-serria-500 active:text-serria-700"
          href="https://kevinstandaert.github.io/"
        >
          © 2024 Kévin Standaert - Tous droits réservés
        </Link>{" "}
        
        <Link
          target="_blank"
          className="ml-16 py-8 transition-all hover:text-serria-500 active:text-serria-700"
          href="/legal"
        >
          Mentions légales
        </Link>{" "}
      
    </footer>
  );
};

export default Footer;
