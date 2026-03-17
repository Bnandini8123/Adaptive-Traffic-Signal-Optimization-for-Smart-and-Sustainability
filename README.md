# Adaptive-Traffic-Signal-Optimization-for-Smart-and-Sustainability
# Smart Traffic Optimization System

A centralized AI-driven web application for monitoring, analyzing, and optimizing urban traffic flow in real-time. This system aggregates simulated sensor data, live CCTV feeds (mocked visualizations), and predictive models to build a complete **Digital Twin** of city infrastructure. Features a futuristic Command Center interface designed with deep black aesthetics and stunning dark-mode UI.

---

## 🚀 Key Features

* **Live Digital Twin**: A futuristic, highly-stylized isometric SVG dashboard representing a live view of city systems, tracking traffic nodes and power grid metrics simultaneously.
* **Green Route AI Optimizer**: A routing system that suggests low-congestion and low-emission paths. It features clear distinction between standard paths and active "Clear Routes," animated directly over detailed city layouts.
* **Live Traffic Matrix**: A 4-camera CCTV wall mimicking an advanced security/surveillance matrix. Tracks vehicle bounding boxes with real-time analytics.
* **Video Analytics**: Upload-ready or mocked traffic feed analytics allowing deeper inspection of specific intersections. Monitors active density levels and directional vehicle counts.
* **Deep Space UI Architecture**: The entire application is built on a custom "silent" jet-black theme. The dark-themed Glassmorphism cards and neon-accented charts make prolonged monitoring easy on the eyes.

---

## 🛠️ Tech Stack

### Frontend
* **React** (via Vite)
* **React Router DOM** for seamless, single-page navigation.
* **Recharts** for beautiful, data-driven analytics charts.
* **Lucide React** for high-quality, modern minimalist iconography.
* **Leaflet & React-Leaflet** for interactive map overlays.
* Custom, ground-up **Vanilla CSS** (`index.css`) defining the robust Dark Theme.

### Backend
* **Node.js**
* **Express.js** providing RESTful APIs.
* **Socket.io** simulating high-frequency, real-time telemetry (Vehicle counts, signal timing).
* **Mongoose (MongoDB)** for data persistence.

---

## 📦 Local Deployment & Setup

This project is structured as a monorepo containing a `frontend` and a `backend` application. Both need to be running concurrently for full functionality.

### 1. Start the Backend Server

Open your terminal, navigate to the `backend` folder, install dependencies, and start the node server.

```bash
cd backend
npm install
node index.js
```
*(By default, the backend server will run on port `5000`)*

### 2. Start the Frontend Application

Open a new terminal window, navigate to the `frontend` folder, install dependencies, and spin up the Vite dev server.

```bash
cd frontend
npm install
npm run dev
```

### 3. Access the Application

Once Vite indicates the app is ready, open your browser and navigate to the provided local address (typically `http://localhost:5173`).

---

## 🎨 Theme & Customization

The aesthetics of this application are tightly integrated into the standard global CSS variables found in `frontend/src/index.css`. 

* The `root` pseudo-selector defines the main **Black Theme** (`#050505` backgrounds with `#cbd5e1` text).
* Specific components (like the `CityMap.jsx` Digital Twin) utilize heavily customized inline SVG properties paired with React `useEffect` hooks for animations like pulses, scanning lasers, and data-flow dashes.

## 🤝 Project Structure

```
Smart-traffic-system/
 ├── backend/
 │   ├── index.js          # Express app configured with Socket.io
 │   ├── package.json
 │   └── models/           # Mongoose schemas
 │
 └── frontend/
     ├── src/
     │   ├── components/   # Reusable UI parts (TopNavbar, VideoAnalyzer)
     │   ├── views/        # Main pages (Dashboard, CityMap, GreenRoutes)
     │   ├── index.css     # Master stylesheet and CSS Variables
     │   └── App.jsx       # React Router layout structure
     └── package.json
```
