/* =============================================
   DICKO — main.js
   Nav scroll, mobile menu, FAQ, Devis modal v2
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
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-body').style.maxHeight = null;
    });
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
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
}

/* ============================================
   DEVIS MODAL v2 — 5 étapes
   ============================================ */
(function () {
  const PHONE = '33615035300';
  const EMAIL = 'contact@dicko-pvc.fr';
  const STEPS = 5;

  function freshState() {
    return { step: 1, type: '', surface: '', pieces: '', localisation: '', urgence: '', nom: '', entreprise: '', email: '', telephone: '', description: '' };
  }
  let s = freshState();

  /* ---- Build overlay DOM ---- */
  const overlay = document.createElement('div');
  overlay.className = 'dv-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="dv-modal">
      <div class="dv-header">
        <div class="dv-header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/></svg>
        </div>
        <div class="dv-header-text">
          <h2>Demande de devis</h2>
          <span id="dv-step-lbl">Étape 1 sur ${STEPS}</span>
        </div>
        <button class="dv-close" id="dv-close" aria-label="Fermer">&times;</button>
      </div>
      <div class="dv-progress-bar"><div class="dv-progress-fill" id="dv-fill"></div></div>
      <div class="dv-body" id="dv-body"></div>
      <div class="dv-footer" id="dv-footer"></div>
    </div>`;
  /* overlay is NOT in the DOM until openModal() is called */

  /* ---- Mobile sticky bar ---- */
  const stickyBar = document.createElement('div');
  stickyBar.className = 'mobile-sticky-devis';
  stickyBar.innerHTML = `<button class="btn-gold" id="dv-sticky" style="width:100%;justify-content:center;gap:.625rem;font-size:1rem;padding:1rem;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    Demande de devis
  </button>`;
  document.body.appendChild(stickyBar);

  /* ---- Event delegation ---- */
  document.addEventListener('click', e => {
    if (e.target.closest('[data-open-devis]') || e.target.closest('#dv-sticky')) openModal();
  });
  overlay.addEventListener('click', e => { if (e.target === overlay || e.target.closest('#dv-close')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

  function openModal() {
    s = freshState();
    if (!overlay.isConnected) document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('open'));
    document.body.style.overflow = 'hidden';
    render();
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { overlay.remove(); }, 260);
  }

  /* ---- Render current step ---- */
  function render() {
    document.getElementById('dv-step-lbl').textContent = `Étape ${s.step} sur ${STEPS}`;
    document.getElementById('dv-fill').style.width = `${(s.step / STEPS) * 100}%`;
    document.getElementById('dv-body').innerHTML = bodyHTML();
    document.getElementById('dv-footer').innerHTML = footerHTML();
    bindEvents();
  }

  /* ---- Step body templates ---- */
  function bodyHTML() {
    const types = [
      { val: 'Plomberie', icon: '💧' }, { val: 'Chauffage', icon: '🔥' },
      { val: 'VMC', icon: '💨' }, { val: 'Réseau Gaz', icon: '🧯' },
      { val: 'CVC Complet', icon: '🏗️' }, { val: 'Autre', icon: '🔧' }
    ];
    const surfaces = ['Moins de 100 m²', '100-200 m²', '200-500 m²', '500-1000 m²', 'Plus de 1000 m²'];
    const pieces   = ['1-2', '3-5', '6-10', '11-20', 'Plus de 20'];

    if (s.step === 1) return `
      <div class="dv-group">
        <label class="dv-label">Type de travaux *</label>
        <div class="dv-type-grid">
          ${types.map(t => `<button type="button" class="dv-type-card${s.type === t.val ? ' selected' : ''}" data-type="${t.val}">
            <span class="dv-type-icon">${t.icon}</span>
            <span class="dv-type-name">${t.val}</span>
          </button>`).join('')}
        </div>
      </div>
      <div class="dv-group">
        <label class="dv-label">Surface du chantier (m²) *</label>
        <select class="dv-select" id="dv-surface">
          <option value="">Sélectionnez la surface</option>
          ${surfaces.map(v => `<option value="${v}"${s.surface === v ? ' selected' : ''}>${v}</option>`).join('')}
        </select>
      </div>
      <div class="dv-group">
        <label class="dv-label">Nombre de pièces *</label>
        <select class="dv-select" id="dv-pieces">
          <option value="">Sélectionnez</option>
          ${pieces.map(v => `<option value="${v}"${s.pieces === v ? ' selected' : ''}>${v}</option>`).join('')}
        </select>
      </div>`;

    if (s.step === 2) return `
      <div class="dv-group">
        <label class="dv-label">Localisation du chantier *</label>
        <input type="text" class="dv-input" id="dv-loc" placeholder="Ex: Paris 19, 75019" value="${esc(s.localisation)}">
      </div>
      <div class="dv-group">
        <label class="dv-label">Niveau d'urgence *</label>
        <div class="dv-urgency-list">
          ${[['Normal','Délai standard','normal'],['Rapide','Intervention prioritaire','rapide'],['Urgence','Intervention express','urgence']].map(([n,d,cls]) => `
          <button type="button" class="dv-urgency-card ${cls}${s.urgence === n ? ' selected' : ''}" data-urgence="${n}">
            <strong>${n}</strong><span>${d}</span>
          </button>`).join('')}
        </div>
      </div>`;

    if (s.step === 3) return `
      <div class="dv-group">
        <label class="dv-label">Nom complet *</label>
        <input type="text" class="dv-input" id="dv-nom" placeholder="Ex: Jean Dupont" value="${esc(s.nom)}">
      </div>
      <div class="dv-group">
        <label class="dv-label">Nom de l'entreprise <em>(optionnel)</em></label>
        <input type="text" class="dv-input" id="dv-entreprise" placeholder="Ex: Ma Société" value="${esc(s.entreprise)}">
      </div>
      <div class="dv-group">
        <label class="dv-label">Email *</label>
        <input type="email" class="dv-input" id="dv-email" placeholder="Ex: jean.dupont@email.com" value="${esc(s.email)}">
      </div>
      <div class="dv-group">
        <label class="dv-label">Téléphone *</label>
        <input type="tel" class="dv-input" id="dv-tel" placeholder="Ex: 06 12 34 56 78" value="${esc(s.telephone)}">
      </div>`;

    if (s.step === 4) return `
      ${recapHTML()}
      <div class="dv-group">
        <label class="dv-label">Description du projet <em>(optionnel)</em></label>
        <textarea class="dv-input dv-textarea" id="dv-desc" rows="4" placeholder="Décrivez votre projet, vos contraintes spécifiques, les accès au chantier...">${esc(s.description)}</textarea>
      </div>
      <div class="dv-info-note">
        En cliquant sur "Continuer", vous serez redirigé vers WhatsApp et un email sera préparé avec vos informations.
      </div>`;

    if (s.step === 5) return `
      <div class="dv-success">
        <div class="dv-success-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <h3>Merci beaucoup !</h3>
        <p>Votre demande est prête à être envoyée.<br>Nous vous recontacterons sous 48h ouvrées.</p>
        ${recapHTML()}
        <div class="dv-channels">
          <div class="dv-channel"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25d366" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Votre demande sera envoyée par WhatsApp</div>
          <div class="dv-channel"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Un email sera également préparé</div>
        </div>
      </div>`;

    return '';
  }

  function recapHTML() {
    return `<div class="dv-recap">
      <h4>Récapitulatif</h4>
      <div class="dv-recap-grid">
        <div>Type: <strong>${s.type}</strong></div>
        <div>Surface: <strong>${s.surface}</strong></div>
        <div>Pièces: <strong>${s.pieces}</strong></div>
        <div>Urgence: <strong>${s.urgence}</strong></div>
      </div>
    </div>`;
  }

  /* ---- Footer buttons ---- */
  function footerHTML() {
    const back = `<button type="button" class="dv-btn-back" id="dv-prev"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg> Retour</button>`;
    const next = `<button type="button" class="dv-btn-next" id="dv-next">Continuer <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>`;
    const send = `<button type="button" class="dv-btn-send" id="dv-send"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Envoyer ma demande</button>`;
    if (s.step === 1) return `<span></span>${next}`;
    if (s.step === 5) return `${back}${send}`;
    return `${back}${next}`;
  }

  /* ---- Bind events after render ---- */
  function bindEvents() {
    // Type cards
    document.querySelectorAll('.dv-type-card').forEach(c => {
      c.addEventListener('click', () => {
        s.type = c.dataset.type;
        document.querySelectorAll('.dv-type-card').forEach(x => x.classList.remove('selected'));
        c.classList.add('selected');
      });
    });
    // Urgency cards
    document.querySelectorAll('.dv-urgency-card').forEach(c => {
      c.addEventListener('click', () => {
        s.urgence = c.dataset.urgence;
        document.querySelectorAll('.dv-urgency-card').forEach(x => x.classList.remove('selected'));
        c.classList.add('selected');
      });
    });
    // Navigation
    document.getElementById('dv-next')?.addEventListener('click', () => {
      collect();
      if (!valid()) return;
      s.step++;
      render();
    });
    document.getElementById('dv-prev')?.addEventListener('click', () => {
      collect();
      s.step--;
      render();
    });
    document.getElementById('dv-send')?.addEventListener('click', sendDevis);
  }

  /* ---- Collect current step values ---- */
  function collect() {
    const g = id => document.getElementById(id)?.value || '';
    if (s.step === 1) { s.surface = g('dv-surface'); s.pieces = g('dv-pieces'); }
    if (s.step === 2) { s.localisation = g('dv-loc'); }
    if (s.step === 3) { s.nom = g('dv-nom'); s.entreprise = g('dv-entreprise'); s.email = g('dv-email'); s.telephone = g('dv-tel'); }
    if (s.step === 4) { s.description = g('dv-desc'); }
  }

  /* ---- Validation ---- */
  function valid() {
    let ok = true;
    function err(el) { if (el) { el.classList.add('dv-error'); ok = false; } }
    if (s.step === 1) {
      if (!s.type) { document.querySelector('.dv-type-grid')?.classList.add('dv-error-grid'); ok = false; }
      if (!s.surface) err(document.getElementById('dv-surface'));
      if (!s.pieces)  err(document.getElementById('dv-pieces'));
    }
    if (s.step === 2) {
      if (!s.localisation.trim()) err(document.getElementById('dv-loc'));
      if (!s.urgence) { document.querySelector('.dv-urgency-list')?.classList.add('dv-error-grid'); ok = false; }
    }
    if (s.step === 3) {
      if (!s.nom.trim())       err(document.getElementById('dv-nom'));
      if (!s.email.trim())     err(document.getElementById('dv-email'));
      if (!s.telephone.trim()) err(document.getElementById('dv-tel'));
    }
    if (!ok) {
      const btn = document.getElementById('dv-next');
      if (btn) { btn.classList.add('dv-shake'); setTimeout(() => btn.classList.remove('dv-shake'), 400); }
    }
    return ok;
  }

  /* ---- Send ---- */
  function sendDevis() {
    const msg = encodeURIComponent(
      `Bonjour DICKO BTP 👋\n\nNouvelle demande de devis :\n\n` +
      `📋 Type: ${s.type}\n📐 Surface: ${s.surface}\n🚪 Pièces: ${s.pieces}\n` +
      `📍 Localisation: ${s.localisation}\n⏱️ Urgence: ${s.urgence}\n\n` +
      `👤 Nom: ${s.nom}\n${s.entreprise ? `🏢 Entreprise: ${s.entreprise}\n` : ''}` +
      `📧 Email: ${s.email}\n📱 Téléphone: ${s.telephone}\n\n` +
      `📝 Description: ${s.description || 'Aucune description'}`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, '_blank');
    const subj = encodeURIComponent(`Devis ${s.type} — ${s.localisation} — ${s.nom}`);
    const body = encodeURIComponent(
      `Type: ${s.type}\nSurface: ${s.surface}\nPièces: ${s.pieces}\nLocalisation: ${s.localisation}\nUrgence: ${s.urgence}\n\n` +
      `Nom: ${s.nom}\nEntreprise: ${s.entreprise || 'N/A'}\nEmail: ${s.email}\nTél: ${s.telephone}\n\nDescription: ${s.description || 'Aucune'}`
    );
    setTimeout(() => { window.location.href = `mailto:${EMAIL}?subject=${subj}&body=${body}`; }, 800);
  }

  function esc(str) { return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;'); }
  function id(i) { return document.getElementById(i); }
})();
