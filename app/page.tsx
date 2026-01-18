// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Star, Phone, GraduationCap, HeartHandshake, Sparkles, MessageCircle } from "lucide-react";

<main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-50"></main>

export default function Home() {
  // Data Link WA dengan pesan otomatis
  const waLink = (message: string) => 
    `https://wa.me/6281393999627?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gold-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent tracking-wider">
            dibartristry
          </h1>
          <a 
            href={waLink("Halo Kak, saya mau tanya pricelist makeup...")}
            className="bg-gradient-to-r from-gold-400 to-gold-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-gold-500 hover:to-gold-600 transition shadow-lg shadow-gold-200/50"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION PREMIUM --- */}
<section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 relative overflow-hidden">
  {/* Dekorasi Background (Blur Blob) - Ini rahasia biar gak flat */}
  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-100 rounded-full blur-3xl opacity-60 z-0"></div>
  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gold-200 rounded-full blur-3xl opacity-40 z-0"></div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
    
    {/* Kolom Kiri: Teks */}
    <div className="text-left">
      <div className="inline-block px-4 py-1 mb-4 md:mb-6 border border-primary-300 rounded-full bg-white/50 backdrop-blur-sm">
        <span className="text-primary-900 font-medium text-xs tracking-[0.2em] uppercase">
          Based in Solo, ID
        </span>
      </div>
      
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 md:mb-6 leading-tight">
        Unveiling Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 italic pr-2">
          True Elegance
        </span>
      </h2>
      
      <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-md leading-relaxed">
        Sentuhan profesional untuk momen wisuda, lamaran, dan pernikahan. Tampil percaya diri dengan look yang <i>timeless</i>.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <a 
          href={waLink("Halo Kak, saya mau booking makeup...")} 
          className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-gray-800 transition shadow-xl shadow-gray-200 text-center"
        >
          Book Appointment
        </a>
        <a 
          href="#portfolio" 
          className="px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-gray-600 hover:text-primary-700 flex items-center justify-center gap-2 group"
        >
          See Portfolio 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>

    {/* Kolom Kanan: Foto (Pastikan ada foto portrait bagus) */}
    <div className="relative mt-8 md:mt-0">
      <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-100 border-4 border-white aspect-[3/4]">
        {/* Ganti src dengan foto model MUA yang paling cantik */}
        <Image 
          src="/images/portofolio-1.jpg" 
          alt="Makeup Artist Solo Dibartristry - Hasil makeup flawless untuk wisuda dan wedding" 
          fill 
          className="object-cover hover:scale-105 transition duration-700"
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Aksen Kotak di belakang foto */}
      <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary-300 rounded-[2rem] z-0"></div>
    </div>

  </div>
</section>

{/* --- SERVICES (Pricelist) - PREMIUM VERSION --- */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-primary-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Layanan Spesial</h3>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Setiap sentuhan dirancang untuk menonjolkan karakter unikmu. Pilih paket yang sesuai dengan momen bahagiamu.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Wisuda (Pakai Icon Topi Toga) */}
            <ServiceCard 
              icon={GraduationCap}
              title="Makeup Wisuda" 
              desc="Tampil fresh, awet, dan anti-crack seharian untuk momen kelulusanmu."
              link={waLink("Kak, mau tanya pricelist Makeup Wisuda")}
            />
             {/* Card 2: Lamaran (Pakai Icon Hati/Cincin) */}
             <ServiceCard 
              icon={HeartHandshake}
              title="Engagement" 
              desc="Look semi-bold atau soft glam yang elegan untuk momen pertunangan."
              link={waLink("Kak, mau tanya pricelist Makeup Lamaran")}
            />
             {/* Card 3: Wedding (Pakai Icon Kilau) */}
             <ServiceCard 
              icon={Sparkles}
              title="Wedding / Akad" 
              desc="Riasan spesial pengantin (Adat/Modern). Detail sempurna di depan kamera."
              link={waLink("Kak, mau tanya pricelist Makeup Wedding")}
            />
          </div>
          
          <div className="text-center mt-12 bg-white inline-block px-6 py-3 rounded-full shadow-sm border border-primary-100 mx-auto relative left-1/2 -translate-x-1/2">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <MapPin size={16} className="text-primary-500"/>
              Melayani Home Service area <strong>Solo & Sekitarnya</strong>
            </p>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO (Gallery) --- */}
      <section id="portfolio" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-gray-900">Hasil Makeup</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">Dikerjakan dengan hati & teknik profesional.</p>
            </div>
            <a href="https://www.instagram.com/dibartristry/" target="_blank" className="text-primary-600 font-medium hover:text-primary-700 hover:underline flex items-center gap-1 text-sm md:text-base">
              <Instagram size={18}/> Lihat di Instagram
            </a>
          </div>

          {/* Grid Foto - Pastikan kamu punya folder public/images/ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Ganti src dengan nama file aslimu nanti */}
            <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative group">
                <Image 
                  src="/images/portofolio-1.jpg" 
                  alt="Portfolio Makeup Artist Solo - Makeup Wisuda Natural Glowing by Dibartristry" 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
            <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative group">
                <Image 
                  src="/images/portofolio-2.jpg" 
                  alt="Jasa MUA Solo - Makeup Wisuda Awet Tahan Lama Anti Crack" 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
            <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative group">
                <Image 
                  src="/images/portofolio-3.jpg" 
                  alt="Makeup Lamaran Solo - Rias Pengantin Elegan Modern by Dibartristry" 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
            <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden relative group">
                <Image 
                  src="/images/portofolio-4.jpg" 
                  alt="Wedding MUA Solo - Makeup Pengantin Profesional Berpengalaman" 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl mb-6">dibartristry</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/dibartristry/" target="_blank" className="hover:text-primary-200 transition">Instagram</a>
            <a href="https://www.tiktok.com/@dibartristry" target="_blank" className="hover:text-primary-200 transition">TikTok</a>
            <a href={waLink("Halo")} target="_blank" className="hover:text-primary-200 transition">WhatsApp</a>
          </div>
          <p className="text-primary-200 text-sm">
            &copy; {new Date().getFullYear()} Dibartristry. Melayani Solo & Luar Kota.
          </p>
        </div>
      </footer>

      {/* --- STICKY WHATSAPP BUTTON --- */}
      <a
        href={waLink("Halo Kak, saya mau konsultasi makeup...")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group flex items-center gap-3"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={24} className="animate-pulse" />
        <span className="hidden group-hover:inline-block text-sm font-medium whitespace-nowrap pr-2">
          Chat Kami
        </span>
      </a>
    </main>
  );
}

// Komponen Card Layanan (Biar kodingan rapi)
// Komponen Card Layanan Premium
function ServiceCard({ title, desc, link, icon: Icon }: any) {
  return (
    <div className="group relative bg-white p-6 md:p-8 rounded-2xl border border-primary-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-200/40">
      
      {/* Dekorasi Background Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon Circle */}
        <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 md:mb-6 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-sm">
          {/* Render Icon yang dikirim dari props */}
          <Icon size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
        </div>
        
        <h4 className="font-serif text-xl md:text-2xl font-medium text-gray-900 mb-2 md:mb-3">{title}</h4>
        <p className="text-gray-600 mb-6 md:mb-8 text-xs md:text-sm leading-relaxed">{desc}</p>
        
        {/* Tombol yang lebih Real */}
        <a 
          href={link}
          className="w-full py-3 px-6 rounded-full border border-primary-300 text-primary-700 font-medium text-sm transition-all duration-300 group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white hover:shadow-lg"
        >
          Tanya Harga &rarr;
        </a>
      </div>
    </div>
  )
}