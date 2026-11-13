/**
 * STEPPERS SNEAKERS & SOLE — INDEX 3 JAVASCRIPT
 * Inspired by Grandeur Style luxury retail experience
 * Features: Product filtering, Cart Drawer, Quick View Modal, Live Search, Toast Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. PRODUCT CATALOG DATA (8 Authenticated Products)
  const CATALOG = [
    {
      id: 'step-01',
      name: "Air Jordan 1 Retro High OG 'Chicago'",
      brand: 'JORDAN BRAND',
      category: 'RETRO HIGH',
      price: 180,
      originalPrice: 220,
      badge: 'NEW ARRIVAL',
      badgeClass: 'arrival-badge',
      image: 'assets/images/sneaker-chicago.jpg',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      description: "The timeless 1985 silhouette in its truest archival form. Premium Varsity Red, White, and Black Nappa leather upper with encapsulated Nike Air cushioning."
    },
    {
      id: 'step-02',
      name: "Nike Air Force 1 Shadow 'Pastel Pale Ivory'",
      brand: 'NIKE SPORTSWEAR',
      category: 'MODERN LOW',
      price: 130,
      originalPrice: 155,
      badge: 'TOP SELLER',
      badgeClass: 'grail-badge',
      image: 'assets/images/sneaker-purple.jpg',
      sizes: ['US 6.5', 'US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9'],
      description: "Deconstructed layered pastels with dual eyestays, double mudguards, and mirrored heel branding over an elevated foam midsole."
    },
    {
      id: 'step-03',
      name: "Air Jordan 4 Retro 'Cyan Cement'",
      brand: 'JORDAN BRAND',
      category: 'RETRO HIGH',
      price: 210,
      originalPrice: 250,
      badge: 'LIMITED GRAIL',
      badgeClass: 'grail-badge',
      image: 'assets/images/sneaker-cyan.jpg',
      sizes: ['US 8.5', 'US 9', 'US 10', 'US 10.5', 'US 12'],
      description: "Stark white premium tumbled leather upper paired with vibrant electric cyan accents, speckled eyelet wings, and responsive air cushioning."
    },
    {
      id: 'step-04',
      name: "Air Jordan 1 Mid SE 'Red / Black Toe'",
      brand: 'JORDAN BRAND',
      category: 'RETRO HIGH',
      price: 135,
      originalPrice: 150,
      badge: 'NEW ARRIVAL',
      badgeClass: 'arrival-badge',
      image: 'assets/images/sneaker-dunk.jpg',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5'],
      description: "Crisp white quarter panel flanked by black nubuck overlays and gym red heel counter, finished with embroidered wings insignia."
    },
    {
      id: 'step-05',
      name: "Air Jordan 1 Retro High 'Bred Banned'",
      brand: 'JORDAN BRAND',
      category: 'RETRO HIGH',
      price: 190,
      originalPrice: 220,
      badge: 'DEADSTOCK',
      badgeClass: 'grail-badge',
      image: 'assets/images/sneaker-bred.jpg',
      sizes: ['US 8', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      description: "The silhouette that started the revolution. Iconic black and varsity red colorway with premium tumbled leather and archival nylon tongue."
    },
    {
      id: 'step-06',
      name: "Nike Free RN Flyknit 'University Red'",
      brand: 'NIKE RUNNING',
      category: 'RUNNING',
      price: 140,
      originalPrice: 165,
      badge: 'PERFORMANCE',
      badgeClass: 'arrival-badge',
      image: 'assets/images/sneaker-runner.jpg',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 10', 'US 11'],
      description: "Ultra-breathable seamless Flyknit woven upper in bold University Red, equipped with an auxetic tri-star outsole that expands and contracts naturally."
    },
    {
      id: 'step-07',
      name: "Nike Air Force 1 High '07 'White Sail'",
      brand: 'NIKE SPORTSWEAR',
      category: 'MODERN LOW',
      price: 145,
      originalPrice: 170,
      badge: 'BESTSELLER',
      badgeClass: 'arrival-badge',
      image: 'assets/images/af1-high-profile.jpg',
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      description: "The classic 1982 hardwood high-top featuring summit white leather, metallic gold deubré, padded ankle collar, and secure velcro lock strap."
    },
    {
      id: 'step-08',
      name: "Steppers Heavyweight 480GSM Drip Hoodie",
      brand: 'STEPPERS ATELIER',
      category: 'APPAREL',
      price: 120,
      originalPrice: 145,
      badge: 'ATELIER MERCH',
      badgeClass: 'grail-badge',
      image: 'assets/images/steppers-drip-hoodie.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: "Custom milled 480GSM French terry cotton hoodie in pitch black, engineered with double-lined crossover hood and tonal high-density Steppers monogram."
    }
  ];

  // 2. STATE MANAGEMENT
  let cart = [
    {
      id: 'step-01',
      name: "Air Jordan 1 Retro High OG 'Chicago'",
      size: 'US 9.5',
      price: 180,
      image: 'assets/images/sneaker-chicago.jpg',
      qty: 1
    }
  ];
  let currentModalProduct = null;
  let selectedModalSize = null;

  // 3. DOM ELEMENTS
  const header = document.querySelector('.site-header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const headerNav = document.querySelector('.header-nav');
  const productsGrid = document.querySelector('.products-grid');
  const filterPills = document.querySelectorAll('.filter-pill');

  // Cart Drawer Elements
  const cartBtn = document.getElementById('open-cart-btn');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartItemsContainer = document.getElementById('cart-drawer-items');
  const cartSubtotalVal = document.getElementById('cart-subtotal-val');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const checkoutBtn = document.getElementById('btn-checkout');

  // Quick View Modal Elements
  const quickViewModal = document.getElementById('quickview-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalImg = document.getElementById('modal-img');
  const modalBrand = document.getElementById('modal-brand');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSizesStrip = document.getElementById('modal-sizes-strip');
  const modalAddBagBtn = document.getElementById('modal-add-bag-btn');

  // Search Overlay Elements
  const searchBtn = document.getElementById('open-search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchInput = document.getElementById('search-input');
  const searchResultsGrid = document.getElementById('search-results-grid');

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');

  // 4. TOAST NOTIFICATION UTILITY
  function showToast(message, type = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = type === 'success' 
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c89b4f" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>' 
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
    toast.innerHTML = `${icon}<span>${message}</span>`;
    toastContainer.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 50);

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  // 5. STICKY HEADER SCROLL LISTENER
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuToggle && headerNav) {
    mobileMenuToggle.addEventListener('click', () => {
      headerNav.classList.toggle('mobile-active');
    });

    // Close on nav link click
    headerNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('mobile-active');
      });
    });
  }

  // 6. RENDER PRODUCT GRID
  function renderProducts(filter = 'ALL') {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    const filtered = filter === 'ALL' 
      ? CATALOG 
      : CATALOG.filter(p => p.category === filter);

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = product.id;

      const sizePills = product.sizes.slice(0, 4).map(s => `<span class="size-pill-mini">${s}</span>`).join('');
      const originalPriceHtml = product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : '';

      card.innerHTML = `
        <div class="product-media-wrap">
          <div class="product-badge-strip">
            <span class="${product.badgeClass}">${product.badge}</span>
          </div>
          <button class="btn-wishlist" title="Save to Wishlist" aria-label="Save to Wishlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <button class="product-quickview-btn" data-id="${product.id}">QUICK VIEW</button>
        </div>
        <div class="product-info-wrap">
          <span class="product-brand-tag">${product.brand}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-sizes-row">
            ${sizePills}
            ${product.sizes.length > 4 ? `<span class="size-pill-mini">+${product.sizes.length - 4}</span>` : ''}
          </div>
          <div class="product-card-footer">
            <div class="product-pricing">
              <span class="price-current">$${product.price}</span>
              ${originalPriceHtml}
            </div>
            <button class="btn-add-cart" data-id="${product.id}">ADD TO BAG</button>
          </div>
        </div>
      `;

      // Event Listeners for Card Actions
      const quickViewBtn = card.querySelector('.product-quickview-btn');
      quickViewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuickView(product.id);
      });

      const addBagBtn = card.querySelector('.btn-add-cart');
      addBagBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id, product.sizes[0], 1);
      });

      const wishlistBtn = card.querySelector('.btn-wishlist');
      wishlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        wishlistBtn.classList.toggle('active');
        if (wishlistBtn.classList.contains('active')) {
          showToast(`Saved "${product.name}" to wishlist.`, 'success');
        } else {
          showToast(`Removed "${product.name}" from wishlist.`);
        }
      });

      productsGrid.appendChild(card);
    });
  }

  // Filter Pill Listeners
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter || 'ALL';
      renderProducts(filter);
    });
  });

  // 7. CART DRAWER SYSTEM
  function openCart() {
    if (cartDrawerOverlay && cartDrawer) {
      cartDrawerOverlay.classList.add('active');
      cartDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawerOverlay && cartDrawer) {
      cartDrawerOverlay.classList.remove('active');
      cartDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }

  function updateCartUI() {
    if (!cartItemsContainer) return;
    
    // Calculate total count and subtotal
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (cartBadgeCount) {
      cartBadgeCount.textContent = totalCount;
      cartBadgeCount.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    if (cartSubtotalVal) {
      cartSubtotalVal.textContent = `$${subtotal.toFixed(2)}`;
    }

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1.5" style="margin: 0 auto 16px;">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p>Your shopping bag is currently empty.</p>
          <button class="btn-primary" id="btn-empty-shop" style="font-size: 0.78rem; padding: 10px 24px;">EXPLORE DROPS</button>
        </div>
      `;
      const emptyShopBtn = document.getElementById('btn-empty-shop');
      if (emptyShopBtn) {
        emptyShopBtn.addEventListener('click', () => {
          closeCart();
          document.querySelector('#new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
      return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => `
      <div class="cart-item-row" data-index="${index}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Size: <strong>${item.size}</strong></div>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn btn-qty-minus" data-id="${item.id}" data-size="${item.size}">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn btn-qty-plus" data-id="${item.id}" data-size="${item.size}">+</button>
          </div>
        </div>
        <button class="btn-remove-item" data-id="${item.id}" data-size="${item.size}" title="Remove item" aria-label="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    `).join('');

    // Attach qty and remove listeners
    cartItemsContainer.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        changeCartQty(btn.dataset.id, btn.dataset.size, -1);
      });
    });

    cartItemsContainer.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        changeCartQty(btn.dataset.id, btn.dataset.size, 1);
      });
    });

    cartItemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(btn.dataset.id, btn.dataset.size);
      });
    });
  }

  function addToCart(productId, size = 'US 9', qty = 1) {
    const product = CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        size: size,
        price: product.price,
        image: product.image,
        qty: qty
      });
    }

    updateCartUI();
    showToast(`Added "${product.name}" (${size}) to your bag.`, 'success');
    openCart();
  }

  function changeCartQty(id, size, delta) {
    const item = cart.find(i => i.id === id && i.size === size);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id, size);
    } else {
      updateCartUI();
    }
  }

  function removeFromCart(id, size) {
    const index = cart.findIndex(i => i.id === id && i.size === size);
    if (index !== -1) {
      const removed = cart.splice(index, 1)[0];
      updateCartUI();
      showToast(`Removed "${removed.name}" from your bag.`);
    }
  }

  // Checkout Button Notice
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your bag is empty! Add products first.');
        return;
      }
      showToast('Proceeding to Secure Steppers Checkout (Frontend Demonstration Mode).', 'success');
    });
  }

  // 8. QUICK VIEW MODAL
  function openQuickView(productId) {
    const product = CATALOG.find(p => p.id === productId);
    if (!product || !quickViewModal) return;

    currentModalProduct = product;
    selectedModalSize = product.sizes[0];

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalBrand.textContent = product.brand;
    modalTitle.textContent = product.name;
    modalPrice.textContent = `$${product.price}.00 USD`;
    modalDesc.textContent = product.description;

    // Render sizes
    modalSizesStrip.innerHTML = product.sizes.map(size => `
      <button class="modal-size-pill ${size === selectedModalSize ? 'active' : ''}" data-size="${size}">${size}</button>
    `).join('');

    modalSizesStrip.querySelectorAll('.modal-size-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        modalSizesStrip.querySelectorAll('.modal-size-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedModalSize = pill.dataset.size;
      });
    });

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (quickViewModal) {
      quickViewModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  if (modalAddBagBtn) {
    modalAddBagBtn.addEventListener('click', () => {
      if (!currentModalProduct) return;
      addToCart(currentModalProduct.id, selectedModalSize || currentModalProduct.sizes[0], 1);
      closeQuickView();
    });
  }

  // 9. LIVE SEARCH OVERLAY
  function openSearch() {
    if (searchOverlay) {
      searchOverlay.classList.add('active');
      searchInput.value = '';
      renderSearchResults('');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput.focus(), 100);
    }
  }

  function closeSearch() {
    if (searchOverlay) {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  function renderSearchResults(query = '') {
    if (!searchResultsGrid) return;
    const q = query.trim().toLowerCase();
    const matches = q === '' 
      ? CATALOG.slice(0, 3) 
      : CATALOG.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

    if (matches.length === 0) {
      searchResultsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 40px 0;">
          No matching footwear or streetwear found for "${query}". Try searching "Jordan", "Dunk", "Running", or "Hoodie".
        </div>
      `;
      return;
    }

    searchResultsGrid.innerHTML = matches.map(p => `
      <div class="product-card" style="background: #15151c;" data-id="${p.id}">
        <div class="product-media-wrap" style="height: 180px;">
          <img src="${p.image}" alt="${p.name}" class="product-img" style="width: 75%; height: 75%;">
        </div>
        <div class="product-info-wrap">
          <span class="product-brand-tag" style="font-size: 0.65rem;">${p.brand}</span>
          <h4 class="product-title" style="font-size: 0.95rem;">${p.name}</h4>
          <div class="product-card-footer" style="padding-top: 8px;">
            <span class="price-current" style="font-size: 1.1rem;">$${p.price}</span>
            <button class="btn-add-cart btn-search-view" data-id="${p.id}" style="padding: 6px 14px; font-size: 0.7rem;">VIEW</button>
          </div>
        </div>
      </div>
    `).join('');

    searchResultsGrid.querySelectorAll('.btn-search-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSearch();
        openQuickView(btn.dataset.id);
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // 10. NEWSLETTER FORM VALIDATION
  if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address to subscribe.');
        return;
      }

      showToast(`Welcome to the Steppers Inner Circle! Confirmation sent to ${email}.`, 'success');
      newsletterEmail.value = '';
    });
  }

  // 11. ESCAPE KEY MODAL CLOSER
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeSearch();
    }
  });

  // INITIALIZE
  renderProducts('ALL');
  updateCartUI();
});
