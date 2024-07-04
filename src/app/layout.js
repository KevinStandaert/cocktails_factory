import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Cocktails Factory",
  description:
    "Découvrez notre collection de recettes de cocktails uniques et savoureuses. Que vous soyez un amateur de cocktails classiques ou à la recherche de nouvelles créations, notre site vous offre des idées inspirantes, des conseils de préparation et des informations sur les ingrédients. Rejoignez-nous pour explorer le monde fascinant des cocktails et préparer des boissons délicieuses chez vous.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${roboto.className} bg-gradient-to-r from-metal-300 to-black`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
