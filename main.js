/**
 * MURAVEN - Core Website Interactivity & Functionality Script
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. PROJECT DATA REPOSITORY (For Modals & Detailed Previews)
     ========================================================================== */
  const projectDetailsData = {
    'p-dino': {
      title: 'Dino Polska: Podbudowy pod recyklomaty w 27 punktach handlowych',
      category: 'B2B & Brukarstwo Przemysłowe',
      location: 'Wielkopolska (27 lokalizacji sieci Dino)',
      timeline: 'Realizacja cykliczna 2026',
      scope: [
        'Kompleksowe roboty ziemne i wykop precyzyjny',
        'Wykonanie wielowarstwowej podbudowy z kruszywa łamanego pod obciążenia',
        'Montaż betonowych obrzeży drogowych',
        'Ułożenie nawierzchni z kostki przemysłowej odpornej na nacisk i warunki atmosferyczne',
        'Przygotowanie przyłączy i posadowienie urządzeń recyklingowych'
      ],
      description: 'Zadanie polegało na szybkiej i bezkolizyjnej realizacji utwardzonych stanowisk pod automaty do zbiórki butelek i puszek przy marketach Dino na terenie całej Wielkopolski. Każdy punkt został wykonany zgodnie z surowymi normami sieci handlowej bez zakłócania ruchu klientów sklepu.'
    },
    'p-erste': {
      title: 'Erste Bank: Prace malarsko-wykończeniowe w 15 oddziałach',
      category: 'Rebranding B2B & Wykończenia Komercyjne',
      location: 'Polska (15 placówek bankowych)',
      timeline: 'Ponad 1 300 m² odnowionych powierzchni',
      scope: [
        'Precyzyjne prace malarskie w brandingu korporacyjnym Erste',
        'Szpachlowanie i bezpyłowe wygładzanie ścian do standardu Q4',
        'Montaż ścianek działowych, sufitów kasetonowych i zabudów G-K',
        'Prace realizowane w trybie nocnym i weekendowym dla zachowania ciągłości obsługi banku'
      ],
      description: 'Kompleksowy lifting wizualny placówek bankowych realizowany pod klucz. Prace wymagały najwyższego rygoru czystości, precyzji odcieni farb zgodnych z księgą znaku oraz terminowości w oddawaniu poszczególnych stref banku.'
    },
    'p-tefra': {
      title: 'Tefra Koncept: Płytka elewacyjna na 6 budynkach mieszkalnych',
      category: 'Elewacje Klinkierowe',
      location: 'Inwestycja deweloperska',
      timeline: 'Łączna powierzchnia > 470 m²',
      scope: [
        'Klejenie płytek elewacyjnych elastycznymi zaprawami mrozoodpornymi',
        'Precyzyjne fugowanie spoin z zachowaniem idealnej geometrii',
        'Wykończenie narożników płytkami kątowymi',
        'Zabezpieczenie hydrofobowe lica płytek przed wilgocią'
      ],
      description: 'Wykonanie nowoczesnych fasad oraz ogrodzeń na kameralnym osiedlu domów. Dzięki zastosowaniu płytek elewacyjnych uzyskano prestiżowy wygląd tradycyjnego muru ceglanego przy jednoczesnej lekkości konstrukcji.'
    },
    'p-klinkier-szary': {
      title: 'Nowoczesna willa: Elewacja z jasnej cegły klinkierowej',
      category: 'Elewacje Klinkierowe & Bryła Nowoczesna',
      location: 'Klient indywidualny',
      timeline: 'Etap surowy do stanu wykończonego',
      scope: [
        'Murowanie ścian osłonowych z cegły klinkierowej szarej / grafitowej',
        'Trójwymiarowe detale wysunięć cegieł w pasach podokiennych',
        'Kotwienie do konstrukcji nośnej za pomocą atestowanych kotew nierdzewnych',
        'Fugowanie zlicowane z cegłą odporne na powstawanie mostków i wykwitów'
      ],
      description: 'Architektoniczna realizacja dla wymagającego inwestora. Nietypowa, geometryczna bryła z podcieniami wymagała kunsztu murarskiego i perfekcyjnego planowania wiązań cegieł.'
    },
    'p-klinkier-skos': {
      title: 'Rezydencja podmiejska: Tradycyjny klinkier palony',
      category: 'Elewacje Klinkierowe',
      location: 'Wielkopolska',
      timeline: 'Pełna fasada budynku dwukondygnacyjnego',
      scope: [
        'Murowanie z tradycyjnej cegły klinkierowej w wiązaniu kowadełkowym',
        'Nadproża zbrojone w cegle klinkierowej',
        'Obróbka otworów okiennych i drzwiowych',
        'Impregnacja hydrofobowa fasady'
      ],
      description: 'Tradycyjny, elegancki dom z dachem dwuspadowym. Zastosowanie cegły palonej o ciepłej barwie gwarantuje niepowtarzalny charakter oraz odporność na warunki atmosferyczne na dziesięciolecia bez konieczności odnawiania.'
    },
    'p-klinkier-modern': {
      title: 'Dom modernistyczny: Cegła klinkierowa cieniowana',
      category: 'Elewacje Klinkierowe',
      location: 'Inwestycja prywatna',
      timeline: 'Elewacja piętra i parteru',
      scope: [
        'Precyzyjne murowanie z selekcjonowanej cegły klinkierowej cieniowanej',
        'Wiązania dzikie z zachowaniem powtarzalności deseniu',
        'Wykonanie dylatacji pionowych i poziomych',
        'Czyszczenie i zabezpieczenie antywykwitowe'
      ],
      description: 'Nowoczesna willa z płaskim dachem. Kontrast ciepłej, cieniowanej cegły z ciemną stolarką i obróbkami blacharskimi stworzył unikalny styl miejskiej rezydencji.'
    },
    'p-klinkier-parter': {
      title: 'Bungalow parterowy: Elewacja z piaskowej cegły klinkierowej',
      category: 'Elewacje Klinkierowe',
      location: 'Budownictwo jednorodzinne',
      timeline: 'Kompletna elewacja parteru',
      scope: [
        'Mur z cegły piaskowej / beżowej',
        'Cokoły z hydroizolacją przeciwwilgociową',
        'Fugowanie jasną zaprawą klinkierową',
        'Obróbka parapetów z kształtek klinkierowych'
      ],
      description: 'Przestronny dom parterowy wykończony jasną cegłą. Jasny klinkier optycznie powiększa bryłę i doskonale współgra z grafitowym dachem oraz instalacją fotowoltaiczną.'
    },
    'p-biedronka': {
      title: 'Biedronka: Utwardzone podbudowy pod recyklomaty',
      category: 'B2B & Brukarstwo Przemysłowe',
      location: 'Punkty sieci Biedronka',
      timeline: 'Nawierzchnie techniczne',
      scope: [
        'Korytowanie terenu przyległego do elewacji marketu',
        'Podbudowa pod urządzenia wielkogabarytowe',
        'Ułożenie kostki z wypełnieniem spoin piaskiem płukanym',
        'Spadki odwadniające zabezpieczające ścianę budynku'
      ],
      description: 'Kolejna realizacja infrastruktury technicznej dla czołowej sieci dyskontów w Polsce. Szybka realizacja bez uciążliwości dla dostaw i klientów sklepu.'
    },
    'p-bookinghost': {
      title: 'BookingHost: Stała obsługa techniczna apartamentów',
      category: 'Obsługa B2B & Wykończenia Wnętrz',
      location: 'Poznań (ponad 150 zleceń)',
      timeline: 'Ciągła współpraca abonamentowa',
      scope: [
        'Szybkie usuwanie uszkodzeń i awarii między pobytami gości',
        'Układanie podłóg (w tym nowoczesne panele w jodełkę)',
        'Malowanie, naprawy ubytków tynków i gładzi',
        'Biały montaż i wymiana armatury sanitarnej'
      ],
      description: 'Stała opieka techniczna nad luksusowymi apartamentami wynajmowanymi krótkoterminowo. Gwarantujemy ekspresowy czas reakcji oraz wysoki standard wykończenia.'
    },
    'p-gaz-system': {
      title: 'Gaz-System S.A.: Ciągi piesze i chodniki techniczne',
      category: 'Inwestycje Strategiczne & Brukarstwo',
      location: 'Obiekty techniczne Gaz-System',
      timeline: 'Chodniki i place manewrowe',
      scope: [
        'Budowa ciągów komunikacyjnych z kostki betonowej Behaton/Holland',
        'Odwodnienie liniowe i montaż krawężników',
        'Stabilizacja podłoża cementem',
        'Prace w warunkach zaostrzonych rygorów bezpieczeństwa obiektu strategicznego'
      ],
      description: 'Realizacja zamówienia na terenie operatora przesyłowego gazu ziemnego w Polsce. Prace wykonane z zachowaniem wszelkich procedur BHP i rygorów technicznych.'
    },
    'p-remont-klucz': {
      title: 'Generalny remont mieszkania „pod klucz”',
      category: 'Wnętrza i Remonty',
      location: 'Lokal mieszkalny',
      timeline: 'Generalna metamorfoza lokalu',
      scope: [
        'Kompletna adaptacja instalacji wod-kan i elektrycznych',
        'Gładzie gipsowe, ścianki G-K i sufity podwieszane',
        'Kompleksowe wykończenie łazienki (kabina walk-in, armatura podtynkowa)',
        'Montaż podłóg i hiszpańskich płytek patchworkowych'
      ],
      description: 'Modernizacja mieszkania od stanu surowego do wprowadzenia się. Dopracowane detale, funkcjonalna kuchnia, designerska łazienka i ciepłe wnętrza.'
    },
    'p-tapety': {
      title: 'Wykończenie wnętrz: Tapety wielkoformatowe i malowanie',
      category: 'Wnętrza i Remonty',
      location: 'Dom jednorodzinny',
      timeline: 'Prace wykończeniowe i dekoracyjne',
      scope: [
        'Montaż tapet wielkoformatowych z precyzyjnym dopasowaniem brytów',
        'Geometria malarska (nowoczesne łuki i akcenty kolorystyczne)',
        'Szpachlowanie natryskowe i szlifowanie mechaniczne z doświetleniem',
        'Montaż listew przypodłogowych i oświetlenia LED'
      ],
      description: 'Realizacja projektu wnętrzarskiego z naciskiem na sztukę tapetowania i nasyconą kolorystykę ścian. Bezspoinowe połączenia tapet wielkoformatowych.'
    },
    'p-podjazd-wiata': {
      title: 'Podjazd z kostki brukowej pod wiatą garażową',
      category: 'Brukarstwo i Nawierzchnie',
      location: 'Posesja prywatna',
      timeline: 'Podjazd, wiata i dojścia do domu',
      scope: [
        'Głębokie korytowanie i podbudowa z kruszyw łamanych',
        'Nawierzchnia z melanżowej kostki płukanej',
        'Dopasowanie do słupów wiaty i ogrodzenia',
        'Precyzyjny spadek odprowadzający wodę opadową z posesji'
      ],
      description: 'Solidny, estetyczny podjazd zaprojektowany na codzienne manewrowanie samochodami. Połączenie szarości i grafitu z drewnianą konstrukcją wiaty.'
    },
    'p-posesja-taras': {
      title: 'Aranżacja nawierzchni posesji: Taras, opaski i parking',
      category: 'Brukarstwo i Nawierzchnie',
      location: 'Nowo wybudowany dom bliźniaczy',
      timeline: 'Kompleksowe zagospodarowanie terenu',
      scope: [
        'Opaski odwadniające wokół fundamentów ze spadkiem',
        'Taras ziemny z kostki o dużej powierzchni',
        'Schody wejściowe z bloków betonowych i kostki',
        'Przestronny frontowy podjazd parkingowy'
      ],
      description: 'Pełne utwardzenie otoczenia budynku po zakończeniu budowy. Zapewniono skuteczne odprowadzenie wody deszczowej oraz spójną stylistykę wokół całej działki.'
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
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     4. PORTFOLIO FILTERING & LIVE SEARCH
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('portfolio-search');
  const searchClear = document.getElementById('search-clear');
  let currentFilter = 'all';

  function applyFilters() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (searchClear) {
      searchClear.style.display = query.length > 0 ? 'block' : 'none';
    }

    projectCards.forEach(card => {
      const categories = card.getAttribute('data-category') || '';
      const keywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText.toLowerCase();
      
      const matchesCategory = (currentFilter === 'all') || categories.includes(currentFilter);
      const matchesSearch = query === '' || keywords.toLowerCase().includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      applyFilters();
      searchInput.focus();
    });
  }

  // Links in Service Cards that trigger portfolio filtering
  document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetFilter = link.getAttribute('data-filter');
      if (targetFilter) {
        const correspondingBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
        if (correspondingBtn) {
          correspondingBtn.click();
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

    modalContent.innerHTML = `
      <div class="modal-header-info">
        <span class="section-tag">${data.category}</span>
        <h2 class="modal-title">${data.title}</h2>
        <div class="modal-meta-row">
          <span><i class="fa-solid fa-location-dot"></i> ${data.location}</span>
          <span><i class="fa-solid fa-circle-info"></i> ${data.timeline}</span>
        </div>
      </div>

      <div class="modal-scope-box">
        <h4><i class="fa-solid fa-list-check"></i> Zakres wykonanych prac:</h4>
        <ul class="modal-scope-list">
          ${data.scope.map(item => `<li><i class="fa-solid fa-check"></i> <span>${item}</span></li>`).join('')}
        </ul>
      </div>

      <div class="modal-desc-box">
        <h4>Opis inżynieryjny realizacji:</h4>
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
          stat.textContent = target;
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  }

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          runCounters();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
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

  const mainForm = document.getElementById('main-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Wysyłanie...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Wyślij zapytanie ofertowe</span> <i class="fa-solid fa-paper-plane"></i>';
        }

        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Dziękujemy! Twoje zapytanie zostało zarejestrowane. Skontaktujemy się z Tobą w ciągu maksymalnie 24 godzin.';
          mainForm.reset();
        }
      }, 700);
    });
  }

});
