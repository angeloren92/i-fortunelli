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
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-white dark:bg-neutral-950 transition-colors duration-300 text-center">

      {/* Logo container with premium styling */}
      <div className="mb-10">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="inline-block p-4 border border-neutral-200 dark:border-neutral-800 shadow-xl bg-white dark:bg-neutral-900 transition-all duration-300 hover:border-[#C5A059]/50 hover:shadow-2xl hover:scale-105 active:scale-95"
        >
          <Image
            src="/logo.avif"
            alt="Logo"
            width={150}
            height={150}
            className="w-[150px] h-auto aspect-square object-contain opacity-90 hover:opacity-100 transition-opacity hover:scale-105 active:scale-95 mx-auto"
          />
        </Link>
      </div>

      {/* Main heading with clean typography */}
      <h3 className="text-lg md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
        404 | <span className="">{title}</span>
      </h3>

      {/* Informational error message */}
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-center max-w-md leading-relaxed whitespace-pre-line">
        {message}
      </p>

      {/* Unified Call-to-Action button */}

    </div>
  );
}