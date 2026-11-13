/**
 * STEPPERS SNEAKERS & SOLE — INDEX 3 JAVASCRIPT
 * Exact architectural replica of Grandeur Style (grandeurstyle.com)
 * Features: Hotspot "Shop The Look", Cart Drawer, Quick View Modal, Live Search, Toast Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. HERO VIDEO AUTOPLAY GUARANTEE
  const heroVid = document.querySelector('.hero-video');
  if (heroVid) {
    heroVid.muted = true;
    heroVid.defaultMuted = true;
    heroVid.setAttribute('playsinline', '');
    heroVid.setAttribute('muted', '');
    const triggerPlay = () => {
      const p = heroVid.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    };
    triggerPlay();
    ['click', 'touchstart', 'scroll', 'mousemove'].forEach(evt => {
      window.addEventListener(evt, triggerPlay, { once: true, passive: true });
    });
  }

  // 1. PRODUCT CATALOG DATA
  const CATALOG = [
    {
      id: 'step-01',
      name: "Air Jordan 1 Retro High OG 'Chicago'",
      brand: 'JORDAN BRAND',
      price: 180,
      badge: 'NEW ARRIVAL',
      badgeClass: '',
      image: 'assets/images/aj1-chicago-profile.png',
      hoverImage: 'assets/images/aj1-chicago-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      description: "The timeless 1985 silhouette in its truest archival form. Premium Varsity Red, White, and Black Nappa leather upper with encapsulated Nike Air cushioning."
    },
    {
      id: 'step-02',
      name: "Nike Air Force 1 Shadow 'Pastel Pale Ivory'",
      brand: 'NIKE SPORTSWEAR',
      price: 130,
      badge: null,
      badgeClass: '',
      image: 'assets/images/af1-pastel-profile.png',
      hoverImage: 'assets/images/af1-pastel-hover.png',
      sizes: ['US 6.5', 'US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9'],
      description: "Deconstructed layered pastels with dual eyestays, double mudguards, and mirrored heel branding over an elevated foam midsole."
    },
    {
      id: 'step-03',
      name: "Air Jordan 4 Retro 'Cyan Cement'",
      brand: 'JORDAN BRAND',
      price: 210,
      badge: 'LIMITED GRAIL',
      badgeClass: '',
      image: 'assets/images/cyan-profile.png',
      hoverImage: 'assets/images/cyan-hover.png',
      sizes: ['US 8.5', 'US 9', 'US 10', 'US 10.5', 'US 12'],
      description: "Stark white premium tumbled leather upper paired with vibrant electric cyan accents, speckled eyelet wings, and responsive air cushioning."
    },
    {
      id: 'step-04',
      name: "Air Jordan 1 Mid SE 'Red / Black Toe'",
      brand: 'JORDAN BRAND',
      price: 135,
      badge: null,
      badgeClass: '',
      image: 'assets/images/blacktoe-profile.png',
      hoverImage: 'assets/images/blacktoe-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5'],
      description: "Crisp white quarter panel flanked by black nubuck overlays and gym red heel counter, finished with embroidered wings insignia."
    },
    // Staff Picks
    {
      id: 'step-05',
      name: "Air Jordan 1 Retro High 'Bred Banned'",
      brand: 'JORDAN BRAND',
      price: 190,
      badge: null,
      badgeClass: '',
      image: 'assets/images/bred-profile.png',
      hoverImage: 'assets/images/bred-hover.png',
      sizes: ['US 8', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      description: "The silhouette that started the revolution. Iconic black and varsity red colorway with premium tumbled leather and archival nylon tongue."
    },
    {
      id: 'step-06',
      name: "Nike Free RN Flyknit 'University Red'",
      brand: 'NIKE RUNNING',
      price: 140,
      badge: null,
      badgeClass: '',
      image: 'assets/images/free-red-profile.png',
      hoverImage: 'assets/images/free-red-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 10', 'US 11'],
      description: "Ultra-breathable seamless Flyknit woven upper in bold University Red, equipped with an auxetic tri-star outsole that expands and contracts naturally."
    },
    {
      id: 'step-07',
      name: "Nike Air Force 1 High '07 'White Sail'",
      brand: 'NIKE SPORTSWEAR',
      price: 145,
      badge: 'SOLD OUT',
      badgeClass: 'sold-out',
      image: 'assets/images/af1-sail-profile.png',
      hoverImage: 'assets/images/af1-sail-hover.png',
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      description: "The classic 1982 hardwood high-top featuring summit white leather, metallic gold deubré, padded ankle collar, and secure velcro lock strap."
    },
    {
      id: 'step-08',
      name: "Steppers Heavyweight 480GSM Drip Hoodie",
      brand: 'STEPPERS ATELIER',
      price: 120,
      badge: null,
      badgeClass: '',
      image: 'assets/images/hoodie-front.png',
      hoverImage: 'assets/images/hoodie-back.png',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: "Custom milled 480GSM French terry cotton hoodie in pitch black, engineered with double-lined crossover hood and tonal high-density Steppers monogram."
    },
    {
      id: 'step-09',
      name: "Air Jordan 4 Retro 'Black Cat'",
      brand: 'JORDAN BRAND',
      price: 310,
      badge: 'GRAIL VAULT',
      badgeClass: '',
      image: 'assets/images/aj4-blackcat-profile.png',
      hoverImage: 'assets/images/aj4-blackcat-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      description: "Triple black monochromatic luxury with matte deep charcoal nubuck upper, molded TPU wings, and encapsulated Air-Sole cushioning."
    },
    {
      id: 'step-10',
      name: "Nike Dunk Low Retro 'Panda'",
      brand: 'NIKE SPORTSWEAR',
      price: 115,
      badge: 'RESTOCK',
      badgeClass: '',
      image: 'assets/images/dunk-panda-profile.png',
      hoverImage: 'assets/images/dunk-panda-hover.png',
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      description: "Clean two-tone black and white leather low-top with contrasting overlays and padded collar."
    },
    {
      id: 'step-11',
      name: "Air Jordan 3 Retro 'White Cement Reimagined'",
      brand: 'JORDAN BRAND',
      price: 210,
      badge: 'OG ARCHIVE',
      badgeClass: '',
      image: 'assets/images/aj3-cement-profile.png',
      hoverImage: 'assets/images/aj3-cement-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 10', 'US 10.5', 'US 11', 'US 12'],
      description: "Archival 1988 silhouette with crisp summit white tumbled leather, pre-aged vintage sail midsole, and iconic elephant print overlays."
    },
    {
      id: 'step-12',
      name: "Travis Scott x Air Jordan 1 Low OG 'Reverse Mocha'",
      brand: 'JORDAN BRAND',
      price: 350,
      badge: 'LIMITED GRAIL',
      badgeClass: '',
      image: 'assets/images/travis-mocha-profile.png',
      hoverImage: 'assets/images/travis-mocha-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5'],
      description: "Signature oversized reverse cream Swoosh, rich dark mocha nubuck base, crisp sail leather overlays, and red Cactus Jack accents."
    },
    {
      id: 'step-13',
      name: "Air Jordan 1 Retro High OG 'Lost & Found'",
      brand: 'JORDAN BRAND',
      price: 240,
      badge: 'VINTAGE 1985',
      badgeClass: '',
      image: 'assets/images/aj1-lostfound-profile.png',
      hoverImage: 'assets/images/aj1-lostfound-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
      description: "Archival 1985 Chicago high-top aesthetic reimagined with cracked black leather collar, vintage sail leather quarter panels, pre-aged off-white midsole, and iconic varsity red leather overlays."
    },
    {
      id: 'step-14',
      name: "Nike Dunk Low 'Grey Fog'",
      brand: 'NIKE SPORTSWEAR',
      price: 125,
      badge: 'NEW ARRIVAL',
      badgeClass: '',
      image: 'assets/images/dunk-greyfog-profile.png',
      hoverImage: 'assets/images/dunk-greyfog-hover.png',
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      description: "Subtle two-tone elegance featuring smooth white leather underlays, muted Grey Fog leather overlays, matching Swoosh, and durable rubber cupsole cushioning."
    },
    {
      id: 'step-15',
      name: "Air Jordan 11 Retro 'Concord'",
      brand: 'JORDAN BRAND',
      price: 260,
      badge: 'CONCORD OG',
      badgeClass: '',
      image: 'assets/images/aj11-concord-profile.png',
      hoverImage: 'assets/images/aj11-concord-hover.png',
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
      description: "Tinker Hatfield's masterpiece combining high-gloss black patent leather, pristine white ballistic cordura mesh, carbon fiber shank plate, and icy translucent outsole."
    },
    {
      id: 'step-16',
      name: "Yeezy Boost 350 V2 'Zebra'",
      brand: 'ADIDAS YEEZY',
      price: 230,
      badge: 'ICONIC GRAIL',
      badgeClass: '',
      image: 'assets/images/yeezy-zebra-profile.png',
      hoverImage: 'assets/images/yeezy-zebra-hover.png',
      sizes: ['US 7', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      description: "Groundbreaking Primeknit construction in iconic white and core black zebra patterning, lateral monofilament stripe with mirrored red 'SPLY-350' insignia, and full-length Boost encapsulated sole."
    }
  ];

  // 2. "SHOP THE LOOK" OUTFIT ITEMS
  const LOOK_ITEMS = [
    {
      id: 'look-1',
      brand: 'STEPPERS ATELIER',
      name: 'VINTAGE WASHED OVERSIZED TEE',
      price: 85,
      image: 'assets/images/tee-merch.jpg',
      hoverImage: 'assets/images/steppers-tee-back.jpg',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      description: 'Heavyweight 300GSM washed vintage black cotton t-shirt with dropped shoulders, signature French Bulldog street art graphic, and arched graffiti branding.'
    },
    {
      id: 'look-2',
      brand: 'STEPPERS ATELIER',
      name: 'TACTICAL UTILITY CARGO PANTS',
      price: 165,
      image: 'assets/images/cargo-pants.png',
      description: 'Custom enzyme-washed olive drab cotton twill with articulated knees, deep cargo pockets, and adjustable cinch cuffs.'
    },
    {
      id: 'look-3',
      brand: 'STEPPERS FOOTWEAR',
      name: 'ATELIER FORUM RETRO HIGH-TOPS',
      price: 195,
      image: 'assets/images/sneaker-chicago.jpg',
      description: 'Monochrome black and white leather high-top with ankle lockdown strap, vintage cream cupsole, and cushioned collar.'
    }
  ];

  // 3. CART STATE
  let cart = [
    {
      id: 'step-01',
      name: "Air Jordan 1 Retro High OG 'Chicago'",
      size: 'US 9.5',
      price: 180,
      image: 'assets/images/aj1-chicago-profile.png',
      qty: 1
    }
  ];

  let currentModalProduct = null;
  let selectedModalSize = null;
  let currentLookIndex = 0;

  // 4. DOM ELEMENTS
  const header = document.getElementById('site-header');
  const cartLinkText = document.getElementById('cart-link-text');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartItemsContainer = document.getElementById('cart-drawer-items');
  const cartSubtotalVal = document.getElementById('cart-subtotal-val');

  // Search Elements
  const searchTrigger = document.getElementById('search-trigger');
  const searchOverlay = document.getElementById('search-overlay');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchInput = document.getElementById('search-input');
  const searchResultsGrid = document.getElementById('search-results-grid');

  // Quick View Elements
  const quickviewModal = document.getElementById('quickview-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalImg = document.getElementById('modal-img');
  const modalBrand = document.getElementById('modal-brand');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSizesStrip = document.getElementById('modal-sizes-strip');
  const modalAddBagBtn = document.getElementById('modal-add-bag-btn');

  // Mobile Menu Elements
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const closeMobileNavBtn = document.getElementById('close-mobile-nav-btn');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');

  // 5. TOAST NOTIFICATION UTILITY
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  }

  // 6. STICKY HEADER SCROLL
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 7. RENDER NEW ARRIVALS & STAFF PICKS GRIDS
  function renderGrids() {
    const arrivalsGrid = document.getElementById('new-arrivals-grid');
    const staffGrid = document.getElementById('staff-picks-grid');

    if (arrivalsGrid) {
      arrivalsGrid.innerHTML = CATALOG.slice(0, 4).map(p => createCardHtml(p)).join('');
    }
    if (staffGrid) {
      staffGrid.innerHTML = CATALOG.slice(4, 16).map(p => createCardHtml(p)).join('');
    }

    // Attach card click & quick view handlers
    document.querySelectorAll('.product-card-grandeur').forEach(card => {
      const pid = card.dataset.id;
      const quickBtn = card.querySelector('.product-quick-btn');
      
      if (quickBtn) {
        quickBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openQuickView(pid);
        });
      }

      card.addEventListener('click', () => {
        openQuickView(pid);
      });
    });
  }

  function createCardHtml(p) {
    const badgeHtml = p.badge ? `<div class="product-badge-grandeur ${p.badgeClass}">${p.badge}</div>` : '';
    const hoverImgHtml = p.hoverImage ? `<img src="${p.hoverImage}" alt="${p.name} - Alternate Angle" class="product-img-hover" loading="lazy">` : '';
    return `
      <div class="product-card-grandeur" data-id="${p.id}">
        <div class="product-thumb-box">
          ${badgeHtml}
          <img src="${p.image}" alt="${p.name}" class="product-img-primary" loading="lazy">
          ${hoverImgHtml}
          <button class="product-quick-btn" data-id="${p.id}">QUICK VIEW</button>
        </div>
        <div class="product-meta-grandeur">
          <span class="product-brand">${p.brand}</span>
          <h3 class="product-name">${p.name}</h3>
          <span class="product-price">$${p.price.toFixed(2)} USD</span>
        </div>
      </div>
    `;
  }

  // 8. SYNCHRONIZED "SHOP THE LOOK" OUTFIT & 3-PRODUCT BOX CAROUSEL
  let currentLookSlide = 0;
  const totalLookSlides = 3;
  const lookMediaTrack = document.getElementById('look-media-track');
  const lookTrack = document.getElementById('look-carousel-track');
  const lookCounter = document.getElementById('look-slide-counter');
  const lookCarouselTag = document.getElementById('look-carousel-tag');
  const lookPrevBtn = document.getElementById('look-prev-btn');
  const lookNextBtn = document.getElementById('look-next-btn');

  function updateLookCarousel(idx) {
    currentLookSlide = (idx + totalLookSlides) % totalLookSlides;

    // 1. Simultaneously slide Left Outfit Flat Lay Track
    if (lookMediaTrack) {
      lookMediaTrack.style.transform = `translateX(-${currentLookSlide * 100}%)`;
    }

    // 2. Simultaneously slide Right 3-Product Box Stack Track
    if (lookTrack) {
      lookTrack.style.transform = `translateX(-${currentLookSlide * 100}%)`;
    }

    // 3. Update Live Counter & Capsule Tag
    if (lookCounter) {
      lookCounter.textContent = `0${currentLookSlide + 1} / 03`;
    }
    if (lookCarouselTag) {
      lookCarouselTag.textContent = `// OUTFIT CAPSULE 0${currentLookSlide + 1} OF 03`;
    }
  }

  // Right Navigation Arrow Event Handlers
  lookPrevBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    updateLookCarousel(currentLookSlide - 1);
  });
  lookNextBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    updateLookCarousel(currentLookSlide + 1);
  });

  // Connect all "VIEW PRODUCT" buttons in the 3-box carousel to Quick View modal
  document.querySelectorAll('.btn-look-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pid = btn.dataset.id || 'look-1';
      openQuickView(pid);
    });
  });

  // 9. CART DRAWER SYSTEM
  function openCart() {
    if (cartDrawer && cartDrawerOverlay) {
      cartDrawer.classList.add('active');
      cartDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && cartDrawerOverlay) {
      cartDrawer.classList.remove('active');
      cartDrawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  const cartTrigger = document.getElementById('cart-trigger');
  if (cartTrigger) cartTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  });
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCart);

  function updateCartUI() {
    if (!cartItemsContainer) return;
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (cartLinkText) {
      cartLinkText.textContent = `CART (${totalCount})`;
    }
    if (cartSubtotalVal) {
      cartSubtotalVal.textContent = `$${subtotal.toFixed(2)} USD`;
    }

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: #707070;">
          <p style="font-family: var(--font-heading); font-size: 13px; text-transform: uppercase; margin-bottom: 20px;">Your shopping bag is empty</p>
          <a href="#new-arrivals" class="btn-grandeur-center" id="empty-shop-btn" style="padding: 12px 28px; font-size: 11px;">CONTINUE SHOPPING</a>
        </div>
      `;
      const btn = document.getElementById('empty-shop-btn');
      if (btn) btn.addEventListener('click', closeCart);
      return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item-row" data-id="${item.id}" data-size="${item.size}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Size: <strong>${item.size}</strong></div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn btn-qty-minus" data-id="${item.id}" data-size="${item.size}">−</button>
            <span style="font-size: 11px; padding: 0 4px;">${item.qty}</span>
            <button class="qty-btn btn-qty-plus" data-id="${item.id}" data-size="${item.size}">+</button>
          </div>
        </div>
        <button class="btn-remove-item" data-id="${item.id}" data-size="${item.size}" title="Remove">&times;</button>
      </div>
    `).join('');

    // Attach listeners
    cartItemsContainer.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => changeCartQty(btn.dataset.id, btn.dataset.size, -1));
    });
    cartItemsContainer.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => changeCartQty(btn.dataset.id, btn.dataset.size, 1));
    });
    cartItemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.dataset.id, btn.dataset.size));
    });
  }

  function addToCart(productId, size = 'US 9', qty = 1, customItem = null) {
    let product = customItem || CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(i => i.id === product.id && i.size === size);
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
    showToast(`ADDED ${product.name} TO BAG`);
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
    const idx = cart.findIndex(i => i.id === id && i.size === size);
    if (idx !== -1) {
      const removed = cart.splice(idx, 1)[0];
      updateCartUI();
      showToast(`REMOVED ${removed.name}`);
    }
  }

  const checkoutBtn = document.getElementById('btn-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      showToast('PROCEEDING TO CHECKOUT (DEMONSTRATION)');
    });
  }

  // 10. QUICK VIEW MODAL
  const modalGalleryThumbs = document.getElementById('modal-gallery-thumbs');

  function openQuickView(productId) {
    const product = CATALOG.find(p => p.id === productId) || LOOK_ITEMS.find(p => p.id === productId);
    if (!product || !quickviewModal) return;

    currentModalProduct = product;
    selectedModalSize = product.sizes ? product.sizes[0] : 'STANDARD';

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalBrand.textContent = product.brand;
    modalTitle.textContent = product.name;
    modalPrice.textContent = `$${product.price.toFixed(2)} USD`;
    modalDesc.textContent = product.description;

    if (modalGalleryThumbs) {
      if (product.hoverImage) {
        modalGalleryThumbs.innerHTML = `
          <button class="modal-thumb-btn active" data-img="${product.image}">
            <img src="${product.image}" alt="Profile View">
            <span>PROFILE</span>
          </button>
          <button class="modal-thumb-btn" data-img="${product.hoverImage}">
            <img src="${product.hoverImage}" alt="Perspective View">
            <span>PERSPECTIVE</span>
          </button>
        `;
        modalGalleryThumbs.querySelectorAll('.modal-thumb-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            modalGalleryThumbs.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            modalImg.src = btn.dataset.img;
          });
        });
      } else {
        modalGalleryThumbs.innerHTML = '';
      }
    }

    if (product.sizes) {
      modalSizesStrip.innerHTML = product.sizes.map(s => `
        <button class="size-pill ${s === selectedModalSize ? 'active' : ''}" data-size="${s}">${s}</button>
      `).join('');

      modalSizesStrip.querySelectorAll('.size-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          modalSizesStrip.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          selectedModalSize = pill.dataset.size;
        });
      });
    }

    quickviewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (quickviewModal) {
      quickviewModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeQuickView);
  if (quickviewModal) {
    quickviewModal.addEventListener('click', (e) => {
      if (e.target === quickviewModal) closeQuickView();
    });
  }

  if (modalAddBagBtn) {
    modalAddBagBtn.addEventListener('click', () => {
      if (!currentModalProduct) return;
      addToCart(currentModalProduct.id, selectedModalSize, 1);
      closeQuickView();
    });
  }

  // 11. LIVE SEARCH
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

  if (searchTrigger) searchTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  });
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  function renderSearchResults(q) {
    if (!searchResultsGrid) return;
    const query = q.trim().toLowerCase();
    const matches = query === '' 
      ? CATALOG.slice(0, 3) 
      : CATALOG.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));

    if (matches.length === 0) {
      searchResultsGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #707070; padding: 40px 0;">No items found for "${q}".</div>`;
      return;
    }

    searchResultsGrid.innerHTML = matches.map(p => `
      <div class="product-card-grandeur" data-id="${p.id}" style="padding: 10px; border: 1px solid var(--border-light); background: var(--bg-card); border-radius: 6px;">
        <div class="product-thumb-box" style="aspect-ratio: 1/1; margin-bottom: 8px;">
          <img src="${p.image}" alt="${p.name}" class="product-img-primary">
          ${p.hoverImage ? `<img src="${p.hoverImage}" alt="${p.name}" class="product-img-hover">` : ''}
        </div>
        <div class="product-meta-grandeur">
          <span class="product-brand">${p.brand}</span>
          <h4 class="product-name">${p.name}</h4>
          <span class="product-price">$${p.price.toFixed(2)} USD</span>
        </div>
      </div>
    `).join('');

    searchResultsGrid.querySelectorAll('.product-card-grandeur').forEach(c => {
      c.addEventListener('click', () => {
        closeSearch();
        openQuickView(c.dataset.id);
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // 12. MOBILE NAVIGATION DRAWER
  if (hamburgerBtn && mobileNavDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.add('active');
    });
  }
  if (closeMobileNavBtn && mobileNavDrawer) {
    closeMobileNavBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('active');
    });
  }

  // 13. NEWSLETTER FORM
  const newsletterForm = document.getElementById('footer-newsletter-form');
  const newsletterEmail = document.getElementById('footer-email-input');
  if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = newsletterEmail.value.trim();
      if (!val || !val.includes('@')) {
        showToast('PLEASE ENTER A VALID EMAIL');
        return;
      }
      showToast('THANK YOU FOR SUBSCRIBING');
      newsletterEmail.value = '';
    });
  }

  // ESCAPE KEY CLOSER
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeSearch();
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
    }
  });

  // INITIALIZE
  renderGrids();
  updateCartUI();
  updateLookCarousel(0);
});
