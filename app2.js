// Game data and state
let gameData = {
  cities: [
    {"name": "東京", "population": 13500000, "x": 400, "y": 200, "unlocked": true},
    {"name": "橫濱", "population": 3700000, "x": 420, "y": 220, "unlocked": true},
    {"name": "名古屋", "population": 2300000, "x": 350, "y": 250, "unlocked": false},
    {"name": "大阪", "population": 2700000, "x": 300, "y": 280, "unlocked": false},
    {"name": "京都", "population": 1470000, "x": 320, "y": 270, "unlocked": false},
    {"name": "神戶", "population": 1540000, "x": 290, "y": 290, "unlocked": false},
    {"name": "廣島", "population": 1200000, "x": 220, "y": 320, "unlocked": false},
    {"name": "福岡", "population": 1500000, "x": 120, "y": 380, "unlocked": false},
    {"name": "仙台", "population": 1090000, "x": 430, "y": 150, "unlocked": false},
    {"name": "札幌", "population": 1950000, "x": 430, "y": 50, "unlocked": false}
  ],
  routes: [
    {"id": "tokyo_yokohama", "from": "東京", "to": "橫濱", "distance": 29, "cost": 50000, "duration": 3, "status": "available"},
    {"id": "tokyo_nagoya", "from": "東京", "to": "名古屋", "distance": 366, "cost": 800000, "duration": 12, "status": "locked", "prerequisite": "tokyo_yokohama"},
    {"id": "nagoya_osaka", "from": "名古屋", "to": "大阪", "distance": 190, "cost": 600000, "duration": 8, "status": "locked", "prerequisite": "tokyo_nagoya"},
    {"id": "osaka_kyoto", "from": "大阪", "to": "京都", "distance": 55, "cost": 200000, "duration": 4, "status": "locked", "prerequisite": "nagoya_osaka"},
    {"id": "osaka_kobe", "from": "大阪", "to": "神戶", "distance": 32, "cost": 150000, "duration": 3, "status": "locked", "prerequisite": "nagoya_osaka"},
    {"id": "osaka_hiroshima", "from": "大阪", "to": "廣島", "distance": 342, "cost": 700000, "duration": 15, "status": "locked", "prerequisite": "osaka_kobe"},
    {"id": "hiroshima_fukuoka", "from": "廣島", "to": "福岡", "distance": 285, "cost": 650000, "duration": 12, "status": "locked", "prerequisite": "osaka_hiroshima"},
    {"id": "tokyo_sendai", "from": "東京", "to": "仙台", "distance": 352, "cost": 750000, "duration": 14, "status": "locked", "prerequisite": "tokyo_nagoya"},
    {"id": "sendai_sapporo", "from": "仙台", "to": "札幌", "distance": 674, "cost": 1200000, "duration": 25, "status": "locked", "prerequisite": "tokyo_sendai"}
  ],
  trains: {
    "1950": [
      {"name": "蒸汽機車C57", "type": "steam", "speed": 65, "capacity": 400, "cost": 50000, "maintenance": 8000, "era": "1950"},
      {"name": "蒸汽機車D51", "type": "steam", "speed": 85, "capacity": 0, "cost": 45000, "maintenance": 7000, "era": "1950"}
    ],
    "1964": [
      {"name": "新幹線0系", "type": "shinkansen", "speed": 210, "capacity": 987, "cost": 800000, "maintenance": 50000, "era": "1964"},
      {"name": "電聯車101系", "type": "electric", "speed": 100, "capacity": 1000, "cost": 150000, "maintenance": 15000, "era": "1964"}
    ],
    "1987": [
      {"name": "新幹線100系", "type": "shinkansen", "speed": 220, "capacity": 1323, "cost": 1000000, "maintenance": 60000, "era": "1987"},
      {"name": "特急列車485系", "type": "limited_express", "speed": 120, "capacity": 600, "cost": 200000, "maintenance": 20000, "era": "1987"}
    ],
    "2010": [
      {"name": "新幹線N700系", "type": "shinkansen", "speed": 320, "capacity": 1323, "cost": 1500000, "maintenance": 80000, "era": "2010"},
      {"name": "通勤電車E231系", "type": "commuter", "speed": 120, "capacity": 1200, "cost": 180000, "maintenance": 18000, "era": "2010"}
    ]
  },
  difficulties: [
    {"name": "初心者", "startMoney": 1500000, "revenueBonus": 1.2},
    {"name": "標準", "startMoney": 1000000, "revenueBonus": 1.0},
    {"name": "上級者", "startMoney": 750000, "revenueBonus": 0.9},
    {"name": "專家", "startMoney": 500000, "revenueBonus": 0.8}
  ],
  events: [
    {"year": 1964, "month": 10, "title": "東京奧運開幕", "description": "新幹線通車，乘客需求大增", "effect": "passenger_boost"},
    {"year": 1973, "month": 1, "title": "石油危機", "description": "燃料成本上升，維護費用增加", "effect": "cost_increase"},
    {"year": 1987, "month": 4, "title": "國鐵民營化", "description": "JR成立，營運效率提升", "effect": "efficiency_boost"}
  ]
};

let gameState = {
  currentYear: 1987,
  currentMonth: 1,
  money: 1000000,
  difficulty: 1,
  revenueBonus: 1.0,
  totalDistance: 0,
  trains: [],
  constructionProjects: [],
  completedRoutes: [],
  monthlyRevenue: 0,
  monthlyCosts: 0,
  satisfaction: 100
};

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
  initializeGame();
});

function initializeGame() {
  // Event listeners for start menu
  document.getElementById('start-game-btn').addEventListener('click', startGame);
  
  // Event listeners for game screen
  document.getElementById('build-route-btn').addEventListener('click', openBuildRouteModal);
  document.getElementById('buy-train-btn').addEventListener('click', openBuyTrainModal);
  document.getElementById('next-month-btn').addEventListener('click', nextMonth);
  
  // Modal event listeners
  setupModalHandlers();
  
  // Initialize map
  renderMap();
}

function startGame() {
  const difficultyIndex = parseInt(document.getElementById('difficulty-select').value);
  const startYear = parseInt(document.getElementById('year-select').value);
  
  gameState.difficulty = difficultyIndex;
  gameState.currentYear = startYear;
  gameState.currentMonth = 1;
  gameState.money = gameData.difficulties[difficultyIndex].startMoney;
  gameState.revenueBonus = gameData.difficulties[difficultyIndex].revenueBonus;
  
  // Show game screen
  document.getElementById('start-menu').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
  
  // Update UI
  updateUI();
  renderMap();
  
  // Add welcome message
  addEvent('遊戲開始！歡迎來到日本鐵道模擬經營遊戲！', 'success');
}

function updateUI() {
  document.getElementById('current-date').textContent = `${gameState.currentYear}年${gameState.currentMonth}月`;
  document.getElementById('current-money').textContent = `¥${gameState.money.toLocaleString()}`;
  document.getElementById('total-distance').textContent = `${gameState.totalDistance}km`;
  document.getElementById('train-count').textContent = gameState.trains.length;
  document.getElementById('satisfaction').textContent = `${gameState.satisfaction}%`;
  
  updateConstructionList();
}

function renderMap() {
  const citiesLayer = document.getElementById('cities-layer');
  const routesLayer = document.getElementById('routes-layer');
  
  // Clear existing elements
  citiesLayer.innerHTML = '';
  routesLayer.innerHTML = '';
  
  // Render routes first (so they appear behind cities)
  gameData.routes.forEach(route => {
    const fromCity = gameData.cities.find(c => c.name === route.from);
    const toCity = gameData.cities.find(c => c.name === route.to);
    
    if (fromCity && toCity) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', fromCity.x);
      line.setAttribute('y1', fromCity.y);
      line.setAttribute('x2', toCity.x);
      line.setAttribute('y2', toCity.y);
      line.classList.add('route');
      
      // Determine route status
      if (gameState.completedRoutes.includes(route.id)) {
        line.classList.add('completed');
      } else if (gameState.constructionProjects.find(p => p.routeId === route.id)) {
        line.classList.add('under-construction');
      } else if (isRouteAvailable(route)) {
        line.classList.add('available');
      }
      
      routesLayer.appendChild(line);
    }
  });
  
  // Render cities
  gameData.cities.forEach(city => {
    const cityGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    cityGroup.classList.add('city');
    
    if (city.unlocked) {
      cityGroup.classList.add('unlocked');
    } else {
      cityGroup.classList.add('locked');
    }
    
    // City circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', city.x);
    circle.setAttribute('cy', city.y);
    circle.setAttribute('r', 8);
    cityGroup.appendChild(circle);
    
    // City name
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', city.x);
    text.setAttribute('y', city.y - 15);
    text.textContent = city.name;
    cityGroup.appendChild(text);
    
    // City click handler
    cityGroup.addEventListener('click', () => showCityInfo(city));
    
    citiesLayer.appendChild(cityGroup);
  });
}

function isRouteAvailable(route) {
  // Route is available if:
  // 1. It has status 'available' OR
  // 2. Its prerequisite route is completed
  return route.status === 'available' || 
         (route.prerequisite && gameState.completedRoutes.includes(route.prerequisite));
}

function showCityInfo(city) {
  const infoPanel = document.getElementById('info-panel');
  infoPanel.innerHTML = `
    <h3>${city.name}</h3>
    <div class="info-row">
      <span class="label">人口:</span>
      <span>${city.population.toLocaleString()}</span>
    </div>
    <div class="info-row">
      <span class="label">狀態:</span>
      <span class="status ${city.unlocked ? 'status--success' : 'status--info'}">${city.unlocked ? '已解鎖' : '未解鎖'}</span>
    </div>
  `;
}

function openBuildRouteModal() {
  const modal = document.getElementById('build-route-modal');
  const routeSelect = document.getElementById('route-select');
  
  // Clear existing options
  routeSelect.innerHTML = '<option value="">選擇路線...</option>';
  
  // Add available routes
  gameData.routes.forEach(route => {
    // Check if route is available and not already completed or under construction
    if (isRouteAvailable(route) && 
        !gameState.completedRoutes.includes(route.id) && 
        !gameState.constructionProjects.find(p => p.routeId === route.id)) {
      
      const option = document.createElement('option');
      option.value = route.id;
      option.textContent = `${route.from} → ${route.to} (¥${route.cost.toLocaleString()})`;
      routeSelect.appendChild(option);
    }
  });
  
  modal.classList.remove('hidden');
}

function openBuyTrainModal() {
  const modal = document.getElementById('buy-train-modal');
  const trainList = document.getElementById('train-list');
  
  // Clear existing trains
  trainList.innerHTML = '';
  
  // Get available trains for current year
  const availableTrains = getAvailableTrains();
  
  if (availableTrains.length === 0) {
    trainList.innerHTML = '<p>目前沒有可購買的列車</p>';
    modal.classList.remove('hidden');
    return;
  }
  
  availableTrains.forEach(train => {
    const trainItem = document.createElement('div');
    trainItem.classList.add('train-item');
    
    const canAfford = gameState.money >= train.cost;
    
    trainItem.innerHTML = `
      <div class="train-header">
        <div class="train-name">${train.name}</div>
        <div class="train-type">${getTrainTypeText(train.type)}</div>
      </div>
      <div class="train-specs">
        <div class="train-spec">
          <span class="label">最高速度:</span>
          <span>${train.speed}km/h</span>
        </div>
        <div class="train-spec">
          <span class="label">載客量:</span>
          <span>${train.capacity}</span>
        </div>
        <div class="train-spec">
          <span class="label">購買成本:</span>
          <span>¥${train.cost.toLocaleString()}</span>
        </div>
        <div class="train-spec">
          <span class="label">維護費用:</span>
          <span>¥${train.maintenance.toLocaleString()}/月</span>
        </div>
      </div>
      <div class="train-actions">
        <button class="btn ${canAfford ? 'btn--primary' : 'btn--secondary'}" 
                onclick="buyTrain('${train.name.replace(/'/g, "\\'")}')" 
                ${!canAfford ? 'disabled' : ''}>
          ${canAfford ? '購買' : '資金不足'}
        </button>
      </div>
    `;
    
    trainList.appendChild(trainItem);
  });
  
  modal.classList.remove('hidden');
}

function getAvailableTrains() {
  const currentEra = getCurrentEra();
  let availableTrains = [];
  
  // Add trains from current and previous eras
  Object.keys(gameData.trains).forEach(era => {
    if (parseInt(era) <= currentEra) {
      availableTrains = availableTrains.concat(gameData.trains[era]);
    }
  });
  
  return availableTrains;
}

function getCurrentEra() {
  if (gameState.currentYear >= 2010) return 2010;
  if (gameState.currentYear >= 1987) return 1987;
  if (gameState.currentYear >= 1964) return 1964;
  return 1950;
}

function getTrainTypeText(type) {
  const typeMap = {
    'steam': '蒸汽',
    'electric': '電車',
    'shinkansen': '新幹線',
    'limited_express': '特急',
    'commuter': '通勤'
  };
  return typeMap[type] || type;
}

function buyTrain(trainName) {
  const availableTrains = getAvailableTrains();
  const train = availableTrains.find(t => t.name === trainName);
  
  if (train && gameState.money >= train.cost) {
    gameState.money -= train.cost;
    gameState.trains.push({...train, id: Date.now()});
    
    updateUI();
    addEvent(`購買了 ${train.name}！`, 'success');
    
    document.getElementById('buy-train-modal').classList.add('hidden');
  }
}

function setupModalHandlers() {
  // Route selection handler
  document.getElementById('route-select').addEventListener('change', function() {
    const routeId = this.value;
    const routeDetails = document.getElementById('route-details');
    
    if (routeId) {
      const route = gameData.routes.find(r => r.id === routeId);
      if (route) {
        document.getElementById('route-distance').textContent = `${route.distance}km`;
        document.getElementById('route-cost').textContent = `¥${route.cost.toLocaleString()}`;
        document.getElementById('route-duration').textContent = `${route.duration}個月`;
        routeDetails.classList.remove('hidden');
      }
    } else {
      routeDetails.classList.add('hidden');
    }
  });
  
  // Confirm build handler
  document.getElementById('confirm-build-btn').addEventListener('click', function() {
    const routeId = document.getElementById('route-select').value;
    if (routeId) {
      startConstruction(routeId);
    }
  });
  
  // Close modal handlers
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').classList.add('hidden');
    });
  });
  
  // Click outside to close
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.add('hidden');
      }
    });
  });
}

function startConstruction(routeId) {
  const route = gameData.routes.find(r => r.id === routeId);
  
  if (!route) {
    addEvent('找不到指定的路線！', 'error');
    return;
  }
  
  if (gameState.money < route.cost) {
    addEvent('資金不足，無法開始建設！', 'error');
    return;
  }
  
  gameState.money -= route.cost;
  
  const project = {
    routeId: route.id,
    route: route,
    remainingMonths: route.duration,
    totalMonths: route.duration,
    monthlyCost: Math.floor(route.cost / route.duration)
  };
  
  gameState.constructionProjects.push(project);
  
  updateUI();
  renderMap();
  addEvent(`開始建設 ${route.from} → ${route.to} 路線！工期${route.duration}個月`, 'success');
  
  document.getElementById('build-route-modal').classList.add('hidden');
}

function updateConstructionList() {
  const constructionList = document.getElementById('construction-list');
  constructionList.innerHTML = '';
  
  if (gameState.constructionProjects.length === 0) {
    constructionList.innerHTML = '<p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">目前沒有建設中的路線</p>';
    return;
  }
  
  gameState.constructionProjects.forEach(project => {
    const progress = ((project.totalMonths - project.remainingMonths) / project.totalMonths) * 100;
    
    const constructionItem = document.createElement('div');
    constructionItem.classList.add('construction-item');
    
    constructionItem.innerHTML = `
      <div class="construction-title">${project.route.from} → ${project.route.to}</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <div class="construction-info">
        剩餘: ${project.remainingMonths}個月 / 總計: ${project.totalMonths}個月
      </div>
    `;
    
    constructionList.appendChild(constructionItem);
  });
}

function nextMonth() {
  // Advance time
  gameState.currentMonth++;
  if (gameState.currentMonth > 12) {
    gameState.currentMonth = 1;
    gameState.currentYear++;
  }
  
  // Process construction projects
  processConstruction();
  
  // Calculate monthly income and expenses
  calculateMonthlyFinances();
  
  // Check for random events
  checkForEvents();
  
  // Update UI
  updateUI();
  renderMap();
  
  // Show monthly report
  showMonthlyReport();
}

function processConstruction() {
  const completedProjects = [];
  
  gameState.constructionProjects.forEach((project, index) => {
    project.remainingMonths--;
    
    if (project.remainingMonths <= 0) {
      // Construction completed
      gameState.completedRoutes.push(project.routeId);
      gameState.totalDistance += project.route.distance;
      
      // Unlock connected cities
      const toCity = gameData.cities.find(c => c.name === project.route.to);
      if (toCity) {
        toCity.unlocked = true;
      }
      
      addEvent(`🎉 ${project.route.from} → ${project.route.to} 路線建設完成！`, 'success');
      completedProjects.push(index);
    }
  });
  
  // Remove completed projects (in reverse order to maintain indices)
  completedProjects.reverse().forEach(index => {
    gameState.constructionProjects.splice(index, 1);
  });
}

function calculateMonthlyFinances() {
  let revenue = 0;
  let costs = 0;
  
  // Calculate revenue from completed routes
  gameState.completedRoutes.forEach(routeId => {
    const route = gameData.routes.find(r => r.id === routeId);
    if (route) {
      const fromCity = gameData.cities.find(c => c.name === route.from);
      const toCity = gameData.cities.find(c => c.name === route.to);
      
      // Base revenue calculation based on population and distance
      const baseRevenue = (fromCity.population + toCity.population) / 1000 * route.distance * 0.05;
      revenue += baseRevenue * gameState.revenueBonus;
    }
  });
  
  // Calculate train maintenance costs
  gameState.trains.forEach(train => {
    costs += train.maintenance;
  });
  
  // Apply revenue and costs
  const netProfit = revenue - costs;
  gameState.money += netProfit;
  
  // Prevent negative money
  if (gameState.money < 0) {
    gameState.money = 0;
    addEvent('⚠️ 資金耗盡！請注意財務管理', 'warning');
  }
  
  gameState.monthlyRevenue = revenue;
  gameState.monthlyCosts = costs;
  
  // Update satisfaction based on service quality
  updateSatisfaction();
}

function updateSatisfaction() {
  let newSatisfaction = gameState.satisfaction;
  
  // Reduce satisfaction if no trains on completed routes
  if (gameState.completedRoutes.length > 0 && gameState.trains.length === 0) {
    newSatisfaction -= 5;
  }
  
  // Improve satisfaction with more trains relative to routes
  const trainRouteRatio = gameState.trains.length / Math.max(1, gameState.completedRoutes.length);
  if (trainRouteRatio >= 1) {
    newSatisfaction += 2;
  } else if (trainRouteRatio < 0.5) {
    newSatisfaction -= 3;
  }
  
  // Gradual recovery towards 100 if service is good
  if (trainRouteRatio >= 0.8) {
    newSatisfaction += 1;
  }
  
  gameState.satisfaction = Math.max(0, Math.min(100, Math.round(newSatisfaction)));
}

function checkForEvents() {
  const event = gameData.events.find(e => e.year === gameState.currentYear && e.month === gameState.currentMonth);
  
  if (event) {
    addEvent(`🔔 特殊事件: ${event.title} - ${event.description}`, 'warning');
    
    // Apply event effects
    switch (event.effect) {
      case 'passenger_boost':
        gameState.revenueBonus *= 1.5;
        addEvent('📈 乘客需求大增！收入提升50%', 'success');
        break;
      case 'cost_increase':
        gameState.trains.forEach(train => train.maintenance = Math.floor(train.maintenance * 1.2));
        addEvent('📊 維護成本上升20%', 'warning');
        break;
      case 'efficiency_boost':
        gameState.revenueBonus *= 1.2;
        addEvent('⚡ 營運效率提升！收入增加20%', 'success');
        break;
    }
  }
}

function showMonthlyReport() {
  document.getElementById('passenger-revenue').textContent = `¥${Math.floor(gameState.monthlyRevenue).toLocaleString()}`;
  document.getElementById('maintenance-cost').textContent = `¥${Math.floor(gameState.monthlyCosts).toLocaleString()}`;
  document.getElementById('construction-cost').textContent = `¥0`;
  document.getElementById('net-profit').textContent = `¥${Math.floor(gameState.monthlyRevenue - gameState.monthlyCosts).toLocaleString()}`;
  
  document.getElementById('monthly-report-modal').classList.remove('hidden');
}

function addEvent(message, type = 'info') {
  const eventsLog = document.getElementById('events-log');
  const eventItem = document.createElement('div');
  eventItem.classList.add('event-item');
  
  if (type !== 'info') {
    eventItem.classList.add(type);
  }
  
  const timestamp = `${gameState.currentYear}年${gameState.currentMonth}月`;
  eventItem.innerHTML = `<strong>${timestamp}</strong> ${message}`;
  eventsLog.insertBefore(eventItem, eventsLog.firstChild);
  
  // Limit to 10 events
  while (eventsLog.children.length > 10) {
    eventsLog.removeChild(eventsLog.lastChild);
  }
}