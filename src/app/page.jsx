// src/app/page.jsx
import AppHomePageContent from '@/homepage/AppHomePageContent';

// Metadati SEO specifici per la Home Page
export const metadata = {
  title: 'Bar Trattoria I Fortunelli | Cucina Tipica a Collegiove', 
  description: 'Benvenuti al Bar Trattoria I Fortunelli a Collegiove (RI). Cucina tipica locale, pasta fatta in casa e un’accoglienza familiare all’ingresso del borgo.',
  alternates: {
    canonical: 'https://www.tuodominio.it',
  },
  openGraph: {
    title: 'Bar Trattoria I Fortunelli | Cucina Tipica a Collegiove',
    description: 'Sapori autentici, pasta fatta in casa e accoglienza familiare a Collegiove (RI).',
    url: 'https://www.tuodominio.it',
  }
};

export default function HomePage() {
  // Il motore dei Sitelinks e della struttura aziendale vive solo sulla Home
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://www.tuodominio.it/#restaurant",
        "name": "Bar Trattoria I Fortunelli",
        "url": "https://www.tuodominio.it",
        "telephone": "+393491061911",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Roma 112",
          "addressLocality": "Collegiove",
          "addressRegion": "RI",
          "postalCode": "02020",
          "addressCountry": "IT"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tuodominio.it/#website",
        "url": "https://www.tuodominio.it",
        "name": "Bar Trattoria I Fortunelli",
        "publisher": {
          "@id": "https://www.tuodominio.it/#restaurant"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.tuodominio.it/#mainnavigation",
        "name": "Menu di Navigazione Principale",
        "description": "Struttura delle sezioni del sito Bar Trattoria I Fortunelli",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "La Nostra Storia",
            "url": "https://www.tuodominio.it/la-nostra-storia"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Il Territorio",
            "url": "https://www.tuodominio.it/il-territorio" 
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Dove Siamo e Orari",
            "url": "https://www.tuodominio.it/dove-siamo"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppHomePageContent />
    </>
  );
}