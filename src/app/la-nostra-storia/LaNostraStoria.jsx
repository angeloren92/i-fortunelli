import Link from "next/link";

export default function LaNostraStoria() {
    return (
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
                    
                    <div className="bg-stone-200 rounded-3xl h-80 w-full flex items-center justify-center border border-stone-300/50 shadow-inner">
                        <span className="text-stone-500 font-medium italic">[ Foto della Trattoria ]</span>
                    </div>
                </div>

            </div>
        </section>
    );
}