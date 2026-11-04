/**
 * Standalone Single-File HTML + CSS + Vanilla JS Generator
 * Menghasilkan 1 file HTML lengkap tanpa framework berat, siap di-upload ke hosting mana pun.
 */

export const STANDALONE_HTML_SOURCE = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- [EDIT DI SINI: Judul & Deskripsi SEO] -->
  <title>Black Blue MMC — Kembalinya Sang Legenda Vitalitas Pria</title>
  <meta name="description" content="Black Blue MMC hadir kembali. Suplemen herbal tradisional vitalitas pria dewasa berbentuk tablet heksagon hitam legendaris era 2000-an. Kemasan 1 botol isi 8 tablet." />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#07090E" />

  <!-- [EDIT DI SINI: Open Graph & Social Card] -->
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="Black Blue MMC Official" />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:title" content="Black Blue MMC — Kembalinya Sang Legenda Vitalitas Pria" />
  <meta property="og:description" content="Merek suplemen herbal tradisional legendaris era 2000-an kini kembali dengan standar modern. Tablet heksagon hitam khas, 1 botol isi 8 tablet." />
  <!-- Ganti URL gambar og:image di bawah dengan URL foto produk asli setelah di-hosting -->
  <meta property="og:image" content="https://domain-anda.com/assets/black-blue-mmc-og.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Google Fonts: Outfit (Judul Tegas), Plus Jakarta Sans (Teks Bacaan), JetBrains Mono (Tabel Angka) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Outfit:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- [EDIT DI SINI: Schema.org JSON-LD Product & Organization] -->
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
        "name": "Black Blue MMC — 1 Botol Isi 8 Tablet Heksagon",
        "brand": { "@type": "Brand", "name": "Black Blue MMC" },
        "category": "Suplemen Kesehatan & Vitalitas Pria",
        "description": "Suplemen vitalitas pria berbahan herbal tradisional dalam bentuk tablet segi enam (heksagon) hitam. Kemasan 1 botol isi 8 tablet.",
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
      --bg-card: #131B2E;
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
    .section { padding: 80px 0; border-bottom: 1px solid var(--border-hairline); position: relative; }
    
    /* Tipografi */
    h1, h2, h3, h4 { font-family: var(--font-display); line-height: 1.15; letter-spacing: -0.02em; text-wrap: balance; }
    .kicker { font-size: 0.8125rem; color: var(--chrome-silver); letter-spacing: 0.04em; margin-bottom: 12px; display: block; }
    .section-title { font-size: clamp(1.75rem, 3vw, 2.5rem); margin-bottom: 16px; color: var(--text-primary); }
    .section-desc { color: var(--text-secondary); max-width: 65ch; font-size: 1rem; }
    .tabular { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }

    /* Navbar (3-Zone Contract) */
    .navbar { position: sticky; top: 0; z-index: 40; background: rgba(7, 9, 14, 0.9); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-hairline); height: 68px; display: flex; align-items: center; }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; width: 100%; }
    .brand-logo { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; letter-spacing: 0.02em; white-space: nowrap; color: var(--text-primary); }
    .nav-links { display: none; gap: 28px; align-items: center; }
    .nav-links a { font-size: 0.875rem; font-weight: 500; color: var(--text-secondary); white-space: nowrap; transition: color 0.15s ease; }
    .nav-links a:hover { color: var(--text-primary); text-decoration: underline; text-underline-offset: 6px; }
    @media (min-width: 860px) { .nav-links { display: flex; } }

    /* Tombol */
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 0.875rem; white-space: nowrap; transition: transform 0.15s ease, background-color 0.15s ease; border: 1px solid transparent; }
    .btn:active { transform: scale(0.99); }
    .btn-primary { background-color: var(--accent-blue); color: #FFFFFF; }
    .btn-primary:hover { background-color: var(--accent-blue-hover); }
    .btn-outline { background-color: transparent; border-color: var(--border-hairline); color: var(--text-primary); }
    .btn-outline:hover { background-color: var(--bg-surface); border-color: #334155; }

    /* Hero */
    .hero-grid { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; padding: 48px 0; }
    @media (min-width: 960px) { .hero-grid { grid-template-columns: 1.1fr 0.9fr; padding: 72px 0; } }
    .hero-title { font-size: clamp(2.25rem, 4.2vw, 3.75rem); margin-bottom: 20px; }
    .hero-sub { font-size: 1.0625rem; color: var(--text-secondary); margin-bottom: 32px; max-width: 58ch; }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 32px; }
    .hero-meta { font-size: 0.8125rem; color: var(--text-secondary); display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }

    /* Visual Tablet Heksagon */
    .hex-stage { background: radial-gradient(circle at center, var(--accent-cobalt-glow) 0%, rgba(15,20,32,0.4) 70%); border: 1px solid var(--border-hairline); border-radius: 16px; padding: 36px 24px; text-align: center; position: relative; }
    .hex-svg-wrap { max-width: 280px; margin: 0 auto 20px; filter: drop-shadow(0 16px 32px rgba(37, 99, 235, 0.25)); }

    /* Grid & Kartu */
    .grid-2 { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 40px; }
    .grid-3 { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 40px; }
    @media (min-width: 768px) {
      .grid-2 { grid-template-columns: repeat(2, 1fr); }
      .grid-3 { grid-template-columns: repeat(3, 1fr); }
    }
    .card { background-color: var(--bg-surface); border: 1px solid var(--border-hairline); border-radius: 12px; padding: 28px; }
    .card-title { font-size: 1.1875rem; margin-bottom: 10px; color: var(--text-primary); }
    .card-text { font-size: 0.9375rem; color: var(--text-secondary); }

    /* Tabel Komposisi */
    .table-wrap { overflow-x: auto; margin-top: 32px; border: 1px solid var(--border-hairline); border-radius: 12px; background: var(--bg-surface); }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th, td { padding: 16px 20px; border-bottom: 1px solid var(--border-hairline); font-size: 0.9375rem; }
    th { color: var(--chrome-silver); font-weight: 600; background: rgba(19, 27, 46, 0.6); }
    tr:last-child td { border-bottom: none; }

    /* FAQ Accordion */
    .faq-item { border-bottom: 1px solid var(--border-hairline); }
    .faq-btn { width: 100%; text-align: left; background: none; border: none; color: var(--text-primary); padding: 20px 0; font-size: 1.0625rem; font-weight: 600; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
    .faq-answer { display: none; padding-bottom: 20px; color: var(--text-secondary); font-size: 0.9375rem; max-width: 70ch; }
    .faq-item.open .faq-answer { display: block; }

    /* Age Gate Modal (18+) */
    .age-gate-backdrop { position: fixed; inset: 0; z-index: 100; background: rgba(7, 9, 14, 0.92); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; padding: 20px; }
    .age-gate-box { background: var(--bg-surface); border: 1px solid var(--border-hairline); border-radius: 16px; max-width: 460px; width: 100%; padding: 32px; text-align: center; }
    .hidden { display: none !important; }

    /* Footer */
    footer { padding: 64px 0 40px; background: #05070B; color: var(--text-secondary); font-size: 0.875rem; }
  </style>
</head>
<body>

  <!-- AGE GATE 18+ WAJIB -->
  <div id="ageGate" class="age-gate-backdrop" role="dialog" aria-modal="true" aria-labelledby="ageGateTitle">
    <div class="age-gate-box">
      <span class="kicker">VERIFIKASI USIA PENGUNJUNG</span>
      <h2 id="ageGateTitle" style="font-size: 1.5rem; margin-bottom: 12px;">Situs Ini Untuk Usia 18 Tahun ke Atas</h2>
      <p style="color: var(--text-secondary); font-size: 0.9375rem; margin-bottom: 24px;">
        Black Blue MMC adalah suplemen kesehatan & vitalitas pria dewasa. Mohon konfirmasi bahwa Anda berusia minimal 18 tahun untuk melanjutkan.
      </p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
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
      <!-- [EDIT DI SINI: Nomor WhatsApp pada tombol Navbar] -->
      <a href="https://wa.me/6288980874055?text=Halo%20Admin%20Black%20Blue%20MMC%2C%20saya%20ingin%20memesan%201%20Botol%20(Isi%208%20Tablet)." target="_blank" rel="noopener noreferrer" class="btn btn-primary">Pesan Sekarang</a>
    </div>
  </header>

  <main>
    <!-- 2. HERO SECTION -->
    <section class="section">
      <div class="container hero-grid">
        <div>
          <span class="kicker">WARISAN ERA 2000-AN · FORMULASI HERBAL TRADISIONAL</span>
          <h1 class="hero-title">Kembalinya Sang Legenda Vitalitas Pria Dewasa.</h1>
          <p class="hero-sub">
            Dikenal sejak awal 2000-an lewat identitas tablet segi enam hitam yang ikonik. Kini Black Blue MMC hadir kembali dalam kemasan botol kedap udara isi 8 tablet untuk mendukung stamina harian pria dewasa.
          </p>
          <div class="hero-actions">
            <a href="#pesan" class="btn btn-primary">Beli Sekarang</a>
            <a href="#produk" class="btn btn-outline">Pelajari Lebih Lanjut</a>
          </div>
          <div class="hero-meta">
            <span>1 Botol Isi 8 Tablet</span>
            <span aria-hidden="true">·</span>
            <span>Ekstrak Herbal Tradisional</span>
            <span aria-hidden="true">·</span>
            <span>Pengiriman Privasi Terjaga</span>
          </div>
        </div>

        <!-- Foto Produk Asli Black Blue MMC -->
        <div class="hex-stage" style="padding: 16px;">
          <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--border-hairline); margin-bottom: 14px; background: #05070B;">
            <img
              src="/assets/aistudio/Iklan_Futuristik_MMC_Black_Blue_7d13e01e.png"
              alt="Kemasan Asli Black Blue MMC Tablet — Stamina, Performa, Percaya Diri"
              style="width: 100%; height: auto; display: block;"
            />
          </div>
          <p style="font-size: 0.875rem; color: var(--chrome-silver); font-weight: 600;">Kemasan Resmi Black Blue MMC Tablet</p>
          <p style="font-size: 0.8125rem; color: var(--text-secondary);">100% Herbal Alami · Menjaga Stamina & Kepercayaan Diri</p>
        </div>
      </div>
    </section>

    <!-- 3. CERITA MEREK / TIMELINE -->
    <section id="cerita" class="section">
      <div class="container">
        <span class="kicker">01. SEJARAH & REBRANDING</span>
        <h2 class="section-title">Perjalanan Dua Dekade Black Blue MMC</h2>
        <p class="section-desc">Dari masa keemasan era 2000-an hingga pembaruan standar kemasan modern hari ini.</p>

        <!-- [EDIT DI SINI: Tahun dan narasi sejarah merek dapat disesuaikan] -->
        <div class="grid-2">
          <div class="card">
            <span class="kicker tabular">ERA 2000 – 2009 · AWAL KEJAYAAN</span>
            <h3 class="card-title">Lahirnya Identitas Segi Enam Hitam</h3>
            <p class="card-text">Black Blue MMC dikenal luas oleh pria dewasa di berbagai kota Indonesia berkat ciri khas tablet heksagon berwarna hitam pekat dan racikan herbal tradisional yang konsisten.</p>
          </div>
          <div class="card">
            <span class="kicker tabular">ERA 2010 – 2020 · MASA JEDA PASAR</span>
            <h3 class="card-title">Perubahan Lanskap & Evaluasi Distribusi</h3>
            <p class="card-text">Pergeseran pasar ke kanal online serta maraknya produk tiruan membuat distribusi resmi sempat dibatasi demi menjaga reputasi merek asli.</p>
          </div>
          <div class="card">
            <span class="kicker tabular">ERA 2024 – 2025 · PEMBARUAN STANDAR</span>
            <h3 class="card-title">Penyempurnaan Kemasan Botol 8 Tablet</h3>
            <p class="card-text">Menghadirkan kemasan botol pelindung kedap udara berisi 8 tablet heksagon untuk menjaga kualitas herbal tradisional dari kelembapan cuaca tropis.</p>
          </div>
          <div class="card">
            <span class="kicker tabular">2026 · KEMBALINYA SANG LEGENDA</span>
            <h3 class="card-title">Akses Resmi Langsung ke Konsumen</h3>
            <p class="card-text">Kini dipasarkan langsung melalui jalur resmi WhatsApp dan Shopee Official dengan jaminan keaslian dan pengiriman privasi terjaga dari Kota Bandung.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. TENTANG PRODUK -->
    <section id="produk" class="section">
      <div class="container">
        <span class="kicker">02. SPESIFIKASI & ATURAN PAKAI</span>
        <h2 class="section-title">Tentang Produk Black Blue MMC</h2>
        <p class="section-desc">Dirancang dengan bentuk tablet segi enam ikonik dan panduan konsumsi yang jelas sesuai kemasan.</p>
        <div class="grid-3">
          <div class="card">
            <h3 class="card-title">Bentuk & Kemasan</h3>
            <p class="card-text">Tablet cetak segi enam (heksagon) berwarna hitam. Dikemas dalam 1 botol pelindung berisi 8 tablet untuk kemudahan penyimpanan.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Kandungan Utama</h3>
            <p class="card-text">Mengandalkan ekstrak Herbal Tradisional pilihan yang diformulasikan untuk membantu memelihara stamina pria dewasa.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Aturan Pakai Kemasan</h3>
            <p class="card-text">Konsumsi 1 tablet dengan air putih hangat sesudah makan, 30–60 menit sebelum beraktivitas. Maksimal 1 tablet dalam 24 jam.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. KENAPA BLACK BLUE MMC -->
    <section class="section">
      <div class="container">
        <span class="kicker">03. NILAI UTAMA</span>
        <h2 class="section-title">Mengapa Memilih Black Blue MMC Resmi?</h2>
        <div class="grid-3">
          <div class="card"><h3 class="card-title">01. Reputasi Sejak 2000-an</h3><p class="card-text">Merek klasik yang telah dikenal lintas generasi dan kini dikelola dengan jalur distribusi resmi terverifikasi.</p></div>
          <div class="card"><h3 class="card-title">02. Basis Herbal Tradisional</h3><p class="card-text">Menggunakan bahan baku herbal tradisional dengan informasi komposisi yang transparan.</p></div>
          <div class="card"><h3 class="card-title">03. Tablet Heksagon Khas</h3><p class="card-text">Bentuk segi enam hitam presisi memudahkan identifikasi fisik tablet Black Blue MMC yang asli.</p></div>
          <div class="card"><h3 class="card-title">04. Botol Kedap Isi 8 Tablet</h3><p class="card-text">Lebih higienis dibandingkan kemasan strip terbuka, menjaga tablet tetap kering dan utuh.</p></div>
          <div class="card"><h3 class="card-title">05. Pengiriman Privasi (Diskret)</h3><p class="card-text">Paket dikemas polos dan rapi tanpa mencantumkan nama/jenis suplemen vitalitas pada label resi luar.</p></div>
          <div class="card"><h3 class="card-title">06. Konsultasi & Order Mudah</h3><p class="card-text">Tersedia layanan pelanggan responsif melalui WhatsApp resmi maupun checkout aman via Shopee.</p></div>
        </div>
      </div>
    </section>

    <!-- 6. KOMPOSISI & INFORMASI GIZI -->
    <section id="komposisi" class="section">
      <div class="container">
        <span class="kicker">04. TRANSPARANSI KOMPOSISI</span>
        <h2 class="section-title">Komposisi & Informasi Takaran Saji</h2>
        <p class="section-desc">Takaran Saji: 1 Tablet Heksagon · Jumlah Sajian Per Kemasan: 8 Tablet (1 Botol).</p>
        <!-- [EDIT DI SINI: Sesuaikan nama ekstrak dan miligram persis dengan label kemasan/BPOM Anda] -->
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Komponen Herbal Tradisional</th>
                <th>Bagian Tanaman / Bentuk</th>
                <th>Takaran Per Tablet</th>
                <th>Fungsi Tradisional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Eurycoma longifolia (Pasak Bumi)</strong> [Placeholder]</td>
                <td>Ekstrak Akar Kering</td>
                <td class="tabular">200 mg</td>
                <td>Membantu memelihara stamina pria dewasa</td>
              </tr>
              <tr>
                <td><strong>Panax Ginseng Radix</strong> [Placeholder]</td>
                <td>Ekstrak Akar</td>
                <td class="tabular">150 mg</td>
                <td>Mendukung kebugaran fisik dan daya tahan</td>
              </tr>
              <tr>
                <td><strong>Tribulus terrestris Fructus</strong> [Placeholder]</td>
                <td>Ekstrak Buah</td>
                <td class="tabular">100 mg</td>
                <td>Tonikum tradisional penunjang vitalitas</td>
              </tr>
              <tr>
                <td><strong>Zingiber officinale (Jahe Merah)</strong> [Placeholder]</td>
                <td>Ekstrak Rimpang</td>
                <td class="tabular">50 mg</td>
                <td>Membantu menghangatkan tubuh & sirkulasi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 7. TESTIMONI PELANGGAN -->
    <section id="testimoni" class="section">
      <div class="container">
        <span class="kicker">05. BUKTI ULASAN & PENGALAMAN PELANGGAN</span>
        <h2 class="section-title">Penilaian Asli Pembeli Black Blue MMC</h2>
        <p class="section-desc" style="margin-bottom: 16px;">
          Bukti penilaian bintang 5 dari pembeli resmi di Shopee Official kami beserta tangkapan layar asli.
        </p>
        <div class="grid-3">
          <div class="card" style="border-color: #2563EB;">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #60A5FA; margin-bottom: 8px;" class="tabular">
              <span>ULASAN ASLI #1</span>
              <span>2026-03-08 14:57</span>
            </div>
            <div style="color: #FBBF24; font-size: 0.95rem; margin-bottom: 12px;">★★★★★ <span style="color: var(--chrome-silver); font-size: 0.75rem;">5.0 / 5.0</span></div>
            <div style="background: #FFFFFF; padding: 8px; border-radius: 8px; margin-bottom: 14px;">
              <img src="/assets/aistudio/image_866426c9.png" alt="Bukti ulasan bintang 5 syahrudinsyah243 di Shopee untuk BLACK BLUE Vitalitas Pria" loading="lazy" style="width: 100%; height: auto; display: block; border-radius: 4px;" />
            </div>
            <p class="card-text" style="color: var(--text-primary); margin-bottom: 12px;">
              Penilaian Bintang 5 (★★★★★) terverifikasi untuk pembelian produk <strong>BLACK BLUE Vitalitas Pria (MMC 600mg)</strong> di Shopee Official.
            </p>
            <div style="background: #07090E; border: 1px solid var(--border-hairline); padding: 10px 12px; border-radius: 8px; font-size: 0.8125rem; margin-bottom: 14px;">
              <strong style="color: #93C5FD;">Respon Penjual:</strong> "Terimakasih untuk penilaian bintang lima nya"
            </div>
            <p style="font-weight: 600;">syahrudinsyah243</p>
            <p style="font-size: 0.8125rem; color: #60A5FA;">Pembeli Terverifikasi Shopee Official</p>
          </div>
          <div class="card" style="border-color: #2563EB;">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #60A5FA; margin-bottom: 8px;" class="tabular">
              <span>ULASAN ASLI #2</span>
              <span>2026-01-15 17:06</span>
            </div>
            <div style="color: #FBBF24; font-size: 0.95rem; margin-bottom: 12px;">★★★★★ <span style="color: var(--chrome-silver); font-size: 0.75rem;">5.0 / 5.0</span></div>
            <div style="background: #FFFFFF; padding: 8px; border-radius: 8px; margin-bottom: 14px;">
              <img src="/assets/aistudio/image_9fd019dc.png" alt="Bukti ulasan bintang 5 asjsq945m2 di Shopee untuk Black Blue Herbal Stamina" loading="lazy" style="width: 100%; height: auto; display: block; border-radius: 4px;" />
            </div>
            <p class="card-text" style="color: var(--text-primary); margin-bottom: 12px;">
              "Next order lagi, istri ampun" bos nikmat bgt katanya" · <strong>Keaslian:</strong> asli · <strong>Kualitas:</strong> original 100%.
            </p>
            <div style="background: #07090E; border: 1px solid var(--border-hairline); padding: 10px 12px; border-radius: 8px; font-size: 0.8125rem; margin-bottom: 14px;">
              <strong style="color: #93C5FD;">Respon Penjual:</strong> "Terima kasih atas kepercayaannya kak. Alhamdulillah produknya sesuai harapan. Untuk hasil yang lebih maksimal, disarankan konsumsi rutin ya kak."
            </div>
            <p style="font-weight: 600;">asjsq945m2</p>
            <p style="font-size: 0.8125rem; color: #60A5FA;">Pembeli Terverifikasi Shopee Official (Repeat Order)</p>
          </div>
          <div class="card">
            <p class="card-text" style="margin-bottom: 16px;">"[SLOT TESTIMONI 3: Tambahkan screenshot ulasan Shopee atau chat WhatsApp asli berikutnya di kartu ini.]"</p>
            <p style="font-weight: 600;">[Slot Pelanggan 3]</p>
            <p style="font-size: 0.8125rem; color: var(--text-muted);">Menunggu tambahan ulasan asli berikutnya</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. FAQ (ACCORDION) -->
    <section id="faq" class="section">
      <div class="container">
        <span class="kicker">06. PERTANYAAN UMUM</span>
        <h2 class="section-title">Tanya Jawab Seputar Black Blue MMC</h2>
        <div style="margin-top: 24px;">
          <div class="faq-item open">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Bagaimana cara konsumsi Black Blue MMC yang dianjurkan?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Konsumsi 1 tablet segi enam dengan segelas air hangat sesudah makan, sekitar 30–60 menit sebelum beraktivitas. Jangan melebihi 1 tablet dalam 24 jam dan ikuti petunjuk yang tertera pada kemasan botol.</div>
          </div>
          <div class="faq-item">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Siapa yang boleh dan tidak boleh mengonsumsi produk ini?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Diperuntukkan khusus bagi pria dewasa (18 tahun ke atas). TIDAK BOLEH dikonsumsi oleh wanita hamil, ibu menyusui, serta anak-anak. Bagi penderita riwayat penyakit jantung, hipertensi kronis, atau gangguan fungsi hati/ginjal, wajib berkonsultasi dengan dokter terlebih dahulu.</div>
          </div>
          <div class="faq-item">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Apakah pengiriman paket menjamin privasi pembeli?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Ya. Setiap pesanan melalui WhatsApp maupun Shopee dikemas dalam kardus/amplop tertutup rapat tanpa mencantumkan nama produk suplemen vitalitas pada label luar paket.</div>
          </div>
          <div class="faq-item">
            <button class="faq-btn" onclick="this.parentElement.classList.toggle('open')">
              <span>Bagaimana cara menyimpan tablet agar tetap awet?</span>
              <span>+</span>
            </button>
            <div class="faq-answer">Tutup rapat kembali botol setelah dibuka. Simpan di tempat kering dan sejuk pada suhu ruang (di bawah 30°C) serta terhindar dari paparan sinar matahari langsung.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. CARA PEMESANAN / CTA & KEPATUHAN -->
    <section id="pesan" class="section">
      <div class="container">
        <div class="card" style="padding: 40px; border-color: #1D4ED8;">
          <span class="kicker">07. KANAL PEMBELIAN RESMI</span>
          <h2 class="section-title">Pesan Black Blue MMC Asli Sekarang</h2>
          <p class="section-desc" style="margin-bottom: 28px;">
            1 Botol Isi 8 Tablet Heksagon Hitam · Pengiriman Diskret dari Kota Bandung 40242. Pilih kanal transaksi resmi yang paling nyaman bagi Anda:
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px;">
            <!-- [EDIT DI SINI: Nomor WhatsApp & Link Shopee] -->
            <a href="https://wa.me/6288980874055?text=Halo%20Admin%20Black%20Blue%20MMC%2C%20saya%20ingin%20memesan%20Black%20Blue%20MMC%20(1%20Botol%20Isi%208%20Tablet).%20Mohon%20info%20ketersediaan%20dan%20ongkir." target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Pesan via WhatsApp (+62 889-8087-4055)
            </a>
            <a href="https://s.shopee.co.id/1qdLNuMjhs" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              Checkout via Shopee Official
            </a>
          </div>

          <!-- PERINGATAN & DISCLAIMER WAJIB -->
          <div style="padding-top: 24px; border-top: 1px solid var(--border-hairline); font-size: 0.8125rem; color: var(--text-secondary);">
            <p style="margin-bottom: 6px;"><strong>PERINGATAN KEPATUHAN:</strong> Tidak untuk wanita hamil, ibu menyusui, dan anak-anak di bawah usia 18 tahun. Gunakan sesuai aturan pakai pada kemasan.</p>
            <p><strong>DISCLAIMER:</strong> Hasil dapat berbeda pada tiap orang tergantung kondisi metabolisme, pola hidup, dan kesehatan masing-masing individu.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 10. FOOTER -->
  <footer>
    <div class="container">
      <div class="grid-3" style="margin-top: 0; margin-bottom: 40px;">
        <div>
          <p class="brand-logo" style="margin-bottom: 12px;">BLACK BLUE MMC</p>
          <p>Suplemen vitalitas pria dewasa berbahan herbal tradisional dengan ciri khas tablet segi enam (heksagon) hitam sejak era 2000-an.</p>
        </div>
        <div>
          <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 12px;">Kontak & Alamat Resmi</p>
          <p>WhatsApp: +62 889-8087-4055</p>
          <p>Alamat: Kota Bandung 40242, Jawa Barat, Indonesia</p>
          <p>Instagram / Sosial Media: @blackbluemmc</p>
        </div>
        <div>
          <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 12px;">Pernyataan Penting</p>
          <p>Khusus usia 18 tahun ke atas. Tidak untuk wanita hamil/menyusui dan anak-anak. Hasil dapat berbeda pada tiap orang.</p>
        </div>
      </div>
      <div style="padding-top: 24px; border-top: 1px solid var(--border-hairline); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
        <span>© 2026 Black Blue MMC Official. Hak Cipta Dilindungi.</span>
        <span>Kota Bandung 40242 · @blackbluemmc</span>
      </div>
    </div>
  </footer>

  <script>
    (function() {
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
    })();
  </script>
</body>
</html>`;
