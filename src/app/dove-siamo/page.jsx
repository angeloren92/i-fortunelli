// src/app/dove-siamo/page.jsx
import DoveSiamo from './DoveSiamo';

export const metadata = {
  title: 'Dove Siamo e Orari | Bar Trattoria I Fortunelli Collegiove',
  description: 'Vieni a trovarci a Collegiove (RI) in Via Roma 112. Scopri gli orari di apertura, le indicazioni stradali da Roma o Rieti e le info sul parcheggio.',
  alternates: {
    canonical: 'https://www.tuodominio.it/dove-siamo', 
  },
  openGraph: {
    title: 'Dove Siamo e Orari | Bar Trattoria I Fortunelli',
    description: 'Pianifica la tua visita al Bar Trattoria I Fortunelli a Collegiove. Aperto tutti i giorni tranne il martedì.',
    type: 'website',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Bar Trattoria I Fortunelli",
    "image": "https://www.tuodominio.it/images/hero-trattoria.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Roma 112",
      "addressLocality": "Collegiove",
      "addressRegion": "RI",
      "postalCode": "02020",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.1742", 
      "longitude": "13.0377"
    },
    "url": "https://www.tuodominio.it/dove-siamo",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "servesCuisine": "Italiana, Locale"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} // Parentesi corretta qui
      />
      <DoveSiamo />
    </>
  );
}