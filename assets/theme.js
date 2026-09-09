/**
 * GLOW CHIC - Luxury Skincare Shopify 2.0 Theme JS
 * Interactive features: Cart Drawer, FAQ Accordion, Image Gallery Switcher,
 * Category Filter Tabs, Quantity Adjusters, Testimonial Controls, and Toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initFaqAccordion();
  initCategoryTabs();
  initGallerySwitcher();
  initQuantityControls();
  initCartDrawer();
  initAddToCart();
  initProgressBars();
  initTestimonialNav();
});

// 1. Sticky Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// 2. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 30 + 'px';
      }
    });
  });

  // Open first item by default
  if (faqItems[0]) {
    faqItems[0].classList.add('active');
    const firstPanel = faqItems[0].querySelector('.faq-answer-panel');
    if (firstPanel) {
      firstPanel.style.maxHeight = firstPanel.scrollHeight + 30 + 'px';
    }
  }
}

// 3. Category Filter Tabs for Collection Grid
function initCategoryTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.product-card');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      cards.forEach(card => {
        const category = (card.getAttribute('data-category') || '').toLowerCase();
        if (filter === 'all' || category.includes(filter.toLowerCase())) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. Product Gallery Thumbnail Switcher
function initGallerySwitcher() {
  const thumbs = document.querySelectorAll('.fp-thumb-item');
  const mainImage = document.querySelector('.fp-main-image');
  if (!thumbs.length || !mainImage) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.getAttribute('data-img-src') || thumb.querySelector('img')?.src;
      if (newSrc) {
        mainImage.style.opacity = '0.3';
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.style.opacity = '1';
        }, 150);
      }
    });
  });
}

// 5. Quantity Controls
function initQuantityControls() {
  document.querySelectorAll('.quantity-wrapper').forEach(wrapper => {
    const minusBtn = wrapper.querySelector('[data-qty-minus]');
    const plusBtn = wrapper.querySelector('[data-qty-plus]');
    const input = wrapper.querySelector('.qty-input');
    if (!minusBtn || !plusBtn || !input) return;

    minusBtn.addEventListener('click', () => {
      let val = parseInt(input.value, 10) || 1;
      if (val > 1) {
        input.value = val - 1;
      }
    });

    plusBtn.addEventListener('click', () => {
      let val = parseInt(input.value, 10) || 1;
      input.value = val + 1;
    });
  });
}

// 6. Slide-out Cart Drawer
function initCartDrawer() {
  const triggers = document.querySelectorAll('[data-cart-drawer-trigger]');
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  const closeBtn = document.getElementById('cartDrawerClose');

  if (!drawer || !overlay) return;

  const openDrawer = (e) => {
    if (e) e.preventDefault();
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggers.forEach(t => t.addEventListener('click', openDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Export globally for cart actions
  window.openCartDrawer = openDrawer;
  window.closeCartDrawer = closeDrawer;
}

// 7. Add to Cart Toast & Counter increment
function initAddToCart() {
  const addButtons = document.querySelectorAll('[data-add-to-cart]');
  const cartBadge = document.querySelector('.cart-count-badge');
  const toast = document.getElementById('cartToast');

  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update badge
      if (cartBadge) {
        let count = parseInt(cartBadge.textContent, 10) || 0;
        cartBadge.textContent = count + 1;
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
          cartBadge.style.transform = 'scale(1)';
        }, 250);
      }

      // Show Toast Notification
      if (toast) {
        toast.classList.add('active');
        setTimeout(() => {
          toast.classList.remove('active');
        }, 3000);
      }

      // Optional: Open cart drawer directly on add
      // if (window.openCartDrawer) window.openCartDrawer();
    });
  });
}

// 8. Progress Bars Animation when visible
function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  if (!progressBars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-percentage') || '90';
        bar.style.width = targetWidth + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  progressBars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

// 9. Testimonial Nav Arrows
function initTestimonialNav() {
  const prevBtn = document.querySelector('[data-testimonial-prev]');
  const nextBtn = document.querySelector('[data-testimonial-next]');
  const grid = document.querySelector('.testimonials-grid-3');
  if (!prevBtn || !nextBtn || !grid) return;

  nextBtn.addEventListener('click', () => {
    grid.scrollBy({ left: 320, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    grid.scrollBy({ left: -320, behavior: 'smooth' });
  });
}
