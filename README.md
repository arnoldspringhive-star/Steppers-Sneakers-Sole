# Steppers Sneakers & Sole — Official Dual-Concept Brand Storefront

A high-performance, immersive streetwear sneaker destination crafted specifically to align with the official **Steppers Sneakers & Sole** brand identity.

Featuring two distinct, production-ready frontend concepts sharing an authentic 8-pair verified deadstock catalog:
- **Concept 01 (`index.html`)**: The Underground Cyber-Streetwear Hub
- **Concept 02 (`index2.html`)**: The High-Fashion Editorial Runway & Collector Archive

---

## 🎨 Official Brand Logo & Design Alignment

### 1. Logo Fidelity & Integrity
- **Exact Original Artwork**: Preserves the original file (`assets/images/steppers-logo.jpg`) with zero redrawing, distorting, recoloring, or modification.
- **Iconic Elements Intact**: Full graffiti typography ("Steppers"), the classic Chicago Air Jordan 1 high-top, the loyal fawn French Bulldog mascot, and cyan spray drips ("Sneakers & Sole").
- **Seamless Dark Blending**: Uses precise inset clipping (`clip-path: inset(2px)`) and screen blending (`mix-blend-mode: screen`) alongside deep dark section backdrops (`#000000` / `#050507`), completely eliminating rectangular box outlines.
- **Prominent Placement**: Displayed prominently in the sticky glass header, the Brand Heritage manifesto centerpiece, and the dark editorial footer.

### 2. Streetwear Color System
- **Primary Background**: Immersive Black (`#050507`, `#08080c`, `#000000`, `#060608`)
- **Dominant Brand Accents**: Neon Magenta / Pink (`#ff2a85`) and Vivid Purple (`#9d4edd`) directly sampled from the "Steppers" bubble lettering and 3D shadows.
- **Secondary Accent**: Chicago High-Top Red (`#e52535`).
- **Subtle Complementary**: Cyan / Teal Spray Drips (`#00f0ff`).
- **Occasional Highlight**: Warm Mascot Gold / Orange (`#ff7b00`).

---

## 👟 8 Verified Authentic Footwear Specimens

Both storefront concepts feature the exact, authentic shoes verified against product release archives:

1. **Air Jordan 1 Retro High OG 'Bred Toe' (2018)** — SKU: `STP-AJ1-BREDTOE` — $220
2. **Nike Air Force 1 Shadow 'Pastel Pale Ivory' (2020)** — SKU: `STP-AF1-SHADOW` — $130
3. **Nike Air Force 1 React 'White University Red' (2020)** — SKU: `STP-AF1-REACT` — $140
4. **Air Jordan 1 Mid SE 'Red / Black Toe' (2020)** — SKU: `STP-AJ1-MIDSE` — $165
5. **Nike Air Max 90 'Curry & University Blue' (2020)** — SKU: `STP-AM90-CURRY` — $150
6. **Nike Air Force 1 High '07 'White Sail' (1982/2022)** — SKU: `STP-AF1-HIGH07` — $145
7. **Converse Chuck Taylor All Star High Top 'Red'** — SKU: `STP-CON-CHUCK` — $65
8. **Nike Free RN Flyknit 'University Red' (2022)** — SKU: `STP-FREE-FLYKNIT` — $135

---

## ⚡ Concept 01: Underground Cyber-Streetwear Hub (`index.html`)

1. **Streetwear Marquee Ticker**: Real-time rotating announcement bar with upcoming drops, shipping thresholds, and promo codes.
2. **Hero Section ("WATCH YOUR STEP.")**:
   - High-contrast street typography with live drop countdown timer.
   - Interactive sneaker angle/colorway selector switching live between curated grails.
   - 1-click Add to Bag flow.
3. **Brand Heritage Section**:
   - Aligned culture showcase visual (`assets/images/heritage-culture.jpg`).
   - Official `WELCOME TO STEPPERS SNEAKERS & SOLE` manifesto.
   - 4 Signature Origin spec cards: Bubble Typography, The Chicago Silhouette, The Street Guardian, and Cyan Spray Drips.
4. **The Grail Vault**:
   - Filter tabs (*All Grails*, *Air Jordan*, *Nike Sportswear*, *Street & Classics*).
   - Dynamic product cards with condition tags, live size pickers, wishlist toggles, and Quick View triggers.
5. **The Doghouse Lookbook**: Streetwear editorial and community gallery honoring the French Bulldog street companion.
6. **The Sole Lab**: Sneaker care kits, 3M Sole Shields, heavyweight hoodies, and mascot tees.
7. **Interactive Shopping Bag Drawer**: Slide-out cart with real-time subtotal math, free shipping progress bar, quantity increment/decrement, and working promo code support (`STEPPERS10`).

---

## ⚡ Concept 02: High-Fashion Editorial Runway & Collector Archive (`index2.html`)

1. **Editorial Masthead Strip & Numbered Navigation**: Live atelier specs, coordinates, currency switcher, and mobile navigation drawer.
2. **Kinetic Runway Exhibition Slider**:
   - Specimen dossier with live mini-track thumbnail selector and instant colorway/spec sync.
   - Interactive hotspot inspection tooltips directly on the specimen hero image.
3. **Drop Schedule Calendar Matrix**:
   - Horizontal dispatch event cards with countdown status badges, specimen thumbnails, and 1-click notification toasts.
4. **Brand Heritage Section (`#heritage`)**:
   - Flush height-aligned culture card and 4 architectural spec cards with official emblem origin story.
5. **The Grail Archive (Dual-View Engine)**:
   - **Magazine Lookbook Spread View**: Alternating full-width editorial magazine spreads with comprehensive colorway writeups, SKU tags, and acquisition buttons.
   - **Collector Technical Table View**: Tabular spreadsheet matrix with live 1-click Instant Cop.
6. **Sneaker Anatomy Dissection Deck**:
   - Interactive 4-layer dissection terminal (Vamp & Ankle Collar, Air/React Cushion Core, Pavement Tread, Cryptographic RFID Smart NFC Chip).
7. **Concrete & Canine Mascot Syndicate Filmstrip**:
   - Smooth horizontal filmstrip gallery with step-scroll buttons and custom gradient scrollbar.
8. **The Sole Lab Formulations**:
   - Restorations kits, 480GSM heavyweight hoodies, and mascot graphic tees with direct bag addition.

---

## 🚀 Running the Project

Open either concept directly in any modern web browser:

```powershell
# Open Concept 01 (Underground Cyber-Streetwear Hub)
Start-Process index.html

# Open Concept 02 (High-Fashion Editorial Atelier)
Start-Process index2.html
```

Or serve via any static web server:
```powershell
npx serve .
# or
python -m http.server 8000
```

