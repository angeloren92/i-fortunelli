'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * DATI COSTANTI / SCHEMA CONFIGURATION
 * Moved outside the component scope to maximize performance by preventing 
 * redundant allocation cycles on every re-render operation.
 */

// UI Strings central dictionary source
const UI_STRINGS = {
    brand: {
        name: "I Fortunelli",
        descriptor: "Bar & Trattoria"
    },
    a11y: {
        openMenu: "Apri menu principale",
        logoAlt: "Trattoria Bar I Fortunelli Logo",
        mobileMenuId: "mobile-menu"
    }
};

// Site Navigation data structure configuration source
const menuLinks = [
    { href: "/la-nostra-storia", label: "La Nostra Storia" },
    { href: "/il-territorio", label: "Il Territorio" },
    { href: "/dove-siamo", label: "Dove Siamo" },
];

/**
 * HEADER COMPONENT
 * Renders the main navigation bar for "I Fortunelli" Bar & Trattoria.
 * Implements a full responsive orchestration: static light theme with blur backdrop effects,
 * LCP optimized dynamic logo asset, and a state-driven mobile drawer menu.
 */
export default function Header() {
    // State hook logic to orchestrate the visibility of the mobile navigation dropdown drawer
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Sticky structural container with z-layer stacking (z-50) and blur backdrop styling
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-stone-100/90 backdrop-blur-md min-h-[15dvh]">
            <div className="mx-auto flex min-h-[15dvh] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* BRAND IDENTITY BLOCK: Render optimized round logo asset and responsive restaurant typography */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.png"
                        alt={UI_STRINGS.a11y.logoAlt}
                        width={100}
                        height={100}
                        className="max-h-30 max-w-30 object-cover transition-transform duration-300 group-hover:scale-110"
                        priority // LCP Optimization: Directs browser to prioritize fetch for above-the-fold critical asset
                    />
                    <div className="flex flex-col relative loam-relaxed">
                        <span className="font-bold text-2xl leading-tight tracking-tight text-amber-900 font-serif">
                            {UI_STRINGS.brand.name}
                        </span>
                        <span className="text-sm text-gray-500 tracking-widest uppercase">
                            {UI_STRINGS.brand.descriptor}
                        </span>
                    </div>
                </Link>

                {/* 2. DESKTOP NAVIGATION: Dynamic iteration based on the central links array source */}
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

                {/* MOBILE NAVIGATION TRIGGER: Interactive hamburger logic toggle control input button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                        aria-controls={UI_STRINGS.a11y.mobileMenuId}
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">{UI_STRINGS.a11y.openMenu}</span>
                        {isOpen ? (
                            // Close "X" icon visual pattern rendered smoothly when the mobile view state is ACTIVE
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger lines icon visual pattern rendered smoothly when the mobile view state is INACTIVE
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                        }
                    </button>
                </div>
            </div>

            {/* 3. MOBILE DROPDOWN MENU PANEL: Conditional rendering logic based on local state */}
            {isOpen && (
                <div id={UI_STRINGS.a11y.mobileMenuId} className="md:hidden border-t border-gray-100 bg-stone-100/90 px-4 py-4 animate-fade-in">
                    <div className="flex flex-col gap-4 text-base font-medium text-gray-700 loam-relaxed">
                        {menuLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                // UX Improvement logic: Seamlessly close the navigation drawer automatically upon link click
                                onClick={() => setIsOpen(false)} 
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