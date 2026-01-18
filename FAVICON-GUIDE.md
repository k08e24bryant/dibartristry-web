# 📱 PANDUAN MENAMBAHKAN FAVICON & ICONS

Untuk SEO dan branding yang sempurna, tambahkan icon-icon ini ke folder `public/`:

## ✅ File yang Perlu Dibuat:

### 1. **favicon.ico** (32x32px)
   - Icon kecil yang muncul di tab browser
   - Letakkan di: `public/favicon.ico`
   - Bisa generate di: https://favicon.io/

### 2. **apple-touch-icon.png** (180x180px)
   - Icon untuk iOS/Safari saat save to home screen
   - Letakkan di: `public/apple-touch-icon.png`

### 3. **icon-192x192.png** (192x192px)
   - Icon untuk Android/PWA
   - Letakkan di: `public/icon-192x192.png`

### 4. **icon-512x512.png** (512x512px)
   - Icon besar untuk PWA
   - Letakkan di: `public/icon-512x512.png`

## 🎨 Tips Desain Icon:
- Gunakan logo Dibartristry atau inisial "D" yang cantik
- Background: putih atau rose gold (#d4a574)
- Style: minimalis, elegan (sesuai tema MUA)
- Format: PNG dengan transparent background (kecuali favicon.ico)

## 🔧 Tools Recommended:
1. **Canva** - Buat desain icon dengan template
2. **Favicon.io** - Generate favicon dari text/image
3. **RealFaviconGenerator** - https://realfavicongenerator.net/

## ⚡ Quick Guide:
```
1. Buat logo sederhana ukuran 512x512px
2. Export ke PNG
3. Resize ke ukuran yang diperlukan (192x192, 180x180, 32x32)
4. Save semua file ke folder public/
5. Done! ✅
```

## 📝 Contoh Struktur Folder:
```
public/
  ├── favicon.ico          ← Icon browser tab
  ├── apple-touch-icon.png ← iOS icon
  ├── icon-192x192.png     ← Android icon kecil
  ├── icon-512x512.png     ← Android icon besar
  └── manifest.json        ← Sudah ada ✅
```

---
**Note:** Setelah menambahkan icon, clear cache browser untuk melihat perubahan!
