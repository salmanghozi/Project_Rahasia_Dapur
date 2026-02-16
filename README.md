# 🍳 Rahasia Dapur (Kitchen Secrets)

![NodeJS](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white)

**Rahasia Dapur** is a full-stack culinary application designed to share and discover secret recipes. The platform consists of a robust Backend API, a modern React Frontend, and a cross-platform Mobile App built with React Native.

---

## 📸 Screenshots

### Web Frontend
| Login Page | Home Page |
|:---:|:---:|
| ![Login](/home/salman-ghozi/.gemini/antigravity/brain/76152764-2784-4153-bb94-722727330239/login_page_1771174281649.png) | ![Home](/home/salman-ghozi/.gemini/antigravity/brain/76152764-2784-4153-bb94-722727330239/home_page_1771174331532.png) |

### Recipe Detail (Web)
![Detail](/home/salman-ghozi/.gemini/antigravity/brain/76152764-2784-4153-bb94-722727330239/detail_page_1771174367200.png)

> **Mobile App Screenshots**: To be added by the user from their physical device testing.

---

## 🛠 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Backend** | ![Node](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) | REST API, Auth (JWT), Business Logic |
| **Database** | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) | NoSQL Database for Users & Recipes |
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) | Modern SPA, Tailwind CSS Styling |
| **Mobile** | ![React Native](https://img.shields.io/badge/-React%20Native-61DAFB?logo=react&logoColor=black) ![Expo](https://img.shields.io/badge/-Expo-000020?logo=expo&logoColor=white) | Cross-platform (Android/iOS) App |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
-   Node.js (v16 or higher)
-   MongoDB (Running locally or Compass)
-   Expo Go App (on your phone for mobile testing)

### 1. Backend Setup
The backend handles all data and authentication.

```bash
cd backend_rahasia_dapur
npm install
# Create .env file with MONGO_URI and JWT_SECRET
npm start
```
*Server runs on `http://localhost:5000`*

### 2. Frontend Web Setup
The admin/user dashboard interface.

```bash
cd frontend-web_rahasia_dapur
npm install
npm run dev
```
*Access at `http://localhost:5173`*

### 3. Mobile App Setup
The user-facing mobile application.

```bash
cd mobile_app_rahasia_dapur
npm install
npm run dev
```
*Scan the QR Code with Expo Go app.*

---

## 📂 Project Structure

```
Project_Rahasia_Dapur/
├── backend_rahasia_dapur/       # Node.js Server
│   ├── models/                  # Database Schemas
│   ├── routes/                  # API Routes
│   └── index.js                 # Entry Point
├── frontend-web_rahasia_dapur/  # React Web App
│   ├── src/
│   │   ├── pages/               # Views (Login, Home, Detail)
│   │   └── components/          # Reusable UI
├── mobile_app_rahasia_dapur/    # React Native App
│   ├── screens/                 # Mobile Screens
│   └── config.js                # API Configuration
└── README.md                    # This file
```

---

## 📝 License
This project is licensed under the MIT License.

Made with ❤️ by the **Rahasia Dapur** Team.
