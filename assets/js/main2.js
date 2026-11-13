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
      image: 'assets/images/real_aj1_chicago.jpg',
      gallery: [
        'assets/images/real_aj1_chicago.jpg',
        'assets/images/aj1_chicago_heel_detail.jpg',
        'assets/images/aj1_chicago_toebox_detail.jpg',
        'assets/images/aj1_chicago_sole_detail.jpg',
        'assets/images/sneaker-chicago.jpg',
        'assets/images/aj1-chicago-hover.png'
      ],
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
      gallery: [
        'assets/images/af1-pastel-profile.png',
        'assets/images/af1-pastel-hover.png',
        'assets/images/sneaker-purple.jpg',
        'assets/images/shoe-2.png'
      ],
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
      gallery: [
        'assets/images/cyan-profile.png',
        'assets/images/cyan-hover.png',
        'assets/images/sneaker-cyan.jpg',
        'assets/images/shoe-3.png'
      ],
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
      gallery: [
        'assets/images/blacktoe-profile.png',
        'assets/images/blacktoe-hover.png',
        'assets/images/sneaker-dunk.jpg',
        'assets/images/shoe-4.png'
      ],
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
      gallery: [
        'assets/images/bred-profile.png',
        'assets/images/bred-hover.png',
        'assets/images/sneaker-bred.jpg',
        'assets/images/shoe-5.png'
      ],
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
      gallery: [
        'assets/images/af1-sail-profile.png',
        'assets/images/af1-sail-hover.png',
        'assets/images/sneaker-retro4.jpg',
        'assets/images/shoe-6.png'
      ],
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
      gallery: [
        'assets/images/free-red-profile.png',
        'assets/images/free-red-hover.png',
        'assets/images/sneaker-runner.jpg',
        'assets/images/shoe-8.png'
      ],
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
        e.stopPropagation();
        const id = btn.dataset.id;
        const prod = catalog.find(p => p.id === id);
        if (prod) openQuickView(prod);
      });
    });

    // Clicking anywhere on card (image, title, etc.) opens Quick View
    catalogGrid.querySelectorAll('.product-item-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-card-add-cart') && !e.target.closest('.btn-wishlist-action') && !e.target.closest('.btn-quickview-action')) {
          const id = card.dataset.id;
          const prod = catalog.find(p => p.id === id);
          if (prod) openQuickView(prod);
        }
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
  // 4. BESTSELLERS SLIDER (UNLIMITED INFINITE LOOP CAROUSEL WITH AUTOPLAY)
  // ==========================================================================
  const bestsellerSlider = document.getElementById('bestseller-slider');
  const bestsellerViewport = document.getElementById('bestseller-viewport') || (bestsellerSlider ? bestsellerSlider.parentElement : null);
  const btnBestsellerPrev = document.getElementById('btn-bestseller-prev');
  const btnBestsellerNext = document.getElementById('btn-bestseller-next');
  const bestsellerProgressFill = document.getElementById('bestseller-progress-fill');

  if (bestsellerSlider && typeof catalog !== 'undefined' && catalog.length > 0) {
    // Render the initial set of catalog items
    bestsellerSlider.innerHTML = catalog.map((item, idx) => `
      <div class="product-item-card bestseller-card" data-id="${item.id}" data-idx="${idx}">
        <span class="card-badge-tag">${item.badge}</span>
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" draggable="false" loading="lazy">
        </div>
        <div class="stars-rating-wrap" style="margin-bottom:8px;">★★★★★ <span>(${item.reviewsCount})</span></div>
        <h3 class="card-product-title">${item.name}</h3>
        <div class="card-bottom-price-row">
          <span class="card-price-amount">$${item.price}.00</span>
          <button class="btn-card-add-cart btn-bestseller-add" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    `).join('');

    let isAnimating = false;
    let activeLogicalIndex = 0;
    const totalItems = catalog.length;

    function getStepDistance() {
      const card = bestsellerSlider.firstElementChild;
      if (!card) return 334;
      const computedStyle = window.getComputedStyle(bestsellerSlider);
      const gap = parseFloat(computedStyle.gap) || 24;
      return card.offsetWidth + gap;
    }

    function updateProgressBar() {
      if (!bestsellerProgressFill) return;
      const progressPercent = (activeLogicalIndex / (totalItems - 1)) * 65;
      bestsellerProgressFill.style.transform = `translateX(${progressPercent * 1.5}%)`;
    }

    // Infinite Slide Forward (Loops endlessly)
    function slideNext() {
      if (isAnimating || bestsellerSlider.children.length === 0) return;
      isAnimating = true;

      const step = getStepDistance();
      bestsellerSlider.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
      bestsellerSlider.style.transform = `translateX(-${step}px)`;

      const onTransitionEnd = () => {
        bestsellerSlider.removeEventListener('transitionend', onTransitionEnd);
        bestsellerSlider.style.transition = 'none';
        bestsellerSlider.appendChild(bestsellerSlider.firstElementChild);
        bestsellerSlider.style.transform = 'translateX(0)';
        isAnimating = false;
        activeLogicalIndex = (activeLogicalIndex + 1) % totalItems;
        updateProgressBar();
      };

      bestsellerSlider.addEventListener('transitionend', onTransitionEnd);
      setTimeout(() => {
        if (isAnimating) {
          onTransitionEnd();
        }
      }, 550);
    }

    // Infinite Slide Backward (Loops endlessly)
    function slidePrev() {
      if (isAnimating || bestsellerSlider.children.length === 0) return;
      isAnimating = true;

      const step = getStepDistance();
      bestsellerSlider.prepend(bestsellerSlider.lastElementChild);
      bestsellerSlider.style.transition = 'none';
      bestsellerSlider.style.transform = `translateX(-${step}px)`;

      void bestsellerSlider.offsetWidth; // flush layout

      bestsellerSlider.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
      bestsellerSlider.style.transform = 'translateX(0)';

      const onTransitionEnd = () => {
        bestsellerSlider.removeEventListener('transitionend', onTransitionEnd);
        isAnimating = false;
        activeLogicalIndex = (activeLogicalIndex - 1 + totalItems) % totalItems;
        updateProgressBar();
      };

      bestsellerSlider.addEventListener('transitionend', onTransitionEnd);
      setTimeout(() => {
        if (isAnimating) {
          onTransitionEnd();
        }
      }, 550);
    }

    // ========================================================================
    // AUTOPLAY CONTROLLER
    // ========================================================================
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 3200; // Slide every 3.2 seconds
    let isUserInteracting = false;

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        if (!isUserInteracting && document.visibilityState !== 'hidden') {
          slideNext();
        }
      }, AUTOPLAY_INTERVAL);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    // Start autoplay immediately
    startAutoplay();

    // Pause on Hover & Touch interactions
    const interactionZone = bestsellerViewport || bestsellerSlider;
    interactionZone.addEventListener('mouseenter', () => { isUserInteracting = true; });
    interactionZone.addEventListener('mouseleave', () => { isUserInteracting = false; });

    let touchStartX = 0;
    let touchEndX = 0;
    interactionZone.addEventListener('touchstart', (e) => {
      isUserInteracting = true;
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    interactionZone.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) {
          slideNext();
        } else {
          slidePrev();
        }
      }
      setTimeout(() => { isUserInteracting = false; }, 1800);
    }, { passive: true });

    // Connect Arrow Buttons
    if (btnBestsellerNext) {
      btnBestsellerNext.addEventListener('click', () => {
        restartAutoplay();
        slideNext();
      });
      btnBestsellerNext.addEventListener('mouseenter', () => { isUserInteracting = true; });
      btnBestsellerNext.addEventListener('mouseleave', () => { isUserInteracting = false; });
    }

    if (btnBestsellerPrev) {
      btnBestsellerPrev.addEventListener('click', () => {
        restartAutoplay();
        slidePrev();
      });
      btnBestsellerPrev.addEventListener('mouseenter', () => { isUserInteracting = true; });
      btnBestsellerPrev.addEventListener('mouseleave', () => { isUserInteracting = false; });
    }

    // Handle Tab Visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    // Delegated Add to Cart
    bestsellerSlider.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.btn-bestseller-add');
      if (addBtn) {
        const id = addBtn.dataset.id;
        const prod = catalog.find(p => p.id === id);
        if (prod) {
          addToCart(prod, 'US 10');
        }
      }
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

  function addToCart(prod, size = 'US 10', qty = 1) {
    const existing = cart.find(i => i.id === prod.id && i.size === size);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        size: size,
        image: prod.image,
        quantity: qty
      });
    }
    updateCartUI();
    showToast(`Added ${qty > 1 ? qty + 'x ' : ''}${prod.name} (${size}) to Bag!`);
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

  // ==========================================================================
  // 6. QUICK VIEW / LUXURY PDP MODAL (3-COLUMN GALLERY & DOSSIER)
  // ==========================================================================
  function openQuickView(prod) {
    let modal = document.getElementById('quickview-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quickview-modal';
      modal.className = 'cart-drawer-overlay';
      document.body.appendChild(modal);
    }

    const gallery = (prod.gallery && prod.gallery.length > 0)
      ? prod.gallery
      : [
          prod.image,
          ...(prod.swatches || []),
          'assets/images/aj1_chicago_heel_detail.jpg',
          'assets/images/aj1_chicago_sole_detail.jpg'
        ];

    const monthly = (prod.price / 4).toFixed(2);
    const saveAmount = (prod.originalPrice && prod.originalPrice > prod.price) 
      ? prod.originalPrice - prod.price 
      : 40;
    const originalPrice = prod.originalPrice || (prod.price + saveAmount);

    modal.innerHTML = `
      <div class="qv-grandeur-container" role="dialog" aria-modal="true">
        <button id="btn-close-quickview" class="qv-close-btn" aria-label="Close modal">&times;</button>
        
        <!-- Left: Vertical Thumbnails Strip -->
        <div class="qv-thumbs-rail" aria-label="Product gallery thumbnails">
          ${gallery.map((imgSrc, i) => `
            <div class="qv-thumb-box ${i === 0 ? 'active' : ''}" data-src="${imgSrc}">
              <img src="${imgSrc}" alt="${prod.name} thumbnail ${i + 1}" loading="lazy">
            </div>
          `).join('')}
        </div>

        <!-- Center: Main High-Res Image Display -->
        <div class="qv-main-stage">
          <div class="qv-main-img-wrap">
            <img id="qv-main-img" src="${gallery[0]}" alt="${prod.name}">
          </div>
        </div>

        <!-- Right: Product Purchase & Info Dossier -->
        <div class="qv-dossier-panel">
          <span class="qv-brand-tag">${(prod.brand || 'JORDAN BRAND').toUpperCase()}</span>
          <h2 class="qv-title">${prod.name}</h2>
          
          <div class="qv-price-row">
            <span class="qv-price">$${prod.price.toFixed(2)} USD</span>
            <span class="qv-original-price">$${originalPrice.toFixed(2)} USD</span>
            <span class="qv-save-badge">SAVE $${saveAmount}</span>
          </div>

          <div class="qv-installments">
            From <strong>$${monthly}/mo</strong> or 0% APR with <span class="shoppay-badge">shop <span>Pay</span></span>
          </div>

          <div class="qv-condition-note">
            <span class="qv-bullet">●</span> <strong>Condition:</strong> 100% Brand New Deadstock, Factory Laced, RFID Sealed, OG All
          </div>

          <div class="qv-section-label">SELECT SIZE (US MEN):</div>
          <div class="qv-sizes-row">
            ${(prod.sizes || ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11']).map((s, idx) => `
              <button type="button" class="qv-size-chip ${idx === 2 ? 'active' : ''}" data-size="${s}">${s}</button>
            `).join('')}
          </div>

          <div class="qv-qty-row">
            <span class="qv-section-label">QUANTITY:</span>
            <div class="qv-qty-selector">
              <button type="button" class="qv-qty-btn" id="qv-qty-dec" aria-label="Decrease quantity">-</button>
              <span id="qv-qty-val">1</span>
              <button type="button" class="qv-qty-btn" id="qv-qty-inc" aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div class="qv-availability-card">
            <div class="qv-avail-title">🏬 Store Availability</div>
            <div class="qv-avail-row">
              <span>Steppers Vault Miami</span>
              <span class="avail-badge in-stock">● In Stock (1 available)</span>
            </div>
            <div class="qv-avail-row">
              <span>Steppers Atelier NYC</span>
              <span class="avail-badge in-stock">● In Stock</span>
            </div>
          </div>

          <div class="qv-action-buttons">
            <button class="qv-add-cart-btn" id="btn-qv-add">ADD TO CART</button>
            <button class="qv-shoppay-btn" id="btn-qv-shoppay">Buy with <span class="shoppay-bold">shop</span><span class="shoppay-light">Pay</span></button>
            <div class="qv-more-payments">More payment options</div>
          </div>
        </div>
      </div>
    `;

    // Handle thumbnail clicks to switch main image
    const mainImg = modal.querySelector('#qv-main-img');
    modal.querySelectorAll('.qv-thumb-box').forEach(thumb => {
      thumb.addEventListener('click', () => {
        modal.querySelectorAll('.qv-thumb-box').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) {
          mainImg.style.opacity = '0.4';
          setTimeout(() => {
            mainImg.src = thumb.dataset.src;
            mainImg.style.opacity = '1';
          }, 120);
        }
      });
    });

    // Size selection
    let selectedSize = 'US 9';
    modal.querySelectorAll('.qv-size-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        modal.querySelectorAll('.qv-size-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedSize = chip.dataset.size || chip.textContent;
      });
    });

    // Quantity selector
    let currentQty = 1;
    const qtyVal = modal.querySelector('#qv-qty-val');
    const btnInc = modal.querySelector('#qv-qty-inc');
    const btnDec = modal.querySelector('#qv-qty-dec');
    if (btnInc && qtyVal) {
      btnInc.onclick = (e) => {
        e.preventDefault();
        currentQty++;
        qtyVal.textContent = currentQty;
      };
    }
    if (btnDec && qtyVal) {
      btnDec.onclick = (e) => {
        e.preventDefault();
        if (currentQty > 1) {
          currentQty--;
          qtyVal.textContent = currentQty;
        }
      };
    }

    // Add to cart
    const btnAdd = modal.querySelector('#btn-qv-add');
    if (btnAdd) {
      btnAdd.onclick = (e) => {
        e.preventDefault();
        addToCart(prod, selectedSize, currentQty);
        modal.classList.remove('open');
        document.body.style.overflow = '';
      };
    }

    // Buy with Shop Pay
    const btnShopPay = modal.querySelector('#btn-qv-shoppay');
    if (btnShopPay) {
      btnShopPay.onclick = (e) => {
        e.preventDefault();
        addToCart(prod, selectedSize, currentQty);
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (typeof openCart === 'function') openCart();
      };
    }

    // Close button & overlay click
    const btnClose = modal.querySelector('#btn-close-quickview');
    if (btnClose) {
      btnClose.onclick = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      };
    }

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Auto-open via URL parameter (e.g. ?quickview=step-01)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qvParam = urlParams.get('quickview');
    if (qvParam) {
      const targetProd = catalog.find(p => p.id === qvParam) || catalog[0];
      if (targetProd) setTimeout(() => openQuickView(targetProd), 150);
    }
  } catch (err) {}

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


  // ==========================================================================
  // 12. TESTING COCKPIT PROTOCOL INTERACTIVE SWITCHER
  // ==========================================================================
  const protocolCards = document.querySelectorAll('.phase-protocol-card');
  const hudPins = document.querySelectorAll('.chamber-hud-pin');
  const telemetryVerdict = document.getElementById('chamber-telemetry-verdict');

  if (protocolCards.length > 0) {
    const phaseVerdicts = {
      '1': { text: 'PHASE 01: 365NM UV GLUE SCAN VERIFIED', color: '#c084fc' },
      '2': { text: 'PHASE 02: 1.42MM NAPPA DENSITY CALIBRATED', color: '#fbbf24' },
      '3': { text: 'PHASE 03: 18.2 PSI AIR-SOLE DYNAMICS OEM', color: '#22d3ee' },
      '4': { text: 'PHASE 04: DUAL-BAND NFC CRYPTO SEAL LINKED', color: '#34d399' }
    };

    protocolCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        protocolCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const phase = card.dataset.phase;

        hudPins.forEach(pin => {
          if (pin.dataset.pin === phase) {
            pin.classList.add('active-pin');
          } else {
            pin.classList.remove('active-pin');
          }
        });

        if (telemetryVerdict && phaseVerdicts[phase]) {
          telemetryVerdict.textContent = phaseVerdicts[phase].text;
          telemetryVerdict.style.color = phaseVerdicts[phase].color;
        }
      });
    });
  }

  // Initial cart UI
  updateCartUI();
});
