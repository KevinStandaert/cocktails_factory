import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-4 p-4 text-center text-xs text-white sm:text-base">
        {" "}
        <div className="mb-8 text-base sm:mb-24 sm:text-lg">
          <p>
            L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer
            avec modération.
          </p>
        </div>
        <Link
          target="_blank"
          className="transition-all hover:text-serria-500 active:text-serria-700"
          href="/legal"
        >
          Mentions légales
        </Link>{" "}
        <Link
          target="_blank"
          className="transition-all hover:text-serria-500 active:text-serria-700"
          href="https://kevinstandaert.github.io/"
        >
          © {currentYear} Kévin Standaert - Tous droits réservés
        </Link>{" "}
      </div>
    </footer>
  );
};

export default Footer;
