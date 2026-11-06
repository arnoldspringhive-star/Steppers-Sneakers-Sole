/* ==========================================================================
   STEPPERS SNEAKERS & SOLE — CONCEPT 02 CONTROLLER (STEPS WORKDO THEME)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Authenticated Footwear Catalog (7 Verified Pairs)
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
      rating: 5.0,
      reviewsCount: 142,
      badge: 'OG Grail',
      materials: 'Full-Grain Tumbled Cowhide',
      cushioning: 'Encapsulated Air-Sole Unit',
      image: 'assets/images/sneaker-chicago.jpg',
      swatches: [
        'assets/images/sneaker-chicago.jpg',
        'assets/images/shoe-1.png',
        'assets/images/sneaker-dunk.jpg'
      ],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      desc: "The legendary 2018 mashup of the 'Bred' and 'Black Toe' colorways. Premium tumbled leather with Gym Red toe box and collar, crisp white mid-panels, black Swoosh, and the iconic Jordan Wings insignia.",
      hotspots: {
        heel: { title: "Ankle Collar Lockdown", tag: "STABILITY", desc: "Padded foam collar with high-frequency stitch gauge precision." },
        cushion: { title: "Air-Sole Cushion Chamber", tag: "CUSHIONING", desc: "Encapsulated inert gas polyurethane unit absorbs heavy pavement impact." },
        toe: { title: "Perforated Vamp Box", tag: "VENTILATION", desc: "Full-grain tumbled Gym Red leather perforated for maximum airflow." }
      }
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
      rating: 4.9,
      reviewsCount: 98,
      badge: 'Pastel Edition',
      materials: 'Stacked Nappa Leather & Suede',
      cushioning: 'Elevated Foam Midsole with Air',
      image: 'assets/images/sneaker-purple.jpg',
      swatches: [
        'assets/images/sneaker-purple.jpg',
        'assets/images/shoe-2.png'
      ],
      sizes: ['US 6.5', 'US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9'],
      desc: "Layered deconstructed design featuring doubled eyestays, dual mudguards, stacked Swooshes in soft pastel lilac and sky blue, and the signature elevated midsole with double 'AIR' heel branding.",
      hotspots: {
        heel: { title: "Double Air Heel Wrap", tag: "DECONSTRUCTED", desc: "Layered TPU foxing piece with embossed AIR typography." },
        cushion: { title: "Elevated Foam Core", tag: "COMFORT", desc: "Thicker exaggerated foam midsole offering plush step-in comfort." },
        toe: { title: "Dual Leather Mudguard", tag: "DURABILITY", desc: "Pastel stacked overlays engineered with double-stitch strength." }
      }
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
      rating: 4.8,
      reviewsCount: 86,
      badge: 'React Series',
      materials: 'Ripstop Mesh & Smooth Leather',
      cushioning: 'Full-Length Nike React Drop-In',
      image: 'assets/images/sneaker-cyan.jpg',
      swatches: [
        'assets/images/sneaker-cyan.jpg',
        'assets/images/shoe-3.png'
      ],
      sizes: ['US 7.5', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      desc: "Modern technical overhaul of the classic AF1 silhouette. Features an oversized outlined black Swoosh, translucent mesh quarter panels, responsive full-length Nike React drop-in insole, and red '-AIR' midsole detailing.",
      hotspots: {
        heel: { title: "Enlarged Pull-Tab", tag: "TECH SPEC", desc: "Technical webbing heel pull with reflective micro-threads." },
        cushion: { title: "Full React Drop-In", tag: "INNOVATION", desc: "Springy elastomeric foam bed replacing traditional cupsole." },
        toe: { title: "Ripstop Breathable Vamp", tag: "BREATHABILITY", desc: "Translucent synthetic weave providing lightweight weatherproofing." }
      }
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
      rating: 4.9,
      reviewsCount: 114,
      badge: 'Special Edition',
      materials: 'Smooth Box Leather & Heel Suede',
      cushioning: 'Midsole Encapsulated Air Unit',
      image: 'assets/images/sneaker-dunk.jpg',
      swatches: [
        'assets/images/sneaker-dunk.jpg',
        'assets/images/shoe-4.png'
      ],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      desc: "Distinctive mid-cut silhouette drawing heavy inspiration from the famed Union LA colorblock. White leather base with black toe overlay, matching black Swoosh, red suede heel wrap, and red stamped Jordan Wings logo.",
      hotspots: {
        heel: { title: "Red Suede Heel Wrap", tag: "PREMIUM", desc: "Silky nap suede in vibrant varsity crimson with Wings crest." },
        cushion: { title: "Concealed Air Unit", tag: "IMPACT", desc: "Time-tested heel air cushioning for all-day asphalt comfort." },
        toe: { title: "Classic Black Toe Overlay", tag: "HERITAGE", desc: "Contrasting premium black leather mudguard." }
      }
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
      rating: 5.0,
      reviewsCount: 128,
      badge: 'Max Retro',
      materials: 'Curry Suede, Mesh & Molded TPU',
      cushioning: 'Visible Max Air Chamber Unit',
      image: 'assets/images/sneaker-bred.jpg',
      swatches: [
        'assets/images/sneaker-bred.jpg',
        'assets/images/shoe-5.png'
      ],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      desc: "Tinker Hatfield's 1990 masterpiece styled with rich curry wheat suede overlays, breathable white mesh toe, royal University Blue TPU accents, and the unmistakable visible Max Air cushioning unit in vibrant golden yellow.",
      hotspots: {
        heel: { title: "TPU Shield Logo", tag: "VINTAGE", desc: "Embossed ribbed Nike Air heel tab badge." },
        cushion: { title: "Visible Max Air Window", tag: "CHAMBER", desc: "High-volume air cushion framed in signature ribbed TPU cassette." },
        toe: { title: "Open-Hole Mesh Vamp", tag: "AIRFLOW", desc: "Breathable ballistic mesh with soft wheat suede wrapping." }
      }
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
      rating: 4.8,
      reviewsCount: 79,
      badge: 'High-Top Classic',
      materials: 'Full Leather & Gold Hardware',
      cushioning: 'Air-Sole Unit with Pivot Tread',
      image: 'assets/images/sneaker-retro4.jpg',
      swatches: [
        'assets/images/sneaker-retro4.jpg',
        'assets/images/shoe-6.png'
      ],
      sizes: ['US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      desc: "The original 1982 basketball high-top icon. Clean crisp white leather upper, perforated toe vamp, gold metallic lace deubré, padded ankle collar with warm sail lining, and adjustable velcro ankle lock strap.",
      hotspots: {
        heel: { title: "Velcro Lockdown Strap", tag: "SECURITY", desc: "Removable woven strap providing custom high-top ankle security." },
        cushion: { title: "Pivot-Circle Gum Tread", tag: "TRACTION", desc: "Radial circular traction rings on heavy solid rubber outsole." },
        toe: { title: "Metallic Gold Deubré", tag: "ACCENT", desc: "Custom AF-1 engraved gold metal lace jewel." }
      }
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
      rating: 4.9,
      reviewsCount: 65,
      badge: 'Flyknit Series',
      materials: 'Seamless Multi-Ply Flyknit Weave',
      cushioning: 'Auxetic Tri-Star Siped Foam',
      image: 'assets/images/sneaker-runner.jpg',
      swatches: [
        'assets/images/sneaker-runner.jpg',
        'assets/images/shoe-8.png'
      ],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      desc: "Engineered ultra-flexible runner built with featherweight heathered red Flyknit threading, supportive integrated Flywire cables, contrast white lateral Swoosh, and a dynamic tri-star auxetic Nike Free outsole.",
      hotspots: {
        heel: { title: "Anatomical Rounded Heel", tag: "NATURAL", desc: "Rolls smoothly with each footstrike mimicking barefoot motion." },
        cushion: { title: "Auxetic Tri-Star Sipes", tag: "FLEXIBILITY", desc: "Laser-cut foam expands and contracts symmetrically in all directions." },
        toe: { title: "One-Piece Flyknit Upper", tag: "FEATHERWEIGHT", desc: "Zero-waste continuous knit providing sock-like targeted compression." }
      }
    }
  ];

  // Cart State
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
  const promoDiscount = 0.10;
  let currentHeroIndex = 0;
  let currentSelectedSize = 'US 10';

  // ==========================================================================
  // 2. HERO SNEAKER INTERACTIVE CONTROLLER (STEPS WORKDO STYLE)
  // Transparent Cutout PNG Showcase just like the reference website
  // ==========================================================================
  const heroProducts = [
    {
      id: 'hero-01',
      sku: 'STP-EDGE-01',
      name: "Classic 2.5 Edge 'Graphite Shadow'",
      brand: 'Trendmark / Steppers Lab',
      badge: 'Limited Edition',
      colorway: 'Graphite Grey / Solar Amber',
      price: 240,
      originalPrice: 280,
      releaseYear: '2024',
      rating: 5.0,
      reviewsCount: 142,
      materials: 'Rugged Ripstop & Suede Guard',
      cushioning: 'Hexalite Responsive Core',
      image: 'assets/images/ref-hero-1.png',
      swatches: [
        'assets/images/ref-hero-1.png',
        'assets/images/ref-hero-2.png',
        'assets/images/ref-hero-3.png'
      ],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      desc: "Engineered with deconstructed layered suede panels, rugged trail lugged outsoles, and Hexalite honeycomb cushioning. Built for aggressive pavement grip and all-day stability.",
      hotspots: {
        heel: { title: "Molded Heel Counter", tag: "HEEL // STABILITY", desc: "Thermoplastic counter locks down the calcaneus to eliminate lateral slippage." },
        cushion: { title: "Gillie Lacing & Mid Core", tag: "LACES // FIT", desc: "Reinforced speed-lacing eyelets distribute tension evenly across the instep." },
        toe: { title: "Toe Cap & Trail Lug", tag: "TOE CAP // TRACTION", desc: "Reinforced rubber abrasion cap wraps the forefoot for high-impact durability." }
      }
    },
    {
      id: 'hero-02',
      sku: 'STP-LTHR-02',
      name: "Classic Leather 'Ice Silver Glow'",
      brand: 'Trendmark / Steppers Lab',
      badge: 'Heritage Run',
      colorway: 'Pure White / Metallic Silver',
      price: 180,
      originalPrice: 210,
      releaseYear: '2023',
      rating: 4.9,
      reviewsCount: 98,
      materials: 'Buttery Nappa Box Leather',
      cushioning: 'Die-Cut EVA Foam Bed',
      image: 'assets/images/ref-hero-4.png',
      swatches: [
        'assets/images/ref-hero-4.png',
        'assets/images/ref-hero-5.png'
      ],
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 10', 'US 10.5'],
      desc: "Clean-line minimalist luxury silhouette crafted with premium tumbled glove leather, tonal vector stitching, and a crisp icy cupsole. An essential wardrobe cornerstone.",
      hotspots: {
        heel: { title: "Padded Collar Notch", tag: "COLLAR // COMFORT", desc: "Memory foam achilles wrap prevents blister friction during high-step walking." },
        cushion: { title: "Perforated Mid-Foot", tag: "MIDFOOT // AIRFLOW", desc: "Micro-vented quarter panels allow continuous heat evacuation." },
        toe: { title: "Contoured Toe Box", tag: "FOREFOOT // FLEX", desc: "Anatomically shaped toe cavity accommodates natural metatarsal spread." }
      }
    },
    {
      id: 'hero-03',
      sku: 'STP-CLUBC-03',
      name: "Club C 85 'Emerald Forest Suede'",
      brand: 'Trendmark / Steppers Lab',
      badge: 'Court Special',
      colorway: 'Deep Emerald / Raw Gum',
      price: 195,
      originalPrice: 230,
      releaseYear: '2024',
      rating: 4.8,
      reviewsCount: 86,
      materials: 'Heavyweight Velvet Suede',
      cushioning: 'Gum Rubber Low-Profile Sole',
      image: 'assets/images/ref-hero-6.png',
      swatches: [
        'assets/images/ref-hero-6.png',
        'assets/images/ref-hero-7.png',
        'assets/images/ref-hero-8.png'
      ],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      desc: "Rich mossy emerald green velvet suede matched with an unbleached raw gum rubber sole. Vintage court heritage re-engineered with modern dual-density insoles.",
      hotspots: {
        heel: { title: "Reinforced Heel Wrap", tag: "HEEL // ARCHIVE", desc: "Embossed tonal brand emblem on double-stitched back tab." },
        cushion: { title: "Cotton Flat Laces", tag: "INSTEP // FIT", desc: "Custom-dyed 100% organic cotton laces with matte metal aglets." },
        toe: { title: "Low-Profile Gum Bumper", tag: "VAMP // GRIP", desc: "Natural vulcanized gum rubber wraps the toe for board-feel and abrasion shield." }
      }
    },
    {
      id: 'hero-04',
      sku: 'STP-VINT-04',
      name: "Club C 85 Vintage 'Cream Linen'",
      brand: 'Trendmark / Steppers Lab',
      badge: 'Vintage Archive',
      colorway: 'Chalk White / Vintage Cream',
      price: 210,
      originalPrice: 250,
      releaseYear: '2023',
      rating: 4.9,
      reviewsCount: 114,
      materials: 'Distressed Full-Grain Calfskin',
      cushioning: 'Arch-Support OrthoLite Socket',
      image: 'assets/images/ref-hero-9.png',
      swatches: [
        'assets/images/ref-hero-9.png',
        'assets/images/ref-hero-10.png'
      ],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 10', 'US 10.5', 'US 11'],
      desc: "Authentic retro tennis silhouette treated with vintage cream patinas, raw exposed foam tongue edges, and classic collegiate lettering on the side window.",
      hotspots: {
        heel: { title: "Retro Foam Collar", tag: "HEEL // VINTAGE", desc: "Low-cut silhouette for ankle freedom with exposed foam styling." },
        cushion: { title: "Dual EVA Wedge", tag: "MIDSOLE // DAMPING", desc: "Shock-absorbing dual-density ethylene-vinyl acetate midsole core." },
        toe: { title: "Perforated Toe Radial", tag: "TOE // BREATHABILITY", desc: "Classic court perforation array keeps the interior dry and breathable." }
      }
    }
  ];

  const heroShoeImg = document.getElementById('hero-shoe-display');
  const heroCardTitle = document.getElementById('hero-card-title');
  const heroCardSubtitle = document.getElementById('hero-card-subtitle');
  const heroCardDesc = document.getElementById('hero-card-desc');
  const heroCardPrice = document.getElementById('hero-card-price');
  const heroCardWasPrice = document.getElementById('hero-card-was-price');
  const heroSwatchesBox = document.getElementById('hero-swatches-box');
  const heroSizesBox = document.getElementById('hero-sizes-box');
  const heroTabs = document.querySelectorAll('.hero-tab-item');
  const btnHeroAddToCart = document.getElementById('btn-hero-add-cart');

  // Hotspot elements
  const pinHeelTitle = document.getElementById('pin-heel-title');
  const pinHeelDesc = document.getElementById('pin-heel-desc');
  const pinCushionTitle = document.getElementById('pin-cushion-title');
  const pinCushionDesc = document.getElementById('pin-cushion-desc');
  const pinToeTitle = document.getElementById('pin-toe-title');
  const pinToeDesc = document.getElementById('pin-toe-desc');

  function updateHeroShoe(idx) {
    if (idx < 0 || idx >= heroProducts.length) return;
    currentHeroIndex = idx;
    const item = heroProducts[idx];

    // Smooth image transition
    if (heroShoeImg) {
      heroShoeImg.style.opacity = '0';
      heroShoeImg.style.transform = 'scale(0.96) rotate(-4deg)';
      setTimeout(() => {
        heroShoeImg.src = item.image;
        heroShoeImg.alt = item.name;
        heroShoeImg.style.opacity = '1';
        heroShoeImg.style.transform = 'scale(1) rotate(0deg)';
      }, 200);
    }

    // Card details
    if (heroCardTitle) heroCardTitle.textContent = item.name;
    if (heroCardSubtitle) heroCardSubtitle.textContent = `${item.releaseYear} DEADSTOCK // ${item.badge.toUpperCase()}`;
    if (heroCardDesc) heroCardDesc.textContent = item.desc;
    if (heroCardPrice) heroCardPrice.textContent = `$${item.price}.00 USD`;
    if (heroCardWasPrice) heroCardWasPrice.textContent = `$${item.originalPrice}.00 USD`;

    // Hotspot updates
    if (item.hotspots) {
      if (pinHeelTitle && pinHeelDesc) {
        pinHeelTitle.textContent = item.hotspots.heel.title;
        pinHeelDesc.textContent = item.hotspots.heel.desc;
      }
      if (pinCushionTitle && pinCushionDesc) {
        pinCushionTitle.textContent = item.hotspots.cushion.title;
        pinCushionDesc.textContent = item.hotspots.cushion.desc;
      }
      if (pinToeTitle && pinToeDesc) {
        pinToeTitle.textContent = item.hotspots.toe.title;
        pinToeDesc.textContent = item.hotspots.toe.desc;
      }
    }

    // Swatches
    if (heroSwatchesBox && item.swatches) {
      heroSwatchesBox.innerHTML = item.swatches.map((sw, sIdx) => `
        <div class="swatch-item-thumb ${sIdx === 0 ? 'active' : ''}" data-src="${sw}">
          <img src="${sw}" alt="Angle ${sIdx + 1}">
        </div>
      `).join('');

      heroSwatchesBox.querySelectorAll('.swatch-item-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          heroSwatchesBox.querySelectorAll('.swatch-item-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          const src = thumb.dataset.src;
          if (heroShoeImg) heroShoeImg.src = src;
        });
      });
    }

    // Sizes
    if (heroSizesBox && item.sizes) {
      currentSelectedSize = item.sizes[2] || item.sizes[0];
      heroSizesBox.innerHTML = item.sizes.map(sz => `
        <button class="size-chip ${sz === currentSelectedSize ? 'active' : ''}" data-size="${sz}">${sz}</button>
      `).join('');

      heroSizesBox.querySelectorAll('.size-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          heroSizesBox.querySelectorAll('.size-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          currentSelectedSize = chip.dataset.size;
        });
      });
    }

    // Update bottom tabs active state
    heroTabs.forEach((tab, tIdx) => {
      if (tIdx === idx) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // Hero Tab Clicks
  heroTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.idx, 10);
      updateHeroShoe(idx);
    });
  });

  // Hero Add to Bag
  if (btnHeroAddToCart) {
    btnHeroAddToCart.addEventListener('click', () => {
      const item = heroProducts[currentHeroIndex] || catalog[currentHeroIndex];
      addToCart(item, currentSelectedSize);
    });
  }

  // Initialize hero
  updateHeroShoe(0);

  // ==========================================================================
  // 3. PRODUCT CATALOG GRID ("ALL THE GRAILS")
  // ==========================================================================
  const catalogGrid = document.getElementById('catalog-products-grid');
  const filterTabs = document.querySelectorAll('.filter-tab-pill');

  function renderCatalog(filter = 'all') {
    if (!catalogGrid) return;

    const filtered = filter === 'all' 
      ? catalog 
      : catalog.filter(item => item.category === filter);

    catalogGrid.innerHTML = filtered.map(item => `
      <div class="product-item-card" data-id="${item.id}">
        <span class="card-badge-tag">${item.badge}</span>
        
        <div class="card-floating-actions">
          <button class="btn-card-action btn-wishlist-action" title="Add to Wishlist" data-id="${item.id}">♥</button>
          <button class="btn-card-action btn-quickview-action" title="Quick View" data-id="${item.id}">👁</button>
        </div>

        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}">
        </div>

        <div class="card-sizes-indicator">
          <span>SIZES:</span>
          <span class="chip">US 8</span>
          <span class="chip">US 9</span>
          <span class="chip">US 10</span>
          <span>+</span>
        </div>

        <h3 class="card-product-title">${item.name}</h3>
        <div class="card-product-meta">${item.colorway}</div>

        <div class="card-bottom-price-row">
          <div class="price-display-group">
            <span class="card-price-amount">$${item.price}</span>
            <span class="price-was">$${item.originalPrice}</span>
          </div>
          <button class="btn-card-add-cart btn-grid-add" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    `).join('');

    // Attach Add to Cart
    catalogGrid.querySelectorAll('.btn-grid-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const prod = catalog.find(p => p.id === id);
        if (prod) addToCart(prod, 'US 10');
      });
    });

    // Attach Quick View
    catalogGrid.querySelectorAll('.btn-quickview-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.id;
        const prod = catalog.find(p => p.id === id);
        if (prod) openQuickView(prod);
      });
    });

    // Attach Wishlist
    catalogGrid.querySelectorAll('.btn-wishlist-action').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        showToast('Saved to Collector Wishlist!');
      });
    });
  }

  renderCatalog('all');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.filter;
      renderCatalog(cat);
    });
  });

  // ==========================================================================
  // 4. BESTSELLERS SLIDER
  // ==========================================================================
  const bestsellerSlider = document.getElementById('bestseller-slider');
  const btnBestsellerPrev = document.getElementById('btn-bestseller-prev');
  const btnBestsellerNext = document.getElementById('btn-bestseller-next');

  if (bestsellerSlider) {
    bestsellerSlider.innerHTML = catalog.map(item => `
      <div class="product-item-card bestseller-card" data-id="${item.id}">
        <span class="card-badge-tag">${item.badge}</span>
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="stars-rating-wrap" style="margin-bottom:8px;">★★★★★ <span>(${item.reviewsCount})</span></div>
        <h3 class="card-product-title">${item.name}</h3>
        <div class="card-bottom-price-row">
          <span class="card-price-amount">$${item.price}.00</span>
          <button class="btn-card-add-cart btn-bestseller-add" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    `).join('');

    bestsellerSlider.querySelectorAll('.btn-bestseller-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const prod = catalog.find(p => p.id === id);
        if (prod) addToCart(prod, 'US 10');
      });
    });
  }

  if (btnBestsellerPrev && bestsellerSlider) {
    btnBestsellerPrev.addEventListener('click', () => {
      bestsellerSlider.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }

  if (btnBestsellerNext && bestsellerSlider) {
    btnBestsellerNext.addEventListener('click', () => {
      bestsellerSlider.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 5. SLIDE-OUT CART DRAWER & PROMO DISCOUNTS
  // ==========================================================================
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartOpenBtns = document.querySelectorAll('.cart-open-trigger');
  const cartCloseBtn = document.getElementById('btn-cart-close');
  const cartItemsList = document.getElementById('cart-items-container');
  const cartCountBubbles = document.querySelectorAll('.cart-counter-bubble');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const shippingFill = document.getElementById('shipping-fill-bar');
  const shippingText = document.getElementById('shipping-status-text');
  const promoInput = document.getElementById('cart-promo-code');
  const btnApplyPromo = document.getElementById('btn-apply-promo');

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
          <div style="text-align: center; padding: 60px 20px; color: var(--text-muted); font-family: var(--font-tech);">
            <p style="color: #fff; font-size: 1.1rem; margin-bottom: 8px;">YOUR VAULT BAG IS EMPTY</p>
            <p style="font-size: 0.85rem;">Select an authenticated deadstock pair from the store.</p>
          </div>
        `;
      } else {
        cartItemsList.innerHTML = cart.map(item => `
          <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-meta">SIZE: ${item.size} • 100% AUTHENTIC</span>
              <div class="cart-item-qty-row">
                <div class="qty-counter">
                  <button class="btn-qty btn-minus" data-id="${item.id}" data-size="${item.size}">−</button>
                  <span>${item.quantity}</span>
                  <button class="btn-qty btn-plus" data-id="${item.id}" data-size="${item.size}">+</button>
                </div>
                <span style="font-weight:700; color:#fff; font-family:var(--font-tech);">$${item.price * item.quantity}.00</span>
              </div>
            </div>
            <button class="btn-cart-remove" data-id="${item.id}" data-size="${item.size}" style="background:none; border:none; color:var(--text-muted); font-size:1.1rem; cursor:pointer;">✕</button>
          </div>
        `).join('');
      }
    }

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (promoApplied) {
      subtotal = Math.round(subtotal * (1 - promoDiscount));
    }
    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `$${subtotal}.00 USD`;
    }

    const freeThreshold = 250;
    const rawTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (shippingFill && shippingText) {
      if (rawTotal >= freeThreshold) {
        shippingFill.style.width = '100%';
        shippingText.innerHTML = `✓ UNLOCKED: Free Priority Courier Shipping!`;
      } else {
        const remaining = freeThreshold - rawTotal;
        const pct = Math.min(100, Math.round((rawTotal / freeThreshold) * 100));
        shippingFill.style.width = `${pct}%`;
        shippingText.innerHTML = `Add <strong style="color:var(--accent-pink);">$${remaining}.00</strong> more for Free Courier`;
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

      if (e.target.classList.contains('btn-cart-remove')) {
        cart = cart.filter(i => !(i.id === id && i.size === size));
        updateCartUI();
      }
    });
  }

  if (btnApplyPromo && promoInput) {
    btnApplyPromo.addEventListener('click', () => {
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

  // Two-column feature buy buttons
  const btnTwoColBuy1 = document.getElementById('btn-twocol-buy-1');
  if (btnTwoColBuy1) {
    btnTwoColBuy1.addEventListener('click', () => {
      const prod = catalog.find(p => p.id === 'step-03');
      if (prod) addToCart(prod, 'US 10');
    });
  }

  const btnTwoColBuy2 = document.getElementById('btn-twocol-buy-2');
  if (btnTwoColBuy2) {
    btnTwoColBuy2.addEventListener('click', () => {
      const prod = catalog.find(p => p.id === 'step-04');
      if (prod) addToCart(prod, 'US 10');
    });
  }

  // ==========================================================================
  // 6. QUICK VIEW MODAL
  // ==========================================================================
  function openQuickView(prod) {
    let modal = document.getElementById('quickview-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quickview-modal';
      modal.className = 'cart-drawer-overlay';
      modal.innerHTML = `
        <div style="position:relative; width:800px; max-width:92vw; background:var(--bg-surface); border:1px solid var(--border-neon); border-radius:var(--radius-xl); padding:32px; box-shadow:0 30px 60px rgba(0,0,0,0.9); margin:auto; display:flex; gap:30px; flex-wrap:wrap;">
          <button id="btn-close-quickview" style="position:absolute; top:18px; right:18px; background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">✕</button>
          <div style="flex:1; min-width:280px; aspect-ratio:1/1; background:#000; border-radius:var(--radius-lg); overflow:hidden;">
            <img id="qv-img" src="${prod.image}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="flex:1.2; min-width:280px; display:flex; flex-direction:column; gap:14px; justify-content:center;">
            <span style="font-family:var(--font-tech); font-size:0.75rem; color:var(--accent-pink); font-weight:700;">${prod.badge.toUpperCase()} // ${prod.sku}</span>
            <h2 style="font-family:var(--font-display); font-size:2.2rem; color:#fff; line-height:1.1;">${prod.name}</h2>
            <div style="color:var(--accent-orange); font-size:0.9rem;">★★★★★ <span style="color:var(--text-muted); font-size:0.8rem;">(${prod.reviewsCount} verified collector reviews)</span></div>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">${prod.desc}</p>
            <div style="font-family:var(--font-tech); font-size:1.6rem; font-weight:800; color:#fff;">$${prod.price}.00 USD</div>
            <button id="btn-qv-add" style="padding:14px; border-radius:var(--radius-full); background:linear-gradient(135deg, var(--accent-pink), var(--accent-purple)); color:#fff; font-weight:700; font-family:var(--font-tech); cursor:pointer; text-transform:uppercase;">Add to Bag</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.id === 'btn-close-quickview') {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    const qvImg = document.getElementById('qv-img');
    if (qvImg) qvImg.src = prod.image;

    const btnQvAdd = document.getElementById('btn-qv-add');
    if (btnQvAdd) {
      btnQvAdd.onclick = () => {
        addToCart(prod, 'US 10');
        modal.classList.remove('open');
        document.body.style.overflow = '';
      };
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // ==========================================================================
  // 7. TOAST NOTIFICATION
  // ==========================================================================
  let toastTimer = null;
  function showToast(msg) {
    let t = document.getElementById('site-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'site-toast';
      t.className = 'site-toast';
      document.body.appendChild(t);
    }
    t.innerHTML = `<span>⚡</span><span>${msg}</span>`;
    t.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.classList.remove('show');
    }, 3200);
  }
  window.showToast = showToast;

  // ==========================================================================
  // 8. CULTURE ATELIER DISSECTION DECK CONTROLLER
  // ==========================================================================
  const deckTabs = document.querySelectorAll('.deck-tab-btn');
  const deckPanels = {
    culture: document.getElementById('deck-panel-culture'),
    anatomy: document.getElementById('deck-panel-anatomy'),
    testing: document.getElementById('deck-panel-testing')
  };

  deckTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      deckTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabName = btn.dataset.deckTab;
      Object.keys(deckPanels).forEach(key => {
        if (deckPanels[key]) {
          deckPanels[key].classList.toggle('active', key === tabName);
        }
      });
    });
  });


  // Initial cart UI
  updateCartUI();
});
