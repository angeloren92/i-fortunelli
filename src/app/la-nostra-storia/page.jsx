// src/app/chi-sono/page.jsx
import LaNostraStoria from './LaNostraStoria';

// 1. META TAG SEO (Ottimizzati per il brand e la tradizione locale)
export const metadata = {
  title: 'La Nostra Storia | Bar Trattoria I Fortunelli Collegiove',
  description: 'Scopri la storia del Bar Trattoria I Fortunelli a Collegiove (RI). Una tradizione familiare dedita ai sapori autentici, ingredienti genuini e ricette locali.',
  alternates: {
    canonical: 'https://www.tuodominio.it/la-nostra-storia', // Sostituire con il dominio reale
  },
  openGraph: {
    title: 'La Nostra Storia | Bar Trattoria I Fortunelli',
    description: 'Dal cuore di Collegiove, la storia di una passione di famiglia per la cucina tradizionale e la selezione di ingredienti a chilometro zero.',
    type: 'website',
  },
};

export default function Page() {
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.ifortunelli.com/la-nostra-storia#webpage",
      "url": "https://www.ifortunelli.com/la-nostra-storia",
      "name": "La Nostra Storia - Bar Trattoria I Fortunelli",
      "description": "La storia, le radici familiari e la filosofia culinaria basata su ingredienti genuini della Trattoria I Fortunelli a Collegiove.",
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
            "name": "La Nostra Storia",
            "item": "https://www.ifortunelli.com/la-nostra-storia" 
          }
        ]
      },
      "mainEntity": {
        "@type": "Restaurant",
        "@id": "https://www.ifortunelli.com/#restaurant", 
        "name": "Bar Trattoria I Fortunelli",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Roma 112",
          "addressLocality": "Collegiove",
          "addressRegion": "RI",
          "postalCode": "02020",
          "addressCountry": "IT"
        }
      }
    }
  ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LaNostraStoria />
    </>
  );
}