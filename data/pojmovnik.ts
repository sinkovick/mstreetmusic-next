export type PojmovnikCategory = 'snimanje' | 'mixing' | 'mastering' | 'oprema' | 'osnove';

export interface PojmovnikTerm {
  slug: string;
  term: string;
  englishTerm?: string;
  category: PojmovnikCategory;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  explanation: string;
  studioContext: string;
  faq: { q: string; a: string }[];
  relatedTerms: string[];
  relatedServices?: string[];
  relatedGear?: string[];
}

const pojmovi: PojmovnikTerm[] = [
  // ==========================================
  // SNIMANJE
  // ==========================================
  {
    slug: 'preamp',
    term: 'Preamp',
    englishTerm: 'Preamplifier',
    category: 'snimanje',
    metaTitle: 'Preamp (preamplifikator) - što je i zašto je bitan',
    metaDescription:
      'Što je preamp i zašto je ključan za kvalitetu snimke. Kako preamp pojačava signal mikrofona i utječe na karakter zvuka u studiju.',
    definition:
      'Preamp (preamplifikator) je uređaj koji pojačava slab signal mikrofona na razinu pogodnu za snimanje i obradu. Kvaliteta preampa direktno utječe na čistoću, toplinu i karakter zvuka koji ulazi u snimku.',
    explanation:
      'Mikrofon proizvodi vrlo slab električni signal koji sam po sebi nije dovoljno jak za snimanje ili daljnju obradu. Preamp taj signal pojačava za 30 do 60 decibela, dovodeći ga na radnu razinu koju audio interface i digitalni sustav mogu kvalitetno obraditi.\n\nNije svaki preamp isti. Različite konstrukcije daju različit karakter zvuka. Tranzistorski (solid-state) preampovi su čisti i transparentni, dok lampeni (tube) preampovi dodaju blagu toplinu i harmoničku saturaciju. Class-A topologija, kakvu koriste vrhunski studijski preampovi, osigurava minimalna izobličenja i prirodan zvuk.\n\nPreamp je prvi aktivni uređaj u signalnom lancu nakon mikrofona, što znači da svaka nepravilnost ili šum na ovoj razini prolazi kroz cijeli ostatak lanca. Zato profesionalni studiji ulažu u kvalitetne preampove - jer čista, dobro pojačana snimka je temelj svake kvalitetne produkcije.\n\nOsim pojačanja, mnogi preampovi nude dodatne funkcije poput phantom napajanja za kondenzatorske mikrofone, pad prekidača za smanjenje ulaznog signala kod glasnih izvora, te filtere za uklanjanje niskofrekventnog šuma.',
    studioContext:
      'U M Street Music studiju koristimo Universal Audio Volt 876 kao glavni preamp za snimanje. Volt 876 ima osam diskretnih Class-A preampova koji daju čist, detaljan zvuk s niskim šumom. Svaki kanal ima vlastitu kontrolu pojačanja i phantom napajanje za kondenzatorske mikrofone. Volt-ov Vintage mod dodaje blagu harmoničku saturaciju inspiriranu klasičnim 610 preampom, što vokalu i akustičnim instrumentima daje toplinu bez gubitka detalja. Za zahtjevnije projekte, Apollo x6 nudi Unison preampove koji fizički mijenjaju impedanciju ulaznog stupnja i emuliraju ponašanje legendarnih preampova poput Neve 1073.',
    faq: [
      {
        q: 'Koja je razlika između preampa u audio interfaceu i vanjskog preampa?',
        a: 'Audio interfaceovi imaju ugrađene preampove, ali vanjski preampovi obično nude veći headroom, niži šum i specifičan karakter zvuka. Za profesionalno snimanje, kvalitetniji preamp čini zamjetnu razliku, posebno na vokalu.',
      },
      {
        q: 'Treba li mi skup preamp za dobru snimku?',
        a: 'Ne nužno. Današnji audio interfaceovi (poput Volt 876) imaju preampove koji nadmašuju studijske preampove od prije 15 godina. Za početak je to više nego dovoljno. Razlika se čuje tek u profesionalnom kontekstu.',
      },
      {
        q: 'Što je phantom napajanje i trebam li ga?',
        a: 'Phantom napajanje (48V) je napon koji preamp šalje kroz kabel mikrofonu. Kondenzatorski mikrofoni ga trebaju za rad. Dinamički mikrofoni ga ne trebaju, ali im neće naškoditi ako ga slučajno uključite.',
      },
    ],
    relatedTerms: ['audio-interface', 'signalni-lanac', 'gain', 'monitoring'],
    relatedServices: ['snimanje-benda', 'snimanje-vokala'],
    relatedGear: ['volt-876', 'apollo-x6'],
  },
  {
    slug: 'audio-interface',
    term: 'Audio interface',
    englishTerm: 'Audio Interface',
    category: 'snimanje',
    metaTitle: 'Audio interface - što je i kako radi',
    metaDescription:
      'Što je audio interface, kako pretvara zvuk u digitalni signal i zašto je osnova svakog studija za snimanje. Vodič za glazbenike.',
    definition:
      'Audio interface je uređaj koji povezuje mikrofone, instrumente i druge audio izvore s računalom. Pretvara analogni zvuk u digitalni signal (AD konverzija) i digitalni signal natrag u zvuk (DA konverzija) za slušanje kroz monitore ili slušalice.',
    explanation:
      'Svako računalo ima zvučnu karticu, ali ugrađene kartice nisu dizajnirane za profesionalno snimanje. Audio interface je specijalizirana zvučna kartica namijenjena studijskom radu, s kvalitetnijim pretvaračima, nižom latencijom i profesionalnim priključcima.\n\nInterfaceovi se razlikuju po broju ulaza i izlaza, kvaliteti pretvarača (AD/DA konverzija), tipu povezivanja s računalom (USB, Thunderbolt) i ugrađenim preampovima. Više ulaza znači mogućnost istovremenog snimanja više izvora, što je bitno za snimanje benda.\n\nKvaliteta pretvarača određuje koliko vjerno digitalni signal predstavlja originalni zvuk. Bolji pretvarači znače širi dinamički raspon, niži šum i vjerniju reprodukciju. Na vrhunskim interfaceovima razlika je čujna, posebno u detaljima visokih frekvencija i prostornosti zvuka.\n\nLatencija je kašnjenje između trenutka kad svirate i trenutka kad čujete zvuk kroz monitore. Brži interfaceovi s Thunderbolt vezom nude latenciju ispod 2 milisekunde, što je neprimjetno za izvođača.',
    studioContext:
      'U M Street Music studiju koristimo Universal Audio Apollo x6 kao središnji audio interface. Apollo x6 nudi šest analognih ulaza, Thunderbolt 3 povezivanje za minimalnu latenciju i ESS Sabre DAC pretvarače s dinamičkim rasponom od 129 dB. Ključna prednost Apollo platforme je Unison tehnologija koja omogućava obradu signala u realnom vremenu bez opterećenja procesora računala, te UAD plugin ekosustav za mixing i mastering.',
    faq: [
      {
        q: 'Koliko ulaza mi treba na audio interfaceu?',
        a: 'Za snimanje vokala i jednog instrumenta dovoljno je dva ulaza. Za snimanje benda trebate minimalno osam. Za početnike, interface s dva ulaza je sasvim dovoljan za učenje i demo snimke.',
      },
      {
        q: 'Je li USB interface dovoljno dobar za profesionalno snimanje?',
        a: 'Da, za većinu primjena USB interfaceovi su izvrsni. Thunderbolt nudi nižu latenciju, što je bitno za praćenje s efektima u realnom vremenu, ali kvaliteta pretvarača i preampova je važnija od tipa priključka.',
      },
      {
        q: 'Mogu li koristiti audio interface za slušanje glazbe?',
        a: 'Apsolutno. Audio interface je ujedno i DAC (digitalno-analogni pretvarač) za vaše slušalice i monitore. Kvaliteta reprodukcije je daleko bolja nego kroz ugrađenu zvučnu karticu.',
      },
    ],
    relatedTerms: ['preamp', 'ad-da-konverzija', 'signalni-lanac', 'daw', 'monitoring'],
    relatedServices: ['snimanje-benda', 'snimanje-vokala'],
    relatedGear: ['apollo-x6', 'volt-876'],
  },
  {
    slug: 'monitoring',
    term: 'Monitoring',
    englishTerm: 'Monitoring',
    category: 'snimanje',
    metaTitle: 'Monitoring u studiju - što je i zašto je bitan',
    metaDescription:
      'Što je monitoring u studiju, razlika između studijskih monitora i slušalica, i zašto je točan monitoring temelj kvalitetnog snimanja i mixing-a.',
    definition:
      'Monitoring u studiju označava sustav za slušanje zvuka tijekom snimanja, mixing-a i mastering-a. Uključuje studijske monitore (zvučnike), slušalice i monitor kontroler koji upravlja glasnoćom i usmjeravanjem signala.',
    explanation:
      'Kvalitetan monitoring je možda najvažnija investicija u studiju. Možete imati najbolje mikrofone i preampove, ali ako ne čujete točno što se događa sa zvukom, ne možete donijeti ispravne odluke tijekom snimanja ili mixing-a.\n\nStudijski monitori razlikuju se od običnih zvučnika po tome što im je cilj neutralnost. Hi-fi zvučnici pojačavaju bas i visoke frekvencije jer je to ugodnije za slušanje, dok studijski monitori prikazuju zvuk kakav zaista jest, s ravnom frekvencijskom karakteristikom.\n\nSlušalice su neophodne za izvođače tijekom snimanja jer im omogućavaju da čuju pratnju i sebe bez da zvuk dospije u mikrofon. Studijske slušalice zatvorenog tipa izoliraju zvuk, dok otvorene slušalice daju prostorniji zvuk za mixing.\n\nMonitor kontroler je uređaj koji sjedi između audio interfacea i monitora. Omogućava prebacivanje između različitih parova monitora, kontrolu glasnoće, mono provjeru i talkback komunikaciju s izvođačem u studiju.',
    studioContext:
      'U M Street Music studiju monitoring sustav kontrolira Dangerous Music D-Box+, vrhunski monitor kontroler koji istovremeno služi kao analogni summing mixer. D-Box+ omogućava trenutno prebacivanje između različitih izvora i monitora, ima preciznu kontrolu glasnoće s koracima od 1 dB i talkback funkciju za komunikaciju s izvođačem. Za slušalice, izvođači u studiju koriste individualne headphone mixove koji se kreiraju kroz Apollo x6, tako da svaki glazbenik čuje upravo ono što mu treba.',
    faq: [
      {
        q: 'Mogu li mixing raditi na slušalicama?',
        a: 'Možete, ali monitoring na kvalitetnim studijskim monitorima daje pouzdaniju sliku stereo slike i niskofrekventnog dijela spektra. Slušalice su odličan dodatak za provjeru detalja, ali ne bi trebale biti jedini izvor za donošenje odluka.',
      },
      {
        q: 'Zašto su studijski monitori tako skupi?',
        a: 'Studijski monitori koriste kvalitetnije komponente, preciznije crossovere i pojačala dizajnirana za ravnu frekvencijsku karakteristiku. Ulaganje u monitore je ulaganje u točnost vaših odluka pri mixing-u.',
      },
    ],
    relatedTerms: ['mixing', 'mastering', 'signalni-lanac'],
    relatedServices: ['snimanje-benda', 'mixing-pjesme'],
    relatedGear: ['d-box-plus'],
  },

  // ==========================================
  // SNIMANJE (nastavak)
  // ==========================================

  {
    slug: 'mikrofon',
    term: 'Mikrofon',
    englishTerm: 'Microphone',
    category: 'snimanje',
    metaTitle: 'Mikrofon - vrste i primjena u studiju',
    metaDescription:
      'Što je mikrofon, kako pretvara zvuk u električni signal i koje vrste mikrofona postoje. Vodič za glazbenike koji snimaju u studiju.',
    definition:
      'Mikrofon je pretvarač (transducer) koji pretvara zvučne valove u električni signal. To je prvi element u signalnom lancu svake snimke, a izbor mikrofona direktno oblikuje karakter i kvalitetu snimljenog zvuka.',
    explanation:
      'Svaki mikrofon sadrži tanku membranu (dijafragmu) koja vibrira pod utjecajem zvučnih valova. Te vibracije se zatim pretvaraju u električni signal, bilo elektromagnetskom indukcijom (dinamički mikrofoni), promjenom kapaciteta (kondenzatorski mikrofoni) ili kretanjem trake u magnetskom polju (ribbon mikrofoni). Signal koji mikrofon proizvodi je izuzetno slab i zahtijeva pojačanje kroz preamp prije nego što ga audio interface može obraditi.\n\nMikrofoni se razlikuju po načinu pretvorbe zvuka, ali i po usmjerenosti (polar pattern). Kardioidni mikrofon hvata zvuk pretežno s prednje strane i odbacuje pozadinski šum, što ga čini idealnim za vokal i većinu instrumenata u studiju. Omnidirekcijski mikrofon hvata zvuk jednako iz svih smjerova, dok osmičasti (figure-8) hvata s prednje i stražnje strane, ali ne sa strana.\n\nVeličina dijafragme utječe na karakter zvuka. Veliki dijafragmi (25 mm i više) daju topliji, puniji zvuk i nižu razinu šuma, pa su standard za studijsko snimanje vokala. Mali dijafragmi (12 mm i manje) nude precizniju, neutralniju reprodukciju i bolju tranzijentnu reakciju, pa se koriste za akustičnu gitaru, udaraljke i stereo snimanje.\n\nIzbor mikrofona ovisi o izvoru zvuka, prostoru u kojem snimate i zvuku koji želite postići. Ne postoji univerzalno najbolji mikrofon. SM57 koji košta stotinu eura može na gitarskom pojačalu zvučati bolje nego mikrofon od tisuću eura, jer je prava kombinacija mikrofona i izvora važnija od cijene.',
    studioContext:
      'U M Street Music studiju koristimo različite mikrofone ovisno o potrebama projekta. Svaki mikrofon prolazi kroz Volt 876 preampove s diskretnom Class-A topologijom ili kroz Apollo x6 Unison preampove koji se prilagođavaju impedanciji mikrofona. Za snimanje benda, kombiniramo kondenzatorske i dinamičke mikrofone kako bismo iz svakog instrumenta izvukli ono najbolje. Pristup biramo prema pjesmi, a ne prema navici.',
    faq: [
      {
        q: 'Koji mikrofon je najbolji za snimanje vokala?',
        a: 'Za studio je standard kondenzatorski mikrofon velikog dijafragma jer hvata detalje i nijanse glasa. Ali konačan izbor ovisi o karakteru vašeg glasa i žanru. Neki vokali jednostavno bolje zvuče na dinamičkom mikrofonu.',
      },
      {
        q: 'Trebam li skupi mikrofon za kvalitetnu snimku?',
        a: 'Ne nužno. Mikrofon od 200-300 eura danas može dati izvanredne rezultate. Važniji su kvaliteta preampa, akustična obrada prostora i tehnika snimanja nego sam mikrofon.',
      },
      {
        q: 'Mogu li koristiti isti mikrofon za vokal i instrumente?',
        a: 'Da, mnogi mikrofoni su dovoljno versatilni. Kondenzator velikog dijafragma radi odlično na vokalu, akustičnoj gitari i mnogo drugog. U profesionalnom studiju biramo specifične mikrofone za svaki izvor, ali za početak je jedan dobar mikrofon sasvim dovoljan.',
      },
    ],
    relatedTerms: ['kondenzatorski-mikrofon', 'dinamicki-mikrofon', 'phantom-power', 'preamp', 'pop-filter', 'signalni-lanac'],
    relatedServices: ['snimanje-vokala', 'snimanje-benda', 'snimanje-podcasta'],
    relatedGear: ['volt-876', 'apollo-x6'],
  },
  {
    slug: 'kondenzatorski-mikrofon',
    term: 'Kondenzatorski mikrofon',
    englishTerm: 'Condenser Microphone',
    category: 'snimanje',
    metaTitle: 'Kondenzatorski mikrofon - kako radi i kad ga koristiti',
    metaDescription:
      'Što je kondenzatorski mikrofon, kako radi princip promjenjivog kapaciteta i zašto je standard za studijsko snimanje vokala i akustičnih instrumenata.',
    definition:
      'Kondenzatorski mikrofon koristi princip promjenjivog kapaciteta (kondenzatora) za pretvorbu zvuka u električni signal. Poznat je po visokoj osjetljivosti, širokom frekvencijskom rasponu i sposobnosti da uhvati fine detalje i nijanse zvuka.',
    explanation:
      'Unutar kapsule kondenzatorskog mikrofona nalaze se dva elementa - izuzetno tanka metalizirana membrana (dijafragma) i fiksna metalna ploča (backplate), postavljene paralelno jedna uz drugu. Zajedno čine kondenzator. Kad zvučni valovi pogode membranu, ona vibrira i mijenja udaljenost od backplate ploče. Promjena udaljenosti mijenja kapacitet, a ta promjena kapaciteta stvara električni signal koji odgovara zvučnom valu.\n\nSignal koji nastaje na kapsuli je iznimno slab, pa kondenzatorski mikrofon ima ugrađeno pojačalo (impedance converter) koje taj signal pojačava prije nego napusti mikrofon. Upravo zato kondenzatorski mikrofoni trebaju vanjsko napajanje, najčešće phantom power od 48V koji dolazi kroz mikrofonski kabel iz preampa ili audio interfacea.\n\nPostoje dvije glavne kategorije prema veličini dijafragme. Kondenzatori velikog dijafragma (LDC) su standard za vokal u studiju. Daju topliji, puniji zvuk, s blago naglašenim niskim srednjim frekvencijama i prirodnim prisustvom u gornjim frekvencijama. Mikrofoni poput Neumannov U87 ili AKG C414 su legende studijskog snimanja upravo zbog tog karaktera.\n\nKondenzatori malog dijafragma (SDC) nude preciznije, neutralnije snimanje s bržom tranzijentnom reakcijom. Idealni su za akustičnu gitaru, klavir, overhead mikrofone za bubnjeve i svaku situaciju gdje trebate detaljnu, neobojenu sliku zvuka. Često se koriste u stereo parovima za snimanje ansambala i prostora.\n\nOsjetljivost kondenzatorskih mikrofona je dvosjekli mač. S jedne strane, hvataju svaku nijansu izvora. S druge strane, hvataju i sve nepoželjne zvukove u prostoru, pa zahtijevaju akustički obrađen prostor za optimalne rezultate.',
    studioContext:
      'U M Street Music studiju kondenzatorski mikrofoni su naš prvi izbor za vokal, akustičnu gitaru i precizno snimanje instrumenata. Phantom power od 48V dolazi iz Volt 876 preampova, koji na svakom kanalu imaju nezavisno uključivanje phantom napajanja. Za vokal, kombinacija kvalitetnog kondenzatora s Volt-ovim Vintage modom daje toplinu i prisutnost koja se sjajno uklapa u mix bez pretjerane naknadne obrade.',
    faq: [
      {
        q: 'Što se dogodi ako uključim phantom power na dinamičkom mikrofonu?',
        a: 'U pravilu ništa. Dinamički mikrofoni s balansiranim (XLR) kablom su dizajnirani da toleriraju phantom power. Ipak, kod ribbon mikrofona situacija je drugačija - stariji modeli bez zaštite mogu se oštetiti, pa provjerite specifikacije.',
      },
      {
        q: 'Zašto su kondenzatorski mikrofoni osjetljiviji na buku prostora?',
        a: 'Zato što je njihova dijafragma tanja i lakša od one u dinamičkom mikrofonu, pa reagira na slabije zvučne valove. To je prednost kad snimate tihe izvore poput šapatnog vokala, ali znači i da čujete klimu, promet i svaki zvuk u prostoriji.',
      },
      {
        q: 'LDC ili SDC - koji mi treba?',
        a: 'Ako snimate pretežno vokal i solo instrumente, LDC je bolji prvi izbor. Ako snimate akustičnu gitaru, udaraljke ili želite stereo par za ambijent, SDC je korisniji. Idealno je imati oba tipa za različite situacije.',
      },
    ],
    relatedTerms: ['mikrofon', 'dinamicki-mikrofon', 'phantom-power', 'preamp', 'pop-filter', 'akusticna-obrada'],
    relatedServices: ['snimanje-vokala', 'snimanje-benda', 'snimanje-covera'],
    relatedGear: ['volt-876', 'apollo-x6'],
  },
  {
    slug: 'dinamicki-mikrofon',
    term: 'Dinamički mikrofon',
    englishTerm: 'Dynamic Microphone',
    category: 'snimanje',
    metaTitle: 'Dinamički mikrofon - kako radi i kad ga koristiti',
    metaDescription:
      'Što je dinamički mikrofon, kako radi princip elektromagnetske indukcije i zašto je nezamjenjiv za snimanje glasnih izvora i live nastupe.',
    definition:
      'Dinamički mikrofon koristi princip elektromagnetske indukcije za pretvorbu zvuka u električni signal. Robustan je, izdržljiv, podnosi visoke razine zvučnog tlaka i ne treba vanjsko napajanje, što ga čini pouzdanim izborom za snimanje glasnih izvora i live situacije.',
    explanation:
      'Unutar dinamičkog mikrofona, tanka dijafragma je povezana s malom zavojnicom (voice coil) od bakrene žice. Ta zavojnica sjedi u magnetskom polju snažnog permanentnog magneta. Kad zvučni valovi pogode dijafragmu, ona se pomiče naprijed-nazad, povlačeći zavojnicu kroz magnetsko polje. Po principu elektromagnetske indukcije, kretanje vodiča u magnetskom polju generira električni napon. Taj napon je analogni prikaz zvučnog vala.\n\nKonstrukcija je mehanički jednostavna i otporna. Nema aktivne elektronike, nema kondenzatorske kapsule osjetljive na vlagu, nema potrebe za phantom napajanjem. Dinamički mikrofon možete pustiti na pod, koristiti na kiši i izložiti ekstremnim glasnoćama - i dalje će raditi.\n\nZbog veće mase dijafragme i zavojnice, dinamički mikrofoni imaju sporiju tranzijentnu reakciju od kondenzatorskih. To znači da ne hvataju ultrabrzne detalje jednako precizno, ali to nije nužno nedostatak. Na gitarskom pojačalu ili bubnju, ta blaga kompresija tranzijenta daje prirodniji, puniji zvuk koji se lakše uklapa u mix.\n\nDinamički mikrofoni su također manje osjetljivi na okolni šum. Kombinirani s kardioidnom usmjerenošću, odlično izoliraju željeni izvor od pozadinskih zvukova. Zato su standard za snimanje u akustički neobrađenim prostorima i na pozornici.\n\nNeki od najpoznatijih mikrofona u povijesti snimanja su dinamički. Shure SM57 i SM58 su prisutni u gotovo svakom studiju i na svakoj pozornici na svijetu. Sennheiser MD 421 je klasik na tom-bubnjevima. Electrovoice RE20 dominira u radio studijima i podcastingu.',
    studioContext:
      'U M Street Music studiju dinamičke mikrofone koristimo svakodnevno, posebno za snimanje gitarskih pojačala, bubnjeva i glasnih vokalnih izvedbi. Kad snimamo bend, kombiniramo dinamičke mikrofone na glasnim izvorima s kondenzatorima na akustičnim instrumentima i overheadovima. Dinamičke mikrofone spajamo na Volt 876 preampove koji imaju dovoljno gainca za pojačanje njihovog nešto slabijeg izlaznog signala, uz nisku razinu šuma čak i pri većim pojačanjima.',
    faq: [
      {
        q: 'Može li dinamički mikrofon biti dobar za snimanje vokala u studiju?',
        a: 'Apsolutno. Shure SM7B je dinamički mikrofon koji se koristi za vokal u top studijima. Michael Jackson je legendaran vokal za Thriller snimio na njemu. Za agresivnije vokale i rap, dinamički mikrofon može biti bolji izbor od kondenzatora.',
      },
      {
        q: 'Zašto je izlazni signal dinamičkog mikrofona slabiji?',
        a: 'Jer dinamički mikrofon nema ugrađeno pojačalo poput kondenzatorskog. Oslanja se isključivo na elektromagnetsku indukciju, koja daje slabiji signal. Zato trebate preamp s dovoljno gainca - barem 60 dB za tiše izvore.',
      },
      {
        q: 'Koliko dugo traje dinamički mikrofon?',
        a: 'Praktički neograničeno uz normalnu upotrebu. Nema aktivne elektronike koja se troši, a mehanički dio je iznimno robustan. Mnogi SM57 mikrofoni u studijima rade besprijekorno i nakon 20-30 godina.',
      },
    ],
    relatedTerms: ['mikrofon', 'kondenzatorski-mikrofon', 'preamp', 'gain', 'signalni-lanac'],
    relatedServices: ['snimanje-benda', 'snimanje-vokala', 'snimanje-podcasta'],
    relatedGear: ['volt-876', 'apollo-x6'],
  },
  {
    slug: 'phantom-power',
    term: 'Phantom power',
    englishTerm: 'Phantom Power / 48V',
    category: 'snimanje',
    metaTitle: 'Phantom power (48V) - što je i čemu služi',
    metaDescription:
      'Što je phantom power, zašto kondenzatorski mikrofoni trebaju 48V napajanje i kako se koristi. Praktičan vodič za snimanje u studiju.',
    definition:
      'Phantom power je istosmjerni napon (najčešće 48V) koji se šalje kroz mikrofonski kabel iz preampa ili audio interfacea prema mikrofonu. Služi za napajanje aktivne elektronike unutar kondenzatorskih mikrofona i nekih drugih uređaja koji zahtijevaju vanjsko napajanje.',
    explanation:
      'Naziv \"phantom\" (fantomsko) dolazi od toga što je napajanje nevidljivo - koristi iste žice kroz koje putuje audio signal, ne zahtijeva dodatne kablove i ne utječe na kvalitetu zvuka. Kad mjerite napon između Pin 2 i Pin 3 na XLR konektoru, dobit ćete 0 volti, jer je identičan napon prisutan na obje signalne žice u odnosu na masu (Pin 1). Audio signal se prenosi kao razlika napona između Pin 2 i Pin 3, pa konstantan DC napon nema utjecaja.\n\nKondenzatorski mikrofoni trebaju phantom power iz dva razloga. Prvo, za polarizaciju kapsule - stalni naboj na backplate ploči koji omogućava da promjena kapaciteta stvori električni signal. Drugo, za napajanje ugrađenog impedancijskog pretvarača koji pojačava iznimno slab signal kapsule prije nego napusti mikrofon.\n\nStandardni napon je 48V prema IEC 61938 normi, ali mnogi mikrofoni rade i s nižim naponima (12V-48V), samo s nešto manjim dinamičkim rasponom. Struja koju phantom power daje je vrlo mala, obično 2-10 mA po kanalu, što je dovoljno za elektroniku mikrofona.\n\nDinamički mikrofoni s balansiranim XLR priključkom ne trebaju phantom power, ali neće se oštetiti ako ga slučajno uključite. Phantom napon je jednak na obje signalne žice, pa se u simetričnom krugu dinamičkog mikrofona poništava. Oprez je potreban samo s nebalansiranim kablovima i starijim ribbon mikrofonima bez zaštite.',
    studioContext:
      'U M Street Music studiju, phantom power je dostupan na svakom kanalu Volt 876 preampa, s individualnim prekidačima za svaki kanal. To je praktično jer prilikom snimanja benda često imamo kombinaciju kondenzatorskih i dinamičkih mikrofona, pa uključujemo phantom samo na kanalima gdje je potreban. Apollo x6 također nudi phantom power na svim Unison preamp ulazima. Uvijek provjeravamo stanje phantom prekidača prije spajanja novih mikrofona.',
    faq: [
      {
        q: 'Hoće li phantom power uništiti moj dinamički mikrofon?',
        a: 'Ne, standardni dinamički mikrofoni s XLR kablom su sigurni. Phantom napon se poništava u simetričnom krugu. Jedini rizik postoji kod nebalansiranih priključaka ili kod starijih ribbon mikrofona bez interne zaštite.',
      },
      {
        q: 'Zašto moj kondenzatorski mikrofon ne radi bez phantom powera?',
        a: 'Jer kondenzatorski mikrofon treba vanjski napon za polarizaciju kapsule i napajanje ugrađenog pojačala. Bez phantom powera, mikrofon neće proizvoditi signal ili će signal biti toliko slab da je neupotrebljiv.',
      },
      {
        q: 'Ima li razlike između phantom powera od 12V i 48V?',
        a: 'Većina studijskih kondenzatorskih mikrofona je dizajnirana za 48V i pri tom naponu daje puni dinamički raspon. Na 12V mikrofon može raditi, ali s manje headrooma i potencijalno višim šumom. Za studijsko snimanje, uvijek koristite 48V.',
      },
    ],
    relatedTerms: ['kondenzatorski-mikrofon', 'mikrofon', 'preamp', 'audio-interface', 'signalni-lanac'],
    relatedServices: ['snimanje-vokala', 'snimanje-benda'],
    relatedGear: ['volt-876', 'apollo-x6'],
  },
  {
    slug: 'di-box',
    term: 'DI box',
    englishTerm: 'DI Box / Direct Injection',
    category: 'snimanje',
    metaTitle: 'DI box (direct injection) - što je i kad ga koristiti',
    metaDescription:
      'Što je DI box, kako pretvara signal instrumenta za studijsko snimanje i zašto eliminira šumove. Praktičan vodič za bas, gitaru i klavijature.',
    definition:
      'DI box (Direct Injection box) je uređaj koji pretvara nebalasirani, visokoimpedancijski signal instrumenta u balansirani, niskoimpedancijski signal pogodan za preamp ili audio interface. Time se eliminiraju šumovi, omogućuju dulje kabelske dionice i postiže čist, direktan zvuk instrumenta.',
    explanation:
      'Električni instrumenti poput bas gitare, električne gitare i klavijatura imaju visokoimpedancijski izlaz (tipično 10-50 kOhm) dizajniran za pojačala. Mikrofoni i miksete rade s niskoimpedancijskim, balansiranim signalima (150-600 ohm). Kad direktno spojite gitaru u mikser ili audio interface bez instrument ulaza, dobit ćete gubitak visokih frekvencija, slabiji signal i potencijalno više šuma. DI box rješava taj problem.\n\nPostoje dvije vrste DI boxova. Pasivni DI koristi transformator za konverziju impedancije i balansiranje signala. Nema aktivne elektronike, ne treba napajanje i ima prirodan, blago zaobljen zvuk koji gitaristi često preferiraju. Transformator ujedno galvanski izolira ulaz od izlaza, čime eliminira ground loop šumove.\n\nAktivni DI ima ugrađeno pojačalo (obično napajano phantom powerom ili baterijom) koje nudi veći headroom, konzistentniji frekvencijski odgovor i bolje podnosi slabe signale s pasivnih pickupa. Aktivan DI je često bolji izbor za bas gitare s pasivnom elektronikom i za klavijature.\n\nVećina DI boxova ima i thru izlaz koji prosljeđuje originalni signal prema pojačalu instrumenta. To je izuzetno korisno u studiju jer omogućava istovremeno snimanje direktnog signala (DI) i mikrofoniranog pojačala, s mogućnošću da se naknadno odabere bolji izvor ili da se oba kombiniraju u mix-u.\n\nDI box je jedan od onih uređaja koji ne privlači pozornost, ali kad ga nemate, čujete razliku. Čist, šumom slobodan DI signal basa je temelj pola svih modernih produkcija.',
    studioContext:
      'U M Street Music studiju koristimo DI boxove svaki put kad snimamo bas gitaru, akustičnu gitaru s pickup-om ili klavijature. Standardni pristup za bas gitaru je paralelno snimanje - DI signal ide direktno u Volt 876 preamp za čist, definirani zvuk, dok se istovremeno mikrofonira bas pojačalo za karakter i grit. Tijekom mixing-a kombiniramo ta dva signala prema potrebi. Za klavijature i synthesizere, DI box eliminira eventualne ground loop šumove koji se pojavljuju kad je mnogo opreme spojeno.',
    faq: [
      {
        q: 'Trebam li DI box ako moj audio interface ima instrument ulaz?',
        a: 'Instrument ulaz (Hi-Z) na interfaceu radi istu stvar kao DI box - prilagođava impedanciju. Za jedno snimanje to je dovoljno. DI box je korisniji kad trebate više instrument kanala ili kad je instrument daleko od interfacea.',
      },
      {
        q: 'Aktivni ili pasivni DI box - koji je bolji?',
        a: 'Ovisi o instrumentu. Aktivni DI je bolji za pasivne bas gitare i slabe signale jer ima pojačalo. Pasivni DI je odličan za aktivne instrumente, klavijature i situacije gdje želite topliji zvuk transformatora. Za studijsku upotrebu, dobro je imati oba tipa.',
      },
    ],
    relatedTerms: ['preamp', 'signalni-lanac', 'audio-interface', 'gain', 'audio-kabel'],
    relatedServices: ['snimanje-benda', 'snimanje-demo-snimke'],
    relatedGear: ['volt-876', 'apollo-x6'],
  },
  {
    slug: 'overdub',
    term: 'Overdub',
    englishTerm: 'Overdub',
    category: 'snimanje',
    metaTitle: 'Overdub - tehnika nasnimavanja u studiju',
    metaDescription:
      'Što je overdub, kako se nasnimavaju dodatni slojevi na postojeću snimku i zašto je to temeljna tehnika studijskog snimanja.',
    definition:
      'Overdub (nasnimavanje) je tehnika snimanja u kojoj se nova dionica snima dok izvođač sluša prethodno snimljene trake. Time se gradi višeslojna snimka u kojoj svaki instrument ili vokal ima vlastitu traku, bez potrebe da svi glazbenici sviraju istovremeno.',
    explanation:
      'Overdub je možda najvažnija tehnika koja je promijenila studijsko snimanje. Prije višekanalnih snimača, cijeli bend je morao svirati zajedno, a svaka greška značila je ponavljanje od početka. Overdubbing je omogućio da se svaka dionica snima zasebno, u kontroliranim uvjetima, s mogućnošću ponavljanja dok rezultat ne bude savršen.\n\nProces je jednostavan. Izvođač stavlja slušalice, u kojima čuje već snimljene trake (i eventualno click track za tempo), te snima svoju dionicu na novu traku u DAW-u. Inženjer zvuka može podesiti monitoring mix tako da izvođač čuje točno ono što mu treba za inspiriranu izvedbu - više svojeg instrumenta, manje bubnjeva, reverb na vokalu za ugodniji osjećaj.\n\nOverdub se koristi na razne načine. Najčešće za snimanje vokala nakon što je instrumentalna podloga gotova. Zatim za dodavanje harmonija, udvostručavanje (double tracking) dionica za puniji zvuk, snimanje solističkih dionica, pa čak i za zamjenu pojedinih instrumenata koji u izvedbi uživo nisu zvučali dovoljno dobro.\n\nDouble tracking je specifična tehnika overduba gdje izvođač snima istu dionicu dvaput. Male razlike u tajmingu i intonaciji između dva take-a stvaraju prirodan chorus efekt koji zvuči punije i šire od jednog take-a. Beatles su ovu tehniku popularizirali, a danas je standard za vokale u gotovo svim žanrovima.\n\nKljučan aspekt overdubbinga je niska latencija. Izvođač mora čuti pratnju u slušalicama bez zamjetnog kašnjenja, inače gubi osjećaj za ritam i izvedba pati. Zato su kvalitetni audio interfaceovi s latencijom ispod 5 milisekundi bitni za ugodnu overdub session.',
    studioContext:
      'U M Street Music studiju overdub je svakodnevna praksa. Tipičan tijek rada za snimanje pjesme počinje s ritmičkom sekcijom (bubnjevi i bas), a zatim se nasnimavaju gitare, klavijature, vokali i sve ostalo sloj po sloj. Apollo x6 nudi latenciju dovoljno nisku da izvođači nemaju problema s tajmingom. Kroz Volt 876 možemo istovremeno snimati do osam kanala za live session, a zatim precizno nasnimavati pojedine dionice. Overdub monitoring mix podešavamo prema želji svakog izvođača - jer opušten glazbenik daje bolju izvedbu.',
    faq: [
      {
        q: 'Je li bolje snimati sve odjednom ili overdubom?',
        a: 'Ovisi o projektu. Live snimanje hvata energiju zajedničke izvedbe i prirodnu interakciju između glazbenika. Overdub daje veću kontrolu nad svakom dionicom. Mnogi projekti kombiniraju oba pristupa - ritmička sekcija svira zajedno, a vokali i solo dionice se nasnimavaju.',
      },
      {
        q: 'Koliko slojeva overduba je previše?',
        a: 'Nema strogog pravila. Neke produkcije imaju desetke vokalnih slojeva. Problem nastaje kad previše slojeva zamuti mix. Dobra praksa je snimiti onoliko koliko pjesma zahtijeva, a u mixing-u odlučiti što ostaje.',
      },
      {
        q: 'Mogu li sam nasnimavati kod kuće?',
        a: 'Da, ali kvaliteta ovisi o opremi i akustici prostora. Trebate audio interface s niskom latencijom, kvalitetne slušalice zatvorenog tipa (da se pratnja ne čuje u mikrofonu) i barem osnovnu akustičku obradu. Za profesionalni rezultat, studijska okolina čini veliku razliku.',
      },
    ],
    relatedTerms: ['latencija', 'daw', 'monitoring', 'mikrofon', 'audio-interface'],
    relatedServices: ['snimanje-vokala', 'snimanje-benda', 'snimanje-covera', 'snimanje-demo-snimke'],
    relatedGear: ['apollo-x6', 'volt-876'],
  },
  {
    slug: 'pop-filter',
    term: 'Pop filter',
    englishTerm: 'Pop Filter / Pop Shield',
    category: 'snimanje',
    metaTitle: 'Pop filter - zaštita mikrofona od ploziva',
    metaDescription:
      'Što je pop filter, kako sprječava plozivne zvukove kod snimanja i zašto je obavezan dodatak za svaki studijski mikrofon.',
    definition:
      'Pop filter je zaštitni filtar koji se postavlja između izvođača i mikrofona kako bi spriječio plozivne zvukove - nagle udare zraka koji nastaju pri izgovoru glasova poput P, B, T i K. Bez pop filtera, ti udari zraka uzrokuju neugodno izobličenje koje je teško ukloniti u naknadnoj obradi.',
    explanation:
      'Kad izgovorite glas P ili B, usne stvaraju kratki, snažni mlaz zraka. Taj mlaz direktno pogađa dijafragmu mikrofona i uzrokuje naglo pomicanje koje stvara dubok, boomast zvuk - takozvani ploziv ili \"pop\". Problem je najizraženiji kod kondenzatorskih mikrofona velikog dijafragma, upravo onih koji se najčešće koriste za snimanje vokala, jer je njihova dijafragma najtanja i najosjetljivija.\n\nPop filter djeluje kao fizička barijera koja presreće mlaz zraka prije nego dosegne dijafragmu. Zvučni valovi prolaze kroz filter gotovo neometano, ali kinetička energija mlaza zraka se raspršuje na mrežici filtera. Rezultat je čist vokal bez plozivnih artefakata.\n\nNajčešći tipovi pop filtera su mrežasti (od najlona ili metala) i pjenasti (foam windscreen). Najlonski pop filteri s dvostrukim slojem mrežice su najučinkovitiji za studio jer minimalno utječu na frekvencijski odgovor. Metalni pop filteri su izdržljiviji i lakši za čišćenje. Pjenasti windscreenovi su kompaktniji, ali prigušuju visoke frekvencije više nego mrežasti filteri.\n\nOptimalna udaljenost pop filtera od mikrofona je 5-10 centimetara. Izvođač bi trebao biti dodatnih 10-15 centimetara od pop filtera. Kut postavljanja također utječe - blagi nagib u stranu može dodatno smanjiti plozive jer preusmjerava mlaz zraka mimo dijafragme.\n\nDodatna korist pop filtera je zaštita mikrofona od vlage. Slina sadrži soli koje korodiraju dijafragmu kondenzatorskog mikrofona, pa pop filter produžuje životni vijek skupe kapsule.',
    studioContext:
      'U M Street Music studiju pop filter je obavezan dio setup-a za svaku vokalnu session. Koristimo mrežaste pop filtere s dvostrukim slojem koji efikasno eliminiraju plozive bez utjecaja na ton. Poziciju filtera prilagođavamo svakom pjevaču - neki su agresivniji s izgovorom i trebaju veći razmak, dok tiši pjevači mogu biti bliže. Osim zaštite od ploziva, pop filter služi i kao vizualna referenca izvođaču za održavanje konzistentne udaljenosti od mikrofona, što je važno za ujednačen zvuk tijekom cijele snimke.',
    faq: [
      {
        q: 'Mogu li umjesto pop filtera koristiti čarapu preko mikrofona?',
        a: 'Tehnički, bilo kakva tkanina ispred mikrofona će ublažiti plozive. Ali čarapa ili improvizirana zaštita značajno prigušuje visoke frekvencije i mijenja karakter zvuka. Namjenski pop filter je dizajniran da bude akustički transparentan, a košta vrlo malo.',
      },
      {
        q: 'Trebam li pop filter za dinamički mikrofon?',
        a: 'Dinamički mikrofoni su manje osjetljivi na plozive jer imaju težu dijafragmu, a mnogi već imaju ugrađeni windscreen. Ali za studijsko snimanje vokala na dinamičkom mikrofonu, pop filter i dalje pomaže, posebno kod pjevača koji su glasni i ekspresivni.',
      },
      {
        q: 'Metalni ili najlonski pop filter - koji je bolji?',
        a: 'Oba rade odlično. Metalni su izdržljiviji, lakše se čiste i propuštaju nijansu više zraka. Najlonski s dvostrukim slojem su nešto efikasniji protiv ploziva. Za studijsku upotrebu, razlika je minimalna.',
      },
    ],
    relatedTerms: ['mikrofon', 'kondenzatorski-mikrofon', 'dinamicki-mikrofon', 'frekvencija'],
    relatedServices: ['snimanje-vokala', 'snimanje-podcasta', 'snimanje-voiceovera'],
  },
  {
    slug: 'latencija',
    term: 'Latencija',
    englishTerm: 'Latency',
    category: 'snimanje',
    metaTitle: 'Latencija - kašnjenje zvuka u studiju',
    metaDescription:
      'Što je latencija u audio produkciji, zašto nastaje kašnjenje signala i kako ga smanjiti. Praktičan vodič za snimanje bez kašnjenja.',
    definition:
      'Latencija je vremensko kašnjenje između trenutka kad zvuk uđe u sustav i trenutka kad se reproducira na izlazu. U kontekstu studijskog snimanja, to je kašnjenje koje izvođač čuje u slušalicama između sviranja i zvuka koji mu se vraća, a nastaje zbog AD/DA konverzije i obrade signala u računalu.',
    explanation:
      'Kad snimate kroz računalo, zvuk prolazi kroz nekoliko koraka: mikrofon hvata zvuk, preamp ga pojačava, AD konverter ga digitalizira, računalo prima podatke kroz driver, DAW ih obrađuje, DA konverter vraća signal u analogni oblik i šalje ga na slušalice. Svaki od tih koraka dodaje malu količinu kašnjenja. Ukupno kašnjenje - od ulaza do izlaza - je latencija.\n\nNajveći doprinos latenciji je buffer size u softveru. Buffer je spremnik podataka koji DAW koristi za stabilnu obradu zvuka. Veći buffer znači stabilniji rad i manje šanse za ispade zvuka (clicks, pops), ali veću latenciju. Manji buffer smanjuje latenciju, ali zahtijeva snažnije računalo. Formula je jednostavna: podijelite buffer size sa sample rateom i dobijete latenciju jednog smjera. Na primjer, buffer od 128 samplea pri 48 kHz daje 2,67 milisekundi - ali ukupna roundtrip latencija (ulaz + izlaz) je dvostruka, dakle oko 5,3 ms.\n\nZa izvođača, latencija ispod 10 milisekundi je gotovo neprimjetna. Između 10 i 20 ms postaje zamjetna, a iznad 20 ms ozbiljno ometa izvedbu jer se javlja osjećaj razdvojenosti između sviranja i zvuka. Za usporedbu, zvuk putuje oko 3,4 metra za 10 milisekundi, što odgovara udaljenosti od gitarskog pojačala u sobi za vježbanje.\n\nModerni audio interfaceovi s Thunderbolt povezivanjem nude roundtrip latenciju ispod 3 milisekundi, što je praktički instantno. USB interfaceovi su nešto sporiji, ali kvalitetni modeli postižu ispod 6 ms, što je i dalje sasvim prihvatljivo.\n\nMnogi interfaceovi nude direct monitoring - mogućnost da se ulazni signal proslijedi direktno na slušalice zaobilazeći računalo. To eliminira latenciju potpuno, ali izvođač tada ne čuje eventualne softverske efekte poput reverba. Hibridno rješenje, poput UAD platforme, obrađuje efekte u hardveru samog interfacea s gotovo nultom latencijom.',
    studioContext:
      'U M Street Music studiju latencija praktički nije problem zahvaljujući Apollo x6 s Thunderbolt 3 vezom koji postiže roundtrip latenciju od oko 2 milisekunde. Kroz UAD ekosustav, izvođači mogu slušati svoj vokal s reverb-om i kompresijom u realnom vremenu, bez ikakve latencije, jer se obrada događa na DSP čipovima unutar samog interfacea. Za session-e s više kanala, Volt 876 nudi pouzdan direct monitoring koji garantira da izvođač uvijek čuje sebe bez kašnjenja, čak i pri većim buffer postavkama potrebnima za složenije projekte.',
    faq: [
      {
        q: 'Kolika latencija je prihvatljiva za snimanje?',
        a: 'Ispod 10 ms roundtrip latencije je idealno i gotovo neprimjetno. Do 15 ms je prihvatljivo za većinu izvođača. Iznad 20 ms počinje smetati, posebno bubnjarima i pjevačima koji su osjetljiviji na tajming.',
      },
      {
        q: 'Zašto imam ispade zvuka kad smanjim buffer size?',
        a: 'Manji buffer zahtijeva da procesor brže obradi podatke. Ako računalo ne stigne, nastaju ispadi (clicks, pops). Rješenja su: zatvorite nepotrebne programe, zamrznite trake s mnogo plugin-ova ili koristite interface s nativnim DSP-om poput Apollo platforme.',
      },
      {
        q: 'Što je direct monitoring i trebam li ga?',
        a: 'Direct monitoring prosljeđuje ulazni signal direktno na slušalice bez prolaska kroz računalo, čime eliminira latenciju. Korisno je za snimanje kad ne trebate čuti softverske efekte u realnom vremenu. Većina kvalitetnih interfaceova ima tu opciju.',
      },
    ],
    relatedTerms: ['audio-interface', 'ad-da-konverzija', 'sample-rate', 'daw', 'overdub', 'monitoring'],
    relatedServices: ['snimanje-vokala', 'snimanje-benda'],
    relatedGear: ['apollo-x6', 'volt-876'],
  },

  // ==========================================
  // MIXING
  // ==========================================
  {
    slug: 'mixing',
    term: 'Mixing',
    englishTerm: 'Mixing / Mixdown',
    category: 'mixing',
    metaTitle: 'Mixing - što je i kako se radi',
    metaDescription:
      'Što je mixing, kako se radi profesionalni mix pjesme i zašto je bitan za kvalitetan zvuk. Objašnjenje procesa korak po korak.',
    definition:
      'Mixing je proces u kojem se višestruke snimljene trake (vokali, instrumenti, efekti) kombiniraju u stereo ili surround zvučnu sliku. Cilj je postići jasnoću, balans i emocionalnu snagu pjesme kroz podešavanje glasnoće, EQ-a, kompresije i prostornih efekata.',
    explanation:
      'Mixing počinje nakon što je snimanje završeno i sve trake su editirane. Inženjer zvuka uzima sirove snimke, koje često zvuče kaotično i neorganizirano, i od njih gradi završeni zvuk pjesme.\n\nProces uključuje nekoliko ključnih koraka. Prvo se balansiraju glasnoće svih elemenata tako da svaki instrument i vokal ima svoje mjesto. Zatim se koristi EQ za oblikovanje tonalnog spektra, kompresija za kontrolu dinamike, te reverb i delay za stvaranje prostornosti.\n\nDobar mix nije samo tehnički ispravan, nego podržava emociju pjesme. Agresivna rock pjesma traži drugačiji pristup od intimne balade. Inženjer zvuka mora razumjeti namjeru izvođača i prenijeti je kroz zvuk.\n\nModerni mixing kombinira digitalne alate (DAW, pluginove) s analognom opremom. Digitalni alati nude preciznost i neograničen recall, dok analogna oprema dodaje toplinu, dubinu i karakter koji je teško replicirati softverski.',
    studioContext:
      'U M Street Music studiju mixing se radi u hibridnom setup-u koji kombinira digitalne alate s analognom opremom. Signal prolazi kroz Apollo x6, zatim kroz Dangerous Music D-Box+ za analogni summing više grupa instrumenata, pa kroz Tegeler Audio Manufaktur Creme za karakterističnu EQ i kompresiju, i konačno kroz SSL Fusion za završnu stereo obradu. Ovaj hibridni pristup daje mixu dubinu i toplinu analogne obrade s preciznošću digitalnog rada.',
    faq: [
      {
        q: 'Koliko traje mixing jedne pjesme?',
        a: 'Ovisi o složenosti. Jednostavna pjesma (vokal + gitara) može se mixati za 3-4 sata. Puni band mix s mnogo traka obično traje 6-10 sati. U to je uključen i revizijski proces.',
      },
      {
        q: 'Koja je razlika između mixing-a i mastering-a?',
        a: 'Mixing radi s pojedinačnim trakama (vokal, gitara, bubnjevi, bas...) i od njih gradi stereo mix. Mastering radi s gotovim stereo mixom i priprema ga za distribuciju, optimizirajući glasnoću, tonalni balans i format.',
      },
      {
        q: 'Mogu li poslati pjesmu na mixing ako nisam snimao u studiju?',
        a: 'Da. Nudimo online mixing gdje nam šaljete višekanalne snimke u WAV formatu. Radimo s materijalom snimljenim bilo gdje, bitno je samo da su snimke čiste i u odgovarajućem formatu.',
      },
    ],
    relatedTerms: ['eq', 'kompresija', 'reverb', 'delay', 'saturacija', 'mastering', 'gain'],
    relatedServices: ['mixing-pjesme', 'online-mixing', 'mixing-za-streaming'],
    relatedGear: ['d-box-plus', 'tegeler-creme', 'ssl-fusion'],
  },
  {
    slug: 'eq',
    term: 'EQ',
    englishTerm: 'Equalization',
    category: 'mixing',
    metaTitle: 'EQ (ekvalizacija) - što je i kako se koristi',
    metaDescription:
      'Što je EQ, kako radi ekvalizacija u audio produkciji i kako se koristi za oblikovanje zvuka. Praktičan vodič za glazbenike.',
    definition:
      'EQ (ekvalizacija) je alat za pojačavanje ili smanjivanje određenih frekvencija u audio signalu. Koristi se za oblikovanje tonalnog karaktera zvuka, uklanjanje nepoželjnih frekvencija i osiguravanje da svaki instrument ima svoje mjesto u miksu.',
    explanation:
      'Ljudsko uho čuje frekvencije od otprilike 20 Hz do 20.000 Hz. EQ omogućava kontrolu nad cijelim tim rasponom, podijeljenim na niske (bas), srednje i visoke (treble) frekvencije.\n\nPostoji nekoliko tipova EQ-a. Parametrički EQ nudi potpunu kontrolu nad frekvencijom, pojačanjem i širinom (Q faktor), što ga čini najfleksibilnijim alatom. Grafički EQ ima fiksne frekvencije s klizačima za svaku. Shelving EQ pojačava ili smanjuje sve frekvencije iznad ili ispod zadane točke.\n\nU mixing-u, EQ se koristi na dva osnovna načina: korektivno i kreativno. Korektivni EQ uklanja probleme, poput bučnog niskofrekvencijskog šuma ili rezonantnih frekvencija koje zvuče neprirodno. Kreativni EQ oblikuje karakter zvuka, poput dodavanja sjaja vokalu pojačavanjem visokih frekvencija ili topline gitari pojačavanjem srednjih.\n\nPravilo u mixing-u glasi: bolje je smanjivati nego pojačavati. Uklanjanje nepotrebnih frekvencija ostavlja više prostora za elemente koji su bitni, a rezultat zvuči prirodnije nego agresivno pojačavanje.',
    studioContext:
      'U M Street Music studiju EQ se koristi u svakoj fazi produkcije. Za mastering koristimo SSL Fusion koji ima stereo EQ sekciju dizajniranu za suptilne korekcije cijelokupnog mixa, te Tegeler Audio Manufaktur Creme s Pultec-style pasivnim EQ-om koji dodaje toplinu i zrak bez oštrine. Pultec pristup je posebno efektan na master busu jer široki, blagi potezi pasivnog EQ-a zvuče prirodno i muzikalno.',
    faq: [
      {
        q: 'Koje frekvencije pojačati na vokalu?',
        a: 'Ovisi o pjevaču i žanru. Općenito, prisutnost vokala je u rasponu 2-5 kHz, a zrak iznad 10 kHz. Ali prvo uklonite problematične frekvencije (muddiness oko 200-400 Hz, rezonancije), pa tek onda pojačavajte.',
      },
      {
        q: 'Što je high-pass filter?',
        a: 'High-pass filter (HPF) propušta visoke frekvencije i reže niske ispod zadane točke. Koristi se na gotovo svim trakama osim basa i kick bubnja za uklanjanje niskofrekvencijskog šuma i rumpla koji zamagljuju mix.',
      },
      {
        q: 'Je li bolje koristiti analogni ili digitalni EQ?',
        a: 'Oboje imaju svoje mjesto. Digitalni EQ je precizniji za korektivni rad (kirurško uklanjanje problema), dok analogni EQ dodaje karakter i toplinu. U praksi, kombinacija oba pristupa daje najbolje rezultate.',
      },
    ],
    relatedTerms: ['mixing', 'kompresija', 'gain', 'mastering'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['ssl-fusion', 'tegeler-creme'],
  },
  {
    slug: 'kompresija',
    term: 'Kompresija',
    englishTerm: 'Compression',
    category: 'mixing',
    metaTitle: 'Kompresija zvuka - što je i kako radi',
    metaDescription:
      'Što je kompresija u audio produkciji, kako radi kompresor i zašto je bitna za mixing i mastering. Objašnjenje parametara i primjena.',
    definition:
      'Kompresija je postupak smanjivanja dinamičkog raspona audio signala. Kompresor automatski smanjuje glasnoću signala kad prijeđe zadani prag (threshold), čime se tiši dijelovi percipiraju glasnije, a glasni dijelovi se kontroliraju.',
    explanation:
      'Zamislite pjevača koji šapće u jednom dijelu pjesme, a u refrenu pjeva punim glasom. Razlika u glasnoći može biti 20 ili više decibela. Kompresor tu razliku smanjuje, čineći tiše dijelove čujnijima u kontekstu mixa bez da glasni dijelovi postanu presnažni.\n\nKompresor ima nekoliko ključnih parametara. Threshold određuje razinu iznad koje kompresija počinje djelovati. Ratio definira koliko se signal smanjuje (npr. 4:1 znači da signal koji prijeđe threshold za 4 dB izlazi pojačan samo za 1 dB). Attack kontrolira brzinu reakcije kompresora, a release koliko brzo se kompresija otpušta.\n\nRazličiti tipovi kompresora imaju različit karakter. VCA kompresori su brzi i precizni, odlični za kontrolu dinamike. FET kompresori su agresivni i muzikalni, popularni na vokalu i bubnjevima. Optički kompresori reagiraju sporo i blago, idealni za bas i bus kompresiju. Varijable-mu kompresori su najglatži, savršeni za master bus.\n\nKompresija je možda najteži alat za savladavanje u audio produkciji jer je njezin učinak suptilan. Prevelika kompresija uništava dinamiku i čini zvuk beživotnim, dok pravilno dozirana kompresija donosi energiju, konzistentnost i profesionalan zvuk.',
    studioContext:
      'U M Street Music studiju kompresija se koristi na svim razinama produkcije. Tegeler Audio Manufaktur Creme nudi vrhunsku bus kompresiju s varijable-mu karakterom koji je savršen za lijepljenje elemenata mixa u koherentnu cjelinu. SSL Fusion dodaje HF Compressor specifično dizajniran za kontrolu oštrih visokih frekvencija u mastering-u. Kombinacija analognih kompresora s digitalnim pluginovima na pojedinačnim trakama daje mix koji diše i ima dinamiku, a opet zvuči kontrolirano.',
    faq: [
      {
        q: 'Koliko kompresije staviti na vokal?',
        a: 'Za pop i rock vokal, 3-6 dB gain redukcije je dobar početak. Koristite ratio 3:1 do 4:1, srednji attack (10-30 ms) da propustite tranzijentu, i release koji prati tempo pjesme. Slušajte, ne gledajte brojke.',
      },
      {
        q: 'Što je parallelna kompresija?',
        a: 'Parallelna kompresija (New York kompresija) miješa originalni, nekomprimirani signal s jako komprimiranom kopijom. Rezultat je snaga i gustoća kompresije, ali s očuvanom dinamikom originala. Posebno efektna na bubnjevima.',
      },
      {
        q: 'Trebam li kompresor na svakoj traci?',
        a: 'Ne nužno. Kompresija je alat, ne pravilo. Ako traka već ima konzistentnu dinamiku, možda joj ne treba kompresija. Bolje je koristiti manje kompresije na više mjesta nego jednu jaku kompresiju na jednom mjestu.',
      },
    ],
    relatedTerms: ['limiter', 'dinamicki-raspon', 'gain', 'mixing', 'mastering'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['tegeler-creme', 'ssl-fusion'],
  },
  {
    slug: 'reverb',
    term: 'Reverb',
    englishTerm: 'Reverberation',
    category: 'mixing',
    metaTitle: 'Reverb - što je i kako se koristi u mixing-u',
    metaDescription:
      'Što je reverb, kako radi i kako se koristi u mixing-u za stvaranje prostornosti zvuka. Tipovi reverba i praktični savjeti.',
    definition:
      'Reverb (reverberacija) je akustički fenomen koji nastaje kad se zvuk odbija od površina u prostoru i vraća slušatelju s kratkim kašnjenjem. U audio produkciji, reverb se koristi kao efekt za simuliranje akustičkih prostora i dodavanje dubine i prostornosti zvuku.',
    explanation:
      'Kad pljesnete rukama u velikoj katedrali, čujete kako zvuk traje i postupno nestaje. To je reverb. U maloj sobi reverb je kratak i diskretan. U velikoj dvorani je dug i dramatičan. Svaki prostor ima svoju jedinstvenu reverberaciju.\n\nU mixing-u, reverb se koristi za smještanje zvukova u virtualni prostor. Bez reverba, snimke zvuče suho i nepovezano. S pravom količinom reverba, mix dobiva dubinu, elementi se međusobno povezuju, a zvuk postaje trodimenzionalan.\n\nPostoji nekoliko tipova reverba. Room reverb simulira malu prostoriju, hall reverb veliku dvoranu, plate reverb metalne ploče koje vibriraju, a spring reverb oprugu. Svaki tip ima drugačiji karakter i primjenu. Room za intimnost, hall za veličanstvenost, plate za vokal, spring za gitaru.\n\nKljučni parametri reverba su decay time (koliko dugo reverb traje), pre-delay (razmak između izvornog zvuka i početka reverba), te EQ reverba (oblikovanje boje odjeka). Pre-delay je posebno bitan za vokal jer odvaja izvorni glas od odjeka i čuva razumljivost.',
    studioContext:
      'U M Street Music studiju reverb se koristi kombinacijom digitalnih pluginova za preciznu kontrolu i analognog signalnog lanca za dodavanje karaktera. Reverb se obično postavlja na aux/send kanale, tako da više elemenata dijeli isti prostor, što mixa daje koherentnost. Konačni stereo mix prolazi kroz SSL Fusion čiji Vintage Drive može dodati blagu saturaciju reverb repovima, dajući im toplinu i prirodnost.',
    faq: [
      {
        q: 'Koliko reverba staviti na vokal?',
        a: 'Dovoljno da vokal ne zvuči suho, ali ne toliko da gubi razumljivost. Pravilo: pojačavajte reverb dok ga ne čujete, pa ga smanjite malo natrag. Pre-delay od 30-80 ms pomaže da vokal ostane u prvom planu.',
      },
      {
        q: 'Trebam li koristiti isti reverb na svim elementima?',
        a: 'Ne nužno, ali dijeljenje jednog ili dva reverba na više elemenata daje osjećaj da svi sviraju u istom prostoru. Dodatni reverbi se koriste za specijalne efekte na pojedinim trakama.',
      },
      {
        q: 'Koja je razlika između reverba i delay-a?',
        a: 'Reverb simulira akustički prostor s mnogo gustih odjeka. Delay ponavlja zvuk s jasno čujnim ponavljanjima. Reverb daje prostornost, delay daje ritam i dubinu. Oboje se koriste u mixing-u, često zajedno.',
      },
    ],
    relatedTerms: ['delay', 'mixing', 'eq'],
    relatedServices: ['mixing-pjesme'],
  },
  {
    slug: 'delay',
    term: 'Delay',
    englishTerm: 'Delay / Echo',
    category: 'mixing',
    metaTitle: 'Delay - što je i kako se koristi',
    metaDescription:
      'Što je delay efekt, kako radi i kako se koristi u mixing-u. Tipovi delay-a, sinkronizacija s tempom i praktični savjeti.',
    definition:
      'Delay je audio efekt koji snima ulazni signal i reproducira ga nakon zadanog vremenskog intervala, stvarajući jedno ili više ponavljanja (eho). Koristi se u mixing-u za dodavanje dubine, ritma i prostornosti.',
    explanation:
      'Delay je jedan od najstarijih i najkorištenijih efekata u glazbi. Od tape echo-a iz 1950-ih do modernih digitalnih pluginova, delay je prisutan u gotovo svakom žanru.\n\nOsnovni parametri delay-a su vrijeme kašnjenja (delay time), povratna veza (feedback) koja kontrolira broj ponavljanja, i glasnoća ponavljanja (mix/wet level). Delay time se obično sinkronizira s tempom pjesme - četvrtinke, osminke ili punktirane osminke su najčešći izbor.\n\nPostoji više tipova delay-a. Slapback delay ima jedno kratko ponavljanje (75-250 ms) i koristi se za rockabilly vokal i gitaru. Tape delay emulira analogne tape echo uređaje s toplim, degradiranim ponavljanjima. Ping-pong delay šalje ponavljanja naizmjenično lijevo-desno, šireći stereo sliku.\n\nU mixing-u, delay je alternativa reverbu za stvaranje dubine bez zamagljivanja mixa. Kratki delay (30-80 ms) može zamijeniti reverb na vokalu u gustim mixovima, dajući osjećaj prostora bez gubitka razumljivosti. Duži delay dodaje ritmičku složenost i dramatičnost.',
    studioContext:
      'U M Street Music studiju delay se koristi kao kreativni alat u svakom mixu. Za vokal, tempo-sinkronizirani delay s blagim feedback-om daje dubinu bez zauzimanja previše prostora. Za gitare, tape delay emulacije dodaju retro karakter. Analogni signalni lanac (Tegeler Creme, SSL Fusion) dodaje toplinu delay repovima kad prolaze kroz bus obradu, čime digitalni delay dobiva organskiji zvuk.',
    faq: [
      {
        q: 'Kako sinkronizirati delay s tempom pjesme?',
        a: 'Većina pluginova ima opciju sync to BPM. Za ručni izračun: 60.000 podijeljeno s BPM daje delay u milisekundama za četvrtinke. Za osminke podijelite s 2, za punktirane osminke pomnožite s 1.5.',
      },
      {
        q: 'Staviti delay prije ili poslije reverba?',
        a: 'Obično delay ide na zasebni send kanal, a reverb na svoj. Ako ih serirate, delay prije reverba daje prirodniji rezultat jer reverb zamagljuje ponavljanja. Obrnuto daje posebne efekte.',
      },
    ],
    relatedTerms: ['reverb', 'mixing'],
    relatedServices: ['mixing-pjesme'],
  },
  {
    slug: 'saturacija',
    term: 'Saturacija',
    englishTerm: 'Saturation',
    category: 'mixing',
    metaTitle: 'Saturacija zvuka - što je i kako se koristi',
    metaDescription:
      'Što je saturacija u audio produkciji, kako dodaje toplinu i karakter zvuku, i razlika između analogne i digitalne saturacije.',
    definition:
      'Saturacija je blago izobličenje audio signala koje dodaje harmoničke komponente izvornom zvuku. U kontroliranim količinama, saturacija dodaje toplinu, punoću i karakter zvuku, posebno na vokalu, bubnjevima i gitari.',
    explanation:
      'Saturacija nastaje kad se signal pojača iznad linearnog raspona uređaja. U analognim uređajima, to se događa prirodno kad signal prolazi kroz lampene (tube) krugove, transformatore ili magnetsku traku. Te nelinearnosti dodaju harmonike koji ljudsko uho percipira kao toplinu i punoću.\n\nPostoji više tipova saturacije. Tube saturacija dodaje pretežno neparne i parne harmonike s toplim, blagim karakterom. Transformer saturacija (poput one u klasičnim konzolama) dodaje gustoću u srednje-niskim frekvencijama. Tape saturacija komprimira tranzijentu i dodaje blagu kompresiju s karakterističnim toplim zvukom.\n\nU digitalnom okruženju, pluginovi emuliraju ove analogne procese. Rezultat je sličan, ali vrhunska analogna saturacija ima organsku kvalitetu koju je teško savršeno replicirati. Zato mnogi profesionalni studiji i dalje koriste analognu opremu za tu specifičnu funkciju.\n\nSaturacija se koristi suptilno na pojedinačnim trakama za dodavanje karaktera, na bus grupama za lijepljenje elemenata, i na master busu za finalnu toplinu. Previše saturacije zvuči distorzirano i zamućeno.',
    studioContext:
      'U M Street Music studiju analogna saturacija je ključan dio zvuka. Tegeler Audio Manufaktur Creme prolazi signal kroz pravu lampenu saturaciju, što daje toplinu i dubinu koju digitalni alati teško repliciraju. SSL Fusion nudi Vintage Drive, inspiriran klasičnom SSL konzolnom saturacijom, za suptilnu harmoničku obojenost na master busu. Universal Audio Volt 876 s Vintage modom dodaje blagu harmoničku karakteristiku inspiriranu UA 610 preampom, direktno na ulazu.',
    faq: [
      {
        q: 'Koliko saturacije je previše?',
        a: 'Ako čujete saturaciju kao distorziju, previše je. Cilj je da mix zvuči toplije i punije bez da se čuje izobličenje. Smanjite količinu dok ne nestane, pa ju malo vratite. To je obično prava količina.',
      },
      {
        q: 'Na čemu koristiti saturaciju?',
        a: 'Vokal, bas gitara, bubnjevi i master bus su najčešći kandidati. Na vokalu dodaje prisutnost, na basu gustoću, na bubnjevima agresiju, a na master busu koheziju. Ali ne mora svaka traka imati saturaciju.',
      },
    ],
    relatedTerms: ['mixing', 'kompresija', 'gain'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['tegeler-creme', 'ssl-fusion', 'volt-876'],
  },
  {
    slug: 'gain',
    term: 'Gain',
    englishTerm: 'Gain',
    category: 'snimanje',
    metaTitle: 'Gain - što je i razlika od glasnoće',
    metaDescription:
      'Što je gain u audio produkciji, kako se razlikuje od glasnoće (volume) i zašto je pravilno postavljanje gain-a temelj kvalitetnog zvuka.',
    definition:
      'Gain je mjera pojačanja audio signala, izražena u decibelima (dB). Za razliku od glasnoće (volume) koja kontrolira izlaznu razinu, gain djeluje na ulaznu razinu signala i utječe na to kako sljedeći uređaj u lancu prima signal.',
    explanation:
      'Gain i glasnoća su povezani, ali nisu isti pojam. Gain pojačava signal na ulazu u uređaj ili plugin, što utječe na način na koji taj uređaj obrađuje signal. Glasnoća (volume, output) kontrolira koliko glasno čujete rezultat.\n\nOvo je posebno bitno kod kompresora i saturacije. Ako pojačate gain na ulazu kompresora, više signala prelazi threshold i kompresija je jača. Ako pojačate glasnoću (output), samo je glasnije, ali karakter kompresije se ne mijenja.\n\nGain staging je proces pravilnog podešavanja gain-a kroz cijeli signalni lanac, od mikrofona preko preampova do DAW-a. Cilj je da svaki uređaj prima signal na optimalnoj razini - ne preslabo (preniski omjer signala i šuma) i ne presnažno (distorzija). U digitalnom okruženju, to obično znači vršne vrijednosti oko -18 do -12 dBFS.\n\nLoš gain staging je jedan od najčešćih problema kod početnika. Presnažan signal na ulazu u preamp uzrokuje izobličenje, a preslab signal na ulazu u kompresor znači da kompresija ne radi pravilno.',
    studioContext:
      'U M Street Music studiju gain staging je pažljivo kalibriran kroz cijeli signalni lanac. Apollo x6 preampovi se postavljaju tako da signal ulazi u DAW na optimalnoj razini. Kad mix prolazi kroz Dangerous Music D-Box+ za analogni summing, razine su kalibrirane da analogna oprema radi u svom optimalnom rasponu. SSL Fusion ima preciznu kontrolu razine na svakom modulu, što omogućava točno podešavanje količine obrade.',
    faq: [
      {
        q: 'Što je gain staging?',
        a: 'Gain staging je podešavanje razine signala na svakom koraku u lancu obrade. Cilj je da svaki uređaj i plugin prima signal na optimalnoj radnoj razini, bez distorzije i s dovoljno headroom-a za dinamiku.',
      },
      {
        q: 'Koji je optimalni ulazni gain u DAW-u?',
        a: 'Za snimanje, vršne vrijednosti oko -12 do -6 dBFS daju dovoljno headroom-a za dinamičke vrhove. Za mixing, pluginovi obično najbolje rade kad signal ulazi oko -18 dBFS, što odgovara 0 VU na analognoj opremi.',
      },
    ],
    relatedTerms: ['preamp', 'kompresija', 'signalni-lanac', 'headroom'],
    relatedServices: ['mixing-pjesme', 'snimanje-benda'],
    relatedGear: ['apollo-x6', 'ssl-fusion'],
  },


  // ==========================================
  // MIXING (nastavak)
  // ==========================================
  {
    slug: 'panning',
    term: 'Panning',
    englishTerm: 'Panning',
    category: 'mixing',
    metaTitle: 'Panning - pozicioniranje zvuka u stereo slici',
    metaDescription:
      'Što je panning, kako funkcionira pozicioniranje zvuka u stereo polju i zašto je bitan za širinu i jasnoću mixa. Praktični savjeti iz studija.',
    definition:
      'Panning je tehnika pozicioniranja audio signala unutar stereo polja, od krajnje lijevog do krajnje desnog kanala. Kontrolira se pomoću pan pota (panoramic potentiometer) koji regulira glasnoću signala u lijevom i desnom kanalu, stvarajući iluziju prostornog položaja zvuka.',
    explanation:
      'Kad panoramirate zvuk ulijevo, signal postaje glasniji u lijevom kanalu, a tiši u desnom. Naš mozak tu razliku u glasnoći interpretira kao smjer iz kojeg zvuk dolazi. Signal postavljen točno u centar jednako je glasan u oba kanala, pa ga percipiramo kao da dolazi ravno ispred nas.\n\nPanning je jedan od najmoćnijih alata za stvaranje jasnoće u mixu. Ako sve instrumente ostavite u centru, natjecat će se za isti prostor i mix će zvučati zbijeno i nedefinirano. Raspoređivanjem elemenata po stereo polju, svaki instrument dobiva svoj prostor i mix diše.\n\nPostoji nekoliko pristupa panoramiranju. LCR (left-center-right) metoda stavlja svaki element ili skroz lijevo, ili skroz desno, ili u centar, bez pozicija između. To daje širok, dramatičan mix karakterističan za klasičan rock. Realistični pristup simulira pozicije glazbenika na pozornici. Kreativni pristup koristi panning za efekte i pokret, poput automatiziranja pan pozicije kroz pjesmu.\n\nBas frekvencije i kick bubanj se gotovo uvijek ostavljaju u centru jer su niske frekvencije omnidirekcione i troše puno energije. Panoramiranje basa na jednu stranu bi stvorilo neuravnotežen mix. Vokali, snare i bas čine temelj centra, dok gitare, klavijature, prateći vokali i overhead mikrofoni bubnjeva popunjavaju strane.',
    studioContext:
      'U M Street Music studiju panning se koristi kao temelj svake mixing session. Dangerous Music D-Box+ omogućava precizno panoramiranje u analognom domenu kroz 16-kanalni summing, gdje se svaki kanal može fino pozicionirati u stereo polju. SSL Fusion na kraju lanca nudi Stereo Image modul koji dodatno kontrolira širinu stereo slike, osiguravajući da panning odluke zvuče koherentno i mono-kompatibilno na svim sustavima za reprodukciju.',
    faq: [
      {
        q: 'Što staviti u centar mixa, a što panoramirati na strane?',
        a: 'U centar idu vokal, bas, kick i snare jer su temelj mixa. Na strane idu gitare, klavijature, prateći vokali, hi-hat i overhead mikrofoni bubnjeva. Panoramiranje u parovima (npr. dvije gitare lijevo-desno) daje balansiranu stereo sliku.',
      },
      {
        q: 'Hoće li moj mix zvučati dobro u mono ako koristim panning?',
        a: 'Ako su balans glasnoća i frekvencijski spektar dobro postavljeni, mix će funkcionirati i u mono. Problem nastaje kad se oslonite isključivo na panning za razdvajanje elemenata, bez EQ-a. Uvijek provjerite mix u mono.',
      },
      {
        q: 'Što je LCR panning?',
        a: 'LCR (left-center-right) je metoda gdje svaki element ide na jednu od tri pozicije - krajnje lijevo, centar ili krajnje desno. Nema pozicija između. Daje širok, čist mix s jasnom separacijom. Popularno u rock i pop mixing-u.',
      },
    ],
    relatedTerms: ['stereo-slika', 'mixing', 'automatizacija', 'bus-grupiranje'],
    relatedServices: ['mixing-pjesme', 'online-mixing'],
    relatedGear: ['d-box-plus', 'ssl-fusion'],
  },
  {
    slug: 'automatizacija',
    term: 'Automatizacija',
    englishTerm: 'Automation',
    category: 'mixing',
    metaTitle: 'Automatizacija u mixing-u - što je i kako se koristi',
    metaDescription:
      'Što je automatizacija u audio produkciji, kako funkcionira u DAW-u i zašto je ključna za dinamičan, profesionalan mix. Praktični primjeri.',
    definition:
      'Automatizacija je tehnika u DAW-u koja omogućava automatsku promjenu parametara tijekom vremena. Umjesto da fader, pan pot ili bilo koji parametar plug-ina ostane statičan kroz cijelu pjesmu, automatizacija bilježi promjene i reproducira ih pri svakom sljedećem puštanju.',
    explanation:
      'Mix koji zvuči profesionalno rijetko ima statične postavke od početka do kraja. Vokal treba biti glasniji u refrenu, gitara tiša kad pjevač pjeva, reverb dulji na zadnjem tonu fraze. Automatizacija omogućava da se sve te promjene programiraju i reproduciraju dosljedno, svaki put isto.\n\nPostoje dva osnovna načina kreiranja automatizacije. Prvi je snimanje u realnom vremenu - puštate pjesmu i pomičete fader ili okretete gumb, a DAW bilježi svaki pokret. Drugi je crtanje automatizacijske krivulje direktno u DAW-u, što daje precizniju kontrolu ali zahtijeva više vremena.\n\nNajčešće se automatiziraju glasnoća i panning, ali automatizacija može kontrolirati bilo koji parametar - frekvenciju EQ-a, količinu kompresije, vrijeme delay-a, jačinu reverba, pa čak i parametre virtualnih instrumenata. Kreativna automatizacija filtera, na primjer, može od običnog synth pada napraviti dramatičan zvučni pokret.\n\nDAW-ovi nude različite modove automatizacije. Read mod samo reproducira postojeću automatizaciju. Touch mod snima nove promjene dok držite kontrolu, a kad pustite, vraća se na prethodno stanje. Write mod prepisuje sve. Latch mod nastavlja pisati zadnju vrijednost čak i kad pustite kontrolu.\n\nAutomatizacija glasnoće je posebno bitna na vokalu. Umjesto da kompresor radi sav posao ujednačavanja dinamike, ručna automatizacija glasnoće (tzv. volume riding) pred kompresorom daje prirodniji, kontroliraniji rezultat jer vi donosite muzikalne odluke umjesto da ih prepuštate algoritmu.',
    studioContext:
      'U M Street Music studiju automatizacija je sastavni dio svake mixing session. Hibridni workflow kombinira digitalnu automatizaciju u DAW-u s analognom obradom - automatizacija glasnoće i send razina radi se u DAW-u, a zatim signal prolazi kroz Dangerous Music D-Box+ i SSL Fusion gdje analogna obrada dodaje karakter. Apollo x6 s niskom latencijom omogućava automatizaciju u realnom vremenu bez kašnjenja, što je bitno za precizno snimanje pokreta fadera.',
    faq: [
      {
        q: 'Što sve mogu automatizirati u mixu?',
        a: 'Praktički sve - glasnoću, panning, EQ frekvencije, količinu kompresije, reverb i delay send razine, mute/solo, bypass plug-inova. Najčešće se automatiziraju glasnoća vokala, send na reverb između kitica i refrena, i panning za kreativne efekte.',
      },
      {
        q: 'Trebam li automatizirati glasnoću ili je kompresor dovoljan?',
        a: 'Idealno, oboje. Ručna automatizacija glasnoće prije kompresora (volume riding) izravnava najveće razlike, pa kompresor radi manje i transparentnije. Rezultat je prirodniji i dinamičniji zvuk nego kad kompresor sam nosi sav teret.',
      },
      {
        q: 'Koliko automatizacije treba dobar mix?',
        a: 'Ovisi o žanru i složenosti. Minimalistička folk pjesma može trebati samo automatizaciju glasnoće na vokalu. Producirani pop zahtijeva automatizaciju na desetke parametara. Pravilo: automatizirajte sve što mora varirati da bi mix bio živ.',
      },
    ],
    relatedTerms: ['mixing', 'kompresija', 'panning', 'daw', 'gain'],
    relatedServices: ['mixing-pjesme', 'online-mixing', 'mixing-za-streaming'],
    relatedGear: ['apollo-x6', 'd-box-plus'],
  },
  {
    slug: 'sidechain',
    term: 'Sidechain',
    englishTerm: 'Sidechain',
    category: 'mixing',
    metaTitle: 'Sidechain - tehnika za jasnoću mixa',
    metaDescription:
      'Što je sidechain u audio produkciji, kako radi sidechain kompresija i zašto se koristi za razdvajanje kick-a i basa. Praktičan vodič.',
    definition:
      'Sidechain je tehnika u kojoj vanjski audio signal kontrolira ponašanje procesora na drugom kanalu. Najčešća primjena je sidechain kompresija, gdje signal jedne trake (npr. kick bubanj) aktivira kompresor na drugoj traci (npr. bas), stvarajući prostor za oba elementa.',
    explanation:
      'U standardnoj kompresiji, kompresor reagira na glasnoću signala koji prolazi kroz njega. Kod sidechain kompresije, kompresor sluša signal s drugog kanala i na temelju njega odlučuje koliko kompresije primijeniti. Zamislite to kao vrata koja se otvaraju i zatvaraju po naredbi nekog drugog, ne onoga tko prolazi kroz njih.\n\nNajpoznatija primjena je odnos kick bubnja i basa. Oba instrumenta zauzimaju slične niske frekvencije, pa se u mixu natječu za isti prostor. Sidechain kompresijom, svaki put kad kick udari, bas se automatski malo stiša, propuštajući kick da se čuje jasno. Kad kick prestane, bas se vrati na punu glasnoću. To se događa tako brzo da slušatelj ne primjećuje efekt, ali mix zvuči čišće.\n\nU elektronskoj glazbi, sidechain kompresija se koristi mnogo agresivnije za kreativne efekte. Karakteristično pumpanje pad-ova i synth-ova u house i EDM glazbi nastaje upravo pretjeranom sidechain kompresijom s kick-a. Tu efekt nije suptilan, nego je stilski element žanra.\n\nOsim kompresije, sidechain princip se koristi i s drugim procesorima. Sidechain EQ može smanjiti samo određene frekvencije kad se aktivira (npr. rezanje srednjih frekvencija na gitari samo kad vokal pjeva). Sidechain gate propušta signal samo kad je kontrolni signal prisutan. De-esser je u suštini sidechain kompresor koji reagira na visoke frekvencije sibilanata.',
    studioContext:
      'U M Street Music studiju sidechain se koristi kao standardni alat za postizanje jasnoće u mixu, posebno u odnosu kick-bas i vokal-instrumenti. Tegeler Audio Manufaktur Creme s FET kompresijskim modom omogućava brze attack vremene idealne za sidechain primjenu na bus grupama. U DAW-u se sidechain koristi kroz plugin kompresore s external sidechain ulazom, a konačni rezultat prolazi kroz analogni lanac koji daje cijelom mixu koherentan zvuk.',
    faq: [
      {
        q: 'Kako postaviti sidechain kompresiju između kick-a i basa?',
        a: 'Stavite kompresor na bas traku, aktivirajte sidechain ulaz i odaberite kick kao izvor. Počnite s ratio-m 4:1, brzim attack-om (0.5-5 ms) i srednjim release-om (50-150 ms). Podešavajte threshold dok ne dobijete 3-6 dB gain redukcije na svakom udarcu kicka.',
      },
      {
        q: 'Koristi li se sidechain samo u elektronskoj glazbi?',
        a: 'Ne, sidechain se koristi u svim žanrovima. U rock i pop mixovima je suptilniji nego u EDM-u, ali princip je isti - stvoriti prostor za kick i bas, ili propustiti vokal kroz gustu pratnju. Razlika je u količini efekta.',
      },
      {
        q: 'Što je sidechain EQ?',
        a: 'Sidechain EQ (ili dinamički EQ) smanjuje specifične frekvencije samo kad ih kontrolni signal aktivira. Npr. možete rezati 200 Hz na gitari samo kad bas svira u tom rasponu. Precizniji je od sidechain kompresije jer djeluje na ciljane frekvencije.',
      },
    ],
    relatedTerms: ['kompresija', 'mixing', 'noise-gate', 'de-esser', 'eq'],
    relatedServices: ['mixing-pjesme', 'mixing-za-streaming'],
    relatedGear: ['tegeler-creme'],
  },
  {
    slug: 'bus-grupiranje',
    term: 'Bus grupiranje',
    englishTerm: 'Bus/Group Routing',
    category: 'mixing',
    metaTitle: 'Bus grupiranje - organizacija mixa',
    metaDescription:
      'Što je bus grupiranje u mixing-u, kako funkcionira routing signala i zašto je organizacija traka ključna za profesionalan mix.',
    definition:
      'Bus grupiranje je tehnika usmjeravanja (routing-a) više audio traka u zajednički kanal (bus) gdje se mogu obrađivati i kontrolirati kao jedna cjelina. Npr. svi mikrofoni bubnjeva idu na drum bus, svi vokali na vocal bus, čime se mix organizira u logične skupine.',
    explanation:
      'Zamislite mix od 40 traka - kick, snare, hi-hat, tri toma, dva overhead-a, room mikrofon, pet gitara, bas, klavir, synth, glavni vokal, šest pratećih vokala i razni efekti. Kontrolirati svaku traku zasebno je kaotično. Bus grupiranje te trake organizira u skupine koje se mogu kontrolirati jednim faderom.\n\nKad usmjerite svih osam traka bubnjeva na drum bus, možete jednim potezom fadera pojačati ili stišati cijeli set bubnjeva. Možete staviti kompresor na drum bus da lijepi sve elemente bubnjeva u koherentnu cjelinu. Možete dodati EQ koji oblikuje tonalni karakter bubnjeva kao instrumenta, a ne samo pojedinačnih mikrofona.\n\nTipična bus struktura u modernom mixu uključuje drum bus, bass bus, guitar bus, keys bus, vocal bus i FX bus. Svi ti busovi se zatim slijevaju u master bus (stereo out) koji je zadnji korak prije izlaza. Ova hijerarhija omogućava obradu na više razina - prvo individualne trake, zatim grupe, i konačno cijeli mix.\n\nBus obrada je posebno učinkovita za kompresiju i saturaciju. Blaga kompresija na drum busu lijepi kick, snare i cymbal-e u jedinstven zvuk. Suptilna saturacija na vocal busu ujednačava različite vokalne trake. Ta grupna obrada daje mixu profesionalnu koheziju koju je teško postići obradom samo na pojedinačnim trakama.',
    studioContext:
      'U M Street Music studiju bus grupiranje je temelj hibridnog mixing workflow-a. Signal iz DAW-a ide kroz Apollo x6 u Dangerous Music D-Box+ koji nudi 16-kanalni analogni summing, gdje se različite bus grupe sumiraju u analognom domenu. To znači da drum bus, vocal bus i instrument bus prolaze kroz analogne krugove D-Box+ prije nego što se spoje u stereo. Rezultat je širi, trodimenzionalniji zvuk nego kod čistog digitalnog sumiranja.',
    faq: [
      {
        q: 'Koliko busova trebam u mixu?',
        a: 'Za većinu mixova dovoljno je 4-6 busova: bubnjevi, bas, gitare/instrumenti, vokali i efekti. Složenije produkcije mogu imati i sub-busove (npr. zaseban bus za toma, zaseban za overhead-e). Cilj je organizacija, ne kompliciranje.',
      },
      {
        q: 'Koja je razlika između bus-a i aux send-a?',
        a: 'Bus prima puni signal trake (output routing), dok aux send šalje kopiju dijela signala paralelno. Bus zamjenjuje direktni izlaz trake, aux send ga duplicira. Reverb i delay obično idu na aux send, a grupna obrada na bus.',
      },
      {
        q: 'Trebam li kompresiju na svakom busu?',
        a: 'Ne nužno. Drum bus gotovo uvijek ima kompresiju za koheziju. Vocal bus profitira od blage kompresije. Ali ako elementi već zvuče dobro zajedno, ne morate staviti kompresor samo zato jer je bus tu. Slušajte i odlučite.',
      },
    ],
    relatedTerms: ['mixing', 'aux-send', 'kompresija', 'gain-staging', 'signalni-lanac'],
    relatedServices: ['mixing-pjesme', 'online-mixing'],
    relatedGear: ['d-box-plus', 'apollo-x6'],
  },
  {
    slug: 'aux-send',
    term: 'Aux send',
    englishTerm: 'Auxiliary Send',
    category: 'mixing',
    metaTitle: 'Aux send - slanje signala na efekte',
    metaDescription:
      'Što je aux send, kako funkcionira slanje i vraćanje signala u mixing-u i zašto se reverb i delay postavljaju na aux kanale.',
    definition:
      'Aux send (auxiliary send) je izlaz na audio kanalu koji šalje kopiju signala na zasebnu rutu, najčešće prema efekt procesoru poput reverba ili delay-a. Za razliku od insert efekata koji obrađuju cijeli signal, aux send miješa obrađeni signal paralelno s originalom.',
    explanation:
      'Zamislite da imate deset traka i želite da sve dijele isti reverb. Bez aux send-a, morali biste staviti zaseban reverb plugin na svaku traku, što troši deset puta više procesorske snage i ne daje osjećaj zajedničkog prostora. S aux send-om, jedan reverb plugin sjedi na aux kanalu, a svaka traka šalje onoliko signala koliko želite.\n\nAux send funkcionira kao slavina na svakom kanalu. Okretanjem gumba kontrolirate koliko signala se preusmjerava na aux kanal. Reverb na aux kanalu obrađuje sve signale koje primi i vraća mokri (obrađeni) signal natrag u mix. Originalni suhi signal nastavlja normalno prema master busu.\n\nKljučna razlika je između pre-fader i post-fader send-a. Post-fader send prati glasnoću kanala - ako stišate traku, stišava se i količina signala koji ide na reverb, što je logično za mixing efekte. Pre-fader send je neovisan o faderu kanala i koristi se za headphone mixove tijekom snimanja, gdje izvođač treba čuti sebe neovisno o mixu.\n\nOvaj pristup slanju efekata ključan je za koheziju mixa. Kad više instrumenata dijeli isti reverb, zvuče kao da su u istom prostoru. Dva ili tri reverba na aux kanalima (npr. kraći room i dulji hall) obično su dovoljni za cijeli mix.',
    studioContext:
      'U M Street Music studiju aux send-ovi su temelj efekt routing-a u svakom mixu. Reverb i delay se uvijek postavljaju na aux kanale kroz DAW, tako da više traka dijeli iste efekte i zvuči koherentno. Apollo x6 omogućava kreiranje zasebnih headphone mixova za izvođače putem pre-fader send-ova, gdje svaki glazbenik može imati vlastiti balans instrumenata dok snima, bez utjecaja na kontrolni mix u režiji.',
    faq: [
      {
        q: 'Zašto ne staviti reverb direktno na traku kao insert?',
        a: 'Možete, ali aux send ima prednosti: štedi procesorsku snagu jer jedan reverb opslužuje više traka, daje osjećaj zajedničkog prostora, i omogućava preciznu kontrolu omjera suhog i mokrog signala za svaku traku zasebno.',
      },
      {
        q: 'Što je pre-fader, a što post-fader send?',
        a: 'Post-fader send prati glasnoću fadera kanala, pa kad stišate traku, stišava se i efekt. Pre-fader send je neovisan o faderu i koristi se za headphone mixove pri snimanju, gdje izvođač treba konzistentnu glasnoću.',
      },
      {
        q: 'Koliko aux send-ova obično treba u mixu?',
        a: 'Za većinu mixova, 3-5 aux kanala je dovoljno: jedan ili dva reverba (kratki i dugi), jedan delay, i eventualno parallelna kompresija ili specijalni efekt. Previše aux kanala komplicira mix.',
      },
    ],
    relatedTerms: ['reverb', 'delay', 'bus-grupiranje', 'mixing', 'paralelna-kompresija'],
    relatedServices: ['mixing-pjesme', 'snimanje-benda'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'high-pass-filter',
    term: 'High-pass filter',
    englishTerm: 'High-Pass Filter (HPF)',
    category: 'mixing',
    metaTitle: 'High-pass filter - čišćenje niskih frekvencija',
    metaDescription:
      'Što je high-pass filter, kako radi i zašto se koristi na gotovo svakoj traci u mixing-u. Praktični savjeti za čišćenje mixa.',
    definition:
      'High-pass filter (HPF), poznat i kao low-cut filter, je EQ alat koji propušta frekvencije iznad zadane točke, a smanjuje ili potpuno uklanja frekvencije ispod nje. Koristi se za uklanjanje niskofrekvencijskog šuma, rumpla i neželjene bučnosti iz audio signala.',
    explanation:
      'Naziv high-pass znači da visoke frekvencije prolaze, a niske se zaustavljaju. Low-cut je isto, samo drugačije ime - reže niske frekvencije. U praksi, to je isti alat.\n\nZašto je HPF toliko bitan? Svaki mikrofon hvata niskofrekvencijski šum - rumbl prometa, vibracije poda, puhanje vjetra, handling noise. Te frekvencije, obično ispod 80-100 Hz, ne doprinose kvaliteti snimke, ali zauzimaju prostor u mixu i troše headroom. Kad se to akumulira na 20 ili 30 traka, niske frekvencije postaju mutne i neupravljive.\n\nU mixing-u, HPF se primjenjuje na gotovo sve trake osim basa i kick bubnja. Vokal obično ne treba ništa ispod 80-100 Hz. Akustična gitara ne treba ništa ispod 80 Hz. Overhead mikrofoni bubnjeva ne trebaju sub-bas frekvencije. Uklanjanjem tog nepotrebnog sadržaja, mix postaje čišći, a bas i kick dobivaju prostor da dominiraju niskim frekvencijama.\n\nStrmina HPF-a mjeri se u dB/oktavi. Filter od 6 dB/oktavi je blag i postupan. Filter od 12 dB/oktavi je standardan za većinu primjena. Filter od 24 dB/oktavi je oštar i odlučan. Za mixing, 12 ili 18 dB/oktavi je obično pravi izbor jer čisti niske frekvencije bez da unosi fazne probleme ili neprirodne rezonancije oko cutoff točke.',
    studioContext:
      'U M Street Music studiju HPF je prva stvar koja se postavlja na većini traka tijekom mixing-a. Universal Audio Volt 876 ima ugrađeni high-pass filter na svakom kanalu koji se može aktivirati već pri snimanju, čime se nepotrebne niske frekvencije uklanjaju na samom izvoru. SSL Fusion u mastering lancu nudi precizne filtre za finalnu korekciju niskih frekvencija na stereo mixu, osiguravajući čist i definiran bas bez mutnoće.',
    faq: [
      {
        q: 'Na kojoj frekvenciji postaviti high-pass filter?',
        a: 'Ovisi o instrumentu. Za vokal, 80-120 Hz. Za akustičnu gitaru, 80-100 Hz. Za overhead mikrofone, 150-200 Hz. Za električne gitare, 80-100 Hz. Slušajte dok podižete cutoff - kad počnete gubiti tijelo zvuka, malo se vratite nazad.',
      },
      {
        q: 'Trebam li HPF na basu i kick bubnju?',
        a: 'Obično ne, jer su to instrumenti koji trebaju niske frekvencije. Ali blagi HPF na 30-40 Hz može ukloniti sub-sonični sadržaj koji troši headroom bez da pridonosi čujnom zvuku, posebno kod bas gitare.',
      },
      {
        q: 'Mogu li koristiti HPF umjesto EQ-a za čišćenje niskih frekvencija?',
        a: 'HPF jest EQ - specifična vrsta EQ krivulje. Za potpuno uklanjanje sadržaja ispod neke točke, HPF je idealan. Za suptilnije smanjivanje određenih problematičnih frekvencija u bas rasponu, koristite shelf ili bell EQ.',
      },
    ],
    relatedTerms: ['eq', 'mixing', 'frekvencijski-spektar', 'gain-staging'],
    relatedServices: ['mixing-pjesme', 'online-mixing'],
    relatedGear: ['volt-876', 'ssl-fusion'],
  },
  {
    slug: 'de-esser',
    term: 'De-esser',
    englishTerm: 'De-esser',
    category: 'mixing',
    metaTitle: 'De-esser - kontrola sibilanata na vokalu',
    metaDescription:
      'Što je de-esser, kako radi i zašto je neophodan za profesionalnu obradu vokala. Kako kontrolirati oštre S i Š glasove u mixu.',
    definition:
      'De-esser je specijalizirani kompresor dizajniran za smanjivanje sibilanata u vokalnim snimkama. Sibilanti su oštri, šištavi zvukovi koje stvaraju glasovi poput S, Š, Z, Ž, F i C, tipično u frekvencijskom rasponu od 4 do 10 kHz.',
    explanation:
      'Sibilanti su normalan dio govora i pjevanja, ali u studijskoj snimci mogu postati problem. Kondenzatorski mikrofoni, koji se najčešće koriste za vokal, imaju pojačanje u visokim frekvencijama koje naglašava sibilante. Kompresija dodatno pogoršava stvar jer podiže tiše dijelove signala, a sibilanti su često glasniji od ostatka vokala.\n\nDe-esser radi kao kompresor s ugrađenim filtrom koji sluša samo problematične frekvencije. Kad razina u tom rasponu (obično 5-8 kHz) prijeđe zadani prag, de-esser smanjuje glasnoću tog dijela signala. Ostatak frekvencijskog spektra ostaje netaknut. U suštini, de-esser je sidechain kompresor čiji je sidechain signal filtriran na frekvencije sibilanata.\n\nPostoje dva tipa de-essera: broadband i split-band. Broadband de-esser smanjuje glasnoću cijelog signala kad detektira sibilant. Split-band de-esser smanjuje samo problematične visoke frekvencije, ostavljajući ostatak signala nepromijenjenim. Split-band je precizniji i zvuči prirodnije jer ne utječe na tijelo glasa.\n\nKljučno je ne pretjerati. Prevelika de-essing obrada čini vokal šuškavim i nerazumljivim, kao da pjevač ima problem s izgovorom. Cilj je smanjiti oštrinu sibilanata, ne eliminirati ih potpuno. Prirodan govor sadrži sibilante i bez njih vokal zvuči neprirodno.',
    studioContext:
      'U M Street Music studiju de-essing je standardni korak u obradi svakog vokala. Obično se primjenjuje nakon kompresije jer kompresija naglašava sibilante podizanjem tišeg sadržaja. SSL Fusion s HF Compressor modulom pruža dodatnu kontrolu visokih frekvencija na bus razini, djelujući kao blagi de-esser za cijeli mix kad visoke frekvencije postanu preoštre.',
    faq: [
      {
        q: 'Gdje u lancu staviti de-esser?',
        a: 'Najčešće nakon kompresije, jer kompresija pojačava sibilante. Ako su sibilanti izrazito problematični, može se staviti jedan blagi de-esser prije kompresije i jedan nakon. Nikad prije EQ boost-a na visokim frekvencijama.',
      },
      {
        q: 'Na kojoj frekvenciji postaviti de-esser?',
        a: 'Za muške vokale obično 4-7 kHz, za ženske 6-10 kHz. Svaki glas je drugačiji. Najbolji pristup je slušati vokal i pronaći točnu frekvenciju koja zvuči oštro, pa de-esser ciljati upravo tamo.',
      },
      {
        q: 'Mogu li koristiti EQ umjesto de-essera?',
        a: 'Statički EQ rez smanjuje sibilante ali i sve ostale visoke frekvencije, čineći vokal tup. De-esser djeluje samo kad sibilant prelazi prag, a ostatak vremena propušta signal netaknut. Zato je dinamičko rješenje bolje od statičkog.',
      },
    ],
    relatedTerms: ['kompresija', 'sidechain', 'eq', 'mixing'],
    relatedServices: ['mixing-pjesme', 'snimanje-vokala'],
    relatedGear: ['ssl-fusion'],
  },
  {
    slug: 'paralelna-kompresija',
    term: 'Paralelna kompresija',
    englishTerm: 'Parallel Compression',
    category: 'mixing',
    metaTitle: 'Paralelna kompresija - snaga bez gubitka dinamike',
    metaDescription:
      'Što je paralelna kompresija (New York kompresija), kako radi i zašto daje snagu i gustoću bez uništavanja dinamike. Praktičan vodič.',
    definition:
      'Paralelna kompresija je tehnika miješanja nekomprimiranog (suhog) signala s jako komprimiranom kopijom istog signala. Poznata i kao New York kompresija, ova metoda podiže tiše dijelove snimke dok zadržava dinamiku i tranzijentu originalnog signala.',
    explanation:
      'Standardna kompresija smanjuje glasne dijelove. Paralelna kompresija radi obrnuto - podiže tiše dijelove. Jako komprimirana kopija signala ima gotovo jednaku glasnoću od početka do kraja, što znači da su tihi detalji (dozvuk bubnjeva, dah pjevača, prsti na žicama) pojačani. Miješanjem te kopije s originalom, dobivate best of both worlds - originalnu dinamiku i tranzijentu plus gustoću i energiju kompresije.\n\nTehnika je dobila ime New York kompresija jer su je popularizirali inženjeri u njujorškim studijima 1970-ih i 80-ih. Koristili su je na bubnjevima za karakterističan punchy, agresivan zvuk koji se čuje na bezbrojnim rock i pop snimkama iz tog razdoblja.\n\nPostavljanje je jednostavno. Pošaljite signal na aux kanal, stavite kompresor s agresivnim postavkama (visok ratio, nizak threshold, brz attack), i polako dodajete komprimirani signal u mix pokraj originala. Ključ je u omjeru - komprimirana kopija ne smije dominirati, nego samo dodati gustoću ispod originala.\n\nKompresija na paralelnom kanalu može biti brutalna - ratio 10:1 ili više, threshold dovoljno nizak da kompresor stalno radi, brz attack koji hvata sve tranzijentu. Postavke koje bi na insert kompresiji zvučale užasno, u paralelnoj primjeni dodaju energiju jer se miješaju s netaknutim originalom.\n\nOsim bubnjeva, paralelna kompresija je izuzetno učinkovita na vokalu (dodaje konzistentnost bez gubitka prirodne dinamike), na basu (daje sustain i gustoću), i na cijelom mixu (bus paralelna kompresija za lijepljenje elemenata).',
    studioContext:
      'U M Street Music studiju paralelna kompresija koristi se na gotovo svakom projektu, posebno na bubnjevima i vokalu. Dangerous Music D-Box+ omogućava paralelnu kompresiju u analognom domenu - jedna grupa kanala nosi čist signal, druga prolazi kroz Tegeler Audio Manufaktur Creme čija tube/FET kompresija dodaje gustu, toplu komprimiranu kopiju. Miješanje tih signala na D-Box+ summing busu daje rezultat koji čisto digitalna paralelna kompresija teško postiže.',
    faq: [
      {
        q: 'Koja je razlika između paralelne kompresije i obične kompresije?',
        a: 'Obična kompresija smanjuje glasne dijelove. Paralelna kompresija miješa jako komprimiran signal s nekomprimiranim originalom, efektivno podižući tiše dijelove bez utjecaja na glasne vrhove. Rezultat je energičniji zvuk s očuvanom dinamikom.',
      },
      {
        q: 'Koje postavke koristiti na paralelnom kompresoru?',
        a: 'Agresivne: ratio 8:1 do 20:1, nizak threshold tako da kompresor stalno radi, brz attack (1-5 ms), srednji release (50-150 ms). Zatim polako podižite glasnoću komprimiranog kanala dok ne osjetite da mix dobiva energiju bez da gubi dinamiku.',
      },
      {
        q: 'Mogu li koristiti mix knob na kompresoru umjesto aux send-a?',
        a: 'Da, mnogi moderni kompresori imaju wet/dry (mix) kontrolu koja radi istu stvar. Na 100% wet imate čistu kompresiju, na 30-50% imate efekt paralelne kompresije. To je brži workflow, ali aux send daje više kontrole nad EQ-om komprimiranog signala.',
      },
    ],
    relatedTerms: ['kompresija', 'mixing', 'bus-grupiranje', 'aux-send', 'dinamicki-raspon'],
    relatedServices: ['mixing-pjesme', 'online-mixing'],
    relatedGear: ['d-box-plus', 'tegeler-creme'],
  },
  {
    slug: 'noise-gate',
    term: 'Noise gate',
    englishTerm: 'Noise Gate',
    category: 'mixing',
    metaTitle: 'Noise gate - uklanjanje šuma iz snimke',
    metaDescription:
      'Što je noise gate, kako radi i kako se koristi za čišćenje vokalnih, bubnjarskih i gitarskih traka. Praktični savjeti za čist mix.',
    definition:
      'Noise gate je dinamički procesor koji propušta signal samo kad je iznad zadanog praga (threshold), a stišava ili potpuno blokira signal kad padne ispod tog praga. Koristi se za uklanjanje neželjenog šuma, presluha i pozadinske buke iz audio snimaka.',
    explanation:
      'Princip je jednostavan kao vrata: kad signal prelazi threshold, vrata su otvorena i zvuk prolazi. Kad signal padne ispod praga, vrata se zatvaraju i šum nestaje. To je posebno korisno za trake koje sadrže koristan signal samo dio vremena, a ostatak je šum ili presluh.\n\nKlasičan primjer su bubnjevi. Mikrofon na snare bubnju hvata i kick, tomove i činele. Gate na snare traci propušta signal samo kad snare udara, a između udaraca zatvara kanal i eliminira presluh ostalih bubnjeva. Rezultat je čista snare traka koja se može zasebno obrađivati.\n\nNoise gate ima nekoliko ključnih parametara. Threshold određuje razinu na kojoj se gate otvara. Attack kontrolira koliko brzo se gate otvara kad signal prijeđe prag - prebrz attack na bubnjevima može uzrokovati klik, prespor može pojesti tranzijentu. Hold definira minimalno vrijeme koliko gate ostaje otvoren nakon što signal padne ispod praga. Release kontrolira brzinu zatvaranja - prebrz release zvuči neprirodno, kao da netko naglo reže zvuk.\n\nModerni gate pluginovi nude i sidechain ulaz, lookhead (predviđanje) i range kontrolu. Range ne zatvara gate potpuno, nego smanjuje signal za zadanu količinu (npr. -20 dB umjesto potpune tišine), što zvuči prirodnije jer u stvarnom životu nikad nema apsolutne tišine.',
    studioContext:
      'U M Street Music studiju noise gate se koristi primarno na bubnjarskim trakama za kontrolu presluha između mikrofona. Čiste, gatirane trake bubnjeva lakše je obrađivati EQ-om i kompresijom bez da se nepoželjni zvukovi pojačavaju. Na vokalnim trakama, gate se koristi za uklanjanje pozadinskog šuma između fraza. Apollo x6 s Unison preampovima hvata čist signal već na ulazu, čime se potreba za agresivnim gating-om smanjuje.',
    faq: [
      {
        q: 'Kako postaviti noise gate na vokal?',
        a: 'Postavite threshold tik iznad razine pozadinskog šuma, ali ispod najtišeg dijela vokala. Attack neka bude brz (0.5-2 ms) da ne reže početak riječi. Hold oko 50 ms i release oko 100-200 ms za prirodan zvuk. Koristite range (-15 do -25 dB) umjesto potpunog zatvaranja.',
      },
      {
        q: 'Trebam li gate na svakoj traci?',
        a: 'Ne. Gate koristite samo kad ima šuma ili presluha koji smeta. Na dobro snimljenim trakama gate nije potreban. Na bubnjevima je gotovo uvijek koristan, na vokalu ponekad, na DI basu rijetko.',
      },
      {
        q: 'Koja je razlika između noise gate-a i expandera?',
        a: 'Gate potpuno zatvara signal ispod praga. Expander ga postupno smanjuje s određenim ratio-m, što je blaži i prirodniji efekt. Za čišćenje presluha na bubnjevima gate je bolji, za suptilno smanjivanje pozadinskog šuma na vokalu expander je finiji alat.',
      },
    ],
    relatedTerms: ['kompresija', 'mixing', 'sidechain', 'dinamicki-raspon'],
    relatedServices: ['mixing-pjesme', 'snimanje-benda'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'chorus',
    term: 'Chorus',
    englishTerm: 'Chorus',
    category: 'mixing',
    metaTitle: 'Chorus efekt - širina i dubina zvuka',
    metaDescription:
      'Što je chorus efekt, kako radi i kako se koristi za dodavanje širine i bogatstva zvuku. Modulacijski efekt za gitaru, vokal i synth.',
    definition:
      'Chorus je modulacijski audio efekt koji simulira zvuk više istovremenih izvora blagim variranjem visine tona i vremenskog pomaka kopija signala. Rezultat je širi, bogatiji zvuk s karakterističnim treperenjem koje podsjeća na zbor pjevača ili više instrumenata koji sviraju istu dionicu.',
    explanation:
      'Kad dva pjevača pjevaju istu notu, nikad nisu savršeno usklađeni. Minimalne razlike u visini tona, timingu i boji glasa stvaraju bogat, širok zvuk koji je veći od zbroja dijelova. Chorus efekt simulira upravo to - uzima vaš signal, stvara jednu ili više kopija s blagim varijacijama i miješa ih s originalom.\n\nTehnički, chorus radi tako da kopira ulazni signal i kašnji ga za 15 do 35 milisekundi. To kašnjenje se zatim modulira LFO-om (low-frequency oscillator) koji ga kontinuirano ubrzava i usporava. Promjena kašnjenja uzrokuje blagu promjenu visine tona (Dopplerov efekt), a upravo ta kombinacija vremenskog pomaka i varijacije pitch-a stvara chorus zvuk.\n\nKljučni parametri su rate (brzina LFO modulacije), depth (intenzitet modulacije), mix (omjer originalnog i obrađenog signala) i eventualno broj glasova (voices). Sporiji rate daje blago ljuljanje, brži rate intenzivniji efekt. Veći depth znači izraženije varijacije u pitch-u.\n\nChorus je posebno popularan na električnoj gitari (čisti chorus zvuk iz 80-ih), basu (za širi bas ton u mixu), synth pad-ovima (za prostornost) i pratećim vokalima (za efekt zbora). Na glavnom vokalu se koristi rijetko i oprezno jer može zvučati neprirodno.',
    studioContext:
      'U M Street Music studiju chorus se koristi kao kreativni alat za širenje stereo slike instrumenata u mixu. Plugin chorus-i na gitarama i synth-ovima prolaze kroz analogni signalni lanac gdje SSL Fusion Stereo Image modul dodatno kontrolira širinu, a Vintage Drive dodaje toplinu moduliranom signalu. Za autentičan vintage chorus zvuk, UAD plugin ekosustav na Apollo x6 nudi emulacije klasičnih chorus pedalica i studijskih jedinica bez opterećenja procesora računala.',
    faq: [
      {
        q: 'Kad koristiti chorus, a kad delay za širenje zvuka?',
        a: 'Chorus daje kontinuirani modulirani zvuk, širinu bez jasnih ponavljanja. Delay daje diskretne kopije s razmakom. Za konstantnu širinu gitare ili pad-a, chorus je bolji. Za dubinu i ritmički element, delay. Često se kombiniraju za maksimalan efekt.',
      },
      {
        q: 'Mogu li koristiti chorus na vokalu?',
        a: 'Na pratećim vokalima da, dodaje širinu i efekt zbora. Na glavnom vokalu budite oprezni - chorus može učiniti vokal neprirodno razmazanim. Ako želite širi vokal, razmotrite dvostruko snimanje (double tracking) umjesto chorusa.',
      },
      {
        q: 'Koja je razlika između chorusa i flangera?',
        a: 'Oba su modulacijski efekti, ali flanger koristi kraće kašnjenje (1-5 ms) s feedbackom, što daje metaličan, swoosh zvuk. Chorus koristi duže kašnjenje (15-35 ms) bez feedbacka, što daje blaži, širi zvuk. Flanger je dramatičniji, chorus suptilniji.',
      },
    ],
    relatedTerms: ['stereo-slika', 'delay', 'mixing', 'reverb'],
    relatedServices: ['mixing-pjesme', 'produkcija-glazbe'],
    relatedGear: ['ssl-fusion', 'apollo-x6'],
  },
  {
    slug: 'stereo-slika',
    term: 'Stereo slika',
    englishTerm: 'Stereo Image',
    category: 'mixing',
    metaTitle: 'Stereo slika - širina i prostornost mixa',
    metaDescription:
      'Što je stereo slika, kako se gradi širina mixa i zašto je balans između širine i mono kompatibilnosti ključan za profesionalan zvuk.',
    definition:
      'Stereo slika je percepcija prostorne širine i pozicije zvukova u audio mixu, stvorena razlikama između lijevog i desnog kanala. Kvalitetna stereo slika daje osjećaj da zvuk dolazi iz definirane pozicije u prostoru između dva zvučnika, a ne samo iz zvučnika samih.',
    explanation:
      'Ljudski mozak koristi razlike između onoga što čuje lijevo i desno uho da odredi položaj zvuka u prostoru. U stereo mixu, te razlike se kreiraju kontrolom dva kanala - lijevog i desnog. Kad oba kanala prenose identičan signal, percipiramo ga kao da dolazi iz centra. Kad se razlikuju, zvuk se širi i dobiva prostornost.\n\nŠirina stereo slike ovisi o količini razlike između kanala. Mono signal (identičan lijevo i desno) nema širinu. Blago različiti signali daju umjerenu širinu. Potpuno različiti signali (npr. dvije zasebno snimljene gitare, svaka na svojoj strani) daju maksimalnu širinu.\n\nPostoji više tehnika za širenje stereo slike. Panning raspoređuje pojedinačne elemente po stereo polju. Double tracking stavlja dva snimka istog izvora na suprotne strane. Chorus i delay stvaraju modulirane kopije koje šire signal. Mid/side obrada pojačava razlike između centra i strana. Stereo mikser ili procesor može proširiti postojeću stereo sliku pojačavanjem bočnih informacija.\n\nAli pozor - prevelika širina je jednako problematična kao premala. Preširok mix zvuči šupljo, gubi mono kompatibilnost i raspada se na malim zvučnicima i slušalicama. Mobiteli, bluetooth zvučnici i mnogi klubski sustavi reproduciraju mono ili gotovo mono signal. Ako vaš mix ne funkcionira u mono, velik dio slušatelja čut će kompromitiran zvuk.',
    studioContext:
      'U M Street Music studiju stereo slika se pažljivo gradi kroz cijeli mixing i mastering proces. SSL Fusion ima dedicirani Stereo Image modul koji omogućava preciznu kontrolu širine - od sužavanja mono signala do širenja stereo polja. Dangerous Music D-Box+ s analognim summing-om daje prirodnu stereo sliku jer se kanali sumiraju u analognom domenu, gdje interakcija signala stvara trodimenzionalnost koju digitalni summing teško replicira. Svaki mix se provjerava u mono kako bi se osigurala kompatibilnost.',
    faq: [
      {
        q: 'Kako provjeriti je li stereo slika u redu?',
        a: 'Prebacite mix u mono i slušajte. Ako elementi nestaju ili mix gubi energiju, imate fazne probleme. Koristite korelacijski metar - vrijednost blizu +1 znači mono kompatibilnost, oko 0 je širok mix, negativne vrijednosti ukazuju na fazne probleme.',
      },
      {
        q: 'Trebaju li niske frekvencije biti u stereo?',
        a: 'Ne. Bas i kick trebaju biti u centru (mono) jer niske frekvencije troše puno energije i stereo bas može uzrokovati fazne probleme. Pravilo palca: sve ispod 100-150 Hz neka bude mono. Širinu gradite srednjim i visokim frekvencijama.',
      },
      {
        q: 'Što je mid/side obrada?',
        a: 'Mid/side razdvaja stereo signal na centar (mid - ono što je jednako u oba kanala) i strane (side - ono što je različito). Omogućava zasebnu obradu centra i strana. Npr. možete pojačati visoke frekvencije samo na stranama za širi mix bez utjecaja na centar.',
      },
    ],
    relatedTerms: ['panning', 'mixing', 'mid-side', 'mastering', 'chorus'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme', 'online-mixing'],
    relatedGear: ['ssl-fusion', 'd-box-plus'],
  },
  {
    slug: 'frekvencijski-spektar',
    term: 'Frekvencijski spektar',
    englishTerm: 'Frequency Spectrum',
    category: 'mixing',
    metaTitle: 'Frekvencijski spektar - raspon zvuka',
    metaDescription:
      'Što je frekvencijski spektar, kako se dijeli na bas, srednje i visoke frekvencije i zašto je razumijevanje spektra ključno za mixing.',
    definition:
      'Frekvencijski spektar je raspon svih frekvencija koje ljudsko uho može čuti, od 20 Hz do 20.000 Hz (20 kHz). U audio produkciji, poznavanje frekvencijskog spektra omogućava precizno oblikovanje zvuka pomoću EQ-a i razumijevanje kako se instrumenti raspoređuju u mixu.',
    explanation:
      'Frekvencijski spektar se dijeli na nekoliko ključnih područja. Sub-bas (20-60 Hz) se više osjeća nego čuje, daje dubinu i snagu. Bas (60-250 Hz) nosi tijelo i toplinu instrumenata poput bas gitare i kick bubnja. Donje srednje frekvencije (250-500 Hz) mogu uzrokovati mutnoću ako su prenaglašene. Srednje frekvencije (500 Hz - 2 kHz) su područje gdje se većina instrumenata natječe za prostor.\n\nGornje srednje frekvencije (2-4 kHz) su ključne za prisutnost i razumljivost, posebno vokala. Ljudsko uho je najosjetljivije u ovom rasponu, što znači da i male promjene imaju velik utjecaj. Visoke frekvencije (4-8 kHz) dodaju sjaj, detalj i čitljivost sibilanata. Zrak (8-20 kHz) daje osjećaj otvorenosti i prostora.\n\nSvaki instrument zauzima svoje područje u spektru, ali se područja preklapaju. Bas gitara i kick dijele sub-bas i bas. Gitare i vokali se natječu u srednjim frekvencijama. Činele i sibilanti u visokim. Posao mixing inženjera je rasporediti elemente tako da svaki ima svoje mjesto, korištenjem EQ-a za rezanje nepotrebnih frekvencija i naglašavanje karakterističnih.\n\nFrekvencijski analizator (spectrum analyzer) je vizualni alat koji prikazuje energiju signala po frekvencijama u realnom vremenu. Koristan je za identifikaciju problematičnih frekvencija, ali ne smije zamijeniti slušanje. Mnogi početnici pretjerano gledaju analizator umjesto da slušaju - uši su uvijek važnije od očiju u mixing-u.',
    studioContext:
      'U M Street Music studiju razumijevanje frekvencijskog spektra je osnova svake mixing i mastering odluke. Tegeler Audio Manufaktur Creme s Pultec-style EQ-om oblikuje bas i visoke frekvencije širokim, muzikalnim potezima koji poštuju prirodne odnose u spektru. SSL Fusion nudi dva EQ modula - Vintage EQ za široke tonalne pomake i Violet EQ za preciznije intervencije u specifičnim frekvencijskim rasponima. Dangerous Music D-Box+ s ESS Sabre pretvaračima vjerno reproducira cijeli frekvencijski spektar, omogućavajući precizne odluke.',
    faq: [
      {
        q: 'Koje frekvencije uzrokuju mutnoću u mixu?',
        a: 'Područje oko 200-500 Hz je najčešći uzrok mutnoće. Akumulacija energije u tom rasponu od više instrumenata (gitare, vokali, klavir) zamagljuje mix. Ciljano smanjivanje tih frekvencija na trakama koje ne trebaju tijelo u tom rasponu čisti mix.',
      },
      {
        q: 'Kako naučiti prepoznavati frekvencije?',
        a: 'Vježbom. Koristite EQ s uskim pojačanjem (boost) i pomičite ga po spektru da čujete što svaki raspon zvuči. Postoje i online alati za ear training (npr. SoundGym). S vremenom ćete instinktivno prepoznavati problematične frekvencije.',
      },
      {
        q: 'Trebam li spectrum analyzer za mixing?',
        a: 'Koristan je kao referenca, ali ne oslanjajte se previše na njega. Analizator pokazuje energiju, ali ne kaže zvuči li dobro. Mix koji izgleda savršeno na analizatoru može zvučati loše, i obrnuto. Koristite ga za potvrdu onoga što čujete, ne kao zamjenu za slušanje.',
      },
    ],
    relatedTerms: ['eq', 'high-pass-filter', 'mixing', 'decibel', 'frekvencija'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['tegeler-creme', 'ssl-fusion', 'd-box-plus'],
  },

  // ==========================================
  // MASTERING
  // ==========================================
  {
    slug: 'mastering',
    term: 'Mastering',
    englishTerm: 'Mastering',
    category: 'mastering',
    metaTitle: 'Mastering - što je i zašto je bitan',
    metaDescription:
      'Što je mastering, kako se razlikuje od mixing-a i zašto je posljednji korak prije objave glazbe. Profesionalan mastering u M Street Music studiju.',
    definition:
      'Mastering je posljednji korak u audio produkciji prije distribucije. Obuhvaća finalnu obradu stereo mixa, optimizaciju glasnoće, tonalnog balansa i dinamike, te pripremu za specifičan medij (streaming, vinyl, CD).',
    explanation:
      'Mastering je most između studija i slušatelja. Dok mixing oblikuje zvuk unutar pjesme, mastering osigurava da pjesma zvuči dobro na svim sustavima za reprodukciju, od slušalica mobitela do studijskih monitora.\n\nProces uključuje suptilne korekcije EQ-om za optimalan tonalni balans, kompresiju za kontrolu dinamike i koheziju, limiting za postizanje kompetitivne glasnoće, te stereo obradu za širinu i mono kompatibilnost. Svaki od ovih koraka je precizan i suptilan, obično u rasponu od 1-3 dB.\n\nMastering inženjer donosi svježe uši na materijal. Za razliku od mixing inženjera koji je danima radio na detaljima, mastering inženjer čuje cjelinu i može prepoznati probleme koje mixing inženjer više ne čuje zbog umora slušanja.\n\nZa albume, mastering dodatno uključuje ujednačavanje zvuka među pjesmama, postavljanje razmaka između traka i kreiranje DDP master-a ili digitalnih formata za distribuciju. Cilj je da album zvuči kao koherentna cjelina.',
    studioContext:
      'U M Street Music studiju mastering prolazi kroz kompletni analogni signalni lanac. Stereo mix iz DAW-a ide kroz Apollo x6 pretvarače, zatim kroz Tegeler Audio Manufaktur Creme za Pultec-style EQ i bus kompresiju, i konačno kroz SSL Fusion za stereo EQ, HF kompresiju, Vintage Drive saturaciju i stereo image obradu. Ovaj analogni lanac daje mastering-u dubinu i karakter koji čisto digitalni mastering teško postiže.',
    faq: [
      {
        q: 'Trebam li mastering ako mix već zvuči dobro?',
        a: 'Da. Čak i odličan mix profitira od mastering-a. Mastering optimizira glasnoću za streaming platforme, provjerava kompatibilnost na različitim sustavima i donosi finalnu poliranost zvuku.',
      },
      {
        q: 'Koja je razlika između stem mastering-a i stereo mastering-a?',
        a: 'Stereo mastering radi s gotovim stereo mixom. Stem mastering prima grupe instrumenata zasebno (vokali, bubnjevi, bas, ostalo), što daje mastering inženjeru veću kontrolu. Korisno kad mix treba veće intervencije.',
      },
      {
        q: 'Koliko glasno treba biti mastering za Spotify?',
        a: 'Spotify normalizira na -14 LUFS. Mastering iznad toga bit će automatski stišan, a ispod toga pojačan. Preporučujemo -14 LUFS s true peak ispod -1 dBTP za optimalan rezultat bez gubitka dinamike.',
      },
    ],
    relatedTerms: ['mixing', 'lufs', 'limiter', 'dinamicki-raspon', 'eq', 'kompresija'],
    relatedServices: ['mastering-pjesme', 'online-mastering', 'mastering-za-streaming', 'mastering-za-vinyl', 'stem-mastering'],
    relatedGear: ['tegeler-creme', 'ssl-fusion', 'apollo-x6'],
  },
  {
    slug: 'limiter',
    term: 'Limiter',
    englishTerm: 'Limiter',
    category: 'mastering',
    metaTitle: 'Limiter - što je i kako radi',
    metaDescription:
      'Što je limiter, kako se razlikuje od kompresora i zašto je ključan za mastering. Praktičan vodič za razumijevanje limitera.',
    definition:
      'Limiter je tip kompresora s vrlo visokim omjerom kompresije (obično 10:1 ili više) koji sprječava signal da prijeđe zadanu maksimalnu razinu. U mastering-u je zadnji uređaj u lancu i kontrolira vršne vrijednosti (peak levels) finalne snimke.',
    explanation:
      'Limiter se može zamisliti kao zid koji signal ne može probiti. Dok kompresor postupno smanjuje signal iznad praga, limiter ga praktički zaustavlja na zadanoj razini. To omogućava pojačavanje prosječne glasnoće bez da vršne vrijednosti prelaze maksimum.\n\nU mastering-u, limiter ima dvije ključne funkcije. Prva je kontrola vršnih vrijednosti (true peak limiting) koja osigurava da signal ne prelazi digitalnu granicu od 0 dBFS, jer bi to uzrokovalo digitalno izobličenje (clipping). Druga je podizanje prosječne glasnoće na kompetitivnu razinu za streaming ili fizičke medije.\n\nModerni mastering limiteri su sofisticirani alati koji analiziraju signal unaprijed (lookahead) i primjenjuju gain redukciju na transparentan način. Cilj je postići željenu glasnoću bez čujne kompresije ili distorzije.\n\nPreviše limitiranja je čest problem u modernoj produkciji (loudness war). Kad se dinamika zgnječi preagresivnim limiterom, glazba gubi energiju i umara slušatelja. Streaming platforme s loudness normalizacijom su smanjile potrebu za pretjeranom glasnoćom.',
    studioContext:
      'U M Street Music studiju, limiting se primjenjuje u mastering lancu nakon SSL Fusion obrade. SSL Fusion nudi HF Compressor koji kontrolira oštre visoke frekvencije prije finalnog limitera, čime limiter radi manje i transparentnije. Konačni ceiling se postavlja na -1 dBTP (true peak) da ostavi marginu za intersample peakove koji nastaju kod MP3 i streaming konverzija.',
    faq: [
      {
        q: 'Koja je razlika između limitera i kompresora?',
        a: 'Limiter je kompresor s vrlo visokim ratio-m (10:1 do beskonačno:1) i brzim attack-om. Dok kompresor postupno smanjuje glasne dijelove, limiter ih praktički zaustavlja. Koriste se za različite svrhe - kompresor za oblikovanje dinamike, limiter za kontrolu vršnih vrijednosti.',
      },
      {
        q: 'Koliko gain redukcije je previše na limiteru?',
        a: 'Pravilo palca: 2-4 dB gain redukcije na vrhovima je transparentno. Iznad 6 dB počinjete čuti efekte limitiranja. Iznad 10 dB, glazba zvuči zgnječeno i zamorno. Ali sve ovisi o materijalu i žanru.',
      },
    ],
    relatedTerms: ['kompresija', 'mastering', 'lufs', 'dinamicki-raspon'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming'],
    relatedGear: ['ssl-fusion'],
  },
  {
    slug: 'lufs',
    term: 'LUFS',
    englishTerm: 'Loudness Units relative to Full Scale',
    category: 'mastering',
    metaTitle: 'LUFS - standard glasnoće za streaming',
    metaDescription:
      'Što je LUFS, zašto je bitan za streaming platforme i kako pravilno mjeriti glasnoću za Spotify, Apple Music i YouTube.',
    definition:
      'LUFS (Loudness Units relative to Full Scale) je mjerna jedinica za percipiranu glasnoću audio signala. Za razliku od vršnih vrijednosti (peak), LUFS mjeri prosječnu glasnoću onako kako je ljudsko uho percipira, uzimajući u obzir frekvencijsku osjetljivost sluha.',
    explanation:
      'Prije LUFS standarda, glasnoća se mjerila samo vršnim vrijednostima (peak metering). Problem je bio što dva signala mogu imati isti peak, ali zvučati potpuno različito u glasnoći. Bass-heavy mix percipira se glasnije od mix-a s naglašenim visokim frekvencijama na istoj peak razini.\n\nLUFS rješava taj problem koristeći frekvencijsku krivulju (K-weighting) koja modelira osjetljivost ljudskog uha. Srednje frekvencije, na koje je uho najosjetljivije, imaju veću težinu u mjerenju. Rezultat je brojka koja odgovara onome što zaista čujemo.\n\nStreaming platforme koriste LUFS za loudness normalizaciju. Spotify normalizira na -14 LUFS, Apple Music na -16 LUFS, YouTube na -14 LUFS. To znači da će pretjerano glasna snimka biti automatski stišana, a tiša pojačana. Zbog toga nema smisla raditi presnažan mastering, jer platforma ionako prilagođava glasnoću.\n\nPostoje različite LUFS mjere: Momentary (kratkoročno), Short-term (3 sekunde) i Integrated (prosjek cijele pjesme). Za mastering, Integrated LUFS je najrelevantnija vrijednost.',
    studioContext:
      'U M Street Music studiju, LUFS mjerenje je integralni dio mastering procesa. Svaki master se mjeri loudness metrom za Integrated LUFS, Short-term LUFS i True Peak. Za streaming distribuciju ciljamo -14 LUFS s True Peak ispod -1 dBTP, što je optimalno za Spotify i većinu platformi. Za vinyl mastering, target LUFS je drugačiji jer se loudness normalizacija ne primjenjuje.',
    faq: [
      {
        q: 'Na koliko LUFS ciljati za Spotify?',
        a: 'Spotify normalizira na -14 LUFS. Mastering na -14 LUFS s true peak ispod -1 dBTP daje optimalan rezultat. Glasniji mastering bit će stišan i može izgubiti dinamiku, a tiši pojačan i može dobiti šum.',
      },
      {
        q: 'Je li -14 LUFS isto za sve žanrove?',
        a: 'Target od -14 LUFS je isto za sve žanrove na Spotifyu. Ali unutar tog okvira, različiti žanrovi imaju različit balans dinamike i gustoće. Klasična glazba na -14 LUFS zvuči dinamičnije od EDM-a na istoj razini.',
      },
      {
        q: 'Kako mjeriti LUFS?',
        a: 'Koristite loudness meter plugin u DAW-u (Youlean Loudness Meter je besplatan i odličan). Pustite cijelu pjesmu od početka do kraja i očitajte Integrated LUFS vrijednost. Short-term i Momentary koristite za provjeru pojedinih sekcija.',
      },
    ],
    relatedTerms: ['mastering', 'limiter', 'dinamicki-raspon'],
    relatedServices: ['mastering-za-streaming', 'mastering-pjesme'],
  },
  {
    slug: 'dinamicki-raspon',
    term: 'Dinamički raspon',
    englishTerm: 'Dynamic Range',
    category: 'mastering',
    metaTitle: 'Dinamički raspon - što je i zašto je bitan',
    metaDescription:
      'Što je dinamički raspon u audio produkciji, zašto je bitan za kvalitetu glazbe i kako balansirati glasnoću i dinamiku u mastering-u.',
    definition:
      'Dinamički raspon je razlika između najtiših i najglasnijih dijelova audio signala, izražena u decibelima (dB). Veći dinamički raspon znači veću razliku između tihih i glasnih dijelova, što daje glazbi ekspresivnost i emocionalnu dubinu.',
    explanation:
      'Dinamika je ono što glazbu čini živom. Kad orkestar svira pianissimo pa eksplodira u fortissimo, ta razlika u glasnoći nosi emociju. U pop i rock glazbi, dinamika stvara kontrast između intimnog stiha i snažnog refrena.\n\nU digitalnom audiju, dinamički raspon je ograničen bit depth-om formata. 16-bitni CD audio ima teorijski dinamički raspon od 96 dB, a 24-bitni profesionalni audio 144 dB. U praksi, šum analognih uređaja i okoliša smanjuje taj raspon, ali 24-bitno snimanje daje više nego dovoljno prostora.\n\nKompresija i limiting smanjuju dinamički raspon u zamjenu za konzistentnu, kompetitivnu glasnoću. U eri loudness wara, mnoge snimke bile su komprimirane do te mjere da su izgubile svu dinamiku. Streaming normalizacija je smanjila taj pritisak jer pretjerana glasnoća više ne donosi prednost.\n\nDobar mastering čuva dinamiku gdje je potrebna (kontrast stih-refren, tranzijentu bubnjeva) dok kontrolira ekstremi koji bi bili problematični za reprodukciju. Cilj je balans između ekspresivnosti i kompatibilnosti s različitim sustavima.',
    studioContext:
      'U M Street Music studiju posebno pazimo na očuvanje dinamičkog raspona. Analogni lanac (Tegeler Creme, SSL Fusion) radi suptilno, obično 1-3 dB gain redukcije, čuvajući tranzijentu i mikro-dinamiku. Apollo x6 s ESS Sabre pretvaračima nudi dinamički raspon od 129 dB na izlazu, što znači da analogna oprema ima čist, šum-free signal za rad. Krajnji rezultat je mastering koji zvuči glasno i kompetitivno, a opet diše i ima emocionalnu snagu.',
    faq: [
      {
        q: 'Koji dinamički raspon je idealan za mastering?',
        a: 'Ovisi o žanru. Klasična i jazz glazba profitiraju od 12-20 dB dinamičkog raspona. Pop i rock obično imaju 8-12 dB. EDM i hip-hop mogu ići niže (6-10 dB). Ali ne postoji univerzalan broj - slušajte i ocijenite zvuči li glazba živo i energično.',
      },
      {
        q: 'Je li veći dinamički raspon uvijek bolji?',
        a: 'Ne nužno. Previše dinamike znači da tihi dijelovi mogu biti nečujni na mobitelu ili u autu. Cilj je da glazba zvuči ekspresivno u svim kontekstima slušanja, što zahtijeva pažljiv balans dinamike i glasnoće.',
      },
    ],
    relatedTerms: ['kompresija', 'limiter', 'mastering', 'lufs', 'bit-depth'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming'],
    relatedGear: ['tegeler-creme', 'ssl-fusion', 'apollo-x6'],
  },

  // ==========================================
  // MASTERING (nastavak)
  // ==========================================

  {
    slug: 'dithering',
    term: 'Dithering',
    englishTerm: 'Dithering',
    category: 'mastering',
    metaTitle: 'Dithering - što je i kada ga koristiti',
    metaDescription:
      'Što je dithering, zašto je bitan pri smanjenju bit depth-a i kako pravilno primijeniti dithering u mastering-u. Praktičan vodič za audio dithering.',
    definition:
      'Dithering je tehnika dodavanja kontroliranog šuma niskog nivoa audio signalu prilikom smanjenja bit depth-a (npr. s 24-bit na 16-bit). Taj namjerno dodani šum maskira kvantizacijsku distorziju koja nastaje kad se zaokružuju vrijednosti uzoraka na manji broj bitova.',
    explanation:
      'Kad snimate ili miksate u 24-bitnoj ili 32-bitnoj rezoluciji, imate ogroman dinamički raspon i preciznost. Ali krajnji format za distribuciju često zahtijeva 16 bita (CD standard) ili niži bit depth. Prilikom te konverzije, sustav mora zaokružiti svaki uzorak na najbliži dostupan nivo, a to zaokruživanje stvara kvantizacijske pogreške.\n\nBez dithering-a, te pogreške se čuju kao harmonička distorzija, posebno na tihim dijelovima glazbe - fadeout-ima, reverb repovima i tihim instrumentima. Zvuk podsjeća na digitalno \"zrnce\" ili grubost. S dithering-om, ta distorzija se pretvara u blagi, ravnomjerni šum koji je ljudskom uhu puno prihvatljiviji.\n\nPostoje različiti algoritmi dithering-a. Najjednostavniji TPDF (Triangular Probability Density Function) dodaje ravnomjeran šum. Napredniji noise shaping algoritmi (poput Apogee UV22HR ili iZotope MBIT+) guraju dithering šum u frekvencijski raspon iznad 15 kHz, gdje je uho manje osjetljivo, čineći ga praktički nečujnim.\n\nKljučno pravilo: dithering se primjenjuje samo jednom, i to kao zadnji korak u mastering-u prilikom finalne konverzije bit depth-a. Višestruki dithering na istom signalu kumulativno podiže šum bez koristi. Ako radite u 24 bita i izvozite u 24 bita, dithering nije potreban.',
    studioContext:
      'U M Street Music studiju, mastering lanac radi interno u visokoj rezoluciji. Apollo x6 s ESS Sabre pretvaračima pruža 129 dB dinamičkog raspona na izlazu, što znači da čak i pri konverziji na 16 bita dithering ima čist signal za rad. Dithering se primjenjuje kao apsolutno zadnji korak, nakon SSL Fusion obrade i finalnog limitera, prilikom izvoza za CD ili streaming distribuciju.',
    faq: [
      {
        q: 'Trebam li dithering ako izvozim u 24 bita za streaming?',
        a: 'Ako izvozite iz 32-bitnog float projekta u 24-bitni WAV, tehnički je poželjno primijeniti dithering. Ali u praksi, razlika je minimalna jer 24 bita daju 144 dB dinamičkog raspona. Za 16-bitni izvoz (CD) dithering je obavezan.',
      },
      {
        q: 'Mogu li primijeniti dithering više puta?',
        a: 'Ne. Dithering se primjenjuje samo jednom, kao zadnji korak u lancu. Svaka dodatna primjena kumulativno podiže razinu šuma. Zato je bitno isključiti dithering na svim plugin-ima osim na zadnjem u mastering lancu.',
      },
      {
        q: 'Koji tip dithering-a koristiti?',
        a: 'Za mastering, noise shaping algoritmi (UV22HR, MBIT+, POW-r) daju najbolje rezultate jer prebacuju šum u frekvencije gdje ga uho slabije čuje. Za međukorake u produkciji, jednostavan TPDF je dovoljan.',
      },
    ],
    relatedTerms: ['mastering', 'bit-depth', 'sample-rate', 'ad-da-konverzija', 'dinamicki-raspon', 'wav-format'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming', 'online-mastering'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'stem-mastering',
    term: 'Stem mastering',
    englishTerm: 'Stem Mastering',
    category: 'mastering',
    metaTitle: 'Stem mastering - prednosti i proces',
    metaDescription:
      'Što je stem mastering, po čemu se razlikuje od stereo mastering-a i kada ga koristiti. Prednosti stem mastering-a za veću kontrolu nad finalnim zvukom.',
    definition:
      'Stem mastering je tehnika mastering-a kod koje se umjesto jednog stereo mixa obrađuju zasebne grupe instrumenata (stemovi), obično 2 do 8 stereo traka. To daje mastering inženjeru veću kontrolu nad balansom i omogućava preciznije intervencije nego klasični stereo mastering.',
    explanation:
      'U klasičnom stereo mastering-u, inženjer prima jedan stereo mix i na njega primjenjuje EQ, kompresiju, limiting i drugu obradu. Ako postoji problem s balansom - recimo, bas je pretih ili vokali sjede krivo - mogućnosti su ograničene jer svaka promjena utječe na cijeli mix.\n\nStem mastering taj problem rješava razdvajanjem mixa na grupe. Tipična podjela je: bubnjevi, bas, vokali i instrumenti. Svaki stem se obrađuje zasebno, s vlastitim EQ-om i kompresijom, a zatim se svi sumiraju u finalni stereo master. Ako bas treba malo više prisutnosti, to se može napraviti bez da se dira bilo što drugo.\n\nOva tehnika je posebno korisna za produkcije iz kućnih studija. Kad mixing nije rađen u profesionalnom okruženju, veća je šansa da postoje problemi s balansom koje stem mastering može popraviti. Također je odlična za kreiranje alternativnih verzija - instrumental, acapella ili TV mix - direktno iz mastering sesije.\n\nStem mastering zahtijeva više vremena i znanja od stereo mastering-a, pa je i cijena viša. Ali za projekte koji trebaju dodatnu kontrolu ili imaju specifične probleme u mixu, razlika u rezultatu opravdava ulaganje.',
    studioContext:
      'U M Street Music studiju, stem mastering prolazi kroz isti analogni lanac kao i stereo mastering, s tom razlikom da se svaki stem može obraditi zasebno prije sumiranja. Dangerous Music D-Box+ s 16-kanalnim analognim sumiranjem je idealan za ovaj pristup - stemovi se sumiraju u analognoj domeni, što daje kohezivniji i prostorniji zvuk nego digitalno sumiranje. Nakon toga signal ide kroz Tegeler Creme i SSL Fusion za finalnu obradu.',
    faq: [
      {
        q: 'Koliko stemova trebam pripremiti za stem mastering?',
        a: 'Najčešće 4 do 6 stemova: bubnjevi, bas, vokali, instrumenti, i eventualno efekti (reverb, delay) kao zaseban stem. Bitno je da svi stemovi zajedno zvuče identično vašem stereo mixu. Ne šaljite solo instrumente - to bi bio remix, ne mastering.',
      },
      {
        q: 'Kada odabrati stem mastering umjesto stereo mastering-a?',
        a: 'Kad niste potpuno zadovoljni balansom mixa, kad mix dolazi iz kućnog studija bez profesionalnog monitoring-a, ili kad trebate alternativne verzije (instrumental, acapella). Ako je mix već odličan, stereo mastering je sasvim dovoljan.',
      },
      {
        q: 'Kako pravilno izvesti stemove?',
        a: 'Svi stemovi moraju biti iste duljine, počinjati od istog mjesta i u istoj rezoluciji (24-bit, sample rate projekta). Maknite limiting i maximizer sa master busa. Ostavite headroom - stemovi ne smiju clippati. Peak razina svakog stema trebala bi biti oko -6 dB.',
      },
    ],
    relatedTerms: ['mastering', 'mixing', 'bus-grupiranje', 'dinamicki-raspon', 'kompresija', 'eq'],
    relatedServices: ['stem-mastering', 'mastering-pjesme', 'online-mastering'],
    relatedGear: ['d-box-plus', 'tegeler-creme', 'ssl-fusion', 'apollo-x6'],
  },
  {
    slug: 'mid-side',
    term: 'Mid/Side obrada',
    englishTerm: 'Mid/Side Processing',
    category: 'mastering',
    metaTitle: 'Mid/Side obrada - tehnika za stereo sliku',
    metaDescription:
      'Što je Mid/Side obrada, kako razdvaja centar i strane stereo signala i zašto je ključna za kontrolu stereo slike u mastering-u.',
    definition:
      'Mid/Side (M/S) obrada je tehnika koja razdvaja stereo signal na dvije komponente: mid (centar, zajednički sadržaj lijevog i desnog kanala) i side (strane, razlika između kanala). To omogućava zasebnu obradu središnjeg i bočnog sadržaja, što je izuzetno korisno za kontrolu stereo slike u mastering-u.',
    explanation:
      'Klasična stereo obrada radi s lijevim i desnim kanalom. Mid/Side pristup gleda signal drugačije - razdvaja ga na ono što je zajedničko oboma kanalima (mid) i ono što je različito (side). U praksi, mid kanal obično sadrži vokale, bas, kick i snare, dok side sadrži prostorne informacije, reverb, stereo efekte i razlike u panningu.\n\nMatematika je jednostavna: mid = (L+R)/2, side = (L-R)/2. Iz ove dvije komponente moguće je savršeno rekonstruirati originalni stereo signal. To znači da M/S obrada ne gubi informacije - samo ih reorganizira za lakšu manipulaciju.\n\nU mastering-u, M/S EQ je jedan od najmoćnijih alata. Možete pojačati visoke frekvencije samo na stranama za osjećaj širine, bez da dirate vokal u centru. Ili smanjiti bas na stranama za čistiji low-end, jer bas u stereo polju stvara fazne probleme na mono sustavima. Možete i komprimirati mid i side zasebno za različit tretman dinamike.\n\nKljučno upozorenje: M/S obrada zahtijeva umjerenost. Pretjerano pojačavanje side kanala širi stereo sliku, ali može uzrokovati fazne probleme i lošu mono kompatibilnost. Svaka M/S intervencija treba provjeru u mono-u - ako zvuk značajno gubi kvalitetu kad se prebaci u mono, obrada je preagresivna.',
    studioContext:
      'U M Street Music studiju, Mid/Side obrada je standardan dio mastering procesa. SSL Fusion nudi Stereo Image sekciju s M/S kontrolama koja omogućava precizno podešavanje stereo širine. Tegeler Creme, kao Pultec-style EQ, radi u stereo modu, ali u kombinaciji s M/S matrix-om u DAW-u pruža suptilne tonalne korekcije po M/S principu. Svaki M/S potez se provjerava mono preslušavanjem da bi se osigurala kompatibilnost.',
    faq: [
      {
        q: 'Kada koristiti Mid/Side obradu u mastering-u?',
        a: 'Kad mix treba širu stereo sliku, kad bas \"pliva\" u stereo polju i treba ga fokusirati u centar, kad vokali trebaju više prisutnosti bez pojačavanja cijelog mixa, ili kad visoke frekvencije trebaju \"zrak\" bez utjecaja na centralne elemente.',
      },
      {
        q: 'Može li M/S obrada pokvariti mix?',
        a: 'Da, ako se pretjera. Preveliko pojačanje side kanala može uzrokovati fazne probleme i mix koji zvuči čudno u mono-u. Koristite suptilne poteze (1-2 dB) i uvijek provjerite rezultat u mono preslušavanju.',
      },
      {
        q: 'Koja je razlika između stereoширine i M/S obrade?',
        a: 'Stereo width kontrole jednostavno pojačavaju ili smanjuju side kanal. M/S obrada je širi koncept - omogućava zasebnu EQ-izaciju, kompresiju i saturaciju mid i side kanala, što daje puno precizniju kontrolu nego obična width kontrola.',
      },
    ],
    relatedTerms: ['stereo-slika', 'mastering', 'eq', 'kompresija', 'faza', 'panning'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming', 'online-mastering'],
    relatedGear: ['ssl-fusion', 'tegeler-creme'],
  },
  {
    slug: 'true-peak',
    term: 'True peak',
    englishTerm: 'True Peak',
    category: 'mastering',
    metaTitle: 'True peak - što je i zašto je bitan',
    metaDescription:
      'Što je true peak (dBTP), zašto obični peak metri nisu dovoljni i kako intersample peakovi uzrokuju distorziju. Standardi za streaming platforme.',
    definition:
      'True peak je stvarna vršna razina audio signala koja uključuje intersample peakove - skokove amplitude koji nastaju između digitalnih uzoraka prilikom D/A konverzije. Mjeri se u dBTP (decibels True Peak) i točniji je pokazatelj vršnih razina od običnog sample peak metra.',
    explanation:
      'Digitalni audio je niz diskretnih uzoraka, a između svaka dva uzorka postoji praznina. Kad se signal reproducira, D/A pretvarač rekonstruira kontinuirani val između tih točaka. Problem nastaje kad rekonstruirani val dosegne višu razinu od bilo kojeg pojedinačnog uzorka - to je intersample peak.\n\nObični peak metri čitaju samo vrijednosti samih uzoraka i ne vide što se događa između njih. Signal može pokazivati peak od -0.3 dBFS na metru, a u stvarnosti nakon D/A konverzije dosegnuti +0.8 dB, što uzrokuje clipping i distorziju. Ovaj problem je posebno izražen kod snažno limitiranih mastera.\n\nTrue peak metri rješavaju to oversampling-om - povećavaju frekvenciju uzorkovanja najmanje četiri puta i interpoliraju nove točke, čime dobivaju precizniju sliku stvarnog vala. ITU-R BS.1770 standard definira metodologiju true peak mjerenja koja je postala industrija norma.\n\nStreaming platforme zahtijevaju true peak ispod -1 dBTP. To nije slučajno - ta margina osigurava da signal neće clippati nakon kodiranja u MP3, AAC ili Ogg Vorbis format, jer ti lossy kodeci mogu dodatno podići peak razine prilikom kompresije. Mastering s true peak-om na 0 dBFS gotovo sigurno znači distorziju na streaming platformama.',
    studioContext:
      'U M Street Music studiju, true peak metering je obavezan dio svakog mastering-a. Ceiling na finalnom limiteru se postavlja na -1 dBTP, čime se osigurava dovoljno headroom-a za sve formate distribucije. Apollo x6 s ESS Sabre pretvaračima pruža izuzetno čistu D/A konverziju, ali čak i s najboljim pretvaračima, intersample peakovi mogu uzrokovati probleme ako se ne kontroliraju u digitalnoj domeni.',
    faq: [
      {
        q: 'Zašto je -1 dBTP standard za streaming?',
        a: 'Streaming platforme kodiraju audio u lossy formate (MP3, AAC, Ogg Vorbis) koji mogu povisiti peak razinu za 0.5-1 dB. Margina od -1 dBTP osigurava da kodirani fajl neće clippati. Neke platforme (npr. Apple Music) preporučuju čak -2 dBTP za dodatnu sigurnost.',
      },
      {
        q: 'Kako mjeriti true peak?',
        a: 'Koristite true peak meter u DAW-u ili dedicirani plugin poput Youlean Loudness Meter-a, iZotope Insight-a ili NUGEN VisLM-a. Obični peak metri nisu dovoljni - obratite pažnju da plugin eksplicitno podržava true peak (dBTP) mjerenje.',
      },
    ],
    relatedTerms: ['limiter', 'lufs', 'mastering', 'ad-da-konverzija', 'sample-rate', 'decibel', 'metering'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming', 'online-mastering'],
    relatedGear: ['apollo-x6', 'ssl-fusion'],
  },
  {
    slug: 'loudness-war',
    term: 'Loudness war',
    englishTerm: 'Loudness War',
    category: 'mastering',
    metaTitle: 'Loudness war - rat glasnoće u glazbi',
    metaDescription:
      'Što je loudness war, kako je utrka za glasnoćom uništavala dinamiku snimaka i zašto su streaming platforme promijenile pravila igre.',
    definition:
      'Loudness war (rat glasnoće) je trend u glazbenoj industriji od 1990-ih do 2010-ih u kojem su mastering inženjeri pod pritiskom izdavača kontinuirano povećavali prosječnu glasnoću snimaka, žrtvujući dinamički raspon i kvalitetu zvuka u korist percepcije glasnoće.',
    explanation:
      'Korijen loudness wara leži u psihološkom fenomenu - glasniji zvuk se na prvu percipira kao bolji. Kad se dvije pjesme usporede na radiju ili u playlistu, glasnija zvuči punija i impresivnija. To je stvorilo utrku u kojoj je svaka nova snimka morala biti glasnija od prethodne.\n\nTehnički, glasnoća se postizala agresivnom kompresijom i limiting-om. Dinamički raspon se smanjivao s prirodnih 12-15 dB na 4-6 dB. Rezultat: glazba koja je konstantno glasna, bez kontrasta između tiših i glasnijih dijelova. Tranzijentu bubnjeva su zgnječeni, vokali gube ekspresivnost, a slušatelj osjeća zamor nakon nekoliko pjesama.\n\nJedan od najpoznatijih primjera je album \"Death Magnetic\" grupe Metallica iz 2008. godine. Mastering je bio toliko agresivan da su obožavatelji pokrenuli peticiju za remix, a Guitar Hero verzija iste glazbe zvučala je dramatično bolje jer nije prošla isti proces.\n\nStreaming platforme su efektivno završile loudness war uvođenjem loudness normalizacije. Spotify, Apple Music i YouTube automatski prilagođavaju glasnoću svih pjesama na istu razinu (oko -14 LUFS). To znači da presnažan mastering nema prednost - dapače, presnažno limitirana pjesma bit će stišana i zvučat će lošije od verzije s čuvanom dinamikom jer joj nedostaje prostora za \"disanje\".',
    studioContext:
      'U M Street Music studiju pristupamo mastering-u s filozofijom čuvanja dinamike. Analogni lanac - Tegeler Creme za bus kompresiju i SSL Fusion za finalnu obradu - dizajniran je za muzikalne, suptilne intervencije, a ne za agresivno limitiranje. Ciljamo glasnoće koje odgovaraju streaming standardima (-14 LUFS), ali unutar tog okvira čuvamo maksimalnu dinamiku. Rezultat je mastering koji zvuči kompetitivno na platformama, a opet diše i ima emocionalnu snagu koja se gubi kod presnažnog limitiranja.',
    faq: [
      {
        q: 'Je li loudness war završen?',
        a: 'U velikoj mjeri da, zahvaljujući streaming normalizaciji. Spotify, Apple Music i YouTube automatski prilagođavaju glasnoću, pa pretjerano glasne snimke nemaju prednost. Ali neki žanrovi (EDM, hip-hop) i dalje preferiraju agresivniji mastering, i pritisak još postoji kod fizičkih medija i radija.',
      },
      {
        q: 'Kako prepoznati presnažan mastering?',
        a: 'Slušajte zamor nakon nekoliko pjesama, nedostatak kontrasta između tiših i glasnijih dijelova, zgnječene tranzijentu bubnjeva i osjećaj da zvuk \"gura\" bez predaha. Na metru, Integrated LUFS iznad -8 i dinamički raspon ispod 5 dB su jasni znakovi.',
      },
      {
        q: 'Može li se popraviti preglasan mastering?',
        a: 'Ne iz masteriranog fajla - što je jednom zgnječeno, ne može se restaurirati. Jedino rješenje je remaster iz originalnog mixa s umjerenijim postavkama. Zato je bitno da mixing inženjer čuva originalne sesije.',
      },
    ],
    relatedTerms: ['dinamicki-raspon', 'limiter', 'kompresija', 'lufs', 'mastering', 'metering'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming'],
    relatedGear: ['tegeler-creme', 'ssl-fusion'],
  },
  {
    slug: 'metering',
    term: 'Metering',
    englishTerm: 'Metering',
    category: 'mastering',
    metaTitle: 'Metering - mjerenje zvuka u studiju',
    metaDescription:
      'Što je metering, koje vrste metara postoje (VU, peak, RMS, LUFS) i zašto je precizno mjerenje ključno za kvalitetan mixing i mastering.',
    definition:
      'Metering je vizualno mjerenje i prikaz razine audio signala u realnom vremenu. Različiti tipovi metara (VU, peak, RMS, LUFS, true peak) mjere različite aspekte signala i zajedno pružaju kompletnu sliku glasnoće, dinamike i vršnih razina.',
    explanation:
      'Uši su najvažniji alat u studiju, ali imaju ograničenja. Zamor sluha, glasnoća preslušavanja i akustika prostorije utječu na percepciju. Metering daje objektivne podatke koji nadopunjuju subjektivno slušanje i osiguravaju da mastering zadovoljava tehničke standarde.\n\nVU (Volume Unit) metar je najstariji tip, razvijen 1940-ih. Ima sporu balistiku koja prikazuje prosječnu razinu, slično ljudskoj percepciji glasnoće. VU metar je odličan za osjećaj ukupne glasnoće i za postavljanje gain staging-a, ali ne hvata brze tranzijentu.\n\nPeak metar je suprotnost VU-u - prikazuje trenutne vršne vrijednosti signala, uključujući najkraće tranzijentu. Bitan je za sprječavanje clippinga, ali ne govori ništa o percipiranoj glasnoći. True peak metar ide korak dalje i detektira intersample peakove koji nastaju između digitalnih uzoraka.\n\nRMS (Root Mean Square) metar mjeri prosječnu snagu signala i bolje korelira s percepcijom glasnoće od peak metra. Korisne su razlike između RMS i peak razine - manji razmak znači manju dinamiku.\n\nLUFS (Loudness Units Full Scale) je najmoderniji standard. Koristi K-weighting filter koji modelira osjetljivost ljudskog uha po frekvencijama i daje tri mjerenja: Momentary (400ms), Short-term (3s) i Integrated (cijela pjesma). Za mastering za streaming, Integrated LUFS je ključna vrijednost.',
    studioContext:
      'U M Street Music studiju, metering je integriran u svaki korak mastering procesa. Kombinirano se koriste LUFS metar za praćenje percipirane glasnoće i usklađenost sa streaming standardima, true peak metar za kontrolu vršnih razina (ceiling -1 dBTP), te spektralni analizator za vizualnu provjeru frekvencijskog balansa. SSL Fusion i Tegeler Creme imaju vlastite LED indikatore razine, ali precizno digitalno mjerenje u DAW-u ostaje referentna točka za sve finalne odluke.',
    faq: [
      {
        q: 'Koji metar je najvažniji za mastering?',
        a: 'Za mastering za streaming, LUFS metar (Integrated) i true peak metar su najvažniji. LUFS pokazuje percipiranu glasnoću koja mora odgovarati standardima platforme (-14 LUFS za Spotify), a true peak osigurava da signal ne prelazi -1 dBTP.',
      },
      {
        q: 'Mogu li se osloniti samo na metre bez slušanja?',
        a: 'Ne. Metri su alat, ne zamjena za uši. Dva mastera s identičnim LUFS vrijednostima mogu zvučati potpuno različito. Metri služe za provjeru tehničkih parametara i sprječavanje grešaka, ali finalna odluka je uvijek slušna.',
      },
      {
        q: 'Koji su dobri besplatni metering plugini?',
        a: 'Youlean Loudness Meter je odličan besplatan LUFS metar s true peak prikazom. dpMeter od TBProAudio nudi VU, RMS i peak mjerenje. SPAN od Voxengo je referentan besplatni spektralni analizator. Svi rade u svim popularnim DAW-ovima.',
      },
    ],
    relatedTerms: ['lufs', 'true-peak', 'decibel', 'dinamicki-raspon', 'mastering', 'gain-staging', 'loudness-war'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming', 'mixing-pjesme'],
    relatedGear: ['ssl-fusion', 'tegeler-creme', 'apollo-x6'],
  },

  // ==========================================
  // OPREMA
  // ==========================================
  {
    slug: 'signalni-lanac',
    term: 'Signalni lanac',
    englishTerm: 'Signal Chain',
    category: 'osnove',
    metaTitle: 'Signalni lanac u studiju - od mikrofona do master-a',
    metaDescription:
      'Što je signalni lanac u tonskom studiju, kako signal putuje od mikrofona do finalne snimke i zašto je redoslijed opreme bitan.',
    definition:
      'Signalni lanac je putanja koju audio signal prolazi od izvora (mikrofon, instrument) do krajnjeg odredišta (snimka, zvučnici). Svaki uređaj u lancu obrađuje signal redom, a kvaliteta i karakter svakog uređaja utječu na konačni zvuk.',
    explanation:
      'Signalni lanac se može usporediti s lancem u doslovnom smislu - jak je koliko je jaka najslabija karika. Ako imate odličan mikrofon, ali loš preamp, kvaliteta snimke je ograničena preampom.\n\nU studiju za snimanje, tipični signalni lanac ide: mikrofon, preamp, eventualno analogna obrada (kompresor, EQ), AD konverter (analog-to-digital), DAW softver, DA konverter (digital-to-analog), monitor kontroler, studijski monitori.\n\nZa mixing i mastering, lanac je drugačiji: DAW izlaz, DA konverter, analogna obrada (EQ, kompresija, saturacija), AD konverter natrag u DAW. Ovaj analogni insert dodaje karakter koji je teško postići čisto digitalno.\n\nRedoslijed uređaja u lancu je bitan. EQ prije kompresora daje drugačiji rezultat od kompresora prije EQ-a. Saturacija na kraju lanca boja cijeli signal, dok na početku utječe na način na koji sljedeći uređaji reagiraju. Profesionalni inženjeri eksperimentiraju s redoslijedom za postizanje željenog zvuka.',
    studioContext:
      'M Street Music signalni lanac za mastering i mix bus: Apollo x6 (DA konverzija) izlazi u Universal Audio Volt 876 koji služi kao preamp sekcija. Signal ide u Dangerous Music D-Box+ za analogni summing i monitoring, zatim u Tegeler Audio Manufaktur Creme za Pultec-style EQ i bus kompresiju, i konačno u SSL Fusion za stereo obradu (EQ, HF kompresija, Vintage Drive, stereo image). Iz SSL Fusion-a signal se vraća u Apollo x6 za AD konverziju. Svaki uređaj ima svoju ulogu i doprinos ukupnom zvuku studija.',
    faq: [
      {
        q: 'Što je hibridni signalni lanac?',
        a: 'Hibridni signalni lanac kombinira digitalne i analogne uređaje. Signal izlazi iz DAW-a kroz DA konverter, prolazi analognu opremu (EQ, kompresor, saturacija), i vraća se u DAW kroz AD konverter. Dobivate praktičnost digitalnog rada s karakterom analogne obrade.',
      },
      {
        q: 'Mogu li postići profesionalan zvuk bez analogne opreme?',
        a: 'Da. Moderni pluginovi su nevjerojatno kvalitetni i mnoge uspješne produkcije su u potpunosti digitalne. Analogna oprema dodaje specifičan karakter, ali nije preduvjet za kvalitetan zvuk. Važniji su znanje, iskustvo i kvalitetan monitoring.',
      },
    ],
    relatedTerms: ['preamp', 'audio-interface', 'ad-da-konverzija', 'gain', 'monitoring'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['apollo-x6', 'volt-876', 'd-box-plus', 'tegeler-creme', 'ssl-fusion'],
  },
  {
    slug: 'ad-da-konverzija',
    term: 'AD/DA konverzija',
    englishTerm: 'AD/DA Conversion',
    category: 'osnove',
    metaTitle: 'AD/DA konverzija - analogno u digitalno i natrag',
    metaDescription:
      'Što je AD/DA konverzija, kako pretvara zvuk u digitalni signal i zašto kvaliteta pretvarača utječe na zvuk snimke.',
    definition:
      'AD/DA konverzija je proces pretvaranja analognog zvuka u digitalni signal (AD - analog-to-digital) i digitalnog signala natrag u analogni zvuk (DA - digital-to-analog). To je temeljni proces koji omogućava snimanje, obradu i reprodukciju zvuka na računalu.',
    explanation:
      'Zvuk je analogni fenomen - kontinuirane promjene tlaka zraka. Računalo radi s digitalnim podacima - diskretnim brojevima. AD konverter uzima analogne valne oblike i pretvara ih u niz numeričkih vrijednosti (samplea) koje računalo može pohraniti i obraditi.\n\nKvaliteta konverzije ovisi o dva ključna parametra: sample rate (koliko puta u sekundi se signal mjeri) i bit depth (koliko precizno se svako mjerenje zapisuje). Viši sample rate i veći bit depth daju vjerniju digitalnu reprezentaciju originala.\n\nDA konverzija radi obrnuti proces - pretvara digitalne brojeve natrag u analogni signal koji možete čuti kroz zvučnike ili slušalice. Kvaliteta DA konvertera je jednako bitna kao AD konvertera, jer utječe na vjerno prenošenje svake nijanse zvuka.\n\nModerni vrhunski pretvarači postižu dinamički raspon iznad 120 dB i razinu izobličenja ispod -110 dB THD+N, što je daleko iznad percepcijskog praga ljudskog sluha. Razlika između dobrog i odličnog pretvarača čuje se u prostornosti, detaljima i preciznosti stereo slike.',
    studioContext:
      'U M Street Music studiju, AD/DA konverziju obavlja Universal Audio Apollo x6 s ESS Sabre DAC pretvaračima koji nude dinamički raspon od 129 dB. Apollo x6 podržava sample rate do 192 kHz, a standardno snimamo na 48 kHz / 24-bit što je više nego dovoljno za profesionalan rezultat. Za hibridni workflow, signal putuje iz DAW-a kroz DA konverter u analognu opremu (D-Box+, Tegeler Creme, SSL Fusion) i vraća se kroz AD konverter, čime konverzija radi dvaput - zato je bitno da pretvarači budu vrhunske kvalitete.',
    faq: [
      {
        q: 'Koliki sample rate trebam za snimanje?',
        a: '44.1 kHz je CD standard i dovoljan za većinu primjena. 48 kHz je standard za video produkciju i općenito preporučen. 96 kHz i 192 kHz nude teoretske prednosti, ali u praksi je razlika na gotovom masteru minimalna. Snimajte na 48 kHz / 24-bit i bit ćete sigurni.',
      },
      {
        q: 'Zašto je konverzija bitna ako je sve digitalno?',
        a: 'Jer zvuk započinje i završava u analognom svijetu. Mikrofon proizvodi analogni signal koji mora postati digitalan za obradu u DAW-u. Gotova pjesma mora iz digitalnog svijeta natrag u analogni da je čujete. Svaka konverzija je prilika za gubitak ili dobitak kvalitete.',
      },
    ],
    relatedTerms: ['audio-interface', 'sample-rate', 'bit-depth', 'signalni-lanac'],
    relatedServices: ['snimanje-benda', 'mastering-pjesme'],
    relatedGear: ['apollo-x6'],
  },

  // ==========================================
  // OPREMA (nastavak)
  // ==========================================
  {
    slug: 'studijski-monitori',
    term: 'Studijski monitori',
    englishTerm: 'Studio Monitors',
    category: 'oprema',
    metaTitle: 'Studijski monitori - što su i zašto su bitni',
    metaDescription:
      'Što su studijski monitori, kako se razlikuju od običnih zvučnika i zašto su temelj točnog mixing-a i mastering-a. Vodič za glazbenike.',
    definition:
      'Studijski monitori su zvučnici dizajnirani za profesionalnu audio produkciju, s ciljem što vjernijeg i neutralnijeg prikaza zvuka. Za razliku od hi-fi zvučnika koji uljepšavaju zvuk, monitori pokazuju stvarnu sliku snimke, sa svim detaljima i nedostacima.',
    explanation:
      'Razlika između studijskog monitora i običnog zvučnika je u namjeri. Hi-fi zvučnici pojačavaju bas i visoke frekvencije jer to slušatelju zvuči ugodnije. Studijski monitori rade suprotno - teže ravnoj frekvencijskoj karakteristici, jer inženjer zvuka mora čuti točno što se događa u miksu, bez uljepšavanja.\n\nVećina studijskih monitora su aktivni, što znači da imaju ugrađena pojačala i aktivne crossovere koji razdvajaju signal na niske i visoke frekvencije prije pojačanja. Svaki driver (woofer za bas, tweeter za visoke) ima vlastito pojačalo optimizirano za svoj frekvencijski raspon. To daje precizniju reprodukciju nego pasivni sustav s jednim vanjskim pojačalom.\n\nMonitori se dijele na nearfield, midfield i farfield prema udaljenosti slušanja. Nearfield monitori su najčešći u studijima - postavljaju se na udaljenost od 1 do 1,5 metra od slušatelja, čime se minimizira utjecaj akustike prostorije. Tipična veličina woofera je 5 do 8 inča. Veći woofer znači bolju reprodukciju basa, ali i veće zahtjeve za akustičkom obradom prostora.\n\nPozicija monitora jednako je bitna kao i njihova kvaliteta. Monitori se postavljaju u jednakostranični trokut sa slušateljem, na visini ušiju, pod blagim kutom prema unutra. Ova konfiguracija osigurava točnu stereo sliku i precizan panning. Izolirajuće podloge ili stalci sprječavaju prijenos vibracija na stol.',
    studioContext:
      'U M Street Music studiju monitoring sustavom upravlja Dangerous Music D-Box+, vrhunski monitor kontroler koji omogućava trenutno prebacivanje između različitih izvora i monitora s preciznom kontrolom glasnoće. D-Box+ također služi kao analogni summing mixer za kombiniranje više grupa instrumenata u stereo. Apollo x6 s ESS Sabre DAC pretvaračima (129 dB dinamičkog raspona) osigurava da signal koji dolazi do monitora bude maksimalno čist i vjeran.',
    faq: [
      {
        q: 'Koja je razlika između studijskih monitora i običnih zvučnika?',
        a: 'Studijski monitori imaju ravnu frekvencijsku karakteristiku i prikazuju zvuk kakav zaista jest. Obični zvučnici pojačavaju bas i visoke frekvencije da bi zvučali ugodnije. Za mixing trebaš čuti istinu, ne uljepšanu verziju.',
      },
      {
        q: 'Koju veličinu monitora odabrati za kućni studio?',
        a: 'Za malu prostoriju (do 15 m2) dovoljni su monitori s 5-inčnim wooferom. Za veće prostorije, 7-8 inča daje bolji odziv basa. Preveliki monitori u malom prostoru stvaraju probleme s basovskim frekvencijama.',
      },
      {
        q: 'Trebam li subwoofer uz studijske monitore?',
        a: 'Subwoofer pomaže za provjeru najnižih frekvencija (ispod 50 Hz), posebno ako imaš manje monitore. Ali bez dobre akustičke obrade prostorije, subwoofer može više štetiti nego pomoći jer se bas nakuplja u kutovima.',
      },
    ],
    relatedTerms: ['monitoring', 'akusticna-obrada', 'audio-interface', 'frekvencijski-spektar', 'mixing'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['d-box-plus', 'apollo-x6'],
  },
  {
    slug: 'slusalice',
    term: 'Slušalice',
    englishTerm: 'Headphones',
    category: 'oprema',
    metaTitle: 'Studijske slušalice - vodič za odabir',
    metaDescription:
      'Što su studijske slušalice, razlika između otvorenih i zatvorenih, i kako odabrati prave za snimanje, mixing i svakodnevno slušanje.',
    definition:
      'Studijske slušalice su slušalice dizajnirane za profesionalnu audio produkciju, s naglaskom na neutralnu reprodukciju zvuka i udobnost pri dugotrajnom korištenju. Dijele se na zatvorene (closed-back) za snimanje i otvorene (open-back) za mixing.',
    explanation:
      'U studiju se slušalice koriste u dva potpuno različita konteksta, i svaki zahtijeva drugačiji tip. Tijekom snimanja, izvođač mora čuti pratnju bez da zvuk iz slušalica procuri u mikrofon. Za to služe zatvorene (closed-back) slušalice koje imaju čvrste školjke i dobru izolaciju od okoline.\n\nZa mixing i kritičko slušanje koriste se otvorene (open-back) slušalice. One imaju perforirane školjke koje propuštaju zrak i zvuk, što rezultira širom i prirodnijom zvučnom slikom, sličnijom slušanju na monitorima. Nedostatak je što ne izoliraju od okoline i propuštaju zvuk van, pa nisu pogodne za snimanje.\n\nKljučna razlika između studijskih i potrošačkih slušalica je u frekvencijskoj karakteristici. Potrošačke slušalice obično pojačavaju bas i visoke frekvencije jer to zvuči impresivnije. Studijske slušalice teže ravnom odazivu kako bi inženjer mogao točno procijeniti balans mixa. Impendancija je također bitna - profesionalne slušalice često imaju višu impedanciju (250 ohma i više) koja zahtijeva kvalitetniji headphone amp, ali daje detaljniji zvuk.\n\nSlušalice su nezamjenjive za provjeru detalja u miksu - šumove, klikove, sibilante i artefakte koji se na monitorima mogu izgubiti. Također su korisne za provjeru stereo slike i pan pozicija. Međutim, mixing isključivo na slušalicama ima ograničenja jer se percepcija basa i stereo slike razlikuje od monitora.',
    studioContext:
      'U M Street Music studiju slušalice se koriste u obje uloge. Izvođači tijekom snimanja dobivaju individualne headphone mixove koji se kreiraju kroz Apollo x6, tako da svaki glazbenik čuje upravo ono što mu treba - više sebe, manje pratnje, ili obrnuto. Dangerous Music D-Box+ nudi zasebne izlaze za slušalice s preciznom kontrolom glasnoće, a talkback funkcija omogućava komunikaciju između kontrolne sobe i izvođača bez prekidanja session-a.',
    faq: [
      {
        q: 'Mogu li mixing raditi samo na slušalicama?',
        a: 'Možeš, ali uz ograničenja. Slušalice precjenjuju stereo separaciju i drugačije prikazuju bas nego monitori. Ako nemaš monitore, koristi referentne mixove za kalibraciju i redovito provjeravaj mix na drugim sustavima.',
      },
      {
        q: 'Otvorene ili zatvorene slušalice za kućni studio?',
        a: 'Ako radiš i snimanje i mixing, trebaju ti oboje. Zatvorene za snimanje (da zvuk ne procuri u mikrofon), otvorene za mixing (točnija zvučna slika). Ako biraš samo jedne, zatvorene su univerzalnije.',
      },
      {
        q: 'Koliko trebam potrošiti na studijske slušalice?',
        a: 'Solidne studijske slušalice počinju od 100 eura. Za ozbiljan mixing, modeli u rangu 200-400 eura (poput Beyerdynamic DT 770/990, Sennheiser HD 650) daju odličan omjer cijene i kvalitete.',
      },
    ],
    relatedTerms: ['monitoring', 'studijski-monitori', 'mixing', 'audio-interface'],
    relatedServices: ['snimanje-benda', 'snimanje-vokala', 'mixing-pjesme'],
    relatedGear: ['d-box-plus', 'apollo-x6'],
  },
  {
    slug: 'mikser',
    term: 'Mikser',
    englishTerm: 'Mixer / Mixing Console',
    category: 'oprema',
    metaTitle: 'Mikser (mikseta) - što je i kako radi',
    metaDescription:
      'Što je mikser, kako radi mikseta u studiju i uživo, i zašto je bitan za upravljanje zvukom. Kanali, busovi, routing i praktični savjeti.',
    definition:
      'Mikser (mikseta, miks pult) je uređaj za kombiniranje, usmjeravanje i obradu više audio signala istovremeno. Omogućava kontrolu glasnoće, EQ-a, efekata i routing-a svakog kanala pojedinačno, te njihovo spajanje u stereo ili višekanalni izlaz.',
    explanation:
      'Mikser je središnji dio svakog studija ili ozvučenja. Na njemu se spajaju svi izvori zvuka - mikrofoni, instrumenti, playback uređaji - i s njega se signal usmjerava prema snimanju, ozvučenju ili monitoringu.\n\nSvaki kanal miksera ima svoju vertikalnu traku (channel strip) s kontrolama za gain, EQ, aux sendove i fader za glasnoću. Gain na vrhu pojačava ulazni signal na radnu razinu. EQ oblikuje ton. Aux sendovi šalju kopiju signala prema efektima (reverb, delay) ili monitor mixovima za izvođače. Fader na dnu kontrolira koliko tog kanala ide u glavni mix.\n\nBusovi su zajedničke sabirnice na koje se više kanala može usmjeriti. Stereo master bus je konačni izlaz miksera. Grupni busovi (subgrupe) omogućavaju kontrolu cijele sekcije jednim faderom - na primjer, svih mikrofona na bubnjevima. Aux busovi šalju signal prema vanjskim efektima ili monitor mixovima.\n\nDanas mnogi studiji koriste DAW umjesto fizičkog miksera jer softver nudi neograničen broj kanala, potpuni recall i automatizaciju. No analogni mikseri i dalje imaju prednosti - karakter zvuka koji dolazi od preampova, EQ sekcija i summing-a, te fizičke kontrole koje ubrzavaju rad. Hibridni pristup, koji kombinira digitalno s analognim, daje najbolje od oba svijeta.',
    studioContext:
      'M Street Music studio koristi hibridni pristup koji kombinira DAW s analognom opremom. Umjesto klasičnog velikog mikserskog pulta, analogni summing se radi kroz Dangerous Music D-Box+ koji prima do 16 kanala i sumira ih u stereo s karakterom i dubinom koje čisti digitalni summing teško postiže. D-Box+ ujedno služi kao monitor kontroler i talkback sustav. Za tonalno oblikovanje na master busu, signal prolazi kroz SSL Fusion i Tegeler Creme, čime se dobiva karakter analogne konzole bez zauzimanja prostora velikog pulta.',
    faq: [
      {
        q: 'Trebam li mikser ako imam audio interface i DAW?',
        a: 'Za većinu kućnih studija ne. DAW obavlja sve funkcije miksera - glasnoću, EQ, efekte, routing. Fizički mikser ima smisla ako snimateš bend uživo i trebate zasebne monitor mixove, ili ako želiš analogni karakter zvuka na summingu.',
      },
      {
        q: 'Što je summing i zašto je bitan?',
        a: 'Summing je proces kombiniranja više audio kanala u stereo signal. Digitalni summing u DAW-u je matematički precizan, dok analogni summing dodaje blagu harmoničku obojenost i dubinu. Razlika je suptilna, ali čujna na kvalitetnom sustavu.',
      },
      {
        q: 'Analogni ili digitalni mikser za studio?',
        a: 'Digitalni mikseri nude recall, automatizaciju i manji footprint. Analogni mikseri daju karakter zvuka i brži hands-on rad. Većina modernih studija koristi hibridni pristup - DAW za mixing, analogna oprema za summing i obradu na busu.',
      },
    ],
    relatedTerms: ['gain', 'eq', 'bus-grupiranje', 'aux-send', 'signalni-lanac', 'mixing'],
    relatedServices: ['mixing-pjesme', 'snimanje-benda'],
    relatedGear: ['d-box-plus', 'ssl-fusion', 'tegeler-creme'],
  },
  {
    slug: 'audio-kabel',
    term: 'Audio kabel',
    englishTerm: 'Audio Cable',
    category: 'oprema',
    metaTitle: 'Audio kabel - tipovi i razlike',
    metaDescription:
      'Tipovi audio kabela u studiju - XLR, TRS, TS. Razlika između balansiranih i nebalansiranih kabela i zašto je to bitno za kvalitetu zvuka.',
    definition:
      'Audio kabel je vodič koji prenosi audio signal između uređaja u studiju - od mikrofona do preampa, od interfacea do monitora, od instrumenata do DI boxa. Kvaliteta i tip kabela direktno utječu na čistoću signala i otpornost na šum.',
    explanation:
      'U studiju se koristi nekoliko tipova audio kabela, a svaki ima svoju namjenu. Najvažnija razlika je između balansiranih i nebalansiranih kabela.\n\nBalansirani kabeli (XLR i TRS) koriste tri vodiča - pozitivni (hot), negativni (cold) i uzemljenje (ground). Signal putuje kroz oba vodiča, ali u suprotnoj fazi. Kad signal stigne na odredište, prijemnik okreće fazu negativnog vodiča i zbraja ga s pozitivnim. Bilo kakav šum koji se usput pokupio postoji na oba vodiča u istoj fazi, pa se pri zbrajanju poništava. To je razlog zašto balansirani kabeli mogu prenositi signal i na 60 metara bez gubitka kvalitete.\n\nXLR je najčešći konektor u profesionalnom audiju. Ima tri pina, mehanizam zaključavanja koji sprječava slučajno ispadanje i koristi se za mikrofone, monitore i povezivanje studijske opreme. TRS (tip-ring-sleeve) koristi 6,35 mm jack konektor s tri kontakta i prenosi balansirani mono ili nebalansirani stereo signal.\n\nTS (tip-sleeve) kabeli su nebalansirani, s dva vodiča. Koriste se za instrumente - električnu gitaru, bas, sintisajzer. Nemaju zaštitu od šuma pa se preporučaju za kratke duljine, do 5-6 metara. Za duže spojeve, signal se najprije pušta kroz DI box koji ga pretvara u balansirani i zatim ide XLR kabelom do miksera ili interfacea.',
    studioContext:
      'U M Street Music studiju svi kritični spojevi koriste balansirane kabele. Apollo x6 i Volt 876 povezani su s Dangerous Music D-Box+ preko balansiranih TRS kabela, čime se osigurava čist signal bez šuma i interferenci. Mikrofoni se spajaju isključivo XLR kabelima. Svi instrumentalni ulazi prolaze kroz DI boxove koji pretvaraju nebalansirani signal u balansirani prije nego što uđe u signalni lanac, čime se minimizira šum čak i kod dugih kabelskih trasa na stage-u.',
    faq: [
      {
        q: 'Koja je razlika između XLR i TRS kabela?',
        a: 'Oba prenose balansirani signal, razlikuju se po konektoru. XLR ima tri pina i mehanizam zaključavanja, TRS koristi 6,35 mm jack. XLR je standard za mikrofone, TRS za povezivanje opreme (interface-monitor, patchbay). Za audio kvalitetu, nema razlike.',
      },
      {
        q: 'Trebam li skupe kabele za bolji zvuk?',
        a: 'Ne trebaju ti najskuplji kabeli, ali izbjegavaj najjeftinije. Dobro oklopljeni kabeli s kvalitetnim konektorima (Neutrik) su sve što treba. Razlika između kabela od 15 i 150 eura je zanemariva, ali razlika između kabela od 3 i 15 eura je stvarna.',
      },
      {
        q: 'Mogu li koristiti TS kabel umjesto TRS?',
        a: 'Možeš, ali gubiš balansiranje signala, što znači više šuma, posebno na duljinama iznad 3 metra. Za kratke spojeve (patch kabeli) razlika je minimalna, ali za monitore i duže trase uvijek koristi TRS ili XLR.',
      },
    ],
    relatedTerms: ['signalni-lanac', 'di-box', 'audio-interface', 'phantom-power', 'mikrofon'],
    relatedServices: ['snimanje-benda', 'snimanje-vokala'],
    relatedGear: ['apollo-x6', 'volt-876', 'd-box-plus'],
  },
  {
    slug: 'plug-in',
    term: 'Plug-in',
    englishTerm: 'Plugin / VST',
    category: 'oprema',
    metaTitle: 'Plug-in (VST) - što je i kako radi',
    metaDescription:
      'Što je audio plug-in, kako radi VST tehnologija i koje tipove pluginova koristimo u studiju za mixing, mastering i produkciju glazbe.',
    definition:
      'Plug-in je softverski dodatak koji radi unutar DAW-a i proširuje njegove mogućnosti obradom zvuka ili generiranjem novih zvukova. Plug-inovi emuliraju analognu studijsku opremu (EQ, kompresore, efekte) ili nude potpuno nove alate za oblikovanje zvuka.',
    explanation:
      'Prije plug-inova, svaki efekt i obrada zahtijevali su fizički uređaj u racku. Danas jedan računalni plug-in može emulirati kompresor koji košta desetke tisuća eura, s rezultatom koji je za većinu primjena nerazlučiv od originala. To je demokratiziralo audio produkciju i učinilo profesionalne alate dostupnima svima.\n\nPostoje dva osnovna tipa plug-inova. Efekt plug-inovi obrađuju postojeći zvuk - EQ, kompresori, reverb, delay, saturacija, limiter i drugi. Instrument plug-inovi (VSTi) generiraju zvuk - virtualni sintisajzeri, sampleri, drum mašine. Oboje se pokreću unutar DAW-a i integriraju se u signalni lanac projekta.\n\nPlug-inovi dolaze u različitim formatima ovisno o platformi i DAW-u. VST3 je najrašireniji format koji podržavaju gotovo svi DAW-ovi na svim platformama. AU (Audio Units) je Appleov format za macOS i Logic Pro. AAX je Avidov format za Pro Tools. CLAP je noviji open-source format. Većina proizvođača nudi plug-in u svim formatima.\n\nKljučna prednost plug-inova nad hardverom je recall - mogućnost da se sve postavke projekta savršeno reproduciraju pri svakom otvaranju. Analogna oprema zahtijeva ručno vraćanje svih kontrola. S druge strane, vrhunski analogni procesori i dalje nude karakter i osjećaj koji plug-inovi mogu samo približno replicirati.',
    studioContext:
      'U M Street Music studiju plug-inovi su svakodnevni alat koji nadopunjuje analognu opremu. Apollo x6 pokreće UAD plug-inove u realnom vremenu na vlastitom DSP procesoru, bez opterećenja računala. UAD ekosustav nudi emulacije legendarnih kompresora, EQ-ova i preampova (Neve, SSL, API, Fairchild) koje koristimo već na ulazu tijekom snimanja. Za mixing, kombinacija UAD plug-inova na pojedinačnim trakama s analognom obradom na busu (Tegeler Creme, SSL Fusion) daje zvuk koji ima digitalni preciznost i analognu toplinu.',
    faq: [
      {
        q: 'Jesu li plug-inovi dovoljno dobri za profesionalni mixing?',
        a: 'Apsolutno. Današnji plug-inovi su na razini na kojoj čak i iskusni inženjeri teško razlikuju rezultat od hardvera u slijepom testu. Za 95% situacija, kvalitetni plug-inovi daju profesionalan rezultat.',
      },
      {
        q: 'Koji plug-inovi su najbitniji za početak?',
        a: 'EQ, kompresor i reverb su osnova. Većina DAW-ova dolazi s kvalitetnim stock plug-inovima koji su sasvim dovoljni za učenje i početne projekte. Ne trebaš trošiti na dodatne plug-inove dok ne savladaš ono što već imaš.',
      },
      {
        q: 'Što su UAD plug-inovi i zašto su posebni?',
        a: 'UAD plug-inovi rade na posebnom DSP procesoru unutar Universal Audio uređaja, ne na procesoru računala. To znači da možeš koristiti visokokvalitetne emulacije bez utjecaja na performanse računala, čak i na snimanju s minimalnom latencijom.',
      },
    ],
    relatedTerms: ['daw', 'eq', 'kompresija', 'reverb', 'delay', 'mixing', 'mastering'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme', 'produkcija-glazbe'],
    relatedGear: ['apollo-x6', 'ssl-fusion', 'tegeler-creme'],
  },
  {
    slug: 'akusticna-obrada',
    term: 'Akustična obrada',
    englishTerm: 'Acoustic Treatment',
    category: 'oprema',
    metaTitle: 'Akustična obrada studija - zašto je ključna',
    metaDescription:
      'Što je akustična obrada, zašto je bitna za studijski zvuk i kako bass trapovi, apsorberi i difuzori poboljšavaju snimanje i mixing.',
    definition:
      'Akustična obrada je skup materijala i tehnika za kontrolu ponašanja zvuka u prostoriji. Uključuje bass trapove, apsorpcijske panele i difuzore koji zajedno smanjuju neželjene refleksije, stojeće valove i rezonancije, čime se postiže točnija reprodukcija zvuka.',
    explanation:
      'Prostorija u kojoj slušaš zvuk jednako je bitna kao i oprema kojom ga reproduciraš. Bez akustičke obrade, zvuk se odbija od zidova, stropa i poda, stvarajući refleksije koje mijenjaju ono što čuješ. Na nekim mjestima u prostoriji bas će biti prenaglašen, na drugim gotovo nepostojeći. To znači da odluke donesene tijekom mixing-a ne odražavaju stvarni zvuk snimke.\n\nTri su osnovna elementa akustičke obrade. Bass trapovi se postavljaju u kutove prostorije jer se tamo bas frekvencije nakupljaju. Obično su to debeli paneli od mineralne vune (10-20 cm) koji apsorbiraju energiju niskih frekvencija i smanjuju rezonancije koje stvaraju stojeći valovi. Bez bass trapova, bas u miksu će zvučati potpuno drugačije u studiju nego na drugim sustavima.\n\nApsorpcijski paneli postavljaju se na prvu refleksijsku točku - mjesto na bočnom zidu, stropu i iza monitora gdje se zvuk prvi put odbija prema poziciji slušanja. Te rane refleksije stižu s kašnjenjem od par milisekundi i miješaju se s direktnim zvukom, uzrokujući fazne probleme i zamagljenu stereo sliku. Panelima na tim točkama direktno poboljšavaš točnost onoga što čuješ.\n\nDifuzori raspršuju zvuk umjesto da ga apsorbiraju. Postavljaju se na stražnji zid iza pozicije slušanja kako bi prostor zvučao prirodno, a ne mrtvo. Prostorija s previše apsorpcije zvuči neugodno i zamorno za uši. Ravnoteža između apsorpcije i difuzije daje prostor koji je točan, ali i ugodan za dugotrajni rad.',
    studioContext:
      'M Street Music studio ima profesionalnu akustičku obradu dizajniranu za točan monitoring i kvalitetno snimanje. Akustička obrada osigurava da signal koji dolazi iz monitora, a prolazi kroz Dangerous Music D-Box+ monitor kontroler, vjerno prikazuje stvarni zvuk bez obojenosti prostorije. To je posebno bitno za mastering, gdje suptilne odluke na SSL Fusion-u ili Tegeler Creme-u moraju biti bazirane na točnom zvuku, a ne na refleksijama prostorije.',
    faq: [
      {
        q: 'Trebam li akustičku obradu za kućni studio?',
        a: 'Da, i to je vjerojatno najisplativija investicija koju možeš napraviti. Čak i osnovna obrada (bass trapovi u kutovima i paneli na prvim refleksijskim točkama) dramatično poboljšava točnost monitoring-a. Bez toga, svaka odluka pri mixing-u je nagađanje.',
      },
      {
        q: 'Je li akustička pjena dovoljna za obradu studija?',
        a: 'Tanka akustička pjena apsorbira samo visoke frekvencije, a bas prolazi nesmetano. Rezultat je prostorija koja zvuči prigušeno u visokim, ali i dalje ima probleme s basom. Za ozbiljnu obradu treba deblja mineralna vuna ili specijalizirani bass trapovi.',
      },
      {
        q: 'Koja je razlika između akustičke obrade i zvučne izolacije?',
        a: 'Akustička obrada kontrolira zvuk unutar prostorije (refleksije, rezonancije). Zvučna izolacija sprječava prolaz zvuka kroz zidove, pod i strop. To su potpuno različiti problemi koji zahtijevaju različita rješenja. Akustički paneli ne izoliraju zvuk.',
      },
    ],
    relatedTerms: ['studijski-monitori', 'monitoring', 'faza', 'frekvencijski-spektar', 'frekvencija'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme', 'mentorstvo'],
    relatedGear: ['d-box-plus', 'ssl-fusion', 'tegeler-creme'],
  },

  // ==========================================
  // OSNOVE
  // ==========================================
  {
    slug: 'sample-rate',
    term: 'Sample rate',
    englishTerm: 'Sample Rate / Sampling Frequency',
    category: 'osnove',
    metaTitle: 'Sample rate - što je i koji odabrati za snimanje',
    metaDescription:
      'Što je sample rate, zašto je bitan za kvalitetu zvuka i koji sample rate odabrati za snimanje, mixing i mastering.',
    definition:
      'Sample rate (frekvencija uzorkovanja) je broj puta u sekundi koliko AD konverter mjeri analogni signal prilikom digitalizacije. Mjeri se u hercima (Hz) ili kilohercima (kHz). Viši sample rate znači vjerniju digitalnu reprezentaciju originala.',
    explanation:
      'Prema Nyquistovom teoremu, sample rate mora biti barem dvostruko veći od najviše frekvencije koju želite snimiti. Ljudsko uho čuje do otprilike 20 kHz, što znači da sample rate od 40 kHz pokriva cijeli čujni spektar. Zbog anti-aliasing filtera, standardi su postavljeni na 44.1 kHz (CD) i 48 kHz (video/broadcast).\n\n44.1 kHz je standard za CD audio i većinu glazbenih distribucija. 48 kHz je standard za video i broadcast, te se sve češće koristi i za glazbu. 96 kHz i 192 kHz koriste se u profesionalnom okruženju, posebno za snimanje, jer nude prednosti pri obradi i konverziji.\n\nViši sample rate znači više podataka po sekundi, što povećava veličinu fajlova i opterećenje procesora. Za snimanje, 48 kHz nudi odličan balans kvalitete i praktičnosti. Za finalni mastering, izlazni format ovisi o odredištu: 44.1 kHz za streaming i CD, 48 kHz za video, 96 kHz za high-resolution audio.\n\nVažno je razumjeti da viši sample rate sam po sebi ne čini zvuk boljim. Kvaliteta pretvarača, prostora za snimanje i izvedbe daleko je bitnija od toga je li sample rate 44.1 ili 96 kHz.',
    studioContext:
      'U M Street Music studiju standardno snimamo na 48 kHz / 24-bit, što je profesionalni broadcast standard. Apollo x6 podržava sample rate do 192 kHz, ali za većinu projekata 48 kHz daje identičan krajnji rezultat uz manje opterećenje sustava i manje fajlove. Za mastering, izlazni format se prilagođava odredištu - 44.1 kHz za streaming platforme (Spotify, Apple Music), 48 kHz za video produkcije.',
    faq: [
      {
        q: 'Trebam li snimati na 96 kHz?',
        a: 'Za većinu projekata 48 kHz je više nego dovoljno. 96 kHz ima smisla ako radite dosta pitch-shiftinga ili time-stretchinga u post-produkciji, jer viši sample rate daje bolje rezultate pri tim obradama. Ali krajnji master na 44.1 kHz zvučat će gotovo identično.',
      },
      {
        q: 'Što se dogodi ako stavim krivu sample rate?',
        a: 'Ako vaš DAW projekt radi na 48 kHz, a uvezete fajl snimljen na 44.1 kHz bez konverzije, zvuk će biti sporiji i nižeg tona. Uvijek provjerite da se sample rate projekta poklapa s ulaznim materijalom ili omogućite automatsku konverziju u DAW-u.',
      },
    ],
    relatedTerms: ['bit-depth', 'ad-da-konverzija', 'wav-format'],
    relatedServices: ['snimanje-benda', 'mastering-za-streaming'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'bit-depth',
    term: 'Bit depth',
    englishTerm: 'Bit Depth / Word Length',
    category: 'osnove',
    metaTitle: 'Bit depth - što je i zašto snimati na 24 bita',
    metaDescription:
      'Što je bit depth, razlika između 16-bit i 24-bit snimanja, i zašto je 24-bit standard u profesionalnoj audio produkciji.',
    definition:
      'Bit depth (dubina bita) je broj bitova koji se koristi za zapis jednog uzorka (samplea) audio signala. Veći bit depth znači precizniji zapis i veći dinamički raspon. 16-bit daje 96 dB dinamičkog raspona (CD standard), a 24-bit daje 144 dB.',
    explanation:
      'Bit depth određuje koliko precizno digitalni sustav može zapisati razliku između najtiših i najglasnijih zvukova. Zamislite ga kao broj decimala na vagi - više decimala znači preciznija mjerenja.\n\nSa 16 bita, svaki uzorak može imati jednu od 65.536 mogućih vrijednosti, što daje dinamički raspon od 96 dB. To je dovoljno za finalnu distribuciju (CD), ali ne ostavlja puno prostora za pogreške pri snimanju.\n\n24 bita daje 16.777.216 mogućih vrijednosti i dinamički raspon od 144 dB. Taj dodatni prostor znači da možete snimati na nižim razinama (ostavljajući headroom za neočekivane vrhove) bez gubitka kvalitete. Šum kvantizacije (inherentni digitalni šum) je na 24 bita toliko nizak da je praktički nečujan.\n\n32-bit float format, koji mnogi moderni DAW-ovi koriste interno, ima praktički neograničen dinamički raspon i ne može clipati. Ali za finalni export, 24-bit za distribuciju ili 16-bit za CD su standardni formati.',
    studioContext:
      'U M Street Music studiju uvijek snimamo na 24 bita. Apollo x6 pretvarači rade na 24 bita s dinamičkim rasponom od 129 dB, što daje čist signal s minimalnim šumom kvantizacije. Za mastering, finalni format ovisi o odredištu - 24-bit WAV za streaming distribuciju (Spotify, Apple Music prihvaćaju 24-bit), 16-bit za CD mastering s dithering-om za čist prijelaz.',
    faq: [
      {
        q: 'Zašto ne snimati na 32 bita?',
        a: 'Većina audio interfaceova radi AD konverziju na 24 bita. 32-bit float je interni format DAW-a za obradu, ali sam pretvarač ne može snimiti na 32 bita. Nekih novijih interfaceova ima 32-bit float snimanje, ali za većinu primjena 24-bit je savršeno dovoljan.',
      },
      {
        q: 'Trebam li dithering pri konverziji s 24-bit na 16-bit?',
        a: 'Da. Dithering dodaje minimalan šum koji maskira artefakte kvantizacije pri smanjivanju bit depth-a. Bez ditheringa, tihi dijelovi mogu imati čujno izobličenje. Svaki DAW ima dithering opciju pri exportu.',
      },
    ],
    relatedTerms: ['sample-rate', 'dinamicki-raspon', 'wav-format', 'ad-da-konverzija'],
    relatedServices: ['snimanje-benda', 'mastering-pjesme'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'wav-format',
    term: 'WAV format',
    englishTerm: 'WAV / Waveform Audio File Format',
    category: 'osnove',
    metaTitle: 'WAV format - standard za profesionalni audio',
    metaDescription:
      'Što je WAV format, zašto je standard u profesionalnoj audio produkciji i razlike između WAV, MP3, FLAC i AIFF formata.',
    definition:
      'WAV (Waveform Audio File Format) je nekomprimirani audio format koji čuva zvuk u punoj kvaliteti bez gubitka podataka. WAV je industrijski standard za profesionalno snimanje, mixing i mastering jer zadržava sve originalne informacije audio signala.',
    explanation:
      'Audio formati se dijele na nekomprimirane (WAV, AIFF), komprimirane bez gubitka (FLAC, ALAC) i komprimirane s gubitkom (MP3, AAC, OGG). WAV sprema sirove digitalne podatke bez ikakve kompresije, što znači da je kvaliteta identična originalu.\n\nNedostatak WAV-a je veličina. Jedna minuta stereo zvuka na 44.1 kHz / 16-bit zauzima oko 10 MB. Na 48 kHz / 24-bit, to raste na oko 17 MB po minuti. Album od 60 minuta na profesionalnoj razini zauzima preko 1 GB.\n\nMP3 komprimira audio na otprilike desetinu veličine, ali odbacuje podatke koje algoritam smatra manje bitnima. Na 320 kbps MP3 je gotovo neraspoznatljiv od WAV-a za većinu slušatelja, ali u profesionalnom kontekstu ta razlika je bitna. Svaka obrada nad MP3 fajlom dodatno degradira kvalitetu.\n\nFLAC nudi kompresiju bez gubitka, smanjujući veličinu za 40-60% bez odbacivanja ikakvih podataka. To ga čini odličnim za arhiviranje i high-resolution distribuciju. Apple Music koristi ALAC (Appleov ekvivalent), a Tidal nudi FLAC streaming.',
    studioContext:
      'U M Street Music studiju sav rad se obavlja u WAV formatu na 48 kHz / 24-bit. Kad nam klijenti šalju materijal za mixing ili mastering, tražimo WAV ili AIFF fajlove. MP3 nije prihvatljiv za profesionalnu obradu jer gubitak kvalitete pri kompresiji ne može se vratiti. Gotove mastere isporučujemo u WAV formatu za distribuciju, a na zahtjev i u FLAC-u. Distributer (DistroKid, TuneCore i sl.) zatim generira MP3 i AAC verzije za streaming platforme.',
    faq: [
      {
        q: 'Mogu li poslati MP3 za mixing?',
        a: 'Ne preporučujemo. MP3 je komprimirani format s gubitkom kvalitete. Za mixing trebamo nekomprimirane fajlove (WAV ili AIFF) jer svaka obrada dodatno degradira MP3. Ako imate samo MP3, radite s onim što imate, ali kvaliteta neće biti optimalna.',
      },
      {
        q: 'Koja je razlika između WAV i AIFF?',
        a: 'Oboje su nekomprimirani formati identične kvalitete. WAV je razvio Microsoft, AIFF Apple. U praksi su zamjenjivi. WAV je šire podržan, ali AIFF radi jednako dobro u svim profesionalnim DAW-ovima.',
      },
      {
        q: 'Zašto Spotify ne koristi WAV?',
        a: 'WAV bi zahtijevao ogromnu propusnost i pohranu. Spotify koristi OGG Vorbis format na do 320 kbps, što je komprimirani format s gubitkom, ali na toj razini razlika je minimalna za većinu slušatelja. Apple Music nudi ALAC (lossless) za kvalitetniju reprodukciju.',
      },
    ],
    relatedTerms: ['sample-rate', 'bit-depth'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme', 'online-mixing'],
  },
  {
    slug: 'daw',
    term: 'DAW',
    englishTerm: 'Digital Audio Workstation',
    category: 'osnove',
    metaTitle: 'DAW - digitalna audio radna stanica',
    metaDescription:
      'Što je DAW, kako se koristi za snimanje i mixing glazbe, i koji su najpopularniji programi za audio produkciju.',
    definition:
      'DAW (Digital Audio Workstation) je softver za snimanje, uređivanje, mixing i produkciju audio sadržaja. DAW je središnji alat u svakom modernom studiju koji zamjenjuje i nadopunjuje tradicionalne analogne konzole i uređaje za snimanje.',
    explanation:
      'DAW je srce modernog studija. U njemu se snimaju trake, editiraju snimke, primjenjuju efekti, radi mixing i priprema materijal za mastering. Sve što se nekad radilo na analognim konzolama, magnetofonskim trakama i fizičkim uređajima danas se može napraviti u DAW-u.\n\nSvaki DAW nudi osnovne funkcije: višekanalno snimanje, nedestruktivno uređivanje, virtualnu mixer konzolu, podršku za pluginove (VST, AU, AAX) i MIDI funkcionalnost. Razlikuju se po korisničkom sučelju, workflow-u i specijalnostima.\n\nNajpopularniji DAW-ovi su Pro Tools (industrijski standard za snimanje i post-produkciju), Logic Pro (Appleov DAW, popularan među producentima), Ableton Live (dizajniran za elektroničku glazbu i live nastupe), Cubase (svestran, popularan u Europi), Studio One (moderan i intuitivan) i FL Studio (popularan za beat making).\n\nIzbor DAW-a je osobna preferencija. Svi vrhunski DAW-ovi mogu proizvesti identičan rezultat. Bitniji je od DAW-a znanje osobe koja ga koristi.',
    studioContext:
      'U M Street Music studiju koristimo profesionalni DAW za snimanje i mixing, integriran s Universal Audio Apollo x6 platformom i UAD plugin ekosustavom. DAW upravlja višekanalnim snimanjem, automatizacijom i routing-om signala kroz analognu opremu. Za hibridni workflow, DAW šalje grupe instrumenata kroz Apollo x6 izlaze u analogni lanac (D-Box+, Tegeler Creme, SSL Fusion) i prima obrađeni signal natrag za finalno sumiranje.',
    faq: [
      {
        q: 'Koji DAW je najbolji za početnike?',
        a: 'GarageBand (besplatan na Macu) je odličan za potpune početnike. Za ozbiljniji rad, Reaper je pristupačan (60$) i moćan, Logic Pro je 200$ jednokratno, a mnogi DAW-ovi nude besplatne ili ograničene verzije za isprobavanje.',
      },
      {
        q: 'Trebam li skupi DAW za profesionalan zvuk?',
        a: 'Ne. Zvuk ne ovisi o cijeni DAW-a. Besplatni Reaper može proizvesti identičan mix kao Pro Tools koji košta nekoliko stotina dolara. Razlike su u workflow-u, podržanim formatima i specifičnim funkcijama, ne u kvaliteti zvuka.',
      },
      {
        q: 'Mogu li koristiti pluginove iz jednog DAW-a u drugom?',
        a: 'Pluginovi u VST ili AU formatu rade u svim DAW-ovima koji podržavaju te formate (gotovo svi). AAX pluginovi rade samo u Pro Tools-u. UAD pluginovi rade u svim glavnim DAW-ovima uz UAD hardware.',
      },
    ],
    relatedTerms: ['audio-interface', 'mixing', 'sample-rate', 'wav-format'],
    relatedServices: ['snimanje-benda', 'mixing-pjesme'],
    relatedGear: ['apollo-x6'],
  },
  // ==========================================
  // OSNOVE (nastavak)
  // ==========================================

  {
    slug: 'frekvencija',
    term: 'Frekvencija',
    englishTerm: 'Frequency',
    category: 'osnove',
    metaTitle: 'Frekvencija - osnova zvuka i glazbe',
    metaDescription:
      'Što je frekvencija, kako utječe na visinu tona i zašto je razumijevanje frekvencija ključno za snimanje, mixing i mastering.',
    definition:
      'Frekvencija je broj titraja (ciklusa) zvučnog vala u jednoj sekundi, izražena u hercima (Hz). Određuje visinu tona koju percipiramo - niže frekvencije čujemo kao duboke tonove, a više frekvencije kao visoke. Ljudsko uho čuje raspon od otprilike 20 Hz do 20.000 Hz (20 kHz).',
    explanation:
      'Kad gitarist trzne žicu, ona vibrira naprijed-nazad određenim brojem puta u sekundi. Ako vibrira 440 puta u sekundi, nastaje ton A4 (koncertni A) s frekvencijom od 440 Hz. Udvostručavanje frekvencije na 880 Hz daje isti ton, ali oktavu više. Taj odnos vrijedi za sve tonove - svaka oktava je dvostruka frekvencija prethodne.\n\nU audio produkciji, frekvencijski spektar se dijeli na nekoliko ključnih područja. Sub-bas (20-60 Hz) osjetite više nego što ga čujete, to je ono duboko tutnjanje u prsima. Bas (60-250 Hz) daje temelj i toplinu. Srednje frekvencije (250 Hz - 4 kHz) nose većinu informacija o instrumentima i glasu. Visoke frekvencije (4-20 kHz) dodaju sjaj, zrak i detalje.\n\nRazumijevanje frekvencija je temelj za rad s EQ-om. Kad inženjer zvuka kaže da vokal treba \"više zraka\", misli na pojačavanje visokih frekvencija iznad 10 kHz. Kad kaže da bas gitara \"mulja\", misli na problematičan raspon oko 200-400 Hz koji treba pročistiti.\n\nSvaki instrument zauzima određeni frekvencijski raspon. Bas gitara se kreće od oko 40 Hz do 5 kHz, vokal od 80 Hz do 12 kHz, činele od 300 Hz do iznad 20 kHz. Mixing je u suštini balansiranje tih raspona tako da se instrumenti ne preklapaju previše i da svaki ima svoj prostor u frekvencijskom spektru.',
    studioContext:
      'U M Street Music studiju frekvencijski balans kontroliramo na svakoj razini signalnog lanca. SSL Fusion nudi Violet EQ za precizne korekcije u visokom spektru i Vintage EQ za širokopoojasno oblikovanje tonalnog karaktera. Tegeler Audio Manufaktur Creme s Pultec-style EQ-om radi na širokim potezima koji oblikuju cjelokupni frekvencijski karakter mixa bez da zvuči obrađeno. Apollo x6 s ESS Sabre DAC-om vjerno prenosi cijeli frekvencijski raspon s dinamičkim rasponom od 129 dB, što znači da čujemo i najsuptilnije detalje u visokim frekvencijama.',
    faq: [
      {
        q: 'Što je frekvencijski raspon ljudskog glasa?',
        a: 'Fundamentalne frekvencije muškog glasa su otprilike 85-180 Hz, a ženskog 165-255 Hz. No harmonici glasa sežu puno više, do 12 kHz i dalje, i upravo ti harmonici daju glasu prepoznatljivost i razumljivost.',
      },
      {
        q: 'Zašto neke frekvencije zvuče neugodno?',
        a: 'Ljudsko uho je najosjetljivije na raspon 2-5 kHz jer je evolucijski prilagođeno za prepoznavanje govora. Rezonancije i oštre frekvencije u tom rasponu brzo postanu naporne. Zato se pri mixing-u tom području pristupa pažljivo.',
      },
      {
        q: 'Što znači kad mi kažu da mi mix \"zvuči tamno\"?',
        a: 'To znači da nedostaje energije u visokim frekvencijama (iznad 8-10 kHz). Može biti rezultat pretamnog mikrofona, EQ postavki ili prevelike kompresije koja guši tranzijentu. Suprotno tome, \"svijetao\" mix ima naglašene visoke frekvencije.',
      },
    ],
    relatedTerms: ['eq', 'frekvencijski-spektar', 'harmonik', 'high-pass-filter'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['ssl-fusion', 'tegeler-creme'],
  },
  {
    slug: 'decibel',
    term: 'Decibel',
    englishTerm: 'Decibel (dB)',
    category: 'osnove',
    metaTitle: 'Decibel (dB) - mjerenje glasnoće zvuka',
    metaDescription:
      'Što je decibel, kako se mjeri glasnoća zvuka i zašto je razumijevanje dB skale bitno za snimanje, mixing i mastering.',
    definition:
      'Decibel (dB) je logaritamska jedinica za mjerenje omjera između dva signala, najčešće korištena za izražavanje glasnoće zvuka. Nije apsolutna mjera, nego uvijek opisuje odnos prema nekoj referentnoj vrijednosti. U audio produkciji susrećemo dB SPL, dBu, dBFS i druge varijante.',
    explanation:
      'Decibel je logaritamska skala, što znači da se ne ponaša kao obična linearna mjera. Porast od 3 dB predstavlja udvostručavanje snage signala, a porast od 6 dB udvostručavanje napona ili zvučnog tlaka. U praksi, povećanje od 10 dB percipiramo kao otprilike dvostruku glasnoću.\n\nU studijskom radu susrećete nekoliko varijanti decibela. dB SPL (Sound Pressure Level) mjeri fizičku glasnoću zvuka u prostoru - šapat je oko 30 dB SPL, normalan razgovor oko 60 dB SPL, a rock koncert može doseći 120 dB SPL. dBu mjeri razinu napona analognog signala, gdje je profesionalna radna razina +4 dBu. dBFS (Full Scale) je digitalna mjera gdje je 0 dBFS apsolutni maksimum koji digitalni sustav može zapisati, a sve se mjeri u negativnim vrijednostima ispod toga.\n\nU mixing-u i mastering-u, razumijevanje dB skale pomaže u donošenju odluka. Kad podešavate glasnoću trake za 1-2 dB, to je suptilna promjena. Kad EQ-om pojačate frekvenciju za 6 dB, to je značajna, jasno čujna intervencija. Kad kompresor radi gain redukciju od 10 dB, to je teška kompresija.\n\nZaštita sluha je praktičan razlog za razumijevanje decibela. Kontinuirana izloženost zvukovima iznad 85 dB SPL može trajno oštetiti sluh. U studiju to znači raditi na umjerenoj glasnoći i praviti redovite pauze, posebno pri mixing-u koji traje satima.',
    studioContext:
      'U M Street Music studiju razine signala se pažljivo kontroliraju u svakom koraku signalnog lanca. Apollo x6 s ESS Sabre pretvaračima nudi dinamički raspon od 129 dB, što znači iznimno nizak šum i puno prostora za čist signal. Dangerous Music D-Box+ kao monitor kontroler ima preciznu kontrolu glasnoće s koracima od 1 dB, što omogućava konzistentno slušanje na istoj razini - ključno za donošenje pouzdanih odluka pri mixing-u i mastering-u.',
    faq: [
      {
        q: 'Koja je razlika između dBFS i dB SPL?',
        a: 'dBFS (Full Scale) mjeri razinu digitalnog signala, gdje je 0 dBFS maksimum. dB SPL (Sound Pressure Level) mjeri fizičku glasnoću zvuka u prostoru. Nisu direktno povezani jer ovise o pojačalu i zvučnicima između digitalnog signala i vaših ušiju.',
      },
      {
        q: 'Na kojoj glasnoći trebam raditi mixing?',
        a: 'Preporučena razina za mixing je oko 79-85 dB SPL na poziciji slušanja. Na toj razini ljudsko uho ima najravnomjerniju percepciju frekvencija. Predug rad na glasnijem monitoringu umara uho i dovodi do loših odluka.',
      },
      {
        q: 'Koliko decibela je previše za sluh?',
        a: 'Kontinuirana izloženost iznad 85 dB SPL može oštetiti sluh. Koncert može doseći 110-120 dB SPL. Kao glazbenik, ulaganje u kvalitetne čepiće za uši i umjeren monitoring u studiju su najvažnije stvari za dugoročno zdravlje sluha.',
      },
    ],
    relatedTerms: ['gain', 'dinamicki-raspon', 'lufs', 'metering', 'gain-staging'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['apollo-x6', 'd-box-plus'],
  },
  {
    slug: 'dinamika',
    term: 'Dinamika',
    englishTerm: 'Dynamics',
    category: 'osnove',
    metaTitle: 'Dinamika u glazbi i audio produkciji',
    metaDescription:
      'Što je dinamika u glazbi, kako se kontrolira u mixing-u i mastering-u, i zašto je balans tihi i glasnih dijelova bitan za emociju pjesme.',
    definition:
      'Dinamika u audio kontekstu označava raspon između najtiših i najglasnijih dijelova glazbenog materijala. Široka dinamika znači velike razlike u glasnoći (od šapta do vrhunca), dok uska dinamika znači da je razina relativno ujednačena kroz cijeli komad.',
    explanation:
      'Dinamika je jedan od najsnažnijih izražajnih alata u glazbi. Kad orkestar postupno gradi crescendo od pianissima do fortissima, ta promjena glasnoće stvara napetost i emocionalnu kulminaciju. Kad bubnjar udari fill prije refrena, taj nagli skok u energiji daje pjesmi pokret.\n\nU audio produkciji, dinamika se mjeri kao razlika između najtiših i najglasnijih dijelova signala, izražena u decibelima. Sirova snimka orkestra može imati dinamički raspon od 60 dB ili više. Pop pjesma nakon mixing-a obično ima raspon od 10-15 dB. Tu razliku stvara obrada dinamike kroz kompresiju, limitiranje i automatizaciju glasnoće.\n\nKontroliranje dinamike je stalan balans. Previše kompresije čini pjesmu zamornom i beživotnom jer nema kontrasta između tihih i glasnih trenutaka. Premalo obrade ostavlja mix koji na streaming platformama i u autima zvuči neujednačeno, s vokalom koji se gubi iza instrumenata u tihim dijelovima.\n\nAlati za obradu dinamike uključuju kompresore, limitere, expandere, noise gateove i automatizaciju glasnoće. Svaki ima svoju ulogu - kompresor kontrolira razinu na razini pojedinačne trake, limiter postavlja apsolutnu granicu glasnoće na master busu, a automatizacija daje ručnu, kreativnu kontrolu nad dinamikom cijele pjesme.',
    studioContext:
      'U M Street Music studiju dinamika se oblikuje kroz kombinaciju analogne i digitalne obrade. Tegeler Audio Manufaktur Creme nudi paralelnu tube/FET kompresiju koja kontrolira dinamiku a da pritom zadrži osjećaj živosti i prirodnog disanja glazbe. SSL Fusion s HF Compressor modulom specifično kontrolira dinamiku visokih frekvencija, dok njegov Limiter postavlja preciznu granicu na master busu. Hibridni pristup omogućava da se dinamika oblikuje muzikalno, a ne samo tehnički.',
    faq: [
      {
        q: 'Što je loudness war i kako utječe na dinamiku?',
        a: 'Loudness war je trend agresivnog komprimiranja i limitiranja glazbe da zvuči što glasnije. Rezultat je gubitak dinamike, zamor slušatelja i zvuk bez kontrasta. Streaming platforme su ublažile ovaj problem jer normaliziraju glasnoću, pa prekomjerno limitan mix zapravo zvuči lošije.',
      },
      {
        q: 'Koliki dinamički raspon treba imati moj mix?',
        a: 'Ovisi o žanru. Klasična glazba može imati 20+ dB raspona. Pop i rock obično 8-14 dB. EDM i hip-hop često 6-10 dB. Bitnije od brojki je da mix zvuči prirodno i da dinamika podržava emociju pjesme.',
      },
    ],
    relatedTerms: ['kompresija', 'limiter', 'dinamicki-raspon', 'loudness-war', 'noise-gate'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme', 'mastering-za-streaming'],
    relatedGear: ['tegeler-creme', 'ssl-fusion'],
  },
  {
    slug: 'harmonik',
    term: 'Harmonik',
    englishTerm: 'Harmonic / Overtone',
    category: 'osnove',
    metaTitle: 'Harmonici - što su i zašto su bitni za zvuk',
    metaDescription:
      'Što su harmonici, kako nastaju i zašto određuju boju zvuka svakog instrumenta. Razlika između parnih i neparnih harmonika.',
    definition:
      'Harmonici su frekvencije koje nastaju kao cjelobrojni višekratnici fundamentalne frekvencije (osnovnog tona). Kad žica vibrira na 100 Hz, istovremeno nastaju harmonici na 200 Hz, 300 Hz, 400 Hz i dalje. Odnos i jačina tih harmonika određuju boju zvuka (timbar) instrumenta.',
    explanation:
      'Kad čujete istu notu odsviranu na gitari i na klaviru, prepoznajete razliku unatoč istoj visini tona. Ta razlika u boji zvuka dolazi od harmonika. Svaki instrument proizvodi drugačiji raspored i intenzitet harmonika iznad fundamentalne frekvencije, i to je ono što ga čini prepoznatljivim.\n\nPrvi harmonik (fundamentalna frekvencija) određuje visinu tona. Drugi harmonik je oktava iznad, treći je kvinta iznad oktave, četvrti je dvije oktave iznad. Što je harmonik viši, to je tiši, ali prisutnost ili odsutnost pojedinih harmonika drastično mijenja percepciju zvuka.\n\nParni harmonici (2., 4., 6.) zvuče toplo, muzikalno i ugodno. Lampeni (tube) pojačala i saturacija poznati su po tome što dodaju parne harmonike signalu, čineći ga bogatijim. Neparni harmonici (3., 5., 7.) dodaju agresivnost i \"grit\". Tranzistorski (solid-state) uređaji pri saturaciji naginje neparnim harmonicima, što objašnjava njihov oštriji karakter.\n\nU mixing-u i mastering-u, harmonici se dodaju kroz saturaciju, tape emulaciju, tube obradu ili harmonic excitere. Cilj je obogatiti zvuk bez da ga učinite grubim. Blaga harmonička saturacija na master busu može cijeli mix učiniti punijim i toplijim, dok pretjerana saturacija unosi distorziju i zamućuje detalje.',
    studioContext:
      'U M Street Music studiju harmonički sadržaj oblikujemo na više razina. Tegeler Audio Manufaktur Creme s tube krugom dodaje parne harmonike koji obogaćuju zvuk bez da ga čine mutnim. SSL Fusion Drive modul pruža kontroliranu harmoničku saturaciju na master busu, od suptilne topline do izraženijeg karaktera. Apollo x6 Unison preampovi emuliraju harmoničke karakteristike legendarnih preampova poput Neve 1073, koji su cijenjeni upravo zbog svog bogatog harmoničkog obojenja.',
    faq: [
      {
        q: 'Što je razlika između harmonika i alikvotnog tona?',
        a: 'Harmonici su strogo cjelobrojni višekratnici fundamentalne frekvencije (2x, 3x, 4x...). Alikvotni ton (overtone) je svaka frekvencija iznad fundamentala, uključujući i neharmonične komponente. Kod žičanih instrumenata, alikvotni tonovi su uglavnom harmonici. Kod udaraljki (činele, zvona), alikvotni tonovi nisu nužno harmonici.',
      },
      {
        q: 'Zašto lampeni pojačala zvuče toplije?',
        a: 'Elektronske lampe pri saturaciji pojačano stvaraju parne harmonike (2., 4., 6.) koji zvuče muzikalno i ugodno. Tranzistori pri saturaciji stvaraju više neparnih harmonika koji zvuče oštrije. Ta razlika u harmoničkom spektru je razlog zašto glazbenici preferiraju tube opremu za topliji zvuk.',
      },
    ],
    relatedTerms: ['frekvencija', 'saturacija', 'eq', 'frekvencijski-spektar'],
    relatedServices: ['mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['tegeler-creme', 'ssl-fusion', 'apollo-x6'],
  },
  {
    slug: 'faza',
    term: 'Faza',
    englishTerm: 'Phase',
    category: 'osnove',
    metaTitle: 'Faza zvuka - što je i zašto je bitna',
    metaDescription:
      'Što je faza u audio produkciji, kako nastaje fazno poništavanje i kako se rješavaju fazni problemi pri snimanju i mixing-u.',
    definition:
      'Faza opisuje poziciju zvučnog vala u njegovom ciklusu u određenom trenutku, izraženu u stupnjevima (0-360). Kad se dva identična signala kombiniraju u fazi, pojačavaju se. Kad su 180 stupnjeva van faze, poništavaju se. U praksi, fazni problemi nastaju kad mikrofoni snimaju isti izvor s različitih udaljenosti.',
    explanation:
      'Zvučni val se širi kao izmjena područja kompresije i razrjeđenja zraka. Jedan potpuni ciklus te oscilacije je 360 stupnjeva. Kad dva mikrofona snimaju isti izvor, ali je jedan malo dalje, zvuk do njega stiže s kašnjenjem. To kašnjenje znači da se valovi dvaju signala ne poklapaju savršeno - i tu počinju fazni problemi.\n\nKad su dva signala potpuno u fazi (0 stupnjeva razlike), njihove amplitude se zbrajaju i signal postaje glasniji. To je konstruktivna interferencija. Kad su potpuno van faze (180 stupnjeva), njihove amplitude se poništavaju i signal nestaje. To je destruktivna interferencija, ili fazno poništavanje.\n\nU praksi, potpuno poništavanje je rijetko jer se ne radi o identičnim signalima. Ono što se događa je djelomično poništavanje određenih frekvencija, što rezultira tankim, šupljim zvukom bez basa i punine. Klasičan primjer je snimanje bubnjeva s više mikrofona - ako overhead mikrofoni nisu jednako udaljeni od snare bubnja, donje frekvencije snarea mogu biti značajno oslabljene.\n\nPravilo 3:1 pomaže pri postavljanju mikrofona: udaljenost između dva mikrofona trebala bi biti barem tri puta veća od udaljenosti najbližeg mikrofona od izvora zvuka. U mixing-u, fazne probleme možete riješiti invertiranjem polariteta (phase flip), vremenskim poravnanjem traka ili jednostavno pomicanjem mikrofona.',
    studioContext:
      'U M Street Music studiju fazna koherentnost je prioritet od samog početka snimanja. Pri postavljanju mikrofona za snimanje benda, posebno bubnjeva, pažljivo mjerimo udaljenosti i provjeravamo fazne odnose između svih mikrofona. Apollo x6 omogućava monitoring u realnom vremenu s minimalnom latencijom, pa fazne probleme možemo uočiti i riješiti odmah, prije nego što uđu u snimku. U mixing-u, DAW alati za fazno poravnanje pomažu u preciznom podešavanju vremenskog odnosa između traka.',
    faq: [
      {
        q: 'Kako prepoznati fazni problem u snimci?',
        a: 'Najčešći znak je tanak, šupalj zvuk koji gubi bas kad se prebaci u mono. Prebacite stereo mix u mono - ako bas ili određeni instrumenti značajno izgube na glasnoći ili punini, imate fazni problem. Većina DAW-ova ima mono prekidač upravo za tu provjeru.',
      },
      {
        q: 'Što je phase flip i kad ga koristim?',
        a: 'Phase flip (invertiranje polariteta) okreće signal za 180 stupnjeva - pozitivne amplitude postaju negativne i obrnuto. Koristite ga kad dva mikrofona snimaju isti izvor, a jedan je okrenut naopako u odnosu na drugi (npr. mikrofon ispod snare bubnja). Isprobajte oba položaja i zadržite onaj koji zvuči punije.',
      },
      {
        q: 'Je li fazni problem isto što i kašnjenje?',
        a: 'Povezani su, ali nisu isto. Kašnjenje (delay) jednog signala uzrokuje fazne razlike koje ovise o frekvenciji. Niže frekvencije s dugim valovima su manje pogođene malim kašnjenjima, dok se više frekvencije s kratkim valovima brže poništavaju. Zato fazni problemi prvo pogode srednje i visoke frekvencije.',
      },
    ],
    relatedTerms: ['mikrofon', 'stereo-slika', 'mid-side', 'panning'],
    relatedServices: ['snimanje-benda', 'mixing-pjesme'],
    relatedGear: ['apollo-x6', 'volt-876'],
  },
  {
    slug: 'gain-staging',
    term: 'Gain staging',
    englishTerm: 'Gain Staging',
    category: 'osnove',
    metaTitle: 'Gain staging - kako postaviti razine signala',
    metaDescription:
      'Što je gain staging, zašto je bitan za čist zvuk i kako pravilno postaviti razine signala od mikrofona do mastera.',
    definition:
      'Gain staging je postupak podešavanja razine audio signala u svakoj točki signalnog lanca tako da signal bude dovoljno jak za kvalitetan rad, ali ne toliko jak da uzrokuje distorziju. Cilj je održati optimalan omjer signala i šuma (SNR) bez clippinga u bilo kojoj fazi.',
    explanation:
      'Signal prolazi kroz mnogo stupnjeva na putu od mikrofona do gotovog mastera: preamp, audio interface, DAW kanal, EQ plugin, kompresor, bus, master fader. Na svakom od tih stupnjeva signal može biti preslabo ili prejak. Gain staging znači osigurati da je na svakom koraku optimalan.\n\nU analognom svijetu, razine su bile kritične jer su uređaji imali ograničen dinamički raspon. Preslab signal tonuo je u šum, a prejak signal izazivao je distorziju. Profesionalna radna razina od +4 dBu postavljena je tako da bude dovoljno iznad noise floora, a dovoljno ispod clipping točke.\n\nU digitalnom okruženju, 32-bit float obrada u DAW-u tehnički ne može clipati interno. Ali to ne znači da gain staging nije bitan. Pluginovi koji modeliraju analognu opremu reagiraju drugačije na različite ulazne razine. Kompresor postavljen na threshold od -18 dBFS neće raditi ispravno ako mu šaljete signal na -6 dBFS. Isto vrijedi za saturaciju, EQ i praktično svaki plugin.\n\nDobra praksa je ciljati na vršne vrijednosti oko -18 do -12 dBFS na pojedinačnim kanalima u DAW-u. To ostavlja dovoljno headrooma na master busu za mastering (4-6 dB ispod 0 dBFS). Kad svaki kanal ima ispravnu razinu, pluginovi rade u optimalnom rasponu, mix bus ne clippa, i mastering inženjer dobiva materijal s kojim može kvalitetno raditi.',
    studioContext:
      'U M Street Music studiju gain staging počinje već na preampu. Volt 876 preampovi s diskretnim Class-A dizajnom daju čist signal s niskim šumom, a Vintage mod dodaje saturaciju samo kad je to kreativna odluka, ne slučajnost. Signal zatim prolazi kroz Apollo x6 čiji pretvarači rade optimalno oko -18 dBFS. Kroz cijeli hibridni signalni lanac - D-Box+, Tegeler Creme, SSL Fusion - svaki uređaj prima signal na svojoj optimalnoj radnoj razini, što osigurava da analogna oprema radi u sweet spotu i daje svoj najbolji zvuk.',
    faq: [
      {
        q: 'Na kojoj razini trebam snimati u DAW-u?',
        a: 'Ciljajte na vršne vrijednosti (peaks) između -18 i -12 dBFS. To ostavlja dovoljno headrooma za neočekivane vrhove i osigurava da pluginovi rade u optimalnom rasponu. Ne pokušavajte puniti metre do vrha - to je posao mastering-a.',
      },
      {
        q: 'Što ako je signal preslabo snimljen?',
        a: 'Na 24 bita, signal snimljen na -30 dBFS i dalje ima više nego dovoljno dinamičkog raspona za kvalitetan zvuk. Jednostavno pojačajte gain u DAW-u. Problem nastaje tek kad je signal toliko slab da je blizu noise floora preampa ili pretvarača.',
      },
      {
        q: 'Trebam li gain staging i u digitalnom okruženju?',
        a: 'Da. Iako 32-bit float obrada u DAW-u ne može clipati, pluginovi koji modeliraju analognu opremu imaju sweet spot oko -18 dBFS. Ispravan gain staging osigurava da svaki plugin u lancu dobije optimalan ulazni signal i da krajnji mix ima headroom za mastering.',
      },
    ],
    relatedTerms: ['gain', 'signalni-lanac', 'decibel', 'preamp', 'dinamicki-raspon'],
    relatedServices: ['snimanje-benda', 'mixing-pjesme', 'mastering-pjesme'],
    relatedGear: ['volt-876', 'apollo-x6', 'd-box-plus'],
  },
  {
    slug: 'bitrate',
    term: 'Bitrate',
    englishTerm: 'Bitrate / Bit Rate',
    category: 'osnove',
    metaTitle: 'Bitrate - kvaliteta audio datoteka objašnjena',
    metaDescription:
      'Što je bitrate, kako utječe na kvalitetu zvuka i koje bitrate vrijednosti koriste streaming platforme poput Spotifyja.',
    definition:
      'Bitrate je količina audio podataka koja se obrađuje u jedinici vremena, izražena u kilobitima po sekundi (kbps). Viši bitrate znači više podataka i potencijalno bolju kvalitetu zvuka, ali i veće datoteke. CD audio ima bitrate od 1.411 kbps, dok MP3 obično koristi 128-320 kbps.',
    explanation:
      'Bitrate najlakše možete zamisliti kao širinu cijevi kroz koju prolazi zvuk. Šira cijev (viši bitrate) propušta više detalja, uža cijev (niži bitrate) gubi neke informacije. Kod nekomprimiranog audio formata poput WAV-a, bitrate se izračunava iz sample ratea, bit deptha i broja kanala: 44.100 x 16 x 2 = 1.411.200 bps, odnosno 1.411 kbps za stereo CD.\n\nKod komprimiranih formata poput MP3 ili AAC, bitrate je ključan pokazatelj kvalitete. Na 128 kbps, MP3 zvuči prihvatljivo za pozadinsko slušanje, ali pažljivo uho čuje artefakte, posebno na činelama, visokim vokalnim harmonicima i prostornosti. Na 256-320 kbps, razlika između MP3 i originala postaje teško čujna za većinu slušatelja.\n\nStreaming platforme koriste različite bitrateove ovisno o pretplati i kvaliteti veze. Spotify Free koristi 128 kbps (Ogg Vorbis), Premium nudi do 320 kbps, a nedavno i lossless opcije. Apple Music streamira u AAC 256 kbps ili Apple Lossless. YouTube tipično koristi 128-192 kbps (AAC/Opus).\n\nZa glazbenike je bitno razumjeti da se kvaliteta gubi samo jednom - pri kodiranju iz nekomprimiranog formata. Zato uvijek čuvajte originalne WAV ili FLAC datoteke, a MP3 ili AAC verzije generirajte iz njih po potrebi. Nikad ne konvertirajte jedan komprimirani format u drugi jer svaka kompresija dodatno gubi podatke.',
    studioContext:
      'U M Street Music studiju svi projekti se rade i isporučuju u nekomprimiranim formatima (WAV, 24-bit / 48 kHz) koji imaju bitrate od 2.304 kbps po kanalu. Iz tih masterova generiramo verzije za različite distribucijske kanale - streaming platforme, YouTube, CD. Apollo x6 s ESS Sabre pretvaračima osigurava da originalna snimka bude maksimalne kvalitete, tako da kasnija kompresija za streaming gubi minimum detalja.',
    faq: [
      {
        q: 'Koji bitrate koristi Spotify?',
        a: 'Spotify Free koristi oko 128 kbps u Ogg Vorbis formatu. Spotify Premium nudi do 320 kbps, što je blizu transparentne kvalitete za većinu slušatelja. Spotify HiFi nudi lossless kvalitetu (CD ekvivalent, 1.411 kbps).',
      },
      {
        q: 'Je li 320 kbps MP3 dovoljno dobar za distribuciju glazbe?',
        a: 'Za krajnje slušatelje, da. Većina ljudi ne čuje razliku između 320 kbps MP3 i nekomprimiranog WAV-a. Ali za distribuciju na streaming platforme, uvijek predajte WAV ili FLAC jer platforme same rade konverziju u svoj format i bitrate.',
      },
      {
        q: 'Može li viši bitrate popraviti lošu snimku?',
        a: 'Ne. Bitrate utječe samo na koliko vjerno digitalna datoteka čuva zvuk. Ako je snimka loša na izvoru, viši bitrate samo vjerno čuva lošu snimku. Kvaliteta počinje od mikrofona, prostora i izvedbe.',
      },
    ],
    relatedTerms: ['mp3-format', 'flac-format', 'wav-format', 'sample-rate', 'bit-depth'],
    relatedServices: ['mastering-za-streaming', 'online-mastering'],
    relatedGear: ['apollo-x6'],
  },
  {
    slug: 'mp3-format',
    term: 'MP3 format',
    englishTerm: 'MP3 / MPEG-1 Audio Layer III',
    category: 'osnove',
    metaTitle: 'MP3 format - kako radi i kad ga koristiti',
    metaDescription:
      'Što je MP3, kako radi kompresija zvuka i kad koristiti MP3 u glazbenoj produkciji. Prednosti, nedostaci i alternative.',
    definition:
      'MP3 (MPEG-1 Audio Layer III) je format za kompresiju zvuka s gubitkom (lossy) koji smanjuje veličinu audio datoteke za 75-95% u odnosu na nekomprimirani original. Razvijen je u Fraunhofer institutu u Njemačkoj i koristi psihoakustičke principe za uklanjanje dijelova zvuka koje ljudsko uho teško zamjećuje.',
    explanation:
      'MP3 kompresija radi na principu psihoakustičkog modeliranja. Ljudsko uho ne čuje sve zvukove jednako - tiši zvukovi u blizini glasnijih su maskirani i ne čujemo ih. MP3 enkoder analizira zvuk, identificira te maskirane komponente i uklanja ih, drastično smanjujući količinu podataka bez velikog perceptualnog gubitka kvalitete.\n\nKvaliteta MP3 datoteke ovisi o bitrateu. Na 128 kbps, datoteka je otprilike 10 puta manja od CD originala, ali pažljivo uho može primijetiti artefakte - metalni prizvuk na činelama, gubitak prostornosti i detalja u visokim frekvencijama. Na 192 kbps većina artefakata nestaje za casual slušanje. Na 320 kbps, razlika od originala je minimalna i većina slušatelja je ne čuje.\n\nMP3 može koristiti konstantan bitrate (CBR) ili varijabilan bitrate (VBR). CBR koristi isti bitrate cijelo vrijeme, što je predvidljivo ali ne uvijek efikasno. VBR prilagođava bitrate složenosti glazbe - tihe, jednostavne dionice dobivaju manje bitova, a složeni dijelovi više. VBR općenito daje bolju kvalitetu pri istoj prosječnoj veličini datoteke.\n\nUnatoč pojavi novijih i efikasnijih kodeka poput AAC, Opus i Ogg Vorbis, MP3 ostaje najkompatibilniji audio format na svijetu. Svaki uređaj, svaki softver i svaka platforma ga podržava. Za glazbenike, MP3 je koristan za demo verzije, dijeljenje skica i situacije gdje veličina datoteke mora biti mala.',
    studioContext:
      'U M Street Music studiju MP3 nikad ne koristimo kao radni format - sav interni rad je u WAV-u na 24-bit / 48 kHz. MP3 verzije generiramo tek na kraju procesa kao dodatne isporuke za specifične potrebe: preview datoteke za klijente, demo verzije za dijeljenje, ili verzije za web reprodukciju. Mastering se uvijek radi iz nekomprimiranih izvora, a MP3 se kreira iz gotovog mastera.',
    faq: [
      {
        q: 'Može li se MP3 pretvoriti natrag u WAV bez gubitka kvalitete?',
        a: 'Pretvorba MP3 u WAV samo stavlja komprimirani zvuk u nekomprimirani omot. Informacije koje je MP3 kompresija izbacila su trajno izgubljene. WAV datoteka nastala iz MP3 zvuči identično kao MP3, samo zauzima više prostora.',
      },
      {
        q: 'Je li MP3 dovoljno dobar za slanje pjesme na streaming platforme?',
        a: 'Ne. Streaming platforme (Spotify, Apple Music, Tidal) zahtijevaju nekomprimirani WAV ili lossless FLAC za upload. Platforme same rade konverziju u svoje formate. Ako uploadate MP3, platforma ga rekomprimira i kvaliteta dodatno pada.',
      },
      {
        q: 'Zašto moja pjesma na YouTubeu zvuči lošije nego u studiju?',
        a: 'YouTube komprimira audio u AAC ili Opus format na 128-192 kbps. To je značajan gubitak u odnosu na studijsku kvalitetu. Zato je bitno predati master u punoj kvaliteti - YouTube će ga sam komprimirati, a što je bolji izvor, to je bolji krajnji rezultat.',
      },
    ],
    relatedTerms: ['bitrate', 'wav-format', 'flac-format', 'sample-rate'],
    relatedServices: ['mastering-za-streaming', 'online-mastering'],
  },
  {
    slug: 'flac-format',
    term: 'FLAC format',
    englishTerm: 'FLAC / Free Lossless Audio Codec',
    category: 'osnove',
    metaTitle: 'FLAC format - lossless audio bez gubitka',
    metaDescription:
      'Što je FLAC, kako radi lossless kompresija i zašto je FLAC idealan za arhiviranje i distribuciju glazbe bez gubitka kvalitete.',
    definition:
      'FLAC (Free Lossless Audio Codec) je format za kompresiju audio datoteka bez gubitka kvalitete. Za razliku od MP3 koji trajno uklanja dio zvučnih informacija, FLAC smanjuje veličinu datoteke za 40-60% uz potpuno identičnu reprodukciju originala nakon dekompresije.',
    explanation:
      'Zamislite da pakirate zimsku jaknu u vakuumsku vrećicu - jakna zauzima manje prostora, ali kad je raspakujete, identična je originalu. FLAC radi upravo to sa zvukom. Za razliku od MP3 kompresije koja trajno izbacuje podatke (lossy), FLAC koristi algoritme koji reduciraju veličinu ali čuvaju svaki bit originala (lossless).\n\nTehnički, FLAC kompresija radi u nekoliko koraka. Prvo razbija audio na blokove, zatim za svaki blok pronalazi matematičku aproksimaciju signala (linearnom predikcijom), a na kraju zapisuje samo razliku između aproksimacije i stvarnog signala. Ta razlika (rezidual) je puno manja od originalnog signala i efikasno se kodira Rice kodiranjem.\n\nFLAC podržava rezolucije do 32 bita i sample rate do 655.350 Hz, što pokriva sve profesionalne potrebe. Datoteke su obično 50-70% veličine ekvivalentnog WAV-a. FLAC je open source i royalty-free, što znači da ga bilo tko može koristiti bez plaćanja licenci, za razliku od nekih drugih formata.\n\nZa glazbenike i producente, FLAC je idealan format za arhiviranje. WAV datoteke zauzimaju puno prostora, a FLAC čuva identičnu kvalitetu uz značajnu uštedu. Također, streaming platforme poput Tidala i Amazon Music HD koriste FLAC za high-resolution streaming. Apple koristi vlastiti ALAC (Apple Lossless) koji radi na istom principu.',
    studioContext:
      'U M Street Music studiju FLAC koristimo za dvije ključne namjene: arhiviranje završenih projekata i isporuku klijentima koji žele lossless kvalitetu. Sav rad u studiju je u WAV formatu (24-bit / 48 kHz), ali za dugoročno skladištenje FLAC štedi 40-60% prostora bez ikakvog gubitka. Kad klijent treba fajlove za vlastitu arhivu ili za platforme koje podržavaju lossless, FLAC je logičan izbor jer je manji od WAV-a, a kvaliteta je identična.',
    faq: [
      {
        q: 'Je li FLAC bolji od WAV-a?',
        a: 'Zvučno su identični jer je FLAC lossless. Razlika je praktična: FLAC je manji (40-60% WAV-a), podržava metapodatke (naslov, izvođač, album art) i ima provjeru integriteta. WAV je univerzalniji i ne zahtijeva dekodiranje. Za studijski rad koristimo WAV, za arhivu i distribuciju FLAC.',
      },
      {
        q: 'Može li Spotify reproducirati FLAC?',
        a: 'Spotify ne podržava FLAC upload, ali prihvaća WAV i konvertira sam. Za streaming, Spotify koristi Ogg Vorbis ili AAC formate. Tidal i Amazon Music nude FLAC streaming za pretplatnike koji žele lossless kvalitetu.',
      },
      {
        q: 'Trebam li kao glazbenik uopće brinuti o FLAC-u?',
        a: 'Da, barem za arhiviranje. Uvijek čuvajte WAV ili FLAC verzije svojih snimaka i masterova. MP3 verzije su za dijeljenje i svakodnevno slušanje, ali originalni lossless fajlovi su vaša trajna arhiva iz koje uvijek možete generirati bilo koji format.',
      },
    ],
    relatedTerms: ['wav-format', 'mp3-format', 'bitrate', 'bit-depth', 'sample-rate'],
    relatedServices: ['mastering-pjesme', 'mastering-za-streaming', 'online-mastering'],
  },
  {
    slug: 'midi',
    term: 'MIDI',
    englishTerm: 'Musical Instrument Digital Interface',
    category: 'osnove',
    metaTitle: 'MIDI - digitalni jezik glazbenih instrumenata',
    metaDescription:
      'Što je MIDI, kako radi i zašto je bitan za glazbenu produkciju. Razlika između MIDI podataka i audio signala.',
    definition:
      'MIDI (Musical Instrument Digital Interface) je komunikacijski protokol koji omogućava elektronskim glazbenim instrumentima, računalima i audio opremi da razmjenjuju informacije o notama, kontrolama i vremenskim podatcima. MIDI ne prenosi zvuk, nego upute o tome što svirati, koliko glasno i koliko dugo.',
    explanation:
      'Najlakši način za razumjeti MIDI je zamisliti ga kao digitalni ekvivalent notnog zapisa. Partitura na papiru ne proizvodi zvuk - ona govori glazbeniku što da svira. MIDI poruka radi isto: kaže instrumentu (ili softveru) koju notu odsvirati, koliko jako (velocity) i koliko dugo je držati.\n\nMIDI poruka za jednu notu sadrži nekoliko ključnih podataka: Note On (koja nota se svira), velocity (koliko jako, od 0 do 127), trajanje note i Note Off (kad prestaje). Uz note, MIDI prenosi i kontrolne poruke - pomak pitch wheel-a, pritisak na modulation wheel, promjenu programa (instrumenta), sustain pedalu i još mnogo toga.\n\nVelika prednost MIDI-ja je u fleksibilnosti. Ako snimite MIDI performans na klavijaturi, možete ga naknadno promijeniti na bezbroj načina: ispraviti krivu notu, promijeniti tempo bez utjecaja na visinu tona, prebaciti cijeli aranžman na drugi instrument, kvantizirati ritam ili potpuno preurediti dijelove pjesme. To s audio snimkom nije moguće.\n\nMIDI standard je nastao 1983. godine i od tada je evoluirao. Originalni MIDI 1.0 koristio je petpinski DIN kabel i prenosio 16 kanala. MIDI 2.0, objavljen 2020., donosi veću rezoluciju (umjesto 128, velocity ima 65.536 stupnjeva), bidirektionalnu komunikaciju i bolju kompatibilnost. Danas se MIDI najčešće prenosi putem USB-a ili bežično, a DIN konektori su sve rjeđi.',
    studioContext:
      'U M Street Music studiju MIDI je neizostavan dio produkcijskog procesa. Koristimo ga za rad s virtualnim instrumentima, programiranje bubnjeva, kreiranje aranžmana i komunikaciju između kontrolera i DAW-a. Apollo x6 s niskom latencijom omogućava sviranje virtualnih instrumenata u realnom vremenu bez zamjetnog kašnjenja. MIDI je posebno koristan pri produkciji glazbe jer omogućava neograničene izmjene aranžmana nakon snimanja, što štedi studijsko vrijeme i daje kreativnu slobodu.',
    faq: [
      {
        q: 'Koja je razlika između MIDI-ja i audio snimke?',
        a: 'Audio snimka je zapis zvučnog vala - ono što čujete. MIDI je zapis uputa - koje note svirati, koliko glasno, koliko dugo. Audio ne možete mijenjati nakon snimanja (ne možete ispraviti krivu notu), dok MIDI možete editirati neograničeno jer je to samo skup instrukcija.',
      },
      {
        q: 'Trebam li MIDI klavijaturu za produkciju glazbe?',
        a: 'Nije obavezna, ali je izuzetno korisna. MIDI note možete upisivati i mišem u DAW-u, ali sviranje na klavijaturi je prirodnije i brže, pogotovo za melodije i akorde. Za početak, i najjednostavnija MIDI klavijatura od 25 tipki je dovoljna.',
      },
      {
        q: 'Može li MIDI zamijeniti prave instrumente?',
        a: 'Kvaliteta virtualnih instrumenata danas je nevjerojatna, ali MIDI i sample libraryji ne mogu potpuno zamijeniti živog glazbenika. Ljudska izvedba ima neponovljive varijacije u dinamici, timingu i izrazu. MIDI je odličan za skiciranje ideja, produkciju i situacije gdje živi glazbenici nisu dostupni.',
      },
    ],
    relatedTerms: ['daw', 'latencija', 'plug-in'],
    relatedServices: ['produkcija-glazbe', 'snimanje-demo-snimke'],
    relatedGear: ['apollo-x6'],
  },
];

// ==========================================
// Helper functions
// ==========================================

export function getPojamBySlug(slug: string): PojmovnikTerm | undefined {
  return pojmovi.find((p) => p.slug === slug);
}

export function getAllPojmovi(): PojmovnikTerm[] {
  return pojmovi;
}

export function getPojmoviByCategory(category: PojmovnikCategory): PojmovnikTerm[] {
  return pojmovi.filter((p) => p.category === category);
}

export function getCategoryLabel(category: PojmovnikCategory): string {
  const labels: Record<PojmovnikCategory, string> = {
    snimanje: 'Snimanje',
    mixing: 'Mixing',
    mastering: 'Mastering',
    oprema: 'Oprema',
    osnove: 'Osnove',
  };
  return labels[category];
}

export function getAlphabeticalLetters(): string[] {
  const letters = new Set(pojmovi.map((p) => p.term.charAt(0).toUpperCase()));
  return Array.from(letters).sort((a, b) => a.localeCompare(b, 'hr'));
}

export function getPojmoviByLetter(letter: string): PojmovnikTerm[] {
  return pojmovi
    .filter((p) => p.term.charAt(0).toUpperCase() === letter.toUpperCase())
    .sort((a, b) => a.term.localeCompare(b.term, 'hr'));
}
