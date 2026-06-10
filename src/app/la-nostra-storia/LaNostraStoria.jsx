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
        title: "La Nostra Storia",
        subtitle: "Passione, tradizione e amore per il territorio di Collegiove."
    },
    story: {
        paragraph1: {
            prefix: "La ",
            highlight: "Trattoria Bar I Fortunelli",
            suffix: " nasce dal desiderio profondo di custodire, valorizzare e tramandare i sapori autentici della nostra terra. Situati all'ingresso di Collegiove, portiamo in tavola l'antica tradizione culinaria locale in un'atmosfera che profuma di casa, pensata per farti sentire parte della nostra famiglia fin dal primo istante."
        },
        paragraph2: "La nostra è una storia fatta di gesti semplici e immutati nel tempo, il profumo del sugo che borbotta lento fin dalle prime ore del mattino e l'accoglienza calorosa riservata a chiunque varchi la nostra porta. Ogni ricetta che proponiamo racconta un pezzo della nostra vita, un ricordo d'infanzia e un tributo alle nostre radici montane.",

        // Philosophy and local supply chain block configuration
        philosophy: {
            title: "Tradizione a Chilometro Zero",
            text: "Ogni giorno selezioniamo con cura millimetrica ingredienti genuini provenienti direttamente dai piccoli produttori, pastori e coltivatori della zona. Crediamo fermamente che la vera qualità nasca dal rispetto della stagionalità e dalla valorizzazione della filiera corta. Dalla cacciagione ai formaggi locali, fino alle nostre celebri paste fresche, ogni piatto celebra la ricchezza gastronomica della valle e delle vette della riserva naturale."
        },

        // Local community hub and travelers block configuration
        community: {
            title: "Un punto di sosta nel cuore del borgo",
            text: "Nel corso degli anni, I Fortunelli è diventato molto più di un semplice bar trattoria: siamo un punto di ritrovo fisso per la comunità locale e una tappa immancabile per i viaggiatori di passaggio. Che tu sia un escursionista di ritorno dai sentieri naturalistici, un motociclista che si gode le curve panoramiche del Lago del Turano, o una famiglia riunita per il classico pranzo della domenica, qui troverai sempre un rifugio di totale relax e un piatto fumante pronto a rigenerarti."
        }
    },
    assets: {
        imageAlt: "I segreti della nostra cucina tradizionale",
        secondaryImageAlt: "Scorcio dell'accoglienza alla Trattoria I Fortunelli"
    }
};

/**
 * LA NOSTRA STORIA COMPONENT
 * Renders the historical background, heritage values, and introductory context of the restaurant.
 */
export default function LaNostraStoria() {
    return (
        <main>
            {/* Main storytelling section */}
            <section className="bg-stone-50 py-5 sm:py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* CHAPTER 1: FOUNDATIONS & ROOTS */}
                    {/* Symmetric 2-column grid layout matching standard page orchestration */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                        {/* Left Column: Context presentation typography stack */}
                        <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                                {UI_STRINGS.meta.badge}
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
                                {UI_STRINGS.meta.title}
                            </h2>
                            <p className="text-lg text-stone-500 font-medium mb-6 leading-relaxed">
                                {UI_STRINGS.meta.subtitle}
                            </p>
                            
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
                        <div className="relative w-full aspect-[1/1] rounded-3xl shadow-xl overflow-hidden group">
                            <Image
                                src="/la-nostra-storia/foto.png"
                                alt={UI_STRINGS.assets.imageAlt}
                                fill
                                sizes="(max-w: 768px) 100vw, 50vw"
                                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                priority
                            />
                        </div>

                    </div>

                    {/* CHAPTER 2: PHILOSOPHY & COMMUNITY PILLARS */}
                    {/* Multi-column expanded matrix layout separated by an elegant structural divider */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-t border-stone-200/80 pt-12 sm:pt-16">
                        
                        {/* Philosophy Segment Box */}
                        <article className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-2xl mb-4 block" aria-hidden="true">🌱</span>
                                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                                    {UI_STRINGS.story.philosophy.title}
                                </h3>
                                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                    {UI_STRINGS.story.philosophy.text}
                                </p>
                            </div>
                        </article>

                        {/* Community and Pit-Stop Hub Segment Box */}
                        <article className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-2xl mb-4 block" aria-hidden="true">🏔️</span>
                                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                                    {UI_STRINGS.story.community.title}
                                </h3>
                                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                    {UI_STRINGS.story.community.text}
                                </p>
                            </div>
                        </article>

                    </div>

                </div>
            </section>
        </main>
    );
}