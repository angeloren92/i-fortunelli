'use client';

import { useState, useEffect, useContext, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMotorcycle, FaCameraRetro, FaChurch, FaUsers, FaPalette, FaHandsHelping, FaMusic } from "react-icons/fa";
import { GiHiking, GiFlowerTwirl } from "react-icons/gi";
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
        ctaLabel: "Chiama per la tua Sosta",
        ctaDescription: "Chiama ora per prenotare un tavolo e vivere la nostra ospitalità dopo il giro nel territorio.",
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
                    <GiHiking className="h-6 w-6 text-amber-700" />
                ),
                media: ["/territorio/trk1.avif", "/territorio/trk2.avif", "/territorio/trk3.avif", "/territorio/trk4.avif", "/territorio/trk5.avif", "/territorio/trk6.avif", "/territorio/trk7.avif", "/territorio/trk8.avif"]
            },
            {
                id: "due-ruote",
                title: "Due Ruote (Moto & Ciclismo)",
                short: "Tra sterrati, curve e tornanti.",
                details: "Che tu preferisca il rombo del motore tra i tornanti panoramici che costeggiano i monti o la sfida silenziosa delle pendenze in sella a una bici da corsa o mountain bike, le nostre strade offrono percorsi suggestivi immersi nel silenzio.",
                tip: "🏍️ 🚴 Bikers & Cyclists Welcome: Ampio spazio esterno sicuro per parcheggiare moto e bici. Fermati da noi per ricaricare le borracce, una pausa caffè o un pranzo completo recupera-forze.",
                icon: (
                    <FaMotorcycle className="h-6 w-6 text-amber-700" />
                ),
                media: "/territorio/video.mp4"
            },
            {
                id: "fotografia",
                title: "Fotografia & Panorami",
                short: "Scorci e tramonti da immortalare.",
                details: "Collegiove offe punti panoramici straordinari sulla valle e angoli senza tempo tra i vicoli storici. È la meta ideale per gli appassionati di fotografia naturalistica, paesaggistica o per chi ama catturare i colori del tramonto.",
                tip: "📸 Luce perfetta: Chiedici quali sono i punti panoramici più nascosti ed esclusivi del borgo per scattare le tue foto prima di sederti a cena da noi!",
                icon: (
                    <FaCameraRetro className="h-6 w-6 text-amber-700" />
                ),
                media: ["/territorio/foto1.avif", "/territorio/foto2.avif", "/territorio/foto3.avif", "/territorio/foto4.avif", "/territorio/foto5.avif", "/territorio/foto6.avif", "/territorio/foto7.avif", "/territorio/foto8.avif", "/territorio/foto9.avif"]

            },
            {
                id: "chiesa",
                title: "La Chiesa del Borgo",
                short: "Storia e cultura a pochi passi da noi.",
                details: "A pochissimi minuti a piedi dalla trattoria si può raggiungere il nucleo storico del borgo e visitare la caratteristica chiesa locale, custode della memoria storica e spirituale della nostra piccola comunità di montagna.",
                tip: "⛪ Un luogo di pace perfetto per scattare qualche fotografia panoramica e assaporare l'atmosfera autentica dei vecchi borghi italiani.",
                icon: (
                    <FaChurch className="h-6 w-6 text-amber-700" />
                ),
                media: ["/territorio/chiesa1.avif", "/territorio/chiesa2.avif", "/territorio/chiesa3.avif", "/territorio/chiesa4.avif"]
            }
        ]
    },
    {
        id: "associazioni",
        categoriaTitolo: "Associazioni Locali",
        categoriaDescrizione: "La rete di persone e passioni che mantiene vivo e accogliente il nostro paese.",
        cards: [
            {
                id: "pro-loco",
                title: "Pro Loco Collegiove",
                short: "Il motore delle nostre tradizioni.",
                details: "Lavori in Corso",
                /*details: "La Pro Loco locale è costantemente attiva nella promozione turistica, nella cura dei percorsi storici e culturali e nell'accoglienza dei viandanti che scelgono di scoprire Collegiove.",
                tip: "🤝 Comunità attiva: Collaboriamo strettamente con le iniziative dell'associazione per far vivere ai turisti un'esperienza autentica e integrata.",*/
                icon: (
                    <FaUsers className="h-6 w-6 text-amber-700" />
                )
            },
            {
                id: "arte-cultura",
                title: "Tradizioni ArteCultura",
                short: "Promozione dell'artigianato locale.",
                details: "Lavori in Corso",
                /*details: "Un punto di riferimento essenziale per la valorizzazione del talento locale, delle arti visive e del recupero dei vecchi mestieri.",
                tip: "🎨 Curiosità: In occasione delle feste di paese, i nostri spazi si animano ulteriormente ospitando stand dedicati per celebrare le tradizioni locali e vivere la festa insieme alla comunità.",*/
                icon: (
                    <FaPalette className="h-6 w-6 text-amber-700" />
                )
            },
            {
                id: "centro-anziani",
                title: "Centro Anziani Collegiove",
                short: "Il cuore della memoria storica.",
                details: "Luogo di ritrovo fondamentale per gli storici abitanti del paese. Rappresenta una risorsa preziosa per il borgo, mantenendo vive le storiche partite a carte, i tornei della tradizione e lo scambio di aneddoti senza tempo.",
                tip: "🃏 Spirito del Borgo: È proprio grazie al legame con i saggi del Centro Anziani si custodiscono i segreti e le storie d'altri tempi che amiamo tanto raccontare ai nostri ospiti!",
                icon: (
                    <FaHandsHelping className="h-6 w-6 text-amber-700" />
                ),
                media: ["/territorio/centro1.avif", "/territorio/centro2.avif"]
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
                title: "Ferragosto",
                short: "Il Ferragosto e le tradizioni vive della comunità.",
                details: "L'estate a Collegiove raggiunge il suo culmine durante le imperdibili feste patronali e gli eventi di Ferragosto. Il paese prende vita con musica dal vivo, giochi della tradizione, manifestazioni e ricchi stand culinari.",
                tip: "📅 Nota utile: Durante la settimana calda di Ferragosto i posti in paese sono richiestissimi! Ti consigliamo di prenotare il tuo tavolo con largo anticipo.",
                icon: (
                    <FaMusic className="h-6 w-6 text-amber-700" />
                ),
                media: ["/territorio/fer1.avif", "/territorio/fer2.avif", "/territorio/fer3.avif", "/territorio/fer4.avif", "/territorio/fer5.avif", "/territorio/fer6.avif", "/territorio/fer7.avif", "/territorio/fer8.avif"]
            },
            {
                id: "infiorata",
                title: "Infiorata del Corpus Domini",
                short: "Gli storici vicoli coperti da disegni.",
                details: "In occasione della solennità del Corpus Domini, la comunità locale si unisce in una traditione spettacolare: le strade del centro storico vengono rivestite da tappeti artistici figurativi.",
                tip: "🌸 Da non perdere: Fai una passeggiata la mattina presto per goderti i disegni intatti e coloratissimi prima della processione, per poi fermarti a pranzo da noi.",
                icon: (
                    <GiFlowerTwirl className="h-6 w-6 text-amber-700" />
                ),
                media: (
                    <iframe
                        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F981065018182670%2F&show_text=false&width=267&t=0"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="absolute inset-0 rounded-xl shadow-md"
                    />
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
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 1024px"
                className="object-cover transition-all duration-500 select-none pointer-events-none"
            />

            {length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group-hover/carousel:opacity-100 transition-opacity focus:outline-none hidden md:inline-flex z-10"
                        aria-label="Previous slide image"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group-hover/carousel:opacity-100 transition-opacity focus:outline-none hidden md:inline-flex z-10"
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
                                className={`block h-1.5 w-1.5 rounded-full transition-all ${currentIndex === idx ? 'bg-white w-3' : 'bg-white/50'
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
            <section className="relative z-10 w-full py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* INTRO MAIN PRESENTATION TYPOGRAPHY HEADER */}
                    <header className="md:text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold tracking-widest text-amber-700 uppercase block mb-2">
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
                                                    <div className={`text-stone-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-amber-700' : 'group-hover:text-stone-600'}`}>
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
                                                                ) : isValidElement(item.media) ? (
                                                                    <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-inner border border-stone-200/60 bg-black">
                                                                        {item.media}
                                                                    </div>
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
                        <p className="mx-auto max-w-2xl text-base text-stone-600 mb-6">
                            {UI_STRINGS.footer.ctaDescription}
                        </p>
                        <Link
                            href={`tel:${businessDetails?.tel1 || businessDetails?.tel2}`}
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