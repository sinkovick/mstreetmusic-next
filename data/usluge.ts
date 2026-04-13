export interface Usluga {
  slug: string;
  category: 'snimanje' | 'mixing' | 'mastering' | 'ostalo';
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  description: string;
  includes: string[];
  process: { step: string; description: string }[];
  faq: { q: string; a: string }[];
  relatedServices?: string[];
  relatedTerms?: string[];
  relatedGear?: string[];
}

const usluge: Usluga[] = [
  {
    slug: 'snimanje-benda',
    category: 'snimanje',
    title: 'Snimanje benda',
    metaTitle: 'Snimanje benda u studiju',
    metaDescription:
      'Profesionalno snimanje benda u M Street Music studiju u Krapini. Višekanalno snimanje, individualni pristup svakom bendu i brza izvedba.',
    heroImage: '/images/usluge/snimanje-benda.jpg',
    description:
      'Snimanje benda zahtijeva prostor koji diše zajedno s glazbenicima. U M Street Music studiju radimo višekanalno snimanje gdje svaki instrument dobiva zasebnu obradu, a bend zadržava energiju live svirke. Bilo da dolazite s gotovim aranžmanima ili trebate pomoć u studiju, prilagođavamo se vašem načinu rada.',
    includes: [
      'Višekanalno snimanje svih instrumenata',
      'Individualni monitoring za svakog člana benda',
      'Osnovni edit i čišćenje snimaka',
      'Neograničen broj pokušaja (takes)',
      'Export sirovih snimaka u WAV formatu',
      'Pohrana projekta 30 dana nakon snimanja',
    ],
    process: [
      {
        step: 'Dogovor i priprema',
        description:
          'Slušamo vaš materijal, dogovaramo raspored i pripremu opreme. Ako trebate, šaljemo popis stvari koje ponijeti na snimanje.',
      },
      {
        step: 'Snimanje u studiju',
        description:
          'Postavljamo mikrofone, podešavamo zvuk i snimamo. Radimo dio po dio ili live, ovisno o tome što bolje odgovara bendu.',
      },
      {
        step: 'Predaja materijala',
        description:
          'Nakon snimanja dobivate čiste, editirane snimke spremne za mixing. Ako želite, mixing i mastering možemo odraditi odmah.',
      },
    ],
    faq: [
      {
        q: 'Koliko traje snimanje jedne pjesme s bendom?',
        a: 'Ovisi o složenosti aranžmana i pripremljenosti benda. Prosječno, jedna pjesma traje 3-5 sati. Dobro pripremljen bend može snimiti pjesmu i za 2 sata.',
      },
      {
        q: 'Možemo li snimati live, svi odjednom?',
        a: 'Da. Studio je opremljen za istovremeno snimanje više instrumenata na zasebne kanale. Dobivate energiju live svirke s mogućnošću naknadne obrade svakog instrumenta.',
      },
      {
        q: 'Trebamo li donijeti vlastitu opremu?',
        a: 'Donesite instrumente i efekte na koje ste navikli. Pojačala, mikrofone i ostalu studijsku opremu osiguravamo mi.',
      },
      {
        q: 'Što ako nismo zadovoljni snimkom?',
        a: 'Snimamo koliko god pokušaja treba dok ne budete zadovoljni. Nema ograničenja na broj takes-ova.',
      },
    ],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme', 'produkcija-glazbe'],
    relatedTerms: ['preamp', 'mikrofon', 'monitoring', 'overdub', 'audio-interface'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'mixing-pjesme',
    category: 'mixing',
    title: 'Mixing pjesme',
    metaTitle: 'Mixing pjesme',
    metaDescription:
      'Profesionalni mixing pjesme u M Street Music studiju. Balansiranje instrumenata, prostorna obrada i priprema za mastering ili objavu.',
    heroImage: '/images/usluge/mixing-pjesme.jpg',
    description:
      'Mixing je proces u kojem sirove snimke postaju gotova pjesma. Svaki instrument dobiva svoje mjesto u zvučnoj slici - od balansa glasnoće i EQ-a, preko kompresije, do prostorne obrade. Cilj je jasan: da vaša glazba zvuči onako kako ste je zamislili, samo bolje.',
    includes: [
      'Balansiranje svih kanala i instrumenata',
      'EQ obrada i čišćenje frekvencija',
      'Kompresija i dinamička obrada',
      'Prostorna obrada (reverb, delay)',
      'Automatizacija glasnoće i efekata',
      'Do 3 revizije uključene u cijenu',
      'Export u WAV i MP3 formatu',
    ],
    process: [
      {
        step: 'Prijem materijala',
        description:
          'Šaljete nam snimljene trackove. Pregledavamo materijal, slušamo rough mix ako ga imate i dogovaramo smjer zvuka.',
      },
      {
        step: 'Mixing',
        description:
          'Radimo na balansu, EQ-u, kompresiji i efektima. Svaki instrument dobiva pažnju dok cjelina ne zazvuči kako treba.',
      },
      {
        step: 'Revizije i predaja',
        description:
          'Šaljemo vam mix na preslušavanje. Radimo korekcije prema vašim komentarima. Kada ste zadovoljni, dobivate finalne fajlove.',
      },
    ],
    faq: [
      {
        q: 'Koliko traje mixing jedne pjesme?',
        a: 'Standardni mixing traje 1-3 radna dana, ovisno o broju kanala i složenosti aranžmana. Hitne narudžbe su moguće uz dogovor.',
      },
      {
        q: 'U kojem formatu trebam poslati snimke?',
        a: 'WAV fajlovi, 24-bit, isti sample rate na kojem ste snimali (najčešće 44.1 ili 48 kHz). Svaki instrument na zasebnom kanalu, bez efekata osim ako su dio zvuka.',
      },
      {
        q: 'Mogu li poslati snimke koje nisu snimljene kod vas?',
        a: 'Naravno. Prihvaćamo materijal snimljen u bilo kojem studiju ili kućnoj produkciji.',
      },
      {
        q: 'Što ako mi se ne sviđa smjer mixa?',
        a: 'Imate do 3 revizije uključene. Opišite što želite promijeniti i prilagođavamo mix prema vašim željama.',
      },
    ],
    relatedServices: ['mastering-pjesme', 'snimanje-benda', 'online-mixing'],
    relatedTerms: ['mixing', 'eq', 'kompresija', 'reverb', 'panning', 'gain-staging'],
    relatedGear: ['apollo-x6', 'd-box-plus', 'ssl-fusion'],
  },
  {
    slug: 'mastering-pjesme',
    category: 'mastering',
    title: 'Mastering pjesme',
    metaTitle: 'Mastering pjesme',
    metaDescription:
      'Profesionalni mastering pjesme u M Street Music studiju. Finalna obrada zvuka za streaming platforme, CD ili vinyl.',
    heroImage: '/images/usluge/mastering-pjesme.jpg',
    description:
      'Mastering je zadnji korak prije objave. Vaš mix prolazi kroz finalnu obradu koja osigurava da pjesma zvuči profesionalno na svim sustavima - od slušalica do klupskih razglasa. Koristimo kombinaciju analognog i digitalnog procesiranja za zvuk koji je glasan, čist i ujednačen s ostatkom vaše diskografije.',
    includes: [
      'Analiza i priprema mixa za mastering',
      'EQ korekcije i tonalno balansiranje',
      'Kompresija i limiting za optimalnu glasnoću',
      'Stereo obrada i širina zvučne slike',
      'Provjera mono kompatibilnosti',
      'Loudness optimizacija za odabranu platformu',
      'Export u svim potrebnim formatima (WAV, MP3, FLAC)',
      'Do 2 revizije uključene',
    ],
    process: [
      {
        step: 'Prijem mixa',
        description:
          'Šaljete finalni mix u WAV formatu. Pregledavamo materijal i provjeravamo ima li tehničkih problema koje treba riješiti prije mastering-a.',
      },
      {
        step: 'Mastering',
        description:
          'Obrađujemo zvuk kroz EQ, kompresiju, stereo obradu i limiting. Ciljamo glasnoću i tonalni balans prilagođen platformi na kojoj objavljujete.',
      },
      {
        step: 'Preslušavanje i predaja',
        description:
          'Šaljemo masteriranu verziju na preslušavanje. Nakon vaše potvrde ili korekcija, dobivate gotove fajlove spremne za distribuciju.',
      },
    ],
    faq: [
      {
        q: 'Koja je razlika između mixing-a i mastering-a?',
        a: 'Mixing uređuje odnos instrumenata unutar pjesme. Mastering obrađuje gotov mix kao cjelinu - podešava glasnoću, tonalni balans i osigurava da zvuči profesionalno na svim uređajima.',
      },
      {
        q: 'Kako trebam pripremiti mix za mastering?',
        a: 'Pošaljite WAV fajl, 24-bit, bez limiter-a na master busu. Ostavite barem 3-6 dB headroom-a. Ako niste sigurni, pošaljite kako jest i javit ćemo vam ako nešto treba ispraviti.',
      },
      {
        q: 'Koliko glasan će biti master?',
        a: 'Prilagođavamo glasnoću prema platformi. Za Spotify ciljamo -14 LUFS, za Apple Music -16 LUFS, za CD nešto glasnije. Uvijek s fokusom na dinamiku i kvalitetu zvuka.',
      },
      {
        q: 'Radite li mastering za albume?',
        a: 'Da. Kod albumskog mastering-a osiguravamo da sve pjesme zvuče ujednačeno kao cjelina, s konzistentnom glasnoćom i tonalnim balansom.',
      },
    ],
    relatedServices: ['mixing-pjesme', 'mastering-za-streaming', 'mastering-za-vinyl'],
    relatedTerms: ['mastering', 'limiter', 'lufs', 'dinamicki-raspon', 'true-peak'],
    relatedGear: ['tegeler-creme', 'ssl-fusion'],
  },
  // === SNIMANJE (6 remaining) ===
  {
    slug: 'snimanje-vokala',
    category: 'snimanje',
    title: 'Snimanje vokala',
    metaTitle: 'Snimanje vokala u studiju',
    metaDescription:
      'Profesionalno snimanje vokala u M Street Music studiju u Krapini. Kvalitetni mikrofoni, akustički tretiran prostor i iskusan tonski snimatelj.',
    heroImage: '/images/usluge/snimanje-vokala.jpg',
    description:
      'Vokal je najvažniji element svake pjesme i zaslužuje punu pažnju. U M Street Music studiju snimamo vokale u akustički tretiranom prostoru s kondenzatorskim mikrofonima koji hvataju svaki detalj glasa. Radimo u opuštenom tempu, bez žurbe, dok ne uhvatimo izvedbu koja vas potpuno zadovoljava.',
    includes: [
      'Snimanje u akustički tretiranoj kabini',
      'Izbor mikrofona prilagođen vašem glasu',
      'Monitoring preko slušalica s prilagođenim mixom',
      'Vocal comping - odabir najboljih dijelova iz više takes-ova',
      'Osnovno čišćenje i tuning po potrebi',
      'Export čistih vokala u WAV formatu',
    ],
    process: [
      {
        step: 'Priprema i proba',
        description:
          'Podešavamo mikrofon i monitoring prema vašem glasu. Radimo probne takes-ove dok se ne osjećate ugodno.',
      },
      {
        step: 'Snimanje',
        description:
          'Snimamo koliko god takes-ova treba. Pratimo izvedbu i dajemo povratne informacije ako želite.',
      },
      {
        step: 'Comping i predaja',
        description:
          'Biramo najbolje dijelove iz svih takes-ova, čistimo snimku i predajemo gotov materijal.',
      },
    ],
    faq: [
      {
        q: 'Koliko traje snimanje vokala za jednu pjesmu?',
        a: 'Većina vokalista završi za 1-2 sata po pjesmi. Ako snimate pratnje i harmonije, računajte dodatnih sat-dva.',
      },
      {
        q: 'Mogu li snimiti vokale na gotov instrumental?',
        a: 'Da. Dostavite instrumental u WAV formatu i snimamo vokale preko njega. Možemo i odmah napraviti rough mix za preslušavanje.',
      },
      {
        q: 'Trebam li se posebno pripremiti?',
        a: 'Dođite odmorni i s naučenim tekstom. Izbjegavajte mliječne proizvode i gazirana pića neposredno prije snimanja.',
      },
      {
        q: 'Radite li pitch korekciju?',
        a: 'Osnovni tuning je uključen. Za detaljniji pitch editing ili efekte (auto-tune stil), to ide u mixing fazu.',
      },
    ],
    relatedServices: ['snimanje-benda', 'mixing-pjesme', 'snimanje-covera'],
    relatedTerms: ['kondenzatorski-mikrofon', 'pop-filter', 'phantom-power', 'preamp'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'snimanje-demo-snimke',
    category: 'snimanje',
    title: 'Snimanje demo snimke',
    metaTitle: 'Snimanje demo snimke',
    metaDescription:
      'Snimite profesionalnu demo snimku u M Street Music studiju. Brza izvedba, pristupačna cijena i kvaliteta dovoljna za prezentaciju.',
    heroImage: '/images/usluge/snimanje-demo-snimke.jpg',
    description:
      'Demo snimka služi da pokažete što imate, bez pretjeranog ulaganja. U M Street Music studiju snimamo demo materijal brzo i efikasno, s dovoljnom razinom kvalitete da ostavite dobar dojam na izdavače, booking agencije ili suradnike. Ako demo preraste u nešto više, lako nastavljamo s punom produkcijom.',
    includes: [
      'Snimanje svih instrumenata i vokala',
      'Osnovni mixing za prezentabilnu kvalitetu',
      'Export gotovog demo-a u MP3 i WAV',
      'Savjeti za pripremu materijala',
      'Mogućnost nadogradnje u punu produkciju',
    ],
    process: [
      {
        step: 'Kratki dogovor',
        description:
          'Slušamo vaš materijal (skica, voice memo, live snimka) i dogovaramo pristup - koliko instrumenata, kakav zvuk ciljate.',
      },
      {
        step: 'Snimanje',
        description:
          'Radimo efikasno, fokusirani na to da uhvatimo energiju pjesme. Ne gubimo vrijeme na savršenstvo - to je za punu produkciju.',
      },
      {
        step: 'Predaja',
        description:
          'Dobivate gotov demo spreman za slanje. Ako odlučite nastaviti s punom produkcijom, nadograđujemo na postojeće snimke.',
      },
    ],
    faq: [
      {
        q: 'Koliko košta demo snimka?',
        a: 'Kontaktirajte nas s detaljima o projektu i šaljemo ponudu. Cijena ovisi o broju pjesama i složenosti aranžmana.',
      },
      {
        q: 'Koja je razlika između demo i pune produkcije?',
        a: 'Demo je brži i jednostavniji - manje vremena na detalje, osnovan mixing. Puna produkcija uključuje detaljniji rad na zvuku, više vremena za eksperimentiranje i profesionalan mix i master.',
      },
      {
        q: 'Mogu li kasnije nadograditi demo u gotovu pjesmu?',
        a: 'Da. Čuvamo sve snimke i projekte. Ako odlučite nastaviti, krećemo od onoga što već imamo.',
      },
    ],
    relatedServices: ['snimanje-benda', 'snimanje-vokala', 'produkcija-glazbe'],
    relatedTerms: ['daw', 'audio-interface', 'mikrofon', 'overdub'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'snimanje-podcasta',
    category: 'snimanje',
    title: 'Snimanje podcasta',
    metaTitle: 'Snimanje podcasta u studiju',
    metaDescription:
      'Profesionalno snimanje podcasta u M Street Music studiju u Krapini. Čist zvuk, do 3 mikrofona i gotov fajl spreman za objavu.',
    heroImage: '/images/usluge/snimanje-podcasta.jpg',
    description:
      'Podcast zahtijeva čist, razumljiv zvuk bez distrakcija. U M Street Music studiju snimate u kontroliranom akustičkom okruženju, bez pozadinskih šumova i odjeka. Postavljamo mikrofone, brinemo o tehnici, a vi se fokusirate na razgovor.',
    includes: [
      'Snimanje do 3 sugovornika istovremeno',
      'Zasebni mikrofoni za svakog govornika',
      'Osnovno čišćenje šumova i normalizacija glasnoće',
      'Export u WAV i MP3 formatu',
      'Pohrana projekta 30 dana',
    ],
    process: [
      {
        step: 'Setup',
        description:
          'Postavljamo mikrofone i slušalice za sve sudionike. Radimo kratku probu da provjerimo razine.',
      },
      {
        step: 'Snimanje',
        description:
          'Snimate koliko god epizoda stignete u rezerviranom terminu. Mi pratimo razine i kvalitetu zvuka.',
      },
      {
        step: 'Obrada i predaja',
        description:
          'Čistimo šumove, ujednačavamo glasnoću između govornika i predajemo gotov fajl spreman za upload.',
      },
    ],
    faq: [
      {
        q: 'Koliko sugovornika može biti u studiju?',
        a: 'Do 3 osobe istovremeno, svaka sa zasebnim mikrofonom. Za veće grupe, javite se unaprijed da pripremimo opremu.',
      },
      {
        q: 'Mogu li snimiti više epizoda u jednom terminu?',
        a: 'Naravno. Mnogi podcasti snimaju 2-4 epizode u jednom posjetu.',
      },
      {
        q: 'Radite li i montažu podcasta?',
        a: 'Osnovno čišćenje i normalizacija su uključeni. Za detaljniju montažu (rezanje, dodavanje jinglova, intro/outro) dogovaramo se zasebno.',
      },
    ],
    relatedServices: ['snimanje-voiceovera', 'snimanje-promo-audio', 'audio-post-produkcija'],
    relatedTerms: ['dinamicki-mikrofon', 'pop-filter', 'akusticna-obrada', 'latencija'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'snimanje-voiceovera',
    category: 'snimanje',
    title: 'Snimanje voiceovera',
    metaTitle: 'Snimanje voiceovera',
    metaDescription:
      'Profesionalno snimanje voiceovera u M Street Music studiju. Reklamni spotovi, naracija, e-learning i ostali governi sadržaji.',
    heroImage: '/images/usluge/snimanje-voiceovera.jpg',
    description:
      'Bilo da snimate naraciju za reklamu, video, e-learning ili audioknjige, potreban vam je čist zvuk bez prostornih artefakata. U M Street Music studiju snimamo voiceover materijal u akustički izoliranom prostoru, s mikrofonima i preampovima koji daju profesionalan, broadcast-ready zvuk.',
    includes: [
      'Snimanje u akustički izoliranoj kabini',
      'Profesionalni kondenzatorski mikrofoni',
      'Čišćenje i normalizacija snimaka',
      'Export u traženom formatu i sample rateu',
      'Mogućnost daljinskog usmjeravanja preko video poziva',
    ],
    process: [
      {
        step: 'Priprema',
        description:
          'Pregledavamo skriptu, dogovaramo ton i stil naracije. Podešavamo mikrofon i monitoring.',
      },
      {
        step: 'Snimanje',
        description:
          'Snimamo dio po dio ili u cijelosti, ovisno o materijalu. Radimo retake odmah na licu mjesta.',
      },
      {
        step: 'Obrada i predaja',
        description:
          'Čistimo snimke, normaliziramo glasnoću i predajemo u traženom formatu.',
      },
    ],
    faq: [
      {
        q: 'Mogu li klijent ili redatelj pratiti snimanje na daljinu?',
        a: 'Da. Možemo postaviti video poziv tako da klijent sluša u realnom vremenu i daje upute.',
      },
      {
        q: 'U kojim formatima predajete snimke?',
        a: 'WAV, MP3, AIFF ili bilo koji drugi format koji vam treba. Prilagođavamo sample rate i bit depth prema zahtjevima projekta.',
      },
      {
        q: 'Koliko traje snimanje voiceovera?',
        a: 'Ovisi o duljini teksta. Za reklamni spot od 30 sekundi, dovoljno je 30-60 minuta. Duži formati kao e-learning ili audioknjige dogovaramo po projektu.',
      },
    ],
    relatedServices: ['snimanje-podcasta', 'snimanje-promo-audio', 'audio-post-produkcija'],
    relatedTerms: ['kondenzatorski-mikrofon', 'pop-filter', 'akusticna-obrada', 'noise-gate'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'snimanje-covera',
    category: 'snimanje',
    title: 'Snimanje covera',
    metaTitle: 'Snimanje covera u studiju',
    metaDescription:
      'Snimite profesionalni cover u M Street Music studiju. Vaša verzija poznate pjesme sa studijskom kvalitetom zvuka.',
    heroImage: '/images/usluge/snimanje-covera.jpg',
    description:
      'Cover je odličan način da pokažete svoj stil kroz poznatu pjesmu. U M Street Music studiju snimamo vašu verziju od početka do kraja - instrumente, vokale i sve ostalo. Možemo vjerno pratiti original ili napraviti potpuno novi aranžman, ovisno o vašoj viziji.',
    includes: [
      'Snimanje svih instrumenata i vokala',
      'Aranžerska pomoć po potrebi',
      'Mixing i mastering uključeni',
      'Export gotove pjesme u WAV i MP3',
      'Savjeti oko distribucije i licenciranja',
    ],
    process: [
      {
        step: 'Odabir i priprema',
        description:
          'Dogovaramo koje pjesme snimate i u kojem stilu. Ako trebate pomoć s aranžmanom, radimo to zajedno prije snimanja.',
      },
      {
        step: 'Snimanje',
        description:
          'Snimamo instrument po instrument, zatim vokale. Ako ste bend, možemo i live pristup.',
      },
      {
        step: 'Mix, master i predaja',
        description:
          'Radimo puni mixing i mastering. Dobivate gotovu pjesmu spremnu za objavu na streaming platformama.',
      },
    ],
    faq: [
      {
        q: 'Trebam li licencu za objavu covera?',
        a: 'Za streaming platforme (Spotify, Apple Music), distributer obično rješava mehaničku licencu automatski. Za YouTube i društvene mreže pravila su drugačija. Možemo vas usmjeriti.',
      },
      {
        q: 'Mogu li snimiti cover samo s vokalima na gotov beat?',
        a: 'Da. Ako imate instrumental verziju ili beat, snimamo samo vokale i miksamo zajedno.',
      },
      {
        q: 'Koliko covera mogu snimiti u jednom danu?',
        a: 'Ovisi o složenosti aranžmana. Ako je sve pripremljeno, realno su 2-3 covera u jednom studijskom danu.',
      },
    ],
    relatedServices: ['snimanje-vokala', 'snimanje-benda', 'mixing-pjesme'],
    relatedTerms: ['overdub', 'audio-interface', 'monitoring', 'mikrofon'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'snimanje-promo-audio',
    category: 'snimanje',
    title: 'Snimanje promo audio sadržaja',
    metaTitle: 'Snimanje promo audio sadržaja',
    metaDescription:
      'Profesionalno snimanje promo audio sadržaja u M Street Music studiju. Jinglovi, radio spotovi, audio reklame i najave.',
    heroImage: '/images/usluge/snimanje-promo-audio.jpg',
    description:
      'Promo audio sadržaj mora zvučati profesionalno od prve sekunde. Snimamo jinglove, radio spotove, audio reklame, telefonske najave i sve ostalo gdje vam treba čist, jasan i uvjerljiv zvuk. Brinemo o cijelom procesu - od snimanja naracije do finalnog mixdown-a s glazbom i efektima.',
    includes: [
      'Snimanje naracije u studiju',
      'Odabir i implementacija pozadinske glazbe',
      'Sound design i zvučni efekti',
      'Mixing i mastering promo materijala',
      'Export u svim potrebnim formatima',
      'Prilagodba duljine za različite platforme',
    ],
    process: [
      {
        step: 'Briefing',
        description:
          'Pregledavamo skriptu, dogovaramo ton, trajanje i gdje će se promo koristiti (radio, web, telefon).',
      },
      {
        step: 'Snimanje i produkcija',
        description:
          'Snimamo naraciju, biramo pozadinsku glazbu i radimo sound design. Sve slagemo u jednu cjelinu.',
      },
      {
        step: 'Finalizacija',
        description:
          'Miksamo, masteriramo i prilagođavamo format prema platformi. Predajemo gotov materijal spreman za emitiranje.',
      },
    ],
    faq: [
      {
        q: 'Nudite li glas za naraciju ili trebam dovesti svog spikera?',
        a: 'Možete dovesti svog spikera ili možemo preporučiti profesionalne glasove s kojima surađujemo.',
      },
      {
        q: 'Što s pozadinskom glazbom - je li licencirana?',
        a: 'Koristimo royalty-free glazbu ili kompozicije koje su licencirane za komercijalnu upotrebu. Možemo i napraviti originalnu glazbu po narudžbi.',
      },
      {
        q: 'Koliko traje izrada promo spota?',
        a: 'Jednostavniji spot (naracija + glazba) može biti gotov isti dan. Složeniji projekti sa sound designom trebaju 2-3 radna dana.',
      },
    ],
    relatedServices: ['snimanje-voiceovera', 'audio-post-produkcija', 'produkcija-glazbe'],
    relatedTerms: ['mikrofon', 'akusticna-obrada', 'noise-gate'],
    relatedGear: ['apollo-x6'],
  },
  // === MIXING (2 remaining) ===
  {
    slug: 'mixing-za-streaming',
    category: 'mixing',
    title: 'Mixing za streaming',
    metaTitle: 'Mixing za streaming platforme',
    metaDescription:
      'Mixing optimiziran za Spotify, Apple Music i druge streaming platforme. Loudness standardi, format i kvaliteta zvuka po pravilima platformi.',
    heroImage: '/images/usluge/mixing-za-streaming.jpg',
    description:
      'Streaming platforme imaju specifične zahtjeve za glasnoću i format. Mix koji zvuči odlično na studijskim monitorima može izgubiti dinamiku ili zvučati prigušeno nakon normalizacije na Spotifyju. U M Street Music studiju miksamo s tim na umu - ciljamo loudness standarde platformi, čuvamo dinamiku i osiguravamo da vaša glazba zvuči onako kako treba, bez obzira na kojoj platformi završi.',
    includes: [
      'Mixing optimiziran za streaming standarde',
      'Loudness provjera prema LUFS standardima',
      'Provjera na različitim sustavima (slušalice, mobitel, monitor)',
      'Format prilagođen za distribuciju',
      'Do 3 revizije uključene',
      'Export u WAV i MP3',
    ],
    process: [
      {
        step: 'Analiza i prijem',
        description:
          'Pregledavamo materijal i dogovaramo reference. Provjeravamo tehničku kvalitetu snimaka i smjer zvuka.',
      },
      {
        step: 'Mixing',
        description:
          'Miksamo s fokusom na streaming normalizaciju. Čuvamo dinamiku, balansiramo frekvencije i testiramo na više sustava.',
      },
      {
        step: 'Provjera i predaja',
        description:
          'Šaljemo mix na preslušavanje. Nakon vaše potvrde, predajemo finalne fajlove spremne za distribuciju.',
      },
    ],
    faq: [
      {
        q: 'Zašto je mixing za streaming drugačiji od običnog?',
        a: 'Streaming platforme normaliziraju glasnoću na -14 LUFS (Spotify) ili -16 LUFS (Apple Music). Mix koji je previše komprimiran gubi dinamiku nakon normalizacije. Radimo s tim na umu od početka.',
      },
      {
        q: 'Za koje platforme radite?',
        a: 'Za sve - Spotify, Apple Music, YouTube Music, Tidal, Deezer, Amazon Music. Loudness standardi su slični, a mi pokrivamo sve varijante.',
      },
      {
        q: 'Trebam li nakon mixing-a i mastering?',
        a: 'Da. Mixing i mastering su dva odvojena koraka. Mixing rješava odnos instrumenata, mastering priprema finalni zvuk za objavu. Možemo odraditi oboje.',
      },
    ],
    relatedServices: ['mixing-pjesme', 'mastering-za-streaming', 'online-mixing'],
    relatedTerms: ['mixing', 'lufs', 'true-peak', 'loudness-war', 'metering'],
    relatedGear: ['d-box-plus', 'ssl-fusion'],
  },
  {
    slug: 'online-mixing',
    category: 'mixing',
    title: 'Online mixing',
    metaTitle: 'Online mixing',
    metaDescription:
      'Pošaljite snimke i dobijte profesionalni mix bez dolaska u studio. Online mixing iz M Street Music studija u Krapini.',
    heroImage: '/images/usluge/online-mixing.jpg',
    description:
      'Ne morate biti u Krapini da biste dobili profesionalan mix. Pošaljite snimke putem interneta, opišite što želite i mi radimo. Komuniciramo preko maila ili poruka, šaljemo vam mix na preslušavanje i radimo korekcije dok ne budete potpuno zadovoljni. Ista kvaliteta kao da ste u studiju, samo bez putovanja.',
    includes: [
      'Mixing na daljinu, bez dolaska u studio',
      'Komunikacija preko maila, WhatsAppa ili video poziva',
      'Sigurna razmjena fajlova preko WeTransfera ili Google Drivea',
      'Do 3 revizije uključene',
      'Export u WAV i MP3',
      'Turnaround: 3-5 radnih dana',
    ],
    process: [
      {
        step: 'Slanje materijala',
        description:
          'Šaljete nam trackove u WAV formatu, reference (pjesme koje vam se sviđaju) i opis željenog zvuka.',
      },
      {
        step: 'Mixing',
        description:
          'Radimo mix i šaljemo vam prvu verziju na preslušavanje. Obično unutar 3-5 radnih dana.',
      },
      {
        step: 'Revizije i predaja',
        description:
          'Slušate, šaljete komentare, mi prilagođavamo. Ponavljamo dok ne budete zadovoljni. Tada predajemo finalne fajlove.',
      },
    ],
    faq: [
      {
        q: 'Kako vam šaljem snimke?',
        a: 'Preko WeTransfera, Google Drivea, Dropboxa ili bilo kojeg servisa za dijeljenje fajlova. Pošaljite WAV fajlove, svaki instrument zasebno.',
      },
      {
        q: 'Koliko dugo traje online mixing?',
        a: 'Prva verzija stiže unutar 3-5 radnih dana. Svaka revizija je dodatna 1-2 dana.',
      },
      {
        q: 'Kako komuniciramo oko revizija?',
        a: 'Kako vam odgovara - mail, WhatsApp, ili možemo napraviti video poziv da zajedno preslušamo mix.',
      },
      {
        q: 'Je li online mixing jeftiniji od dolaska u studio?',
        a: 'Cijena mixing-a je ista. Razlika je što ne plaćate studijsko vrijeme za snimanje niti dolazite fizički.',
      },
    ],
    relatedServices: ['mixing-pjesme', 'mixing-za-streaming', 'online-mastering'],
    relatedTerms: ['mixing', 'daw', 'gain-staging', 'eq', 'kompresija'],
    relatedGear: ['apollo-x6', 'd-box-plus'],
  },
  // === MASTERING (3 remaining) ===
  {
    slug: 'mastering-za-streaming',
    category: 'mastering',
    title: 'Mastering za streaming',
    metaTitle: 'Mastering za streaming platforme',
    metaDescription:
      'Mastering optimiziran za Spotify, Apple Music i druge platforme. Loudness prema LUFS standardima, čist zvuk i puna dinamika.',
    heroImage: '/images/usluge/mastering-za-streaming.jpg',
    description:
      'Svaka streaming platforma ima svoja pravila za glasnoću. Spotify normalizira na -14 LUFS, Apple Music na -16 LUFS. Ako vaš master nije prilagođen, platforma ga tiši ili glasni - i u oba slučaja zvuči lošije nego što bi mogao. U M Street Music studiju masteriramo s preciznim loudness metrima i testiramo rezultat na više sustava prije predaje.',
    includes: [
      'Mastering prilagođen streaming standardima',
      'Loudness optimizacija (LUFS ciljevi po platformi)',
      'True peak limiting ispod -1 dBTP',
      'Provjera na slušalicama, monitorima i mobitelu',
      'Export za sve platforme (WAV 16-bit/44.1kHz + MP3 320kbps)',
      'Do 2 revizije uključene',
    ],
    process: [
      {
        step: 'Prijem i analiza',
        description:
          'Analiziramo mix - loudness, dinamiku, frekvencijski balans. Provjeravamo ima li tehničkih problema.',
      },
      {
        step: 'Mastering',
        description:
          'Obrađujemo zvuk s ciljem na streaming standarde. Čuvamo dinamiku i osiguravamo da normalizacija ne uništi zvuk.',
      },
      {
        step: 'Provjera i predaja',
        description:
          'Testiramo na više sustava, mjerimo LUFS i true peak. Šaljemo vam master na preslušavanje prije finalne predaje.',
      },
    ],
    faq: [
      {
        q: 'Koji LUFS ciljate za Spotify?',
        a: 'Spotify normalizira na -14 LUFS integrated. Ciljamo taj raspon, ali s fokusom na dinamiku - ne komprimiramo zvuk samo da bude glasniji.',
      },
      {
        q: 'Trebam li poseban master za svaku platformu?',
        a: 'Jedan kvalitetan master funkcionira na svim platformama. Razlike u normalizaciji su male i dobar mastering to pokriva.',
      },
      {
        q: 'Što je true peak i zašto je bitan?',
        a: 'True peak mjeri međuuzorke koji mogu uzrokovati distorziju pri konverziji. Streaming platforme traže ispod -1 dBTP. To provjeravamo na svakom masteru.',
      },
    ],
    relatedServices: ['mastering-pjesme', 'mixing-za-streaming', 'online-mastering'],
    relatedTerms: ['mastering', 'lufs', 'true-peak', 'loudness-war', 'limiter'],
    relatedGear: ['tegeler-creme', 'ssl-fusion'],
  },
  {
    slug: 'mastering-za-vinyl',
    category: 'mastering',
    title: 'Mastering za vinyl',
    metaTitle: 'Mastering za vinyl',
    metaDescription:
      'Mastering prilagođen vinyl prešanju. Kontrola basa, de-essing, dinamika i format specifičan za vinilne ploče.',
    heroImage: '/images/usluge/mastering-za-vinyl.jpg',
    description:
      'Vinyl ima fizička ograničenja koja digitalni formati nemaju. Preširanje bas frekvencija, sibilance i pretjerana glasnoća uzrokuju probleme pri prešanju. U M Street Music studiju pripravljamo master koji poštuje ta ograničenja, ali ne žrtvuje kvalitetu zvuka. Surađujemo s tvornicama za prešanje i osiguravamo da vaš vinyl zvuči onako kako treba.',
    includes: [
      'Mastering prilagođen vinyl specifikacijama',
      'Kontrola basa u stereo slici (mono bass ispod 300 Hz)',
      'De-essing i kontrola sibilanata',
      'Prilagodba dinamike za fizički medij',
      'Side A/B split s pauzama između pjesama',
      'Komunikacija s tvornicom za prešanje prema potrebi',
    ],
    process: [
      {
        step: 'Prijem i planiranje',
        description:
          'Analiziramo mixove i planiramo raspored pjesama po stranama (A/B). Provjeravamo trajanje po strani.',
      },
      {
        step: 'Vinyl mastering',
        description:
          'Masteriramo s prilagodbama za vinyl - mono bass, kontrola sibilanata, prilagođena glasnoća. Pazimo da ukupno trajanje ne prelazi preporuke za kvalitetan zvuk.',
      },
      {
        step: 'Predaja za prešanje',
        description:
          'Pripremamo DDP ili WAV fajlove prema specifikacijama tvornice. Šaljemo na preslušavanje i potom direktno tvornici.',
      },
    ],
    faq: [
      {
        q: 'Zašto ne mogu koristiti isti master za vinyl i streaming?',
        a: 'Vinyl ima fizička ograničenja - stereo bass uzrokuje preskakanje igle, pretjerana glasnoća smanjuje trajanje strane, oštre sibilance uzrokuju distorziju. Master za vinyl mora poštivati ta pravila.',
      },
      {
        q: 'Koliko dugo može biti jedna strana vinyla?',
        a: 'Za 12" vinyl na 33 RPM, optimalno je do 18-20 minuta po strani. Više od toga znači tiši zvuk i slabiju kvalitetu.',
      },
      {
        q: 'Surađujete li s tvornicama za prešanje?',
        a: 'Da. Možemo komunicirati direktno s tvornicom i osigurati da fajlovi budu u ispravnom formatu i prema njihovim specifikacijama.',
      },
    ],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming'],
    relatedTerms: ['mastering', 'dinamicki-raspon', 'frekvencijski-spektar', 'mid-side'],
    relatedGear: ['tegeler-creme', 'ssl-fusion'],
  },
  {
    slug: 'online-mastering',
    category: 'mastering',
    title: 'Online mastering',
    metaTitle: 'Online mastering',
    metaDescription:
      'Pošaljite mix i dobijte profesionalni master bez dolaska u studio. Online mastering iz M Street Music studija.',
    heroImage: '/images/usluge/online-mastering.jpg',
    description:
      'Pošaljite gotov mix putem interneta i dobijte profesionalno masteriran materijal natrag. Proces je jednostavan - uploadate fajl, opišete što želite, a mi odrađujemo mastering i šaljemo rezultat na preslušavanje. Brzo, praktično i bez kompromisa u kvaliteti.',
    includes: [
      'Mastering na daljinu, bez dolaska u studio',
      'Sigurna razmjena fajlova',
      'Loudness optimizacija za odabranu platformu',
      'Do 2 revizije uključene',
      'Turnaround: 1-3 radna dana',
      'Export u WAV, MP3 i FLAC',
    ],
    process: [
      {
        step: 'Slanje mixa',
        description:
          'Šaljete WAV fajl (24-bit, bez limitera na masteru) preko WeTransfera, Google Drivea ili maila. Opišete za koju platformu i kakav zvuk želite.',
      },
      {
        step: 'Mastering',
        description:
          'Obrađujemo vaš mix i šaljemo masteriranu verziju na preslušavanje unutar 1-3 radna dana.',
      },
      {
        step: 'Revizije i predaja',
        description:
          'Ako trebate korekcije, šaljete komentare i prilagođavamo. Kada ste zadovoljni, predajemo finalne fajlove.',
      },
    ],
    faq: [
      {
        q: 'Kako vam šaljem mix za mastering?',
        a: 'Preko WeTransfera, Google Drivea ili Dropboxa. Pošaljite stereo WAV fajl, 24-bit, bez limitera na master busu.',
      },
      {
        q: 'Koliko brzo dobijem master natrag?',
        a: 'Standardno 1-3 radna dana. Za hitne narudžbe, javite se unaprijed.',
      },
      {
        q: 'Mogu li naručiti mastering cijelog albuma online?',
        a: 'Da. Kod albuma osiguravamo konzistentnost između svih pjesama - glasnoća, tonalni balans i pauze.',
      },
    ],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming', 'online-mixing'],
    relatedTerms: ['mastering', 'daw', 'metering', 'lufs', 'dithering'],
    relatedGear: ['tegeler-creme', 'ssl-fusion'],
  },
  // === OSTALO (3) ===
  {
    slug: 'produkcija-glazbe',
    category: 'ostalo',
    title: 'Produkcija glazbe',
    metaTitle: 'Glazbena produkcija',
    metaDescription:
      'Kompletna glazbena produkcija u M Street Music studiju. Od ideje do gotove pjesme - aranžman, snimanje, mixing i mastering.',
    heroImage: '/images/usluge/produkcija-glazbe.jpg',
    description:
      'Produkcija znači da se brinemo o svemu - od aranžmana do finalnog mastera. Ako imate ideju, skicu ili tekst i ne znate kako to pretvoriti u gotovu pjesmu, tu smo. Radimo s vama na aranžmanu, snimamo instrumente i vokale, miksamo i masteriramo. Jedna kontakt osoba, jedan studio, gotov proizvod.',
    includes: [
      'Rad na aranžmanu i strukturi pjesme',
      'Programiranje ritmova i sintova po potrebi',
      'Snimanje svih instrumenata i vokala',
      'Kompletni mixing i mastering',
      'Export gotove pjesme spremne za distribuciju',
      'Konzultacije o distribuciji i objavi',
    ],
    process: [
      {
        step: 'Razgovor i koncept',
        description:
          'Slušamo vašu ideju - demo snimku, voice memo, tekst, bilo što. Dogovaramo stil, tempo, raspoloženje i plan rada.',
      },
      {
        step: 'Aranžman i snimanje',
        description:
          'Gradimo aranžman, programiramo ili snimamo instrumente, snimamo vokale. Sve do trenutka kad pjesma zvuči kompletno.',
      },
      {
        step: 'Mix, master i predaja',
        description:
          'Miksamo i masteriramo gotovu pjesmu. Predajemo vam fajlove spremne za Spotify, Apple Music ili bilo koju drugu platformu.',
      },
    ],
    faq: [
      {
        q: 'Imam samo tekst, možete li napraviti cijelu pjesmu?',
        a: 'Da. Možemo napraviti kompletnu produkciju od teksta do gotove pjesme - melodiju, aranžman, snimanje, mix i master.',
      },
      {
        q: 'Koliko traje produkcija jedne pjesme?',
        a: 'Ovisi o složenosti, ali realno je 1-3 tjedna od prve sesije do gotovog mastera. Jednostavniji projekti mogu biti brži.',
      },
      {
        q: 'Radite li u svim žanrovima?',
        a: 'Radimo pop, rock, hip-hop, elektroniku, folk i sve između. Ako niste sigurni, javite se i razgovaramo.',
      },
      {
        q: 'Što ako imam samo ideju bez demo snimke?',
        a: 'Dođite u studio, razgovaramo i počinjemo od nule. Možete zapjevati ili odsvirati ideju uživo, a mi ćemo to razviti dalje.',
      },
    ],
    relatedServices: ['snimanje-benda', 'mixing-pjesme', 'mastering-pjesme'],
    relatedTerms: ['daw', 'midi', 'audio-interface', 'plug-in', 'sample-rate'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'audio-post-produkcija',
    category: 'ostalo',
    title: 'Audio post-produkcija',
    metaTitle: 'Audio post-produkcija',
    metaDescription:
      'Audio post-produkcija za video, film i multimediju. Sound design, foley, mixing dijaloga i glazbe u M Street Music studiju.',
    heroImage: '/images/usluge/audio-post-produkcija.jpg',
    description:
      'Zvuk čini polovicu filmskog ili video iskustva. U M Street Music studiju radimo audio post-produkciju za kratke filmove, reklame, korporativne videe, dokumentarce i ostale vizualne projekte. Od čišćenja dijaloga i sound designa do finalnog mixa zvuka i slike.',
    includes: [
      'Čišćenje i obrada dijaloga',
      'Sound design i ambijentalni zvukovi',
      'Sinkronizacija zvuka i slike',
      'Mixing dijaloga, glazbe i efekata',
      'Export u formatima za TV, web i kino',
      'Loudness normalizacija prema standardima (EBU R128, ATSC A/85)',
    ],
    process: [
      {
        step: 'Prijem projekta',
        description:
          'Pregledavamo video materijal, dogovaramo opseg posla - samo čišćenje dijaloga ili kompletna post-produkcija.',
      },
      {
        step: 'Obrada',
        description:
          'Čistimo dijalog, dodajemo ambijente i efekte, balansiramo glazbu sa zvukom. Sve sinhroniziramo s videom.',
      },
      {
        step: 'Mix i predaja',
        description:
          'Finalni mix zvuka prilagođen mediju (TV, web, kino). Predajemo audio track ili kompletni video s obrađenim zvukom.',
      },
    ],
    faq: [
      {
        q: 'Mogu li poslati video s lošim zvukom da ga popravite?',
        a: 'Da. Čistimo šumove, uklanjamo odjeke i poboljšavamo razumljivost koliko god materijal dopušta. Što je bolja izvorna snimka, bolji je i rezultat.',
      },
      {
        q: 'Radite li i glazbu za videe?',
        a: 'Možemo napraviti originalnu glazbu ili vam pomoći odabrati licenciranu glazbu koja odgovara projektu.',
      },
      {
        q: 'U kojem formatu trebam poslati video?',
        a: 'ProRes, H.264 ili H.265 u što većoj rezoluciji. Ako imate odvojeni audio track, pošaljite i njega zasebno.',
      },
    ],
    relatedServices: ['snimanje-voiceovera', 'snimanje-promo-audio', 'produkcija-glazbe'],
    relatedTerms: ['eq', 'kompresija', 'noise-gate', 'reverb', 'de-esser'],
    relatedGear: ['apollo-x6', 'ssl-fusion'],
  },
  {
    slug: 'mentorstvo',
    category: 'ostalo',
    title: 'Mentorstvo',
    metaTitle: 'Mentorstvo za glazbenu produkciju',
    metaDescription:
      'Individualno mentorstvo za snimanje, mixing i mastering. Naučite od profesionalca u M Street Music studiju u Krapini.',
    heroImage: '/images/usluge/mentorstvo.jpg',
    description:
      'Ako želite naučiti snimati, miksati ili masterirati - ne trebate fakultet, trebate nekoga tko to radi svaki dan. U M Street Music studiju nudimo individualno mentorstvo gdje radite na vlastitim projektima uz vodstvo iskusnog tonskog snimatelja. Praktičan pristup, bez teorije koja vam ne treba.',
    includes: [
      'Individualne sesije u profesionalnom studiju',
      'Rad na vašim vlastitim projektima',
      'Prilagođen program prema vašem znanju i ciljevima',
      'Pristup studijskoj opremi za vježbu',
      'Materijali i resursi za učenje između sesija',
    ],
    process: [
      {
        step: 'Upoznavanje',
        description:
          'Razgovaramo o vašem iskustvu, ciljevima i što želite naučiti. Kreiramo plan rada prilagođen vama.',
      },
      {
        step: 'Sesije u studiju',
        description:
          'Radimo zajedno na vašim projektima. Učite kroz praksu - snimanje, mixing ili mastering na profesionalnoj opremi.',
      },
      {
        step: 'Samostalan rad',
        description:
          'Između sesija radite samostalno uz smjernice. Na sljedećoj sesiji pregledavamo vaš rad i idemo dalje.',
      },
    ],
    faq: [
      {
        q: 'Trebam li imati opremu kod kuće?',
        a: 'Pomaže, ali nije nužno. Na sesijama radite na studijskoj opremi. Ako imate kućni setup, možemo rad prilagoditi vašoj opremi.',
      },
      {
        q: 'Za koga je mentorstvo namijenjeno?',
        a: 'Za sve razine - od potpunih početnika do onih koji već rade ali žele podići kvalitetu. Prilagođavamo tempo i sadržaj vašem znanju.',
      },
      {
        q: 'Koliko sesija je potrebno?',
        a: 'Ovisi o ciljevima. Neki polaznici osjete napredak nakon 3-4 sesije, drugi dolaze mjesecima na redovite termine. Nema obaveze za dugoročnu pretplatu.',
      },
    ],
    relatedServices: ['snimanje-benda', 'mixing-pjesme', 'produkcija-glazbe'],
    relatedTerms: ['mixing', 'mastering', 'daw', 'gain-staging', 'signalni-lanac'],
  },
];

export function getUslugaBySlug(slug: string): Usluga | undefined {
  return usluge.find((u) => u.slug === slug);
}

export function getAllUsluge(): Usluga[] {
  return usluge;
}

export function getUslugeByCategory(category: Usluga['category']): Usluga[] {
  return usluge.filter((u) => u.category === category);
}

export function getCategoryLabel(category: Usluga['category']): string {
  const labels: Record<Usluga['category'], string> = {
    snimanje: 'Snimanje',
    mixing: 'Mixing',
    mastering: 'Mastering',
    ostalo: 'Ostalo',
  };
  return labels[category];
}
