'use client';

import { useState } from "react";
import Link from "next/link";

// CONFIGURAZIONE STRUTTURATA DEL TERRITORIO (Sorgente unica divisa per Categorie)
const sezioniTerritorio = [
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
                )
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
                )
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                )
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
        id: "associazioni",
        categoriaTitolo: "Associazioni Locali",
        categoriaDescrizione: "La rete di persone e passioni che mantiene vivo e accogliente il nostro paese.",
        cards: [
            {
                id: "pro-loco",
                title: "Pro Loco Collegiove",
                short: "Il punto di riferimento la storia del borgo.",
                details: "La Pro Loco locale è costantemente attiva nella promozione turistica, nella cura dei percorsi storici e culturali e nell'accoglienza dei viandanti che scelgono di scoprire Collegiove.",
                tip: "🤝 Comunità attiva: Collaboriamo strettamente con le iniziative dell'associazione per far vivere ai turisti un'esperienza autentica e integrata.",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-10.24 0a3 3 0 0 0-4.681 2.72 9.094 9.094 0 0 0 3.741.479m11.24-15c1.455 0 2.635 1.18 2.635 2.636a2.636 2.636 0 0 1-5.272 0c0-1.455 1.18-2.636 2.636-2.636m-10.24 0a2.636 2.636 0 0 1 0 5.272 2.636 2.636 0 0 1 0-5.272M6 16.511c0-2.433 1.972-4.405 4.406-4.405h3.188C16.028 12.106 18 14.078 18 16.511m-12 0A14.97 14.97 0 0 0 12 18a14.97 14.97 0 0 0 6-1.49M12 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
                    </svg>
                )
            },
            {
                id: "arte-cultura",
                title: "Associazione Arte e Cultura",
                short: "Promozione dell'artigianato locale.",
                details: "Un punto di riferimento essenziale per la valorizzazione del talento locale, delle arti visive e del recupero dei vecchi mestieri. L'associazione organizza eventi culturali, letture e mostre d'arte aperte durante i mesi caldi.",
                tip: "🎨 Curiosità: Spesso collaboriamo ospitando nei nostri spazi le locandine o i piccoli manufatti degli artigiani locali per dare risalto al loro lavoro.",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-1.243l-.22-.13ZM14.47 16.122a3 3 0 0 1 5.78 1.128 2.25 2.25 0 0 0 2.4 2.245 4.5 4.5 0 0 1-8.4-1.243l.22-.13ZM12 13.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    </svg>
                )
            },
            {
                id: "centro-anziani",
                title: "Centro Anziani Collegiove",
                short: "Il cuore della memoria storica.",
                details: "Luogo di ritrovo fondamentale per gli storici abitanti del paese. Rappresenta una risorsa preziosa per il borgo, mantenendo vive le storiche partite a carte, i tornei della tradizione e lo scambio di aneddoti senza tempo.",
                tip: "🃏 Spirito del Borgo: È proprio grazie al legame con i saggi del Centro Anziani se custodiamo i segreti e le storie d'altri tempi che amiamo tanto raccontare ai nostri ospiti!",
                icon: (
                    <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: "eventi",
        categoriaTitolo: "Eventi & Tradizioni",
        categoriaDescrizione: "I momenti più importanti dell'anno in cui il borgo si riempie di festa.",
        cards: [
            {
                id: "feste",
                title: "Festa di Ferragosto",
                short: "Il Ferragosto e le tradizioni vive della comunità.",
                details: "L'estate a Collegiove raggiunge il suo culmine durante le imperdibili feste patronali e gli eventi di Ferragosto. Il paese prende vita con musica dal vivo, giochi della tradizione, manifestazioni e ricchi stand culinari.",
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
                details: "In occasione della solennità del Corpus Domini, la comunità locale si unisce in una tradizione spettacolare: le strade del centro storico vengono rivestite da tappeti artistici figurativi realizzati interamente con petali colorati e foglie.",
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

export default function IlTerritorio() {
    // State layout identifier tracking the single open accordion across categories
    const [activeId, setActiveId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="bg-stone-50 py-10 sm:py-20 border-t border-stone-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* INTRO HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                        Guida Locale
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                        Vivi e Scopri Collegiove
                    </h2>
                    <p className="mt-3 text-stone-600 text-base sm:text-lg">
                        Abbiamo diviso le meraviglie del nostro territorio per aiutarti a pianificare la giornata nel borgo.
                    </p>
                </div>

                {/* BLOCCHI DI CATEGORIA ITERATI */}
                <div className="space-y-16">
                    {sezioniTerritorio.map((sezione) => (
                        <div key={sezione.id}>
                            
                            {/* Titolo Introduttivo della Categoria */}
                            <div className="mb-8 border-b border-stone-200/80 pb-4">
                                <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                                    {sezione.categoriaTitolo}
                                </h3>
                                <p className="text-sm text-stone-500 mt-1">
                                    {sezione.categoriaDescrizione}
                                </p>
                            </div>

                            {/* Griglia delle Card dell'omonima categoria */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                                {sezione.cards.map((item) => {
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
                                            {/* Icon & Toggle Control State indicator */}
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

                                            {/* Title & Short Description */}
                                            <h4 className={`text-lg font-bold mb-1 transition-colors ${isExpanded ? 'text-amber-800' : 'text-stone-900 group-hover:text-amber-700'}`}>
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-stone-500 leading-relaxed">
                                                {item.short}
                                            </p>

                                            {/* Expandable Context Wrapper Container */}
                                            <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                                <div className="overflow-hidden text-stone-700 text-sm space-y-3 border-t border-stone-100 pt-4">
                                                    <p className="leading-relaxed">
                                                        {item.details}
                                                    </p>
                                                    <p className="font-medium text-stone-900 bg-stone-50 p-3 rounded-xl border border-stone-100 leading-relaxed">
                                                        {item.tip}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                        </div>
                    ))}
                </div>

                {/* FOOTER CALL TO ACTION */}
                <div className="mt-16 text-center">
                    <Link 
                        href="tel:+393491061911"
                        className="inline-block rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow transition-all hover:bg-amber-700 hover:shadow-md"
                    >
                        Chiama e Prenota un Tavolo per la tua Sosta
                    </Link>
                </div>

            </div>
        </section>
    );
}