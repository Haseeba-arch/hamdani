/**
 * Ruhe Noor - Shopify 2.0 Luxury Fragrance Theme JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initDrawerCart();
  initFAQAccordion();
  initQuantitySelectors();
  initCollectionTabs();
  initScrollAnimations();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. Cart Drawer Interactivity
   -------------------------------------------------------------------------- */
function initDrawerCart() {
  const openButtons = document.querySelectorAll('[data-cart-drawer-trigger]');
  const closeButtons = document.querySelectorAll('[data-cart-drawer-close]');
  const drawer = document.getElementById('CartDrawer');
  const overlay = document.getElementById('CartDrawerOverlay');

  if (!drawer || !overlay) return;

  function openCart() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  }));

  closeButtons.forEach(btn => btn.addEventListener('click', closeCart));
  overlay.addEventListener('click', closeCart);

  // Quick Add To Bag simulation
  const addButtons = document.querySelectorAll('[data-add-to-cart]');
  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Adding...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        // Update badge count
        const badges = document.querySelectorAll('.cart-count-badge');
        badges.forEach(badge => {
          let count = parseInt(badge.textContent || '0', 10);
          badge.textContent = count + 1;
        });

        openCart();
      }, 500);
    });
  });
}

/* --------------------------------------------------------------------------
   2. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Quantity Selectors
   -------------------------------------------------------------------------- */
function initQuantitySelectors() {
  const wrappers = document.querySelectorAll('.quantity-wrapper');

  wrappers.forEach(wrapper => {
    const minus = wrapper.querySelector('[data-qty-minus]');
    const plus = wrapper.querySelector('[data-qty-plus]');
    const input = wrapper.querySelector('.qty-input');

    if (!input) return;

    if (minus) {
      minus.addEventListener('click', () => {
        let val = parseInt(input.value || '1', 10);
        if (val > 1) {
          input.value = val - 1;
        }
      });
    }

    if (plus) {
      plus.addEventListener('click', () => {
        let val = parseInt(input.value || '1', 10);
        input.value = val + 1;
      });
    }
  });
}

/* --------------------------------------------------------------------------
   4. Collection Tabs Filtering
   -------------------------------------------------------------------------- */
function initCollectionTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.product-card');

  if (!tabButtons.length) return;

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter') || 'all';

      cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.toLowerCase().includes(filter.toLowerCase())) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Scroll Animated Metric Progress Bars
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const fills = document.querySelectorAll('.progress-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = entry.target.getAttribute('data-progress-width') || '100%';
        entry.target.style.width = targetWidth;
      }
    });
  }, { threshold: 0.2 });

  fills.forEach(fill => {
    const width = fill.style.width || fill.getAttribute('data-width') || '90%';
    fill.setAttribute('data-progress-width', width);
    fill.style.width = '0%';
    observer.observe(fill);
  });
}

/* --------------------------------------------------------------------------
   6. Mobile Menu Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.header-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });
}
