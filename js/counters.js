/**
 * MURAVEN - Animated numerical counters
 */

document.addEventListener('DOMContentLoaded', () => {

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

});
