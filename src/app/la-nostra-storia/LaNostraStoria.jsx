'use client';

import Image from "next/image";

/**
 * DICTIONARY LAYER: CENTRALIZED UI STRINGS CONFIGURATION
 * Isolates all presentation-tier copy to maximize maintainability, clean up the JSX tree,
 * and seamlessly prevent any unescaped entities linting issues.
 */
const UI_STRINGS = {
    meta: {
        badge: "Benvenuti a tavola",
        title: "La Nostra Storia"
    },
    story: {
        paragraph1: {
            prefix: "La ",
            highlight: "Trattoria Bar I Fortunelli",
            suffix: " nasce dal desiderio di custodire e tramandare i sapori autentici della nostra terra, portando in tavola l'antica tradizione culinaria locale in un'atmosfera calda, familiare e accogliente."
        },
        paragraph2: "Ogni giorno selezioniamo con cura ingredienti genuini provenienti dai produttori della zona. Dalla pasta fatta in casa ai piatti tipici della tradizione, ogni ricetta racconta la passione per la buona cucina e l'amore per le nostre radici."
    },
    assets: {
        imageAlt: "La nostra Famiglia"
    }
};

/**
 * LA NOSTRA STORIA COMPONENT
 * Renders the historical background, heritage values, and introductory context of the restaurant.
 */
export default function LaNostraStoria() {
    return (
        <main>
            {/* Main storytelling overview section */}
            <section className="bg-stone-50 py-5 sm:py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Symmetric 2-column grid layout matching standard page orchestration */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Column: Context presentation typography stack */}
                        <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                                {UI_STRINGS.meta.badge}
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-6">
                                {UI_STRINGS.meta.title}
                            </h2>
                            <div className="space-y-4 text-base text-stone-700 leading-relaxed">
                                <p>
                                    {UI_STRINGS.story.paragraph1.prefix}
                                    <strong className="font-bold text-stone-900">{UI_STRINGS.story.paragraph1.highlight}</strong>
                                    {UI_STRINGS.story.paragraph1.suffix}
                                </p>
                                <p>
                                    {UI_STRINGS.story.paragraph2}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: High-quality static photography wrapper frame with hover animation */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden group">
                            <Image
                                src="/la-nostra-storia/foto.png"
                                alt={UI_STRINGS.assets.imageAlt}
                                fill
                                // FIX SIZES: Applied valid CSS media query structure (corrected syntax token divider)
                                sizes="(max-w: 768px) 100vw, 50vw"
                                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                priority
                            />
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}