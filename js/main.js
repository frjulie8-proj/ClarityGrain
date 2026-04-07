/* ─────────────────────────────────────
   ClarityGrain — main.js
───────────────────────────────────── */

// ── Page navigation ──────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.setAttribute('aria-hidden', 'true');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
  });

  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    target.removeAttribute('aria-hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  // Update URL hash without triggering scroll
  history.pushState(null, '', '#' + page);
}

// ── Keyboard nav support ──────────────
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    const el = document.activeElement;
    if (el && el.getAttribute('role') === 'button') {
      e.preventDefault();
      el.click();
    }
  }
});

// ── Handle hash on load ───────────────
function initPage() {
  const hash = window.location.hash.replace('#', '');
  const valid = ['services', 'approach', 'contact'];
  const page = valid.includes(hash) ? hash : 'services';
  showPage(page);
}

// ── Form submission via Formspree ─────
function initForm() {
  const form = document.querySelector('.form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const btn = form.querySelector('.form-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        btn.textContent = 'Sent';
        form.reset();
        // Show success message
        let msg = form.querySelector('.form-success');
        if (!msg) {
          msg = document.createElement('p');
          msg.className = 'form-success';
          msg.textContent = "Thank you — we'll review your business and send you a one-page summary within 48 hours.";
          form.appendChild(msg);
        }
        msg.classList.add('visible');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      btn.textContent = 'Try again';
      btn.disabled = false;
      console.error('Form error:', err);
    }
  });
}

// ── Init ──────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initPage();
  initForm();
});

// Expose for inline onclick handlers
window.showPage = showPage;
