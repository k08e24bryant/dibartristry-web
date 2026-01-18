// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Font untuk teks biasa
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
// Font untuk Judul (biar kesan MUA mahal)
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Dibartistry | Jasa MUA Solo & Luar Kota (Wisuda, Wedding, Lamaran)",
  description: "Jasa MUA Solo & Luar Kota terbaik by Dibartistry. Melayani Makeup Wisuda, Lamaran, Prewedding & Wedding. Hasil flawless, tahan lama, & berpengalaman >2 tahun.",
  keywords: ["MUA Solo", "Makeup Artist Solo", "Makeup Wisuda Solo", "Rias Pengantin Solo", "Dibartistry", "Makeup Lamaran Solo", "Wedding MUA Solo"],
  authors: [{ name: "Dibartistry" }],
  creator: "Dibartistry",
  publisher: "Dibartistry",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://dibartistry.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dibartistry | MUA Solo Professional",
    description: "Tampil cantik di hari spesialmu bersama Dibartistry. Makeup Artist berpengalaman untuk wisuda, lamaran, dan pernikahan.",
    url: "https://dibartistry.com",
    siteName: "Dibartistry",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: '/images/portofolio-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Dibartistry Makeup Artist Solo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dibartistry | MUA Solo Professional',
    description: 'Jasa Makeup Artist Solo untuk segala momen spesialmu',
    images: ['/images/portofolio-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data untuk Local Business SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Dibartistry',
    description: 'Jasa Makeup Artist Profesional di Solo untuk Wisuda, Wedding, dan Lamaran',
    image: 'https://dibartistry.com/images/portofolio-1.jpg',
    '@id': 'https://dibartistry.com',
    url: 'https://dibartistry.com',
    telephone: '+6281393999627',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Solo',
      addressRegion: 'Jawa Tengah',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.5705,
      longitude: 110.8285,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [
      'https://www.instagram.com/dibartristry/',
      'https://www.tiktok.com/@dibartristry',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Solo',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Makeup',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Makeup Wisuda',
            description: 'Makeup untuk acara wisuda, tahan lama dan flawless',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Makeup Lamaran',
            description: 'Makeup elegan untuk momen lamaran',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Makeup Wedding',
            description: 'Makeup pengantin adat dan modern',
          },
        },
      ],
    },
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-primary-50 text-gray-700`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GY6QG123V8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GY6QG123V8');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}