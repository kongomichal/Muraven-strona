/**
 * MURAVEN - Portfolio category accordions
 */

document.addEventListener('DOMContentLoaded', () => {

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

});
