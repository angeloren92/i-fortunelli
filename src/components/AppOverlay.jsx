"use client";

import { useEffect } from 'react';

export default function AppOverlay({ open, onClose, type }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    if (!open) return null;

    const content = type === 'privacy' ? (
        <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
            <h3 className="text-xl font-bold text-stone-900 mb-2">Privacy Policy</h3>
            <p>
                Benvenuto sul sito di <strong>I Fortunelli</strong>. La trasparenza e la tutela dei tuoi dati personali sono una nostra priorità. Di seguito ti spieghiamo in modo semplice come gestiamo le informazioni che decidi di condividere con noi, in conformità con il GDPR (Regolamento UE 2016/679).
            </p>

            <div className="border-t border-stone-200/80 pt-4 space-y-4">
                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">1. Titolare del Trattamento</h4>
                    <p>
                        Il Titolare del trattamento è la ditta che gestisce il Bar Trattoria <strong>I Fortunelli</strong>, con sede a Collegiove (RI).
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">2. Dati Raccolti e Modalità</h4>
                    <p>
                        Questo sito web adotta un approccio minimale: <strong>non sono presenti form di contatto, newsletter o sistemi di tracciamento invasivi</strong>. L&apos;unico momento in cui entriamo in possesso di tuoi dati è quando decidi volontariamente di cliccare sul collegamento di <strong>WhatsApp</strong> per scriverci direttamente. In questo caso, le uniche informazioni trattate saranno il tuo numero di telefono, il tuo nome (se visibile sul profilo) e i dettagli che deciderai di inserire nel messaggio per richiedere la prenotazione.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">3. Finalità e Base Giuridica</h4>
                    <p>
                        I dati raccolti tramite la chat di WhatsApp vengono utilizzati per l&apos;<strong>esclusiva finalità di gestire la tua richiesta di prenotazione del tavolo</strong> o per fornirti le informazioni sul servizio richieste. La base giuridica del trattamento è l&apos;esecuzione di misure precontrattuali adottate su tua esplicita richiesta.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">4. Conservazione dei Dati</h4>
                    <p>
                        Non registriamo i tuoi contatti in nessun database esterno per scopi pubblicitari o promozionali. I messaggi e i relativi dati di contatto rimarranno custoditi all&apos;interno della chat di WhatsApp per il tempo strettamente necessario a completare la tua prenotazione e a garantirti il servizio il giorno della tua sosta in trattoria.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">5. I Tuoi Diritti</h4>
                    <p>
                        In quanto interessato, hai il pieno diritto di richiedere in qualsiasi momento l&apos;accesso ai tuoi dati, la loro rettifica o la **cancellazione definitiva della cronologia della chat** e dei tuoi riferimenti di prenotazione contattandoci direttamente sul nostro numero o scrivendoci una mail.
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
            <h3 className="text-xl font-bold text-stone-900 mb-2">Cookie Policy</h3>
            <p>
                Questo sito web utilizza i cookie per garantirti l&apos;esperienza di navigazione più fluida e sicura possibile. Di seguito ti spieghiamo in modo chiaro quali cookie utilizziamo e come puoi gestirli sul tuo dispositivo.
            </p>

            <div className="border-t border-stone-200/80 pt-4 space-y-4">
                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">1. Cosa sono i cookie?</h4>
                    <p>
                        I cookie sono piccoli file di testo che i siti visitati dall&apos;utente inviano al suo browser (computer, smartphone o tablet), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Servono a migliorare l&apos;esperienza d&apos;uso e a far funzionare correttamente le pagine web.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">2. Cookie Tecnici e di Sessione (Strettamente Necessari)</h4>
                    <p>
                        Il sito di <strong>I Fortunelli</strong> utilizza unicamente <strong>cookie tecnici essenziali</strong>. Questi cookie servono esclusivamente a permettere il corretto caricamento dell&apos;interfaccia, ottimizzare le prestazioni del codice e mantenere stabile la navigazione. Non raccogliendo alcuna informazione a fini di marketing o tracciamento personale, per questi cookie non è necessario il consenso preventivo. <strong>Non utilizziamo cookie di profilazione pubblicitaria proprietari.</strong>
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">3. Interazioni e Cookie di Terze Parti</h4>
                    <p>
                        Sul sito sono presenti collegamenti a servizi esterni, come il pulsante per avviare la chat di <strong>WhatsApp</strong> o eventuali widget multimediali per i video. Cliccando su questi elementi o interagendo con essi, potresti ricevere sul tuo dispositivo cookie gestiti direttamente dalle piattaforme terze (in questo caso il gruppo Meta). Non avendo noi il controllo su questi cookie, ti invitiamo a consultare le rispettive policy di WhatsApp o Facebook per maggiori dettagli.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-stone-900 text-base mb-1">4. Come controllare o disabilitare i cookie</h4>
                    <p>
                        Puoi limitare, bloccare o eliminare i cookie in qualsiasi momento modificando le preferenze del tuo browser web (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, ecc.). Ti ricordiamo che la disattivazione totale dei cookie tecnici potrebbe compromettere la corretta visualizzazione di alcune animazioni o sezioni grafiche del nostro sito.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

            <div
                role="dialog"
                aria-modal="true"
                className="relative bg-white max-w-xl w-[90%] max-h-[80%] rounded-xl p-6 md:p-10 shadow-lg m-4 flex flex-col"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-stone-500 hover:text-stone-700 z-10 p-1 rounded-lg hover:bg-stone-100 transition-colors"
                    aria-label="Chiudi"
                >
                    ✕
                </button>

                <div className="mt-4 flex-1 overflow-y-auto pr-2 text-stone-700">
                    {content}
                </div>
            </div>
        </div>
    );
}
