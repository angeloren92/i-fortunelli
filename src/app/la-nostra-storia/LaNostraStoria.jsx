import Link from "next/link";
import Image from "next/image";

export default function LaNostraStoria() {
    return (
        <main>
            <section className="bg-stone-50 py-10 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-2">
                                Benvenuti a tavola
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-6">
                                La Nostra Storia
                            </h2>
                            <div className="space-y-4 text-base text-stone-700 leading-relaxed">
                                <p>
                                    La <strong>Trattoria Bar I Fortunelli</strong> nasce dal desiderio di custodire e tramandare i sapori autentici della nostra terra, portando in tavola l'antica tradizione culinaria locale in un'atmosfera calda, familiare e accogliente.
                                </p>
                                <p>
                                    Ogni giorno selezioniamo con cura ingredienti genuini provenienti dai produttori della zona. Dalla pasta fatta in casa ai piatti tipici della tradizione, ogni ricetta racconta la passione per la buona cucina e l'amore per le nostre radici.
                                </p>
                            </div>

                        </div>

                        <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden group">
                            <Image
                                src="/foto.png"
                                alt="Interno caratteristico del Bar Trattoria I Fortunelli"
                                fill
                                sizes="(max-w-768px) 100vw, 50vw"
                                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>

    );
}