/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Package,
  Clock,
  Check,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  ShoppingBag,
  AlertTriangle,
  MapPin,
  Lock,
} from 'lucide-react';

const HERO_HEADLINE_OPTIONS = [
  {
    id: 'legenda',
    label: 'Kembalinya Sang Legenda',
    kicker: 'WARISAN ERA 2000-AN · FORMULASI HERBAL TRADISIONAL',
    headline: 'Kembalinya Sang Legenda Vitalitas Pria Dewasa.',
    subheadline:
      'Dikenal sejak awal 2000-an lewat identitas tablet segi enam hitam yang ikonik. Kini Black Blue MMC hadir kembali dalam kemasan botol pelindung isi 8 tablet untuk menjaga stamina pria dewasa tanpa kompromi.',
  },
  {
    id: 'nostalgia',
    label: 'Nostalgia & Kepercayaan',
    kicker: 'IKON STAMINA SEJAK 2000-AN · 1 BOTOL ISI 8 TABLET',
    headline: 'Satu Tablet Segi Enam Hitam. Dua Dekade Kepercayaan.',
    subheadline:
      'Bagi Anda yang mengenal masa kejayaan era 2000-an maupun generasi baru yang mengutamakan vitalitas prima—Black Blue MMC kembali dengan standar kemasan modern yang higienis dan terjaga.',
  },
  {
    id: 'maskulin',
    label: 'Maskulin & Modern',
    kicker: 'HERBAL TRADISIONAL TERPILIH · DESAIN HEKSAGON PRESISI',
    headline: 'Stamina Klasik Era 2000-an, Standar Pria Modern.',
    subheadline:
      'Racikan herbal tradisional dalam tablet heksagon hitam legendaris. Dikemas praktis 1 botol isi 8 tablet untuk mendukung performa dan daya tahan harian Anda.',
  },
  {
    id: 'keaslian',
    label: 'Fokus Keaslian & Privasi',
    kicker: 'DISTRIBUSI RESMI BANDUNG · PENGIRIMAN PRIVASI TERJAGA',
    headline: 'Black Blue MMC Asli Telah Kembali Secara Resmi.',
    subheadline:
      'Hindari produk tiruan. Dapatkan kembali suplemen herbal tradisional tablet segi enam hitam legendaris langsung dari jalur distribusi resmi dengan jaminan privasi pengiriman.',
  },
];

const TIMELINE_DATA = [
  {
    period: 'ERA 2000 – 2009',
    phase: 'Masa Kejayaan Awal',
    title: 'Lahirnya Identitas Tablet Segi Enam Hitam',
    description:
      'Black Blue MMC menjadi salah satu nama paling dikenal di kalangan pria dewasa Indonesia pada dekade 2000-an. Bentuk tablet heksagon berwarna hitam pekat menjadi ciri fisik ikonik yang membedakannya dari suplemen kapsul biasa.',
    badge: 'Ikonik Sejak Awal 2000-an',
  },
  {
    period: 'ERA 2010 – 2021',
    phase: 'Dinamika Pasar & Evaluasi',
    title: 'Meredup di Tengah Perubahan Pasar',
    description:
      'Memasuki tahun 2010, perubahan pola distribusi ritel serta munculnya banyak kompetitor baru dan produk tiruan tanpa izin membuat peredaran Black Blue MMC sempat meredup demi menjaga nama baik merek asli.',
    badge: 'Perlindungan Reputasi Merek',
  },
  {
    period: 'ERA 2024 – 2025',
    phase: 'Standarisasi Kemasan Baru',
    title: 'Pembaruan Kemasan Botol Kedap Isi 8 Tablet',
    description:
      'Menjawab kebutuhan konsumen akan higienitas dan daya simpan di iklim tropis, Black Blue MMC bertransformasi menggunakan botol pelindung gelap berisi 8 tablet heksagon dengan segel rapi.',
    badge: 'Kemasan Botol Kedap Udara',
  },
  {
    period: '2026 – SEKARANG',
    phase: 'Rebranding & Jalur Resmi',
    title: 'Hadir Kembali untuk Generasi Lama & Baru',
    description:
      'Kini Black Blue MMC membuka akses pemesanan langsung yang transparan melalui WhatsApp Resmi dan Shopee Official dari Kota Bandung, menjembatani nostalgia pelanggan era 2000-an dengan generasi pria dewasa masa kini.',
    badge: 'Distribusi Resmi Terverifikasi',
  },
];

const WHY_POINTS = [
  {
    num: '01',
    title: 'Warisan Merek Era 2000-an',
    desc: 'Bukan produk baru tanpa rekam jejak. Black Blue MMC membawa kembali reputasi klasik yang telah dikenal puluhan tahun oleh pria dewasa di Indonesia.',
  },
  {
    num: '02',
    title: 'Basis Herbal Tradisional',
    desc: 'Mengandalkan perpaduan ekstrak herbal tradisional yang secara turun-temurun digunakan untuk membantu memelihara stamina dan kebugaran pria.',
  },
  {
    num: '03',
    title: 'Identitas Tablet Heksagon Hitam',
    desc: 'Cetak tablet segi enam (heksagon) berwarna hitam pekat yang presisi memudahkan pelanggan mengenali karakter asli produk Black Blue MMC.',
  },
  {
    num: '04',
    title: 'Kemasan 1 Botol Isi 8 Tablet',
    desc: 'Botol kokoh dan kedap udara melindungi setiap tablet dari kelembapan, mudah dibawa bepergian, serta menjaga kualitas hingga tablet terakhir.',
  },
  {
    num: '05',
    title: 'Pengiriman Diskret & Privasi Aman',
    desc: 'Setiap paket dikemas rapi dan tertutup tanpa mencantumkan nama produk vitalitas pada label luar resi demi kenyamanan privasi Anda.',
  },
  {
    num: '06',
    title: 'Jalur Pembelian Resmi Terverifikasi',
    desc: 'Pemesanan dilayani langsung melalui WhatsApp Customer Care resmi (+62 889-8087-4055) dan toko resmi Shopee untuk menghindari barang palsu.',
  },
];

const PRODUCT_SPECS = [
  {
    num: '01',
    category: 'BENTUK & KEMASAN',
    title: 'Kemasan Isi 8 Tablet Segi Enam',
    desc: 'Tablet padat segi enam berwarna hitam pekat dengan kemasan botol kedap udara agar terlindung rapat dari kelembapan.',
  },
  {
    num: '02',
    category: 'KANDUNGAN UTAMA',
    title: '100% Herbal Tradisional Alami',
    desc: 'Diracik dari bahan herbal alami pilihan untuk membantu memelihara stamina, performa, dan kepercayaan diri pria dewasa.',
  },
  {
    num: '03',
    category: 'CARA KONSUMSI',
    title: '1 Tablet + Air Putih Hangat',
    desc: 'Diminum sesudah makan dengan segelas air putih hangat sekitar 30–60 menit sebelum beraktivitas.',
  },
  {
    num: '04',
    category: 'ATURAN PAKAI KEMASAN',
    title: 'Maksimal 1 Tablet / 24 Jam',
    desc: 'Patuhi takaran saji yang dianjurkan pada label kemasan. Tidak untuk dikonsumsi melebihi dosis harian.',
  },
];

const COMPOSITION_ROWS = [
  {
    ingredient: 'Eurycoma longifolia Radix (Pasak Bumi)',
    form: 'Ekstrak Akar Kering Terstandar',
    amount: '200 mg',
    role: 'Membantu memelihara stamina & vitalitas pria dewasa',
    category: 'Herbal Tradisional Alami',
  },
  {
    ingredient: 'Panax Ginseng Radix (Ginseng)',
    form: 'Ekstrak Akar Murni',
    amount: '150 mg',
    role: 'Mendukung daya tahan fisik dan mengurangi rasa lelah',
    category: 'Herbal Tradisional Alami',
  },
  {
    ingredient: 'Tribulus terrestris Fructus',
    form: 'Ekstrak Buah Kering',
    amount: '100 mg',
    role: 'Tonikum herbal tradisional penunjang kebugaran pria',
    category: 'Herbal Tradisional Alami',
  },
  {
    ingredient: 'Zingiber officinale var. Rubrum (Jahe Merah)',
    form: 'Ekstrak Rimpang Alami',
    amount: '50 mg',
    role: 'Membantu menghangatkan tubuh & menjaga sirkulasi',
    category: 'Herbal Tradisional Alami',
  },
  {
    ingredient: 'Bahan Pengikat Tablet Heksagon',
    form: 'Pelapis & Eksipien Padat',
    amount: 'q.s. (Secukupnya)',
    role: 'Membentuk struktur tablet heksagon hitam yang presisi',
    category: 'Standar Mutu Tablet',
  },
];

interface TestimonialItem {
  id: string;
  rating: number;
  date: string;
  quote: string;
  specs?: string;
  sellerResponse: string;
  screenshotUrl: string;
  name: string;
  role: string;
}

const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 'ULASAN #01',
    rating: 5,
    date: '2026-03-08 14:57',
    quote:
      'Penilaian Bintang 5 terverifikasi untuk pembelian produk BLACK BLUE Vitalitas Pria (MMC 600mg) di Shopee Official.',
    specs: 'Varian: BLACK BLUE Vitalitas Pria · MMC 600mg',
    sellerResponse: 'Terimakasih untuk penilaian bintang lima nya',
    screenshotUrl: '/assets/aistudio/image_866426c9.png',
    name: 'syahrudinsyah243',
    role: 'Pembeli Terverifikasi Shopee',
  },
  {
    id: 'ULASAN #02',
    rating: 5,
    date: '2026-01-15 17:06',
    quote: '"Next order lagi, istri ampun" bos nikmat bgt katanya"',
    specs: 'Cocok untuk: Pria dewasa · Keaslian: Asli · Kualitas: Original 100%',
    sellerResponse:
      'Terima kasih atas kepercayaannya kak. Alhamdulillah produknya sesuai harapan.',
    screenshotUrl: '/assets/aistudio/image_9fd019dc.png',
    name: 'asjsq945m2',
    role: 'Pembeli Terverifikasi Shopee (Repeat Order)',
  },
  {
    id: 'ULASAN #03',
    rating: 5,
    date: '2026-01-11 09:34',
    quote:
      '"barang telah sampai dengan kondisi baik , produk sangat bagus sesuai dengan poto, dan hasil dari produk sangat memuaskan sekali"',
    specs: 'Cocok untuk: Dewasa · Rasa: Original · Efektivitas: Best Original',
    sellerResponse:
      'Terima kasih atas kepercayaannya kak. Alhamdulillah produknya sesuai harapan.',
    screenshotUrl: '/assets/aistudio/image_20414483.png',
    name: 's*****7',
    role: 'Pembeli Terverifikasi Shopee (Dengan Video & Foto)',
  },
  {
    id: 'ULASAN #04',
    rating: 5,
    date: '2026-01-10 23:39',
    quote:
      '"Barang sampai dengan kondisi baik, produk sesuai dengan yang di posting, dan hasil dari produk sangat memuaskan"',
    specs: 'Disertai Bukti Video & Foto Kemasan Asli Black Blue MMC',
    sellerResponse:
      'Terima kasih atas kepercayaannya kak. Alhamdulillah produknya sesuai harapan.',
    screenshotUrl: '/assets/aistudio/image_32e2a4f7.png',
    name: 'f*****d',
    role: 'Pembeli Terverifikasi Shopee (Dengan Video & Foto)',
  },
  {
    id: 'ULASAN #05',
    rating: 5,
    date: '2025-12-17 12:31',
    quote:
      'Penilaian Bintang 5 terverifikasi untuk pembelian produk BLACK BLUE MMC Original di Shopee Official.',
    specs: 'Varian: BLACK BLUE MMC Original',
    sellerResponse: 'Terimakasih untuk penilaian bintang limanya kka di tunggu next ordernya.',
    screenshotUrl: '/assets/aistudio/image_6743d7db.png',
    name: 'mujibsigol',
    role: 'Pembeli Terverifikasi Shopee',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Bagaimana aturan pakai dan cara konsumsi Black Blue MMC yang benar?',
    answer:
      'Sesuai petunjuk umum kemasan: konsumsi 1 tablet segi enam (heksagon) dengan segelas air putih hangat sesudah makan, sekitar 30 hingga 60 menit sebelum beraktivitas. Jangan mengonsumsi lebih dari 1 tablet dalam kurun waktu 24 jam. Selalu baca aturan pakai yang tertera pada label botol.',
  },
  {
    question: 'Siapa saja yang boleh dan TIDAK boleh mengonsumsi produk ini?',
    answer:
      'Black Blue MMC diformulasikan khusus untuk pria dewasa berusia 18 tahun ke atas. Produk ini DILARANG dikonsumsi oleh wanita hamil, ibu menyusui, serta anak-anak di bawah usia 18 tahun. Bagi pria dewasa yang memiliki riwayat gangguan jantung, tekanan darah tinggi (hipertensi) tidak terkontrol, diabetes kronis, atau sedang dalam pengobatan dokter, sangat disarankan berkonsultasi dengan tenaga medis terlebih dahulu.',
  },
  {
    question: 'Apakah ada efek samping yang perlu diperhatikan?',
    answer:
      'Karena berbahan dasar ekstrak herbal tradisional (yang umumnya bersifat hangat bagi metabolisme tubuh), respons tiap individu dapat berbeda. Pastikan tubuh terhidrasi dengan minum air putih yang cukup dan konsumsi sesudah makan. Hentikan penggunaan apabila muncul reaksi sensitivitas terhadap salah satu komponen herbal.',
  },
  {
    question: 'Bagaimana cara menyimpan botol Black Blue MMC agar kualitas tablet terjaga?',
    answer:
      'Tutup rapat kembali tutup botol segera setelah mengambil tablet. Simpan di tempat yang sejuk dan kering (suhu ruang di bawah 30°C), jauh dari jangkauan anak-anak, serta hindarkan dari paparan sinar matahari langsung atau tempat lembap.',
  },
  {
    question: 'Bagaimana cara memastikan keaslian produk Black Blue MMC dan privasi pengiriman?',
    answer:
      'Pastikan Anda hanya membeli melalui dua kanal resmi yang tertera di situs ini: WhatsApp Resmi (+62 889-8087-4055) atau toko Shopee Official kami. Produk asli memiliki bentuk tablet segi enam (heksagon) hitam presisi dalam kemasan 1 botol isi 8 tablet. Seluruh pengiriman dilakukan secara diskret (polos tanpa keterangan nama suplemen vitalitas pada label paket luar).',
  },
];



function HexagonIcon({ label }: { label: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-11 h-11 shrink-0">
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <polygon
          points="24,3 43,13.5 43,34.5 24,45 5,34.5 5,13.5"
          fill="#0F172A"
          stroke="#2563EB"
          strokeWidth="1.5"
        />
      </svg>
      <span className="absolute font-mono-tabular text-xs font-semibold text-[#93C5FD]">
        {label}
      </span>
    </div>
  );
}

export default function App() {
  const [ageVerified, setAgeVerified] = useState<boolean>(() => {
    try {
      return localStorage.getItem('bbmmc_age_verified') === 'true';
    } catch {
      return false;
    }
  });
  const [underageWarning, setUnderageWarning] = useState<boolean>(false);

  const handleConfirmAge = () => {
    try {
      localStorage.setItem('bbmmc_age_verified', 'true');
    } catch {
      // ignore
    }
    setAgeVerified(true);
    setUnderageWarning(false);
  };

  const [selectedHeadlineIdx, setSelectedHeadlineIdx] = useState<number>(0);
  const [heroVisualTab, setHeroVisualTab] = useState<'studio' | 'diagram'>('studio');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Order Calculator State
  const [bottleCount, setBottleCount] = useState<number>(1);
  const [shippingMethod, setShippingMethod] = useState<'privasi-reguler' | 'instan-bandung'>(
    'privasi-reguler'
  );
  const [buyerCity, setBuyerCity] = useState<string>('');

  // 5-Second Hero Headline Auto-Rotator
  const [isHeroPaused, setIsHeroPaused] = useState<boolean>(false);

  // Step-by-step 5-second Testimonial Spotlight Slider state
  const [activeReviewIdx, setActiveReviewIdx] = useState<number>(0);
  const [isReviewPaused, setIsReviewPaused] = useState<boolean>(false);

  // 5-Second Mobile Auto-Slide State for Cerita Merek (Timeline)
  const [activeTimelineIdx, setActiveTimelineIdx] = useState<number>(0);
  const [isTimelinePaused, setIsTimelinePaused] = useState<boolean>(false);

  // 5-Second Mobile Auto-Slide State for Tentang Produk Specs
  const [activeSpecIdx, setActiveSpecIdx] = useState<number>(0);
  const [isSpecPaused, setIsSpecPaused] = useState<boolean>(false);

  // 5-Second Mobile Auto-Slide State for Kenapa Black Blue MMC
  const [activeWhyIdx, setActiveWhyIdx] = useState<number>(0);
  const [isWhyPaused, setIsWhyPaused] = useState<boolean>(false);

  // Hero Headline Auto-Slide (5 Detik)
  useEffect(() => {
    if (isHeroPaused) return;
    const timer = window.setInterval(() => {
      setSelectedHeadlineIdx((prev) => (prev + 1) % HERO_HEADLINE_OPTIONS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isHeroPaused]);

  useEffect(() => {
    if (isReviewPaused) return;
    const timer = window.setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % TESTIMONIAL_ITEMS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isReviewPaused]);

  useEffect(() => {
    if (isTimelinePaused) return;
    const timer = window.setInterval(() => {
      setActiveTimelineIdx((prev) => (prev + 1) % TIMELINE_DATA.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isTimelinePaused]);

  useEffect(() => {
    if (isSpecPaused) return;
    const timer = window.setInterval(() => {
      setActiveSpecIdx((prev) => (prev + 1) % PRODUCT_SPECS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isSpecPaused]);

  useEffect(() => {
    if (isWhyPaused) return;
    const timer = window.setInterval(() => {
      setActiveWhyIdx((prev) => (prev + 1) % WHY_POINTS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isWhyPaused]);

  const activeHero = HERO_HEADLINE_OPTIONS[selectedHeadlineIdx];

  const buildWhatsAppUrl = (customBottles?: number) => {
    const qty = customBottles ?? bottleCount;
    const totalTablets = qty * 8;
    const shippingLabel =
      shippingMethod === 'privasi-reguler'
        ? 'Pengiriman Reguler (Packing Privasi/Diskret)'
        : 'Pengiriman Instan Area Bandung (Packing Privasi)';
    const cityText = buyerCity.trim() ? ` ke ${buyerCity.trim()}` : '';
    const message = `Halo Admin Black Blue MMC, saya berusia 18+ tahun dan ingin memesan produk resmi:\n\n- Produk: Black Blue MMC (${qty} Botol / Total ${totalTablets} Tablet Heksagon)\n- Opsi Kirim: ${shippingLabel}${cityText}\n\nMohon informasi harga total dan ketersediaan stok. Terima kasih.`;
    return `https://wa.me/6288980874055?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F1F5F9] flex flex-col">
      {/* 1. STICKY NAVBAR — Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#07090E]/90 backdrop-blur-md border-b border-[#1E293B]">
        <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#3B82F6]"
          >
            BLACK BLUE MMC
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94A3B8]"
          >
            <a
              href="#cerita-merek"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Cerita Merek
            </a>
            <a
              href="#tentang-produk"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Tentang Produk
            </a>
            <a
              href="#komposisi"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Komposisi
            </a>
            <a
              href="#testimoni"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Testimoni
            </a>
            <a
              href="#faq"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#pemesanan"
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </header>

      {/* MODAL VERIFIKASI USIA (AGE GATE 18+) — Tampil Langsung untuk Pengunjung Baru */}
      {!ageVerified && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-modal-title"
          className="fixed inset-0 z-50 bg-[#07090E]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-5"
        >
          <div className="bg-[#0F1420] border-2 border-[#1E3A8A] rounded-2xl max-w-md w-full p-6 sm:p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#1D4ED8]" />

            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-[0_4px_16px_rgba(37,99,235,0.3)]">
                <polygon
                  points="32,4 58,18 58,46 32,60 6,46 6,18"
                  fill="#090D16"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                />
                <text
                  x="32"
                  y="38"
                  textAnchor="middle"
                  fill="#F8FAFC"
                  className="font-mono-tabular font-bold text-base"
                >
                  18+
                </text>
              </svg>
            </div>

            <p className="text-xs font-mono-tabular font-semibold tracking-wider text-[#93C5FD] mb-2 uppercase">
              Verifikasi Kepatuhan Usia
            </p>

            <h2
              id="age-gate-modal-title"
              className="font-display text-2xl font-bold text-white mb-3"
            >
              Situs Ini Khusus Usia 18 Tahun ke Atas
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
              Black Blue MMC adalah suplemen herbal tradisional untuk vitalitas pria dewasa. Tidak
              diperuntukkan bagi anak-anak di bawah 18 tahun, wanita hamil, atau ibu menyusui.
            </p>

            {underageWarning && (
              <div className="p-3.5 rounded-xl bg-[#2D1515] border border-red-500/40 text-xs text-[#FECACA] mb-5 text-center">
                <p className="font-semibold mb-1">Akses Dibatasi (Khusus 18+)</p>
                <p className="text-[11px] mb-2.5 text-[#FCA5A5]">
                  Mohon maaf, Anda belum memenuhi syarat usia untuk mengakses informasi produk ini.
                </p>
                <a
                  href="https://www.google.com"
                  className="inline-block px-3.5 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded transition-colors"
                >
                  Tinggalkan Situs
                </a>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleConfirmAge}
                className="flex-1 py-3 px-5 text-sm font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-[#2563EB]/25"
              >
                Saya 18+ Tahun (Masuk)
              </button>
              <button
                type="button"
                onClick={() => setUnderageWarning(true)}
                className="py-3 px-4 text-sm font-medium bg-[#07090E] hover:bg-[#1E293B] text-[#94A3B8] border border-[#334155] rounded-lg transition-colors whitespace-nowrap"
              >
                Belum 18 Tahun
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section className="relative bg-hex-pattern border-b border-[#1E293B] overflow-hidden">
        {/* Subtle Cobalt Radial Illumination */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-[#1D4ED8]/15 blur-[110px]"
        />

        <div className="max-w-[1200px] mx-auto px-5 py-12 lg:py-20">
          {/* 4 Pilar Narasi Black Blue MMC (Otomatis Berpindah Tiap 5 Detik / Klik Tab) */}
          <div
            className="mb-8 pb-5 border-b border-[#1E293B]/80"
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
            onTouchStart={() => setIsHeroPaused(true)}
            onTouchEnd={() => setIsHeroPaused(false)}
          >
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-xs font-mono-tabular text-[#93C5FD]">
                PILAR UTAMA BLACK BLUE MMC
              </span>
              <span className="text-[11px] font-mono-tabular text-[#60A5FA]">
                0{selectedHeadlineIdx + 1} / 0{HERO_HEADLINE_OPTIONS.length} · Berpindah Tiap 5 Detik
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {HERO_HEADLINE_OPTIONS.map((opt, idx) => {
                const isActive = selectedHeadlineIdx === idx;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedHeadlineIdx(idx)}
                    className={`relative p-2.5 text-left rounded-lg border transition-all overflow-hidden ${
                      isActive
                        ? 'bg-[#11192C] border-[#3B82F6] text-white shadow-[0_4px_20px_rgba(37,99,235,0.2)]'
                        : 'bg-[#0F1420] border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#334155]'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E293B]">
                        <div
                          key={`hero-${selectedHeadlineIdx}-${isHeroPaused ? 'p' : 'r'}`}
                          className={`h-full bg-[#3B82F6] ${
                            isHeroPaused ? 'w-full opacity-50' : 'animate-progress-5s'
                          }`}
                        />
                      </div>
                    )}
                    <span className="block font-mono-tabular text-[10px] text-[#60A5FA] mb-0.5">
                      0{idx + 1}
                    </span>
                    <span className="block text-xs font-semibold truncate">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Brand Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-medium tracking-wider text-[#93C5FD] mb-3">
                {activeHero.kicker}
              </p>

              <h1
                className="font-display font-bold text-white tracking-tight mb-5"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                  lineHeight: 1.12,
                  textWrap: 'balance',
                }}
              >
                {activeHero.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-[62ch] mb-8">
                {activeHero.subheadline}
              </p>

              {/* 2 Primary & Secondary Hero Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="#pemesanan"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Beli Sekarang</span>
                </a>
                <a
                  href="#tentang-produk"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F1F5F9] bg-[#0F1420] hover:bg-[#1E293B] border border-[#334155] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Pelajari Lebih Lanjut</span>
                </a>
              </div>

              {/* Unboxed Clean Metadata (Zero-Pill Rule) */}
              <div className="pt-6 border-t border-[#1E293B] flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-[#94A3B8]">
                <span className="text-[#CBD5E1] font-medium">Kemasan 1 Botol Isi 8 Tablet</span>
                <span aria-hidden="true">·</span>
                <span>Bentuk Segi Enam (Heksagon) Hitam</span>
                <span aria-hidden="true">·</span>
                <span>Kandungan Herbal Tradisional</span>
                <span aria-hidden="true">·</span>
                <span>Kota Bandung 40242</span>
              </div>
            </div>

            {/* Right Column: Authentic Black Blue MMC Product Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex-1 bg-[#0F1420] border border-[#1E293B] rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
                {/* Mode Toggle inside Product Stage */}
                <div className="flex items-center justify-between gap-2 mb-3.5 z-10">
                  <span className="text-xs font-mono-tabular text-[#93C5FD]">
                    KEMASAN RESMI BLACK BLUE MMC
                  </span>
                  <div className="flex items-center gap-1 p-1 bg-[#07090E] border border-[#1E293B] rounded-lg">
                    <button
                      type="button"
                      onClick={() => setHeroVisualTab('studio')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                        heroVisualTab === 'studio'
                          ? 'bg-[#2563EB] text-white'
                          : 'text-[#94A3B8] hover:text-white'
                      }`}
                    >
                      Foto Produk Asli
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroVisualTab('diagram')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                        heroVisualTab === 'diagram'
                          ? 'bg-[#2563EB] text-white'
                          : 'text-[#94A3B8] hover:text-white'
                      }`}
                    >
                      Diagram Tablet
                    </button>
                  </div>
                </div>

                {heroVisualTab === 'studio' ? (
                  <div className="relative rounded-lg overflow-hidden border border-[#1E3A8A]/60 bg-[#05070B] aspect-square shadow-[0_0_35px_rgba(37,99,235,0.2)]">
                    <img
                      src="/assets/aistudio/Iklan_Futuristik_MMC_Black_Blue_7d13e01e.png"
                      alt="Kemasan Asli Black Blue MMC Tablet — Stamina, Performa, Percaya Diri"
                      className="w-full h-full object-contain bg-[#05070B]"
                    />
                  </div>
                ) : (
                  <div className="rounded-lg border border-[#1E293B] bg-[#07090E] p-6 flex flex-col items-center justify-center aspect-square relative">
                    <div className="w-44 h-44 animate-float-slow">
                      <svg
                        viewBox="0 0 240 240"
                        className="w-full h-full drop-shadow-[0_12px_28px_rgba(37,99,235,0.35)]"
                        aria-label="Diagram geometri tablet segi enam hitam Black Blue MMC"
                      >
                        <defs>
                          <linearGradient id="tabletBody" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1E293B" />
                            <stop offset="45%" stopColor="#090D16" />
                            <stop offset="100%" stopColor="#030508" />
                          </linearGradient>
                          <linearGradient id="cobaltRim" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="50%" stopColor="#CBD5E1" />
                            <stop offset="100%" stopColor="#1D4ED8" />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="120,14 212,67 212,173 120,226 28,173 28,67"
                          fill="url(#tabletBody)"
                          stroke="url(#cobaltRim)"
                          strokeWidth="3.5"
                        />
                        <polygon
                          points="120,34 194,77 194,163 120,206 46,163 46,77"
                          fill="none"
                          stroke="#334155"
                          strokeWidth="1.2"
                          strokeDasharray="5 4"
                        />
                        <line
                          x1="46"
                          y1="120"
                          x2="194"
                          y2="120"
                          stroke="#1E293B"
                          strokeWidth="1"
                        />
                        <text
                          x="120"
                          y="108"
                          textAnchor="middle"
                          fill="#F8FAFC"
                          className="font-display font-bold"
                          fontSize="16"
                          letterSpacing="2"
                        >
                          BLACK BLUE
                        </text>
                        <text
                          x="120"
                          y="138"
                          textAnchor="middle"
                          fill="#60A5FA"
                          className="font-mono-tabular font-semibold"
                          fontSize="13"
                          letterSpacing="3"
                        >
                          MMC · 6 SISI
                        </text>
                      </svg>
                    </div>
                    <p className="text-xs text-[#94A3B8] text-center mt-2">
                      Geometri 6 Sisi Presisi · Warna Hitam Pekat Khas Era 2000-an
                    </p>
                  </div>
                )}

                <div className="mt-3.5 pt-3 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="text-[#CBD5E1] font-medium">
                    Stamina · Performa · Percaya Diri
                  </span>
                  <span className="font-mono-tabular text-[#60A5FA]">100% HERBAL ALAMI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CERITA MEREK / TIMELINE */}
      <section id="cerita-merek" className="py-10 sm:py-16 lg:py-20 border-b border-[#1E293B]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-medium tracking-wider text-[#93C5FD] mb-2">
              01. SEJARAH & PERJALANAN MEREK
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
              Dari Era Kejayaan 2000-an Hingga Bangkit Kembali Hari Ini
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              Bagi pelanggan lama usia 40–65 tahun, nama Black Blue membawa nostalgia produk stamina
              tepercaya. Bagi generasi baru usia 25–45 tahun, ini adalah warisan klasik yang dikemas
              ulang secara jujur dan modern.
            </p>
          </div>

          {/* Mobile Auto-Slide Card (Berpindah otomatis setiap 5 detik di layar HP) */}
          <div
            className="md:hidden"
            onMouseEnter={() => setIsTimelinePaused(true)}
            onMouseLeave={() => setIsTimelinePaused(false)}
            onTouchStart={() => setIsTimelinePaused(true)}
            onTouchEnd={() => setIsTimelinePaused(false)}
          >
            <div className="bg-[#11192C] border-2 border-[#3B82F6] rounded-xl p-5 relative overflow-hidden shadow-[0_12px_36px_rgba(37,99,235,0.22)]">
              {/* 5-Second Progress Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E293B]">
                <div
                  key={`timeline-${activeTimelineIdx}-${isTimelinePaused ? 'p' : 'r'}`}
                  className={`h-full bg-[#3B82F6] ${
                    isTimelinePaused ? 'w-full opacity-50' : 'animate-progress-5s'
                  }`}
                />
              </div>

              <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                <span className="font-mono-tabular text-xs font-semibold text-[#60A5FA]">
                  {TIMELINE_DATA[activeTimelineIdx].period}
                </span>
                <span className="text-[11px] text-[#93C5FD] bg-[#1E3A8A]/50 px-2 py-0.5 rounded">
                  {TIMELINE_DATA[activeTimelineIdx].phase}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                0{activeTimelineIdx + 1}. {TIMELINE_DATA[activeTimelineIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-4">
                {TIMELINE_DATA[activeTimelineIdx].description}
              </p>
              <p className="text-[11px] font-mono-tabular text-[#93C5FD] pt-2.5 border-t border-[#1E293B]">
                ✓ {TIMELINE_DATA[activeTimelineIdx].badge}
              </p>
            </div>

            {/* Quick Timeline Period Tabs on Mobile */}
            <div className="mt-4 grid grid-cols-4 gap-1.5">
              {TIMELINE_DATA.map((item, idx) => (
                <button
                  key={item.period}
                  type="button"
                  onClick={() => setActiveTimelineIdx(idx)}
                  className={`py-1.5 px-1 text-[11px] font-mono-tabular text-center rounded transition-colors truncate ${
                    activeTimelineIdx === idx
                      ? 'bg-[#2563EB] text-white font-semibold'
                      : 'bg-[#0F1420] text-[#94A3B8] border border-[#1E293B]'
                  }`}
                >
                  {item.period.split(' ')[0]} {item.period.split(' ')[1] || ''}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-center text-[#64748B] mt-2">
              Berpindah otomatis tiap 5 dtk · Sentuh kartu untuk menjeda
            </p>
          </div>

          {/* Desktop Full 2x2 Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {TIMELINE_DATA.map((item, idx) => (
              <div
                key={item.period}
                className="bg-[#0F1420] border border-[#1E293B] hover:border-[#3B82F6]/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#1E293B]">
                    <span className="font-mono-tabular text-xs font-semibold text-[#60A5FA]">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#94A3B8]">{item.phase}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2.5">
                    0{idx + 1}. {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>
                <p className="text-xs font-mono-tabular text-[#93C5FD] pt-3 border-t border-[#1E293B]/60">
                  ✓ {item.badge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TENTANG PRODUK */}
      <section id="tentang-produk" className="py-10 sm:py-16 lg:py-20 border-b border-[#1E293B]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Info */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium tracking-wider text-[#93C5FD] mb-2">
                  02. TENTANG PRODUK & ATURAN PAKAI
                </p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                  Karakteristik Black Blue MMC Tablet & Panduan Konsumsi
                </h2>
                <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-[65ch]">
                  Black Blue MMC mempertahankan bentuk tablet segi enam (heksagon) berwarna hitam
                  sebagai tanda pengenal utamanya, dipadukan dengan bahan baku 100% Herbal
                  Tradisional Alami untuk membantu menjaga stamina dan meningkatkan kepercayaan diri
                  pria dewasa.
                </p>
              </div>

              {/* Mobile Auto-Slide Card for Specs (Berpindah otomatis tiap 5 detik di HP) */}
              <div
                className="sm:hidden mb-6"
                onMouseEnter={() => setIsSpecPaused(true)}
                onMouseLeave={() => setIsSpecPaused(false)}
                onTouchStart={() => setIsSpecPaused(true)}
                onTouchEnd={() => setIsSpecPaused(false)}
              >
                <div className="bg-[#11192C] border-2 border-[#3B82F6] rounded-xl p-5 relative overflow-hidden shadow-[0_12px_36px_rgba(37,99,235,0.22)]">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E293B]">
                    <div
                      key={`spec-${activeSpecIdx}-${isSpecPaused ? 'p' : 'r'}`}
                      className={`h-full bg-[#3B82F6] ${
                        isSpecPaused ? 'w-full opacity-50' : 'animate-progress-5s'
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-2 pt-1">
                    <p className="text-xs font-mono-tabular text-[#93C5FD]">
                      {PRODUCT_SPECS[activeSpecIdx].category}
                    </p>
                    <span className="text-[11px] font-mono-tabular text-[#60A5FA]">
                      0{activeSpecIdx + 1} / 04
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {PRODUCT_SPECS[activeSpecIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    {PRODUCT_SPECS[activeSpecIdx].desc}
                  </p>
                </div>

                {/* 4 Step Dots on Mobile */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  {PRODUCT_SPECS.map((spec, i) => (
                    <button
                      key={spec.num}
                      type="button"
                      aria-label={`Lihat ${spec.category}`}
                      onClick={() => setActiveSpecIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeSpecIdx
                          ? 'w-8 bg-[#3B82F6]'
                          : 'w-2 bg-[#1E293B] hover:bg-[#334155]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Tablet & Desktop 2x2 Grid */}
              <div className="hidden sm:grid sm:grid-cols-2 gap-5">
                {PRODUCT_SPECS.map((spec) => (
                  <div
                    key={spec.num}
                    className="bg-[#0F1420] border border-[#1E293B] hover:border-[#3B82F6]/60 rounded-xl p-5 transition-colors"
                  >
                    <p className="text-xs font-mono-tabular text-[#93C5FD] mb-1.5">
                      {spec.category}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Authentic Product Image Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex-1 bg-[#0F1420] border border-[#1E293B] rounded-xl overflow-hidden flex flex-col justify-between">
                <div className="relative bg-[#05070B] p-4 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/Iklan_Futuristik_MMC_Black_Blue_7d13e01e.png"
                    alt="Kemasan Asli Black Blue MMC Tablet — Aman & Terpercaya, 100% Herbal Alami, Menjaga Stamina, Meningkatkan Kepercayaan Diri"
                    loading="lazy"
                    className="w-full max-h-[260px] sm:max-h-none h-auto rounded-lg border border-[#1E293B] object-contain"
                  />
                </div>
                <div className="p-5 sm:p-6 border-t border-[#1E293B]">
                  <p className="text-xs font-mono-tabular text-[#93C5FD] mb-1">
                    IDENTITAS KEMASAN ASLI
                  </p>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                    Black Blue MMC Tablet Original
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Pastikan Anda mendapatkan produk dengan kemasan asli Black Blue MMC melalui
                    jalur resmi WhatsApp kami atau toko resmi Shopee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KENAPA BLACK BLUE MMC */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#1E293B] bg-hex-pattern">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-medium tracking-wider text-[#93C5FD] mb-2">
              03. KEUNGGULAN YANG DAPAT DIPERTANGGUNGJAWABKAN
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
              Mengapa Pria Dewasa Memilih Black Blue MMC?
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              Tanpa klaim berlebihan. Kami berkomitmen pada keaslian produk, kejelasan aturan
              pakai, dan kenyamanan transaksi pelanggan.
            </p>
          </div>

          {/* Mobile Auto-Slide Card for 6 Keunggulan (Berpindah otomatis tiap 5 detik di HP) */}
          <div
            className="md:hidden"
            onMouseEnter={() => setIsWhyPaused(true)}
            onMouseLeave={() => setIsWhyPaused(false)}
            onTouchStart={() => setIsWhyPaused(true)}
            onTouchEnd={() => setIsWhyPaused(false)}
          >
            <div className="bg-[#11192C] border-2 border-[#3B82F6] rounded-xl p-5 relative overflow-hidden shadow-[0_12px_36px_rgba(37,99,235,0.22)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E293B]">
                <div
                  key={`why-${activeWhyIdx}-${isWhyPaused ? 'p' : 'r'}`}
                  className={`h-full bg-[#3B82F6] ${
                    isWhyPaused ? 'w-full opacity-50' : 'animate-progress-5s'
                  }`}
                />
              </div>

              <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                <HexagonIcon label={WHY_POINTS[activeWhyIdx].num} />
                <span className="text-[11px] font-mono-tabular text-[#60A5FA]">
                  Keunggulan 0{activeWhyIdx + 1} / 06
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                {WHY_POINTS[activeWhyIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {WHY_POINTS[activeWhyIdx].desc}
              </p>
            </div>

            {/* 6 Step Progress Indicators on Mobile */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {WHY_POINTS.map((point, i) => (
                <button
                  key={point.num}
                  type="button"
                  aria-label={`Keunggulan ${point.num}`}
                  onClick={() => setActiveWhyIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeWhyIdx
                      ? 'w-7 bg-[#3B82F6]'
                      : 'w-2 bg-[#1E293B] hover:bg-[#334155]'
                  }`}
                />
              ))}
            </div>
            <p className="text-[11px] text-center text-[#64748B] mt-2">
              Berpindah otomatis tiap 5 dtk · Sentuh kartu untuk menjeda
            </p>
          </div>

          {/* Desktop Full 3x2 Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_POINTS.map((point) => (
              <div
                key={point.num}
                className="bg-[#0F1420] border border-[#1E293B] hover:border-[#3B82F6]/60 rounded-xl p-6 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="mb-4">
                    <HexagonIcon label={point.num} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KOMPOSISI & INFORMASI GIZI */}
      <section id="komposisi" className="py-10 sm:py-14 lg:py-20 border-b border-[#1E293B]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-wider text-[#93C5FD] mb-2">
                04. KOMPOSISI & INFORMASI TAKARAN SAJI
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                Tabel Komposisi Herbal Tradisional
              </h2>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Informasi di bawah menampilkan formulasi herbal tradisional terstandar per 1 tablet heksagon Black Blue MMC untuk mendukung stamina, vitalitas, dan kebugaran tubuh pria dewasa.
              </p>
            </div>
            <div className="text-xs font-mono-tabular text-[#CBD5E1] bg-[#0F1420] border border-[#1E293B] rounded-lg px-4 py-3 shrink-0">
              <div>Takaran Saji: 1 Tablet Segi Enam</div>
              <div>Jumlah Sajian Per Botol: 8 Tablet</div>
            </div>
          </div>

          <div className="bg-[#0F1420] border border-[#1E293B] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#1E293B] bg-[#131B2E]/60 text-xs uppercase tracking-wider text-[#CBD5E1]">
                    <th className="py-4 px-5 font-semibold">Komponen Herbal Tradisional</th>
                    <th className="py-4 px-5 font-semibold">Bentuk Ekstrak</th>
                    <th className="py-4 px-5 font-semibold">Takaran / Tablet</th>
                    <th className="py-4 px-5 font-semibold">Khasiat & Kegunaan Tradisional</th>
                    <th className="py-4 px-5 font-semibold">Kategori Mutu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B] text-sm">
                  {COMPOSITION_ROWS.map((row) => (
                    <tr key={row.ingredient} className="hover:bg-[#131B2E]/40 transition-colors">
                      <td className="py-4 px-5 font-medium text-white">{row.ingredient}</td>
                      <td className="py-4 px-5 text-[#94A3B8]">{row.form}</td>
                      <td className="py-4 px-5 font-mono-tabular font-semibold text-[#93C5FD]">
                        {row.amount}
                      </td>
                      <td className="py-4 px-5 text-[#CBD5E1]">{row.role}</td>
                      <td className="py-4 px-5 text-xs font-mono-tabular text-[#60A5FA]">
                        {row.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONI PELANGGAN — 5-SECOND STEP-BY-STEP DOMINANT SPOTLIGHT SLIDER */}
      <section id="testimoni" className="py-10 sm:py-16 lg:py-20 border-b border-[#1E293B] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-medium tracking-wider text-[#93C5FD] mb-2">
                05. BUKTI ULASAN & PENILAIAN PEMBELI ASLI
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2">
                5.0 / 5.0 Penilaian Pembeli di Shopee Official
              </h2>
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                Slide berpindah otomatis satu demi satu setiap 5 detik. Sentuh atau arahkan kursor
                pada kartu utama di tengah untuk menahan tampilan.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#94A3B8] shrink-0">
              <span className="font-mono-tabular text-[#60A5FA] font-semibold">
                Ulasan 0{activeReviewIdx + 1} / 0{TESTIMONIAL_ITEMS.length}
              </span>
              <span aria-hidden="true">·</span>
              <a
                href="https://s.shopee.co.id/1qdLNuMjhs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBD5E1] hover:text-white underline underline-offset-4 transition-colors"
              >
                Cek Toko Shopee Resmi
              </a>
            </div>
          </div>
        </div>

        {/* 3-Card Spotlight Stage (Prev - Dominant Active Center - Next) without Arrow Buttons */}
        {(() => {
          const total = TESTIMONIAL_ITEMS.length;
          const prevIdx = (activeReviewIdx - 1 + total) % total;
          const nextIdx = (activeReviewIdx + 1) % total;
          const stageItems = [
            { item: TESTIMONIAL_ITEMS[prevIdx], idx: prevIdx, position: 'prev' as const },
            { item: TESTIMONIAL_ITEMS[activeReviewIdx], idx: activeReviewIdx, position: 'active' as const },
            { item: TESTIMONIAL_ITEMS[nextIdx], idx: nextIdx, position: 'next' as const },
          ];

          return (
            <div
              onMouseEnter={() => setIsReviewPaused(true)}
              onMouseLeave={() => setIsReviewPaused(false)}
              onTouchStart={() => setIsReviewPaused(true)}
              onTouchEnd={() => setIsReviewPaused(false)}
              className="max-w-[1200px] mx-auto px-5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
                {stageItems.map(({ item, idx, position }) => {
                  const isActive = position === 'active';
                  return (
                    <article
                      key={`${item.id}-${position}`}
                      onClick={() => setActiveReviewIdx(idx)}
                      className={`transition-all duration-500 ease-out rounded-2xl flex flex-col justify-between relative overflow-hidden ${
                        isActive
                          ? 'lg:col-span-6 bg-[#11192C] border-2 border-[#3B82F6] p-5 sm:p-7 scale-100 opacity-100 z-20 shadow-[0_20px_60px_rgba(37,99,235,0.28)]'
                          : 'hidden lg:flex lg:col-span-3 bg-[#0B101B] border border-[#1E293B] p-4 scale-90 opacity-40 hover:opacity-75 cursor-pointer z-10'
                      }`}
                    >
                      {/* 5-Second Auto-Step Progress Line on Dominant Active Card */}
                      {isActive && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E293B] overflow-hidden">
                          <div
                            key={`review-${activeReviewIdx}-${isReviewPaused ? 'paused' : 'running'}`}
                            className={`h-full bg-[#3B82F6] ${
                              isReviewPaused ? 'w-full opacity-50' : 'animate-progress-5s'
                            }`}
                          />
                        </div>
                      )}

                      <div>
                        {/* Card Header */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono-tabular text-xs font-semibold text-[#60A5FA]">
                                {item.id}
                              </span>
                              {isActive && (
                                <span className="text-[11px] text-[#93C5FD]">
                                  · Sorotan Utama
                                </span>
                              )}
                            </div>
                            <p
                              className={`font-display font-bold text-white mt-0.5 ${
                                isActive ? 'text-base sm:text-lg' : 'text-sm'
                              }`}
                            >
                              {item.name}
                            </p>
                            <p className="text-[11px] text-[#94A3B8]">{item.role}</p>
                          </div>

                          <div className="text-right shrink-0">
                            <div
                              className={`text-amber-400 tracking-tight leading-none ${
                                isActive ? 'text-sm sm:text-base' : 'text-xs'
                              }`}
                            >
                              ★★★★★
                            </div>
                            <span className="text-[11px] font-mono-tabular text-[#94A3B8]">
                              {item.date}
                            </span>
                          </div>
                        </div>

                        {/* Authentic Shopee Screenshot Frame */}
                        <div
                          className={`rounded-xl overflow-hidden border border-[#1E293B] bg-white mb-3.5 ${
                            isActive ? 'p-2 sm:p-2.5 shadow-inner' : 'p-1.5'
                          }`}
                        >
                          <img
                            src={item.screenshotUrl}
                            alt={`Bukti penilaian bintang 5 dari ${item.name} pada ${item.date}`}
                            loading="lazy"
                            className={`w-full object-contain rounded ${
                              isActive ? 'h-40 sm:h-56' : 'h-28'
                            }`}
                          />
                        </div>

                        {/* Buyer Quote & Specs */}
                        <p
                          className={`leading-relaxed text-[#F8FAFC] ${
                            isActive
                              ? 'text-xs sm:text-sm font-medium mb-2'
                              : 'text-xs line-clamp-2 mb-1'
                          }`}
                        >
                          {item.quote}
                        </p>

                        {item.specs && (
                          <p
                            className={`font-mono-tabular text-[#60A5FA] ${
                              isActive ? 'text-xs mb-3' : 'text-[11px] truncate'
                            }`}
                          >
                            {item.specs}
                          </p>
                        )}

                        {/* Seller Response (Full display on Dominant Active Card) */}
                        {isActive && (
                          <div className="p-3 rounded-xl bg-[#07090E] border border-[#1E293B] text-xs">
                            <span className="font-semibold text-[#93C5FD]">Respon Penjual: </span>
                            <span className="text-[#CBD5E1]">&ldquo;{item.sellerResponse}&rdquo;</span>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Minimalist Step Indicators (No Arrow Buttons) */}
              <div className="mt-5 sm:mt-7 flex items-center justify-center gap-2">
                {TESTIMONIAL_ITEMS.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Tampilkan ${t.id} dari ${t.name}`}
                    onClick={() => setActiveReviewIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeReviewIdx
                        ? 'w-8 sm:w-10 bg-[#3B82F6]'
                        : 'w-2 sm:w-2.5 bg-[#1E293B] hover:bg-[#334155]'
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* 8. FAQ (ACCORDION INTERAKTIF) */}
      <section id="faq" className="py-10 sm:py-14 lg:py-20 border-b border-[#1E293B]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-wider text-[#93C5FD] mb-2">
                06. PERTANYAAN YANG SERING DIAJUKAN (FAQ)
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Informasi Konsumsi, Keamanan & Keaslian
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                Temukan jawaban jujur mengenai cara pemakaian, batasan usia & kondisi kesehatan,
                cara penyimpanan, hingga jaminan privasi pengiriman.
              </p>
              <div className="p-5 rounded-xl bg-[#0F1420] border border-[#1E293B] text-xs sm:text-sm text-[#94A3B8]">
                <p className="font-semibold text-white mb-1">Butuh konsultasi langsung?</p>
                <p className="mb-3">
                  Tim layanan pelanggan kami siap menjawab pertanyaan Anda melalui WhatsApp resmi.
                </p>
                <a
                  href={buildWhatsAppUrl(1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-white font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi CS (+62 889-8087-4055)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-[#1E293B] border-t border-b border-[#1E293B]">
                {FAQ_ITEMS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={faq.question}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full py-5 flex items-center justify-between gap-4 text-left text-base font-semibold text-white hover:text-[#93C5FD] transition-colors focus-visible:outline-2 focus-visible:outline-[#3B82F6]"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#60A5FA] shrink-0 transition-transform duration-150 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="pb-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-[68ch]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CARA PEMESANAN / CTA & KEPATUHAN WAJIB */}
      <section id="pemesanan" className="py-10 sm:py-14 lg:py-20 border-b border-[#1E293B] bg-hex-pattern">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#0F1420] border border-[#1E3A8A] rounded-2xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Configurator & Direct Order */}
              <div className="lg:col-span-7">
                <p className="text-xs font-medium tracking-wider text-[#93C5FD] mb-2">
                  07. PEMESANAN RESMI & PENGIRIMAN DISKRET
                </p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                  Pesan Black Blue MMC Sekarang
                </h2>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                  Pilih jumlah botol untuk membuat format pesan WhatsApp otomatis, atau langsung
                  checkout melalui toko resmi kami di Shopee.
                </p>

                {/* Interactive Quantity Selector */}
                <div className="mb-5">
                  <label className="block text-xs font-mono-tabular uppercase text-[#CBD5E1] mb-2">
                    1. Pilih Jumlah Kemasan (1 Botol = 8 Tablet Heksagon):
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBottleCount(num)}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          bottleCount === num
                            ? 'bg-[#131B2E] border-[#3B82F6] text-white'
                            : 'bg-[#07090E] border-[#1E293B] text-[#94A3B8] hover:text-white'
                        }`}
                      >
                        <div className="font-display font-bold text-base">{num} Botol</div>
                        <div className="font-mono-tabular text-xs text-[#60A5FA]">
                          Total {num * 8} Tablet
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shipping Option & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label
                      htmlFor="shipping-select"
                      className="block text-xs font-mono-tabular uppercase text-[#CBD5E1] mb-1.5"
                    >
                      2. Metode Pengiriman Diskret:
                    </label>
                    <select
                      id="shipping-select"
                      value={shippingMethod}
                      onChange={(e) =>
                        setShippingMethod(
                          e.target.value as 'privasi-reguler' | 'instan-bandung'
                        )
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#07090E] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#3B82F6]"
                    >
                      <option value="privasi-reguler">
                        Ekspedisi Reguler (Packing Polos Privasi)
                      </option>
                      <option value="instan-bandung">
                        Kurir Instan Kota Bandung (Packing Polos)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="city-input"
                      className="block text-xs font-mono-tabular uppercase text-[#CBD5E1] mb-1.5"
                    >
                      3. Kota Tujuan (Opsional):
                    </label>
                    <input
                      id="city-input"
                      type="text"
                      value={buyerCity}
                      onChange={(e) => setBuyerCity(e.target.value)}
                      placeholder="Contoh: Bandung / Jakarta / Surabaya"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#07090E] border border-[#1E293B] rounded-lg text-white placeholder-[#64748B] focus:outline-none focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                {/* Primary Order Channels: WhatsApp & Shopee */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pesan via WhatsApp (+62 889-8087-4055)</span>
                  </a>
                  <a
                    href="https://s.shopee.co.id/1qdLNuMjhs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-[#07090E] hover:bg-[#1E293B] border border-[#334155] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#60A5FA]" />
                    <span>Beli di Shopee Official</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Discreet Packaging & Mandatory Health Disclaimers */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-[#07090E] border border-[#1E293B] rounded-xl p-5">
                  <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-2">
                    <Lock className="w-4 h-4 text-[#60A5FA]" />
                    <span>Jaminan Pengiriman Diskret (Privasi 100%)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Kami memahami privasi Anda. Setiap paket dikemas dengan lapisan kardus tertutup
                    rapi. Nama produk tidak dicantumkan secara mencolok pada resi luar pengiriman.
                  </p>
                </div>

                {/* WAJIB: Disclaimer & Peringatan Kepatuhan */}
                <div className="bg-[#07090E] border border-[#1E293B] rounded-xl p-5 text-xs sm:text-sm space-y-2.5">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#60A5FA]" />
                    <span>Peringatan & Pernyataan Kepatuhan Wajib</span>
                  </div>
                  <p className="text-[#CBD5E1]">
                    • <strong>Disclaimer:</strong> Hasil dapat berbeda pada tiap orang, bergantung
                    pada kondisi metabolisme, usia, dan pola hidup masing-masing individu.
                  </p>
                  <p className="text-[#CBD5E1]">
                    • <strong>Peringatan:</strong> Tidak untuk wanita hamil, ibu menyusui, dan
                    anak-anak di bawah usia 18 tahun.
                  </p>
                  <p className="text-[#94A3B8]">
                    • Gunakan sesuai aturan pakai pada kemasan. Simpan di tempat kering dan sejuk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER RESMI */}
      <footer className="bg-[#05070B] text-[#94A3B8] py-14 mt-auto">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#1E293B]">
            <div className="md:col-span-5">
              <p className="font-display text-xl font-bold text-white tracking-tight mb-3">
                BLACK BLUE MMC
              </p>
              <p className="text-sm leading-relaxed mb-4 max-w-sm">
                Suplemen vitalitas pria dewasa berbahan Herbal Tradisional dengan ciri khas tablet
                segi enam (heksagon) hitam legendaris sejak era 2000-an. Kemasan 1 botol isi 8
                tablet.
              </p>
              <p className="text-xs font-mono-tabular text-[#60A5FA]">
                ✓ Distribusi Resmi Kota Bandung 40242 · Pengiriman Privasi Aman
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-sm">
              <p className="font-display font-bold text-white mb-3">Kontak & Kanal Resmi</p>
              <p>
                WhatsApp:{' '}
                <a
                  href={buildWhatsAppUrl(1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CBD5E1] hover:text-white"
                >
                  +62 889-8087-4055
                </a>
              </p>
              <p>
                Shopee Official:{' '}
                <a
                  href="https://s.shopee.co.id/1qdLNuMjhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60A5FA] hover:underline"
                >
                  s.shopee.co.id/1qdLNuMjhs
                </a>
              </p>
              <p>Alamat: Kota Bandung 40242, Jawa Barat</p>
              <p>Sosial Media: @blackbluemmc</p>
            </div>

            <div className="md:col-span-3 space-y-2 text-xs leading-relaxed">
              <p className="font-display font-bold text-white text-sm mb-3">
                Kepatuhan & Peringatan
              </p>
              <p>Khusus untuk pria dewasa berusia 18 tahun ke atas.</p>
              <p>Tidak untuk wanita hamil, ibu menyusui, dan anak-anak.</p>
              <p>
                <strong>Disclaimer:</strong> Hasil dapat berbeda pada tiap orang.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <p>© 2026 Black Blue MMC Official. Seluruh Hak Cipta Dilindungi.</p>
            <p>Kota Bandung 40242 · @blackbluemmc</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
