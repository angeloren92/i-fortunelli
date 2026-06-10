// src/app/il-territorio/page.jsx
import IlTerritorio from './IlTerritorio';

export const metadata = {
  title: 'Guida Locale e Territorio | Bar Trattoria I Fortunelli Collegiove',
  description: "Scopri cosa fare a Collegiove (RI): percorsi trekking nella natura, itinerari in moto, punti panoramici e tradizioni storiche come l'Infiorata e il Ferragosto.",
  alternates: {
    canonical: 'https://www.ifortunelli.com/il-territorio', // 🟢 Sistemato con il dominio definitivo
  },
  openGraph: {
    title: 'Vivi e Scopri Collegiove | Guida Locale Trattoria I Fortunelli',
    description: 'Esplora le meraviglie del nostro territorio: sport, natura, eventi e consigli utili per la tua giornata nel borgo di Collegiove.',
    type: 'website',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.ifortunelli.com/il-territorio#webpage",
        "url": "https://www.ifortunelli.com/il-territorio",
        "name": "Guida Locale e Territorio - Bar Trattoria I Fortunelli",
        "description": "Guida turistica e del territorio di Collegiove con attività all'aria aperta, eventi e tradizioni locali.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.ifortunelli.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Chi Sono / Il Territorio",
              "item": "https://www.ifortunelli.com/il-territorio"
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.ifortunelli.com/il-territorio#activities-list",
        "name": "Attività e Tradizioni a Collegiove",
        "description": "Elenco delle principali attrazioni turistiche ed eventi descritti nella nostra guida locale.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trekking & Natura a Collegiove",
            "description": "Rete di sentieri spettacolari per escursionisti e famiglie nei boschi del Lazio."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Itinerari Due Ruote (Moto e Ciclismo)",
            "description": "Strade panoramiche e tornanti amati dai bikers vicino al Lago del Turano."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Festa di Ferragosto e Tradizioni",
            "description": "Feste patronali estive con musica dal vivo, manifestazioni e stand culinari a Collegiove."
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Infiorata del Corpus Domini",
            "description": "Tradizione storica con tappeti artistici realizzati interamente con petali colorati tra i vicoli del centro storico."
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Iniezione sicura del JSON-LD senza errori di parsing di Turbopack */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IlTerritorio />
    </>
  );
}