/**
 * MURAVEN - Project details modal (uses projectDetailsData from projects-data.js)
 */

document.addEventListener('DOMContentLoaded', () => {

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

});
