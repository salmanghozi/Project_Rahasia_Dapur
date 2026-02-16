# 🍳 Rahasia Dapur

![NodeJS](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white)

**Rahasia Dapur** adalah aplikasi kuliner *full-stack* yang dirancang untuk berbagi dan menemukan resep rahasia masakan. Platform ini terdiri dari Backend API yang handal, Frontend React yang modern, dan Aplikasi Mobile lintas platform yang dibangun dengan React Native.

---

## 📸 Tampilan Aplikasi (Screenshots)

### Frontend Web
| Halaman Login | Halaman Utama (Home) |
|:---:|:---:|
| ![Login](./docs/login.png) | ![Home](./docs/home.png) |

### Detail Resep (Web)
![Detail](./docs/detail.png)

> **Screenshot Aplikasi Mobile**: Tambahkan di sini hasil tes dari perangkat fisik Anda.

---

## 🛠 Teknologi yang Digunakan (Tech Stack)

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Backend** | ![Node](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) | REST API, Auth (JWT), Logika Bisnis |
| **Database** | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) | Database NoSQL untuk User & Resep |
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) | SPA Modern, Styling dengan Tailwind CSS |
| **Mobile** | ![React Native](https://img.shields.io/badge/-React%20Native-61DAFB?logo=react&logoColor=black) ![Expo](https://img.shields.io/badge/-Expo-000020?logo=expo&logoColor=white) | Aplikasi Lintas Platform (Android/iOS) |

---

## 🚀 Panduan Instalasi (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal Anda.

### Prasyarat
-   Node.js (v16 atau lebih baru)
-   MongoDB (Running locally atau Compass)
-   Aplikasi Expo Go (di HP Anda untuk testing mobile)

### 1. Setup Backend
Server backend menangani semua data dan autentikasi.

```bash
cd backend_rahasia_dapur
npm install
# Buat file .env dengan MONGO_URI dan JWT_SECRET
npm start
```
*Server berjalan di `http://localhost:5000`*

### 2. Setup Frontend Web
Tampilan antarmuka untuk admin/user di website.

```bash
cd frontend-web_rahasia_dapur
npm install
npm run dev
```
*Akses di `http://localhost:5173`*

### 3. Setup Aplikasi Mobile
Aplikasi mobile untuk pengguna umum.

```bash
cd mobile_app_rahasia_dapur
npm install
npm run dev
```
*Scan QR Code menggunakan aplikasi Expo Go.*

---

## 📂 Struktur Proyek

```
Project_Rahasia_Dapur/
├── backend_rahasia_dapur/       # Server Node.js
│   ├── models/                  # Schema Database
│   ├── routes/                  # API Routes
│   └── index.js                 # Entry Point
├── frontend-web_rahasia_dapur/  # React Web App
│   ├── src/
│   │   ├── pages/               # Tampilan (Login, Home, Detail)
│   │   └── components/          # UI yang bisa dipakai ulang
├── mobile_app_rahasia_dapur/    # React Native App
│   ├── screens/                 # Layar Mobile
│   └── config.js                # Konfigurasi API
└── README.md                    # File Dokumentasi Ini
```

---

## 📝 Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT.

Dibuat dengan ❤️ oleh Tim **Rahasia Dapur**.
