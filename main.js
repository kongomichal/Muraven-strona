/**
 * MURAVEN - Core Website Interactivity & Functionality Script
 */

document.addEventListener('DOMContentLoaded', () => {

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

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navBackdrop = document.getElementById('nav-backdrop');

  function closeMobileNav() {
    if (!navLinks) return;
    navLinks.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    document.body.classList.remove('menu-open');
    const icon = mobileToggle ? mobileToggle.querySelector('i') : null;
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }

  function openMobileNav() {
    if (!navLinks) return;
    navLinks.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('open');
    document.body.classList.add('menu-open');
    const icon = mobileToggle ? mobileToggle.querySelector('i') : null;
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileNav);
    }

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  /* ==========================================================================
     3. STICKY NAVBAR SHADOW & SCROLL EFFECT
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 40;
    if (siteHeader) siteHeader.classList.toggle('scrolled', isScrolled);
    if (navbar) navbar.classList.toggle('scrolled', isScrolled);
  });

  /* ==========================================================================
     4. PORTFOLIO EXPANDABLE CATEGORY ACCORDIONS
     ========================================================================== */
  const categoryBlocks = document.querySelectorAll('.category-block');

  categoryBlocks.forEach(block => {
    const trigger = block.querySelector('.category-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = block.classList.contains('open');
      const btnText = trigger.querySelector('.btn-text');

      if (isOpen) {
        block.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        if (btnText) btnText.textContent = 'Rozwiń realizacje';
      } else {
        block.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        if (btnText) btnText.textContent = 'Zwiń realizacje';
      }
    });
  });

  // Links in Service Cards that expand the corresponding category
  document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', () => {
      const targetCategory = link.getAttribute('data-filter');
      if (targetCategory) {
        const targetBlock = document.getElementById(`cat-${targetCategory}`);
        if (targetBlock) {
          if (!targetBlock.classList.contains('open')) {
            const trigger = targetBlock.querySelector('.category-trigger');
            if (trigger) trigger.click();
          }
          setTimeout(() => {
            targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    });
  });

  /* ==========================================================================
     5. PROJECT DETAILS MODAL
     ========================================================================== */
  const projectModal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  function openProjectModal(projectId) {
    const data = projectDetailsData[projectId];
    if (!data || !modalContent || !projectModal) return;

    const hasImages = data.images && data.images.length > 0;

    modalContent.innerHTML = `
      <div class="modal-header-info">
        <span class="section-tag">${data.category}</span>
        <h2 class="modal-title">${data.title}</h2>
        <div class="modal-meta-row">
          <span><i class="fa-solid fa-location-dot"></i> ${data.location}</span>
          <span><i class="fa-solid fa-circle-info"></i> ${data.timeline}</span>
        </div>
      </div>

      ${hasImages ? `
        <div class="modal-gallery">
          <div class="modal-main-image-wrap">
            <img src="${data.images[0]}" alt="${data.title}" id="modal-main-img" class="modal-main-img">
          </div>
          ${data.images.length > 1 ? `
            <div class="modal-thumbnails">
              ${data.images.map((img, idx) => `
                <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-full="${img}">
                  <img src="${img}" alt="Miniatura ${idx + 1}">
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      ` : ''}

      <div class="modal-scope-box">
        <h4><i class="fa-solid fa-list-check"></i> Zakres wykonanych prac:</h4>
        <ul class="modal-scope-list">
          ${data.scope.map(item => `<li><i class="fa-solid fa-check"></i> <span>${item}</span></li>`).join('')}
        </ul>
      </div>

      <div class="modal-desc-box">
        <h4>Opis realizacji:</h4>
        <p>${data.description}</p>
      </div>

      <div class="modal-actions-bar">
        <button class="btn btn-secondary modal-btn-close" id="modal-inner-close">Zamknij</button>
        <a href="#contact" class="btn btn-primary modal-btn-contact" id="modal-contact-btn">
          <span>Zapytaj o podobny projekt</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    // Hook thumbnail switching
    if (hasImages && data.images.length > 1) {
      const mainImg = document.getElementById('modal-main-img');
      const thumbBtns = modalContent.querySelectorAll('.modal-thumb-btn');
      thumbBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          thumbBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const targetSrc = btn.getAttribute('data-full');
          if (mainImg && targetSrc) {
            mainImg.src = targetSrc;
          }
        });
      });
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook inner close button
    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) innerClose.addEventListener('click', closeProjectModal);
    const modalContactBtn = document.getElementById('modal-contact-btn');
    if (modalContactBtn) modalContactBtn.addEventListener('click', closeProjectModal);
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Quick view button click
  document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.getAttribute('data-project-id');
      openProjectModal(pId);
    });
  });

  // Enable whole card tapping on mobile & desktop
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't duplicate if clicking directly on a button or link
      if (e.target.closest('.btn-quick-view') || e.target.closest('a')) return;
      const btn = card.querySelector('.btn-quick-view');
      if (btn) {
        const pId = btn.getAttribute('data-project-id');
        if (pId) openProjectModal(pId);
      }
    });
  });

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (modalClose) modalClose.addEventListener('click', closeProjectModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* ==========================================================================
     6. ANIMATED NUMERICAL COUNTERS ON SCROLL
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  function runCounters() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target') || '0', 10);
      const duration = 1800; // ms
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target >= 1000 ? target.toLocaleString('pl-PL') : target;
          clearInterval(timer);
        } else {
          const val = Math.floor(current);
          stat.textContent = val >= 1000 ? val.toLocaleString('pl-PL') : val;
        }
      }, stepTime);
    });
  }

  const servicesSection = document.getElementById('services') || document.getElementById('stats');
  if (servicesSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          runCounters();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(servicesSection);
  }

  /* ==========================================================================
     7. HERO FAST FORM & MAIN CONTACT FORM HANDLERS
     ========================================================================== */
  const heroForm = document.getElementById('hero-quick-form');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('hero-name').value;
      const phone = document.getElementById('hero-phone').value;
      const type = document.getElementById('hero-type').value;

      // Prefill main contact form and scroll down smoothly
      const contactService = document.getElementById('contact-service');
      const contactName = document.getElementById('contact-name');
      const contactPhone = document.getElementById('contact-phone');

      if (contactName) contactName.value = name;
      if (contactPhone) contactPhone.value = phone;
      if (contactService) contactService.value = type;

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Phone input formatting & limitation (max 9 cyfr po +48)
  const phoneInput = document.getElementById('contact-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = phoneInput.value;

      if (val === '' || val === '+' || val === '+4' || val === '+48' || val === '+48 ') {
        if (e.inputType === 'deleteContentBackward') {
          return;
        }
      }

      // Extract only digits
      let digits = val.replace(/\D/g, '');

      // Remove leading 48 if already typed/pasted
      if (digits.startsWith('48')) {
        digits = digits.substring(2);
      }

      // Limit to 9 digits (standard Polish number)
      digits = digits.slice(0, 9);

      if (digits.length === 0) {
        phoneInput.value = '';
        return;
      }

      // Format as +48 XXX XXX XXX
      let formatted = '+48 ' + digits.substring(0, 3);
      if (digits.length > 3) {
        formatted += ' ' + digits.substring(3, 6);
      }
      if (digits.length > 6) {
        formatted += ' ' + digits.substring(6, 9);
      }

      phoneInput.value = formatted;
    });

    phoneInput.addEventListener('focus', () => {
      if (!phoneInput.value) {
        phoneInput.value = '+48 ';
      }
    });

    phoneInput.addEventListener('blur', () => {
      if (phoneInput.value === '+48 ' || phoneInput.value === '+48') {
        phoneInput.value = '';
      }
    });
  }

  const mainForm = document.getElementById('main-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (mainForm) {
    mainForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-btn');
      
      const name = document.getElementById('contact-name')?.value || '';
      const phone = document.getElementById('contact-phone')?.value || '';
      const email = document.getElementById('contact-email')?.value || 'Nie podano';
      const serviceSelect = document.getElementById('contact-service');
      const service = serviceSelect?.options[serviceSelect.selectedIndex]?.text || '';
      const location = document.getElementById('contact-location')?.value || 'Nie podano';
      const message = document.getElementById('contact-message')?.value || '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Wysyłanie zapytania...';
      }

      if (formFeedback) {
        formFeedback.style.display = 'none';
      }

      try {
        const response = await fetch('https://formsubmit.co/ajax/aaa0e5a7ae722abe23710cb478b2b912', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            'Imię i nazwisko / Firma': name,
            'Telefon kontaktowy': phone,
            'Adres e-mail': email,
            'Rodzaj prac': service,
            'Lokalizacja i metraż': location,
            'Opis projektu': message,
            'email': email,
            '_replyto': email,
            '_subject': `Nowe zapytanie ofertowe od: ${name} (Muraven.pl)`,
            '_template': 'table',
            '_captcha': 'false'
          })
        });

        const data = await response.json();

        if (response.ok && data.success !== 'false') {
          if (formFeedback) {
            formFeedback.className = 'form-feedback success';
            formFeedback.style.display = 'block';
            formFeedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Dziękujemy! Twoje zapytanie zostało pomyślnie wysłane. Skontaktujemy się z Tobą w ciągu maksymalnie 24 godzin.';
            mainForm.reset();
          }
        } else if (data.message && data.message.toLowerCase().includes('activation')) {
          if (formFeedback) {
            formFeedback.className = 'form-feedback success';
            formFeedback.style.display = 'block';
            formFeedback.innerHTML = '<i class="fa-solid fa-envelope-circle-check"></i> Wysłano link aktywacyjny na adres kontakt@muraven.pl. Kliknij w odebranym mailu zielony przycisk „Activate Form”.';
          }
        } else {
          throw new Error(data.message || 'Błąd wysyłki');
        }
      } catch (err) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.style.display = 'block';
          formFeedback.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Wystąpił problem z wysłaniem wiadomości. Prosimy o bezpośredni kontakt telefoniczny: <a href="tel:+48572533862" style="color: inherit; text-decoration: underline; font-weight: 700;">+48 572 533 862</a>.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Wyślij zapytanie ofertowe</span> <i class="fa-solid fa-paper-plane"></i>';
        }
      }
    });
  }

});
