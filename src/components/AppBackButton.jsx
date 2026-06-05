/**
 * BackButton Component
 * Navigation utility for returning to the previous page.
 */
'use client';

import { useRouter } from 'next/navigation';
import { RiArrowLeftLine } from "react-icons/ri";

export default function BackButton() {
  const router = useRouter();

  /**
   * Triggers browser navigation to the previous history entry.
   */
  const handleBack = () => {
    router.back(); 
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="group flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 backdrop-blur"
      aria-label="Torna indietro"
    >
      {/* Icon container with brand color and hover effects */}
      <div className="w-8 h-8 border-[#C5A059] flex items-center justify-center text-[#C5A059] transition-all duration-300 ease-in-out hover:scale-110 active:scale-95">
        <RiArrowLeftLine size={16} />
      </div>
      
      {/* Typographic label with signature AR-IT.dev styling */}
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] hidden md:block">
        Indietro
      </span>
    </button>
  );
}