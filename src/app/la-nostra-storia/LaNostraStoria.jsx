'use client';

import { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../../context/GlobalContext";

/**
 * DICTIONARY LAYER: CENTRALIZED UI STRINGS CONFIGURATION
 * Isolates all presentation-tier copy to maximize maintainability, clean up the JSX tree,
 * and seamlessly prevent any unescaped entities linting issues.
 */
const UI_STRINGS = {
    meta: {
        badge: "Benvenuti a tavola",
        title: "La Nostra Storia",
        subtitle: "Passione, tradizione e amore per il territorio di Collegiove."
    },
    story: {
        paragraph1: {
            prefix: "La ",
            highlight: "Trattoria Bar I Fortunelli",
            suffix: " nasce dal desiderio profondo di custodire, valorizzare e tramandare i sapori autentici della nostra terra. Situati all'ingresso di Collegiove, portiamo in tavola l'antica tradizione culinaria locale in un'atmosfera che profuma di casa, pensata per farti sentire parte della nostra famiglia fin dal primo istante."
        },
        paragraph2: "La nostra è una storia fatta di gesti semplici e immutati nel tempo, il profumo del sugo che borbotta lento fin dalle prime ore del mattino e l'accoglienza calorosa riservata a chiunque varchi la nostra porta. Ogni ricetta che proponiamo racconta un pezzo della nostra vita, un ricordo d'infanzia e un tributo alle nostre radici montane."
    },
    assets: {
        imageAlt: "I segreti della nostra cucina tradizionale",
        secondaryImageAlt: "Scorcio dell'accoglienza alla Trattoria I Fortunelli",
        
        // Nuova configurazione per la galleria immagini
        galleryTitle: "I Nostri Spazi e le Nostre Specialità",
        gallery: [
            { src: "/la-nostra-storia/scaffale1.avif", alt: "Scaffale con i prodotti tipici", styles: "col-span-1 md:col-span-2 aspect-square" },
            { src: "/la-nostra-storia/macchina_caffe.avif", alt: "La nostra macchina del caffè", styles: "col-span-1 md:col-span-2 aspect-square" },
            { src: "/la-nostra-storia/bancone.avif", alt: "Il bancone della trattoria", styles: "col-span-2 md:col-span-2 aspect-[2/1] md:aspect-square" },
            { src: "/la-nostra-storia/affettati.avif", alt: "I nostri affettati locali", styles: "col-span-1 md:col-span-3 aspect-square md:aspect-[2/1]" },
            { src: "/la-nostra-storia/gelato.avif", alt: "Il nostro gelato artigianale", styles: "col-span-1 md:col-span-3 aspect-square md:aspect-[2/1]" }
        ]
    },
    footer: {
        ctaLabel: "Prenota il tuo tavolo",
        ctaDescription: "Chiama ora per riservare un tavolo e vivere l'accoglienza autentica di Collegiove.",
    }
};

/**
 * LA NOSTRA STORIA COMPONENT
 * Renders the historical background, heritage values, and introductory context of the restaurant.
 */
export default function LaNostraStoria() {
    const { businessDetails } = useContext(GlobalContext);

    return (
        <main>
            {/* Main storytelling section */}
            <section className="bg-stone-50 py-5 sm:py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* CHAPTER 1: FOUNDATIONS & ROOTS */}
                    {/* Symmetric 2-column grid layout matching standard page orchestration */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                        {/* Left Column: Context presentation typography stack */}
                        <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase block mb-2">
                                {UI_STRINGS.meta.badge}
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
                                {UI_STRINGS.meta.title}
                            </h2>
                            <p className="text-lg text-stone-500 font-medium mb-6 leading-relaxed">
                                {UI_STRINGS.meta.subtitle}
                            </p>
                            
                            <div className="space-y-4 text-base text-stone-700 leading-relaxed">
                                <p>
                                    {UI_STRINGS.story.paragraph1.prefix}
                                    <strong className="font-bold text-stone-900">{UI_STRINGS.story.paragraph1.highlight}</strong>
                                    {UI_STRINGS.story.paragraph1.suffix}
                                </p>
                                <p>
                                    {UI_STRINGS.story.paragraph2}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: High-quality static photography wrapper frame with hover animation */}
                        <div className="relative w-full aspect-[1/1] rounded-3xl shadow-xl overflow-hidden group">
                            <Image
                                src="/la-nostra-storia/foto.avif"
                                alt={UI_STRINGS.assets.imageAlt}
                                fill
                                sizes="(max-w: 768px) 100vw, 100vw"
                                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                priority
                            />
                        </div>

                    </div>

                    {/* CHAPTER 2: VISUAL GALLERY */}
                    {/* Bento-box style photo grid to showcase the newly added un-tracked assets */}
                    <div className="mt-16 pt-12">
                        <h3 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-10 text-center">
                            {UI_STRINGS.assets.galleryTitle}
                        </h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 lg:gap-6">
                            {UI_STRINGS.assets.gallery.map((image, index) => (
                                <div 
                                    key={index} 
                                    className={`relative w-full rounded-2xl shadow-sm overflow-hidden group ${image.styles}`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-w: 768px) 100vw, 100vw"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="mx-auto max-w-2xl text-base text-stone-600 mb-6">
                            {UI_STRINGS.footer.ctaDescription}
                        </p>
                        <a
                            href={`tel:${businessDetails?.tel1 || businessDetails?.tel2}`}
                            className="inline-block rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow transition-all hover:bg-amber-700 hover:shadow-md"
                        >
                            {UI_STRINGS.footer.ctaLabel}
                        </a>
                    </div>

                </div>
            </section>
        </main>
    );
}