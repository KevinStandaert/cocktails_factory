import "./globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import { Nunito } from "next/font/google";
import AgeConfirmationModal from "../components/AgeConfirmationModal";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400","900"],
  style: ["normal"],
  sizing: ["auto"],
});

export const metadata = {
  title: {
    template: "%s | Cocktails Factory - Fabrique à Cocktails",
    default: "Cocktails Factory - Fabrique à Cocktails",
  },
  description:
    "Découvrez notre collection de recettes de cocktails uniques et savoureuses. Que vous soyez un amateur de cocktails classiques ou à la recherche de nouvelles créations, notre site vous offre des idées inspirantes, des conseils de préparation et des informations sur les ingrédients. Rejoignez-nous pour explorer le monde fascinant des cocktails et préparer des boissons délicieuses chez vous.",
  verification: {
    google: "5eyIXp4bdeWId8K0CXzhtRb8ieAoUTajaJNvk9AKJQM",
  },
  openGraph: {
    type: "website",
    url: "https://cocktails-factory.vercel.app",
    title: "Cocktails Factory - Fabrique à Cocktails",
    description:
      "Découvrez notre collection de recettes de cocktails uniques et savoureuses. Que vous soyez un amateur de cocktails classiques ou à la recherche de nouvelles créations.",
    images: [
      {
        url: "https://cocktails-factory.vercel.app/logo_cocktails_factory.webp",
        width: 1024,
        height: 1024,
        alt: "Image représentant Cocktails Factory",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-WJQBZ8B5" />

      <body
        className={`${nunito.className} bg-gradient-to-r from-metal-600 to-metal-900 text-gray-100`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJQBZ8B5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <AgeConfirmationModal />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
