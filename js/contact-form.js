/**
 * MURAVEN - Contact form handlers (FormSubmit)
 */

document.addEventListener('DOMContentLoaded', () => {

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

  // Service select value color handler (placeholder styling)
  const serviceSelect = document.getElementById('contact-service');
  if (serviceSelect) {
    const updateServiceSelectColor = () => {
      if (serviceSelect.value) {
        serviceSelect.classList.add('has-value');
      } else {
        serviceSelect.classList.remove('has-value');
      }
    };
    serviceSelect.addEventListener('change', updateServiceSelectColor);
    updateServiceSelectColor();
  }

  /* ==========================================================================
     SCHEDULE TILES INTERACTION (KONCEPCJA 1)
     ========================================================================== */
  const termTiles = document.querySelectorAll('.term-tile');
  const termMonthsWrapper = document.getElementById('term-months-wrapper');
  const monthPills = document.querySelectorAll('.month-pill');
  const hiddenTermInput = document.getElementById('contact-term');

  function updateTermValue(val) {
    if (hiddenTermInput) {
      hiddenTermInput.value = val;
    }
  }

  termTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      termTiles.forEach(t => t.classList.remove('active'));
      tile.classList.add('active');

      const isMonthsToggle = tile.getAttribute('data-toggle-months') === 'true';
      const termVal = tile.getAttribute('data-term');

      if (isMonthsToggle) {
        if (termMonthsWrapper) termMonthsWrapper.style.display = 'block';
        const activeMonth = document.querySelector('.month-pill.active')?.getAttribute('data-month') || 'Maj 2026';
        updateTermValue('Wskazany miesiąc: ' + activeMonth);
      } else {
        if (termMonthsWrapper) termMonthsWrapper.style.display = 'none';
        updateTermValue(termVal);
      }
    });
  });

  monthPills.forEach(pill => {
    pill.addEventListener('click', () => {
      monthPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const mVal = pill.getAttribute('data-month');
      updateTermValue('Wskazany miesiąc: ' + mVal);
    });
  });

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
      const preferredTerm = hiddenTermInput?.value || 'Pilne / Od zaraz (1-2 tyg.)';
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
            'Preferowany termin': preferredTerm,
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
            if (serviceSelect) serviceSelect.classList.remove('has-value');

            // Zresetuj kafelki terminu do domyślnego
            termTiles.forEach((t, i) => {
              if (i === 0) t.classList.add('active');
              else t.classList.remove('active');
            });
            if (termMonthsWrapper) termMonthsWrapper.style.display = 'none';
            updateTermValue('Pilne / Od zaraz (1-2 tyg.)');
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
