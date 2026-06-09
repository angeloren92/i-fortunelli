'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

/**
 * AppHomePageContent Component
 * Core layout orchestration for the landing page of "Bar Trattoria I Fortunelli".
 * Features an auto-scrolling cinematic hero banner, historical context, 
 * an interactive Instagram-linked media gallery, and dynamic contact/location components.
 */
export default function AppHomePageContent() {
    // Mock data for Instagram posts integration
    const instagramPosts = [
        {
            id: 1,
            media_url: '/tagliere_misto.jpg',
            permalink: 'https://www.instagram.com/p/mock5/',
            caption: 'Abbondante tagliere misto di salumi e formaggi tipici di Collegiove'
        },
        {
            id: 2,
            media_url: '/pasta_e_fagioli.jpg',
            permalink: 'https://www.instagram.com/p/mock4/',
            caption: 'Tradizionale pasta e fagioli ricca e cremosa'
        },
        {
            id: 3,
            media_url: '/tartufo_e_guanciale.jpg',
            permalink: 'https://www.instagram.com/p/mock6/',
            caption: 'Specialità della casa con tartufo locale e guanciale croccante'
        },
        {
            id: 4,
            media_url: '/grigliata_mista.jpg',
            permalink: 'https://www.instagram.com/p/mock1/',
            caption: 'Ricca grigliata mista di carne con prodotti locali'
        },
        {
            id: 5,
            media_url: '/tagliata_con_porcini.jpg',
            permalink: 'https://www.instagram.com/p/mock1/',
            caption: 'Tagliata di carne tenera accompagnata da funghi porcini'
        },
        {
            id: 6,
            media_url: '/panino_gourmet.jpg',
            permalink: 'https://www.instagram.com/p/mock3/',
            caption: 'Panino gourmet farcito con ingredienti del territorio'
        },
        {
            id: 7,
            media_url: '/pinsa_zucca_e_guanciale.jpg',
            permalink: 'https://www.instagram.com/p/mock6/',
            caption: 'Pinsa autunnale con crema di zucca e guanciale del posto'
        },
        {
            id: 8,
            media_url: '/tiramisu.jpg',
            permalink: 'https://www.instagram.com/p/mock6/',
            caption: 'Tiramisù artigianale fatto in casa secondo la ricetta classica'
        }
    ];

    // Array of sliding images for the background video effect
    const heroImages = [
        { url: "/grigliata_mista.jpg", alt: "Ricca grigliata mista di carne con prodotti locali" },
        { url: "/maritozzo_panna.jpg", alt: "Maritozzo artigianale con panna fresca" },
        { url: "/panino_gourmet.jpg", alt: "Panino gourmet farcito con ingredienti del territorio" },
        { url: "/pasta_e_fagioli.jpg", alt: "Tradizionale pasta e fagioli ricca e cremosa" },
        { url: "/pasta_guanciale_e_carciofini.jpg", alt: "Primo piatto di pasta con guanciale croccante e carciofini" },
        { url: "/pinsa_boscaiola.jpg", alt: "Fragante pinsa romana alla boscaiola" },
        { url: "/pinsa_friarelli_fior_di_latte.jpg", alt: "Pinsa in teglia con friarielli e fior di latte locale" },
        { url: "/pinsa_mortadella_e_pistacchio.jpg", alt: "Pinsa gourmet con mortadella e granella di pistacchio" },
        { url: "/pinsa_zucca_e_guanciale.jpg", alt: "Pinsa autunnale con crema di zucca e guanciale del posto" },
        { url: "/polenta_e_salsiccia.jpg", alt: "Polenta calda servita con salsiccia locale al sugo" },
        { url: "/ravioli_tartufo.jpg", alt: "Ravioli fatti in casa con crema al tartufo delle nostre montagne" },
        { url: "/scaloppine_con_pancetta.jpg", alt: "Tenere scaloppine di carne impreziosite con pancetta" },
        { url: "/spaghetti.jpg", alt: "Un classico piatto di spaghetti della traditione italiana" },
        { url: "/stufato_di_carne.jpg", alt: "Stufato di carne locale cotto lentamente come una volta" },
        { url: "/tagliata_con_porcini.jpg", alt: "Tagliata di carne tenera accompagnata da funghi porcini" },
        { url: "/tagliere_misto.jpg", alt: "Abbondante tagliere misto di salumi e formaggi tipici di Collegiove" },
        { url: "/tartufo_e_guanciale.jpg", alt: "Specialità della casa con tartufo locale e guanciale croccante" },
        { url: "/tiramisu.jpg", alt: "Tiramisù artigianale fatto in casa secondo la ricetta classica" }
    ];

    //Array with services
    const servizi = [
        {
            label: "Tabacchi",
            icon: (
                <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.008m0 2.25v.008m0 2.25v.008M12 18a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21V5.25A2.25 2.25 0 0 0 17.25 3H6.75A2.25 2.25 0 0 0 4.5 5.25V21m15 0H4.5m15 0v-4.5A2.25 2.25 0 0 0 17.25 14.25H6.75A2.25 2.25 0 0 0 4.5 16.5V21" />
                </svg>
            )
        },
        {
            label: "Bancomat Paese",
            icon: (
                <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            )
        },
        {
            label: "Accesso Disabili",
            icon: (
                <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 1-3.15 0 1.575 1.575 0 0 1 3.15 0ZM6 10.5h3v4.5H6.75A.75.75 0 0 0 6 15.75v3.75a.75.75 0 0 0 .75.75h2.25M13.5 10.5H21v1.5h-5.25v7.5h-1.5V12h-3v7.5h-1.5V10.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75a3 3 0 0 0-3-3H6.75a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h4.5a3 3 0 0 0 3-3v-7.5Z" />
                </svg>
            )
        },
        {
            label: "Parcheggio",
            icon: (
                <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h7.5m3 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.5m-16.5-3h16.5M3 12h18M3.104 15.75L4.5 12h15l1.396 3.75H3.104Z" />
                </svg>
            )
        },
        {
            label: "Vicino alla Chiesa",
            icon: (
                <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
            )
        },
        {
            label: "Vista Panoramica",
            icon: (
                <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25V18m0 0l-2.25-2.25M12 18l2.25-2.25" />
                </svg>
            )
        }
    ];

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-stone-50">

            {/* SECTION 1: Dynamic Hero Banner with Infinite Horizontal Scroll Video Effect */}
            <section className="relative w-full bg-stone-500 flex items-center justify-center min-h-[85dvh] overflow-hidden">

                {/* Background Carousel track adjusted to match container height exactly */}
                <div className="absolute inset-0 w-full h-full flex items-center opacity-30 select-none pointer-events-none overflow-hidden">
                    <div className="w-full h-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0%,_black_15%,_black_85%,transparent_100%)]">

                        {/* Original track block - Sostituito con Next.js Image e box ad aspect ratio fisso */}
                        <div className="flex items-center h-full animate-infinite-scroll">
                            {heroImages.map((item, index) => (
                                <div
                                    key={`hero-orig-${index}`}
                                    className="relative h-full min-h-[85vh] aspect-[4/3] flex-shrink-0 shadow-md"
                                >
                                    <Image
                                        src={item.url}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-w-768px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Duplicated track block to guarantee loop continuity */}
                        <div className="flex items-center h-full animate-infinite-scroll" aria-hidden="true">
                            {heroImages.map((item, index) => (
                                <div
                                    key={`hero-dup-${index}`}
                                    className="relative h-full min-h-[85vh] aspect-[4/3] flex-shrink-0 shadow-md"
                                >
                                    <Image
                                        src={item.url}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-w-768px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Heading Text and CTAs */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 py-12">
                    <span className="inline-block text-amber-400 font-semibold tracking-widest text-sm uppercase mb-3">
                        Collegiove (RI)
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-md mb-6">
                        Bar Trattoria I Fortunelli
                    </h1>
                    <p className="text-lg md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Nel cuore di un piccolo borgo immerso tra le montagne e la natura, la tradizione incontra l'autenticità dei sapori locali.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+393491061911" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-full transition duration-300 shadow-lg text-center transform hover:-translate-y-0.5">
                            Prenota un Tavolo
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Identity Presentation / Brand Narrative */}
            <section className="py-10 md:py-20 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

                    {/* COLONNA SINISTRA: TESTI + GRIGLIA ICONE */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-6 tracking-tight">
                            Benvenuti a I Fortunelli
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-4 text-base md:text-lg">
                            Nel cuore di Collegiove, tra il verde incontaminato delle montagne e l'atmosfera autentica di un piccolo borgo, nasce uno spazio che è un po' casa e un po' tradizione.
                        </p>
                        <p className="text-stone-600 leading-relaxed mb-6 text-base md:text-lg">
                            Siamo Bar, Trattoria, Bottega alimentare e Tabacchi: il punto di ritrovo ideale per chiunque voglia riscoprire i sapori di una volta.
                        </p>

                        {/* NUOVA SEZIONE ICONE: Griglia di servizi locali */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-stone-200">
                            {servizi.map((servizio, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 bg-white px-3 py-2.5 rounded-xl border border-stone-200/60 shadow-sm"
                                >
                                    <div className="flex-shrink-0 p-1.5 bg-amber-50 rounded-lg">
                                        {servizio.icon}
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium text-stone-700 leading-tight">
                                        {servizio.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLONNA DESTRA: IMMAGINE */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden group">
                            <Image
                                src="/bar.png"
                                alt="Interno caratteristico del Bar Trattoria I Fortunelli"
                                fill
                                sizes="(max-w-768px) 100vw, 50vw"
                                className="object-cover transition duration-500 group-hover:scale-102"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Social Proof / Visual Media Instagram Gallery Grid */}
            <section className="py-10 md:py-20 bg-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 tracking-tight mb-3">La Nostra Galleria Instagram</h2>
                        <p className="text-stone-600">Scatti dalla nostra cucina e momenti trascorsi insieme nel borgo</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                        {instagramPosts.map(post => (
                            <a
                                key={post.id}
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full aspect-square group overflow-hidden rounded-xl shadow-md bg-stone-300"
                            >
                                <Image
                                    src={post.media_url}
                                    alt={post.caption}
                                    fill
                                    sizes="(max-w-640px) 50vw, (max-w-1024px) 25vw, 12.5vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-stone-950/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 px-6">
                                    <p className="text-white text-center text-sm font-medium line-clamp-3">{post.caption}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="https://www.instagram.com/bar_trattoria_i_fortunelli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stone-800 hover:bg-stone-900 text-white font-bold py-3.5 px-8 rounded-full transition duration-300 inline-flex items-center shadow-md transform hover:-translate-y-0.5"
                        >
                            Seguici su Instagram <span className="ml-2 text-xl">📸</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Logistics / Operational Hours and Geo-location Components */}
            <section className="py-10 md:py-20 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-12">
                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-8 tracking-tight">Orari e Dove Trovarci</h2>

                            <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <h3 className="font-bold text-stone-800 text-lg mb-3 flex items-center">
                                    <span className="mr-2">🕒</span> Orari di Apertura:
                                </h3>
                                <ul className="space-y-2 text-stone-700 text-base">
                                    <li className="flex justify-between border-b border-stone-100 pb-1 font-medium text-amber-700 bg-amber-50/50 px-2 rounded">
                                        <span>Martedì:</span> <span>Chiuso</span>
                                    </li>
                                    <li className="flex justify-between border-b border-stone-100 pb-1 px-2">
                                        <span>Mercoledì - Lunedì:</span>
                                        <span>08:00 - 23:00</span>
                                    </li>
                                    <li>
                                        Gli orari potrebbero subire variazioni durante le Festività
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <h3 className="font-bold text-stone-800 text-lg mb-3 flex items-center">
                                    <span className="mr-2">📍</span> Posizione e Contatti:
                                </h3>
                                <p className="text-stone-700 text-base mb-1 font-medium">Bar Trattoria I Fortunelli</p>
                                <p className="text-stone-600 text-base mb-4">Via Umberto I 135, 02020 Collegiove (RI)</p>
                                <p className="text-stone-800 font-semibold pt-2 border-t border-stone-100">
                                    Telefono: <a href="tel:+393491061911" className="text-emerald-700 hover:underline">+39 349 106 1911</a> <a
                                        href="https://wa.me/393491061911"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-700 hover:text-emerald-500 transition-colors inline-flex items-center align-middle ml-2 text-xl"
                                        aria-label="Chatta su WhatsApp"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fixed Maps Layout */}
                    <div className="md:w-1/2 w-full flex flex-col">
                        <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-center">
                            <span className="mr-2">🗺️</span> La Nostra Posizione nel Borgo
                        </h3>
                        <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden border border-stone-200 min-h-[350px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.4399398210924!2d13.037742631873435!3d42.17425091920932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132fbda9931d256d%3A0x77ec4cadda7b9e85!2sBar%20Trattoria%20%22I%20Fortunelli%22!5e0!3m2!1sit!2sit!4v1780914452471!5m2!1sit!2sit"
                                className="w-full h-full min-h-[350px]"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}