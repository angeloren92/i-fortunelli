'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// 1. CONFIGURAZIONE DEI LINK DI NAVIGAZIONE (Sorgente unica dei dati)
const menuLinks = [
    { href: "/la-nostra-storia", label: "La Nostra Storia" },
    { href: "/il-territorio", label: "Il Territorio" },
    { href: "/dove-siamo", label: "Dove Siamo" },
];

/**
 * Header Component - Navigation bar for "I Fortunelli" Bar & Trattoria.
 * Implements a fully responsive layout with a static light theme and a dynamic mobile drawer menu.
 */
export default function Header() {
    // State hook to toggle the visibility of the mobile navigation dropdown drawer
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Sticky structural wrapper with layer stacking (z-50) and blur backdrop styling
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-stone-100/90 backdrop-blur-md min-h-[15dvh]">
            <div className="mx-auto flex min-h-[15dvh] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* BRAND IDENTITY: Optimized round logo asset and responsive restaurant typography */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.png"
                        alt="Trattoria Bar I Fortunelli Logo"
                        width={100}
                        height={100}
                        className="max-h-30 max-w-30 object-cover transition-transform duration-300 group-hover:scale-110"
                        priority // LCP Optimization: Prevents layout shifts on above-the-fold critical navigation elements
                    />
                    <div className="flex flex-col relative">
                        <span className="font-bold text-2xl leading-tight tracking-tight text-amber-900 font-serif">
                            I Fortunelli
                        </span>
                        <span className="text-sm text-gray-500 tracking-widest uppercase">
                            Bar & Trattoria
                        </span>
                    </div>
                </Link>

                {/* 2. DESKTOP NAVIGATION: Iterazione dinamica dell'array di link */}
                <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
                    {menuLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="transition-colors hover:text-amber-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* MOBILE NAVIGATION TRIGGER: Interactive hamburger toggle control button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Apri menu principale</span>
                        {isOpen ? (
                            // Close "X" icon rendered when the mobile view state is active
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger lines icon rendered when the mobile view state is inactive
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* 3. MOBILE DROPDOWN MENU: Iterazione dinamica dei medesimi link */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden border-t border-gray-100 bg-white px-4 py-4 animate-fade-in">
                    <div className="flex flex-col gap-4 text-base font-medium text-gray-700">
                        {menuLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} // UX Improvement: Chiude automaticamente il drawer al clic sul link
                                className="transition-colors hover:text-amber-600"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}