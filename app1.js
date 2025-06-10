// 遊戲數據
const GAME_DATA = {
  "cities": [
    {"id": "tokyo", "name": "東京", "population": 13960000, "x": 350, "y": 320, "demand": 15000, "industry": "政治商業", "unlocked": true},
    {"id": "yokohama", "name": "橫濱", "population": 3740000, "x": 370, "y": 340, "demand": 8000, "industry": "港口工業", "unlocked": true},
    {"id": "nagoya", "name": "名古屋", "population": 2300000, "x": 280, "y": 350, "demand": 6000, "industry": "汽車工業", "unlocked": false},
    {"id": "osaka", "name": "大阪", "population": 2690000, "x": 200, "y": 380, "demand": 7000, "industry": "商業金融", "unlocked": false},
    {"id": "kyoto", "name": "京都", "population": 1460000, "x": 220, "y": 360, "demand": 4000, "industry": "觀光文化", "unlocked": false},
    {"id": "kobe", "name": "神戶", "population": 1540000, "x": 180, "y": 390, "demand": 3500, "industry": "港口貿易", "unlocked": false},
    {"id": "sendai", "name": "仙台", "population": 1085000, "x": 380, "y": 250, "demand": 3000, "industry": "東北中心", "unlocked": false},
    {"id": "sapporo", "name": "札幌", "population": 1970000, "x": 380, "y": 150, "demand": 4500, "industry": "北海道中心", "unlocked": false},
    {"id": "fukuoka", "name": "福岡", "population": 1580000, "x": 120, "y": 480, "demand": 4000, "industry": "九州中心", "unlocked": false},
    {"id": "hiroshima", "name": "廣島", "population": 1200000, "x": 140, "y": 420, "demand": 3200, "industry": "重工業", "unlocked": false}
  ],
  "trains": [
    {"id": "steam_c62", "name": "C62型蒸汽機車", "era": 1950, "speed": 95, "capacity": 400, "cost": 50000000, "maintenance": 2000000, "type": "蒸汽", "unlocked": true},
    {"id": "electric_80", "name": "80系電氣化列車", "era": 1950, "speed": 110, "capacity": 800, "cost": 80000000, "maintenance": 1500000, "type": "電氣", "unlocked": true},
    {"id": "shinkansen_0", "name": "0系新幹線", "era": 1964, "speed": 220, "capacity": 1300, "cost": 300000000, "maintenance": 5000000, "type": "新幹線", "unlocked": false},
    {"id": "shinkansen_100", "name": "100系新幹線", "era": 1985, "speed": 275, "capacity": 1300, "cost": 400000000, "maintenance": 6000000, "type": "新幹線", "unlocked": false},
    {"id": "shinkansen_300", "name": "300系新幹線", "era": 1992, "speed": 320, "capacity": 1300, "cost": 500000000, "maintenance": 7000000, "type": "新幹線", "unlocked": false},
    {"id": "shinkansen_n700", "name": "N700系新幹線", "era": 2007, "speed": 360, "capacity": 1300, "cost": 700000000, "maintenance": 8000000, "type": "新幹線", "unlocked": false},
    {"id": "maglev_l0", "name": "L0系磁浮列車", "era": 2025, "speed": 505, "capacity": 1000, "cost": 1000000000, "maintenance": 12000000, "type": "磁浮", "unlocked": false}
  ],
  "routes": [
    {"id": "tokyo_yokohama", "from": "tokyo", "to": "yokohama", "distance": 29, "cost": 120000000, "duration": 6, "terrain": "平原"},
    {"id": "tokyo_nagoya", "from": "tokyo", "to": "nagoya", "distance": 366, "cost": 1500000000, "duration": 18, "terrain": "山地"},
    {"id": "nagoya_osaka", "from": "nagoya", "to": "osaka", "distance": 190, "cost": 800000000, "duration": 12, "terrain": "丘陵"},
    {"id": "osaka_kyoto", "from": "osaka", "to": "kyoto", "distance": 55, "cost": 220000000, "duration": 8, "terrain": "平原"}
  ],
  "technologies": [
    {"id": "steam_tech", "name": "蒸汽機關技術", "cost": 0, "duration": 0, "unlocked": true, "benefits": "解鎖蒸汽列車"},
    {"id": "electric_tech", "name": "電氣化技術", "cost": 100000000, "duration": 12, "unlocked": false, "benefits": "解鎖電氣化列車，降低維護成本15%"},
    {"id": "shinkansen_tech", "name": "新幹線技術", "cost": 500000000, "duration": 24, "unlocked": false, "benefits": "解鎖高速新幹線列車"},
    {"id": "maglev_tech", "name": "磁浮技術", "cost": 2000000000, "duration": 36, "unlocked": false, "benefits": "解鎖超高速磁浮列車"},
    {"id": "safety_system", "name": "安全控制系統", "cost": 200000000, "duration": 18, "unlocked": false, "benefits": "提升安全評級，降低事故風險"},
    {"id": "automation", "name": "自動化系統", "cost": 300000000, "duration": 20, "unlocked": false, "benefits": "降低營運成本20%"}
  ],
  "events": [
    {"id": "tokyo_olympics_1964", "name": "1964年東京奧運", "year": 1964, "effect": "客流量增加50%", "duration": 6},
    {"id": "osaka_expo_1970", "name": "1970年大阪萬博", "year": 1970, "effect": "大阪地區客流增加100%", "duration": 12},
    {"id": "oil_crisis_1973", "name": "1973年石油危機", "year": 1973, "effect": "燃料成本增加200%", "duration": 24},
    {"id": "jnr_privatization", "name": "1987年國鐵民營化", "year": 1987, "effect": "政府補助減少，但經營自主權增加", "duration": 0},
    {"id": "earthquake_kobe", "name": "1995年阪神大地震", "year": 1995, "effect": "關西路線暫停，重建成本增加", "duration": 6}
  ],
  "game_settings": {
    "difficulty_levels": {
      "easy": {"name": "簡單", "starting_funds": 500000000, "income_multiplier": 1.5},
      "normal": {"name": "普通", "starting_funds": 300000000, "income_multiplier": 1.0},
      "hard": {"name": "困難", "starting_funds": 200000000, "income_multiplier": 0.8}
    },
    "eras": [
      {"id": "steam", "name": "蒸汽時代", "start_year": 1950, "funds": 300000000},
      {"id": "shinkansen", "name": "新幹線時代", "start_year": 1964, "funds": 500000000},
      {"id": "modern", "name": "現代", "start_year": 2010, "funds": 2000000000}
    ]
  }
};

// 遊戲狀態
let gameState = {
  currentYear: 1950,
  currentMonth: 1,
  funds: 300000000,
  difficulty: 'normal',
  era: 'steam',
  cities: [],
  trains: [],
  routes: [],
  technologies: [],
  events: [],
  ownedTrains: [],
  builtRoutes: [],
  researchProgress: {},
  activeEvents: [],
  monthlyIncome: 0,
  monthlyExpenses: 0,
  financeHistory: []
};

// DOM 元素
const elements = {};

// 全局函數，確保可以從HTML調用
window.buyTrain = buyTrain;
window.buildRoute = buildRoute;
window.startResearch = startResearch;
window.upgradeStation = upgradeStation;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeEventListeners();
    showStartScreen();
});

function initializeElements() {
    // 獲取所有需要的DOM元素
    elements.startScreen = document.getElementById('start-screen');
    elements.gameScreen = document.getElementById('game-screen');
    elements.difficultySelect = document.getElementById('difficulty-select');
    elements.eraSelect = document.getElementById('era-select');
    elements.newGameBtn = document.getElementById('new-game-btn');
    elements.loadGameBtn = document.getElementById('load-game-btn');
    elements.currentYear = document.getElementById('current-year');
    elements.currentMonth = document.getElementById('current-month');
    elements.currentFunds = document.getElementById('current-funds');
    elements.monthlyIncome = document.getElementById('monthly-income');
    elements.nextMonthBtn = document.getElementById('next-month-btn');
    elements.saveGameBtn = document.getElementById('save-game-btn');
    elements.menuBtn = document.getElementById('menu-btn');
    elements.citiesList = document.getElementById('cities-list');
    elements.trainsList = document.getElementById('trains-list');
    elements.ownedTrainsList = document.getElementById('owned-trains-list');
    elements.routesList = document.getElementById('routes-list');
    elements.techTree = document.getElementById('tech-tree');
    elements.detailInfo = document.getElementById('detail-info');
    elements.gameMap = document.getElementById('game-map');
    elements.modalOverlay = document.getElementById('modal-overlay');
    elements.modalTitle = document.getElementById('modal-title');
    elements.modalBody = document.getElementById('modal-body');
    elements.modalFooter = document.getElementById('modal-footer');
    elements.modalClose = document.getElementById('modal-close');
    elements.modalCancel = document.getElementById('modal-cancel');
    elements.modalConfirm = document.getElementById('modal-confirm');
    elements.notifications = document.getElementById('notifications');
}

function initializeEventListeners() {
    // 開始畫面事件
    elements.newGameBtn.addEventListener('click', startNewGame);
    elements.loadGameBtn.addEventListener('click', loadGame);
    
    // 遊戲控制事件
    elements.nextMonthBtn.addEventListener('click', nextMonth);
    elements.saveGameBtn.addEventListener('click', saveGame);
    elements.menuBtn.addEventListener('click', showMenu);
    
    // 標籤切換事件
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            switchTab(e.target);
        }
    });
    
    // 地圖控制事件
    document.getElementById('zoom-in-btn')?.addEventListener('click', () => zoomMap(1.2));
    document.getElementById('zoom-out-btn')?.addEventListener('click', () => zoomMap(0.8));
    document.getElementById('reset-view-btn')?.addEventListener('click', resetMapView);
    
    // 動作按鈕事件
    document.getElementById('train-shop-btn')?.addEventListener('click', showTrainShop);
    document.getElementById('build-route-btn')?.addEventListener('click', showRouteBuilder);
    
    // 對話框事件
    elements.modalClose?.addEventListener('click', hideModal);
    elements.modalCancel?.addEventListener('click', hideModal);
    elements.modalOverlay?.addEventListener('click', function(e) {
        if (e.target === elements.modalOverlay) {
            hideModal();
        }
    });
    
    // 動態事件委派
    document.addEventListener('click', handleDynamicClicks);
}

function handleDynamicClicks(e) {
    // 城市點擊
    if (e.target.classList.contains('city-item') || e.target.closest('.city-item')) {
        const cityItem = e.target.closest('.city-item') || e.target;
        const cityId = cityItem.dataset.cityId;
        if (cityId) showCityInfo(cityId);
    }
    
    // 列車購買按鈕點擊
    if (e.target.classList.contains('buy-train-btn')) {
        e.stopPropagation();
        const trainId = e.target.dataset.trainId;
        if (trainId) buyTrain(trainId);
    }
    
    // 列車點擊
    if (e.target.classList.contains('train-item') || e.target.closest('.train-item')) {
        const trainItem = e.target.closest('.train-item') || e.target;
        const trainId = trainItem.dataset.trainId;
        if (trainId && trainItem.classList.contains('available')) {
            showTrainInfo(trainId);
        }
    }
    
    // 路線建設按鈕點擊
    if (e.target.classList.contains('build-route-btn')) {
        e.stopPropagation();
        const routeId = e.target.dataset.routeId;
        if (routeId) buildRoute(routeId);
    }
    
    // 路線點擊
    if (e.target.classList.contains('route-item') || e.target.closest('.route-item')) {
        const routeItem = e.target.closest('.route-item') || e.target;
        const routeId = routeItem.dataset.routeId;
        if (routeId) showRouteInfo(routeId);
    }
    
    // 技術研發按鈕點擊
    if (e.target.classList.contains('research-btn')) {
        e.stopPropagation();
        const techId = e.target.dataset.techId;
        if (techId) startResearch(techId);
    }
    
    // 技術點擊
    if (e.target.classList.contains('tech-item') || e.target.closest('.tech-item')) {
        const techItem = e.target.closest('.tech-item') || e.target;
        const techId = techItem.dataset.techId;
        if (techId) showTechInfo(techId);
    }
    
    // SVG城市點擊
    if (e.target.classList.contains('city')) {
        const cityId = e.target.dataset.cityId;
        if (cityId) showCityInfo(cityId);
    }
}

function showStartScreen() {
    elements.startScreen.classList.remove('hidden');
    elements.gameScreen.classList.add('hidden');
}

function startNewGame() {
    const difficulty = elements.difficultySelect.value;
    const era = elements.eraSelect.value;
    
    // 初始化遊戲狀態
    const difficultySettings = GAME_DATA.game_settings.difficulty_levels[difficulty];
    const eraSettings = GAME_DATA.game_settings.eras.find(e => e.id === era);
    
    gameState = {
        currentYear: eraSettings.start_year,
        currentMonth: 1,
        funds: difficultySettings.starting_funds,
        difficulty: difficulty,
        era: era,
        cities: JSON.parse(JSON.stringify(GAME_DATA.cities)),
        trains: JSON.parse(JSON.stringify(GAME_DATA.trains)),
        routes: JSON.parse(JSON.stringify(GAME_DATA.routes)),
        technologies: JSON.parse(JSON.stringify(GAME_DATA.technologies)),
        events: JSON.parse(JSON.stringify(GAME_DATA.events)),
        ownedTrains: [],
        builtRoutes: [],
        researchProgress: {},
        activeEvents: [],
        monthlyIncome: 0,
        monthlyExpenses: 0,
        financeHistory: []
    };
    
    // 根據時代解鎖內容
    unlockContentByEra(era);
    
    // 開始遊戲
    elements.startScreen.classList.add('hidden');
    elements.gameScreen.classList.remove('hidden');
    
    initializeGame();
    showNotification('遊戲開始！歡迎來到日本鐵道經營世界', 'success');
}

function unlockContentByEra(era) {
    const currentYear = gameState.currentYear;
    
    // 解鎖城市（基於年份和時代）
    gameState.cities.forEach(city => {
        if (city.id === 'tokyo' || city.id === 'yokohama') {
            city.unlocked = true;
        } else if (era === 'shinkansen' || era === 'modern') {
            // 在新幹線和現代時代，解鎖更多城市
            if (city.id === 'nagoya' || city.id === 'osaka') {
                city.unlocked = true;
            }
        }
    });
    
    // 解鎖列車
    gameState.trains.forEach(train => {
        train.unlocked = train.era <= currentYear;
    });
    
    // 解鎖技術
    if (currentYear >= 1964) {
        const electricTech = gameState.technologies.find(t => t.id === 'electric_tech');
        if (electricTech) electricTech.unlocked = true;
    }
    
    if (era === 'modern') {
        // 現代時代解鎖更多技術
        gameState.technologies.forEach(tech => {
            if (tech.id === 'shinkansen_tech' || tech.id === 'safety_system') {
                tech.unlocked = true;
            }
        });
    }
}

function initializeGame() {
    updateUI();
    renderMap();
    renderCities();
    renderTrains();
    renderRoutes();
    renderTechTree();
    renderEvents();
    updateFinanceDisplay();
}

function updateUI() {
    elements.currentYear.textContent = gameState.currentYear;
    elements.currentMonth.textContent = gameState.currentMonth;
    elements.currentFunds.textContent = formatCurrency(gameState.funds);
    elements.monthlyIncome.textContent = formatCurrency(gameState.monthlyIncome);
}

function renderMap() {
    const citiesLayer = document.getElementById('cities-layer');
    const routesLayer = document.getElementById('routes-layer');
    
    // 清空現有內容
    citiesLayer.innerHTML = '';
    routesLayer.innerHTML = '';
    
    // 渲染路線
    gameState.routes.forEach(route => {
        const fromCity = gameState.cities.find(c => c.id === route.from);
        const toCity = gameState.cities.find(c => c.id === route.to);
        
        if (fromCity && toCity) {
            const isBuilt = gameState.builtRoutes.includes(route.id);
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', fromCity.x);
            line.setAttribute('y1', fromCity.y);
            line.setAttribute('x2', toCity.x);
            line.setAttribute('y2', toCity.y);
            line.classList.add('route');
            if (isBuilt) {
                line.classList.add('built');
            }
            line.dataset.routeId = route.id;
            routesLayer.appendChild(line);
        }
    });
    
    // 渲染城市
    gameState.cities.forEach(city => {
        const cityGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // 城市圓點
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', city.x);
        circle.setAttribute('cy', city.y);
        circle.setAttribute('r', city.unlocked ? 8 : 6);
        circle.classList.add('city');
        if (city.unlocked) {
            circle.classList.add('unlocked');
        } else {
            circle.classList.add('locked');
        }
        circle.dataset.cityId = city.id;
        
        // 城市標籤
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', city.x);
        text.setAttribute('y', city.y - 12);
        text.classList.add('city-label');
        text.textContent = city.name;
        
        cityGroup.appendChild(circle);
        cityGroup.appendChild(text);
        citiesLayer.appendChild(cityGroup);
    });
}

function renderCities() {
    elements.citiesList.innerHTML = '';
    
    gameState.cities.forEach(city => {
        const cityDiv = document.createElement('div');
        cityDiv.className = `city-item ${city.unlocked ? 'unlocked' : 'locked'}`;
        cityDiv.dataset.cityId = city.id;
        
        cityDiv.innerHTML = `
            <div class="city-name">${city.name}</div>
            <div class="city-info">
                <span>人口: ${formatNumber(city.population)}</span>
                <span>需求: ${formatNumber(city.demand)}</span>
                <span>產業: ${city.industry}</span>
            </div>
        `;
        
        elements.citiesList.appendChild(cityDiv);
    });
}

function renderTrains() {
    elements.trainsList.innerHTML = '';
    elements.ownedTrainsList.innerHTML = '';
    
    // 渲染商店列車
    gameState.trains.forEach(train => {
        const trainDiv = document.createElement('div');
        trainDiv.className = `train-item ${train.unlocked ? 'available' : 'locked'}`;
        trainDiv.dataset.trainId = train.id;
        
        const canAfford = gameState.funds >= train.cost;
        const buyButton = train.unlocked && canAfford ? 
            `<button class="btn btn--primary btn--sm buy-train-btn" data-train-id="${train.id}">購買</button>` : 
            `<span class="text-warning">${!train.unlocked ? '未解鎖' : '資金不足'}</span>`;
        
        trainDiv.innerHTML = `
            <div class="train-name">${train.name}</div>
            <div class="train-specs">
                <span>速度: ${train.speed}km/h</span>
                <span>載客: ${train.capacity}人</span>
                <span>類型: ${train.type}</span>
                <span>維護: ¥${formatNumber(train.maintenance)}/月</span>
            </div>
            <div class="train-cost">¥${formatNumber(train.cost)}</div>
            <div style="margin-top: 8px;">${buyButton}</div>
        `;
        
        elements.trainsList.appendChild(trainDiv);
    });
    
    // 渲染已擁有的列車
    gameState.ownedTrains.forEach((ownedTrain, index) => {
        const train = gameState.trains.find(t => t.id === ownedTrain.trainId);
        if (train) {
            const trainDiv = document.createElement('div');
            trainDiv.className = 'train-item owned';
            trainDiv.dataset.ownedIndex = index;
            
            trainDiv.innerHTML = `
                <div class="train-name">${train.name} #${index + 1}</div>
                <div class="train-specs">
                    <span>狀態: ${ownedTrain.route || '未分配'}</span>
                    <span>收入: ¥${formatNumber(ownedTrain.monthlyRevenue || 0)}/月</span>
                </div>
                <button class="btn btn--secondary btn--sm" onclick="assignTrainToRoute(${index})">分配路線</button>
            `;
            
            elements.ownedTrainsList.appendChild(trainDiv);
        }
    });
}

function renderRoutes() {
    elements.routesList.innerHTML = '';
    
    gameState.routes.forEach(route => {
        const fromCity = gameState.cities.find(c => c.id === route.from);
        const toCity = gameState.cities.find(c => c.id === route.to);
        const isBuilt = gameState.builtRoutes.includes(route.id);
        const canBuild = fromCity.unlocked && toCity.unlocked && !isBuilt && gameState.funds >= route.cost;
        
        const routeDiv = document.createElement('div');
        routeDiv.className = `route-item ${isBuilt ? 'built' : canBuild ? 'available' : 'locked'}`;
        routeDiv.dataset.routeId = route.id;
        
        const buildButton = canBuild ? 
            `<button class="btn btn--primary btn--sm build-route-btn" data-route-id="${route.id}">建設</button>` : 
            isBuilt ? '<span class="text-success">已建成</span>' : '<span class="text-warning">條件不足</span>';
        
        routeDiv.innerHTML = `
            <div class="route-name">${fromCity.name} ↔ ${toCity.name}</div>
            <div class="route-info">
                <span>${route.distance}km</span>
                <span>¥${formatNumber(route.cost)}</span>
                <span>${route.terrain}</span>
            </div>
            <div style="margin-top: 8px;">${buildButton}</div>
        `;
        
        elements.routesList.appendChild(routeDiv);
    });
}

function renderTechTree() {
    elements.techTree.innerHTML = '';
    
    gameState.technologies.forEach(tech => {
        const progress = gameState.researchProgress[tech.id] || 0;
        const isResearching = progress > 0 && progress < 100;
        const canResearch = !tech.unlocked && !isResearching && gameState.funds >= tech.cost;
        
        const techDiv = document.createElement('div');
        techDiv.className = `tech-item ${tech.unlocked ? 'unlocked' : canResearch ? 'available' : 'locked'}`;
        techDiv.dataset.techId = tech.id;
        
        let progressBar = '';
        if (isResearching) {
            progressBar = `
                <div class="tech-progress">
                    <div class="tech-progress-bar" style="width: ${progress}%"></div>
                </div>
            `;
        }
        
        const researchButton = canResearch ? 
            `<button class="btn btn--primary btn--sm research-btn" data-tech-id="${tech.id}">開始研發</button>` : 
            tech.unlocked ? '<span class="text-success">已完成</span>' : 
            isResearching ? '<span class="text-info">研發中...</span>' : 
            '<span class="text-warning">條件不足</span>';
        
        techDiv.innerHTML = `
            <div class="tech-name">${tech.name}</div>
            <div class="tech-info">
                <div>成本: ¥${formatNumber(tech.cost)}</div>
                <div>時間: ${tech.duration}個月</div>
                <div>效果: ${tech.benefits}</div>
            </div>
            ${progressBar}
            <div style="margin-top: 8px;">${researchButton}</div>
        `;
        
        elements.techTree.appendChild(techDiv);
    });
}

function renderEvents() {
    const eventsList = document.getElementById('events-list');
    if (!eventsList) return;
    
    eventsList.innerHTML = '';
    
    gameState.events.forEach(event => {
        const isActive = gameState.activeEvents.some(ae => ae.id === event.id);
        const isPast = gameState.currentYear > event.year;
        
        const eventDiv = document.createElement('div');
        eventDiv.className = `event-item ${isActive ? 'active' : isPast ? 'completed' : ''}`;
        
        eventDiv.innerHTML = `
            <div class="event-name">${event.name}</div>
            <div class="event-description">${event.effect}</div>
            <div class="event-year">${event.year}年</div>
        `;
        
        eventsList.appendChild(eventDiv);
    });
}

function updateFinanceDisplay() {
    const totalAssets = document.getElementById('total-assets');
    const monthlyRevenue = document.getElementById('monthly-revenue');
    const monthlyExpenses = document.getElementById('monthly-expenses');
    const netProfit = document.getElementById('net-profit');
    
    if (totalAssets) totalAssets.textContent = formatCurrency(gameState.funds);
    if (monthlyRevenue) monthlyRevenue.textContent = formatCurrency(gameState.monthlyIncome);
    if (monthlyExpenses) monthlyExpenses.textContent = formatCurrency(gameState.monthlyExpenses);
    if (netProfit) netProfit.textContent = formatCurrency(gameState.monthlyIncome - gameState.monthlyExpenses);
    
    // 更新圖表
    updateFinanceChart();
}

function updateFinanceChart() {
    const canvas = document.getElementById('finance-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 清空畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (gameState.financeHistory.length < 2) return;
    
    // 設定參數
    const padding = 20;
    const width = canvas.width - padding * 2;
    const height = canvas.height - padding * 2;
    
    // 找出最大值和最小值
    const values = gameState.financeHistory.map(h => h.funds);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue || 1;
    
    // 繪製網格線
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + width, y);
        ctx.stroke();
    }
    
    // 繪製資金曲線
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    gameState.financeHistory.forEach((point, index) => {
        const x = padding + (width / (gameState.financeHistory.length - 1)) * index;
        const y = padding + height - ((point.funds - minValue) / range) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
}

function nextMonth() {
    gameState.currentMonth++;
    if (gameState.currentMonth > 12) {
        gameState.currentMonth = 1;
        gameState.currentYear++;
        processYearlyEvents();
    }
    
    processMonthlyUpdates();
    updateUI();
    renderEvents();
    updateFinanceDisplay();
    renderTrains(); // 重新渲染以更新按鈕狀態
    renderRoutes(); // 重新渲染以更新按鈕狀態
    renderTechTree(); // 重新渲染以更新研發進度
    
    showNotification(`進入 ${gameState.currentYear}年 ${gameState.currentMonth}月`, 'info');
}

function processMonthlyUpdates() {
    // 計算收入
    let totalIncome = 0;
    let totalExpenses = 0;
    
    // 列車營運收入和維護成本
    gameState.ownedTrains.forEach(ownedTrain => {
        const train = gameState.trains.find(t => t.id === ownedTrain.trainId);
        if (train) {
            // 維護成本
            totalExpenses += train.maintenance;
            
            // 如果分配到路線，計算收入
            if (ownedTrain.route) {
                const route = gameState.routes.find(r => r.id === ownedTrain.route);
                if (route && gameState.builtRoutes.includes(route.id)) {
                    const fromCity = gameState.cities.find(c => c.id === route.from);
                    const toCity = gameState.cities.find(c => c.id === route.to);
                    const baseDemand = (fromCity.demand + toCity.demand) / 2;
                    const revenue = Math.min(baseDemand * 100, train.capacity * 50);
                    ownedTrain.monthlyRevenue = revenue;
                    totalIncome += revenue;
                }
            }
        }
    });
    
    // 研發進度更新
    Object.keys(gameState.researchProgress).forEach(techId => {
        const tech = gameState.technologies.find(t => t.id === techId);
        if (tech && !tech.unlocked) {
            gameState.researchProgress[techId] += 100 / tech.duration;
            if (gameState.researchProgress[techId] >= 100) {
                tech.unlocked = true;
                delete gameState.researchProgress[techId];
                unlockTechnologyEffects(tech);
                showNotification(`研發完成：${tech.name}`, 'success');
            }
        }
    });
    
    // 處理活躍事件
    gameState.activeEvents = gameState.activeEvents.map(event => {
        event.remainingDuration--;
        return event;
    }).filter(event => event.remainingDuration > 0);
    
    // 應用事件效果
    gameState.activeEvents.forEach(event => {
        if (event.id === 'tokyo_olympics_1964') {
            totalIncome *= 1.5;
        } else if (event.id === 'oil_crisis_1973') {
            totalExpenses *= 3;
        }
    });
    
    gameState.monthlyIncome = totalIncome;
    gameState.monthlyExpenses = totalExpenses;
    gameState.funds += totalIncome - totalExpenses;
    
    // 確保資金不會變成負數
    if (gameState.funds < 0) {
        gameState.funds = 0;
        showNotification('資金不足！請注意財務狀況', 'warning');
    }
    
    // 記錄財務歷史
    gameState.financeHistory.push({
        year: gameState.currentYear,
        month: gameState.currentMonth,
        funds: gameState.funds,
        income: totalIncome,
        expenses: totalExpenses
    });
    
    // 限制歷史記錄數量
    if (gameState.financeHistory.length > 60) {
        gameState.financeHistory.shift();
    }
}

function processYearlyEvents() {
    // 檢查是否有新事件觸發
    gameState.events.forEach(event => {
        if (event.year === gameState.currentYear && !gameState.activeEvents.some(ae => ae.id === event.id)) {
            gameState.activeEvents.push({
                ...event,
                remainingDuration: event.duration
            });
            showNotification(`歷史事件：${event.name}`, 'warning');
        }
    });
    
    // 隨機解鎖新城市
    const lockedCities = gameState.cities.filter(c => !c.unlocked);
    if (lockedCities.length > 0 && Math.random() < 0.3) {
        const cityToUnlock = lockedCities[Math.floor(Math.random() * lockedCities.length)];
        cityToUnlock.unlocked = true;
        showNotification(`新城市解鎖：${cityToUnlock.name}`, 'success');
        renderCities();
        renderMap();
        renderRoutes(); // 重新渲染路線以顯示新的建設選項
    }
}

function unlockTechnologyEffects(tech) {
    switch (tech.id) {
        case 'electric_tech':
            // 解鎖電氣化列車
            gameState.trains.forEach(train => {
                if (train.type === '電氣') {
                    train.unlocked = true;
                }
            });
            break;
        case 'shinkansen_tech':
            // 解鎖新幹線
            gameState.trains.forEach(train => {
                if (train.type === '新幹線' && train.era <= gameState.currentYear + 5) {
                    train.unlocked = true;
                }
            });
            break;
        case 'maglev_tech':
            // 解鎖磁浮列車
            gameState.trains.forEach(train => {
                if (train.type === '磁浮') {
                    train.unlocked = true;
                }
            });
            break;
    }
    renderTrains();
}

function buyTrain(trainId) {
    const train = gameState.trains.find(t => t.id === trainId);
    if (!train || !train.unlocked || gameState.funds < train.cost) {
        showNotification('無法購買此列車', 'error');
        return;
    }
    
    gameState.funds -= train.cost;
    gameState.ownedTrains.push({
        trainId: trainId,
        route: null,
        monthlyRevenue: 0
    });
    
    updateUI();
    renderTrains();
    showNotification(`成功購買 ${train.name}`, 'success');
}

function buildRoute(routeId) {
    const route = gameState.routes.find(r => r.id === routeId);
    if (!route || gameState.builtRoutes.includes(routeId) || gameState.funds < route.cost) {
        showNotification('無法建設此路線', 'error');
        return;
    }
    
    const fromCity = gameState.cities.find(c => c.id === route.from);
    const toCity = gameState.cities.find(c => c.id === route.to);
    
    if (!fromCity.unlocked || !toCity.unlocked) {
        showNotification('需要先解鎖相關城市', 'error');
        return;
    }
    
    gameState.funds -= route.cost;
    gameState.builtRoutes.push(routeId);
    
    updateUI();
    renderRoutes();
    renderMap();
    showNotification(`路線建設完成：${fromCity.name} ↔ ${toCity.name}`, 'success');
}

function startResearch(techId) {
    const tech = gameState.technologies.find(t => t.id === techId);
    if (!tech || tech.unlocked || gameState.funds < tech.cost) {
        showNotification('無法開始研發', 'error');
        return;
    }
    
    gameState.funds -= tech.cost;
    gameState.researchProgress[techId] = 0;
    
    updateUI();
    renderTechTree();
    showNotification(`開始研發：${tech.name}`, 'success');
}

function assignTrainToRoute(trainIndex) {
    const ownedTrain = gameState.ownedTrains[trainIndex];
    if (!ownedTrain) return;
    
    const availableRoutes = gameState.builtRoutes.filter(routeId => {
        // 檢查路線是否已有列車
        return !gameState.ownedTrains.some(ot => ot.route === routeId);
    });
    
    if (availableRoutes.length === 0) {
        showNotification('沒有可用的路線', 'warning');
        return;
    }
    
    let content = '<div class="form-group"><label class="form-label">選擇路線</label><select id="route-select" class="form-control">';
    content += '<option value="">取消分配</option>';
    
    availableRoutes.forEach(routeId => {
        const route = gameState.routes.find(r => r.id === routeId);
        const fromCity = gameState.cities.find(c => c.id === route.from);
        const toCity = gameState.cities.find(c => c.id === route.to);
        content += `<option value="${routeId}">${fromCity.name} ↔ ${toCity.name}</option>`;
    });
    
    content += '</select></div>';
    
    showModal('分配列車路線', content, () => {
        const selectedRoute = document.getElementById('route-select').value;
        ownedTrain.route = selectedRoute || null;
        renderTrains();
        showNotification(selectedRoute ? '列車分配成功' : '取消列車分配', 'success');
        hideModal();
    });
}

function upgradeStation(cityId) {
    showModal('車站升級', `
        <p>升級 ${gameState.cities.find(c => c.id === cityId).name} 車站</p>
        <div class="form-group">
            <label class="form-label">選擇升級類型</label>
            <select id="upgrade-type" class="form-control">
                <option value="platform">月台擴建 - ¥50,000,000</option>
                <option value="facilities">商業設施 - ¥100,000,000</option>
                <option value="terminal">大型終端站 - ¥200,000,000</option>
            </select>
        </div>
    `, () => {
        const upgradeType = document.getElementById('upgrade-type').value;
        const costs = { platform: 50000000, facilities: 100000000, terminal: 200000000 };
        const cost = costs[upgradeType];
        
        if (gameState.funds >= cost) {
            gameState.funds -= cost;
            updateUI();
            showNotification('車站升級完成', 'success');
        } else {
            showNotification('資金不足', 'error');
        }
        hideModal();
    });
}

function showCityInfo(cityId) {
    const city = gameState.cities.find(c => c.id === cityId);
    if (!city) return;
    
    elements.detailInfo.innerHTML = `
        <h4>${city.name}</h4>
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">人口</div>
                <div class="info-value">${formatNumber(city.population)}</div>
            </div>
            <div class="info-item">
                <div class="info-label">需求</div>
                <div class="info-value">${formatNumber(city.demand)}</div>
            </div>
            <div class="info-item">
                <div class="info-label">產業</div>
                <div class="info-value">${city.industry}</div>
            </div>
            <div class="info-item">
                <div class="info-label">狀態</div>
                <div class="info-value ${city.unlocked ? 'text-success' : 'text-warning'}">${city.unlocked ? '已開放' : '未開放'}</div>
            </div>
        </div>
        ${city.unlocked ? '<button class="btn btn--primary btn--sm" onclick="upgradeStation(\'' + cityId + '\')">升級車站</button>' : ''}
    `;
    
    // 切換到資訊面板
    switchToTab('info');
}

function showTrainInfo(trainId) {
    const train = gameState.trains.find(t => t.id === trainId);
    if (!train) return;
    
    elements.detailInfo.innerHTML = `
        <h4>${train.name}</h4>
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">最高速度</div>
                <div class="info-value">${train.speed} km/h</div>
            </div>
            <div class="info-item">
                <div class="info-label">載客量</div>
                <div class="info-value">${train.capacity} 人</div>
            </div>
            <div class="info-item">
                <div class="info-label">類型</div>
                <div class="info-value">${train.type}</div>
            </div>
            <div class="info-item">
                <div class="info-label">時代</div>
                <div class="info-value">${train.era}年</div>
            </div>
            <div class="info-item">
                <div class="info-label">購買成本</div>
                <div class="info-value">¥${formatNumber(train.cost)}</div>
            </div>
            <div class="info-item">
                <div class="info-label">月維護費</div>
                <div class="info-value">¥${formatNumber(train.maintenance)}</div>
            </div>
        </div>
        ${train.unlocked && gameState.funds >= train.cost ? 
            '<button class="btn btn--primary btn--sm" onclick="buyTrain(\'' + trainId + '\')">購買列車</button>' : 
            '<p class="text-warning">資金不足或未解鎖</p>'}
    `;
    
    switchToTab('info');
}

function showRouteInfo(routeId) {
    const route = gameState.routes.find(r => r.id === routeId);
    if (!route) return;
    
    const fromCity = gameState.cities.find(c => c.id === route.from);
    const toCity = gameState.cities.find(c => c.id === route.to);
    const isBuilt = gameState.builtRoutes.includes(routeId);
    
    elements.detailInfo.innerHTML = `
        <h4>${fromCity.name} ↔ ${toCity.name}</h4>
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">距離</div>
                <div class="info-value">${route.distance} km</div>
            </div>
            <div class="info-item">
                <div class="info-label">地形</div>
                <div class="info-value">${route.terrain}</div>
            </div>
            <div class="info-item">
                <div class="info-label">建設成本</div>
                <div class="info-value">¥${formatNumber(route.cost)}</div>
            </div>
            <div class="info-item">
                <div class="info-label">建設時間</div>
                <div class="info-value">${route.duration} 個月</div>
            </div>
            <div class="info-item">
                <div class="info-label">狀態</div>
                <div class="info-value ${isBuilt ? 'text-success' : 'text-warning'}">${isBuilt ? '已建成' : '未建成'}</div>
            </div>
        </div>
        ${!isBuilt && fromCity.unlocked && toCity.unlocked && gameState.funds >= route.cost ? 
            '<button class="btn btn--primary btn--sm" onclick="buildRoute(\'' + routeId + '\')">建設路線</button>' : 
            isBuilt ? '<p class="text-success">路線已建成</p>' : '<p class="text-warning">條件不足</p>'}
    `;
    
    switchToTab('info');
}

function showTechInfo(techId) {
    const tech = gameState.technologies.find(t => t.id === techId);
    if (!tech) return;
    
    const progress = gameState.researchProgress[techId] || 0;
    const isResearching = progress > 0;
    
    elements.detailInfo.innerHTML = `
        <h4>${tech.name}</h4>
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">研發成本</div>
                <div class="info-value">¥${formatNumber(tech.cost)}</div>
            </div>
            <div class="info-item">
                <div class="info-label">研發時間</div>
                <div class="info-value">${tech.duration} 個月</div>
            </div>
            <div class="info-item">
                <div class="info-label">效果</div>
                <div class="info-value">${tech.benefits}</div>
            </div>
            <div class="info-item">
                <div class="info-label">狀態</div>
                <div class="info-value ${tech.unlocked ? 'text-success' : isResearching ? 'text-info' : 'text-warning'}">
                    ${tech.unlocked ? '已完成' : isResearching ? `研發中 ${Math.round(progress)}%` : '未開始'}
                </div>
            </div>
        </div>
        ${!tech.unlocked && !isResearching && gameState.funds >= tech.cost ? 
            '<button class="btn btn--primary btn--sm" onclick="startResearch(\'' + techId + '\')">開始研發</button>' : 
            tech.unlocked ? '<p class="text-success">技術已解鎖</p>' : 
            isResearching ? '<p class="text-info">正在研發中...</p>' : 
            '<p class="text-warning">資金不足</p>'}
    `;
    
    switchToTab('info');
}

function showTrainShop() {
    const availableTrains = gameState.trains.filter(t => t.unlocked);
    let content = '<div class="trains-grid">';
    
    availableTrains.forEach(train => {
        const canAfford = gameState.funds >= train.cost;
        content += `
            <div class="train-item available" style="margin-bottom: 12px;">
                <div class="train-name">${train.name}</div>
                <div class="train-specs">
                    <span>速度: ${train.speed}km/h</span>
                    <span>載客: ${train.capacity}人</span>
                </div>
                <div class="train-cost">¥${formatNumber(train.cost)}</div>
                <button class="btn ${canAfford ? 'btn--primary' : 'btn--secondary'} btn--sm" 
                        onclick="${canAfford ? `buyTrain('${train.id}'); hideModal();` : ''}"
                        ${!canAfford ? 'disabled' : ''}>
                    ${canAfford ? '購買' : '資金不足'}
                </button>
            </div>
        `;
    });
    
    content += '</div>';
    
    showModal('列車商店', content, () => hideModal());
}

function showRouteBuilder() {
    const availableRoutes = gameState.routes.filter(r => {
        const fromCity = gameState.cities.find(c => c.id === r.from);
        const toCity = gameState.cities.find(c => c.id === r.to);
        return fromCity.unlocked && toCity.unlocked && !gameState.builtRoutes.includes(r.id);
    });
    
    if (availableRoutes.length === 0) {
        showModal('路線建設', '<p>目前沒有可建設的路線。請先解鎖更多城市。</p>', () => hideModal());
        return;
    }
    
    let content = '<div class="routes-list">';
    
    availableRoutes.forEach(route => {
        const fromCity = gameState.cities.find(c => c.id === route.from);
        const toCity = gameState.cities.find(c => c.id === route.to);
        const canAfford = gameState.funds >= route.cost;
        
        content += `
            <div class="route-item available" style="margin-bottom: 12px;">
                <div class="route-name">${fromCity.name} ↔ ${toCity.name}</div>
                <div class="route-info">
                    <span>${route.distance}km</span>
                    <span>¥${formatNumber(route.cost)}</span>
                </div>
                <button class="btn ${canAfford ? 'btn--primary' : 'btn--secondary'} btn--sm" 
                        onclick="${canAfford ? `buildRoute('${route.id}'); hideModal();` : ''}"
                        ${!canAfford ? 'disabled' : ''}>
                    ${canAfford ? '建設' : '資金不足'}
                </button>
            </div>
        `;
    });
    
    content += '</div>';
    
    showModal('路線建設', content, () => hideModal());
}

function switchTab(tabBtn) {
    const tabName = tabBtn.getAttribute('data-tab');
    const panel = tabBtn.closest('.left-panel, .right-panel');
    
    // 更新標籤狀態
    panel.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');
    
    // 更新內容顯示
    panel.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabName}-panel`) {
            content.classList.add('active');
        }
    });
}

function switchToTab(tabName) {
    const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (tabBtn) {
        switchTab(tabBtn);
    }
}

function zoomMap(factor) {
    const map = elements.gameMap;
    const currentTransform = map.style.transform || 'scale(1)';
    const currentScale = parseFloat(currentTransform.match(/scale\(([^)]+)\)/)?.[1] || 1);
    const newScale = Math.max(0.5, Math.min(3, currentScale * factor));
    map.style.transform = `scale(${newScale})`;
}

function resetMapView() {
    elements.gameMap.style.transform = 'scale(1)';
}

function saveGame() {
    try {
        const saveData = {
            gameState: gameState,
            timestamp: Date.now()
        };
        
        // 使用簡化的存檔方式，避免localStorage問題
        window.railwayGameSave = saveData;
        showNotification('遊戲已存檔', 'success');
    } catch (error) {
        showNotification('存檔失敗', 'error');
    }
}

function loadGame() {
    try {
        const saveData = window.railwayGameSave;
        if (saveData) {
            gameState = saveData.gameState;
            
            elements.startScreen.classList.add('hidden');
            elements.gameScreen.classList.remove('hidden');
            
            initializeGame();
            showNotification('遊戲載入成功', 'success');
        } else {
            showNotification('沒有找到存檔', 'warning');
        }
    } catch (error) {
        showNotification('載入失敗', 'error');
    }
}

function showMenu() {
    showModal('遊戲選單', `
        <div class="flex flex-col gap-16">
            <button class="btn btn--primary btn--full-width" onclick="saveGame(); hideModal();">存檔遊戲</button>
            <button class="btn btn--secondary btn--full-width" onclick="loadGame(); hideModal();">載入遊戲</button>
            <button class="btn btn--outline btn--full-width" onclick="showStartScreen(); hideModal();">返回主選單</button>
        </div>
    `, () => hideModal());
}

function showModal(title, content, onConfirm) {
    elements.modalTitle.textContent = title;
    elements.modalBody.innerHTML = content;
    
    if (onConfirm) {
        elements.modalConfirm.onclick = onConfirm;
        elements.modalConfirm.style.display = 'inline-block';
    } else {
        elements.modalConfirm.style.display = 'none';
    }
    
    elements.modalOverlay.classList.remove('hidden');
}

function hideModal() {
    elements.modalOverlay.classList.add('hidden');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    elements.notifications.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatNumber(number) {
    return new Intl.NumberFormat('ja-JP').format(number);
}

// 確保全局函數可用
window.assignTrainToRoute = assignTrainToRoute;