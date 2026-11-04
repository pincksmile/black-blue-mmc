import React from 'react';
import { ShieldCheck, MessageCircle, ShoppingBag, ExternalLink, Lock, Check } from 'lucide-react';

export default function LandingIklan() {
  const buildWhatsAppUrl = () => {
    const message = `Halo Admin Black Blue MMC, saya ingin memesan suplemen vitalitas pria dewasa (1 Botol / 8 Tablet Heksagon) dari halaman iklan khusus.\n\nMohon informasi ketersediaan stok dan cara pemesanan. Terima kasih.`;
    return `https://wa.me/6288980874055?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F1F5F9] flex flex-col font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* Top Warning Banner */}
      <div className="bg-[#131B2E] border-b border-[#1E293B] py-2 px-4 text-center text-xs text-[#93C5FD]">
        <span>🔒 Verifikasi Kepatuhan: Khusus Pria Dewasa (18+) · 100% Pengiriman Privasi Rahasia</span>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-[680px] w-full mx-auto px-4 py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Header / Brand */}
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 bg-[#1E293B]/80 text-[#60A5FA] text-xs font-mono-tabular tracking-wider uppercase rounded-full border border-[#334155]">
            WARISAN ERA 2000-AN · 1 BOTOL ISI 8 TABLET
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
            BLACK BLUE MMC
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-lg mx-auto">
            Suplemen herbal tradisional legendaris dengan identitas tablet segi enam (heksagon) hitam pekat untuk stamina dan performa pria dewasa.
          </p>
        </div>

        {/* Product Hero Visual Card */}
        <div className="bg-[#0F1420] border border-[#1E293B] rounded-2xl p-5 sm:p-6 shadow-[0_0_40px_rgba(37,99,235,0.15)] flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4 text-xs font-mono-tabular">
            <span className="text-[#93C5FD] font-semibold">KEMASAN RESMI 100% ORIGINAL</span>
            <span className="text-[#60A5FA]">Kota Bandung 40242</span>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-[#1E3A8A]/60 bg-[#05070B] aspect-square max-w-[380px] mx-auto flex items-center justify-center relative shadow-inner">
            <img
              src="/assets/aistudio/Iklan_Futuristik_MMC_Black_Blue_7d13e01e.png"
              alt="Black Blue MMC Original Packaging"
              className="w-full h-full object-contain p-2 bg-[#05070B]"
            />
          </div>

          <div className="w-full mt-5 pt-4 border-t border-[#1E293B] grid grid-cols-3 gap-2 text-center text-xs text-[#CBD5E1]">
            <div className="bg-[#07090E] p-2.5 rounded-lg border border-[#1E293B]">
              <span className="block font-bold text-white text-sm">8 Tablet</span>
              <span className="text-[#94A3B8]">Per Botol</span>
            </div>
            <div className="bg-[#07090E] p-2.5 rounded-lg border border-[#1E293B]">
              <span className="block font-bold text-white text-sm">6 Sisi</span>
              <span className="text-[#94A3B8]">Heksagon</span>
            </div>
            <div className="bg-[#07090E] p-2.5 rounded-lg border border-[#1E293B]">
              <span className="block font-bold text-white text-sm">100%</span>
              <span className="text-[#94A3B8]">Herbal Asli</span>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-[#0F1420] border border-[#1E293B] rounded-xl p-5 space-y-3">
          <h2 className="text-sm font-mono-tabular uppercase tracking-wider text-[#93C5FD] font-semibold">
            Keunggulan Utama:
          </h2>
          <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
              <span><strong>Formulasi Herbal Tradisional:</strong> Diracik khusus untuk mendukung stamina, vitalitas, dan kepercayaan diri pria dewasa.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
              <span><strong>Ciri Khas Tablet Heksagon:</strong> Bentuk segi enam hitam pekat autentik khas era 2000-an yang mudah dikenali.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
              <span><strong>Jaminan Privasi 100%:</strong> Pengemasan sangat rapi, polos, dan aman tanpa mencantumkan nama produk di luar paket.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons Box */}
        <div className="bg-[#0F1420] border border-[#1E293B] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
          <div className="text-center space-y-1">
            <h2 className="font-display font-bold text-lg text-white">Dapatkan Produk Resmi Sekarang</h2>
            <p className="text-xs text-[#94A3B8]">Pesan langsung melalui WhatsApp resmi admin atau kunjungi toko Shopee kami.</p>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] rounded-xl transition-all shadow-[0_4px_20px_rgba(37,99,235,0.4)] text-center group"
            >
              <MessageCircle className="w-5 h-5 shrink-0 text-white group-hover:scale-105 transition-transform" />
              <span className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 leading-tight">
                <span>Pesan via WhatsApp</span>
                <span className="text-xs font-mono-tabular font-normal text-blue-100/90">
                  (+62 889-8087-4055)
                </span>
              </span>
            </a>

            <a
              href="https://s.shopee.co.id/1qdLNuMjhs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-[#07090E] hover:bg-[#1E293B] border border-[#334155] rounded-xl transition-colors text-center group"
            >
              <ShoppingBag className="w-4 h-4 text-[#60A5FA] shrink-0 group-hover:scale-105 transition-transform" />
              <span>Kunjungi di Shopee Official</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <Lock className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Transaksi Aman · Pengiriman Cepat dari Bandung 40242</span>
          </div>
        </div>

        {/* Footer info */}
        <footer className="text-center text-xs text-[#64748B] space-y-1 pb-6">
          <p>© 2026 Black Blue MMC Official. Khusus Usia 18+ Tahun.</p>
          <p>Distribusi Resmi Kota Bandung · @blackbluemmc</p>
        </footer>

      </main>
    </div>
  );
}
