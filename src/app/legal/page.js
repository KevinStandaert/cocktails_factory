export const metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Cocktails Factory - Fabrique à Cocktails",
  openGraph: {
    type: "website",
    url: "https://cocktails-factory.vercel.app/legal",
    title: "Mentions légales | Cocktails Factory - Fabrique à Cocktails",
    description:
      "Mentions légales du site Cocktails Factory - Fabrique à Cocktails",
    images: [
      {
        url: "https://cocktails-factory.vercel.app/logo_cocktails_factory.webp",
        width: 1024,
        height: 1024,
        alt: "Image représentant le matériels pour faire des cocktails",
      },
    ],
  },
};

const Legal = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-center text-3xl font-bold">Mentions légales</h1>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Éditeur du site</h2>
        <p>Nom : Kévin Standaert</p>
        <p>Téléphone : 06.30.76.89.24</p>
        <p>E-mail : ks.standaert@gmail.com</p>
        <p>Adresse : Lille</p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Directeur de la publication
        </h2>
        <p>Nom : Kévin Standaert</p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Hébergeur du site</h2>
        <p>Nom : [Nom de l&apos;hébergeur]</p>
        <p>Adresse : [Adresse de l&apos;hébergeur]</p>
        <p>Téléphone : [Numéro de téléphone]</p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Propriété intellectuelle
        </h2>
        <p>
          Le contenu de ce site est protégé par le droit d&apos;auteur. Toute
          reproduction, même partielle, est interdite sans l&apos;accord
          préalable de l&apos;éditeur.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Cookies</h2>
        <p>
          Le site utilise des cookies pour améliorer l’expérience utilisateur et
          réaliser des statistiques de visites. En poursuivant votre navigation
          sur ce site, vous acceptez l’utilisation des cookies.
        </p>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience et
          réaliser des statistiques de visites.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">
          Qu&apos;est-ce qu&apos;un cookie ?
        </h2>
        <p>
          Un cookie est un petit fichier texte stocké sur votre appareil lorsque
          vous visitez un site web.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">
          Comment utilisons-nous les cookies ?
        </h2>
        <p>Nous utilisons les cookies pour :</p>
        <ul className="list-inside list-disc">
          <li>Analyser le trafic du site et améliorer ses performances</li>
          <li>Personnaliser le contenu affiché</li>
          <li>Se souvenir de vos préférences et de vos paramètres</li>
        </ul>
        <h2 className="mt-4 text-2xl font-semibold">
          Comment gérer les cookies ?
        </h2>
        <p>
          Vous pouvez gérer les cookies via les paramètres de votre navigateur.
          Vous pouvez choisir de désactiver les cookies, mais cela peut affecter
          le fonctionnement de certaines parties du site.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Données personnelles</h2>
        <p>
          Les informations recueillies sur ce site sont enregistrées dans un
          fichier informatisé par Kévin Standaert pour l&apos;amélioration du
          site. Elles sont conservées pendant 6 mois et sont destinées à
          Cocktails Factory. Conformément à la loi « informatique et libertés »,
          vous pouvez exercer votre droit d&apos;accès aux données vous
          concernant et les faire rectifier en contactant :
          ks.standaert@gmail.com.
        </p>
      </section>
    </div>
  );
};

export default Legal;
