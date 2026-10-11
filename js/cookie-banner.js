/**
 * MURAVEN - Cookie & Privacy Consent Banner
 */

document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const btnAccept = document.getElementById('cookie-btn-accept');
  const btnEssential = document.getElementById('cookie-btn-essential');
  const openCookieSettings = document.getElementById('open-cookie-settings');

  const STORAGE_KEY = 'muraven_cookie_consent';

  function showBanner() {
    if (!cookieBanner) return;
    cookieBanner.style.display = 'block';
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 50);
  }

  function hideBanner() {
    if (!cookieBanner) return;
    cookieBanner.classList.remove('show');
    setTimeout(() => {
      cookieBanner.style.display = 'none';
    }, 350);
  }

  function setConsent(type) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        status: type,
        timestamp: new Date().toISOString()
      }));
    } catch (e) {
      // Obsługa specyficznych trybów przeglądarek blokujących localStorage
    }
    hideBanner();
  }

  // Sprawdź, czy użytkownik dokonał już wyboru
  let consent = null;
  try {
    consent = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}

  if (!consent) {
    // Pokaż baner po krótkiej chwili od wejścia na stronę
    setTimeout(showBanner, 900);
  }

  if (btnAccept) {
    btnAccept.addEventListener('click', () => setConsent('all'));
  }

  if (btnEssential) {
    btnEssential.addEventListener('click', () => setConsent('essential'));
  }

  if (openCookieSettings) {
    openCookieSettings.addEventListener('click', (e) => {
      e.preventDefault();
      showBanner();
    });
  }
});
