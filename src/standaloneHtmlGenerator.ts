/**
 * Standalone Single-File HTML + CSS + Vanilla JS Generator
 * Menghasilkan 1 file HTML lengkap tanpa framework, siap diunduh dan di-upload ke hosting mana pun.
 */

export const STANDALONE_HTML_SOURCE = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO & Kredibilitas Merek -->
  <title>Black Blue MMC — Kembalinya Sang Legenda Vitalitas Pria</title>
  <meta name="description" content="Black Blue MMC hadir kembali. Suplemen herbal tradisional vitalitas pria dewasa berbentuk tablet heksagon hitam legendaris era 2000-an. Kemasan 1 botol isi 8 tablet." />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#07090E" />

  <!-- Open Graph & Social Card -->
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="Black Blue MMC Official" />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:title" content="Black Blue MMC — Kembalinya Sang Legenda Vitalitas Pria" />
  <meta property="og:description" content="Merek suplemen herbal tradisional legendaris era 2000-an kini kembali dengan standar kemasan modern. Tablet heksagon hitam khas, 1 botol isi 8 tablet." />
  <meta property="og:image" content="/assets/aistudio/Iklan_Futuristik_MMC_Black_Blue_7d13e01e.png" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Google Fonts: Outfit (Judul Tegas), Plus Jakarta Sans (Teks), JetBrains Mono (Data Angka) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Outfit:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Schema.org JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "#organization",
        "name": "Black Blue MMC",
        "description": "Merek suplemen herbal tradisional vitalitas pria dewasa legendaris di Indonesia sejak era 2000-an.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kota Bandung",
          "postalCode": "40242",
          "addressCountry": "ID"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-889-8087-4055",
          "contactType": "customer service",
          "areaServed": "ID",
          "availableLanguage": "Indonesian"
        },
        "sameAs": [
          "https://s.shopee.co.id/1qdLNuMjhs",
          "https://instagram.com/blackbluemmc"
        ]
      },
      {
        "@type": "Product",
        "@id": "#product",
        "name": "Black Blue MMC Tablet Heksagon Hitam",
        "brand": { "@type": "Brand", "name": "Black Blue MMC" },
        "category": "Suplemen Vitalitas Pria Dewasa",
        "description": "Suplemen vitalitas pria berbahan 100% herbal tradisional dalam bentuk tablet segi enam (heksagon) hitam. Kemasan 1 botol isi 8 tablet.",
        "offers": {
          "@type": "Offer",
          "url": "https://s.shopee.co.id/1qdLNuMjhs",
          "priceCurrency": "IDR",
          "price": "150000",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  }
  </script>

  <style>
    :root {
      --bg-obsidian: #07090E;
      --bg-surface: #0F1420;
      --bg-active: #11192C;
      --border-hairline: #1E293B;
      --accent-blue: #2563EB;
      --accent-blue-hover: #1D4ED8;
      --accent-cobalt-glow: rgba(37, 99, 235, 0.28);
      --chrome-silver: #CBD5E1;
      --text-primary: #F8FAFC;
      --text-secondary: #94A3B8;
      --text-muted: #64748B;
      --font-display: 'Outfit', system-ui, -apple-system, sans-serif;
      --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; background-color: var(--bg-obsidian); color: var(--text-primary); font-family: var(--font-sans); line-height: 1.6; }
    body { overflow-x: hidden; background-color: var(--bg-obsidian); }
    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; cursor: pointer; }

    .container { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 20px; }
    .section { padding: 48px 0; border-bottom: 1px solid var(--border-hairline); position: relative; }
    @media (min-width: 768px) {
      .section { padding: 72px 0; }
    }
    
    /* Tipografi */
    h1, h2, h3, h4 { font-family: var(--font-display); line-height: 1.2; letter-spacing: -0.02em; text-wrap: balance; }
    .kicker { font-size: 0.75rem; color: #93C5FD; font-weight: 600; letter-spacing: 0.04em; margin-bottom: 10px; display: block; text-transform: uppercase; }
    .section-title { font-size: clamp(1.625rem, 3.2vw, 2.375rem); margin-bottom: 12px; color: var(--text-primary); font-weight: 700; }
    .section-desc { color: var(--text-secondary); max-width: 65ch; font-size: 0.9375rem; line-height: 1.6; }
    .tabular { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }

    /* Navbar (3-Zone Contract) */
    .navbar { position: sticky; top: 0; z-index: 40; background: rgba(7, 9, 14, 0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-hairline); height: 64px; display: flex; align-items: center; }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; width: 100%; }
    .brand-logo { font-family: var(--font-display); font-weight: 700; font-size: 1.2rem; letter-spacing: 0.02em; white-space: nowrap; color: var(--text-primary); }
    .nav-links { display: none; gap: 24px; align-items: center; }
    .nav-links a { font-size: 0.875rem; font-weight: 500; color: var(--text-secondary); white-space: nowrap; transition: color 0.15s ease; }
    .nav-links a:hover { color: var(--text-primary); text-decoration: underline; text-underline-offset: 6px; }
    @media (min-width: 860px) { .nav-links { display: flex; } }

    /* Tombol */
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 0.875rem; white-space: nowrap; transition: all 0.15s ease; border: 1px solid transparent; }
    .btn:active { transform: scale(0.99); }
    .btn-primary { background-color: var(--accent-blue); color: #FFFFFF; }
    .btn-primary:hover { background-color: var(--accent-blue-hover); }
    .btn-outline { background-color: transparent; border-color: var(--border-hairline); color: var(--text-primary); }
    .btn-outline:hover { background-color: var(--bg-surface); border-color: #334155; }

    /* Hero */
    .hero-grid { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: center; padding: 24px 0; }
    @media (min-width: 960px) { .hero-grid { grid-template-columns: 1.15fr 0.85fr; padding: 48px 0; gap: 48px; } }
    .hero-title { font-size: clamp(2rem, 3.8vw, 3.5rem); margin-bottom: 16px; font-weight: 700; }
    .hero-sub { font-size: 1rem; color: var(--text-secondary); margin-bottom: 24px; max-width: 58ch; }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px; }
    .hero-meta { font-size: 0.8125rem; color: var(--text-secondary); display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }

    /* Hexagon Image Showcase */
    .product-showcase-box { background: #05070B; border: 1px solid var(--border-hairline); border-radius: 14px; padding: 14px; text-align: center; }
    .product-showcase-box img { width: 100%; max-height: 380px; object-fit: contain; border-radius: 10px; display: block; margin: 0 auto; }

    /* 5-Second Progress Animation */
    @keyframes barFiveSec {
      from { width: 0%; }
      to { width: 100%; }
    }
    .progress-bar-wrap { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #1E293B; overflow: hidden; }
    .progress-bar-fill { height: 100%; width: 0%; background: #3B82F6; }
    .progress-bar-fill.running { animation: barFiveSec 5s linear infinite; }

    /* Auto-Rotating Slide Card for Mobile (Minimalis Vertical Height) */
    .mobile-slider-block { display: block; margin-top: 20px; }
    .desktop-grid-block { display: none; margin-top: 28px; }
    @media (min-width: 768px) {
      .mobile-slider-block { display: none; }
      .desktop-grid-block { display: grid; }
    }

    .slide-dominant-card {
      background: var(--bg-active);
      border: 2px solid #3B82F6;
      border-radius: 14px;
      padding: 20px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 12px 36px rgba(37,99,235,0.22);
      transition: all 0.3s ease;
    }
    .slide-dots { display: flex; justify-content: center; align-items: center; gap: 6px; margin-top: 14px; }
    .slide-dot { height: 5px; width: 8px; border-radius: 9999px; background: #1E293B; border: none; transition: all 0.3s ease; }
    .slide-dot.active { width: 28px; background: #3B82F6; }

    /* Desktop Grids */
    .grid-2 { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .grid-3 { grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .card { background: var(--bg-surface); border: 1px solid var(--border-hairline); border-radius: 12px; padding: 22px; transition: border-color 0.2s ease; }
    .card:hover { border-color: #3B82F6; }
    .card-title { font-size: 1.125rem; font-weight: 700; margin-bottom: 8px; color: var(--text-primary); }
    .card-text { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

    /* Testimonial Spotlight Stage (No Arrow Buttons, Active Stopped Card Dominates) */
    .spotlight-container { position: relative; margin-top: 24px; }
    .spotlight-stage { display: grid; grid-template-columns: 1fr; gap: 16px; align-items: center; }
    @media (min-width: 960px) {
      .spotlight-stage { grid-template-columns: 1fr 2.4fr 1fr; gap: 20px; }
    }
    .review-card {
      border-radius: 14px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    .review-card.is-active {
      background: var(--bg-active);
      border: 2px solid #3B82F6;
      box-shadow: 0 16px 48px rgba(37,99,235,0.26);
      transform: scale(1);
      opacity: 1;
      display: flex;
    }
    .review-card.is-side {
      background: #0B101B;
      border: 1px solid var(--border-hairline);
      opacity: 0.4;
      transform: scale(0.92);
      display: none;
      cursor: pointer;
    }
    @media (min-width: 960px) {
      .review-card.is-side { display: flex; }
    }
    .review-card:not(.is-active):not(.is-side) { display: none; }
    .review-img-box { background: #FFFFFF; border-radius: 8px; padding: 6px; margin: 10px 0; border: 1px solid var(--border-hairline); }
    .review-img-box img { width: 100%; height: 160px; object-fit: contain; display: block; border-radius: 4px; }

    /* Tabel Komposisi */
    .table-wrap { overflow-x: auto; margin-top: 24px; border: 1px solid var(--border-hairline); border-radius: 12px; background: var(--bg-surface); }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th, td { padding: 14px 18px; border-bottom: 1px solid var(--border-hairline); font-size: 0.875rem; }
    th { color: var(--chrome-silver); font-weight: 600; background: rgba(19, 27, 46, 0.6); }
    tr:last-child td { border-bottom: none; }

    /* FAQ Accordion */
    .faq-item { border-bottom: 1px solid var(--border-hairline); }
    .faq-btn { width: 100%; text-align: left; background: none; border: none; color: var(--text-primary); padding: 18px 0; font-size: 1rem; font-weight: 600; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
    .faq-answer { display: none; padding-bottom: 18px; color: var(--text-secondary); font-size: 0.875rem; max-width: 70ch; line-height: 1.6; }
    .faq-item.open .faq-answer { display: block; }

    /* Age Gate Modal (18+) */
    .age-gate-backdrop { position: fixed; inset: 0; z-index: 100; background: rgba(7, 9, 14, 0.94); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; padding: 20px; }
    .age-gate-box { background: var(--bg-surface); border: 1px solid var(--border-hairline); border-radius: 16px; max-width: 440px; width: 100%; padding: 28px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
    .hidden { display: none !important; }

    /* Footer */
    footer { padding: 48px 0 32px; background: #05070B; color: var(--text-secondary); font-size: 0.8125rem; }
  </style>
</head>
<body>

  <!-- AGE GATE 18+ WAJIB -->
  <div id="ageGate" class="age-gate-backdrop" role="dialog" aria-modal="true" aria-labelledby="ageGateTitle">
    <div class="age-gate-box">
      <span class="kicker">VERIFIKASI USIA PENGUNJUNG (18+)</span>
      <h2 id="ageGateTitle" style="font-size: 1.375rem; margin-bottom: 10px;">Situs Ini Untuk Usia 18 Tahun ke Atas</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 20px;">
        Black Blue MMC adalah suplemen herbal tradisional vitalitas pria dewasa. Mohon konfirmasi bahwa Anda berusia minimal 18 tahun untuk melanjutkan.
      </p>
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <button id="btnAgeConfirm" class="btn btn-primary">Saya 18+ Tahun (Masuk)</button>
        <a href="https://www.google.com" class="btn btn-outline">Belum 18 Tahun</a>
      </div>
    </div>
  </div>

  <!-- 1. NAVBAR LENGKET (STICKY) -->
  <header class="navbar">
    <div class="container nav-inner">
      <a href="#" class="brand-logo">BLACK BLUE MMC</a>
      <nav class="nav-links" aria-label="Navigasi Utama">
        <a href="#cerita">Cerita Merek</a>
        <a href="#produk">Tentang Produk</a>
        <a href="#komposisi">Komposisi</a>
        <a href="#testimoni">Testimoni</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a href="#pesan" class="btn btn-primary">Pesan Sekarang</a>
    </div>
  </header>

  <main>
    <!-- 2. HERO SECTION -->
    <section class="section">
      <div class="container hero-grid">
        <div>
          <span class="kicker">KEMBALINYA SANG LEGENDA · SEJAK ERA 2000-AN</span>
          <h1 class="hero-title">Kembalinya Sang Legenda Vitalitas Pria Dewasa.</h1>
          <p class="hero-sub">
            Dikenal sejak era 2000-an lewat identitas tablet segi enam hitam yang legendaris. Kini Black Blue MMC hadir kembali dengan kemasan botol kedap udara isi 8 tablet untuk mendukung stamina dan kepercayaan diri pria dewasa.
          </p>
          <div class="hero-actions">
            <a href="#pesan" class="btn btn-primary">Beli Sekarang</a>
            <a href="#produk" class="btn btn-outline">Pelajari Lebih Lanjut</a>
          </div>
          <div class="hero-meta">
            <span>1 Botol Isi 8 Tablet</span>
            <span aria-hidden="true">·</span>
            <span>100% Herbal Alami</span>
            <span aria-hidden="true">·</span>
            <span>Pengiriman Privasi 100%</span>
          </div>
        </div>

        <!-- Foto Produk Asli Black Blue MMC -->
        <div class="product-showcase-box">
          <img
            src="/assets/aistudio/Iklan_Futuristik_MMC_Black_Blue_7d13e01e.png"
            alt="Kemasan Asli Black Blue MMC Tablet — Aman & Terpercaya, 100% Herbal Alami, Menjaga Stamina"
            loading="lazy"
          />
          <div style="margin-top: 12px;">
            <p style="font-size: 0.875rem; color: #FFFFFF; font-weight: 700;">Black Blue MMC Tablet Original</p>
            <p style="font-size: 0.75rem; color: #94A3B8;">Stamina · Performa · Percaya Diri (Kota Bandung 40242)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. CERITA MEREK / TIMELINE (AUTO-SLIDE 5 DETIK DI MOBILE) -->
    <section id="cerita" class="section">
      <div class="container">
        <span class="kicker">01. SEJARAH & REBRANDING</span>
        <h2 class="section-title">Perjalanan Dua Dekade Black Blue MMC</h2>
        <p class="section-desc">Dari masa keemasan era 2000-an hingga pembaruan standar kemasan modern hari ini.</p>

        <!-- Mobile Auto-Slider (1 Card Minimalis, Berganti tiap 5 Detik) -->
        <div class="mobile-slider-block" id="timelineSlider">
          <div class="slide-dominant-card">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill running" id="timelineProgress"></div>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 6px; pt: 4px;">
              <span id="tlPeriod" class="tabular" style="font-size:0.75rem; color:#93C5FD; font-weight:600;">ERA 2000 – 2009</span>
              <span id="tlPhase" style="font-size:0.75rem; color:#94A3B8;">01 / 04</span>
            </div>
            <h3 id="tlTitle" class="card-title">Lahirnya Identitas Segi Enam Hitam</h3>
            <p id="tlDesc" class="card-text">Black Blue MMC dikenal luas berkat ciri khas tablet segi enam hitam dan racikan herbal tradisional yang konsisten menjaga stamina.</p>
          </div>
          <div class="slide-dots" id="tlDots"></div>
        </div>

        <!-- Desktop Full 2x2 Grid -->
        <div class="desktop-grid-block grid-2">
          <div class="card">
            <span class="kicker tabular">ERA 2000 – 2009 · AWAL KEJAYAAN</span>
            <h3 class="card-title">01. Lahirnya Identitas Segi Enam Hitam</h3>
            <p class="card-text">Black Blue MMC dikenal luas oleh pria dewasa di berbagai kota Indonesia berkat ciri khas tablet heksagon berwarna hitam pekat dan racikan herbal tradisional yang konsisten.</p>
          </div>
          <div class="card">
            <span class="kicker tabular">ERA 2010 – 2020 · MASA JEDA PASAR</span>
            <h3 class="card-title">02. Perubahan Lanskap & Evaluasi</h3>
            <p class="card-text">Pergeseran pasar ke kanal online serta maraknya produk tiruan membuat distribusi resmi sempat dibatasi demi menjaga reputasi merek asli.</p>
          </div>
          <div class="card">
            <span class="kicker tabular">ERA 2024 – 2025 · PEMBARUAN STANDAR</span>
            <h3 class="card-title">03. Penyempurnaan Kemasan Botol 8 Tablet</h3>
            <p class="card-text">Menghadirkan kemasan botol pelindung kedap udara berisi 8 tablet heksagon untuk menjaga kualitas herbal tradisional dari kelembapan cuaca tropis.</p>
          </div>
          <div class="card">
            <span class="kicker tabular">2026 · KEMBALINYA SANG LEGENDA</span>
            <h3 class="card-title">04. Akses Resmi Langsung ke Konsumen</h3>
            <p class="card-text">Kini dipasarkan langsung melalui jalur resmi WhatsApp dan Shopee Official dengan jaminan keaslian dan pengiriman privasi terjaga dari Kota Bandung.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. TENTANG PRODUK (AUTO-SLIDE 5 DETIK DI MOBILE) -->
    <section id="produk" class="section">
      <div class="container">
        <span class="kicker">02. SPESIFIKASI & ATURAN PAKAI</span>
        <h2 class="section-title">Karakteristik Black Blue MMC & Panduan Konsumsi</h2>
        <p class="section-desc">Dirancang dengan bentuk tablet segi enam ikonik dan panduan konsumsi yang jelas sesuai kemasan.</p>
        
        <!-- Mobile Auto-Slider -->
        <div class="mobile-slider-block" id="specSlider">
          <div class="slide-dominant-card">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill running" id="specProgress"></div>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
              <span id="specCat" class="tabular" style="font-size:0.75rem; color:#93C5FD;">BENTUK & KEMASAN</span>
              <span id="specStep" style="font-size:0.75rem; color:#60A5FA;">01 / 04</span>
            </div>
            <h3 id="specTitle" class="card-title">Kemasan Isi 8 Tablet Segi Enam</h3>
            <p id="specDesc" class="card-text">Tablet padat segi enam berwarna hitam pekat dengan botol kedap udara agar terlindung rapat dari kelembapan.</p>
          </div>
          <div class="slide-dots" id="specDots"></div>
        </div>

        <!-- Desktop 2x2 Grid -->
        <div class="desktop-grid-block grid-2">
          <div class="card">
            <p class="kicker">BENTUK & KEMASAN</p>
            <h3 class="card-title">Kemasan Isi 8 Tablet Segi Enam</h3>
            <p class="card-text">Tablet padat segi enam berwarna hitam pekat dengan botol kedap udara agar terlindung rapat dari kelembapan.</p>
          </div>
          <div class="card">
            <p class="kicker">KANDUNGAN UTAMA</p>
            <h3 class="card-title">100% Herbal Tradisional Alami</h3>
            <p class="card-text">Diracik dari bahan herbal alami pilihan untuk membantu memelihara stamina, performa, dan kepercayaan diri pria dewasa.</p>
          </div>
          <div class="card">
            <p class="kicker">CARA KONSUMSI</p>
            <h3 class="card-title">1 Tablet + Air Putih Hangat</h3>
            <p class="card-text">Diminum sesudah makan dengan segelas air putih hangat sekitar 30–60 menit sebelum beraktivitas.</p>
          </div>
          <div class="card">
            <p class="kicker">ATURAN PAKAI KEMASAN</p>
            <h3 class="card-title">Maksimal 1 Tablet / 24 Jam</h3>
            <p class="card-text">Patuhi takaran saji yang dianjurkan pada label kemasan. Tidak untuk dikonsumsi melebihi dosis harian.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. KENAPA BLACK BLUE MMC (AUTO-SLIDE 5 DETIK DI MOBILE) -->
    <section class="section">
      <div class="container">
        <span class="kicker">03. KEUNGGULAN YANG DAPAT DIPERTANGGUNGJAWABKAN</span>
        <h2 class="section-title">Mengapa Pria Dewasa Memilih Black Blue MMC?</h2>
        <p class="section-desc">Tanpa klaim berlebihan. Kami berkomitmen pada keaslian produk, kejelasan aturan pakai, dan kenyamanan privasi Anda.</p>

        <!-- Mobile Auto-Slider -->
        <div class="mobile-slider-block" id="whySlider">
          <div class="slide-dominant-card">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill running" id="whyProgress"></div>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
              <span id="whyNum" class="tabular" style="font-size:0.75rem; color:#93C5FD; font-weight:700;">KEUNGGULAN 01</span>
              <span id="whyStep" style="font-size:0.75rem; color:#60A5FA;">01 / 06</span>
            </div>
            <h3 id="whyTitle" class="card-title">Warisan Merek Era 2000-an</h3>
            <p id="whyDesc" class="card-text">Bukan produk baru tanpa rekam jejak. Black Blue MMC membawa kembali reputasi klasik yang telah dikenal puluhan tahun oleh pria dewasa di Indonesia.</p>
          </div>
          <div class="slide-dots" id="whyDots"></div>
        </div>

        <!-- Desktop 3x2 Grid -->
        <div class="desktop-grid-block grid-3">
          <div class="card"><h3 class="card-title">01. Warisan Merek Era 2000-an</h3><p class="card-text">Bukan produk baru tanpa rekam jejak. Black Blue MMC membawa kembali reputasi klasik yang telah dikenal puluhan tahun oleh pria dewasa di Indonesia.</p></div>
          <div class="card"><h3 class="card-title">02. Basis Herbal Tradisional</h3><p class="card-text">Mengandalkan perpaduan ekstrak herbal tradisional yang secara turun-temurun digunakan untuk memelihara stamina.</p></div>
          <div class="card"><h3 class="card-title">03. Identitas Heksagon Hitam</h3><p class="card-text">Cetak tablet segi enam hitam presisi memudahkan pelanggan mengenali fisik asli produk Black Blue MMC.</p></div>
          <div class="card"><h3 class="card-title">04. Kemasan Botol Isi 8 Tablet</h3><p class="card-text">Kemasan botol pelindung kedap udara menjaga kualitas setiap butir tablet dari kelembapan hingga tablet terakhir.</p></div>
          <div class="card"><h3 class="card-title">05. Pengiriman Diskret (Privasi)</h3><p class="card-text">Setiap paket dibungkus polos tanpa tulisan produk vitalitas pada resi luar demi menjaga privasi pemesan.</p></div>
          <div class="card"><h3 class="card-title">06. Jalur Pembelian Resmi</h3><p class="card-text">Dilayani langsung melalui WhatsApp resmi (+62 889-8087-4055) dan Shopee Official untuk jaminan 100% keaslian.</p></div>
        </div>
      </div>
    </section>

    <!-- 6. KOMPOSISI & INFORMASI GIZI -->
    <section id="komposisi" class="section">
      <div class="container">
        <span class="kicker">04. TRANSPARANSI KOMPOSISI</span>
        <h2 class="section-title">Komposisi & Informasi Takaran Saji</h2>
        <p class="section-desc">Takaran Saji: 1 Tablet Heksagon · Jumlah Sajian Per Botol: 8 Tablet.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Komponen Herbal Tradisional</th>
                <th>Bentuk Ekstrak</th>
                <th>Takaran / Tablet</th>
                <th>Kegunaan Tradisional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Eurycoma longifolia Radix (Pasak Bumi)</strong></td>
                <td>Ekstrak Akar Kering Terstandar</td>
                <td class="tabular">200 mg</td>
                <td>Membantu memelihara stamina & vitalitas pria</td>
              </tr>
              <tr>
                <td><strong>Panax Ginseng Radix (Ginseng Merah)</strong></td>
                <td>Ekstrak Akar Terstandar</td>
                <td class="tabular">150 mg</td>
                <td>Mendukung daya tahan tubuh & kebugaran</td>
              </tr>
              <tr>
                <td><strong>Tribulus terrestris Fructus</strong></td>
                <td>Ekstrak Buah Terstandar</td>
                <td class="tabular">100 mg</td>
                <td>Tonikum tradisional penunjang stamina</td>
              </tr>
              <tr>
                <td><strong>Zingiber officinale Rhizoma (Jahe Merah)</strong></td>
                <td>Ekstrak Rimpang Alami</td>
                <td class="tabular">50 mg</td>
                <td>Menghangatkan tubuh & membantu sirkulasi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 7. TESTIMONI PELANGGAN (SLIDER 1 DEMI 1 SETIAP 5 DETIK, KARTU BERHENTI MENDOMINASI) -->
    <section id="testimoni" class="section" style="overflow: hidden;">
      <div class="container">
        <span class="kicker">05. BUKTI ULASAN & PENILAIAN PEMBELI ASLI</span>
        <h2 class="section-title">5.0 / 5.0 Penilaian Pembeli di Shopee Official</h2>
        <p class="section-desc">
          Slide berpindah otomatis satu demi satu setiap 5 detik tanpa tombol geser manual. Kartu yang berhenti di tengah tampil lebih mendominasi sebagai sorotan utama.
        </p>

        <div class="spotlight-container" id="reviewSpotlightBox">
          <div class="spotlight-stage" id="spotlightStage">
            <!-- Kartu 1 -->
            <div class="review-card is-active" data-idx="0">
              <div class="progress-bar-wrap"><div class="progress-bar-fill running"></div></div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;margin-bottom:6px;padding-top:4px;">
                <strong>syahrudinsyah243</strong>
                <span style="color:#FBBF24;">★★★★★</span>
              </div>
              <div class="review-img-box">
                <img src="/assets/aistudio/image_866426c9.png" alt="Bukti Ulasan syahrudinsyah243" loading="lazy" />
              </div>
              <p class="card-text" style="color:var(--text-primary);font-size:0.875rem;margin-bottom:6px;">Penilaian Bintang 5 terverifikasi untuk pembelian BLACK BLUE Vitalitas Pria (MMC 600mg).</p>
              <p class="tabular" style="font-size:0.75rem;color:#60A5FA;">2026-03-08 14:57 · Respon Penjual: "Terimakasih untuk penilaian bintang lima nya"</p>
            </div>
            <!-- Kartu 2 -->
            <div class="review-card is-side" data-idx="1">
              <div class="progress-bar-wrap"><div class="progress-bar-fill running"></div></div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;margin-bottom:6px;padding-top:4px;">
                <strong>asjsq945m2</strong>
                <span style="color:#FBBF24;">★★★★★</span>
              </div>
              <div class="review-img-box">
                <img src="/assets/aistudio/image_9fd019dc.png" alt="Bukti Ulasan asjsq945m2" loading="lazy" />
              </div>
              <p class="card-text" style="color:var(--text-primary);font-size:0.875rem;margin-bottom:6px;">"Next order lagi, istri ampun" bos nikmat bgt katanya" · Keaslian: Asli · Original 100%.</p>
              <p class="tabular" style="font-size:0.75rem;color:#60A5FA;">2026-01-15 17:06 · Pembeli Terverifikasi Shopee</p>
            </div>
            <!-- Kartu 3 -->
            <div class="review-card" data-idx="2">
              <div class="progress-bar-wrap"><div class="progress-bar-fill running"></div></div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;margin-bottom:6px;padding-top:4px;">
                <strong>s*****7</strong>
                <span style="color:#FBBF24;">★★★★★</span>
              </div>
              <div class="review-img-box">
                <img src="/assets/aistudio/image_20414483.png" alt="Bukti Ulasan s*****7" loading="lazy" />
              </div>
              <p class="card-text" style="color:var(--text-primary);font-size:0.875rem;margin-bottom:6px;">"barang telah sampai dengan kondisi baik, produk sangat bagus sesuai dengan poto, hasil sangat memuaskan sekali"</p>
              <p class="tabular" style="font-size:0.75rem;color:#60A5FA;">2026-01-11 09:34 · Pembeli Terverifikasi Shopee</p>
            </div>
            <!-- Kartu 4 -->
            <div class="review-card" data-idx="3">
              <div class="progress-bar-wrap"><div class="progress-bar-fill running"></div></div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;margin-bottom:6px;padding-top:4px;">
                <strong>f*****d</strong>
                <span style="color:#FBBF24;">★★★★★</span>
              </div>
              <div class="review-img-box">
                <img src="/assets/aistudio/image_32e2a4f7.png" alt="Bukti Ulasan f*****d" loading="lazy" />
              </div>
              <p class="card-text" style="color:var(--text-primary);font-size:0.875rem;margin-bottom:6px;">"Barang sampai dengan kondisi baik, produk sesuai dengan yang di posting, dan hasil dari produk sangat memuaskan"</p>
              <p class="tabular" style="font-size:0.75rem;color:#60A5FA;">2026-01-10 23:39 · Pembeli Terverifikasi Shopee</p>
            </div>
            <!-- Kartu 5 -->
            <div class="review-card is-side" data-idx="4">
              <div class="progress-bar-wrap"><div class="progress-bar-fill running"></div></div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;margin-bottom:6px;padding-top:4px;">
                <strong>mujibsigol</strong>
                <span style="color:#FBBF24;">★★★★★</span>
              </div>
              <div class="review-img-box">
                <img src="/assets/aistudio/image_6743d7db.png" alt="Bukti Ulasan mujibsigol" loading="lazy" />
              </div>
              <p class="card-text" style="color:var(--text-primary);font-size:0.875rem;margin-bottom:6px;">Penilaian Bintang 5 terverifikasi untuk pembelian produk BLACK BLUE MMC Original.</p>
              <p class="tabular" style="font-size:0.75rem;color:#60A5FA;">2025-12-17 12:31 · Respon: "Terimakasih untuk penilaian bintang limanya kka"</p>
            </div>
          </div>
          <div class="slide-dots" id="reviewDots"></div>
        </div>
      </div>
    </section>

    <!-- 8. FAQ (ACCORDION INTERAKTIF) -->
    <section id="faq" class="section">
      <div class="container">
        <span class="kicker">06. PERTANYAAN UMUM</span>
        <h2 class="section-title">Tanya Jawab Seputar Black Blue MMC</h2>
        <div style="margin-top: 20px;">
          <div class="faq-item open">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Bagaimana aturan pakai dan cara konsumsi Black Blue MMC yang benar?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Konsumsi 1 tablet segi enam dengan segelas air putih hangat sesudah makan, sekitar 30–60 menit sebelum beraktivitas. Jangan melebihi 1 tablet dalam 24 jam dan selalu baca petunjuk pada label botol.</div>
          </div>
          <div class="faq-item">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Siapa saja yang boleh dan TIDAK boleh mengonsumsi produk ini?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Khusus pria dewasa berusia 18 tahun ke atas. DILARANG bagi wanita hamil, ibu menyusui, dan anak-anak. Pria dengan riwayat gangguan jantung kronis atau hipertensi tidak terkontrol wajib berkonsultasi dengan dokter.</div>
          </div>
          <div class="faq-item">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Apakah pengiriman paket menjamin privasi pembeli?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Ya. Setiap pesanan melalui WhatsApp maupun Shopee dikemas dalam kardus tertutup rapat tanpa mencantumkan nama suplemen vitalitas pada label luar paket (100% privasi aman).</div>
          </div>
          <div class="faq-item">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Bagaimana cara menyimpan tablet agar tetap terjaga kualitasnya?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Tutup kembali botol dengan rapat segera setelah mengambil tablet. Simpan di tempat sejuk dan kering pada suhu ruang (di bawah 30°C) serta terhindar dari paparan sinar matahari langsung.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. CARA PEMESANAN / CTA & KEPATUHAN -->
    <section id="pesan" class="section">
      <div class="container">
        <div class="card" style="padding: 28px; border-color: #1D4ED8; background: #0F1420;">
          <span class="kicker">07. KANAL PEMBELIAN RESMI</span>
          <h2 class="section-title">Pesan Black Blue MMC Asli Sekarang</h2>
          <p class="section-desc" style="margin-bottom: 20px;">
            1 Botol Isi 8 Tablet Heksagon Hitam · Pengiriman Diskret dari Kota Bandung 40242.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
            <a href="https://wa.me/6288980874055?text=Halo%20Admin%20Black%20Blue%20MMC%2C%20saya%20berusia%2018%2B%20tahun%20dan%20ingin%20memesan%201%20Botol%20(Isi%208%20Tablet)%20resmi." target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Pesan via WhatsApp (+62 889-8087-4055)
            </a>
            <a href="https://s.shopee.co.id/1qdLNuMjhs" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              Checkout via Shopee Official
            </a>
          </div>

          <div style="padding-top: 18px; border-top: 1px solid var(--border-hairline); font-size: 0.8125rem; color: var(--text-secondary);">
            <p style="margin-bottom: 4px;"><strong>PERINGATAN KEPATUHAN:</strong> Khusus pria dewasa 18+. Tidak untuk wanita hamil, ibu menyusui, dan anak-anak.</p>
            <p><strong>DISCLAIMER:</strong> Hasil dapat berbeda pada tiap orang tergantung metabolisme dan kondisi fisik masing-masing.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 10. FOOTER -->
  <footer>
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-bottom: 32px;">
        <div>
          <p class="brand-logo" style="margin-bottom: 8px;">BLACK BLUE MMC</p>
          <p style="line-height: 1.5;">Suplemen vitalitas pria dewasa berbahan herbal tradisional dengan ciri khas tablet segi enam hitam sejak era 2000-an.</p>
        </div>
        <div>
          <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 8px;">Kontak & Alamat</p>
          <p>WhatsApp: +62 889-8087-4055</p>
          <p>Kota Bandung 40242, Jawa Barat</p>
          <p>Instagram: @blackbluemmc</p>
        </div>
        <div>
          <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 8px;">Kepatuhan</p>
          <p>Khusus usia 18 tahun ke atas. Kemasan 1 botol isi 8 tablet. Pengiriman diskret terjamin.</p>
        </div>
      </div>
      <div style="padding-top: 16px; border-top: 1px solid var(--border-hairline); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; font-size: 0.75rem; color: #64748B;">
        <span>© 2026 Black Blue MMC Official. Hak Cipta Dilindungi.</span>
        <span>Kota Bandung 40242 · @blackbluemmc</span>
      </div>
    </div>
  </footer>

  <script>
    (function() {
      // 1. Age Gate Local Storage check
      var ageGate = document.getElementById('ageGate');
      var btnConfirm = document.getElementById('btnAgeConfirm');
      try {
        if (localStorage.getItem('bbmmc_age_verified') === 'true') {
          ageGate.classList.add('hidden');
        }
      } catch (e) {}
      if (btnConfirm) {
        btnConfirm.addEventListener('click', function() {
          ageGate.classList.add('hidden');
          try { localStorage.setItem('bbmmc_age_verified', 'true'); } catch (e) {}
        });
      }

      // 2. Timeline Mobile 5s Auto-Slider
      var tlData = [
        { period: 'ERA 2000 – 2009', phase: '01 / 04', title: 'Lahirnya Identitas Segi Enam Hitam', desc: 'Black Blue MMC dikenal luas berkat ciri khas tablet segi enam hitam dan racikan herbal tradisional yang konsisten menjaga stamina.' },
        { period: 'ERA 2010 – 2020', phase: '02 / 04', title: 'Perubahan Lanskap & Evaluasi', desc: 'Pergeseran pasar ke kanal online membuat distribusi resmi diperketat demi menjaga reputasi dan keaslian produk.' },
        { period: 'ERA 2024 – 2025', phase: '03 / 04', title: 'Penyempurnaan Kemasan Botol', desc: 'Menghadirkan kemasan botol kedap udara isi 8 tablet untuk melindungi racikan herbal dari kelembapan udara tropis.' },
        { period: '2026', phase: '04 / 04', title: 'Akses Resmi Langsung Konsumen', desc: 'Kini dipasarkan langsung via WhatsApp dan Shopee Official dengan jaminan keaslian dan pengiriman privasi dari Kota Bandung.' }
      ];
      var tlIdx = 0;
      var tlDotsWrap = document.getElementById('tlDots');
      if (tlDotsWrap) {
        tlDotsWrap.innerHTML = tlData.map(function(_, i) {
          return '<button class="slide-dot' + (i === 0 ? ' active' : '') + '" onclick="setTl(' + i + ')"></button>';
        }).join('');
      }
      window.setTl = function(i) {
        tlIdx = i;
        document.getElementById('tlPeriod').textContent = tlData[tlIdx].period;
        document.getElementById('tlPhase').textContent = tlData[tlIdx].phase;
        document.getElementById('tlTitle').textContent = tlData[tlIdx].title;
        document.getElementById('tlDesc').textContent = tlData[tlIdx].desc;
        var dots = tlDotsWrap.querySelectorAll('.slide-dot');
        dots.forEach(function(d, dIdx) { d.classList.toggle('active', dIdx === tlIdx); });
      };
      setInterval(function() {
        tlIdx = (tlIdx + 1) % tlData.length;
        window.setTl(tlIdx);
      }, 5000);

      // 3. Specs Mobile 5s Auto-Slider
      var specData = [
        { cat: 'BENTUK & KEMASAN', step: '01 / 04', title: 'Kemasan Isi 8 Tablet Segi Enam', desc: 'Tablet padat segi enam berwarna hitam pekat dengan botol kedap udara agar terlindung rapat dari kelembapan.' },
        { cat: 'KANDUNGAN UTAMA', step: '02 / 04', title: '100% Herbal Tradisional Alami', desc: 'Diracik dari bahan herbal alami pilihan untuk memelihara stamina, performa, dan kepercayaan diri pria dewasa.' },
        { cat: 'CARA KONSUMSI', step: '03 / 04', title: '1 Tablet + Air Putih Hangat', desc: 'Diminum sesudah makan dengan segelas air putih hangat sekitar 30–60 menit sebelum beraktivitas.' },
        { cat: 'ATURAN PAKAI KEMASAN', step: '04 / 04', title: 'Maksimal 1 Tablet / 24 Jam', desc: 'Patuhi takaran saji pada label botol. Tidak untuk dikonsumsi melebihi dosis harian yang dianjurkan.' }
      ];
      var specIdx = 0;
      var specDotsWrap = document.getElementById('specDots');
      if (specDotsWrap) {
        specDotsWrap.innerHTML = specData.map(function(_, i) {
          return '<button class="slide-dot' + (i === 0 ? ' active' : '') + '" onclick="setSpec(' + i + ')"></button>';
        }).join('');
      }
      window.setSpec = function(i) {
        specIdx = i;
        document.getElementById('specCat').textContent = specData[specIdx].cat;
        document.getElementById('specStep').textContent = specData[specIdx].step;
        document.getElementById('specTitle').textContent = specData[specIdx].title;
        document.getElementById('specDesc').textContent = specData[specIdx].desc;
        var dots = specDotsWrap.querySelectorAll('.slide-dot');
        dots.forEach(function(d, dIdx) { d.classList.toggle('active', dIdx === specIdx); });
      };
      setInterval(function() {
        specIdx = (specIdx + 1) % specData.length;
        window.setSpec(specIdx);
      }, 5000);

      // 4. Why Points Mobile 5s Auto-Slider
      var whyData = [
        { num: 'KEUNGGULAN 01', step: '01 / 06', title: 'Warisan Merek Era 2000-an', desc: 'Bukan produk baru tanpa rekam jejak. Black Blue MMC membawa kembali reputasi klasik yang telah dikenal puluhan tahun oleh pria dewasa.' },
        { num: 'KEUNGGULAN 02', step: '02 / 06', title: 'Basis Herbal Tradisional', desc: 'Mengandalkan perpaduan ekstrak herbal tradisional yang secara turun-temurun digunakan untuk memelihara stamina.' },
        { num: 'KEUNGGULAN 03', step: '03 / 06', title: 'Identitas Heksagon Hitam', desc: 'Cetak tablet segi enam hitam presisi memudahkan pelanggan mengenali fisik asli produk Black Blue MMC.' },
        { num: 'KEUNGGULAN 04', step: '04 / 06', title: 'Kemasan Botol Isi 8 Tablet', desc: 'Kemasan botol pelindung kedap udara menjaga kualitas setiap butir tablet dari kelembapan hingga tablet terakhir.' },
        { num: 'KEUNGGULAN 05', step: '05 / 06', title: 'Pengiriman Diskret (Privasi)', desc: 'Setiap paket dibungkus polos tanpa tulisan produk vitalitas pada resi luar demi menjaga privasi pemesan.' },
        { num: 'KEUNGGULAN 06', step: '06 / 06', title: 'Jalur Pembelian Resmi', desc: 'Dilayani langsung via WhatsApp resmi (+62 889-8087-4055) dan Shopee Official untuk jaminan 100% keaslian.' }
      ];
      var whyIdx = 0;
      var whyDotsWrap = document.getElementById('whyDots');
      if (whyDotsWrap) {
        whyDotsWrap.innerHTML = whyData.map(function(_, i) {
          return '<button class="slide-dot' + (i === 0 ? ' active' : '') + '" onclick="setWhy(' + i + ')"></button>';
        }).join('');
      }
      window.setWhy = function(i) {
        whyIdx = i;
        document.getElementById('whyNum').textContent = whyData[whyIdx].num;
        document.getElementById('whyStep').textContent = whyData[whyIdx].step;
        document.getElementById('whyTitle').textContent = whyData[whyIdx].title;
        document.getElementById('whyDesc').textContent = whyData[whyIdx].desc;
        var dots = whyDotsWrap.querySelectorAll('.slide-dot');
        dots.forEach(function(d, dIdx) { d.classList.toggle('active', dIdx === whyIdx); });
      };
      setInterval(function() {
        whyIdx = (whyIdx + 1) % whyData.length;
        window.setWhy(whyIdx);
      }, 5000);

      // 5. Testimoni 5-Second Step-by-Step Spotlight Slider
      var stage = document.getElementById('spotlightStage');
      var revDotsWrap = document.getElementById('reviewDots');
      if (stage) {
        var cards = Array.prototype.slice.call(stage.querySelectorAll('.review-card'));
        var activeReviewIdx = 0;
        var paused = false;

        if (revDotsWrap) {
          revDotsWrap.innerHTML = cards.map(function(_, i) {
            return '<button class="slide-dot' + (i === 0 ? ' active' : '') + '" onclick="jumpReview(' + i + ')"></button>';
          }).join('');
        }

        function renderSpotlight() {
          var total = cards.length;
          var prevIdx = (activeReviewIdx - 1 + total) % total;
          var nextIdx = (activeReviewIdx + 1) % total;
          cards.forEach(function(c, idx) {
            c.classList.remove('is-active', 'is-side');
            c.style.order = '99';
            if (idx === prevIdx) {
              c.classList.add('is-side');
              c.style.order = '1';
            } else if (idx === activeReviewIdx) {
              c.classList.add('is-active');
              c.style.order = '2';
            } else if (idx === nextIdx) {
              c.classList.add('is-side');
              c.style.order = '3';
            }
          });
          if (revDotsWrap) {
            var dots = revDotsWrap.querySelectorAll('.slide-dot');
            dots.forEach(function(d, dIdx) { d.classList.toggle('active', dIdx === activeReviewIdx); });
          }
        }

        window.jumpReview = function(i) {
          activeReviewIdx = i;
          renderSpotlight();
        };

        renderSpotlight();

        setInterval(function() {
          if (!paused) {
            activeReviewIdx = (activeReviewIdx + 1) % cards.length;
            renderSpotlight();
          }
        }, 5000);

        var box = document.getElementById('reviewSpotlightBox');
        if (box) {
          box.addEventListener('mouseenter', function() { paused = true; });
          box.addEventListener('mouseleave', function() { paused = false; });
          box.addEventListener('touchstart', function() { paused = true; }, { passive: true });
          box.addEventListener('touchend', function() { paused = false; });
        }
      }
    })();
  </script>
</body>
</html>`;
