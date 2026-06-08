'use client';

import Link from "next/link";
// Se usi react-icons, tieni queste importazioni, altrimenti puoi sostituirle con gli SVG nativi sotto
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCar, FaMotorcycle } from "react-icons/fa";

export default function DoveSiamo() {
    return (
        <main className="bg-stone-50 min-h-screen py-10 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* 1. HERO HEADER DELLA PAGINA */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                        Pianifica la tua visita
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                        Raggiungi I Fortunelli
                    </h1>
                    <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                        Ci trovi all&apos;ingresso di Collegiove, pronti ad accoglierti dopo la tua escursione, il tuo giro in moto o per un pranzo della domenica in totale relax.
                    </p>
                </div>

                {/* 2. LAYOUT PRINCIPALE A DUE COLONNE (INFO VS MAPPA) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
                    
                    {/* COLONNA SINISTRA: LOGISTICA, ORARI E CONTATTI (5/12) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                        
                        {/* SCHEDA: POSIZIONE E CONTATTI RAPIDI */}
                        <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm">
                            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                <span className="text-amber-600"><FaMapMarkerAlt /></span> Il Nostro Indirizzo
                            </h2>
                            <p className="text-stone-800 font-semibold text-lg">Bar Trattoria I Fortunelli</p>
                            <p className="text-stone-600 text-base mt-1 mb-6">Via Roma 112, 02020 Collegiove (RI)</p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-stone-100">
                                <Link 
                                    href="tel:+393332510720"
                                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-xl bg-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 transition-colors"
                                >
                                    <FaPhoneAlt /> Chiama Ora
                                </Link>
                                <Link 
                                    href="https://wa.me/393332510720"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                                >
                                    <FaWhatsapp className="text-lg" /> WhatsApp
                                </Link>
                            </div>
                        </div>

                        {/* SCHEDA: ORARI DI APERTURA DETTAGLIATI */}
                        <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm flex-1">
                            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                <span className="text-amber-600"><FaClock /></span> Orari di Apertura
                            </h2>
                            <ul className="space-y-3 text-stone-700">
                                <li className="flex justify-between border-b border-stone-100 pb-2 font-medium text-amber-700 bg-amber-50/60 px-3 py-1.5 rounded-xl">
                                    <span>Martedì</span>
                                    <span className="font-semibold">Chiuso</span>
                                </li>
                                <li className="flex justify-between border-b border-stone-100 pb-2 px-3 py-1">
                                    <span>Mercoledì</span>
                                    <span>08:00 - 23:00</span>
                                </li>
                                <li className="flex justify-between border-b border-stone-100 pb-2 px-3 py-1">
                                    <span>Giovedì</span>
                                    <span>08:00 - 23:00</span>
                                </li>
                                <li className="flex justify-between border-b border-stone-100 pb-2 px-3 py-1">
                                    <span>Venerdì</span>
                                    <span>08:00 - 23:00</span>
                                </li>
                                <li className="flex justify-between border-b border-stone-100 pb-2 px-3 py-1 font-semibold text-stone-900">
                                    <span>Sabato</span>
                                    <span>08:00 - 23:00</span>
                                </li>
                                <li className="flex justify-between border-b border-stone-100 pb-2 px-3 py-1 font-semibold text-stone-900">
                                    <span>Domenica</span>
                                    <span>08:00 - 23:00</span>
                                </li>
                                <li className="flex justify-between px-3 py-1">
                                    <span>Lunedì</span>
                                    <span>08:00 - 23:00</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-xs text-stone-500 italic px-3">
                                * Nota: Durante i giorni festivi o la settimana di Ferragosto gli orari potrebbero variare. Consigliamo sempre un colpo di telefono preventivo!
                            </p>
                        </div>
                    </div>

                    {/* COLONNA DESTRA: MAPPA INTERATTIVA MAXI (7/12) */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="w-full h-full rounded-3xl shadow-md overflow-hidden border border-stone-200 min-h-[450px] relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.4399398210924!2d13.037742631873435!3d42.17425091920932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132fbda9931d256d%3A0x77ec4cadda7b9e85!2sBar%20Trattoria%20%22I%20Fortunelli%22!5e0!3m2!1sit!2sit!4v1780914452471!5m2!1sit!2sit"
                                className="w-full h-full min-h-[450px] absolute inset-0"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>

                {/* 3. SEZIONE ESPANSA: COME RAGGIUNGERCI & PARCHEGGI (La vera espansione informativa) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-200 pt-16">
                    
                    {/* GUIDA AI PERCORSI */}
                    <div className="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm">
                        <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                            🚗 Come Arrivare in Auto e Moto
                        </h3>
                        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                <strong>Da Roma (circa 50 min):</strong> Prendi l'autostrada <strong>A24 Roma-L'Aquila</strong> e prendi l'uscita <strong>Carsoli-Oricola</strong>. Prosegui sulla Strada Statale in direzione del Lago del Turano, seguendo poi i cartelli stradali panoramici per Collegiove. La strada è comoda, asfaltata di recente e amatissima da chi viaggia su due ruote.
                            </p>
                            <p>
                                <strong>Da Rieti (circa 40 min):</strong> Esci dalla città in direzione del bivio di Torano / Lago del Turano e risali lungo la strada provinciale godendoti la vista sulle vette della riserva naturale.
                            </p>
                        </div>
                    </div>

                    {/* PARCHEGGI E ACCESSIBILITÀ */}
                    <div className="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                🅿️ Parcheggi e Sosta Comoda
                            </h3>
                            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                                <div className="flex items-start gap-3">
                                    <span className="text-amber-600 mt-1"><FaCar /></span>
                                    <p>
                                        <strong>Per le Auto:</strong> Troverai ampio spazio di parcheggio gratuito lungo Via Roma e nelle immediate vicinanze dell'ingresso del paese, a pochissimi passi a piedi dalla nostra Trattoria.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-amber-600 mt-1"><FaMotorcycle /></span>
                                    <p>
                                        <strong>Per Moto e Bici:</strong> Ampio spazio di sosta adiacente perfetto per tenere le vostre due ruote sotto controllo e in totale sicurezza mentre vi godete il pranzo o un aperitivo fresco.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}