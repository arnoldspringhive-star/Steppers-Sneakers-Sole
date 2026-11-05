/**
 * STEPPERS SNEAKERS & SOLE — INDEX2: EDITORIAL RUNWAY ENGINE
 * Technical Collector Archive & Exhibition Slider
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. VERIFIED SNEAKER DATABASE
  // ==========================================================================
  const catalog = [
    {
      id: 'step-01',
      sku: 'STP-AJ1-BREDTOE',
      name: "Air Jordan 1 Retro High OG 'Bred Toe'",
      brand: 'Air Jordan',
      category: 'jordan',
      colorway: 'Gym Red / Black / Summit White',
      price: 220,
      originalPrice: 260,
      releaseYear: '2018',
      rarity: '98/100 Grail',
      materials: 'Full-Grain Tumbled Cowhide',
      cushioning: 'Encapsulated Air-Sole Unit',
      image: 'assets/images/sneaker-chicago.jpg',
      badge: 'OG Grail',
      sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
      desc: "The legendary 2018 mashup of the 'Bred' and 'Black Toe' colorways. Premium tumbled leather with Gym Red toe box and collar, crisp white mid-panels, black Swoosh, and the iconic Jordan Wings insignia."
    },
    {
      id: 'step-02',
      sku: 'STP-AF1-SHADOW',
      name: "Nike Air Force 1 Shadow 'Pastel Pale Ivory'",
      brand: 'Nike Sportswear',
      category: 'nike',
      colorway: 'Pale Ivory / Celestial Gold / Light Violet',
      price: 130,
      originalPrice: 155,
      releaseYear: '2020',
      rarity: '88/100 Tier-1',
      materials: 'Stacked Nappa Leather & Suede',
      cushioning: 'Elevated Foam Midsole with Air',
      image: 'assets/images/sneaker-purple.jpg',
      badge: 'Pastel Edition',
      sizes: ['6.5', '7', '7.5', '8', '8.5', '9', '10'],
      desc: "Layered deconstructed design featuring doubled eyestays, dual mudguards, stacked Swooshes in soft pastel lilac and sky blue, and the signature elevated midsole with double 'AIR' heel branding."
    },
    {
      id: 'step-03',
      sku: 'STP-AF1-REACT',
      name: "Nike Air Force 1 React 'White University Red'",
      brand: 'Nike Sportswear',
      category: 'nike',
      colorway: 'White / Black / University Red',
      price: 140,
      originalPrice: 165,
      releaseYear: '2021',
      rarity: '90/100 Tech',
      materials: 'Ripstop Mesh & Smooth Leather',
      cushioning: 'Full-Length Nike React Drop-In',
      image: 'assets/images/sneaker-cyan.jpg',
      badge: 'React Series',
      sizes: ['7.5', '8.5', '9', '9.5', '10', '10.5', '12'],
      desc: "Modern technical overhaul of the classic AF1 silhouette. Features an oversized outlined black Swoosh, translucent mesh quarter panels, responsive full-length Nike React drop-in insole, and red '-AIR' midsole detailing."
    },
    {
      id: 'step-04',
      sku: 'STP-AJ1-MIDUNION',
      name: "Air Jordan 1 Mid SE 'Red / Black Toe'",
      brand: 'Air Jordan',
      category: 'jordan',
      colorway: 'White / Black / Gym Red',
      price: 165,
      originalPrice: 190,
      releaseYear: '2020',
      rarity: '92/100 Special',
      materials: 'Smooth Box Leather & Heel Suede',
      cushioning: 'Midsole Encapsulated Air Unit',
      image: 'assets/images/sneaker-dunk.jpg',
      badge: 'Special Edition',
      sizes: ['8', '8.5', '9', '9.5', '10', '11'],
      desc: "Distinctive mid-cut silhouette drawing heavy inspiration from the famed Union LA colorblock. White leather base with black toe overlay, matching black Swoosh, red suede heel wrap, and red stamped Jordan Wings logo."
    },
    {
      id: 'step-05',
      sku: 'STP-AM90-CURRY',
      name: "Nike Air Max 90 'Curry & University Blue'",
      brand: 'Nike Air Max',
      category: 'nike',
      colorway: 'Wheat Gold / University Blue / White',
      price: 150,
      originalPrice: 180,
      releaseYear: '1990/2021',
      rarity: '93/100 Classic',
      materials: 'Curry Suede, Mesh & Molded TPU',
      cushioning: 'Visible Max Air Chamber Unit',
      image: 'assets/images/sneaker-bred.jpg',
      badge: 'Max Retro',
      sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11.5'],
      desc: "Tinker Hatfield's 1990 masterpiece styled with rich curry wheat suede overlays, breathable white mesh toe, royal University Blue TPU accents, and the unmistakable visible Max Air cushioning unit in vibrant golden yellow."
    },
    {
      id: 'step-06',
      sku: 'STP-AF1-HIGH07',
      name: "Nike Air Force 1 High '07 'White Sail'",
      brand: 'Nike Sportswear',
      category: 'nike',
      colorway: 'Summit White / Light Bone / Metallic Gold',
      price: 145,
      originalPrice: 170,
      releaseYear: '1982/2022',
      rarity: '89/100 Court',
      materials: 'Full Leather & Gold Hardware',
      cushioning: 'Air-Sole Unit with Pivot Tread',
      image: 'assets/images/sneaker-retro4.jpg',
      badge: 'High-Top Classic',
      sizes: ['8.5', '9', '9.5', '10', '10.5', '11'],
      desc: "The original 1982 basketball high-top icon. Clean crisp white leather upper, perforated toe vamp, gold metallic lace deubré, padded ankle collar with warm sail lining, and adjustable velcro ankle lock strap."
    },
    {
      id: 'step-07',
      sku: 'STP-FREE-FLYKNIT',
      name: "Nike Free RN Flyknit 'University Red'",
      brand: 'Nike Running',
      category: 'street',
      colorway: 'University Red / Team Red / White',
      price: 135,
      originalPrice: 160,
      releaseYear: '2022',
      rarity: '87/100 Runner',
      materials: 'Seamless Multi-Ply Flyknit Weave',
      cushioning: 'Auxetic Tri-Star Siped Foam',
      image: 'assets/images/sneaker-runner.jpg',
      badge: 'Flyknit Series',
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

  let promoApplied = false;
  let promoDiscount = 0.10;

  // ==========================================================================
  // 2. HERO RUNWAY EXHIBITION SLIDER
  // ==========================================================================
  let currentRunwayIndex = 0;
  let selectedHeroSize = 'US 10';

  const heroImg = document.getElementById('runway-main-shoe-img');
  const heroBadge = document.getElementById('runway-spec-badge');
  const heroCounter = document.getElementById('runway-current-step');
  const heroHeadline = document.getElementById('runway-model-headline');
  const heroColorway = document.getElementById('runway-colorway-text');
  const heroDesc = document.getElementById('runway-desc-body');
  const heroSkuVal = document.getElementById('spec-val-sku');
  const heroMatVal = document.getElementById('spec-val-materials');
  const heroCushVal = document.getElementById('spec-val-cushioning');
  const heroRarityVal = document.getElementById('spec-val-rarity');
  const heroPriceNow = document.getElementById('runway-price-now');
  const heroPriceWas = document.getElementById('runway-price-was');
  const heroSizesCluster = document.getElementById('runway-sizes-cluster');
  const heroDirectCopBtn = document.getElementById('btn-runway-direct-cop');

  const btnPrev = document.getElementById('btn-runway-prev');
  const btnNext = document.getElementById('btn-runway-next');
  const miniTrack = document.getElementById('runway-mini-track');

  function renderMiniTrack() {
    if (!miniTrack) return;
    miniTrack.innerHTML = catalog.map((item, idx) => `
      <div class="mini-track-item ${idx === currentRunwayIndex ? 'active' : ''}" data-idx="${idx}">
        <div class="mini-track-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <span class="mini-track-name">${item.name}</span>
        <span class="mini-track-price">$${item.price}</span>
      </div>
    `).join('');

    miniTrack.querySelectorAll('.mini-track-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx, 10);
        showRunwayShoe(idx);
      });
    });
  }

  function showRunwayShoe(idx) {
    if (idx < 0) idx = catalog.length - 1;
    if (idx >= catalog.length) idx = 0;
    currentRunwayIndex = idx;
    const item = catalog[idx];

    if (heroImg) {
      heroImg.style.opacity = '0';
      heroImg.style.transform = 'scale(0.96)';

      setTimeout(() => {
        heroImg.src = item.image;
        heroImg.alt = item.name;
        if (heroBadge) heroBadge.textContent = `[${item.sku} // ${item.badge}]`;
        if (heroCounter) heroCounter.textContent = `0${idx + 1}`;
        if (heroHeadline) heroHeadline.innerHTML = `${item.name.toUpperCase()} <span class="highlight-cyan">[${item.releaseYear}]</span>`;
        if (heroColorway) heroColorway.innerHTML = `<strong>COLORWAY:</strong> ${item.colorway}`;
        if (heroDesc) heroDesc.textContent = item.desc;
        if (heroSkuVal) heroSkuVal.textContent = item.sku;
        if (heroMatVal) heroMatVal.textContent = item.materials;
        if (heroCushVal) heroCushVal.textContent = item.cushioning;
        if (heroRarityVal) heroRarityVal.textContent = item.rarity;
        if (heroPriceNow) heroPriceNow.textContent = `$${item.price}`;
        if (heroPriceWas) heroPriceWas.textContent = `$${item.originalPrice}`;

        selectedHeroSize = `US ${item.sizes[2] || item.sizes[0]}`;
        if (heroSizesCluster) {
          heroSizesCluster.innerHTML = item.sizes.slice(0, 6).map((s, sIdx) => `
            <button class="btn-hero-size ${sIdx === 2 ? 'selected' : ''}" data-size="US ${s}">US ${s}</button>
          `).join('');

          heroSizesCluster.querySelectorAll('.btn-hero-size').forEach(btn => {
            btn.addEventListener('click', () => {
              heroSizesCluster.querySelectorAll('.btn-hero-size').forEach(b => b.classList.remove('selected'));
              btn.classList.add('selected');
              selectedHeroSize = btn.dataset.size;
            });
          });
        }

        heroImg.style.opacity = '1';
        heroImg.style.transform = 'scale(1)';

        // Update mini track active state
        if (miniTrack) {
          miniTrack.querySelectorAll('.mini-track-item').forEach((mi, mIdx) => {
            if (mIdx === currentRunwayIndex) {
              mi.classList.add('active');
            } else {
              mi.classList.remove('active');
            }
          });
        }
      }, 200);
    }
  }

  if (btnPrev) btnPrev.addEventListener('click', () => showRunwayShoe(currentRunwayIndex - 1));
  if (btnNext) btnNext.addEventListener('click', () => showRunwayShoe(currentRunwayIndex + 1));

  if (heroDirectCopBtn) {
    heroDirectCopBtn.addEventListener('click', () => {
      const item = catalog[currentRunwayIndex];
      addToCart(item, selectedHeroSize);
    });
  }

  renderMiniTrack();
  showRunwayShoe(0);

  // ==========================================================================
  // 3. DUAL-VIEW BROWSE ENGINE (Magazine Spread vs Collector Table)
  // ==========================================================================
  const spreadContainer = document.getElementById('lookbook-spread-container');
  const tableContainer = document.getElementById('collector-table-container');
  const tableBody = document.getElementById('archive-table-body');
  const viewBtns = document.querySelectorAll('.btn-archive-view');

  function renderLookbookSpread() {
    if (!spreadContainer) return;
    spreadContainer.innerHTML = catalog.map((item, idx) => `
      <div class="spread-row ${idx % 2 === 1 ? 'reverse-layout' : ''}">
        <div class="spread-media-frame">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="spread-info-col">
          <span class="spread-idx-tag">[ARCHIVE ENTRY 0${idx + 1} // ${item.sku}]</span>
          <h3 class="spread-shoe-title">${item.name}</h3>
          <div class="spread-colorway-badge">${item.colorway}</div>
          <p class="spread-desc-body">${item.desc}</p>
          <div class="spread-meta-strip">
            <span class="spread-meta-item">MATERIALS: <strong>${item.materials}</strong></span>
            <span class="spread-meta-item">RARITY: <strong>${item.rarity}</strong></span>
            <span class="spread-meta-item">YEAR: <strong>${item.releaseYear}</strong></span>
          </div>
          <div class="spread-action-row">
            <span class="spread-price-huge">$${item.price}</span>
            <button class="btn-hero-cop-direct btn-spread-cop" data-id="${item.id}" style="padding: 12px 24px;">
              <span>Acquire Grail</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    spreadContainer.querySelectorAll('.btn-spread-cop').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const prod = catalog.find(p => p.id === id);
        addToCart(prod, 'US 10');
      });
    });
  }

  function renderCollectorTable() {
    if (!tableBody) return;
    tableBody.innerHTML = catalog.map(item => `
      <tr>
        <td>
          <img src="${item.image}" alt="${item.name}" class="table-thumb">
        </td>
        <td class="table-sku">${item.sku}</td>
        <td>
          <span class="table-name">${item.name}</span>
          <div style="font-size:0.72rem; color:var(--c-text-300);">${item.colorway}</div>
        </td>
        <td>${item.brand}</td>
        <td>${item.releaseYear}</td>
        <td><span style="color:var(--c-cyan);">${item.rarity}</span></td>
        <td>10/10 Deadstock (RFID)</td>
        <td class="table-price">$${item.price}</td>
        <td>
          <button class="btn-table-cop" data-id="${item.id}">Instant Cop</button>
        </td>
      </tr>
    `).join('');

    tableBody.querySelectorAll('.btn-table-cop').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const prod = catalog.find(p => p.id === id);
        addToCart(prod, 'US 10');
      });
    });
  }

  renderLookbookSpread();
  renderCollectorTable();

  // View toggle handler
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const v = btn.dataset.view;

      if (v === 'spread') {
        if (spreadContainer) spreadContainer.style.display = 'flex';
        if (tableContainer) tableContainer.classList.remove('active');
      } else {
        if (spreadContainer) spreadContainer.style.display = 'none';
        if (tableContainer) tableContainer.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // 4. SNEAKER ANATOMY DISSECTION DECK
  // ==========================================================================
  const anatomyTabs = document.querySelectorAll('.btn-anatomy-tab');
  const anatomyImg = document.getElementById('anatomy-display-img');
  const anatomyTitle = document.getElementById('anatomy-spec-title');
  const anatomyDesc = document.getElementById('anatomy-spec-desc');

  const anatomyData = {
    upper: {
      title: "LAYER 01: FULL-GRAIN PREMIUM VAMP & ANKLE COLLAR",
      desc: "Anatomically constructed using 1.4mm premium tumbled bovine leather. Padded ankle foam collar ensures lockdown stability during aggressive pavement movement, detailed with high-frequency stitch gauge precision.",
      image: "assets/images/sneaker-chicago.jpg"
    },
    cushion: {
      title: "LAYER 02: RESPONSIVE AIR-SOLE & REACT DROP-IN CORE",
      desc: "Encapsulated polyurethane chambers pressurized with inert gas or dual-density Nike React elastomeric foam. Absorbs repetitive high-impact shock across asphalt and concrete while delivering instantaneous energy rebound.",
      image: "assets/images/sneaker-cyan.jpg"
    },
    outsole: {
      title: "LAYER 03: PIVOT-CIRCLE VULCANIZED RUBBER TREAD",
      desc: "Hard-wearing solid gum and synthetic rubber compounds engineered with deep radial pivot flexion grooves. Maximizes rotational grip and pavement traction while preventing premature heel drag wear.",
      image: "assets/images/sneaker-retro4.jpg"
    },
    rfid: {
      title: "LAYER 04: STEPPERS CRYPTOGRAPHIC RFID SMART NFC CHIP",
      desc: "Embedded in the woven tongue label and smart hang-tag. Stores a 256-bit cryptographic signature linked to the Steppers decentralized vault ledger. Guarantees 100% authenticity verifiable with any smartphone NFC tap.",
      image: "assets/images/sneaker-dunk.jpg"
    }
  };

  anatomyTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      anatomyTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.layer;
      const data = anatomyData[key];

      if (data && anatomyTitle && anatomyDesc && anatomyImg) {
        anatomyImg.style.opacity = '0';
        setTimeout(() => {
          anatomyImg.src = data.image;
          anatomyTitle.textContent = data.title;
          anatomyDesc.textContent = data.desc;
          anatomyImg.style.opacity = '1';
        }, 150);
      }
    });
  });

  // ==========================================================================
  // 5. SHOPPING BAG DRAWER & PROMO CALCULATION
  // ==========================================================================
  const cartOverlay = document.getElementById('runway-cart-overlay');
  const cartOpenBtns = document.querySelectorAll('.cart-open-btn');
  const cartCloseBtn = document.getElementById('runway-cart-close');
  const cartItemsList = document.getElementById('runway-cart-items-list');
  const cartCountBubbles = document.querySelectorAll('.cart-count-bubble');
  const cartSubtotalEl = document.getElementById('runway-cart-subtotal');
  const freeShippingFill = document.getElementById('runway-shipping-fill');
  const freeShippingText = document.getElementById('runway-shipping-text');
  const promoInput = document.getElementById('runway-promo-input');
  const promoApplyBtn = document.getElementById('btn-runway-promo-apply');

  function openCart() {
    if (cartOverlay) cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartOpenBtns.forEach(btn => btn.addEventListener('click', openCart));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBubbles.forEach(b => {
      b.textContent = totalCount;
    });

    if (cartItemsList) {
      if (cart.length === 0) {
        cartItemsList.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; font-family: var(--f-mono); color: var(--c-text-300);">
            <p style="color: #fff; font-size: 1rem; margin-bottom: 8px;">[VAULT BAG EMPTY]</p>
            <p style="font-size: 0.8rem;">Select an authenticated drop from the exhibition.</p>
          </div>
        `;
      } else {
        cartItemsList.innerHTML = cart.map(item => `
          <div class="cart-item-card" data-id="${item.id}" data-size="${item.size}">
            <div class="cart-item-thumb">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-size-line">SIZE: ${item.size} • 100% AUTHENTIC</span>
              <div class="cart-item-qty-row">
                <div class="cart-qty-counter">
                  <button class="btn-qty btn-minus" data-id="${item.id}" data-size="${item.size}">−</button>
                  <span>${item.quantity}</span>
                  <button class="btn-qty btn-plus" data-id="${item.id}" data-size="${item.size}">+</button>
                </div>
                <span class="cart-item-price-tag">$${item.price * item.quantity}</span>
              </div>
            </div>
            <button class="btn-cart-remove-item" data-id="${item.id}" data-size="${item.size}">✕</button>
          </div>
        `).join('');
      }
    }

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (promoApplied) {
      subtotal = Math.round(subtotal * (1 - promoDiscount));
    }
    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `$${subtotal}`;
    }

    const freeThreshold = 250;
    const rawTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (freeShippingFill && freeShippingText) {
      if (rawTotal >= freeThreshold) {
        freeShippingFill.style.width = '100%';
        freeShippingText.innerHTML = `✓ UNLOCKED: Free Priority Courier Shipping!`;
      } else {
        const remaining = freeThreshold - rawTotal;
        const pct = Math.min(100, Math.round((rawTotal / freeThreshold) * 100));
        freeShippingFill.style.width = `${pct}%`;
        freeShippingText.innerHTML = `Add <strong style="color:var(--c-magenta);">$${remaining}</strong> more for Free Courier`;
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
    showToast(`Acquired ${prod.name} (${size})!`);
    openCart();
  }

  if (cartItemsList) {
    cartItemsList.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const size = e.target.dataset.size;

      if (e.target.classList.contains('btn-plus')) {
        const item = cart.find(i => i.id === id && i.size === size);
        if (item) item.quantity += 1;
        updateCartUI();
      }

      if (e.target.classList.contains('btn-minus')) {
        const item = cart.find(i => i.id === id && i.size === size);
        if (item) {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            cart = cart.filter(i => !(i.id === id && i.size === size));
          }
          updateCartUI();
        }
      }

      if (e.target.classList.contains('btn-cart-remove-item')) {
        cart = cart.filter(i => !(i.id === id && i.size === size));
        updateCartUI();
      }
    });
  }

  // Promo Code
  if (promoApplyBtn && promoInput) {
    promoApplyBtn.addEventListener('click', () => {
      const val = promoInput.value.trim().toUpperCase();
      if (val === 'STEPPERS10') {
        promoApplied = true;
        updateCartUI();
        showToast('Code STEPPERS10 applied: 10% Discount Unlocked!');
      } else {
        showToast('Invalid code. Try STEPPERS10.');
      }
    });
  }

  // Lab Care buttons
  const careAcquireBtns = document.querySelectorAll('.btn-care-acquire');
  careAcquireBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      const img = btn.dataset.img;
      const item = {
        id: 'care-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        name: name,
        price: price,
        size: 'One Size',
        image: img,
        quantity: 1
      };
      addToCart(item, 'One Size');
    });
  });

  // ==========================================================================
  // 6. TOAST NOTIFICATION
  // ==========================================================================
  let toastTimer = null;
  function showToast(msg) {
    let t = document.getElementById('runway-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'runway-toast';
      t.className = 'runway-toast';
      document.body.appendChild(t);
    }
    t.innerHTML = `<span>⚡</span><span>${msg}</span>`;
    t.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.classList.remove('show');
    }, 3200);
  }
  // Expose globally for inline event handlers
  window.showToast = showToast;

  // ==========================================================================
  // 7. FILMSTRIP HORIZONTAL SCROLL CONTROLS
  // ==========================================================================
  const filmstripRow = document.getElementById('filmstrip-scroll-row');
  const btnFilmPrev = document.getElementById('btn-filmstrip-prev');
  const btnFilmNext = document.getElementById('btn-filmstrip-next');

  if (btnFilmPrev && filmstripRow) {
    btnFilmPrev.addEventListener('click', () => {
      filmstripRow.scrollBy({ left: -400, behavior: 'smooth' });
    });
  }

  if (btnFilmNext && filmstripRow) {
    btnFilmNext.addEventListener('click', () => {
      filmstripRow.scrollBy({ left: 400, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 8. MOBILE NAV DRAWER TOGGLE
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileClose = document.getElementById('mobile-nav-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  // Close drawer on link click
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Initial UI refresh
  updateCartUI();
});
