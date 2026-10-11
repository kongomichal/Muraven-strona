/**
 * MURAVEN - Mobile navigation drawer & sticky header
 */

document.addEventListener('DOMContentLoaded', () => {

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
     4. DYNAMIC SCROLLSPY & ACTIVE NAV LINK INDICATOR
     ========================================================================== */
  const navItems = document.querySelectorAll('.nav-links .nav-item[href^="#"]');
  const sectionEntries = [];
  let isManualNavClick = false;
  let manualClickTimeout = null;

  navItems.forEach(item => {
    const hash = item.getAttribute('href');
    if (hash && hash !== '#' && !item.classList.contains('nav-btn-primary')) {
      const section = document.querySelector(hash);
      if (section) {
        sectionEntries.push({ id: hash, link: item, section: section });
      }
    }
  });

  function setActiveNav(activeId) {
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === activeId && !item.classList.contains('nav-btn-primary')) {
        item.classList.add('active');
      } else if (!item.classList.contains('nav-btn-primary')) {
        item.classList.remove('active');
      }
    });
  }

  function handleScrollSpy() {
    if (isManualNavClick) return;

    const scrollY = window.scrollY;
    const headerOffset = 180; // offset nagłówka
    const currentPos = scrollY + headerOffset;
    const scrollBottom = window.innerHeight + scrollY;
    const docHeight = document.documentElement.scrollHeight;

    // Jeśli jesteśmy na samej górze
    if (scrollY < 120) {
      setActiveNav('#home');
      return;
    }

    // Sprawdzamy kolejne sekcje
    let currentActiveId = '#home';
    for (let i = 0; i < sectionEntries.length; i++) {
      const entry = sectionEntries[i];
      const top = entry.section.offsetTop;
      const height = entry.section.offsetHeight;

      if (currentPos >= top) {
        currentActiveId = entry.id;
      }
    }

    setActiveNav(currentActiveId);
  }

  // Kliknięcie w link w nawigacji
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const href = item.getAttribute('href');
      if (href && !item.classList.contains('nav-btn-primary')) {
        setActiveNav(href);
        isManualNavClick = true;
        clearTimeout(manualClickTimeout);
        manualClickTimeout = setTimeout(() => {
          isManualNavClick = false;
        }, 900);
      }
    });
  });

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
  // Inicjalizacja przy załadowaniu
  handleScrollSpy();
});
