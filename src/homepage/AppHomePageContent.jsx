'use client';

import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";

/**
 * DATI COSTANTI (Spostati fuori dal componente per performance)
 */

// Specialità culinarie per la Galleria Instagram
const instagramPostsData = [
    { id: 1, media_url: '/tagliere_misto.jpg', caption: 'Tagliere misto di salumi e formaggi tipici' },
    { id: 2, media_url: '/pasta_e_fagioli.jpg', caption: 'Pasta e fagioli cremosa secondo tradizione' },
    { id: 3, media_url: '/tartufo_e_guanciale.jpg', caption: 'Specialità: tartufo locale e guanciale croccante' },
    { id: 4, media_url: '/grigliata_mista.jpg', caption: 'Grigliata mista di carne con prodotti locali' },
    { id: 5, media_url: '/tagliata_con_porcini.jpg', caption: 'Tagliata tenera con funghi porcini freschi' },
    { id: 6, media_url: '/panino_gourmet.jpg', caption: 'Panino gourmet con ingredienti del territorio' },
    { id: 7, media_url: '/pinsa_zucca_e_guanciale.jpg', caption: 'Pinsa autunnale: crema di zucca e guanciale' },
    { id: 8, media_url: '/tiramisu.jpg', caption: 'Tiramisù artigianale fatto in casa' }
].map(post => ({
    ...post,
    // Generiamo un permalink statico per semplicità nel mock
    permalink: 'https://www.instagram.com/bar_trattoria_i_fortunelli/'
}));

// Immagini per lo scorrimento infinito nell'Hero Banner
const heroImagesData = [
    { url: "/grigliata_mista.jpg", alt: "Grigliata di carne mista" },
    { url: "/maritozzo_panna.jpg", alt: "Maritozzo con panna fresca" },
    { url: "/panino_gourmet.jpg", alt: "Panino gourmet locale" },
    { url: "/pasta_e_fagioli.jpg", alt: "Pasta e fagioli tradizionale" },
    { url: "/pinsa_boscaiola.jpg", alt: "Pinsa romana boscaiola" },
    { url: "/tagliere_misto.jpg", alt: "Tagliere di salumi e formaggi" },
    { url: "/tiramisu.jpg", alt: "Tiramisù artigianale" },
    { url: "/ravioli_tartufo.jpg", alt: "Ravioli fatti in casa al tartufo" }
];

// Elenco dei servizi offerti
const serviziData = [
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
        label: "Vicino alla Chiesa",
        icon: (
            <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
        )
    }
];

/**
 * COMPONENTE PAGINA PRINCIPALE
 */
export default function AppHomePageContent() {
    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-stone-50">

            {/* SEZIONE 1: Hero Banner Dinamico con Scorrimento Infinito */}
            <section className="relative w-full bg-stone-500 flex items-center justify-center min-h-[85dvh] overflow-hidden">

                {/* Traccia di sfondo per il Carousel (con effetto scorrimento infinito) */}
                <div className="absolute inset-0 w-full h-full flex items-center opacity-30 select-none pointer-events-none overflow-hidden aria-hidden=true">
                    <div className="w-full h-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0%,_black_15%,_black_85%,transparent_100%)]">

                        {/* Creazione dell'animazione: usiamo due blocchi identici che si inseguono */}
                        {[...Array(2)].map((_, blockIndex) => (
                            <div key={`hero-track-${blockIndex}`} className="flex items-center h-full animate-infinite-scroll">
                                {heroImagesData.map((item, index) => {

                                    const isFirstImage = blockIndex === 0 && index === 0;

                                    return (
                                        <div
                                            key={`hero-img-${blockIndex}-${index}`}
                                            className="relative h-full min-h-[85vh] aspect-[4/3] flex-shrink-0 shadow-md"
                                        >
                                            <Image
                                                src={item.url}
                                                alt={item.alt}
                                                fill
                                                priority={isFirstImage}
                                                loading={isFirstImage ? undefined : "lazy"}
                                                sizes="(max-w: 768px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testi Principali e Call-to-Action sovrapposti */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 py-12">
                    <span className="inline-block text-amber-400 font-semibold tracking-widest text-sm uppercase mb-3">
                        Collegiove (RI)
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-md mb-6">
                        Bar Trattoria I Fortunelli
                    </h1>
                    <p className="text-lg md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Nel cuore di un piccolo borgo tra le montagne, la tradizione incontra l&apos;autenticità dei sapori locali.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+393491061911" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-full transition duration-300 shadow-lg text-center transform hover:-translate-y-0.5">
                            Prenota un Tavolo
                        </a>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: Presentazione Identità / Chi Siamo */}
            <section className="py-10 md:py-20 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

                    {/* Colonna Sinistra: Testi e Griglia Servizi */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-6 tracking-tight">
                            Benvenuti a I Fortunelli
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-4 text-base md:text-lg">
                            Nel cuore di Collegiove, tra il verde incontaminato delle montagne e l&apos;atmosfera autentica di un piccolo borgo, nasce uno spazio che è un po&apos; casa e un po&apos; tradizione.
                        </p>
                        <p className="text-stone-600 leading-relaxed mb-6 text-base md:text-lg">
                            Siamo Bar, Trattoria, Bottega alimentare e Tabacchi: il punto di ritrovo ideale per chiunque voglia riscoprire i sapori di una volta.
                        </p>

                        {/* Griglia Icone: Elenco servizi locali */}
                        <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-stone-200">
                            {serviziData.map((servizio, index) => (
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

                    {/* Colonna Destra: Immagine Statica del Bar */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden group">
                            <Image
                                src="/bar.png"
                                alt="Facciata Bar Trattoria I Fortunelli"
                                fill
                                // FIX SIZES: Usata sintassi CSS corretta
                                sizes="(max-w: 768px) 100vw, 50vw"
                                // FIX SCALE: Usata classe arbitraria scale-[1.02] al posto di scale-102
                                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 3: Galleria Visiva / Social Proof (Mock Instagram) */}
            <section className="py-10 md:py-20 bg-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 tracking-tight mb-3">La Nostra Galleria Instagram</h2>
                        <p className="text-stone-600">Scatti dalla nostra cucina e momenti trascorsi insieme nel borgo</p>
                    </div>

                    {/* Griglia delle Immagini Social */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                        {instagramPostsData.map(post => (
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
                                    // FIX SIZES: Usata sintassi CSS corretta
                                    sizes="(max-w: 640px) 50vw, (max-w: 1024px) 25vw, 12.5vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                {/* Overlay con Caption visibile al passaggio del mouse */}
                                <div className="absolute inset-0 bg-stone-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 px-4">
                                    <p className="text-white text-center text-xs font-medium line-clamp-3">{post.caption}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Pulsante Call-to-Action verso il profilo Instagram reale */}
                    <div className="text-center mt-12">
                        <a
                            href="https://www.instagram.com/bar_trattoria_i_fortunelli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stone-800 hover:bg-stone-900 text-white font-bold py-3.5 px-8 rounded-full transition duration-300 inline-flex items-center shadow-md transform hover:-translate-y-0.5"
                        >
                            Seguici su Instagram <span className="ml-2 text-xl" aria-hidden="true">📸</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* SEZIONE 4: Logistica / Orari e Mappa Geocalizzata */}
            <section className="py-10 md:py-20 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-12">

                    {/* Colonna Testi: Orari e Info Contatto */}
                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-8 tracking-tight">Orari e Dove Trovarci</h2>

                            {/* Scheda Orari di Apertura */}
                            <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <h3 className="font-bold text-stone-800 text-lg mb-3 flex items-center">
                                    <span className="mr-2" aria-hidden="true">🕒</span> Orari di Apertura:
                                </h3>
                                <ul className="space-y-2 text-stone-700 text-base">
                                    {/* Evidenziamo il giorno di chiusura */}
                                    <li className="flex justify-between border-b border-stone-100 pb-1 font-medium text-amber-700 bg-amber-50/50 px-2 rounded">
                                        <span>Martedì:</span> <span>Chiuso</span>
                                    </li>
                                    <li className="flex justify-between border-b border-stone-100 pb-1 px-2">
                                        <span>Mercoledì - Lunedì:</span>
                                        <span>08:00 - 23:00</span>
                                    </li>
                                    <li className="text-sm text-stone-500 pt-1">
                                        * Gli orari potrebbero subire variazioni durante le Festività
                                    </li>
                                </ul>
                            </div>

                            {/* Scheda Posizione e Contatti Diretti */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <h3 className="font-bold text-stone-800 text-lg mb-3 flex items-center">
                                    <span className="mr-2" aria-hidden="true">📍</span> Posizione e Contatti:
                                </h3>
                                <p className="text-stone-700 text-base mb-1 font-medium">Bar Trattoria I Fortunelli</p>
                                <p className="text-stone-600 text-base mb-4">Via Umberto I 135, 02020 Collegiove (RI)</p>
                                <div className="text-stone-800 font-semibold pt-2 border-t border-stone-100 flex items-center justify-between">
                                    <span>Telefono: <a href="tel:+393491061911" className="text-emerald-700 hover:underline">+39 349 106 1911</a></span>
                                    {/* Link Diretto a WhatsApp */}
                                    <a
                                        href="https://wa.me/393491061911"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-700 hover:text-emerald-500 transition-colors inline-flex items-center align-middle text-2xl"
                                        aria-label="Chatta con noi su WhatsApp"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonna Mappa: Integrazione Google Maps */}
                    <div className="md:w-1/2 w-full flex flex-col">
                        <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-center">
                            <span className="mr-2" aria-hidden="true">🗺️</span> La Nostra Posizione nel Borgo
                        </h3>
                        {/* Contenitore Mappa con altezza minima fissa per responsività */}
                        <div className="w-full h-full min-h-[350px] rounded-2xl shadow-lg overflow-hidden border border-stone-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.4399398210924!2d13.037742631873435!3d42.17425091920932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132fbda9931d256d%3A0x77ec4cadda7b9e85!2sBar%20Trattoria%20%22I%20Fortunelli%22!5e0!3m2!1sit!2sit!4v1780914452471!5m2!1sit!2sit"
                                className="w-full h-full min-h-[350px]"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mappa Google Maps di Bar Trattoria I Fortunelli"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}