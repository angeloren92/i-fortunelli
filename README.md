# Task: Creazione Sezione Main per Sito Web "Bar Trattoria I Fortunelli"

## Contesto Tecnologico
- **Framework:** Next.js (App Router)
- **Stile:** Tailwind CSS
- **Stato attuale:** Header e Footer sono già pronti. Devi generare **esclusivamente** il contenuto del tag `<main>` da inserire in `src/app/page.tsx`.

## Informazioni sul Locale
- **Nome:** Bar Trattoria I Fortunelli
- **Località:** Collegiove (RI)
- **Stile del locale:** Accogliente, cucina casareccia tipica del territorio, atmosfera di paese, perfetto sia per una pausa caffè/aperitivo al bar che per un pranzo o cena in trattoria.

---

## Richiesta di Codice: Sezione `<main>`
Genera il componente principale per la Home Page strutturato nelle seguenti sezioni interne (tutte inserite dentro un unico tag `<main>` semantico):

### 1. Sezione Hero (Impatto Visivo)
- Un background d'impatto (usa un placeholder di Unsplash per l'immagine, es. cibo o un borgo italiano).
- Titolo principale (H1) con il nome del locale "Bar Trattoria I Fortunelli".
- Sottotitolo emozionale che richiami la tradizione e l'accoglienza di Collegiove.
- Un pulsante di Call-to-Action (CTA) chiaro: "Scopri il Menu" (che punta a `/menu`) e uno "Prenota un Tavolo" (pulsante per chiamata rapida).

### 2. Sezione "Chi Siamo / La Nostra Storia"
- Layout a due colonne (Testo a sinistra, immagine a destra - invertito su mobile).
- Un breve testo che racconti la passione per la buona cucina, i prodotti a chilometro zero e l'atmosfera autentica della trattoria.

### 3. Sezione "Galleria Instagram" (Griglia Immagini)
Una griglia responsive (1 colonna su mobile, 2 su tablet, 3 o 4 su desktop) che mostra le foto del locale e dei piatti:
- Crea un array di oggetti finti (mock data) chiamato `instagramPosts`. Ogni oggetto deve avere `id`, `media_url` (usa link Unsplash con keyword tipo `italian-food`, `coffee`), `permalink` (link finto di Instagram) e `caption`.
- Fai un ciclo `.map()` su questo array per generare le card fotografiche.
- **Effetti Visivi:** Ogni immagine deve essere quadrata (`aspect-square`) con un effetto *hover* (es. leggero zoom `hover:scale-105 transition duration-300` e un overlay scuro che mostra la didascalia/caption quando ci si passa sopra con il mouse).
- Sotto la griglia, inserisci un pulsante centrato "Seguici su Instagram" con un'icona o emoji del social.


### 4. Sezione "Orari e Dove Trovarci"
- Layout a due colonne:
  - **Sinistra:** Orari di apertura (chiaro e leggibile) e indirizzo completo ("Via Umberto I 135, 02020 Collegiove (RI)").
  - **Destra:** Un box placeholder per la mappa (un div stilizzato con Tailwind che simula Google Maps).

---

## Linee Guida per i Tipi Tailwind
- Usa classi Tailwind per garantire che il layout sia **completamente responsive** (Mobile First).
- Sfrutta colori caldi e moderni adatti a una trattoria (es. toni di amber, emerald, slate o stone).
- Assicurati che tutto il codice sia pulito, senza l'utilizzo di `any`.