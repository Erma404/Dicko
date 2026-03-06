/* =============================================
   DICKO — main.js
   Nav scroll, mobile menu, FAQ, Devis modal
   ============================================= */

/* ---------- Nav scroll effect ---------- */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ---------- Mobile menu ---------- */
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

/* ---------- Active nav link ---------- */
const currentPage = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  const cleanHref = href ? href.replace(/\/$/, '') : '';
  if (
    cleanHref === currentPage ||
    (cleanHref === '/' && (currentPage === '' || currentPage === '/')) ||
    (cleanHref !== '/' && cleanHref && currentPage.startsWith(cleanHref))
  ) {
    link.classList.add('active');
  }
});

/* ---------- FAQ Accordion ---------- */
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    const body = item.querySelector('.faq-body');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-body').style.maxHeight = null;
    });
    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

/* ---------- Fade-up on scroll ---------- */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
}

/* ---------- Devis Modal ---------- */
const modalOverlay = document.getElementById('devis-modal');
if (modalOverlay) {
  // Open triggers
  document.querySelectorAll('[data-open-devis]').forEach(btn => {
    btn.addEventListener('click', () => openModal());
  });
  // Close
  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

  let currentStep = 1;
  const totalSteps = 4;
  const formData = {};

  function openModal() {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    goToStep(1);
    resetForm();
  }
  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  function resetForm() {
    modalOverlay.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => { el.value = ''; });
    const urgence = modalOverlay.querySelector('[name="urgence"]');
    if (urgence) urgence.value = 'normal';
    document.getElementById('modal-confirm')?.classList.add('hidden');
    document.getElementById('modal-steps-body')?.classList.remove('hidden');
    currentStep = 1;
  }

  function goToStep(n) {
    currentStep = n;
    // Show/hide step panels
    modalOverlay.querySelectorAll('.modal-step-panel').forEach((p, i) => {
      p.style.display = (i + 1 === n) ? 'block' : 'none';
    });
    // Update dots
    modalOverlay.querySelectorAll('.modal-step-dot').forEach((dot, i) => {
      dot.classList.remove('active', 'done');
      if (i + 1 < n)  dot.classList.add('done');
      if (i + 1 === n) dot.classList.add('active');
    });
    // Prev/Next buttons
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    if (prevBtn) prevBtn.style.display = n > 1 ? 'inline-flex' : 'none';
    if (nextBtn) {
      nextBtn.textContent = n === totalSteps ? 'Envoyer ma demande' : 'Suivant →';
    }
  }

  function collectStep() {
    const panel = modalOverlay.querySelector(`.modal-step-panel:nth-child(${currentStep})`);
    if (!panel) return;
    panel.querySelectorAll('[name]').forEach(el => {
      formData[el.name] = el.value;
    });
  }

  function validateStep() {
    const required = {
      1: ['typeTravaux', 'surface', 'nbPieces'],
      2: ['localisation', 'urgence'],
      3: ['nom', 'email', 'telephone'],
      4: []
    };
    const fields = required[currentStep] || [];
    return fields.every(name => {
      const el = modalOverlay.querySelector(`[name="${name}"]`);
      return el && el.value.trim() !== '';
    });
  }

  document.getElementById('modal-next')?.addEventListener('click', () => {
    collectStep();
    if (!validateStep()) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1);
    } else {
      submitDevis();
    }
  });

  document.getElementById('modal-prev')?.addEventListener('click', () => {
    if (currentStep > 1) goToStep(currentStep - 1);
  });

  function submitDevis() {
    collectStep();
    // Show confirmation
    document.getElementById('modal-steps-body').classList.add('hidden');
    document.getElementById('modal-confirm').classList.remove('hidden');

    const msg = encodeURIComponent(
      `Bonjour DICKO,\n\nJe souhaite obtenir un devis pour des travaux de *${(formData.typeTravaux||'').toUpperCase()}*.\n\n` +
      `📋 *Détails du projet :*\n• Type : ${formData.typeTravaux||''}\n• Surface : ${formData.surface||''} m²\n` +
      `• Nombre de pièces : ${formData.nbPieces||''}\n• Localisation : ${formData.localisation||''}\n• Urgence : ${formData.urgence||'normal'}\n\n` +
      `👤 *Coordonnées :*\n• Nom : ${formData.nom||''}\n• Entreprise : ${formData.entreprise||'Non précisé'}\n` +
      `• Email : ${formData.email||''}\n• Téléphone : ${formData.telephone||''}\n\n` +
      `📝 *Description :*\n${formData.description||'Aucune description supplémentaire'}\n\nMerci de me recontacter.`
    );
    window.open(`https://wa.me/33615035300?text=${msg}`, '_blank');

    const subject = encodeURIComponent(`Demande de devis - ${(formData.typeTravaux||'').toUpperCase()} - ${formData.nom||''}`);
    const body = encodeURIComponent(
      `Type de travaux : ${formData.typeTravaux||''}\nSurface : ${formData.surface||''} m²\nPièces : ${formData.nbPieces||''}\n` +
      `Localisation : ${formData.localisation||''}\nUrgence : ${formData.urgence||''}\n\n` +
      `Nom : ${formData.nom||''}\nEntreprise : ${formData.entreprise||''}\nEmail : ${formData.email||''}\nTél : ${formData.telephone||''}\n\n` +
      `Description : ${formData.description||''}`
    );
    setTimeout(() => {
      window.location.href = `mailto:contact@dicko-pvc.fr?subject=${subject}&body=${body}`;
    }, 1200);
  }

  // Confirm close
  document.getElementById('modal-confirm-close')?.addEventListener('click', closeModal);
}
