export interface Oprema {
  slug: string;
  name: string;
  brand: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  description: string;
  role: string;
  specs: { label: string; value: string }[];
  signalChainPosition: number;
  reviewRating: number;
  faq: { q: string; a: string }[];
  relatedGear: string[];
  relatedTerms?: string[];
  relatedServices?: string[];
}

const oprema: Oprema[] = [
  {
    slug: 'apollo-x6',
    name: 'Universal Audio Apollo x6',
    brand: 'Universal Audio',
    category: 'audio-interface',
    metaTitle: 'Universal Audio Apollo x6',
    metaDescription: 'Apollo x6 audio interface u M Street Music studiju. Unison preampovi, AD/DA konverzija i UAD-2 QUAD DSP za real-time obradu signala.',
    heroImage: '/images/oprema/apollo-x6.jpg',
    description: 'Apollo x6 je srce našeg studija. Preko njega ulazi svaki zvuk koji snimamo i izlazi svaki signal koji šaljemo u analogni lanac. Thunderbolt povezivanje osigurava minimalnu latenciju, a Unison preampovi vjerno reproduciraju karakter klasičnih pojačala.',
    role: 'Središnji uređaj kroz koji prolazi sav audio. Služi kao AD/DA konverter - prima analogne signale s mikrofona i instrumenata, a istovremeno šalje digitalni audio kroz Volt 876 u ostatak analognog lanca za summing i obradu.',
    specs: [
      { label: 'Tip', value: 'Thunderbolt 3 audio interface' },
      { label: 'Preampovi', value: '2x Unison mic/line preamp' },
      { label: 'AD/DA konverzija', value: '24-bit/192 kHz' },
      { label: 'DSP', value: 'UAD-2 QUAD Core procesor' },
      { label: 'I/O', value: '16x22 (s ADAT ekspanzijom)' },
      { label: 'Latencija', value: 'Sub-2ms s UAD pluginovima' },
    ],
    signalChainPosition: 1,
    reviewRating: 4,
    faq: [
      {
        q: 'Zašto Apollo x6, a ne neki drugi interface?',
        a: 'Unison tehnologija omogućava da preampovi fizički mijenjaju impedanciju ovisno o odabranom UAD pluginu. To znači da Neve, API ili SSL emulacije ne rade samo u softveru, nego utječu na sam hardver. Rezultat je autentičniji zvuk od prvog trenutka snimanja.',
      },
      {
        q: 'Koliko instrumenata možete snimati istovremeno?',
        a: 'S Apollo x6 i ADAT ekspanzijom imamo do 16 ulaznih kanala. U praksi to znači cijeli bend odjednom, svaki instrument na zasebnom kanalu.',
      },
    ],
    relatedGear: ['volt-876', 'd-box-plus'],
    relatedTerms: ['audio-interface', 'preamp', 'ad-da-konverzija', 'latencija', 'plug-in'],
    relatedServices: ['snimanje-benda', 'snimanje-vokala', 'mixing-pjesme'],
  },
  {
    slug: 'volt-876',
    name: 'Universal Audio Volt 876',
    brand: 'Universal Audio',
    category: 'da-converter',
    metaTitle: 'Universal Audio Volt 876',
    metaDescription: 'Volt 876 u M Street Music studiju. 8-kanalni DA konverter koji šalje signale iz DAW-a u analogni summing lanac preko D-Box+ miksera.',
    heroImage: '/images/oprema/volt-876.jpg',
    description: 'Volt 876 je most između digitalnog i analognog svijeta. Pretvara 8 kanala digitalnog audia iz DAW-a u analogne signale koje šaljemo u D-Box+ za summing. Čista konverzija bez kompromisa osigurava da signal zadrži svu dinamiku i detalje prije nego uđe u analognu obradu.',
    role: 'Prima 8 digitalnih kanala iz Apollo x6 i pretvara ih u analogne signale. Ti signali idu direktno u D-Box+ summing mikser, gdje se kombiniraju u stereo. Volt 876 je ključna karika koja omogućava prijelaz iz digitalne u analognu domenu.',
    specs: [
      { label: 'Tip', value: '8-kanalni DA konverter / audio interface' },
      { label: 'Kanali', value: '8 analognih izlaza' },
      { label: 'Konverzija', value: '24-bit/192 kHz' },
      { label: 'Povezivanje', value: 'USB-C' },
      { label: 'Vintage mode', value: '76 Compressor / Tube preamp emulacija' },
      { label: 'Dinamički raspon', value: '110 dB' },
    ],
    signalChainPosition: 2,
    reviewRating: 5,
    faq: [
      {
        q: 'Zašto koristite Volt 876 uz Apollo x6?',
        a: 'Apollo x6 ima ograničen broj analognih izlaza. Volt 876 dodaje 8 čistih DA kanala koje koristimo isključivo za slanje grupa instrumenata u analogni summing. Svaka grupa (bubnjevi, gitare, vokali, bas...) ide na zasebni kanal.',
      },
      {
        q: 'Utječe li dodatni konverter na kvalitetu zvuka?',
        a: 'Volt 876 ima kvalitetne DA konvertere s dinamičkim rasponom od 110 dB. Signal koji izlazi iz njega ulazi direktno u D-Box+ bez gubitka kvalitete.',
      },
    ],
    relatedGear: ['apollo-x6', 'd-box-plus'],
    relatedTerms: ['ad-da-konverzija', 'audio-interface', 'signalni-lanac'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
  },
  {
    slug: 'd-box-plus',
    name: 'Dangerous Music D-Box+',
    brand: 'Dangerous Music',
    category: 'summing',
    metaTitle: 'Dangerous Music D-Box+',
    metaDescription: 'Dangerous Music D-Box+ summing mikser u M Street Music studiju. 8-kanalni analogni summing za širi, puniji stereo mix s prirodnom dubinom.',
    heroImage: '/images/oprema/d-box-plus.jpg',
    description: 'D-Box+ je analogni summing mikser koji prima 8 kanala iz Volt 876 i kombinira ih u stereo signal. Rezultat je mix koji diše, s prirodnom dubinom i širinom koju digitalni summing teško postiže. Svaki kanal prolazi kroz Dangerous-ove diskretne pojačale koji dodaju suptilnu toplinu bez bojenja zvuka.',
    role: 'Prima 8 analognih kanala iz Volt 876 i sumira ih u stereo. Ovdje se grupe instrumenata spajaju u jedan koherentan mix. Stereo signal iz D-Box+ ide dalje u Tegeler Creme za kompresiju.',
    specs: [
      { label: 'Tip', value: 'Analogni summing mikser / monitor kontroler' },
      { label: 'Summing kanali', value: '8 (4 stereo para)' },
      { label: 'Izlazi', value: 'Stereo main + 3 monitorna izlaza' },
      { label: 'Pojačala', value: 'Diskretna Class-A topologija' },
      { label: 'D/A konverter', value: 'Ugrađeni ESS Sabre DAC' },
      { label: 'Headroom', value: '+26 dBu max output' },
    ],
    signalChainPosition: 3,
    reviewRating: 5,
    faq: [
      {
        q: 'Koja je razlika između analognog i digitalnog summinga?',
        a: 'Digitalni summing u DAW-u je matematički savršen, ali mu nedostaje interakcija između kanala koju daje analogna elektronika. Analogni summing kroz D-Box+ dodaje suptilnu širinu i dubinu stereo slike, pogotovo na gušćim mixevima s puno instrumenata.',
      },
      {
        q: 'Zašto baš D-Box+?',
        a: 'D-Box+ kombinira summing mikser i monitor kontroler u jednom uređaju. Dangerous Music je poznat po transparentnim dizajnima koji ne boje zvuk, a diskretna Class-A pojačala dodaju samo prirodnu toplinu.',
      },
    ],
    relatedGear: ['volt-876', 'tegeler-creme'],
    relatedTerms: ['signalni-lanac', 'stereo-slika', 'gain-staging', 'mikser'],
    relatedServices: ['mixing-pjesme', 'online-mixing'],
  },
  {
    slug: 'tegeler-creme',
    name: 'Tegeler Audio Manufaktur Creme',
    brand: 'Tegeler Audio Manufaktur',
    category: 'kompresija',
    metaTitle: 'Tegeler Audio Manufaktur Creme',
    metaDescription: 'Tegeler Creme mastering kompresor u M Street Music studiju. Ručno građen u Berlinu, kombinira bus kompresiju i mastering EQ u jednom uređaju.',
    heroImage: '/images/oprema/tegeler-creme.jpg',
    description: 'Tegeler Creme je mastering kompresor i EQ ručno građen u Berlinu. Prima stereo signal iz D-Box+ i dodaje kontroliranu kompresiju koja drži mix zajedno bez gubitka dinamike. Ugrađeni Pultec-style EQ omogućava suptilne korekcije tonskog balansa prije nego signal nastavi u SSL Fusion.',
    role: 'Prima sumirani stereo signal iz D-Box+ i primjenjuje bus kompresiju. Drži mix koherentnim, kontrolira dinamiku i dodaje blagu toplinu. Nakon kompresije, signal ide u SSL Fusion za finalnu obradu.',
    specs: [
      { label: 'Tip', value: 'Stereo bus kompresor + mastering EQ' },
      { label: 'Kompresija', value: 'VCA, varijabilni attack/release' },
      { label: 'EQ', value: 'Pultec-style passive EQ sekcija' },
      { label: 'Izrada', value: 'Ručna, Berlin, Njemačka' },
      { label: 'Sidechain', value: 'Eksterni sidechain + HPF filter' },
      { label: 'Headroom', value: '+22 dBu max output' },
    ],
    signalChainPosition: 4,
    reviewRating: 5,
    faq: [
      {
        q: 'Zašto koristite hardware kompresor umjesto plugina?',
        a: 'Tegeler Creme reagira na signal drugačije od bilo kojeg plugina. Analogna VCA kompresija prirodno zaobljuje tranziente i dodaje koheziju koju je teško replicirati digitalno. Na bus kompresiji ta razlika je posebno zamjetna.',
      },
      {
        q: 'Koristite li Creme na svakom projektu?',
        a: 'Na većini mixing i mastering projekata, da. Količina kompresije varira - nekad je jedva primjetna (1-2 dB gain reduction), a nekad agresivnija, ovisno o žanru i materijalu.',
      },
    ],
    relatedGear: ['d-box-plus', 'ssl-fusion'],
    relatedTerms: ['kompresija', 'sidechain', 'mastering', 'eq'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming'],
  },
  {
    slug: 'ssl-fusion',
    name: 'SSL Fusion',
    brand: 'Solid State Logic',
    category: 'processing',
    metaTitle: 'SSL Fusion',
    metaDescription: 'SSL Fusion analogni stereo procesor u M Street Music studiju. Pet modula za finalnu obradu - od vintage harmonika do stereo slike.',
    heroImage: '/images/oprema/ssl-fusion.jpg',
    description: 'SSL Fusion je zadnja stanica prije nego signal uđe nazad u digitalni svijet. Pet neovisnih modula za obradu - Vintage Drive za harmonike, Violet EQ za tonski balans, HF Compressor za kontrolu visokih frekvencija, Stereo Image za širinu i Transformer za analognu saturaciju. Svaki modul se može uključiti ili zaobići ovisno o potrebama materijala.',
    role: 'Zadnji analogni uređaj u lancu. Prima komprimirani stereo signal iz Tegeler Creme i primjenjuje finalnu obradu. Nakon SSL Fusion, signal se vraća u Apollo x6 gdje se ponovno digitalizira i snima u DAW.',
    specs: [
      { label: 'Tip', value: 'Analogni stereo procesor' },
      { label: 'Moduli', value: '5 (Drive, EQ, HF Comp, Stereo Image, Transformer)' },
      { label: 'EQ', value: 'Violet EQ - 2 benda, SSL dizajn' },
      { label: 'Harmonici', value: 'Vintage Drive + Transformer saturacija' },
      { label: 'Stereo', value: 'Stereo Image kontrola (Width/Pan)' },
      { label: 'Bypass', value: 'True bypass za svaki modul zasebno' },
    ],
    signalChainPosition: 5,
    reviewRating: 5,
    faq: [
      {
        q: 'Koristite li svih 5 modula na svakom projektu?',
        a: 'Ne. Prednost SSL Fusion je što se svaki modul može zasebno zaobići. Na nekim projektima koristimo samo Stereo Image i Transformer, na drugima sve. Ovisi o materijalu i koliko obrade je potrebno.',
      },
      {
        q: 'Kakva je razlika između SSL Fusion i pluginova?',
        a: 'Fusion radi na analognom signalu s komponentama koje SSL razvija više od 50 godina. Vintage Drive modul koristi pravu lampenu saturaciju, a Transformer pravu željeznu jezgru. Te nelinearnosti daju zvuku karakter koji digitalne emulacije aproksimiraju, ali ne repliciraju u potpunosti.',
      },
      {
        q: 'Je li SSL Fusion mastering procesor?',
        a: 'SSL ga pozicionira kao "analog outboard za mix bus i mastering". Mi ga koristimo u oba konteksta - kao finalnu polirku na mix busu i kao dio mastering lanca.',
      },
    ],
    relatedGear: ['tegeler-creme', 'apollo-x6'],
    relatedTerms: ['saturacija', 'eq', 'stereo-slika', 'harmonik', 'kompresija'],
    relatedServices: ['mastering-pjesme', 'mixing-pjesme'],
  },
];

// Helper functions
export function getOpremaBySlug(slug: string): Oprema | undefined {
  return oprema.find((o) => o.slug === slug);
}

export function getAllOprema(): Oprema[] {
  return oprema;
}

export function getOpremaBySignalChainOrder(): Oprema[] {
  return [...oprema].sort((a, b) => a.signalChainPosition - b.signalChainPosition);
}
