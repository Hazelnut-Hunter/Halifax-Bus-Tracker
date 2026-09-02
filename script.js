// Language Dictionary
const translations = {
    en: {
        navTitle: "Halifax Bus Tracker",
        welcome: "Thank you for using Halifax Bus Tracker!",
        timeLabel: "Current Time:",
        loading: "Loading...",
        errorTitle: "Data Feed Error",
        errorMessage: "Sorry, we are currently unable to gain real-time data from Halifax Transit due to unknown reasons on their end. The locations shown on the map may be inaccurate.",
        serverWaking: "Connecting to server...\nThis may take up to 40 seconds if the server is waking up.",
        routeLabel: "Route",
        busLabel: "Bus ID",
        locationPopup: "You are here",
        locationNotSupportedAlert: "Geolocation is not supported by your browser",
        locationAlert: "Unable to retrieve your location. Please check your browser permissions.",
        searchPlaceholder: "Search Route (e.g. 1, 90)...",
        dirLabel: "Direction",
        inbound: "Inbound",
        outbound: "Outbound",
        speedLabel: "Speed",
        torontoTitle: "🏙️ GTA Live Transit Tracker",
        torontoDesc: "Interested in exploring the Greater Toronto Area? Check out GTA Live Transit Tracker!",
        torontoBtn: "🚇 Visit GTA Live Transit Tracker →",
        showShapesStops: "Show Route Shape & Stops",
        promptSelectRoutes: "Please select 1 to 3 routes to view shapes & stops",
        promptMaxRoutes: "Maximum 3 routes supported for shapes & stops",
        stopIdLabel: "Stop ID",
        servingRoutesLabel: "Routes on this stop",
        destinationLabel: "Destination",
        aboutTitle: "About Halifax Bus Tracker",
        aboutIntro: "Welcome to Halifax Bus Tracker! Here is what you can do on this website:",
        feat1Title: "🚌 Real-Time Bus Tracking",
        feat1Desc: "Track live bus locations across Halifax Transit. Click any bus icon to view its route, destination, direction, speed, and Bus ID.",
        feat2Title: "🗺️ Route Shapes & GTFS Stops",
        feat2Desc: "Select 1 to 3 routes to display GTFS route paths and stops with route labels. Multi-route shared stops dynamically display split color sector icons.",
        feat3Title: "📍 Geolocation",
        feat3Desc: "Use the location button to jump to your current location on the map.",
        feat4Title: "⭐ Favorites & Search",
        feat4Desc: "Star your favorite routes for quick filtering anytime.",
        feat5Title: "🏙️ GTA Live Transit Tracker",
        feat5Desc: "Exploring Toronto? Check out our sister project for live transit tracking across the Greater Toronto Area.",
        instaTitle: "Follow Us on Instagram!",
        instaBtn: "Visit @track_yourbus →",
        githubTitle: "🐙 Open Source GitHub Repositories",
        githubFrontend: "Frontend Repo →",
        githubBackend: "Backend Repo →"
    },
    fr: {
        navTitle: "Info-bus Halifax",
        welcome: "Merci d'avoir utilisé Info-bus Halifax",
        timeLabel: "Heure actuelle:",
        loading: "Chargement...",
        errorTitle: "Erreur de flux de données",
        errorMessage: "Nous sommes désolés, mais nous ne pouvons actuellement pas obtenir de données en temps réel de Halifax Transit pour des raisons inconnues de leur côté. Les emplacements affichés sur la carte peuvent donc être inexacts.",
        serverWaking: "Connexion au serveur...\nCela peut prendre jusqu'à 40 secondes si le serveur est en cours de démarrage.",
        routeLabel: "Ligne",
        busLabel: "ID du Bus",
        locationPopup: "Vous êtes ici",
        locationNotSupportedAlert: "La géolocalisation n'est pas prise en charge par votre navigateur",
        locationAlert: "Impossible de récupérer votre position. Veuillez vérifier les autorisations de votre navigateur.",
        searchPlaceholder: "Chercher un itinéraire...",
        dirLabel: "Direction",
        inbound: "Aller",
        outbound: "Retour",
        speedLabel: "Vitesse",
        torontoTitle: "🏙️ GTA Live Transit Tracker",
        torontoDesc: "Vous explorez le Grand Toronto ? Découvrez notre projet partenaire, GTA Live Transit Tracker !",
        torontoBtn: "🚇 Découvrir GTA Live Transit Tracker →",
        showShapesStops: "Afficher tracé & arrêts",
        promptSelectRoutes: "Veuillez sélectionner de 1 à 3 lignes",
        promptMaxRoutes: "Maximum 3 lignes supportées",
        stopIdLabel: "ID de l'arrêt",
        servingRoutesLabel: "Lignes à cet arrêt",
        destinationLabel: "Destination",
        aboutTitle: "À propos d'Info-bus Halifax",
        aboutIntro: "Bienvenue sur Info-bus Halifax ! Voici les fonctionnalités disponibles :",
        feat1Title: "🚌 Suivi des bus en temps réel",
        feat1Desc: "Suivez les positions en direct des bus d'Halifax Transit. Cliquez sur un bus pour voir sa ligne, sa destination, sa direction, sa vitesse et l'ID du bus.",
        feat2Title: "🗺️ Tracés et arrêts GTFS",
        feat2Desc: "Sélectionnez de 1 à 3 lignes pour afficher les parcours et les arrêts avec étiquettes de ligne.",
        feat3Title: "📍 Géolocalisation",
        feat3Desc: "Utilisez le bouton de géolocalisation pour vous situer sur la carte.",
        feat4Title: "⭐ Favoris et Recherche",
        feat4Desc: "Ajoutez vos lignes préférées aux favoris pour un accès rapide.",
        feat5Title: "🏙️ GTA Live Transit Tracker",
        feat5Desc: "Vous explorez Toronto ? Découvrez notre projet partenaire pour le suivi des transports dans le Grand Toronto.",
        instaTitle: "Suivez-nous sur Instagram !",
        instaBtn: "Découvrir @track_yourbus →",
        githubTitle: "🐙 Dépôts GitHub Open Source",
        githubFrontend: "Dépôt Frontend →",
        githubBackend: "Dépôt Backend →"
    },
    zh: {
        navTitle: "哈利法克斯公交追踪器",
        welcome: "感谢使用哈利法克斯公交追踪器!",
        timeLabel: "当前时间：",
        loading: "加载中...",
        errorTitle: "数据源错误",
        errorMessage: "抱歉，由于哈利法克斯公交公司数据问题，我们目前无法获取实时数据。地图上显示的公交位置可能不准确。",
        serverWaking: "正在连接服务器...\n如果服务器正在唤醒,可能需要等待40秒。",
        routeLabel: "线路",
        busLabel: "公交 ID",
        locationPopup: "您在这里",
        locationNotSupportedAlert: "您的浏览器不支持地理位置功能",
        locationAlert: "无法获取您的位置。请检查浏览器权限。",
        searchPlaceholder: "搜索线路...",
        dirLabel: "方向",
        inbound: "上行",
        outbound: "下行",
        speedLabel: "速度",
        torontoTitle: "🏙️ GTA 实时公交追踪器",
        torontoDesc: "正在探索大多伦多地区？欢迎体验我们的姐妹项目大多伦多 (GTA) 实时公交追踪器！",
        torontoBtn: "🚇 访问 GTA 实时公交追踪器 →",
        showShapesStops: "显示线路走向与站点",
        promptSelectRoutes: "请选择 1 至 3 条线路以显示走向与站点",
        promptMaxRoutes: "最多支持 3 条线路显示走向与站点",
        stopIdLabel: "站点 ID",
        servingRoutesLabel: "途经线路",
        destinationLabel: "终点/方向",
        aboutTitle: "关于哈利法克斯公交追踪器",
        aboutIntro: "欢迎使用哈利法克斯公交追踪器！本网站的核心功能如下：",
        feat1Title: "🚌 实时公交追踪",
        feat1Desc: "实时追踪 Halifax Transit 公交车位置。点击公交图标可查看线路、终点方向、行驶方向、速度及车辆 ID。",
        feat2Title: "🗺️ 线路走向与 GTFS 站点",
        feat2Desc: "勾选 1 至 3 条线路，即可在地图上显示线路走向及带有线路编号标识的站点。共用站点显示多色分段图标。",
        feat3Title: "📍 我的位置",
        feat3Desc: "点击定位按钮快速定位至您当前的 GPS 位置。",
        feat4Title: "⭐ 收藏与搜索",
        feat4Desc: "点击星号收藏常用线路，方便快速筛选。",
        feat5Title: "🏙️ GTA 实时公交追踪器",
        feat5Desc: "正在探索多伦多？欢迎体验大多伦多地区 (GTA) 实时公交追踪器姐妹项目。",
        instaTitle: "关注我们的 Instagram！",
        instaBtn: "访问 @track_yourbus →",
        githubTitle: "🐙 开源 GitHub 代码库",
        githubFrontend: "前端代码库 →",
        githubBackend: "后端代码库 →"
    }
};
// Time formating dictionary
const timeFormat = {
    en: {
        locale: 'en-US'
    },
    fr: {
        locale: 'fr-CA'
    },
    zh: {
        locale: 'zh-CN'
    }
};

// API Base URL (Localhost fallback for local testing vs Production backend)
const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3000'
    : 'https://halifax-bus-tracker-backend.onrender.com';

let currentLang = 'en'; // Default language

// Helper to check if a route is Express
function isExpressRoute(routeId, routeName = "") {
    const idNum = parseInt(String(routeId).replace(/\D/g, '')) || 0;
    const nameUpper = String(routeName).toUpperCase();
    return (idNum >= 100 || nameUpper.includes("EXPRESS") || nameUpper.includes("EXP"));
}

// GTA-Style Bus Popup Generator
function createBusPopupContent(bus, lang = currentLang) {
    const t = translations[lang] || translations['en'];
    const rName = routeNames[bus.routeId] || "";
    const isExp = isExpressRoute(bus.routeId, rName);

    const badgeColor = isExp ? "#27ae60" : "#0056b3";
    const badgeText = isExp ? "EXP" : "HRM";

    const routeTitleText = `${t.routeLabel || 'Route'} ${bus.routeId}`;

    let dirText = "";
    if (bus.directionId === 0) dirText = t.outbound;
    else if (bus.directionId === 1) dirText = t.inbound;

    const speedKmH = (bus.speed !== undefined && bus.speed !== null && bus.speed >= 0)
        ? Math.round(bus.speed * 3.6)
        : null;

    const speedText = speedKmH !== null ? `${speedKmH} km/h` : null;
    const destHeadsign = bus.headsign || "";

    return `
        <div class="gta-bus-popup">
            <div class="gta-popup-header">
                <span class="gta-route-badge" style="background-color: ${badgeColor};">${badgeText}</span>
                <span class="gta-route-title">${routeTitleText}</span>
            </div>
            ${rName ? `<div class="gta-route-name">${rName}</div>` : ''}
            ${destHeadsign ? `<div class="gta-dest-headsign">🎯 ${destHeadsign}</div>` : ''}
            
            <div class="gta-popup-divider"></div>

            <div class="gta-popup-details">
                <div class="gta-detail-row"><b>${t.busLabel || 'Bus ID'}:</b> <span>${bus.id}</span></div>
                ${dirText ? `<div class="gta-detail-row"><b>${t.dirLabel || 'Direction'}:</b> <span>${dirText}</span></div>` : ''}
                ${speedText !== null ? `<div class="gta-detail-row"><b>${t.speedLabel || 'Speed'}:</b> <span>${speedText}</span></div>` : ''}
            </div>
        </div>
    `;
}

// Langugae function
function setLanguage(lang) {
    currentLang = lang;

    // Update Text on Screen
    document.getElementById('txt-nav-title').textContent = translations[lang].navTitle;
    document.getElementById('txt-welcome').textContent = translations[lang].welcome;
    document.getElementById('txt-time').textContent = translations[lang].timeLabel;
    document.getElementById('txt-loading-msg').textContent = translations[lang].serverWaking;
    document.getElementById('route-search').placeholder = translations[lang].searchPlaceholder;

    if (document.getElementById('txt-about-title')) {
        document.getElementById('txt-about-title').textContent = translations[lang].aboutTitle;
        document.getElementById('txt-about-intro').textContent = translations[lang].aboutIntro;
        document.getElementById('txt-feat1-title').textContent = translations[lang].feat1Title;
        document.getElementById('txt-feat1-desc').textContent = translations[lang].feat1Desc;
        document.getElementById('txt-feat2-title').textContent = translations[lang].feat2Title;
        document.getElementById('txt-feat2-desc').textContent = translations[lang].feat2Desc;
        document.getElementById('txt-feat3-title').textContent = translations[lang].feat3Title;
        document.getElementById('txt-feat3-desc').textContent = translations[lang].feat3Desc;
        document.getElementById('txt-feat4-title').textContent = translations[lang].feat4Title;
        document.getElementById('txt-feat4-desc').textContent = translations[lang].feat4Desc;
        document.getElementById('txt-feat5-title').textContent = translations[lang].feat5Title;
        document.getElementById('txt-feat5-desc').textContent = translations[lang].feat5Desc;
        document.getElementById('txt-insta-title').textContent = translations[lang].instaTitle;
        document.getElementById('txt-insta-btn').textContent = translations[lang].instaBtn;
        document.getElementById('txt-github-title').textContent = translations[lang].githubTitle;
        document.getElementById('txt-github-frontend').textContent = translations[lang].githubFrontend;
        document.getElementById('txt-github-backend').textContent = translations[lang].githubBackend;
    }

    if (userMarker) {
        userMarker.setPopupContent(translations[lang].locationPopup);
    }

    if (typeof torontoMarker !== 'undefined' && torontoMarker && torontoMarker.getPopup()) {
        torontoMarker.getPopup().setContent(createTorontoPopupContent());
    }

    Object.values(busMarkers).forEach(marker => {
        if (marker.busData) {
            marker.setPopupContent(createBusPopupContent(marker.busData, lang));
        }
    });

    if (currentBusData.length > 0) {
        availableRoutes.clear();
        updateRouteDropdown(currentBusData);
    }

    if (typeof updateShapeToggleUI === 'function') {
        updateShapeToggleUI();
    }

    updateTime();
}

// Site Information Modal Functions
function openSiteInfoModal() {
    const backdrop = document.getElementById('site-info-backdrop');
    if (backdrop) {
        backdrop.classList.remove('modal-backdrop-hidden');
    }
}

function closeSiteInfoModal(e) {
    if (e && e.target && e.target !== document.getElementById('site-info-backdrop') && !e.target.classList.contains('modal-close-btn')) {
        return;
    }
    const backdrop = document.getElementById('site-info-backdrop');
    if (backdrop) {
        backdrop.classList.add('modal-backdrop-hidden');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSiteInfoModal();
    }
});

// Time function
function updateTime() {
    const timeElement = document.getElementById("current-time");
    const now = new Date();

    const locale = timeFormat[currentLang].locale;
    const formattedTime = now.toLocaleTimeString(locale);

    timeElement.textContent = formattedTime;
    timeElement.setAttribute("datetime", now.toISOString());
}

// Start the clock immediately and update every second
updateTime();
setInterval(updateTime, 1000);

// Initialize the map centered on Halifax
const map = L.map('map').setView([44.6488, -63.5752], 13);
map.createPane('busesPane');
map.getPane('busesPane').style.zIndex = 650;

// Add the background map tiles (using OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Storage for markers so we can update them instead of redrawing every time

let busMarkers = {};

// Search & Filter Variables
let selectedRoutes = new Set(); // Stores specific routes user has checked (e.g. "90", "1")
let availableRoutes = new Set(); // Stores all routes currently available from the API

let currentBusData = [];

let routeNames = {}; // Stores "90": "Larry Uteck"



// --- FAVORITES SYSTEM ---
const FAV_STORAGE_KEY = "hrm_bus_favs";

function getFavorites() {
    return new Set(JSON.parse(localStorage.getItem(FAV_STORAGE_KEY)) || []);
}

function toggleFavorite(routeId) {
    const favs = getFavorites();

    if (favs.has(routeId)) {
        favs.delete(routeId); // Remove if exists
    } else {
        favs.add(routeId);    // Add if new
    }

    // Save back to browser
    localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(Array.from(favs)));

    // Force the list to refresh immediately so the item jumps to top/bottom
    availableRoutes.clear(); // This trick forces 'updateRouteDropdown' to rebuild
    updateRouteDropdown(currentBusData);
}

//Function to show error detail
function showErrorDetail() {
    const title = translations[currentLang].errorTitle;
    const msg = translations[currentLang].errorMessage;
    alert(`${title}\n\n${msg}`);
}

let isFirstLoad = true;

async function updateBuses() {
    try {
        const response = await fetch(`${API_BASE_URL}/buses`);

        // --- NEW: READ SERVER HEADER ---
        const serverStaleCount = response.headers.get('X-Stale-Count');
        const warningBtn = document.getElementById("warning-btn");

        // If server says data is old (e.g. 5+ stale fetches = 75 seconds), show warning
        if (serverStaleCount && parseInt(serverStaleCount) >= 5) {
            warningBtn.style.display = "flex";
            console.warn(`Server reports stale data. Count: ${serverStaleCount}`);
        } else {
            warningBtn.style.display = "none";
        }

        const buses = await response.json();

        currentBusData = buses;

        if (isFirstLoad) {
            const loadingOverlay = document.getElementById('loading-overlay');
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
            isFirstLoad = false; // Never show it again for this session
        }

        // 1. First, update the dropdown list with the latest data
        updateRouteDropdown(buses);

        // 2. Track which buses are valid in this update
        const activeBusIds = new Set();

        buses.forEach(bus => {
            // --- FILTER LOGIC ---
            // If we have selected routes, and this bus IS NOT in the selection, skip it.
            if (selectedRoutes.size > 0 && !selectedRoutes.has(bus.routeId)) {
                return; // Do not process this bus
            }
            // --------------------

            activeBusIds.add(bus.id); // Mark as active

            const popupContentBus = createBusPopupContent(bus, currentLang);

            const customIcon = L.divIcon({
                className: 'custom-bus-icon-wrapper',
                html: `
                    <div class="bus-marker-container">
                        <div class="arrow-orbit" style="transform: rotate(${bus.bearing}deg);">
                            <div class="bus-arrow"></div>
                        </div>
                        
                        <div class="bus-box">${bus.routeId}</div>
                    </div>
                `,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            if (busMarkers[bus.id]) {
                busMarkers[bus.id].setLatLng([bus.latitude, bus.longitude]);
                busMarkers[bus.id].setIcon(customIcon);
                busMarkers[bus.id].getPopup().setContent(popupContentBus);
                busMarkers[bus.id].busData = bus;

                if (!map.hasLayer(busMarkers[bus.id])) {
                    busMarkers[bus.id].addTo(map);
                }
            } else {
                const marker = L.marker([bus.latitude, bus.longitude], {
                    icon: customIcon,
                    pane: 'busesPane',
                    zIndexOffset: 1000
                }).addTo(map);
                marker.bindPopup(popupContentBus);
                marker.busData = bus;
                busMarkers[bus.id] = marker;
            }

        });

        Object.keys(busMarkers).forEach(id => {
            if (!activeBusIds.has(id)) {
                map.removeLayer(busMarkers[id]);
                // NOTE: We don't delete it from memory completely so it comes back instantly if un-filtered
                // But removing from map is enough to hide it.
            }
        });

    } catch (error) {
        console.error("Error loading bus data:", error);
        // If the server crashes entirely, also show the warning
        document.getElementById("warning-btn").style.display = "flex";
    }
}

// Update the map every 5 seconds
updateBuses();
setInterval(updateBuses, 5000);

// --- ROUTE NAMES FETCHER ---
async function fetchRouteNames() {
    try {
        const response = await fetch(`${API_BASE_URL}/routes`);
        routeNames = await response.json();
        console.log("Route names loaded.");

        // If we already have bus data, refresh the list immediately to show names
        if (currentBusData.length > 0) {
            updateRouteDropdown(currentBusData);
        }
    } catch (error) {
        console.error("Failed to load route names:", error);
    }
}

// Call this on startup!
fetchRouteNames();

// Function to locate user
let userMarker = null;

function locateUser() {
    const locationPopupContent = translations[currentLang].locationPopup;

    // Check if browser supports geolocation
    if (!navigator.geolocation) {
        alert(translations[currentLang].locationNotSupportedAlert);
        return;
    }

    // Ask for location
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Fly the map to the user
            map.setView([lat, lng], 15);

            // Create a "You are Here" marker (Red pulsing dot)
            if (userMarker) {
                userMarker.setLatLng([lat, lng]);
                userMarker.setPopupContent(locationPopupContent);
                userMarker.openPopup();
            } else {
                // Simple red circle marker
                userMarker = L.circleMarker([lat, lng], {
                    radius: 8,
                    fillColor: "#e74c3c",
                    color: "#fff",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);

                userMarker.bindPopup(locationPopupContent).openPopup();
            }
        },
        () => {
            alert(translations[currentLang].locationAlert);
        }
    );
}

// --- SEARCH & FILTER FUNCTIONS ---

// 1. Toggle the list when clicking the search bar
const searchInput = document.getElementById('route-search');
const routeList = document.getElementById('route-list');
const clearBtn = document.getElementById('clear-search');

searchInput.addEventListener('focus', () => {
    routeList.classList.add('active');
});

// Hide list if clicking outside (optional polish)
document.addEventListener('click', (e) => {
    const container = document.getElementById('search-container');
    if (!container.contains(e.target)) {
        routeList.classList.remove('active');
    }
});

// 2. Filter the checkbox list as user types
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.route-item');

    items.forEach(item => {
        // Search inside the whole text of the item (Number + Name)
        if (item.innerText.toLowerCase().includes(term)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// 3. Clear everything
function clearSelection() {
    selectedRoutes.clear();
    searchInput.value = '';
    clearBtn.style.display = 'none';

    // Uncheck all boxes
    document.querySelectorAll('.route-checkbox').forEach(cb => cb.checked = false);

    // Show all items in list again
    document.querySelectorAll('.route-item').forEach(item => item.style.display = 'flex');

    updateBuses(); // Refresh map to show all
    updateShapeToggleUI(); // Refresh shape toggle UI state
}

// 4. Update the Selection Set
function toggleRoute(routeId, isChecked) {
    if (isChecked) {
        selectedRoutes.add(routeId);
    } else {
        selectedRoutes.delete(routeId);
    }

    // Show/Hide "X" button
    if (selectedRoutes.size > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }

    updateBuses(); // Refresh map immediately
    updateShapeToggleUI(); // Refresh shape toggle UI state
}

// 5. Build the Dropdown List
function updateRouteDropdown(buses) {
    // 1. Get routes currently active on the road
    const liveRoutes = new Set(buses.map(b => b.routeId));

    // 2. Get ALL routes from our static file
    const staticRouteIds = Object.keys(routeNames);
    const allRouteIds = staticRouteIds.length > 0 ? staticRouteIds : Array.from(liveRoutes);

    // ---  Load Favorites ---
    const favorites = getFavorites();

    // 3. Combine and Sort (Favorites First!)
    const sortedRoutes = allRouteIds.sort((a, b) => {
        // Check if they are favorites
        const isFavA = favorites.has(a);
        const isFavB = favorites.has(b);

        // Priority Rule: Favorites always come first
        if (isFavA && !isFavB) return -1;
        if (!isFavA && isFavB) return 1;

        // Secondary Rule: Numeric Sort (Standard)
        const numA = parseInt(a.replace(/\D/g, '')) || 0;
        const numB = parseInt(b.replace(/\D/g, '')) || 0;
        if (numA === numB) return a.localeCompare(b);
        return numA - numB;
    });

    // Check if list needs update
    // We strictly check list content. If order changes (due to fav), 'availableRoutes' 
    // needs to have been cleared by toggleFavorite() to bypass this check.
    if (areSetsEqual(new Set(sortedRoutes), availableRoutes)) return;

    availableRoutes = new Set(sortedRoutes);
    routeList.innerHTML = "";

    const searchTerm = document.getElementById('route-search').value.toLowerCase();

    sortedRoutes.forEach(routeId => {
        const div = document.createElement('div');
        div.className = 'route-item';
        div.setAttribute('data-route', routeId);

        const isChecked = selectedRoutes.has(routeId) ? 'checked' : '';
        const name = routeNames[routeId] || "";

        // --- Determine Star State ---
        const isFav = favorites.has(routeId);
        const starClass = isFav ? 'star-btn active' : 'star-btn';
        const starIcon = isFav ? '★' : '☆'; // Filled vs Empty star character

        div.innerHTML = `
            <span class="${starClass}">${starIcon}</span>
            <input type="checkbox" class="route-checkbox" ${isChecked} value="${routeId}">
            <div class="route-info">
                <span class="route-number"><b>${routeId}</b></span>
                <span class="route-desc">${name}</span>
            </div>
        `;

        // Filter Logic
        if (searchTerm) {
            const searchContent = (routeId + " " + name).toLowerCase();
            if (!searchContent.includes(searchTerm)) {
                div.style.display = 'none';
            }
        }

        // --- Event Listeners ---

        // 1. Click Star -> Toggle Favorite
        const starBtn = div.querySelector('.star-btn');
        starBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop click from checking the box
            toggleFavorite(routeId);
        });

        // 2. Click Checkbox -> Toggle Route on Map
        const checkbox = div.querySelector('input');
        checkbox.addEventListener('change', (e) => toggleRoute(routeId, e.target.checked));

        // 3. Click Row -> Toggle Checkbox
        div.addEventListener('click', (e) => {
            if (e.target !== checkbox && e.target !== starBtn) {
                checkbox.checked = !checkbox.checked;
                toggleRoute(routeId, checkbox.checked);
            }
        });

        routeList.appendChild(div);
    });
}

// Helper to compare Sets
function areSetsEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const item of a) if (!b.has(item)) return false;
    return true;
}

// --- TORONTO CROSS-PROMOTION PIN ---
const torontoIcon = L.divIcon({
    className: 'toronto-promo-wrapper',
    html: `
        <div style="font-size: 26px; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.5)); cursor: pointer; transition: transform 0.2s ease;">
            🚇
        </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
});

function createTorontoPopupContent() {
    const t = translations[currentLang] || translations['en'];
    return `
        <div style="text-align: center; padding: 4px;">
            <div style="font-size: 1.05rem; font-weight: 700; color: #DA291C; margin-bottom: 6px;">${t.torontoTitle}</div>
            <div style="font-size: 0.85rem; margin-bottom: 10px; color: #333333;">${t.torontoDesc}</div>
            <a href="https://gta-public-transportation-tracker.vercel.app/" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #DA291C; color: #ffffff; padding: 6px 12px; border-radius: 8px; font-weight: 700; font-size: 0.8rem; text-decoration: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
                ${t.torontoBtn}
            </a>
        </div>
    `;
}

const torontoMarker = L.marker([43.6532, -79.3832], { icon: torontoIcon })
    .bindPopup(createTorontoPopupContent());

function checkTorontoPin() {
    const zoom = map.getZoom();
    const bounds = map.getBounds();
    const isTorontoInView = bounds.contains([43.6532, -79.3832]);

    // Show pin when user pans over Toronto region (zoom >= 4)
    if (zoom >= 4 && isTorontoInView) {
        if (!map.hasLayer(torontoMarker)) {
            map.addLayer(torontoMarker);
        }
    } else {
        if (map.hasLayer(torontoMarker)) {
            map.removeLayer(torontoMarker);
        }
    }
}

map.on('zoomend moveend', checkTorontoPin);
checkTorontoPin();

// =========================================
// ROUTE SHAPES & STOPS SYSTEM
// =========================================
const routeShapeGroup = L.layerGroup().addTo(map);
const routeStopGroup = L.layerGroup().addTo(map);
const routeColorPalette = ['#3498db', '#e74c3c', '#2ecc71']; // Blue, Coral Red, Emerald Green
let isShapeToggleChecked = false;

const shapeCheckbox = document.getElementById('shape-toggle-checkbox');
const shapeLabel = document.getElementById('shape-toggle-label');
const shapeHint = document.getElementById('shape-toggle-hint');

if (shapeCheckbox) {
    shapeCheckbox.addEventListener('change', (e) => {
        isShapeToggleChecked = e.target.checked;
        updateShapeToggleUI();
    });
}

function updateShapeToggleUI() {
    const size = selectedRoutes.size;
    const t = translations[currentLang] || translations['en'];

    const toggleTextEl = document.getElementById('txt-shape-toggle');
    if (toggleTextEl) toggleTextEl.textContent = t.showShapesStops;

    const toggleHintEl = document.getElementById('txt-shape-toggle-hint');

    if (size === 0) {
        if (shapeCheckbox) {
            shapeCheckbox.disabled = true;
            shapeCheckbox.checked = false;
        }
        isShapeToggleChecked = false;
        if (shapeLabel) shapeLabel.classList.add('disabled');
        if (toggleHintEl) toggleHintEl.textContent = t.promptSelectRoutes;
        clearRouteShapesAndStops();
    } else if (size <= 3) {
        if (shapeCheckbox) shapeCheckbox.disabled = false;
        if (shapeLabel) shapeLabel.classList.remove('disabled');
        if (toggleHintEl) toggleHintEl.textContent = "";

        if (isShapeToggleChecked) {
            renderRouteShapesAndStops();
        } else {
            clearRouteShapesAndStops();
        }
    } else {
        if (shapeCheckbox) {
            shapeCheckbox.disabled = true;
            shapeCheckbox.checked = false;
        }
        isShapeToggleChecked = false;
        if (shapeLabel) shapeLabel.classList.add('disabled');
        if (toggleHintEl) toggleHintEl.textContent = t.promptMaxRoutes;
        clearRouteShapesAndStops();
    }
}

function clearRouteShapesAndStops() {
    routeShapeGroup.clearLayers();
    routeStopGroup.clearLayers();
}

function createSplitStopIcon(routesList) {
    const count = routesList.length;
    const labels = routesList.map(r => r.routeId);
    const labelText = labels.join(',');

    let width = 24;
    let height = 24;
    let fontSize = 11;
    if (count === 2) {
        width = 38;
        fontSize = 10;
    }
    if (count >= 3) {
        width = 50;
        fontSize = 9;
    }

    const r = height / 2;
    let paths = '';

    if (count === 1) {
        const color = routesList[0].color;
        paths = `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="${r - 1}" fill="${color}" stroke="#ffffff" stroke-width="1.5"/>`;
    } else if (count === 2) {
        const c1 = routesList[0].color;
        const c2 = routesList[1].color;
        const mid = width / 2;
        paths = `
            <path d="M ${r} 1 H ${mid} V ${height - 1} H ${r} A ${r - 1} ${r - 1} 0 0 1 ${r} 1 Z" fill="${c1}"/>
            <path d="M ${mid} 1 H ${width - r} A ${r - 1} ${r - 1} 0 0 1 ${width - r} ${height - 1} H ${mid} Z" fill="${c2}"/>
            <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="${r - 1}" fill="none" stroke="#ffffff" stroke-width="1.5"/>
        `;
    } else {
        const w1 = width / 3;
        const c1 = routesList[0].color;
        const c2 = routesList[1].color;
        const c3 = routesList[2].color;
        paths = `
            <path d="M ${r} 1 H ${w1} V ${height - 1} H ${r} A ${r - 1} ${r - 1} 0 0 1 ${r} 1 Z" fill="${c1}"/>
            <rect x="${w1}" y="1" width="${w1}" height="${height - 2}" fill="${c2}"/>
            <path d="M ${2 * w1} 1 H ${width - r} A ${r - 1} ${r - 1} 0 0 1 ${width - r} ${height - 1} H ${2 * w1} Z" fill="${c3}"/>
            <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="${r - 1}" fill="none" stroke="#ffffff" stroke-width="1.5"/>
        `;
    }

    return `
        <div class="stop-icon-container" style="width:${width}px; height:${height}px;">
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                ${paths}
                <text x="50%" y="55%" dominant-baseline="central" text-anchor="middle" fill="#ffffff" font-size="${fontSize}px" font-weight="900" font-family="'Segoe UI', Arial, sans-serif" style="text-shadow: 0 0 3px #000, 0 0 3px #000;">${labelText}</text>
            </svg>
        </div>
    `;
}

async function renderRouteShapesAndStops() {
    if (selectedRoutes.size === 0 || selectedRoutes.size > 3 || !isShapeToggleChecked) {
        clearRouteShapesAndStops();
        return;
    }

    const activeRoutes = Array.from(selectedRoutes).slice(0, 3);
    const routesParam = activeRoutes.join(',');

    const assignedColors = {};
    activeRoutes.forEach((rId, idx) => {
        assignedColors[rId] = routeColorPalette[idx % routeColorPalette.length];
    });

    try {
        const response = await fetch(`${API_BASE_URL}/route-details?routes=${encodeURIComponent(routesParam)}`);
        if (!response.ok) return;
        const data = await response.json();

        clearRouteShapesAndStops();

        const aggregatedStops = {};

        activeRoutes.forEach((routeId) => {
            const rData = data[routeId];
            if (!rData) return;

            const routeColor = rData.color || assignedColors[routeId];
            assignedColors[routeId] = routeColor;

            if (rData.directions) {
                Object.values(rData.directions).forEach(dir => {
                    if (dir.shape && dir.shape.length > 0) {
                        const polyline = L.polyline(dir.shape, {
                            color: routeColor,
                            weight: 4,
                            opacity: 0.85,
                            smoothFactor: 1.0
                        });
                        polyline.addTo(routeShapeGroup);
                    }

                    if (dir.stops && dir.stops.length > 0) {
                        dir.stops.forEach(s => {
                            if (!aggregatedStops[s.id]) {
                                aggregatedStops[s.id] = {
                                    stop: s,
                                    routesMap: {}
                                };
                            }
                            aggregatedStops[s.id].routesMap[routeId] = {
                                routeId: routeId,
                                color: routeColor,
                                directionId: s.directionId,
                                headsign: dir.headsign || s.headsign || ''
                            };
                        });
                    }
                });
            }
        });

        const t = translations[currentLang] || translations['en'];

        Object.values(aggregatedStops).forEach(item => {
            const { stop, routesMap } = item;
            const routesList = Object.values(routesMap);

            const iconHtml = createSplitStopIcon(routesList);
            let iconWidth = 24;
            if (routesList.length === 2) iconWidth = 38;
            if (routesList.length >= 3) iconWidth = 50;

            const customIcon = L.divIcon({
                className: 'stop-marker-wrapper',
                html: iconHtml,
                iconSize: [iconWidth, 22],
                iconAnchor: [iconWidth / 2, 11]
            });

            const marker = L.marker([stop.lat, stop.lon], { icon: customIcon }).addTo(routeStopGroup);

            const routeRows = routesList.map(r => {
                const destination = r.headsign ? `<span style="font-size:11px; color:#555;"> → ${r.headsign}</span>` : '';
                return `
                    <div style="margin-top: 4px; display: flex; align-items: center; gap: 6px;">
                        <span class="route-pill" style="background-color: ${r.color};">${r.routeId}</span>
                        ${destination}
                    </div>
                `;
            }).join('');

            const popupContent = `
                <div class="stop-popup-container">
                    <div class="stop-popup-title">${stop.name}</div>
                    <div class="stop-popup-detail"><b>${t.stopIdLabel}:</b> ${stop.code || stop.id}</div>
                    <div class="stop-popup-detail" style="margin-top:6px;"><b>${t.servingRoutesLabel}:</b></div>
                    ${routeRows}
                </div>
            `;

            marker.bindPopup(popupContent);
        });

    } catch (err) {
        console.error("Error fetching route details:", err);
    }
}

// Initial UI check for shape toggle
updateShapeToggleUI();
