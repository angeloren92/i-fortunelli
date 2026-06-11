/**
 * InlineNotFound Component
 * 404 error page styled according to AR-IT.dev visual identity.
 */
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function InlineNotFound({
  title = "Contenuto non trovato",
  message = "La risorsa richiesta non è disponibile,\nè stata spostata o non esiste più."
}) {

  /**
   * Handle smooth scroll if clicking logo while already on homepage.
   */
  const handleLogoClick = () => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-[85dvh] flex flex-col items-center justify-center py-16 px-6 text-center">

      {/* Logo container with premium styling */}
      <div className="mb-10 hover:scale-105 transition-transform duration-300">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="inline-block p-4 border border-neutral-200 shadow-xl"
        >
          <Image
            src="/logo_white.avif"
            alt="Logo"
            width={150}
            height={150}
            className="w-[150px] h-auto aspect-square object-contain mx-auto"
            loading="eager"
          />
        </Link>
      </div>

      {/* Main heading with clean typography */}
      <h3 className="text-lg font-bold mb-4">
        404 | <span className="">{title}</span>
      </h3>

      {/* Informational error message */}
      <p className="mb-10 text-center max-w-md leading-relaxed whitespace-pre-line">
        {message}
      </p>

      {/* Unified Call-to-Action button */}
      <Link
        href="/"
        className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700  transition-colors duration-300"
      >
        Torna alla homepage
      </Link>

    </div>
  );
}