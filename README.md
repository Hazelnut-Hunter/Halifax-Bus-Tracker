# 🚌 Halifax Bus Tracker (HRM)

A high-performance, real-time bus tracking web application for Halifax Regional Municipality (HRM) Transit. Built to provide a fast, accessible, mobile-optimized alternative for daily commuters, students, and visitors to check bus locations, route paths, and stop schedules.

🔗 **Live Demo:** [https://halifax-bus-tracker-psi.vercel.app/](https://halifax-bus-tracker-psi.vercel.app/)  
🏙️ **Sister Project (Toronto):** [GTA Live Transit Tracker](https://gta-public-transportation-tracker.vercel.app/)

![Project Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📖 Overview

Halifax Bus Tracker visualizes real-time GTFS-Realtime (General Transit Feed Specification) and GTFS-Static data from Halifax Transit on an interactive Leaflet map. Key highlights include:

* **Raw Real-Time Speed & Bearing:** Updates every 15 seconds directly from GTFS-RT feeds, calculating live vehicle speed ($km/h$) and orientation.
* **GTA-Style Card Popups:** Sleek modern popup cards displaying Express route indicators (`EXP` green badges vs. `HRM` blue badges), GTFS destination headsigns, vehicle ID, direction, and speed.
* **GTFS Route Shapes & Vector Stop Markers:** Interactive GTFS static route polylines and multi-color split sector stop markers labeled with exact route numbers (`4`, `4,136`, `2,3,4`).
* **Stale Data Integrity Detection:** Automatic backend integrity checks alerting users if official transit feeds pause or stall.
* **Multilingual Localization (i18n):** Seamless translation across **English**, **French**, and **Simplified Chinese**.
* **Community Engagement:** Connected with riders via Instagram [@track_yourbus](https://www.instagram.com/track_yourbus/).

---

## ✨ Features

* **Real-Time Bus Tracking:** Live bus positions update every 15 seconds with custom directional markers. Click any vehicle to inspect its route, destination, direction, live speed, and Vehicle ID.
* **GTFS Route Shapes & Stops:** Select 1 to 3 routes to overlay official GTFS route paths and stops. Shared stops dynamically split into multi-colored sector icons labeled with route numbers.
* **Smart Search & Favorites:** Search routes by number or name. Star favorite routes for quick access at the top of the route list.
* **GTA Live Transit Tracker Cross-Promotion:** Regional pin and info modal integration connecting Halifax riders with Toronto's GTA transit tracker.
* **User Geolocation:** "Locate Me" button to immediately jump to your current GPS position.

---

## 📂 Repositories & Architecture

* 💻 **Frontend Repository:** [https://github.com/Hazelnut-Hunter/Halifax-Bus-Tracker](https://github.com/Hazelnut-Hunter/Halifax-Bus-Tracker)
* ⚙️ **Backend Repository:** [https://github.com/Hazelnut-Hunter/Halifax-Bus-Tracker-Backend](https://github.com/Hazelnut-Hunter/Halifax-Bus-Tracker-Backend)

```text
Halifax-Bus-Tracker/
├── index.html      # Main structure, navbar, search widget, and modal elements
├── style.css       # Glassmorphism styling, mobile responsive layouts, card popups
├── script.js       # Core logic: Map initialization, GTFS rendering, i18n
└── README.md       # Project documentation
```

---

## ℹ️🅱️ IB CAS Project (Creativity, Activity, Service)

This web application serves as a core project within my **International Baccalaureate (IB) CAS Portfolio**:

* 🎨 **Creativity:** Architected a full-stack open-source Progressive Web Application from scratch. Solved complex computational problems including real-time GTFS-RT protobuf decoding, spatial GTFS static pre-indexing (<5ms query latency), dynamic SVG vector marker generation, GTA-inspired UI design, and multi-language localization systems.
* 🤝 **Service:** Dedicated to civic empowerment by developing a 100% free, ad-free, open-source public service tool. Designed to make public transit more transparent, accessible, and reliable for Halifax residents, students, and daily commuters.
* 📲 **Community Engagement (Instagram):** Connects directly with local commuters via Instagram [@track_yourbus](https://www.instagram.com/track_yourbus/) to collect user feedback, publish feature updates, and promote sustainable public transportation choices.

---

## 📄 Credits & Data Sources

* **Data Source:** [Halifax Transit Open Data (GTFS & GTFS-RT APIs)](https://www.halifax.ca/home/open-data)
* **Map Tiles:** &copy; [OpenStreetMap](https://www.openstreetmap.org/copyright) Contributors.

---

*Created with ❤️ by [WZJM (Joshua Wu)](https://github.com/WZJM).*