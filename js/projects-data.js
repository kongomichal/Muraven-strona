/**
 * MURAVEN - Project data repository (for modals & detailed previews)
 * Klucze odpowiadają atrybutom data-project-id w kartach portfolio.
 */

/* ==========================================================================
   1. PROJECT DATA REPOSITORY (For Modals & Detailed Previews)
   ========================================================================== */
const projectDetailsData = {
  'p-dino': {
    title: 'Dino Polska: Podbudowy pod recyklomaty i automaty',
    category: 'Brukarstwo i Podbudowy',
    location: 'Wielkopolska (markety sieci Dino)',
    timeline: 'Realizacja pod klucz',
    images: [
      'images/portfolio/dino-recyklomat-dzien.jpg',
      'images/portfolio/dino-recyklomat-noc1.jpg',
      'images/portfolio/dino-recyklomat-noc2.jpg',
      'images/portfolio/dino-recyklomat-slonce.jpg',
      'images/portfolio/dino-recyklomat-automat.jpg'
    ],
    scope: [
      'Korytowanie i precyzyjne roboty ziemne',
      'Wielowarstwowa podbudowa z kruszywa łamanego',
      'Montaż krawężników i obrzeży betonowych',
      'Ułożenie nawierzchni z przemysłowej kostki brukowej',
      'Przygotowanie przepustów instalacyjnych i posadowienie automatu'
    ],
    description: 'Wykonanie utwardzonych stanowisk z kostki brukowej pod automaty recyklingowe i paczkowe przy marketach sieci Dino. Prace realizowane sprawnie, również w godzinach wieczornych i nocnych, z zachowaniem ciągłości funkcjonowania sklepów.'
  },
  'p-erste': {
    title: 'Erste Bank: Prace malarsko-wykończeniowe w 15 oddziałach',
    category: 'Wnętrza i Remonty Komercyjne',
    location: '15 placówek bankowych w Wielkopolsce',
    timeline: 'Ponad 1 300 m² odnowionych powierzchni',
    images: [
      'images/portfolio/erste-bank-2.jpg',
      'images/portfolio/erste-bank-1.jpg',
      'images/portfolio/erste-bank-3.jpg',
      'images/portfolio/erste-bank-4.jpg'
    ],
    scope: [
      'Precyzyjne prace malarskie w brandingu korporacyjnym Erste',
      'Szpachlowanie i bezpyłowe wygładzanie ścian do standardu Q4',
      'Montaż ścianek działowych, sufitów kasetonowych i zabudów G-K',
      'Prace realizowane w trybie nocnym i weekendowym dla zachowania ciągłości obsługi banku'
    ],
    description: 'Kompleksowy lifting wizualny placówek bankowych realizowany pod klucz. Prace wymagały najwyższego rygoru czystości, precyzji odcieni farb zgodnych z księgą znaku oraz terminowości w oddawaniu poszczególnych stref banku.'
  },
  'p-deichmann': {
    title: 'Deichmann: Malowanie i prace wykończeniowe salonu',
    category: 'Wnętrza Komercyjne & Malowanie',
    location: 'Salon handlowy Deichmann',
    timeline: 'Prace malarsko-wykończeniowe retail',
    images: [
      'images/portfolio/deichmann-malowanie.jpg'
    ],
    scope: [
      'Przygotowanie powierzchni ścian, naprawa ubytków i szpachlowanie',
      'Precyzyjne malowanie ścian farbami o podwyższonej odporności na szorowanie',
      'Prace wykończeniowe w strefie ekspozycji, wejścia i regałów handlowych',
      'Terminowa realizacja w restrykcyjnym reżimie czasowym obiektu handlowego'
    ],
    description: 'Prace malarsko-wykończeniowe w lokalu handlowym sieci Deichmann. Zapewniono idealne krycie, perfekcyjne odcięcia oraz wysoką trwałość powłok ściennych w strefie o dużym natężeniu ruchu klientów.'
  },
  'p-tefra': {
    title: 'Tefra Koncept: Dom bliźniaczy z elewacją klinkierową',
    category: 'Elewacje i Klinkier',
    location: 'Inwestycja mieszkaniowa Tefra Koncept',
    timeline: 'Kompleksowa realizacja fasady',
    images: [
      'images/portfolio/tefra-budynek1-1.jpg',
      'images/portfolio/tefra-budynek1-2.jpg',
      'images/portfolio/tefra-budynek1-3.jpg'
    ],
    scope: [
      'Przygotowanie i gruntowanie podłoża ociepleniowego',
      'Klejenie płytek elewacyjnych zaprawami elastycznymi',
      'Montaż płytek kątowych na narożnikach i glifach okiennych',
      'Precyzyjne fugowanie spoin'
    ],
    description: 'Montaż płytki elewacyjnej na budynku mieszkalnym. Połączenie klinkieru z grafitowym tynkiem i stolarką stworzyło nowoczesny, elegancki design fasady.'
  },
  'p-tefra-2': {
    title: 'Tefra Koncept: Fasada klinkierowa i murki wejściowe',
    category: 'Elewacje i Klinkier',
    location: 'Inwestycja mieszkaniowa Tefra Koncept',
    timeline: 'Elewacja i mała architektura',
    images: [
      'images/portfolio/tefra-blizniak-1.jpg'
    ],
    scope: [
      'Montaż płytek elewacyjnych na ścianach szczytowych',
      'Wykończenie narożników płytkami kątowymi',
      'Murowanie murków wejściowych z cegły klinkierowej',
      'Precyzyjne fugowanie i hydrofobizacja'
    ],
    description: 'Kompleksowe wykonanie fasady z płytek klinkierowych na budynku mieszkalnym wraz z wymurowaniem reprezentacyjnych murków ogrodzeniowych przed wejściami.'
  },
  'p-tefra-3': {
    title: 'Tefra Koncept: Dom z garażem i ogrodzeniem',
    category: 'Elewacje i Klinkier',
    location: 'Inwestycja mieszkaniowa Tefra Koncept',
    timeline: 'Elewacja i ogrodzenie frontowe',
    images: [
      'images/portfolio/tefra-dom-ogrodzenie-1.jpg'
    ],
    scope: [
      'Montaż płytek elewacyjnych na ścianach garażu i parteru',
      'Wykończenie narożników płytkami kątowymi',
      'Murowanie słupków i podmurówki klinkierowej ogrodzenia frontowego',
      'Fugowanie i zabezpieczenie hydrofobowe'
    ],
    description: 'Wykonanie fasady z płytek klinkierowych na domu parterowym z garażem oraz kompleksowe wykonanie muru i słupków ogrodzenia frontowego.'
  },
  'p-tefra-4': {
    title: 'Tefra Koncept: Ściana szczytowa parteru z klinkieru',
    category: 'Elewacje i Klinkier',
    location: 'Inwestycja mieszkaniowa Tefra Koncept',
    timeline: 'Montaż płytek elewacyjnych',
    images: [
      'images/portfolio/tefra-parterowy-1.jpg'
    ],
    scope: [
      'Montaż płytek elewacyjnych na ścianie szczytowej parteru',
      'Spasowanie płytki z grafitową blendą okienną',
      'Wykończenie narożników płytkami kątowymi',
      'Precyzyjne fugowanie spoin lica'
    ],
    description: 'Precyzyjny montaż płytek elewacyjnych na ścianie szczytowej budynku parterowego. Połączenie klinkieru z grafitową stolarką i tynkiem elewacyjnym.'
  },
  'p-klinkier-jasny-dom': {
    title: 'Dom parterowy: Elewacja z jasnej cegły klinkierowej',
    category: 'Elewacje i Klinkier',
    location: 'Budynek jednorodzinny',
    timeline: 'Kompleksowa realizacja',
    images: [
      'images/portfolio/klinkier-dom-jasny-1.jpg',
      'images/portfolio/klinkier-dom-jasny-2.jpg',
      'images/portfolio/klinkier-dom-jasny-3.jpg',
      'images/portfolio/klinkier-dom-jasny-4.jpg'
    ],
    scope: [
      'Montaż płyt termoizolacyjnych',
      'Murowanie elewacji z jasnej cegły klinkierowej',
      'Wykonanie nadproży i glifów okiennych',
      'Precyzyjne spoinowanie lica'
    ],
    description: 'Kompleksowe wykonanie trójwarstwowej elewacji z jasnej cegły klinkierowej na domu parterowym. Zakres prac obejmował montaż termoizolacji, murowanie ścian osłonowych oraz precyzyjne spoinowanie.'
  },
  'p-klinkier-szary': {
    title: 'Nowoczesna willa: Elewacja z jasnoszarego klinkieru',
    category: 'Elewacje i Klinkier',
    location: 'Budynek jednorodzinny',
    timeline: 'Kompleksowa realizacja',
    images: [
      'images/portfolio/klinkier-willa-modern-1.jpg',
      'images/portfolio/klinkier-willa-modern-2.jpg',
      'images/portfolio/klinkier-willa-modern-3.jpg'
    ],
    scope: [
      'Murowanie ścian osłonowych z jasnoszarej cegły klinkierowej',
      'Wykonanie pionowego wiązania cegieł w pasie międzykondygnacyjnym',
      'Precyzyjne obróbki podcięć architektonicznych i narożników',
      'Spoinowanie lica elewacji'
    ],
    description: 'Realizacja nowoczesnej elewacji na modernistycznej willi z płaskim dachem. Projekt wyróżnia się zastosowaniem pionowego wątku cegły w pasie obwodowym oraz precyzyjnym wykończeniem podcięć konstrukcyjnych.'
  },
  'p-klinkier-czerwony-dom': {
    title: 'Dom z poddaszem: Elewacja z tradycyjnej czerwonej cegły',
    category: 'Elewacje i Klinkier',
    location: 'Budynek jednorodzinny',
    timeline: 'Kompleksowa realizacja',
    images: [
      'images/portfolio/klinkier-dom-czerwony-1.jpg',
      'images/portfolio/klinkier-dom-czerwony-2.jpg',
      'images/portfolio/klinkier-dom-czerwony-3.jpg',
      'images/portfolio/klinkier-dom-czerwony-4.jpg'
    ],
    scope: [
      'Murowanie ścian osłonowych z czerwonej cegły klinkierowej',
      'Wykonanie zbrojonych nadproży i glifów okiennych',
      'Wyprowadzenie ścian szczytowych i wykuszy wejściowych',
      'Spoinowanie lica elewacji'
    ],
    description: 'Wykonanie pełnej elewacji ceglanej na budynku z dachem dwuspadowym. Zakres obejmował murowanie ścian zewnętrznych, wyprowadzenie szczytów oraz staranne wykończenie otworów okiennych i drzwiowych.'
  },
  'p-ogrodzenie-klinkier': {
    title: 'Mur z cegły klinkierowej: Ogrodzenie osiedla domów',
    category: 'Płoty i Ogrodzenia',
    location: 'Osiedle mieszkaniowe',
    timeline: 'Kompleksowa realizacja',
    images: [
      'images/portfolio/ogrodzenie-klinkier-1.jpg',
      'images/portfolio/ogrodzenie-klinkier-2.jpg'
    ],
    scope: [
      'Przygotowanie podbudowy i korekta linii ogrodzenia',
      'Precyzyjne murowanie muru z cegły klinkierowej',
      'Zwieńczenie i zabezpieczenie korony muru',
      'Spoinowanie lica i impregnacja hydrofobowa'
    ],
    description: 'Kompleksowe wykonanie wolnostojącego ogrodzenia z cegły klinkierowej na osiedlu mieszkaniowym. Zakres prac obejmował korektę i przygotowanie podłoża, murowanie lica oraz precyzyjne spoinowanie.'
  },
  'p-ogrodzenie-malowanie': {
    title: 'Renowacja i malowanie muru ogrodzeniowego z przęsłami',
    category: 'Płoty i Ogrodzenia',
    location: 'Posesja prywatna / Rezydencja',
    timeline: 'Kompleksowa renowacja ogrodzenia',
    images: [
      'images/portfolio/ogrodzenie-malowanie.jpg'
    ],
    scope: [
      'Oczyszczenie powierzchni słupków i podmurówki, usunięcie spękań i starej powłoki',
      'Naprawa ubytków, szpachlowanie i wyrównanie faktury tynku',
      'Precyzyjne malowanie muru i daszków farbą elewacyjną odporną na czynniki atmosferyczne',
      'Zabezpieczenie i odświeżenie metalowych przęseł kutych'
    ],
    description: 'Kompleksowa renowacja i malowanie reprezentacyjnego ogrodzenia murowanego z metalowymi przęsłami. Odnowiono podmurówkę, słupki oraz daszki nakrywowe, przywracając nienaganną estetykę frontu posesji.'
  },
  'p-klinkier-modern': {
    title: 'Dom modernistyczny: Cegła klinkierowa cieniowana',
    category: 'Elewacje i Klinkier',
    location: 'Budynek jednorodzinny',
    timeline: 'Kompleksowa realizacja',
    images: [
      'images/portfolio/klinkier-dom-cieniowany-gotowy.jpg',
      'images/portfolio/klinkier-dom-cieniowany-etap2.jpg',
      'images/portfolio/klinkier-dom-cieniowany-etap1.jpg',
      'images/portfolio/klinkier-dom-cieniowany-fundamenty.jpg'
    ],
    scope: [
      'Prace fundamentowe i stan zerowy',
      'Montaż płyt termoizolacyjnych',
      'Murowanie elewacji z cieniowanej cegły klinkierowej',
      'Wykonanie pionowego pasa ozdobnego i spoinowanie'
    ],
    description: 'Kompleksowa realizacja domu modernistycznego z płaskim dachem od etapu fundamentów po elewację klinkierową. Zastosowano cieniowaną cegłę z ozdobnym pionowym pasem międzykondygnacyjnym.'
  },
  'p-biedronka': {
    title: 'Biedronka: Utwardzona podbudowa pod recyklomat',
    category: 'Brukarstwo i Nawierzchnie',
    location: 'Market sieci Biedronka',
    timeline: 'Realizacja pod klucz',
    images: [
      'images/portfolio/biedronka-recyklomat.jpg'
    ],
    scope: [
      'Korytowanie gruntu bezpośrednio przy ścianie marketu',
      'Zagęszczona podbudowa z kruszywa łamanego',
      'Montaż obrzeży betonowych z zachowaniem spadków odwadniających od elewacji',
      'Ułożenie nawierzchni z przemysłowej kostki brukowej',
      'Przygotowanie podłoża pod automat recyklingowy'
    ],
    description: 'Wykonanie utwardzonego stanowiska z kostki brukowej pod automat recyklingowy przy ścianie marketu Biedronka. Prace przeprowadzone sprawnie, z zachowaniem spadków zabezpieczających elewację przed wodą opadową.'
  },
  'p-gaz-system': {
    title: 'Gaz-System S.A.: Ciągi piesze i chodniki techniczne',
    category: 'Inwestycje Strategiczne & Brukarstwo',
    location: 'Obiekt techniczny Gaz-System S.A.',
    timeline: 'Chodniki i ciągi komunikacyjne',
    images: [
      'images/portfolio/gaz-system-kontener-gotowy.jpg',
      'images/portfolio/gaz-system-kontener-przed.jpg'
    ],
    scope: [
      'Demontaż zużytej nawierzchni i korytowanie terenu',
      'Wyrównanie i zagęszczenie nowej podbudowy',
      'Układanie trwałego dojścia technicznego z kostki przemysłowej Behaton',
      'Montaż obrzeży betonowych z zachowaniem spadków',
      'Prace wykonane zgodnie z wymogami bezpieczeństwa obiektu strategicznego'
    ],
    description: 'Modernizacja dojścia technicznego na terenie obiektu Gaz-System S.A. Wykonano nową podbudowę oraz trwałe dojście z przemysłowej kostki brukowej Behaton przy kontenerze aparatury.'
  },
  'p-remont-klucz': {
    title: 'Generalny remont mieszkania „pod klucz”',
    category: 'Wnętrza i Remonty',
    location: 'Lokal mieszkalny',
    timeline: 'Generalna metamorfoza lokalu',
    images: [
      'images/portfolio/remont-mieszkania-1.jpg',
      'images/portfolio/remont-mieszkania-2.jpg',
      'images/portfolio/remont-mieszkania-3.jpg'
    ],
    scope: [
      'Kompletna adaptacja instalacji wod-kan i elektrycznych',
      'Gładzie gipsowe, ścianki G-K i malowanie ścian oraz sufitów',
      'Kompleksowe wykończenie łazienki (kabina prysznicowa z czarnymi profilami, armatura, lustro)',
      'Precyzyjny montaż hiszpańskich płytek podłogowych w stylu patchwork',
      'Zabudowa meblowa i montaż wyposażenia kuchennego'
    ],
    description: 'Kompleksowy remont mieszkania od podstaw do stanu gotowego do zamieszkania. Wykonano instalacje, gładzie, malowanie ze strefowym akcentem kolorystycznym, designerską łazienkę oraz stylową kuchnię z dekoracyjną posadzką patchworkową.'
  },
  'p-tapety': {
    title: 'Tapety wielkoformatowe i specjalistyczne malowanie pod preferencje klienta',
    category: 'Wnętrza i Remonty',
    location: 'Wnętrza prywatne',
    timeline: 'Prace wykończeniowe i dekoratorskie',
    images: [
      'images/portfolio/tapety-dekoracyjne-1.jpg',
      'images/portfolio/tapety-dekoracyjne-2.jpg',
      'images/portfolio/tapety-dekoracyjne-3.jpg'
    ],
    scope: [
      'Bezspoinowy montaż tapet wielkoformatowych na trudnych płaszczyznach i skosach poddasza',
      'Precyzyjna geometria malarska i akcenty ścienne (nowoczesne łuki, formy organiczne)',
      'Specjalistyczne malowanie dekoracyjne pod indywidualne preferencje klienta',
      'Szpachlowanie, bezpyłowe szlifowanie i przygotowanie podłoża pod wymagające okładziny'
    ],
    description: 'Artystyczne i precyzyjne wykończenie wnętrz z naciskiem na nowoczesny design. Wykonano montaż tapet wielkoformatowych na skosach poddasza oraz autorskie malowanie geometryczne i dekoracyjne dopasowane do wizji inwestora.'
  },
  'p-cegla-wnetrze': {
    title: 'Dekoracyjna ściana z cegły w salonie',
    category: 'Wnętrza i Cegła Dekoracyjna',
    location: 'Apartament prywatny',
    timeline: 'Aranżacja ściany akcentowej',
    images: [
      'images/portfolio/cegla-dekoracyjna-salon-1.jpg',
      'images/portfolio/cegla-dekoracyjna-salon-2.jpg'
    ],
    scope: [
      'Gruntowanie i przygotowanie podłoża pod okładzinę z lica ceglanego',
      'Precyzyjne układanie płytek ceglanych z zachowaniem równego wiązania murarskiego',
      'Ręczne fugowanie w technologii grubej spoiny w kontrastowym kolorze',
      'Impregnacja zabezpieczająca cegłę przed osiadaniem kurzu i wilgocią'
    ],
    description: 'Wykonanie efektownej ściany akcentowej z płytek ceglanych w nowoczesnym salonie. Połączenie naturalnej faktury cegły, ciemnej spoiny i ciepłego drewna podłogi nadało wnętrzu unikalny, loftowy klimat.'
  },
  'p-podjazd-wiata': {
    title: 'Prywatny podjazd i schody wejściowe z kostki grafitowej',
    category: 'Brukarstwo i Nawierzchnie',
    location: 'Posesja prywatna – dom jednorodzinny',
    timeline: 'Kompleksowa metamorfoza terenu',
    images: [
      'images/portfolio/podjazd-grafit-dom-gotowy.jpg',
      'images/portfolio/podjazd-grafit-schody.jpg',
      'images/portfolio/podjazd-grafit-przed.jpg'
    ],
    scope: [
      'Korytowanie nieutwardzonego terenu i profilowanie spadków',
      'Wielowarstwowa, zagęszczona mechanicznie podbudowa pod ruch kołowy',
      'Montaż obrzeży betonowych stabilizujących nawierzchnię',
      'Ułożenie nawierzchni z grafitowej kostki brukowej',
      'Wykonanie dwustopniowych schodów wejściowych i spocznika przy wejściu'
    ],
    description: 'Kompleksowe utwardzenie frontu posesji przed nowoczesnym domem piętrowym. W ramach prac zniwelowano nierówności nieutwardzonego gruntu, wykonano podbudowę pod regularny ruch kołowy oraz ułożono grafitową kostkę brukową z reprezentacyjnym wykończeniem schodów wejściowych.'
  },
  'p-posesja-taras': {
    title: 'Nawierzchnia posesji: Podjazd i wiata garażowa',
    category: 'Brukarstwo i Nawierzchnie',
    location: 'Posesja prywatna',
    timeline: 'Kompleksowe utwardzenie nawierzchni',
    images: [
      'images/portfolio/podjazd-wiata-parking.jpg'
    ],
    scope: [
      'Korytowanie i profilowanie spadków pod zadaszeniem i podjazdem',
      'Zagęszczona podbudowa z kruszywa pod regularne obciążenia kołowe',
      'Układanie melanżowej kostki brukowej pod wiatą garażową i bramą wjazdową',
      'Montaż obrzeży betonowych zintegrowanych ze strefą ogrodzenia i zieleni'
    ],
    description: 'Kompleksowe utwardzenie wjazdu na posesję oraz strefy parkowania pod drewnianą wiatą garażową. Wykonano stabilną podbudowę pod ruch kołowy, precyzyjne spadki odwadniające oraz estetyczną nawierzchnię z melanżowej kostki brukowej.'
  },
  'p-graffiti': {
    title: 'Usuwanie graffiti i renowacja elewacji kamienicy',
    category: 'Elewacje i Renowacje Fasad',
    location: 'Poznań, ul. Głogowska',
    timeline: 'Renowacja fasady po zniszczeniach',
    images: [
      'images/portfolio/graffiti-glogowska-po.jpg',
      'images/portfolio/graffiti-glogowska-przed.jpg',
      'images/portfolio/graffiti-glogowska-detal.jpg'
    ],
    scope: [
      'Skuteczne zmywanie chemiczne i hydrodynamiczne powłok sprayowych',
      'Uzupełnienie uszkodzonej struktury tynku mineralnego',
      'Precyzyjne odtworzenie powłoki malarskiej w oryginalnym odcieniu fasady',
      'Aplikacja niewidocznej powłoki antygraffiti'
    ],
    description: 'Kompleksowa interwencja w centrum Poznania przy ul. Głogowskiej. Zlikwidowano rozległe graffiti bez uszczerbku dla faktury tynku kamienicy, przywracając reprezentacyjny wygląd frontu lokali użytkowych.'
  },
  'p-mycie-balustrady': {
    title: 'Renowacja elewacji, tarasu i balustrad rezydencji',
    category: 'Elewacje i Renowacje Fasad',
    location: 'Rezydencja prywatna',
    timeline: 'Prace na wysokości i renowacja zewnętrzna',
    images: [
      'images/portfolio/balustrady-elewacja-gotowy.jpg',
      'images/portfolio/balustrady-elewacja-etap.jpg'
    ],
    scope: [
      'Prace z rusztowania: mycie ciśnieniowe fasady i przygotowanie podłoża',
      'Malowanie elewacji willi paroprzepuszczalną powłoką hydrofobową',
      'Antykorozyjne zabezpieczenie i malowanie stalowych balustrad tarasowych',
      'Kompleksowe wykończenie tarasu i schodów zewnętrznych'
    ],
    description: 'Kompleksowy lifting zewnętrzny klasycznej willi. Przeprowadzono renowację elewacji z rusztowania, hydrofobizację ścian, odnowienie i zabezpieczenie balustrad stalowych oraz wykończenie schodów tarasowych.'
  }
};
