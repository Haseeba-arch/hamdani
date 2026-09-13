/**
 * KIDDO ME – BABY & TODDLER BOUTIQUE SHOPIFY THEME JS
 * Complete interactive functionalities
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. CART DRAWER & STATE ---
  const cartDrawer = document.getElementById('CartDrawer');
  const cartOverlay = document.getElementById('CartDrawerOverlay');
  const cartCloseBtn = document.getElementById('CartDrawerClose');
  const cartTriggers = document.querySelectorAll('[data-cart-drawer-trigger]');
  const cartCountBadges = document.querySelectorAll('#CartCount, #CartDrawerCount');
  const headerCartTotal = document.getElementById('HeaderCartTotal');
  const cartSubtotal = document.getElementById('CartSubtotal');
  const cartTotal = document.getElementById('CartTotal');
  const cartItemsContainer = document.getElementById('CartDrawerItems');

  let cartState = [
    {
      id: 'item-1',
      title: 'All-In-One Baby Collections – Signature Set',
      variant: 'Sage Green / 3-6M',
      price: 2450,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=180&q=80'
    },
    {
      id: 'item-2',
      title: 'Cotton Knit Cardigan & Hat Set',
      variant: 'Vanilla Cream / 0-3M',
      price: 2348,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=180&q=80'
    }
  ];

  function openCartDrawer() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  cartTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  }));

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  function renderCart() {
    if (!cartItemsContainer) return;
    
    let totalItems = 0;
    let totalPrice = 0;

    cartItemsContainer.innerHTML = '';

    if (cartState.length === 0) {
      cartItemsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--color-text-muted);">
          <span style="font-size: 3rem; display: block; margin-bottom: 12px;">🧸</span>
          <p style="font-weight: 700; margin-bottom: 8px;">Your cart is currently empty</p>
          <a href="#collections" class="btn btn-hero-primary" style="margin-top: 12px; font-size: 0.85rem;" onclick="document.getElementById('CartDrawerClose').click();">Start Shopping</a>
        </div>
      `;
    } else {
      cartState.forEach((item, index) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.dataset.itemId = item.id;
        itemEl.innerHTML = `
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.title}" width="80" height="80">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-variant">${item.variant}</span>
            <div class="cart-item-price-row">
              <div class="cart-quantity-stepper">
                <button type="button" class="qty-btn minus" data-cart-index="${index}" data-change="-1">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button type="button" class="qty-btn plus" data-cart-index="${index}" data-change="1">+</button>
              </div>
              <span class="cart-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
            </div>
          </div>
          <button type="button" class="cart-item-remove" data-cart-remove="${index}">&times;</button>
        `;
        cartItemsContainer.appendChild(itemEl);
      });
    }

    // Update counts & totals
    cartCountBadges.forEach(badge => badge.textContent = totalItems);
    const formattedTotal = 'Rs. ' + totalPrice.toLocaleString();
    if (headerCartTotal) headerCartTotal.textContent = formattedTotal;
    if (cartSubtotal) cartSubtotal.textContent = formattedTotal;
    if (cartTotal) cartTotal.textContent = formattedTotal;
  }

  // Handle Cart item +/- and remove
  if (cartItemsContainer) {
    cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.closest('[data-change]')) {
        const btn = e.target.closest('[data-change]');
        const index = parseInt(btn.dataset.cartIndex);
        const change = parseInt(btn.dataset.change);
        if (cartState[index]) {
          cartState[index].quantity += change;
          if (cartState[index].quantity <= 0) {
            cartState.splice(index, 1);
          }
          renderCart();
        }
      } else if (e.target.closest('[data-cart-remove]')) {
        const btn = e.target.closest('[data-cart-remove]');
        const index = parseInt(btn.dataset.cartRemove);
        cartState.splice(index, 1);
        renderCart();
      }
    });
  }

  // Toast Notification
  function showToast(message) {
    let toast = document.querySelector('.cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✨</span><span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Add to cart from Product Cards
  document.querySelectorAll('[data-add-to-cart-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.dataset.productTitle || 'Cozy Baby Outfit';
      const priceStr = btn.dataset.productPrice || 'Rs. 2,450';
      const image = btn.dataset.productImage || 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=180&q=80';
      const price = parseInt(priceStr.replace(/[^0-9]/g, '')) || 2450;

      // Check if already in cart
      const existing = cartState.find(item => item.title === title);
      if (existing) {
        existing.quantity += 1;
      } else {
        cartState.push({
          id: 'item-' + Date.now(),
          title: title,
          variant: 'Standard / 3-6M',
          price: price,
          quantity: 1,
          image: image
        });
      }

      renderCart();
      showToast(`${title} added to cart!`);
      openCartDrawer();
    });
  });

  // --- 2. COLLECTION TABS FILTERING ---
  const tabButtons = document.querySelectorAll('.collection-filter-tabs .tab-btn');
  const productItems = document.querySelectorAll('.products-grid-6 .product-item-wrap');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      const targetTab = button.dataset.tab;

      productItems.forEach(item => {
        const categories = item.dataset.category || '';
        if (targetTab === 'all' || categories.includes(targetTab)) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // --- 3. FEATURED PRODUCT SHOWCASE INTERACTIONS ---
  // Gallery Switcher
  const fpMainImage = document.getElementById('FpMainImage');
  const fpThumbs = document.querySelectorAll('.fp-thumb');

  fpThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      fpThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.dataset.imgSrc;
      if (fpMainImage && newSrc) {
        fpMainImage.style.opacity = '0.4';
        setTimeout(() => {
          fpMainImage.src = newSrc;
          fpMainImage.style.opacity = '1';
        }, 150);
      }
    });
  });

  // Color Swatches
  const colorSwatches = document.querySelectorAll('.fp-swatch-circle');
  const selectedColorLabel = document.getElementById('SelectedColorLabel');

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      colorSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      if (selectedColorLabel && swatch.dataset.colorName) {
        selectedColorLabel.textContent = swatch.dataset.colorName;
      }
    });
  });

  // Size Chips
  const sizeChips = document.querySelectorAll('.fp-size-chip');
  const selectedSizeLabel = document.getElementById('SelectedSizeLabel');

  sizeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sizeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (selectedSizeLabel && chip.dataset.size) {
        selectedSizeLabel.textContent = chip.dataset.size;
      }
    });
  });

  // Quantity Stepper
  const fpQtyMinus = document.getElementById('FpQtyMinus');
  const fpQtyPlus = document.getElementById('FpQtyPlus');
  const fpQtyNum = document.getElementById('FpQtyNum');
  let fpQty = 1;

  if (fpQtyMinus && fpQtyPlus && fpQtyNum) {
    fpQtyMinus.addEventListener('click', () => {
      if (fpQty > 1) {
        fpQty--;
        fpQtyNum.textContent = fpQty;
      }
    });
    fpQtyPlus.addEventListener('click', () => {
      fpQty++;
      fpQtyNum.textContent = fpQty;
    });
  }

  // Featured Product Add to Cart
  const fpAddToCartBtn = document.getElementById('FpAddToCartBtn');
  if (fpAddToCartBtn) {
    fpAddToCartBtn.addEventListener('click', () => {
      const selectedColor = selectedColorLabel ? selectedColorLabel.textContent : 'Sage Green';
      const selectedSize = selectedSizeLabel ? selectedSizeLabel.textContent : '3-6 Months';
      const activeThumb = document.querySelector('.fp-thumb.active');
      const img = activeThumb ? activeThumb.dataset.imgSrc : 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=180&q=80';

      cartState.push({
        id: 'item-' + Date.now(),
        title: 'ALL-IN-ONE Baby Collections – Signature Set',
        variant: `${selectedColor} / ${selectedSize}`,
        price: 2450,
        quantity: fpQty,
        image: img
      });

      renderCart();
      showToast(`Added ${fpQty}x Signature Baby Set to Cart!`);
      openCartDrawer();
    });
  }

  // Featured Product Buy Now
  const fpBuyNowBtn = document.getElementById('FpBuyNowBtn');
  if (fpBuyNowBtn) {
    fpBuyNowBtn.addEventListener('click', () => {
      openCartDrawer();
    });
  }

  // --- 4. SIZE GUIDE MODAL ---
  const sizeGuideBtn = document.getElementById('SizeGuideBtn');
  const sizeGuideModal = document.getElementById('SizeGuideModal');
  const sizeGuideClose = document.getElementById('SizeGuideClose');

  if (sizeGuideBtn && sizeGuideModal) {
    sizeGuideBtn.addEventListener('click', () => {
      sizeGuideModal.classList.add('open');
    });
  }

  if (sizeGuideClose && sizeGuideModal) {
    sizeGuideClose.addEventListener('click', () => {
      sizeGuideModal.classList.remove('open');
    });
    sizeGuideModal.addEventListener('click', (e) => {
      if (e.target === sizeGuideModal) {
        sizeGuideModal.classList.remove('open');
      }
    });
  }

  // --- 5. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- 6. WISHLIST TOGGLE ---
  let wishlistCount = 0;
  const wishlistHeaderCount = document.getElementById('WishlistHeaderCount');
  document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isActive = btn.classList.toggle('active');
      wishlistCount += isActive ? 1 : -1;
      if (wishlistCount < 0) wishlistCount = 0;
      if (wishlistHeaderCount) wishlistHeaderCount.textContent = wishlistCount;
      showToast(isActive ? 'Added to your Wishlist 💕' : 'Removed from Wishlist');
    });
  });

  // --- 7. COLOR PALETTE SWATCHES ---
  const paletteSwatches = document.querySelectorAll('.palette-swatch-item');
  paletteSwatches.forEach(item => {
    item.addEventListener('click', () => {
      paletteSwatches.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      const colorName = item.querySelector('.palette-swatch-label').textContent;
      showToast(`Browsing ${colorName} collection ✨`);
    });
  });

  // --- 8. MOBILE MENU ---
  const mobileToggle = document.getElementById('MobileMenuToggle');
  const mobileDrawer = document.getElementById('MobileNavDrawer');
  const mobileClose = document.getElementById('MobileNavClose');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  // Initial cart render
  renderCart();
});
