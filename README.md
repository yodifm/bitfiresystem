# BitFire Systems International — Website

Monorepo dengan dua bagian terpisah:

- **`frontend/`** — React (Vite, client-side rendering saja / SPA), Tailwind CSS, shadcn/ui. Menampilkan konten dan ambil data dari backend lewat API.
- **`backend/`** — Laravel 12 + Filament. Admin panel untuk kelola konten (layanan, kategori & item produk, galeri, statistik, kenapa pilih kami, sertifikasi) dan inbox pesan kontak. Juga menyediakan REST API publik yang dikonsumsi frontend.

## Menjalankan secara lokal

### 1. Backend (Laravel + Filament)

```bash
cd backend
composer install
cp .env.example .env        # lalu sesuaikan DB_* dengan MySQL kamu
php artisan key:generate
php artisan migrate
php artisan db:seed         # isi data awal (services, produk, galeri, dst)
php artisan storage:link    # supaya foto yang diupload lewat admin bisa diakses publik
php artisan serve --port=8010
```

Admin panel: `http://localhost:8010/admin`

### 2. Frontend (React)

```bash
cd frontend
npm install
cp .env.example .env        # pastikan VITE_API_URL menunjuk ke URL backend di atas
npm run dev
```

Buka `http://localhost:8080`.

## Deploy ke production

- **Backend**: perlu PHP 8.2+, Composer, dan database MySQL — jalan sebagai aplikasi Laravel biasa di belakang Nginx/Apache (mis. lewat aaPanel), atau di-deploy sebagai app PHP standar di hosting yang mendukung Laravel.
- **Frontend**: `npm run build` menghasilkan folder statis `frontend/dist/` — bisa di-hosting di mana saja (static hosting, atau folder publik di Nginx), tinggal arahkan `VITE_API_URL` ke domain backend saat build.
- CORS di backend (`backend/config/cors.php`) saat ini mengizinkan semua origin (`*`) karena API-nya publik/read-only — persempit ke domain frontend kamu kalau mau lebih ketat.

## Catatan

- Project ini sebelumnya dibangun dengan TanStack Start (SSR) dan sempat terhubung ke Lovable. Setelah restrukturisasi ini (split frontend/backend, drop TanStack Start), integrasi editor Lovable kemungkinan besar **tidak berfungsi lagi** karena struktur foldernya sudah beda dari template awal.
