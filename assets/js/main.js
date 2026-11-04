/**
 * STEPPERS SNEAKERS & SOLE - CORE JAVASCRIPT
 * Modern Streetwear E-Commerce Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DATA STORE (Products & Cart)
  // ==========================================
  const products = [
    {
      id: 'step-01',
      brand: 'Air Jordan',
      name: "Air Jordan 1 Retro High OG 'Bred Toe'",
      category: 'jordan',
      colorway: 'Gym Red / Black / Summit White',
      price: 220,
      originalPrice: 260,
      image: 'assets/images/sneaker-chicago.jpg',
      badge: { text: 'Iconic Grail', type: 'tag-limited' },
      sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
      desc: "The legendary 2018 mashup of the 'Bred' and 'Black Toe' colorways. Premium tumbled leather with Gym Red toe box and collar, crisp white mid-panels, black Swoosh, and the iconic Jordan Wings insignia."
    },
    {
      id: 'step-02',
      brand: 'Nike Sportswear',
      name: "Nike Air Force 1 Shadow 'Pastel Pale Ivory'",
      category: 'nike',
      colorway: 'Pale Ivory / Celestial Gold / Light Violet',
      price: 130,
      originalPrice: 155,
      image: 'assets/images/sneaker-purple.jpg',
      badge: { text: 'Pastel Edition', type: 'tag-exclusive' },
      sizes: ['6.5', '7', '7.5', '8', '8.5', '9', '10'],
      desc: "Layered deconstructed design featuring doubled eyestays, dual mudguards, stacked Swooshes in soft pastel lilac and sky blue, and the signature elevated midsole with double 'AIR' heel branding."
    },
    {
      id: 'step-03',
      brand: 'Nike Sportswear',
      name: "Nike Air Force 1 React 'White University Red'",
      category: 'nike',
      colorway: 'White / Black / University Red',
      price: 140,
      originalPrice: 165,
      image: 'assets/images/sneaker-cyan.jpg',
      badge: { text: 'React Foam', type: 'tag-stock' },
      sizes: ['7.5', '8.5', '9', '9.5', '10', '10.5', '12'],
      desc: "Modern technical overhaul of the classic AF1 silhouette. Features an oversized outlined black Swoosh, translucent mesh quarter panels, responsive full-length Nike React drop-in insole, and red '-AIR' midsole detailing."
    },
    {
      id: 'step-04',
      brand: 'Air Jordan',
      name: "Air Jordan 1 Mid SE 'Red / Black Toe'",
      category: 'jordan',
      colorway: 'White / Black / Gym Red',
      price: 165,
      originalPrice: 190,
      image: 'assets/images/sneaker-dunk.jpg',
      badge: { text: 'Special Edition', type: 'tag-stock' },
      sizes: ['8', '8.5', '9', '9.5', '10', '11'],
      desc: "Distinctive mid-cut silhouette drawing heavy inspiration from the famed Union LA colorblock. White leather base with black toe overlay, matching black Swoosh, red suede heel wrap, and red stamped Jordan Wings logo."
    },
    {
      id: 'step-05',
      brand: 'Nike Air Max',
      name: "Nike Air Max 90 'Curry & University Blue'",
      category: 'nike',
      colorway: 'Wheat Gold / University Blue / White',
      price: 150,
      originalPrice: 180,
      image: 'assets/images/sneaker-bred.jpg',
      badge: { text: 'Retro Max', type: 'tag-limited' },
      sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11.5'],
      desc: "Tinker Hatfield's 1990 masterpiece styled with rich curry wheat suede overlays, breathable white mesh toe, royal University Blue TPU accents, and the unmistakable visible Max Air cushioning unit in vibrant golden yellow."
    },
    {
      id: 'step-06',
      brand: 'Nike Sportswear',
      name: "Nike Air Force 1 High '07 'White Sail'",
      category: 'nike',
      colorway: 'Summit White / Light Bone / Metallic Gold',
      price: 145,
      originalPrice: 170,
      image: 'assets/images/sneaker-retro4.jpg',
      badge: { text: 'High-Top Classic', type: 'tag-exclusive' },
      sizes: ['8.5', '9', '9.5', '10', '10.5', '11'],
      desc: "The original 1982 basketball high-top icon. Clean crisp white leather upper, perforated toe vamp, gold metallic lace deubré, padded ankle collar with warm sail lining, and adjustable velcro ankle lock strap."
    },
    {
      id: 'step-07',
      brand: 'Converse',
      name: "Converse Chuck Taylor All Star High Top 'Red'",
      category: 'street',
      colorway: 'Vibrant Red / Egret / Black',
      price: 85,
      originalPrice: 100,
      image: 'assets/images/sneaker-travis.jpg',
      badge: { text: 'Street Heritage', type: 'tag-stock' },
      sizes: ['7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
      desc: "The eternal street culture staple spanning music, skateboarding, and underground fashion. Heavyweight crimson red canvas upper, contrast white stitching, vulcanized rubber outsole, and the iconic star ankle emblem."
    },
    {
      id: 'step-08',
      brand: 'Nike Running',
      name: "Nike Free RN Flyknit 'University Red'",
      category: 'street',
      colorway: 'University Red / Team Red / White',
      price: 135,
      originalPrice: 160,
      image: 'assets/images/sneaker-runner.jpg',
      badge: { text: 'Flyknit Series', type: 'tag-stock' },
      sizes: ['8', '8.5', '9', '9.5', '10', '11', '12'],
      desc: "Engineered ultra-flexible runner built with featherweight heathered red Flyknit threading, supportive integrated Flywire cables, contrast white lateral Swoosh, and a dynamic tri-star auxetic Nike Free outsole."
    }
  ];

  let cart = [
    {
      id: 'step-01',
      name: "Air Jordan 1 Retro High OG 'Bred Toe'",
      price: 220,
      size: 'US 10',
      image: 'assets/images/sneaker-chicago.jpg',
      quantity: 1
    }
  ];

  let wishlist = new Set();
  let promoApplied = false;
  let promoDiscount = 0.10; // 10% for STEPPERS10

  // ==========================================
  // 2. STICKY HEADER & SCROLL BEHAVIOR
  // ==========================================
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 3. LIVE DROP COUNTDOWN TIMER
  // ==========================================
  function initCountdown() {
    // Target next drop date: 2 days, 14 hours, 38 mins from right now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(targetDate.getHours() + 14);
    targetDate.setMinutes(targetDate.getMinutes() + 38);
    targetDate.setSeconds(targetDate.getSeconds() + 45);

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    function update() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(minutes).padStart(2, '0');
      secsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }
  initCountdown();

  // ==========================================
  // 4. RENDER SNEAKER CATALOG
  // ==========================================
  const productsGrid = document.getElementById('products-grid');

  function renderProducts(filter = 'all') {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? products 
      : products.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'sneaker-card';
      card.dataset.id = p.id;

      const isWishlisted = wishlist.has(p.id);

      card.innerHTML = `
        <div class="card-top-badges">
          <span class="status-tag ${p.badge.type}">${p.badge.text}</span>
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="Save to wishlist">
            <svg width="18" height="18" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
            </svg>
          </button>
        </div>

        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
          <div class="card-quick-overlay">
            <button class="btn-quick-view" data-id="${p.id}">Quick View</button>
          </div>
        </div>

        <span class="card-brand">${p.brand}</span>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-colorway">${p.colorway}</p>

        <div class="size-selector-row">
          ${p.sizes.slice(0, 5).map((s, idx) => `
            <button class="size-pill ${idx === 2 ? 'selected' : ''}" data-size="US ${s}">US ${s}</button>
          `).join('')}
        </div>

        <div class="card-footer-row">
          <div class="card-price-wrap">
            <span class="price-current">$${p.price}</span>
            <span class="price-original">$${p.originalPrice}</span>
          </div>
          <button class="btn-card-add" data-id="${p.id}">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            Add to Bag
          </button>
        </div>
      `;

      productsGrid.appendChild(card);
    });
  }
  renderProducts();

  // ==========================================
  // 5. FILTER TABS HANDLER
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      renderProducts(cat);
    });
  });

  // Size pill selection handler on product grid
  if (productsGrid) {
    productsGrid.addEventListener('click', (e) => {
      const pill = e.target.closest('.size-pill');
      if (pill) {
        const parent = pill.closest('.size-selector-row');
        parent.querySelectorAll('.size-pill').forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
      }

      // Add to bag click
      const addBtn = e.target.closest('.btn-card-add');
      if (addBtn) {
        const id = addBtn.dataset.id;
        const prod = products.find(p => p.id === id);
        const card = addBtn.closest('.sneaker-card');
        const selectedSize = card.querySelector('.size-pill.selected')?.dataset.size || 'US 10';
        addToCart(prod, selectedSize);
      }

      // Quick View click
      const qvBtn = e.target.closest('.btn-quick-view');
      if (qvBtn) {
        const id = qvBtn.dataset.id;
        const prod = products.find(p => p.id === id);
        openQuickView(prod);
      }

      // Wishlist toggle
      const wishBtn = e.target.closest('.wishlist-btn');
      if (wishBtn) {
        const id = wishBtn.dataset.id;
        if (wishlist.has(id)) {
          wishlist.delete(id);
          wishBtn.classList.remove('active');
          wishBtn.querySelector('svg').setAttribute('fill', 'none');
          showToast('Removed from Street Grails wishlist');
        } else {
          wishlist.add(id);
          wishBtn.classList.add('active');
          wishBtn.querySelector('svg').setAttribute('fill', 'currentColor');
          showToast('Saved to Street Grails wishlist 🔥');
        }
        updateWishlistCount();
      }
    });
  }

  // ==========================================
  // 6. WISHLIST BADGE COUNTER
  // ==========================================
  function updateWishlistCount() {
    const badge = document.getElementById('wishlist-count-badge');
    if (badge) {
      badge.textContent = wishlist.size;
      badge.style.display = wishlist.size > 0 ? 'flex' : 'none';
    }
  }

  // ==========================================
  // 7. CART DRAWER & CART MANAGEMENT
  // ==========================================
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const shippingMeterFill = document.getElementById('shipping-meter-fill');
  const shippingMeterText = document.getElementById('shipping-meter-text');

  function openCart() {
    if (cartOverlay) cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartToggleBtns.forEach(btn => btn.addEventListener('click', openCart));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  function updateCartUI() {
    // Update count badges
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadges.forEach(b => {
      b.textContent = totalItems;
      b.style.display = totalItems > 0 ? 'flex' : 'none';
    });

    // Render items
    if (cartItemsList) {
      if (cart.length === 0) {
        cartItemsList.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
            <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 16px; opacity: 0.5;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
            </svg>
            <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 8px;">Your Bag is Empty</h4>
            <p style="font-size: 0.85rem;">Discover this week's limited graffiti drops and cop your pair.</p>
          </div>
        `;
      } else {
        cartItemsList.innerHTML = cart.map(item => `
          <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
            <div class="cart-item-thumb">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
              <span class="cart-item-title">${item.name}</span>
              <span class="cart-item-variant">Size: ${item.size} • 100% Authentic</span>
              <div class="cart-item-bottom">
                <div class="qty-counter">
                  <button class="qty-btn btn-qty-minus" data-id="${item.id}" data-size="${item.size}">−</button>
                  <span class="qty-val">${item.quantity}</span>
                  <button class="qty-btn btn-qty-plus" data-id="${item.id}" data-size="${item.size}">+</button>
                </div>
                <span class="cart-item-price">$${item.price * item.quantity}</span>
              </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}" data-size="${item.size}" title="Remove Item">✕</button>
          </div>
        `).join('');
      }
    }

    // Subtotal calculation
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (promoApplied) {
      subtotal = Math.round(subtotal * (1 - promoDiscount));
    }
    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `$${subtotal}`;
    }

    // Free shipping threshold ($250)
    const freeShippingThreshold = 250;
    const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (shippingMeterFill && shippingMeterText) {
      if (rawSubtotal >= freeShippingThreshold) {
        shippingMeterFill.style.width = '100%';
        shippingMeterText.innerHTML = `🎉 <span style="color: #4ade80; font-weight:700;">UNLOCKED:</span> Free Priority Courier Worldwide!`;
      } else {
        const remaining = freeShippingThreshold - rawSubtotal;
        const pct = Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100));
        shippingMeterFill.style.width = `${pct}%`;
        shippingMeterText.innerHTML = `Add <span style="color: var(--accent-pink); font-weight:700;">$${remaining}</span> more for FREE Express Shipping!`;
      }
    }
  }

  function addToCart(prod, size) {
    const existing = cart.find(i => i.id === prod.id && i.size === size);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        size: size,
        image: prod.image,
        quantity: 1
      });
    }
    updateCartUI();
    showToast(`Added ${prod.name} (${size}) to Bag!`);
    openCart();
  }

  // Cart item events (quantity & remove)
  if (cartItemsList) {
    cartItemsList.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const size = e.target.dataset.size;
      if (!id || !size) return;

      const item = cart.find(i => i.id === id && i.size === size);
      if (!item) return;

      if (e.target.classList.contains('btn-qty-plus')) {
        item.quantity += 1;
        updateCartUI();
      } else if (e.target.classList.contains('btn-qty-minus')) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          cart = cart.filter(i => !(i.id === id && i.size === size));
        }
        updateCartUI();
      } else if (e.target.classList.contains('cart-item-remove')) {
        cart = cart.filter(i => !(i.id === id && i.size === size));
        updateCartUI();
        showToast('Item removed from Bag');
      }
    });
  }

  // Promo code in cart
  const promoInput = document.getElementById('cart-promo-input');
  const promoBtn = document.getElementById('cart-promo-btn');
  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'STEPPERS10') {
        promoApplied = true;
        updateCartUI();
        showToast('🔥 Code STEPPERS10 applied! 10% OFF discount added.');
        promoInput.disabled = true;
        promoBtn.textContent = 'APPLIED';
        promoBtn.style.background = '#22c55e';
      } else {
        showToast('Invalid code. Try "STEPPERS10" for 10% off.');
      }
    });
  }

  updateCartUI();

  // ==========================================
  // 8. QUICK VIEW MODAL
  // ==========================================
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-main-img');
  const modalBrand = document.getElementById('modal-brand');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSizesRow = document.getElementById('modal-sizes-row');
  const modalAddBtn = document.getElementById('modal-add-btn');

  let currentModalProduct = null;
  let currentModalSize = 'US 10';

  function openQuickView(prod) {
    if (!modalBackdrop) return;
    currentModalProduct = prod;

    modalImg.src = prod.image;
    modalImg.alt = prod.name;
    modalBrand.textContent = prod.brand;
    modalTitle.textContent = prod.name;
    modalPrice.textContent = `$${prod.price}`;
    modalDesc.textContent = prod.desc;

    currentModalSize = `US ${prod.sizes[0]}`;

    modalSizesRow.innerHTML = prod.sizes.map((s, idx) => `
      <button class="size-pill ${idx === 0 ? 'selected' : ''}" data-size="US ${s}">US ${s}</button>
    `).join('');

    modalSizesRow.querySelectorAll('.size-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        modalSizesRow.querySelectorAll('.size-pill').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentModalSize = btn.dataset.size;
      });
    });

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (modalBackdrop) modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeQuickView();
    });
  }

  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if (currentModalProduct) {
        addToCart(currentModalProduct, currentModalSize);
        closeQuickView();
      }
    });
  }

  // ==========================================
  // 9. HERO SNEAKER INTERACTIVE COLORWAY SWITCHER
  // ==========================================
  const heroColorPills = document.querySelectorAll('.hero-color-pill');
  const heroSneakerImg = document.getElementById('hero-sneaker-display');
  const heroModelTitle = document.getElementById('hero-model-title');
  const heroColorwayTag = document.getElementById('hero-colorway-tag');
  const heroAddBtn = document.getElementById('hero-add-to-bag');

  const heroVariants = {
    'bred-toe': {
      name: "Air Jordan 1 Retro High OG 'Bred Toe'",
      colorway: "Gym Red / Black / Summit White (Logo High-Top)",
      image: "assets/images/sneaker-chicago.jpg",
      price: 220,
      prodId: "step-01"
    },
    'af1-shadow': {
      name: "Nike Air Force 1 Shadow 'Pastel Pale Ivory'",
      colorway: "Pale Ivory / Celestial Gold / Light Violet",
      image: "assets/images/sneaker-purple.jpg",
      price: 130,
      prodId: "step-02"
    },
    'af1-react': {
      name: "Nike Air Force 1 React 'White University Red'",
      colorway: "White / Black / University Red",
      image: "assets/images/sneaker-cyan.jpg",
      price: 140,
      prodId: "step-03"
    },
    'am90-curry': {
      name: "Nike Air Max 90 'Curry & University Blue'",
      colorway: "Wheat Gold / University Blue / White",
      image: "assets/images/sneaker-bred.jpg",
      price: 150,
      prodId: "step-05"
    }
  };

  heroColorPills.forEach(pill => {
    pill.addEventListener('click', () => {
      heroColorPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const key = pill.dataset.variant;
      const v = heroVariants[key];
      if (v && heroSneakerImg) {
        heroSneakerImg.style.opacity = '0';
        setTimeout(() => {
          heroSneakerImg.src = v.image;
          heroSneakerImg.alt = v.name;
          heroModelTitle.textContent = v.name;
          heroColorwayTag.innerHTML = `
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--accent-pink);"></span>
            ${v.colorway}
          `;
          heroSneakerImg.style.opacity = '1';
        }, 150);
      }
    });
  });

  if (heroAddBtn) {
    heroAddBtn.addEventListener('click', () => {
      const activePill = document.querySelector('.hero-color-pill.active');
      const key = activePill ? activePill.dataset.variant : 'bred-toe';
      const variant = heroVariants[key];
      const prod = products.find(p => p.id === variant.prodId) || products[0];
      addToCart(prod, 'US 10');
    });
  }

  // ==========================================
  // 10. SOLE LAB & CARE ADD TO CART
  // ==========================================
  const careAddBtns = document.querySelectorAll('.btn-care-add');
  careAddBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      const img = btn.dataset.img;
      const item = {
        id: 'care-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        name: name,
        price: price,
        size: 'One Size / Kit',
        image: img,
        quantity: 1
      };
      const existing = cart.find(i => i.id === item.id);
      if (existing) existing.quantity += 1;
      else cart.push(item);

      updateCartUI();
      showToast(`Added ${name} to Bag!`);
      openCart();
    });
  });

  // ==========================================
  // 11. NEWSLETTER & VIP ACCESS FORM
  // ==========================================
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`🎉 You're on the VIP Drop list! Welcome to the Doghouse Inner Circle.`);
        input.value = '';
      }
    });
  }

  // ==========================================
  // 12. TOAST NOTIFICATION UTILITY
  // ==========================================
  let toastTimer = null;
  function showToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'toast-notice';
      toast.innerHTML = `
        <span class="toast-icon">⚡</span>
        <span class="toast-text">${message}</span>
      `;
      document.body.appendChild(toast);
    } else {
      toast.querySelector('.toast-text').textContent = message;
    }

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // ==========================================
  // 13. MOBILE MENU TOGGLE
  // ==========================================
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = '';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.flexDirection = 'column';
        navMenu.style.background = '#09090e';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid var(--border-pink)';
      }
    });
  }
});

