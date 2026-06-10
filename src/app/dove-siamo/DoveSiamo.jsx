'use client';

import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCar, FaMotorcycle } from "react-icons/fa";
import { GlobalContext } from '@/context/GlobalContext';
import { useContext } from "react";

/**
 * DICTIONARY LAYER: CENTRALIZED UI STRINGS CONFIGURATION
 * All visible textual literals are isolated here to maximize maintainability,
 * support easier localization (i18n) updates, and seamlessly resolve
 * unescaped JSX entity linting errors.
 */
const UI_STRINGS = {
    hero: {
        badge: "Pianifica la tua visita",
        title: "Raggiungi I Fortunelli",
        description: "Ci trovi all'ingresso di Collegiove, pronti ad accoglierti dopo la tua escursione, il tuo giro in moto o per un pranzo della domenica in totale relax."
    },
    addressCard: {
        heading: "Il Nostro Indirizzo",
        brandName: "Bar Trattoria I Fortunelli",
        fullAddress: "Via Roma 112, 02020 Collegiove (RI)",
        phoneLabel: "Telefono:",
        whatsappAriaLabel: "Chatta con noi su WhatsApp"
    },
    hoursCard: {
        heading: "Orari di Apertura",
        closedLabel: "Chiuso",
        closedDay: "Martedì",
        timeRange: "08:00 - 23:00",
        otherDays: ["Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica", "Lunedì"],
        weekendDays: ["Sabato", "Domenica"],
        holidayDisclaimer: "* Nota: Durante i giorni festivi o la settimana di Ferragosto gli orari potrebbero variare. Consigliamo sempre un colpo di telefono preventivo!"
    },
    mapCard: {
        title: "Mappa Bar Trattoria I Fortunelli"
    },
    directionsCard: {
        heading: "Come Arrivare in Auto e Moto",
        rome: {
            prefix: "Da Roma (circa 50 min):",
            highlightA: "A24 Roma-L&apos;Aquila", // Escaped L'Aquila
            highlightB: "Carsoli-Oricola",
            suffix: ". Prosegui sulla Strada Statale in direzione del Lago del Turano, seguendo poi i cartelli stradali panoramici per Collegiove. La strada è comoda, asfaltata di recente e amatissima da chi viaggia su due ruote."
        },
        rieti: {
            prefix: "Da Rieti (circa 40 min):",
            suffix: "Esci dalla città in direzione del bivio di Torano / Lago del Turano e risali lungo la strada provinciale godendoti la vista sulle vette della riserva naturale."
        }
    },
    parkingCard: {
        heading: "Parcheggi e Sosta Comoda",
        car: {
            prefix: "Per le Auto:",
            suffix: "Troverai ampio spazio di parcheggio gratuito lungo Via Roma e nelle immediate vicinanze dell&apos;ingresso del paese, a pochissimi passi a piedi dalla nostra Trattoria."
        },
        motorcycle: {
            prefix: "Per Moto e Bici:",
            suffix: "Ampio spazio di sosta adiacente perfetto per tenere le vostre due ruote sotto controllo e in totale sicurezza mentre vi godete il pranzo o un aperitivo fresco."
        }
    }
};

/**
 * DOVE SIAMO COMPONENT
 * Renders the structural layout for location details, operational hours, interactive map,
 * driving directions, and parking accessibility information.
 */
export default function DoveSiamo() {
    // Consume system dynamic environment states from GlobalContext provider
    const { businessDetails } = useContext(GlobalContext);

    return (
        <main className="bg-stone-50 min-h-screen py-5 sm:py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* 1. HERO HEADER DELLA PAGINA */}
                <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                        {UI_STRINGS.hero.badge}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                        {UI_STRINGS.hero.title}
                    </h1>
                    <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                        {UI_STRINGS.hero.description}
                    </p>
                </header>

                {/* 2. LAYOUT PRINCIPALE A DUE COLONNE (INFO VS MAPPA) */}
                {/* 12-column grid configuration with mobile-first responsiveness */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">

                    {/* COLONNA SINISTRA: LOGISTICA, ORARI E CONTATTI (5/12) */}
                    {/* Vertical stack managing cards spacing */}
                    <div className="lg:col-span-5 flex flex-col gap-8">

                        {/* SCHEDA: POSIZIONE E CONTATTI RAPIDI */}
                        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
                            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                <span className="text-amber-600"><FaMapMarkerAlt aria-hidden="true" /></span> {UI_STRINGS.addressCard.heading}
                            </h2>
                            <p className="text-stone-800 font-semibold text-lg">{UI_STRINGS.addressCard.brandName}</p>
                            <p className="text-stone-600 text-base mt-1 mb-6">{UI_STRINGS.addressCard.fullAddress}</p>

                            {/* Dynamic contact links layer mapping businessDetails state */}
                            <div className="text-stone-800 font-semibold pt-4 border-t border-stone-100 space-y-3">
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-emerald-700 flex-shrink-0" aria-hidden="true" />
                                    <span>{UI_STRINGS.addressCard.phoneLabel}</span>
                                    <a href={`tel:${businessDetails.tel1}`} className="text-emerald-700 hover:underline">{businessDetails.tel1}</a>
                                    <a
                                        href={businessDetails.wa1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-700 hover:text-emerald-500 transition-colors text-2xl ml-auto"
                                        aria-label={UI_STRINGS.addressCard.whatsappAriaLabel}
                                    >
                                        <FaWhatsapp aria-hidden="true" />
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-emerald-700 flex-shrink-0" aria-hidden="true" />
                                    <span>{UI_STRINGS.addressCard.phoneLabel}</span>
                                    <a href={`tel:${businessDetails.tel2}`} className="text-emerald-700 hover:underline">{businessDetails.tel2}</a>
                                    <a
                                        href={businessDetails.wa2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-700 hover:text-emerald-500 transition-colors text-2xl ml-auto"
                                        aria-label={UI_STRINGS.addressCard.whatsappAriaLabel}
                                    >
                                        <FaWhatsapp aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* SCHEDA: ORARI DI APERTURA DETTAGLIATI */}
                        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
                            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                <span className="text-amber-600"><FaClock aria-hidden="true" /></span> {UI_STRINGS.hoursCard.heading}
                            </h2>
                            <ul className="space-y-3 text-stone-700">
                                {/* Closing Day Custom Rendering */}
                                <li className="flex justify-between border-b border-stone-100 pb-2 font-medium text-amber-700 bg-amber-50/60 px-3 py-1.5 rounded-xl">
                                    <span>{UI_STRINGS.hoursCard.closedDay}</span>
                                    <span className="font-semibold">{UI_STRINGS.hoursCard.closedLabel}</span>
                                </li>
                                {/* Opening Days Array Rendering mapping text dictionary */}
                                {UI_STRINGS.hoursCard.otherDays.map((giorno) => (
                                    <li key={giorno} className="flex justify-between border-b border-stone-100 pb-2 px-3 py-1">
                                        <span className={UI_STRINGS.hoursCard.weekendDays.includes(giorno) ? "font-semibold text-stone-900" : ""}>{giorno}</span>
                                        <span>{UI_STRINGS.hoursCard.timeRange}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-stone-500 italic px-3">
                                {UI_STRINGS.hoursCard.holidayDisclaimer}
                            </p>
                        </section>
                    </div>

                    {/* COLONNA DESTRA: MAPPA INTERATTIVA MAXI (7/12) */}
                    {/* Sticky positioning enabled on desktop view for enhanced UX */}
                    <aside className="lg:col-span-7 flex flex-col lg:sticky lg:top-10 h-full min-h-[450px]">
                        <div className="w-full h-full rounded-3xl shadow-md overflow-hidden border border-stone-200 relative group flex-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.4399398210924!2d13.037742631873435!3d42.17425091920932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132fbda9931d256d%3A0x77ec4cadda7b9e85!2sBar%20Trattoria%20%22I%20Fortunelli%22!5e0!3m2!1sit!2sit!4v1780914452471!5m2!1sit!2sit"
                                className="w-full h-full absolute inset-0"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={UI_STRINGS.mapCard.title}
                            ></iframe>
                        </div>
                    </aside>
                </div>

                {/* 3. SEZIONE ESPANSA: COME RAGGIUNGERCI & PARCHEGGI */}
                {/* Descriptive content matrix layout with dynamic textual literal parsing */}
                <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-200 pt-12 sm:pt-16">

                    {/* GUIDA AI PERCORSI */}
                    <article className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-sm">
                        <h3 className="text-xl font-bold text-stone-900 mb-5 flex items-center gap-3">
                            🚗 {UI_STRINGS.directionsCard.heading}
                        </h3>
                        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                <strong>{UI_STRINGS.directionsCard.rome.prefix}</strong> Prendi l&apos;autostrada <strong>{UI_STRINGS.directionsCard.rome.highlightA}</strong> e prendi l&apos;uscita <strong>{UI_STRINGS.directionsCard.rome.highlightB}</strong>{UI_STRINGS.directionsCard.rome.suffix}
                            </p>
                            <p>
                                <strong>{UI_STRINGS.directionsCard.rieti.prefix}</strong> {UI_STRINGS.directionsCard.rieti.suffix}
                            </p>
                        </div>
                    </article>

                    {/* PARCHEGGI E ACCESSIBILITÀ */}
                    <article className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-sm space-y-5">
                        <h3 className="text-xl font-bold text-stone-900 mb-5 flex items-center gap-3">
                            🅿️ {UI_STRINGS.parkingCard.heading}
                        </h3>
                        
                        <div className="flex items-start gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-100 loam-relaxed">
                            <span className="text-amber-600 mt-1 flex-shrink-0" aria-hidden="true"><FaCar size={20} /></span>
                            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                <strong>{UI_STRINGS.parkingCard.car.prefix}</strong> {UI_STRINGS.parkingCard.car.suffix}
                            </p>
                        </div>
                        
                        <div className="flex items-start gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-100 loam-relaxed">
                            <span className="text-amber-600 mt-1 flex-shrink-0" aria-hidden="true"><FaMotorcycle size={20} /></span>
                            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                <strong>{UI_STRINGS.parkingCard.motorcycle.prefix}</strong> {UI_STRINGS.parkingCard.motorcycle.suffix}
                            </p>
                        </div>
                    </article>
                </footer>

            </div>
        </main>
    );
}