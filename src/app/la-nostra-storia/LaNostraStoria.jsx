'use client';

import Link from "next/link";

export default function LaNostraStoria() {
    /**
     * Data structure for local activities mapping titles, short intros, anchor targets, and clean SVGs
     */
    const attivitaLocali = [
        {
            id: "trekking",
            title: "Trekking & Natura",
            short: "I sentieri e i boschi incontaminati di Collegiove.",
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
            icon: (
                <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5M3 9.75h18M3 14.25h18" />
                </svg>
            )
        },
        {
            id: "chiesa",
            title: "La Chiesa del Borgo",
            short: "Un gioiello di storia e cultura a pochi passi da noi.",
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
            icon: (
                <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.283 8.283 0 015.466-4.386zm-4.088 4.413a5.25 5.25 0 115.32-6.748 5.25 5.25 0 00-5.32 6.748z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-stone-50 py-16 sm:py-24">
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

                {/* SECTION 2: INTERACTIVE LOCAL CARDS */}
                <div className="mt-16 border-b border-stone-200 pb-20">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                            Cosa fare a Collegiove
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
                            Vivi il Territorio
                        </h2>
                        <p className="mt-3 text-stone-600">
                            Clicca sulle card per scoprire i dettagli delle attività e pianificare la tua sosta ideale da noi.
                        </p>
                    </div>

                    {/* INTERACTIVE GRID: Navigates via anchor href links with scale animation feedback */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {attivitaLocali.map((item) => (
                            <Link 
                                key={item.id}
                                href={`#${item.id}`}
                                className="group block bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-3 bg-amber-50 rounded-xl w-fit mb-4 group-hover:bg-amber-100 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors flex items-center gap-2">
                                    {item.title}
                                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity text-amber-600">→</span>
                                </h3>
                                <p className="text-sm text-stone-500 leading-relaxed">
                                    {item.short}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* SECTION 3: DEEP-DIVE DETAILS */}
                {/* scroll-mt-24 prevents the sticky header from blocking content upon jump navigation */}
                <div className="mt-20 space-y-16">
                    
                    {/* DETAIL: TREKKING */}
                    <div id="trekking" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-white p-8 rounded-3xl border border-stone-200/60">
                        <div className="md:col-span-1">
                            <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-3">
                                <span className="p-2 bg-amber-50 rounded-lg">🌲</span> Trekking & Natura
                            </h3>
                        </div>
                        <div className="md:col-span-2 text-stone-700 space-y-3 text-sm sm:text-base">
                            <p>
                                Collegiove è circondato da una rete di sentieri spettacolari, perfetti sia per escursionisti esperti che per famiglie in cerca di una passeggiata rilassante nella natura selvaggia del Lazio. 
                            </p>
                            <p className="font-medium text-stone-900">
                                📍 Consiglio dello staff: Passa a trovarci la mattina per un caffè e un panino d'asporto per il cammino, o prenota il tuo tavolo per una meritata ricarica a base di pasta fresca al tuo ritorno.
                            </p>
                        </div>
                    </div>

                    {/* DETAIL: MOTO */}
                    <div id="moto" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-white p-8 rounded-3xl border border-stone-200/60">
                        <div className="md:col-span-1">
                            <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-3">
                                <span className="p-2 bg-amber-50 rounded-lg">🏍️</span> Itinerari in Moto
                            </h3>
                        </div>
                        <div className="md:col-span-2 text-stone-700 space-y-3 text-sm sm:text-base">
                            <p>
                                Le strade che portano a Collegiove e costeggiano i laghi della zona sono tra le più amate dai motociclisti per la qualità dell'asfalto, i panorami mozzafiato e le curve divertenti. 
                            </p>
                            <p className="font-medium text-stone-900">
                                🏍️ Bikers Welcome: ampio spazio esterno dove parcheggiare le moto in totale sicurezza mentre ti godi un pranzo all'aperto o un aperitivo fresco al bar prima di rimetterti in sella.
                            </p>
                        </div>
                    </div>

                    {/* DETAIL: CHIESA */}
                    <div id="chiesa" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-white p-8 rounded-3xl border border-stone-200/60">
                        <div className="md:col-span-1">
                            <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-3">
                                <span className="p-2 bg-amber-50 rounded-lg">⛪</span> La Chiesa del Borgo
                            </h3>
                        </div>
                        <div className="md:col-span-2 text-stone-700 space-y-3 text-sm sm:text-base">
                            <p>
                                A pochissimi minuti a piedi dalla trattoria si può raggiungere il nucleo storico del borgo e visitare la caratteristica chiesa locale, custode della memoria storica e spirituale della nostra piccola comunità di montagna.
                            </p>
                            <p>
                                Un luogo di pace perfetto per scattare qualche fotografia panoramica e assaporare l'atmosfera autentica dei vecchi borghi italiani.
                            </p>
                        </div>
                    </div>

                    {/* DETAIL: FESTE */}
                    <div id="feste" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-white p-8 rounded-3xl border border-stone-200/60">
                        <div className="md:col-span-1">
                            <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-3">
                                <span className="p-2 bg-amber-50 rounded-lg">🎉</span> Feste di Paese
                            </h3>
                        </div>
                        <div className="md:col-span-2 text-stone-700 space-y-3 text-sm sm:text-base">
                            <p>
                                L'estate a Collegiove raggiunge il suo culmine durante le imperdibili feste patronali e gli eventi di Ferragosto. Il paese si anima con musica dal vivo, giochi della tradizione e stand enogastronomici.
                            </p>
                            <p className="font-medium text-stone-900">
                                📅 Nota: Durante la settimana di Ferragosto i posti sono limitatissimi! Consigliamo sempre la prenotazione telefonica con largo anticipo per assicurarvi un tavolo durante i giorni di festa.
                            </p>
                        </div>
                    </div>

                </div>

                {/* FOOTER CALL TO ACTION */}
                <div className="mt-20 text-center">
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