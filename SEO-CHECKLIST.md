# 🎯 PANDUAN HOSTING & SEO CHECKLIST

## ✅ SUDAH SELESAI (Implemented):

### 1. ⚙️ **Next.js Configuration**
- ✅ Image optimization (WebP, AVIF format)
- ✅ Compression enabled
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Cache control untuk performance

### 2. 🔍 **SEO Files**
- ✅ `robots.txt` - Mengizinkan Google crawl
- ✅ `sitemap.ts` - Auto-generate sitemap.xml
- ✅ `manifest.json` - PWA support

### 3. 📊 **Structured Data (JSON-LD)**
- ✅ Schema.org LocalBusiness markup
- ✅ Service catalog (Wisuda, Lamaran, Wedding)
- ✅ Geographic data (Solo, Jawa Tengah)
- ✅ Contact info & social media links

### 4. 🏷️ **Enhanced Metadata**
- ✅ Twitter Cards
- ✅ Open Graph tags
- ✅ Canonical URLs
- ✅ Robots meta tags
- ✅ Keywords optimization

### 5. 🖼️ **Image Optimization**
- ✅ SEO-friendly alt texts untuk semua gambar
- ✅ Lazy loading untuk portfolio
- ✅ Priority loading untuk hero image
- ✅ Responsive image sizes

---

## 📋 TODO SEBELUM HOSTING:

### 🎨 **1. Tambahkan Icons** (Wajib!)
Ikuti panduan di `FAVICON-GUIDE.md`:
- [ ] favicon.ico (32x32px)
- [ ] apple-touch-icon.png (180x180px)
- [ ] icon-192x192.png & icon-512x512.png

### 📸 **2. Optimasi Gambar**
- [ ] Compress semua foto di `public/images/` menggunakan:
  - TinyPNG (https://tinypng.com/)
  - Squoosh (https://squoosh.app/)
- [ ] Target: < 200KB per foto
- [ ] Format: Gunakan .webp jika memungkinkan

### 🌐 **3. Ganti Domain Placeholder**
Search & replace `https://dibartristry.com` dengan domain real:
- [ ] `app/layout.tsx` (line 16)
- [ ] `app/sitemap.ts` (line 4)
- [ ] `public/robots.txt` (line 6)

### 📊 **4. Setup Google Analytics** (Recommended)
```tsx
// Tambahkan di app/layout.tsx (setelah <head>):
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 🔗 **5. Setup Google Business Profile**
- [ ] Daftar di: https://business.google.com
- [ ] Isi nama: Dibartristry
- [ ] Kategori: Makeup Artist / Beauty Salon
- [ ] Alamat: Solo, Jawa Tengah
- [ ] Nomor: 081393999627
- [ ] Upload foto portfolio terbaik
- [ ] Minta review dari customer

### 📱 **6. Social Media Integration**
- [ ] Update link Instagram di page.tsx (sudah ada)
- [ ] Pasang Facebook Pixel (optional)
- [ ] Pasang TikTok Pixel (optional)

---

## 🚀 RECOMMENDED HOSTING PLATFORMS:

### **1. Vercel** (Paling Recommended untuk Next.js)
- ✅ Auto SSL, CDN global
- ✅ Zero config deployment
- ✅ Free tier cukup untuk startup
- 🔗 Deploy: `vercel --prod`

### **2. Netlify**
- ✅ Mudah, free tier bagus
- ✅ Form handling built-in
- 🔗 Deploy: `netlify deploy --prod`

### **3. Cloudflare Pages**
- ✅ Super cepat (CDN terbaik)
- ✅ Unlimited bandwidth
- 🔗 Connect ke GitHub, auto deploy

---

## 🧪 TEST SEBELUM GO LIVE:

### Performance & SEO Test:
1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Target: > 90 score

2. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Check apakah JSON-LD terdeteksi

3. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly

4. **SEO Checker**
   - https://www.seobility.net/en/seocheck/
   - Check metadata, keywords, structure

### Manual Test:
- [ ] Test di Chrome, Safari, Firefox
- [ ] Test di mobile (Android & iOS)
- [ ] Test semua link WhatsApp berfungsi
- [ ] Test loading speed < 3 detik

---

## 📈 AFTER LAUNCH:

### Week 1:
- [ ] Submit sitemap ke Google Search Console
- [ ] Submit sitemap ke Bing Webmaster Tools
- [ ] Monitor Google Analytics

### Week 2-4:
- [ ] Update meta description berdasarkan keyword research
- [ ] Tambahkan blog/artikel (tips makeup, dll)
- [ ] Minta testimoni & review dari customer

### Monthly:
- [ ] Check Google Analytics data
- [ ] Update portfolio dengan foto terbaru
- [ ] Optimize keywords berdasarkan search terms

---

## 🎓 BONUS TIPS SEO:

1. **Local SEO** (Penting untuk MUA!)
   - Konsisten mention "Solo" di semua konten
   - Gunakan keyword: "MUA Solo", "Makeup Artist Solo"
   - Update Google Business Profile rutin

2. **Content Marketing**
   - Buat blog tips makeup
   - Upload before-after di Instagram, embed di website
   - Buat FAQ section

3. **Backlinks**
   - Daftar di direktori vendor wedding
   - Guest post di blog wedding lokal
   - Kolaborasi dengan venue/fotografer

4. **Social Proof**
   - Pasang widget Instagram feed
   - Tampilkan testimoni customer
   - Showcase portfolio terbaik di hero

---

✨ **GOOD LUCK!** Website Anda sudah SEO-ready. Tinggal tambah icon + optimize gambar + hosting = DONE! 🚀
