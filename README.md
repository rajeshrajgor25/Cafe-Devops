# ☕ Brevita Café – AI Powered DevOps Project

🔗 **Live Project:** https://brevita-cafe.vercel.app/

---

## 🚀 Overview

Brevita Café is a modern full-stack café web application built with **Next.js**, featuring an **AI-based recommendation system**, **Docker containerization**, and **CI/CD deployment pipeline**.

This project demonstrates real-world concepts of **frontend development, AI logic, and DevOps practices**.

---

## ✨ Key Features

### 🤖 AI Recommendation System

* Smart food suggestions based on:

  * User cart items
  * Time of day
  * Product combinations
* Uses a **weighted scoring algorithm** for recommendations

---

### 🎨 Modern UI/UX

* Clean, responsive design
* Glassmorphism effects
* Dark mode support
* Smooth animations

---

### 🛒 Core Functionality

* Dynamic menu system
* Cart management
* Real-time item interaction

---

### ⚙️ DevOps Implementation

* 🐳 Docker containerization
* 🔁 CI/CD pipeline (GitHub Actions)
* ☁️ Deployment on Vercel
* ⚡ Automatic builds on code push

---

## 🧠 How AI Works

The recommendation system uses:

* Cart-based category detection
* Combo mapping (e.g., coffee → garlic bread)
* Time-based logic (morning/evening preferences)
* Score-based ranking algorithm

👉 Output: Personalized suggestions like

> “Recommended just for you 🔥”

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 16, Tailwind CSS
* **Language:** TypeScript
* **State Management:** React Context
* **Icons:** Lucide React
* **Theme:** next-themes

---

## ⚙️ DevOps Stack

* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Deployment:** Vercel

---

## 📁 Project Structure

```
brevita-cafe/
├── app/                # Pages (Home, Menu, Order)
├── components/         # UI Components + AI system
├── public/             # Images & assets
├── .github/workflows/  # CI/CD pipeline
├── Dockerfile          # Container setup
├── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/rajeshrajgor25/Cafe-Devops.git
cd brevita-cafe
```

### 2. Install dependencies

```
npm install
```

### 3. Run locally

```
npm run dev
```

---

## 🐳 Run with Docker

```
docker build -t cafe-app .
docker run -p 3000:3000 cafe-app
```

---

## 🔁 CI/CD Pipeline

Every push to `main` branch:

* Installs dependencies
* Builds project
* Prepares for deployment

---

## 🌐 Deployment

The application is deployed using **Vercel**, with automatic CI/CD integration.

👉 Live: https://brevita-cafe.vercel.app/

---

## 🎯 Project Highlights

* Real-world DevOps implementation
* AI-based recommendation engine
* Clean and modern UI
* Fully responsive design

---

## 🧠 What I Learned

* Building scalable frontend with Next.js
* Implementing AI-like recommendation logic
* Docker containerization
* CI/CD automation
* Cloud deployment

---

## 📌 Future Improvements

* Add database (MySQL / Prisma)
* User authentication
* Advanced AI (ML-based recommendations)

---


🔥 *Built with passion, coffee, and code*
