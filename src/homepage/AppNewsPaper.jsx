'use client';

import { useState } from "react";

/**
 * ARTICLE DATA LAYER
 * Centralizza i testi e i link dell'articolo per mantenere pulito l'albero JSX.
 */
const ARTICLE_DATA = {
    meta: {
        category: "Flash Live",
        categoryUrl: "https://www.confinelive.it/category/flash-live/",
        title: "Collegiove, un anno con “I Fortunelli”: giovani, tradizione e rilancio nel cuore dei monti reatini",
        author: {
            name: "Redazione Confinelive",
            avatar: "https://www.confinelive.it/wp-content/uploads/2019/05/cl-150x150.jpeg",
            profileUrl: "https://www.confinelive.it/author/danieleimperiale/"
        },
        date: "5 Marzo, 2026",
        shareUrl: "https://www.confinelive.it/collegiove-un-anno-con-i-fortunelli-giovani-tradizione-e-rilancio-nel-cuore-dei-monti-reatini/"
    },
    featuredImage: {
        src: "https://www.confinelive.it/wp-content/uploads/2026/03/ragazzi-di-collegiove-bar-1-750x430.jpg",
        alt: "I ragazzi di Collegiove davanti alla Trattoria Bar I Fortunelli"
    },
    paragraphs: {
        p1: "COLLEGIOVE RI – Un anno fa, il 22 marzo, tre giovani hanno deciso di scommettere su Collegiove riaprendo una storica attività del paese e restituendole nuova vita. Oggi il Bar Trattoria “I Fortunelli” festeggia il suo primo anniversario, diventando simbolo di intraprendenza giovanile e punto di riferimento per l’intera comunità.",
        p2: "Situato nella suggestiva cornice di Collegiove, piccolo borgo montano in provincia di Rieti immerso nella natura, il locale offre un servizio a 360 gradi: bar, tabaccheria, alimentari, trattoria e pinseria a conduzione familiare. Un presidio fondamentale per i residenti, ma anche per passanti ed escursionisti che scelgono il territorio per le sue bellezze ambientali.",
        p3: "Collegiove è meta ideale per gli amanti del trekking: sentieri tra boschi, ruscelli e panorami mozzafiato rendono l’esperienza adatta a ogni livello di preparazione. E dopo una giornata tra i monti del Lazio, la sosta alla trattoria diventa il naturale completamento di un binomio vincente: trekking e tartufo, natura e buona tavola.",
        quote1: "“Alessandro, Sofia e Simone – giovani di origine romana, ma legati al paese natale dei nonni – afferma il sindaco Domenico Manzocchi – hanno scelto di investire proprio qui, chiamando la loro attività “I Fortunelli”. Una scelta che unisce radici familiari e voglia di costruire futuro in un borgo dell’entroterra.”",
        p4: "L’ambiente è rustico, semplice e accogliente. In cucina trovano spazio i grandi classici della traditione romanesca e laziale: carbonara, amatriciana, coda alla vaccinara, trippa, coratella, fagioli con le cotiche. Non mancano piatti legati al territorio e ai prodotti locali, con sapori genuini che profumano di bosco e tradizione.",
        p5: "La proposta varia quotidianamente e, su richiesta, è possibile gustare anche la pinsa e una selezione di fritti croccanti. Un’offerta che ha saputo conquistare residenti e visitatori, trasformando il locale in un vero punto di ritrovo.",
        subheading: "Il 22 marzo festa per il primo anniversario",
        p6: "Per celebrare il primo anno di attività, il 22 marzo “I Fortunelli” organizzerà un rinfresco aperto a tutti. Un momento conviviale per festeggiare insieme un traguardo importante che rappresenta non solo la continuità di un’attività storica, ma anche un segnale positivo per il rilancio dei piccoli borghi.",
        quote2: "“Un esempio – conclude il sindaco – di come entusiasmo, legame con il territorio e spirito di iniziativa possano fare la differenza, restituendo vitalità e servizi a una comunità montana che guarda al futuro senza dimenticare le proprie radici.”"
    }
};

export default function AppNewsPaper() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="bg-white border border-stone-200/80 shadow-sm overflow-hidden transition-all duration-300 hover:border-stone-300">

            {/* ACCORDION HEADER TRIGGER */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-6 focus:outline-none bg-stone-50/30 hover:bg-stone-50/80 transition-colors select-none relative"
                aria-expanded={isOpen}
            >
                <div className="space-y-3 flex-1">
                    {/* Static Badge placeholder for collapsed state layout */}
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md">
                        Rassegna Stampa
                    </span>

                    {/* Main Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
                        {ARTICLE_DATA.meta.title}
                    </h2>

                    {/* Collapsed view metadata summary */}
                    <div className="flex items-center gap-2 text-stone-400 text-xs font-medium">
                        <span>{ARTICLE_DATA.meta.date}</span>
                        <span>•</span>
                        <span>Clicca per leggere l&apos;articolo</span>
                    </div>
                </div>

                {/* Interactive Rotating Chevron */}
                <div className="shrink-0 m-5 p-1.5 rounded-full bg-stone-100 text-stone-500 border border-stone-200/40 transition-colors absolute end-0 top-0">
                    <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* ACCORDION EXPANDABLE BODY PANEL */}
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-stone-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
            >
                <div className="overflow-hidden">

                    {/* RICH META DATA ROW (Visible only inside when open) */}
                    <div className="p-6 sm:px-8 sm:py-4 bg-stone-50/50 border-b border-stone-100 flex flex-wrap items-center justify-between gap-4 text-stone-500 text-sm">
                        <div className="mb-1 sm:mb-0">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full transition-colors"
                            >
                                {ARTICLE_DATA.meta.category}
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 group"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={ARTICLE_DATA.meta.author.avatar}
                                    alt={ARTICLE_DATA.meta.author.name}
                                    className="h-6 w-6 rounded-full border border-stone-200 object-cover"
                                />
                                <span className="font-medium text-stone-600">
                                    di <b className="font-semibold">{ARTICLE_DATA.meta.author.name}</b>
                                </span>
                            </a>
                            <span className="text-stone-300">|</span>
                            <time className="font-medium text-stone-600">{ARTICLE_DATA.meta.date}</time>
                        </div>
                    </div>

                    {/* FEATURED IMAGE */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100 border-b border-stone-100 group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={ARTICLE_DATA.featuredImage.src}
                            alt={ARTICLE_DATA.featuredImage.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* ENTRY CONTENT */}
                    <div className="p-6 sm:p-8 space-y-6 text-base sm:text-lg text-stone-700 leading-relaxed">

                        <p className="font-medium text-stone-900 first-letter:text-4xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-2 first-letter:float-left">
                            {ARTICLE_DATA.paragraphs.p1}
                        </p>

                        <p>{ARTICLE_DATA.paragraphs.p2}</p>

                        <p>{ARTICLE_DATA.paragraphs.p3}</p>

                        {/* Mayor Quote 1 */}
                        <blockquote className="pl-4 border-l-4 border-amber-500 bg-amber-50/40 p-4 rounded-r-2xl text-stone-800 italic font-medium my-6 shadow-xs">
                            {ARTICLE_DATA.paragraphs.quote1}
                        </blockquote>

                        <p>{ARTICLE_DATA.paragraphs.p4}</p>

                        <p>{ARTICLE_DATA.paragraphs.p5}</p>

                        {/* Subheading Section */}
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 pt-4 border-t border-stone-100 tracking-tight">
                            {ARTICLE_DATA.paragraphs.subheading}
                        </h3>

                        <p>{ARTICLE_DATA.paragraphs.p6}</p>

                        {/* Mayor Quote 2 */}
                        <blockquote className="pl-4 border-l-4 border-amber-500 bg-amber-50/40 p-4 rounded-r-2xl text-stone-800 italic font-medium my-6 shadow-xs">
                            {ARTICLE_DATA.paragraphs.quote2}
                        </blockquote>

                        {/* Link all'articolo originale */}
                        <div className="pt-6 border-t border-stone-100 flex justify-center sm:justify-end">
                            <a
                                href={ARTICLE_DATA.meta.shareUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 font-medium text-sm hover:bg-stone-50 hover:text-stone-900 transition-all shadow-xs"
                            >
                                Leggi l&apos;articolo su Confinelive
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </article>

    );
}