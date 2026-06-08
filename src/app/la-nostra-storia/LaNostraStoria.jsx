'use client';

import { useState } from "react";
import Link from "next/link";

export default function LaNostraStoria() {
    // State to keep track of which accordion card is currently expanded (null means all closed)
    const [activeId, setActiveId] = useState(null);

    // Toggles the accordion state: closes if already open, opens if closed
    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    /**
     * Unified data structure combining short introductions with deep-dive contextual descriptions
     */
const attivitaLocali = [
    {
        id: "trekking",
        title: "Trekking & Natura",
        short: "I sentieri e i boschi incontaminati di Collegiove.",
        details: "Collegiove è circondato da una rete di sentieri spettacolari, perfetti sia per escursionisti esperti che per famiglie in cerca di una passeggiata rilassante nella natura selvaggia del Lazio.",
        tip: "📍 Consiglio dello staff: Passa a trovarci la mattina per un caffè e un panino d'asporto per il cammino, o prenota il tuo tavolo per una meritata ricarica a base di pasta fresca al tuo ritorno.",
        icon: (
            <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h22.5m-22.5 0a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
        )
    },
    {
        id: "moto",
        title: "Itinerari in Moto",
        short: "La sosta perfetta tra le curve e i panorami della zona.",
        details: "Le strade che portano a Collegiove e costeggiano i laghi della zona sono tra le più amate dai motociclisti per la qualità dell'asfalto, i panorami mozzafiato e le curve divertenti.",
        tip: "🏍️ Bikers Welcome: Ampio spazio esterno dove parcheggiare le moto in totale sicurezza mentre ti godi un pranzo all'aperto o un aperitivo fresco al bar prima di rimetterti in sella.",
        icon: (
            <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5M3 9.75h18M3 14.25h18" />
            </svg>
        )
    },
    {
        id: "ciclismo",
        title: "Ciclismo & Due Ruote",
        short: "Sfide in salita e percorsi panoramici per ciclisti.",
        details: "Che tu sia un amante della bici da corsa su asfalto, un appassionato di mountain bike tra i boschi o un cicloturista, i dislivelli e i tornanti intorno a Collegiove offrono percorsi suggestivi immersi nel silenzio.",
        tip: "🚴 Pit-Stop Ciclisti: Fermati da noi per ricaricare le borracce, fare una pausa caffè rigenerante o recuperare le forze a pranzo dopo le fatiche della scalata.",
        icon: (
            <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.15 17.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM17.85 17.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5l-2.25 3h4.5M13.5 7.5h3.75M16.125 10.5l-1.875-3.75M6.15 13.875h7.725" />
            </svg>
        )
    },
    {
        id: "fotografia",
        title: "Fotografia & Panorami",
        short: "Scorci medievali e tramonti mozzafiato da immortalare.",
        details: "Collegiove offre punti panoramici straordinari sulla valle e angoli senza tempo tra i vicoli storici. È la meta ideale per gli appassionati di fotografia naturalistica, paesaggistica o per chi ama catturare i colori del tramonto.",
        tip: "📸 Luce perfetta: Chiedici quali sono i punti panoramici più nascosti ed esclusivi del borgo per scattare le tue foto prima di sederti a cena da noi!",
        icon: (
            <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
        )
    },
    {
        id: "chiesa",
        title: "La Chiesa del Borgo",
        short: "Un gioiello di storia e cultura a pochi passi da noi.",
        details: "A pochissimi minuti a piedi dalla trattoria si può raggiungere il nucleo storico del borgo e visitare la caratteristica chiesa locale, custode della memoria storica e spirituale della nostra piccola comunità di montagna.",
        tip: "⛪ Un luogo di pace perfetto per scattare qualche fotografia panoramica e assaporare l'atmosfera autentica dei vecchi borghi italiani.",
        icon: (
            <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
        )
    },
    {
        id: "feste",
        title: "Feste di Paese",
        short: "Il Ferragosto e le tradizioni vive della comunità.",
        details: "L'estate a Collegiove raggiunge il suo culmine durante le imperdibili feste patronali e gli eventi di Ferragosto. Il paese si anima con musica dal vivo, giochi della tradizione e stand enogastronomici.",
        tip: "📅 Nota: Durante la settimana di Ferragosto i posti sono limitatissimi! Consigliamo sempre la prenotazione telefonica con largo anticipo per assicurarvi un tavolo.",
        icon: (
            <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.283 8.283 0 015.466-4.386zm-4.088 4.413a5.25 5.25 0 115.32-6.748 5.25 5.25 0 00-5.32 6.748z" />
            </svg>
        )
    }
];

    return (
        <section className="bg-stone-50 py-10 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* SECTION 1: THE TRATTORIA STORY */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-stone-200 pb-16">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                            Benvenuti a tavola
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-6">
                            La Nostra Storia
                        </h1>
                        <div className="space-y-4 text-base text-stone-700 leading-relaxed">
                            <p>
                                La <strong>Trattoria Bar I Fortunelli</strong> nasce dal desiderio di custodire e tramandare i sapori autentici della nostra terra, portando in tavola l'antica tradizione culinaria locale in un'atmosfera calda, familiare e accogliente.
                            </p>
                            <p>
                                Ogni giorno selezioniamo con cura ingredienti genuini provenienti dai produttori della zona. Dalla pasta fatta in casa ai piatti tipici della tradizione, ogni ricetta racconta la passione per la buona cucina e l'amore per le nostre radici.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-stone-200 rounded-3xl h-80 w-full flex items-center justify-center border border-stone-300/50 shadow-inner">
                        <span className="text-stone-500 font-medium italic">[ Foto della Trattoria ]</span>
                    </div>
                </div>

                {/* SECTION 2: INTERACTIVE ACCORDION CARDS GRID */}
                <div className="mt-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                            Cosa fare a Collegiove
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
                            Vivi il Territorio
                        </h2>
                        <p className="mt-3 text-stone-600">
                            Clicca sulle card per espandere i dettagli e scoprire i consigli dedicati a ciascuna attività.
                        </p>
                    </div>

                    {/* ACCORDION CONTAINER: grid configuration sets items-start to isolate independent row expansions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                        {attivitaLocali.map((item) => {
                            const isExpanded = activeId === item.id;
                            
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => toggleAccordion(item.id)}
                                    type="button"
                                    className={`group block w-full text-left bg-white p-6 rounded-2xl border transition-all duration-300 outline-none select-none ${
                                        isExpanded 
                                            ? 'border-amber-500 shadow-md ring-1 ring-amber-500/20' 
                                            : 'border-stone-200 shadow-sm hover:border-amber-500/40 hover:shadow-md'
                                    }`}
                                >
                                    {/* Icon & Toggle Indicator Bar */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl transition-colors ${isExpanded ? 'bg-amber-100' : 'bg-amber-50 group-hover:bg-amber-100'}`}>
                                            {item.icon}
                                        </div>
                                        {/* Dynamic chevron feedback indicator */}
                                        <div className={`text-stone-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-amber-600' : 'group-hover:text-stone-600'}`}>
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Accordion Title & Short Intro */}
                                    <h3 className={`font-serif text-lg font-bold mb-1 transition-colors ${isExpanded ? 'text-amber-800' : 'text-stone-900 group-hover:text-amber-700'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-stone-500 leading-relaxed">
                                        {item.short}
                                    </p>

                                    {/* EXPANDABLE WRAPPER: Implements pure CSS transition via CSS Grid row fractional scaling */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden text-stone-700 text-sm space-y-3 border-t border-stone-100 pt-4">
                                            <p className="leading-relaxed">
                                                {item.details}
                                            </p>
                                            <p className="font-medium text-stone-900 bg-stone-50 p-3 rounded-xl border border-stone-100">
                                                {item.tip}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* FOOTER CALL TO ACTION */}
                <div className="mt-16 text-center">
                    <Link 
                        href="tel:+393491061911"
                        className="inline-block rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow transition-all hover:bg-amber-700 hover:shadow-md"
                    >
                        Chiama e Prenota un Tavolo
                    </Link>
                </div>

            </div>
        </section>
    );
}