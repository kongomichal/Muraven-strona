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

});
