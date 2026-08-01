# TwinTrap – Adaptive Digital Twin Honeypot for Credential-Based Attack Detection

![TwinTrap Banner](https://img.shields.io/badge/Security-Deception%20Honeypot-00f0ff?style=for-the-badge&logo=shield)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20Express%20%7C%20MongoDB-7000ff?style=for-the-badge)

TwinTrap is an enterprise-grade cybersecurity deception platform designed to detect credential-based attacks, calculate multi-factor AI risk scores in real-time, and seamlessly isolate unauthorized intruders into a hyper-realistic Digital Twin Honeypot without exposing production assets.

---

## 🌟 Key Hackathon Demonstration Flow (5-Minute Workflow)

1. **Login Page**:
   - Access the login screen (`/login`).
   - Use the **Hackathon Quick-Presets** at the top of the login card:
     - **Legitimate Preset**: Log in as a trusted user with low risk score (< 50). Directs straight to the **Real Cloud Dashboard**.
     - **Attacker Preset**: Log in as an untrusted origin (Tor node, mismatched browser fingerprint, location anomaly) to compute a high risk score (≥ 50). Directs to the **Verification Sandbox**.
2. **AI Risk Engine Assessment**:
   - Visualized with an interactive SVG Speedometer Gauge and 9 rule-based parameter breakdown cards.
3. **Verification Sandbox (OTP Gate)**:
   - Enter OTP code (`123456` demo OTP).
   - **Correct OTP (`123456`)**: Routes to **Real Cloud Dashboard**.
   - **Incorrect OTP (e.g. `999999`)**: Silently initializes a **Quarantined Deception Session** and routes the attacker directly into the **Adaptive Digital Twin Honeypot**.
4. **Adaptive Digital Twin Honeypot**:
   - Looks almost identical to the production cloud console, but contains 12 lucrative fake decoy assets (*Customer DB SQL Dump, Secrets Vault KMS, Cloud Shell Root Console*).
   - Clicking decoy actions (*Download Database, View API Keys, Disable Firewall*) displays realistic hacker loading progress (*"Accessing Secure Resource...", "Decrypting...", "Downloading..."*) while silently sending telemetry to MongoDB `/api/honeypot/action`.
5. **SOC Admin Dashboard**:
   - Navigate to `/admin` to view live threat statistics, total suspicious logins, honeypot sessions, and real-time attacker logs inside a searchable table with Chart.js risk score distribution graphs.

---

## 🏗️ Architecture & Technology Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS + Custom Dark Cyber Glassmorphic Theme
- **Animations**: Framer Motion & Interactive Canvas Particle CyberGrid
- **Data Visualization**: Chart.js & react-chartjs-2
- **Icons**: Lucide React
- **Typography**: Orbitron, Poppins & Inter (Google Fonts)

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB & Mongoose (with built-in high performance in-memory fallback store)
- **Authentication**: JWT & bcryptjs password hashing
- **Security & Logging**: Helmet, CORS, Morgan, Express Rate Limiter

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Install Backend & Frontend Dependencies

Open a terminal in the project root:

```bash
# Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install
```

### 2. Start Development Servers

Run backend and frontend simultaneously:

**Terminal 1 (Backend Server):**
```bash
cd backend
npm run dev
# Starts server on http://localhost:5000
```

**Terminal 2 (Frontend Client):**
```bash
cd frontend
npm run dev
# Starts Vite app on http://localhost:3000
```

Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 🔐 REST API Reference

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register new identity | No |
| `POST` | `/api/auth/login` | Authenticate identity & run AI risk engine | No |
| `POST` | `/api/auth/verifyOTP` | Verify OTP (123456 demo OTP) | No |
| `GET` | `/api/dashboard` | Fetch real cloud infrastructure metrics | Yes (JWT) |
| `POST` | `/api/honeypot/action` | Record decoy exfiltration telemetry to MongoDB | Optional |
| `GET` | `/api/admin/stats` | Fetch SOC Admin threat statistics & chart metrics | Yes (Admin) |
| `GET` | `/api/admin/logs` | Fetch searchable attacker activity logs | Yes (Admin) |
| `GET` | `/api/auth/profile` | Get logged-in user profile | Yes (JWT) |
| `POST` | `/api/auth/logout` | Terminate session | Yes (JWT) |

---

## 🔒 Security & Deception Engine Highlights
- **Silent Redirection**: Attackers who fail OTP verification are not alerted to an error; instead, they are transparently shifted into an isolated digital twin sandbox.
- **Injected Canary Tokens**: Exfiltrated decoy data contains canary markers that alert SOC teams if leaked on external forums.
- **Fail-Safe DB Architecture**: Operates with MongoDB Atlas/Local MongoDB, while featuring an automatic fallback memory store for 100% demo uptime.
