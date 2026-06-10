'use client';

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { GlobalContext } from "../../context/GlobalContext";

/**
 * DICTIONARY LAYER: CENTRALIZED UI STRINGS CONFIGURATION
 * Isolates presentation-tier textual content to ensure cleaner JSX structures,
 * ease of maintainability, and instant structural adjustments.
 */
const UI_STRINGS = {
    header: {
        badge: "Guida Locale",
        title: "Vivi e Scopri Collegiove",
        description: "Abbiamo diviso le meraviglie del nostro territorio per aiutarti con la giornata nel borgo."
    },
    footer: {
        ctaLabel: "Chiama per la tua Sosta"
    },
    fallback: {
        videoNotSupported: "Il tuo browser non supporta i video HTML5."
    }
};

/**
 * STATIC REGISTRY CONFIGURATION
 * Declared completely outside the component lifecycles to prevent redundant memory 
 * allocations and allocation thrashing during component re-render operations.
 */
const sezioniTerritorioConfig = [
    {
        id: "attivita",
        categoriaTitolo: "Attività sul Territorio",
        categoriaDescrizione: "Esplora la natura, lo sport e le meraviglie all'aria aperta intorno a noi.",
        cards: [
            {
                id: "trekking",
                title: "Trekking & Natura",
                short: "I sentieri e i boschi di Collegiove.",
                details: "Collegiove è circondato da una rete di sentieri spettacolari, perfetti sia per escursionisti esperti che per famiglie in cerca di una passeggiata rilassante nella natura selvaggia del Lazio.",
                tip: "📍 Consiglio dello staff: Passa a trovarci la mattina per un caffè e un panino d'asporto per il cammino, o prenota il tuo tavolo per una meritata ricarica a base di pasta fresca al tuo ritorno.",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h22.5m-22.5 0a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                ),
                media: ["/territorio/trk1.jpeg", "/territorio/trk2.jpeg", "/territorio/trk3.jpeg", "/territorio/trk4.jpeg", "/territorio/trk5.jpeg", "/territorio/trk6.jpeg", "/territorio/trk7.jpeg"]
            },
            {
                id: "due-ruote",
                title: "Due Ruote (Moto & Ciclismo)",
                short: "Tra sterrati, curve e tornanti.",
                details: "Che tu preferisca il rombo del motore tra i tornanti panoramici che costeggiano i laghi o la sfida silenziosa delle pendenze in sella a una bici da corsa o mountain bike, le nostre strade offrono percorsi suggestivi immersi nel silenzio.",
                tip: "🏍️ 🚴 Bikers & Cyclists Welcome: Disponiamo di un ampio spazio esterno sicuro per parcheggiare moto e bici. Fermati da noi per ricaricare le borracce, una pausa caffè o un pranzo completo recupera-forze.",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.15 17.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM17.85 17.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5l-2.25 3h4.5M13.5 7.5h3.75M16.125 10.5l-1.875-3.75M6.15 13.875h7.725" />
                    </svg>
                ),
                media: "/territorio/video.mp4"
            },
            {
                id: "fotografia",
                title: "Fotografia & Panorami",
                short: "Scorci e tramonti da immortalare.",
                details: "Collegiove offers punti panoramici straordinari sulla valle e angoli senza tempo tra i vicoli storici. È la meta ideale per gli appassionati di fotografia naturalistica, paesaggistica o per chi ama catturare i colori del tramonto.",
                tip: "📸 Luce perfetta: Chiedici quali sono i punti panoramici più nascosti ed esclusivi del borgo per scattare le tue foto prima di sederti a cena da noi!",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    </svg>
                ),
                media: "/territorio/fotografia.mp4"
            },
            {
                id: "chiesa",
                title: "La Chiesa del Borgo",
                short: "Storia e cultura a pochi passi da noi.",
                details: "A pochissimi minuti a piedi dalla trattoria si può raggiungere il nucleo storico del borgo e visitare la caratteristica chiesa locale, custode della memoria storica e spirituale della nostra piccola comunità di montagna.",
                tip: "⛪ Un luogo di pace perfetto per scattare qualche fotografia panoramica e assaporare l'atmosfera autentica dei vecchi borghi italiani.",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: "eventi",
        categoriaTitolo: "Eventi & Tradizioni",
        categoriaDescrizione: "I moments più importanti dell'anno in cui il borgo si riempie di festa.",
        cards: [
            {
                id: "feste",
                title: "Festa di Ferragosto",
                short: "Il Ferragosto e le tradizioni vive della comunità.",
                details: "L'estate a Collegiove raggiunge il suo culmine durante le imperdibili feste patronali e gli eventi di Ferragosto. Il paese prende vita with musica dal vivo, giochi della tradizione, manifestazioni e ricchi stand culinari.",
                tip: "📅 Nota utile: Durante la settimana calda di Ferragosto i posti in paese sono richiestissimi! Ti consigliamo di prenotare il tuo tavolo con largo anticipo.",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.283 8.283 0 015.466-4.386zm-4.088 4.413a5.25 5.25 0 115.32-6.748 5.25 5.25 0 00-5.32 6.748z" />
                    </svg>
                )
            },
            {
                id: "infiorata",
                title: "Infiorata del Corpus Domini",
                short: "Gli storici vicoli coperti da disegni.",
                details: "In occasione della solennità del Corpus Domini, la comunità locale si unisce in una traditione spettacolare: le strade del centro storico vengono rivestite da tappeti artistici figurativi realizzati interamente con petali colorati e foglie.",
                tip: "🌸 Da non perdere: Fai una passeggiata la mattina presto per goderti i tappeti floreali intatti e profumatissimi prima della processione, per poi fermarti a pranzo da noi.",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.497-1.012-2.617-2.361l-.031-.343A2.25 2.25 0 0 1 11.597 1.5h.806a2.25 2.25 0 0 1 2.245 2.546l-.031.343C14.497 5.738 13.355 6.75 12 6.75Zm0 10.5v1.5m0-1.5c1.355 0 2.497 1.012 2.617 2.361l.031.343A2.25 2.25 0 0 1 12.403 22.5h-.806a2.25 2.25 0 0 1-2.245-2.546l.031-.343C9.503 18.262 10.645 17.25 12 17.25Zm-3.75-5.25h-1.5m1.5 0c0-1.355 1.012-2.497 2.361-2.617l.343-.031A2.25 2.25 0 0 1 13.5 11.597v.806a2.25 2.25 0 0 1-2.546 2.245l-.343-.031C9.262 14.497 8.25 13.355 8.25 12Zm10.5 0h1.5m-1.5 0c0 1.355-1.012 2.497-2.361 2.617l-.343.031A2.25 2.25 0 0 1 10.5 12.403v-.806a2.25 2.25 0 0 1 2.546-2.245l.343.031C14.738 9.503 15.75 10.645 15.75 12Z" />
                    </svg>
                )
            }
        ]
    }
];

/**
 * OPTIMIZED SUBSYSTEM COMPONENT: CAROUSEL WITH PRELOADING AGENTS
 * Automatically isolates individual slider state behaviors and resolves data fetching lag.
 */
function CarouselOttimizzato({ images, altTextBase, priorityLoad }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const length = images.length;

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    const onTouchStart = (e) => {
        e.stopPropagation();
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const onTouchEnd = (e) => {
        e.stopPropagation();
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        const threshold = 50;

        if (diff > threshold) {
            handleNext();
        } else if (diff < -threshold) {
            handlePrev();
        }
    };

    /**
     * INTENT PRELOADING MACHINE ENGINE EFFECT
     * Instantly builds out programmatic native cache image streams before manual navigation occurs.
     */
    useEffect(() => {
        if (length < 2) return;

        const nextIndex = (currentIndex + 1) % length;
        const prevIndex = (currentIndex - 1 + length) % length;

        const preloadImages = [images[nextIndex], images[prevIndex]];
        preloadImages.forEach(src => {
            const img = new window.Image();
            img.src = src;
        });
    }, [currentIndex, images, length]);

    return (
        <div 
            className="relative w-full aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner group/carousel touch-pan-y cursor-default"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <Image
                src={images[currentIndex]}
                alt={`${altTextBase} slide ${currentIndex + 1}`}
                fill
                priority={priorityLoad && currentIndex === 0}
                sizes="(max-w: 768px) 100vw, (max-w: 1280px) 50vw, 640px"
                className="object-cover transition-all duration-500 select-none pointer-events-none"
            />
            
            {length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group/carousel:opacity-100 transition-opacity focus:outline-none hidden md:inline-flex z-10"
                        aria-label="Previous slide image"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group/carousel:opacity-100 transition-opacity focus:outline-none hidden md:inline-flex z-10"
                        aria-label="Next slide image"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/20 px-2 py-1 rounded-full backdrop-blur-xs z-10">
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`block h-1.5 w-1.5 rounded-full transition-all ${
                                    currentIndex === idx ? 'bg-white w-3' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

/**
 * CONTAINER ORCHESTRATOR COMPONENT: IL TERRITORIO
 */
export default function IlTerritorio() {
    const [activeId, setActiveId] = useState(null);
    
    // Connect to application global details state
    const { businessDetails } = useContext(GlobalContext);

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <main className="w-full min-h-screen flex items-center justify-center">
            
            {/* Elevated context frame wrapper area */}
            <section className="relative z-10 w-full py-5 sm:py-10 my-5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* INTRO MAIN PRESENTATION TYPOGRAPHY HEADER */}
                    <header className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                            {UI_STRINGS.header.badge}
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                            {UI_STRINGS.header.title}
                        </h2>
                        <p className="mt-3 text-stone-600 text-base sm:text-lg">
                            {UI_STRINGS.header.description}
                        </p>
                    </header>

                    {/* INTERACTIVE CATEGORY CARDS SECTION LOOP */}
                    <div className="space-y-16">
                        {sezioniTerritorioConfig.map((sezione, sectionIndex) => (
                            <div key={sezione.id}>

                                {/* Category Title Context Strip */}
                                <div className="mb-8 pb-4">
                                    <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                                        {sezione.categoriaTitolo}
                                    </h3>
                                    <p className="text-sm text-stone-500 mt-1">
                                        {sezione.categoriaDescrizione}
                                    </p>
                                </div>

                                {/* Main Grid Accordion Cards System */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                    {sezione.cards.map((item, cardIndex) => {
                                        const isExpanded = activeId === item.id;
                                        
                                        // Priority image optimization target flag assigned directly to above-the-fold visual elements
                                        const isFirstVisualElement = sectionIndex === 0 && cardIndex === 0;

                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => toggleAccordion(item.id)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        e.preventDefault();
                                                        toggleAccordion(item.id);
                                                    }
                                                }}
                                                role="button"
                                                tabIndex={0}
                                                aria-expanded={isExpanded}
                                                className={`group block w-full text-left bg-white p-6 rounded-2xl border transition-all duration-300 outline-none select-none cursor-pointer ${isExpanded
                                                        ? 'border-amber-500 shadow-md ring-1 ring-amber-500/20'
                                                        : 'border-stone-200 shadow-sm hover:border-amber-500/40 hover:shadow-md'
                                                    }`}
                                            >
                                                {/* Header Bar within the interactive card module */}
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`p-3 rounded-xl transition-colors ${isExpanded ? 'bg-amber-100' : 'bg-amber-50 group-hover:bg-amber-100'}`}>
                                                        {item.icon}
                                                    </div>
                                                    <div className={`text-stone-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-amber-600' : 'group-hover:text-stone-600'}`}>
                                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <h4 className={`text-lg font-bold mb-1 transition-colors ${isExpanded ? 'text-amber-800' : 'text-stone-900 group-hover:text-amber-700'}`}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-stone-500 leading-relaxed">
                                                    {item.short}
                                                </p>

                                                {/* Expandable Content Container using grid transitions */}
                                                <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                                    <div className="overflow-hidden text-stone-700 text-sm space-y-3 border-t border-stone-100 pt-4">
                                                        <p className="leading-relaxed">
                                                            {item.details}
                                                        </p>

                                                        {/* Media presentation block processor */}
                                                        {item.media && (
                                                            <div className="my-3">
                                                                {Array.isArray(item.media) ? (
                                                                    /* --- Preloaded Media Carousel Execution Track --- */
                                                                    <CarouselOttimizzato 
                                                                        images={item.media} 
                                                                        altTextBase={item.title}
                                                                        priorityLoad={isFirstVisualElement}
                                                                    />
                                                                ) : (
                                                                    /* --- Standard Native 1:1 Aspect Ratio Video Frame Player --- */
                                                                    <div 
                                                                        className="relative w-full aspect-square rounded-xl overflow-hidden shadow-inner border border-stone-200/60 bg-black cursor-default"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        <video
                                                                            src={item.media}
                                                                            controls
                                                                            preload="metadata"
                                                                            className="w-full h-full object-cover"
                                                                        >
                                                                            {UI_STRINGS.fallback.videoNotSupported}
                                                                        </video>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}

                                                        {/* Contextual local insider tip banner */}
                                                        <p className="font-medium text-stone-900 bg-stone-50 p-3 rounded-xl border border-stone-100 loam-relaxed">
                                                            {item.tip}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* ROOT FOOTER OUTBOUND CONTEXT CALL TO ACTION */}
                    <div className="mt-16 text-center">
                        <Link
                            href={`tel:${businessDetails?.tel1 || '+393491061911'}`}
                            className="inline-block rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow transition-all hover:bg-amber-700 hover:shadow-md"
                        >
                            {UI_STRINGS.footer.ctaLabel}
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}