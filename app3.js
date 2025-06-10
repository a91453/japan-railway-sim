// 遊戲數據
const gameData = {
  cities: [
    {"name": "東京都", "population": 13960000, "region": "關東", "emoji": "🏙️"},
    {"name": "橫濱市", "population": 3777000, "region": "關東", "emoji": "🌊"},
    {"name": "大阪市", "population": 2737000, "region": "關西", "emoji": "🏰"},
    {"name": "名古屋市", "population": 2327000, "region": "中部", "emoji": "🏭"},
    {"name": "札幌市", "population": 1976000, "region": "北海道", "emoji": "❄️"},
    {"name": "神戶市", "population": 1525000, "region": "關西", "emoji": "⛩️"},
    {"name": "京都市", "population": 1475000, "region": "關西", "emoji": "🎋"},
    {"name": "福岡市", "population": 1612000, "region": "九州", "emoji": "🌸"},
    {"name": "川崎市", "population": 1539000, "region": "關東", "emoji": "🏢"},
    {"name": "埼玉市", "population": 1324000, "region": "關東", "emoji": "🏘️"},
    {"name": "廣島市", "population": 1199000, "region": "中國", "emoji": "🕊️"},
    {"name": "仙台市", "population": 1096000, "region": "東北", "emoji": "🌲"},
    {"name": "千葉市", "population": 979000, "region": "關東", "emoji": "🏖️"},
    {"name": "北九州市", "population": 937000, "region": "九州", "emoji": "🚢"},
    {"name": "濱松市", "population": 791000, "region": "中部", "emoji": "🎸"},
    {"name": "新潟市", "population": 790000, "region": "中部", "emoji": "🌾"},
    {"name": "熊本市", "population": 740000, "region": "九州", "emoji": "🐻"},
    {"name": "岡山市", "population": 720000, "region": "中國", "emoji": "🍑"},
    {"name": "靜岡市", "population": 693000, "region": "中部", "emoji": "🗻"},
    {"name": "鹿兒島市", "population": 595000, "region": "九州", "emoji": "🌋"},
    {"name": "金澤市", "population": 466000, "region": "北陸", "emoji": "⚡"},
    {"name": "長崎市", "population": 405000, "region": "九州", "emoji": "⛪"}
  ],
  technologies: [
    {
      "era": "蒸汽時代",
      "startYear": 1950,
      "trains": [
        {"name": "C62蒸汽機車", "speed": 100, "capacity": 400, "cost": 50000000, "environmental": 2}
      ]
    },
    {
      "era": "電力時代", 
      "startYear": 1960,
      "trains": [
        {"name": "181系電聯車", "speed": 120, "capacity": 480, "cost": 80000000, "environmental": 6}
      ]
    },
    {
      "era": "新幹線時代",
      "startYear": 1964, 
      "trains": [
        {"name": "0系新幹線", "speed": 210, "capacity": 1323, "cost": 150000000, "environmental": 8}
      ]
    },
    {
      "era": "高速時代",
      "startYear": 2010,
      "trains": [
        {"name": "E5系新幹線", "speed": 320, "capacity": 731, "cost": 250000000, "environmental": 9}
      ]
    },
    {
      "era": "磁浮時代",
      "startYear": 2027,
      "trains": [
        {"name": "L0系磁浮列車", "speed": 505, "capacity": 1000, "cost": 500000000, "environmental": 10}
      ]
    }
  ],
  difficulties: [
    {
      "name": "初心者",
      "funds": 1500000000000,
      "description": "起始資金1.5兆日圓，營收加成20%，事件頻率低"
    },
    {
      "name": "標準", 
      "funds": 1000000000000,
      "description": "起始資金1兆日圓，正常營收，標準事件頻率"
    },
    {
      "name": "上級者",
      "funds": 750000000000, 
      "description": "起始資金0.75兆日圓，維護成本較高，營收減少10%"
    },
    {
      "name": "專家",
      "funds": 500000000000,
      "description": "起始資金0.5兆日圓，高事件頻率，維護成本增加50%"
    }
  ],
  events: [
    {
      "type": "自然災害",
      "name": "大地震",
      "description": "發生規模7.2地震，部分路線受損，需要緊急應對措施",
      "options": [
        {"text": "緊急修復", "cost": 500000000, "effect": "快速恢復營運，滿意度+5%"},
        {"text": "全面檢修", "cost": 1000000000, "effect": "提升安全評級+10%，工期較長"},
        {"text": "暫時停運", "cost": 0, "effect": "收入損失20%，但確保安全"}
      ]
    },
    {
      "type": "政策變化",
      "name": "政府補助",
      "description": "政府宣布基礎建設補助計劃，可申請相關支援",
      "options": [
        {"text": "申請新線補助", "cost": 0, "effect": "下次建設成本減少30%"},
        {"text": "申請技術研發補助", "cost": 0, "effect": "下次技術升級成本減少50%"}
      ]
    },
    {
      "type": "經濟變化",
      "name": "觀光熱潮",
      "description": "日本觀光業蓬勃發展，旅客需求大幅增加",
      "options": [
        {"text": "增加班次", "cost": 100000000, "effect": "收入增加25%，滿意度+10%"},
        {"text": "維持現狀", "cost": 0, "effect": "收入增加10%"}
      ]
    },
    {
      "type": "技術發展",
      "name": "新能源技術",
      "description": "研發出新型環保列車技術，可大幅提升環保指數",
      "options": [
        {"text": "投資研發", "cost": 300000000, "effect": "環保指數+15%，長期營運成本降低"},
        {"text": "繼續觀望", "cost": 0, "effect": "維持現狀"}
      ]
    }
  ]
};

// 遊戲狀態
let gameState = {
  currentScreen: 'mainMenu',
  difficulty: '初心者',
  startYear: 1987,
  currentYear: 1987,
  currentMonth: 1,
  funds: 1500000000000,
  totalMileage: 0,
  trainCount: 0,
  employeeCount: 1000,
  satisfaction: 80,
  safety: 90,
  environmental: 70,
  connectedCities: [],
  routes: [],
  trains: [],
  monthlyRevenue: 0,
  monthlyExpenses: 0,
  financialHistory: [],
  eventHistory: [],
  currentEvent: null,
  availableTechnologies: []
};

// DOM 元素
const elements = {
  mainMenu: document.getElementById('mainMenu'),
  gameScreen: document.getElementById('gameScreen'),
  newGameBtn: document.getElementById('newGameBtn'),
  loadGameBtn: document.getElementById('loadGameBtn'),
  yearSlider: document.getElementById('yearSlider'),
  selectedYear: document.getElementById('selectedYear'),
  presetYears: document.querySelectorAll('.preset-year'),
  currentDate: document.getElementById('currentDate'),
  currentFunds: document.getElementById('currentFunds'),
  totalMileage: document.getElementById('totalMileage'),
  trainCount: document.getElementById('trainCount'),
  employeeCount: document.getElementById('employeeCount'),
  networkMap: document.getElementById('networkMap'),
  satisfactionBar: document.getElementById('satisfactionBar'),
  satisfactionValue: document.getElementById('satisfactionValue'),
  safetyBar: document.getElementById('safetyBar'),
  safetyValue: document.getElementById('safetyValue'),
  ecoBar: document.getElementById('ecoBar'),
  ecoValue: document.getElementById('ecoValue'),
  nextMonthBtn: document.getElementById('nextMonthBtn'),
  saveGameBtn: document.getElementById('saveGameBtn'),
  backToMenuBtn: document.getElementById('backToMenuBtn'),
  actionTitle: document.getElementById('actionTitle'),
  actionContent: document.getElementById('actionContent'),
  eventModal: document.getElementById('eventModal'),
  eventTitle: document.getElementById('eventTitle'),
  eventDescription: document.getElementById('eventDescription'),
  eventOptions: document.getElementById('eventOptions'),
  saveModal: document.getElementById('saveModal'),
  saveSlots: document.getElementById('saveSlots'),
  closeSaveModal: document.getElementById('closeSaveModal')
};

// 初始化遊戲
function initGame() {
  setupEventListeners();
  updateYearDisplay();
  generateNetworkMap();
  loadSaveSlots();
}

// 設置事件監聽器
function setupEventListeners() {
  // 主選單
  elements.newGameBtn.addEventListener('click', startNewGame);
  elements.loadGameBtn.addEventListener('click', showLoadGame);
  
  // 年份選擇
  elements.yearSlider.addEventListener('input', updateYearDisplay);
  elements.presetYears.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const year = parseInt(e.target.dataset.year);
      elements.yearSlider.value = year;
      updateYearDisplay();
    });
  });
  
  // 遊戲控制
  elements.nextMonthBtn.addEventListener('click', nextMonth);
  elements.saveGameBtn.addEventListener('click', showSaveGame);
  elements.backToMenuBtn.addEventListener('click', backToMenu);
  
  // 操作按鈕
  document.getElementById('buildRouteBtn').addEventListener('click', () => showAction('buildRoute'));
  document.getElementById('buyTrainBtn').addEventListener('click', () => showAction('buyTrain'));
  document.getElementById('strategyBtn').addEventListener('click', () => showAction('strategy'));
  document.getElementById('financeBtn').addEventListener('click', () => showAction('finance'));
  
  // 彈窗
  elements.closeSaveModal.addEventListener('click', () => {
    elements.saveModal.classList.remove('active');
  });
  
  // 點擊彈窗外部關閉
  elements.eventModal.addEventListener('click', (e) => {
    if (e.target === elements.eventModal) {
      elements.eventModal.classList.remove('active');
    }
  });
  
  elements.saveModal.addEventListener('click', (e) => {
    if (e.target === elements.saveModal) {
      elements.saveModal.classList.remove('active');
    }
  });
}

// 更新年份顯示
function updateYearDisplay() {
  const year = elements.yearSlider.value;
  elements.selectedYear.textContent = year;
}

// 開始新遊戲
function startNewGame() {
  const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
  const selectedYear = parseInt(elements.yearSlider.value);
  
  // 重置遊戲狀態
  const difficultyData = gameData.difficulties.find(d => d.name === selectedDifficulty);
  gameState = {
    currentScreen: 'game',
    difficulty: selectedDifficulty,
    startYear: selectedYear,
    currentYear: selectedYear,
    currentMonth: 1,
    funds: difficultyData.funds,
    totalMileage: 0,
    trainCount: 0,
    employeeCount: 1000,
    satisfaction: 80,
    safety: 90,
    environmental: 70,
    connectedCities: [],
    routes: [],
    trains: [],
    monthlyRevenue: 0,
    monthlyExpenses: 50000000,
    financialHistory: [],
    eventHistory: [],
    currentEvent: null,
    availableTechnologies: getAvailableTechnologies(selectedYear)
  };
  
  switchToGameScreen();
  updateGameDisplay();
  showNotification('遊戲開始！歡迎來到日本鐵道模擬經營世界！', 'success');
}

// 切換到遊戲畫面
function switchToGameScreen() {
  elements.mainMenu.classList.remove('active');
  elements.gameScreen.classList.add('active');
  gameState.currentScreen = 'game';
}

// 返回主選單
function backToMenu() {
  elements.gameScreen.classList.remove('active');
  elements.mainMenu.classList.add('active');
  gameState.currentScreen = 'mainMenu';
}

// 更新遊戲顯示
function updateGameDisplay() {
  elements.currentDate.textContent = `${gameState.currentYear}年${gameState.currentMonth}月`;
  elements.currentFunds.textContent = formatCurrency(gameState.funds);
  elements.totalMileage.textContent = `${gameState.totalMileage}公里`;
  elements.trainCount.textContent = `${gameState.trainCount}輛`;
  elements.employeeCount.textContent = `${gameState.employeeCount}人`;
  
  // 更新狀態條
  updateStatusBar('satisfaction', gameState.satisfaction);
  updateStatusBar('safety', gameState.safety);
  updateStatusBar('eco', gameState.environmental);
  
  // 更新網絡地圖
  updateNetworkMap();
}

// 更新狀態條
function updateStatusBar(type, value) {
  const bar = document.getElementById(`${type}Bar`);
  const valueElement = document.getElementById(`${type}Value`);
  
  bar.style.width = `${value}%`;
  valueElement.textContent = `${value}%`;
  
  // 根據數值設置顏色
  if (value >= 80) {
    bar.style.background = 'linear-gradient(90deg, #10b981, #059669)';
  } else if (value >= 60) {
    bar.style.background = 'linear-gradient(90deg, #f59e0b, #d97706)';
  } else {
    bar.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';
  }
}

// 生成網絡地圖
function generateNetworkMap() {
  elements.networkMap.innerHTML = '';
  
  gameData.cities.forEach(city => {
    const cityNode = document.createElement('div');
    cityNode.className = 'city-node';
    cityNode.dataset.cityName = city.name;
    
    const isConnected = gameState.connectedCities.includes(city.name);
    if (isConnected) {
      cityNode.classList.add('connected');
    }
    
    cityNode.innerHTML = `
      <div class="city-emoji">${city.emoji}</div>
      <div class="city-name">${city.name}</div>
    `;
    
    elements.networkMap.appendChild(cityNode);
  });
}

// 更新網絡地圖
function updateNetworkMap() {
  const cityNodes = document.querySelectorAll('.city-node');
  cityNodes.forEach(node => {
    const cityName = node.dataset.cityName;
    const isConnected = gameState.connectedCities.includes(cityName);
    
    if (isConnected) {
      node.classList.add('connected');
    } else {
      node.classList.remove('connected');
    }
  });
}

// 顯示操作面板
function showAction(actionType) {
  const actionTitle = elements.actionTitle;
  const actionContent = elements.actionContent;
  
  switch (actionType) {
    case 'buildRoute':
      actionTitle.textContent = '🔨 建設新路線';
      actionContent.innerHTML = createRouteBuilder();
      break;
    case 'buyTrain':
      actionTitle.textContent = '🚄 購買/升級列車';
      actionContent.innerHTML = createTrainShop();
      break;
    case 'strategy':
      actionTitle.textContent = '⚙️ 調整營運策略';
      actionContent.innerHTML = createStrategyPanel();
      break;
    case 'finance':
      actionTitle.textContent = '📈 財務報表';
      actionContent.innerHTML = createFinanceReport();
      break;
  }
}

// 創建路線建設器
function createRouteBuilder() {
  const unconnectedCities = gameData.cities.filter(city => 
    !gameState.connectedCities.includes(city.name)
  );
  
  const connectedCities = gameData.cities.filter(city => 
    gameState.connectedCities.includes(city.name)
  );
  
  let html = `
    <div class="route-builder">
      <div class="form-group">
        <label class="form-label">起點城市</label>
        <select class="form-control" id="startCity">
          <option value="">請選擇起點</option>
  `;
  
  // 如果沒有連接的城市，顯示東京作為起點
  if (connectedCities.length === 0) {
    html += `<option value="東京都">東京都 🏙️</option>`;
  } else {
    connectedCities.forEach(city => {
      html += `<option value="${city.name}">${city.name} ${city.emoji}</option>`;
    });
  }
  
  html += `
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">終點城市</label>
        <select class="form-control" id="endCity">
          <option value="">請選擇終點</option>
  `;
  
  unconnectedCities.forEach(city => {
    html += `<option value="${city.name}">${city.name} ${city.emoji}</option>`;
  });
  
  html += `
        </select>
      </div>
      <div class="route-info" id="routeInfo" style="display: none;">
        <h4>路線資訊</h4>
        <p>建設費用：<span id="buildCost">0</span> 日圓</p>
        <p>預計工期：<span id="buildTime">0</span> 個月</p>
        <p>預估距離：<span id="routeDistance">0</span> 公里</p>
      </div>
      <button class="btn btn--primary" id="buildRouteConfirm" disabled>開始建設</button>
    </div>
  `;
  
  // 添加事件監聽器
  setTimeout(() => {
    const startSelect = document.getElementById('startCity');
    const endSelect = document.getElementById('endCity');
    const routeInfo = document.getElementById('routeInfo');
    const buildBtn = document.getElementById('buildRouteConfirm');
    
    function updateRouteInfo() {
      const start = startSelect.value;
      const end = endSelect.value;
      
      if (start && end && start !== end) {
        const startCity = gameData.cities.find(c => c.name === start);
        const endCity = gameData.cities.find(c => c.name === end);
        
        const distance = Math.floor(Math.random() * 300) + 100; // 100-400km
        const cost = distance * 2000000; // 每公里200萬日圓
        const time = Math.ceil(distance / 50); // 每50公里一個月
        
        document.getElementById('buildCost').textContent = formatCurrency(cost);
        document.getElementById('buildTime').textContent = time;
        document.getElementById('routeDistance').textContent = distance;
        
        routeInfo.style.display = 'block';
        buildBtn.disabled = gameState.funds < cost;
        
        buildBtn.onclick = () => buildRoute(start, end, cost, time, distance);
      } else {
        routeInfo.style.display = 'none';
        buildBtn.disabled = true;
      }
    }
    
    startSelect.addEventListener('change', updateRouteInfo);
    endSelect.addEventListener('change', updateRouteInfo);
  }, 100);
  
  return html;
}

// 建設路線
function buildRoute(start, end, cost, time, distance) {
  if (gameState.funds < cost) {
    showNotification('資金不足！', 'error');
    return;
  }
  
  gameState.funds -= cost;
  gameState.totalMileage += distance;
  
  // 添加到連接城市
  if (!gameState.connectedCities.includes(start)) {
    gameState.connectedCities.push(start);
  }
  if (!gameState.connectedCities.includes(end)) {
    gameState.connectedCities.push(end);
  }
  
  // 添加路線記錄
  gameState.routes.push({
    start: start,
    end: end,
    distance: distance,
    cost: cost,
    buildTime: time,
    completed: true
  });
  
  updateGameDisplay();
  showNotification(`成功建設 ${start} - ${end} 路線！`, 'success');
  
  // 重新顯示建設面板
  showAction('buildRoute');
}

// 創建列車商店
function createTrainShop() {
  const availableTrains = gameState.availableTechnologies.reduce((trains, tech) => {
    return trains.concat(tech.trains);
  }, []);
  
  let html = `
    <div class="train-shop">
      <h4>可購買列車</h4>
      <div class="train-grid">
  `;
  
  availableTrains.forEach(train => {
    html += `
      <div class="train-card">
        <div class="train-name">${train.name}</div>
        <div class="train-specs">
          <div class="spec-item">
            <span class="spec-label">最高速度</span>
            <span class="spec-value">${train.speed}km/h</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">載客量</span>
            <span class="spec-value">${train.capacity}人</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">環保指數</span>
            <span class="spec-value">${train.environmental}/10</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">價格</span>
            <span class="spec-value">${formatCurrency(train.cost)}</span>
          </div>
        </div>
        <button class="btn btn--primary" onclick="buyTrain('${train.name}', ${train.cost}, ${train.environmental})" 
                ${gameState.funds < train.cost ? 'disabled' : ''}>
          購買列車
        </button>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
  `;
  
  return html;
}

// 購買列車
function buyTrain(trainName, cost, environmental) {
  if (gameState.funds < cost) {
    showNotification('資金不足！', 'error');
    return;
  }
  
  gameState.funds -= cost;
  gameState.trainCount += 1;
  gameState.environmental = Math.min(100, gameState.environmental + 2);
  
  gameState.trains.push({
    name: trainName,
    cost: cost,
    environmental: environmental,
    purchaseDate: `${gameState.currentYear}年${gameState.currentMonth}月`
  });
  
  updateGameDisplay();
  showNotification(`成功購買 ${trainName}！`, 'success');
  
  // 重新顯示列車商店
  showAction('buyTrain');
}

// 創建策略面板
function createStrategyPanel() {
  return `
    <div class="strategy-panel">
      <div class="form-group">
        <label class="form-label">票價策略</label>
        <select class="form-control" id="priceStrategy">
          <option value="low">低價策略 (收入-10%, 滿意度+5%)</option>
          <option value="normal" selected>標準定價</option>
          <option value="high">高價策略 (收入+15%, 滿意度-5%)</option>
        </select>
      </div>
      
      <div class="form-group">
        <label class="form-label">服務密度</label>
        <select class="form-control" id="serviceFrequency">
          <option value="low">低密度 (成本-20%, 滿意度-10%)</option>
          <option value="normal" selected>標準密度</option>
          <option value="high">高密度 (成本+25%, 滿意度+10%)</option>
        </select>
      </div>
      
      <div class="form-group">
        <label class="form-label">維護標準</label>
        <select class="form-control" id="maintenanceLevel">
          <option value="basic">基本維護 (成本-15%, 安全度-5%)</option>
          <option value="standard" selected>標準維護</option>
          <option value="premium">高標準維護 (成本+20%, 安全度+10%)</option>
        </select>
      </div>
      
      <button class="btn btn--primary" onclick="applyStrategy()">套用策略</button>
    </div>
  `;
}

// 套用策略
function applyStrategy() {
  const priceStrategy = document.getElementById('priceStrategy').value;
  const serviceFrequency = document.getElementById('serviceFrequency').value;
  const maintenanceLevel = document.getElementById('maintenanceLevel').value;
  
  // 根據策略調整各項指標
  let revenueModifier = 1;
  let satisfactionChange = 0;
  let costModifier = 1;
  let safetyChange = 0;
  
  // 票價策略
  switch (priceStrategy) {
    case 'low':
      revenueModifier *= 0.9;
      satisfactionChange += 5;
      break;
    case 'high':
      revenueModifier *= 1.15;
      satisfactionChange -= 5;
      break;
  }
  
  // 服務密度
  switch (serviceFrequency) {
    case 'low':
      costModifier *= 0.8;
      satisfactionChange -= 10;
      break;
    case 'high':
      costModifier *= 1.25;
      satisfactionChange += 10;
      break;
  }
  
  // 維護標準
  switch (maintenanceLevel) {
    case 'basic':
      costModifier *= 0.85;
      safetyChange -= 5;
      break;
    case 'premium':
      costModifier *= 1.2;
      safetyChange += 10;
      break;
  }
  
  // 套用變化
  gameState.satisfaction = Math.max(0, Math.min(100, gameState.satisfaction + satisfactionChange));
  gameState.safety = Math.max(0, Math.min(100, gameState.safety + safetyChange));
  gameState.monthlyExpenses = Math.floor(gameState.monthlyExpenses * costModifier);
  
  updateGameDisplay();
  showNotification('營運策略已更新！', 'success');
}

// 創建財務報表
function createFinanceReport() {
  const history = gameState.financialHistory.slice(-12); // 最近12個月
  
  let html = `
    <div class="finance-report">
      <div class="finance-summary">
        <h4>本月財務狀況</h4>
        <p>收入：<span class="positive">${formatCurrency(gameState.monthlyRevenue)}</span></p>
        <p>支出：<span class="negative">${formatCurrency(gameState.monthlyExpenses)}</span></p>
        <p>淨利：<span class="${gameState.monthlyRevenue - gameState.monthlyExpenses >= 0 ? 'positive' : 'negative'}">
          ${formatCurrency(gameState.monthlyRevenue - gameState.monthlyExpenses)}</span></p>
      </div>
      
      <h4>最近12個月財務記錄</h4>
      <table class="finance-table">
        <thead>
          <tr>
            <th>月份</th>
            <th>收入</th>
            <th>支出</th>
            <th>淨利</th>
          </tr>
        </thead>
        <tbody>
  `;
  
  history.forEach(record => {
    const profit = record.revenue - record.expenses;
    html += `
      <tr>
        <td>${record.year}年${record.month}月</td>
        <td class="positive">${formatCurrency(record.revenue)}</td>
        <td class="negative">${formatCurrency(record.expenses)}</td>
        <td class="${profit >= 0 ? 'positive' : 'negative'}">${formatCurrency(profit)}</td>
      </tr>
    `;
  });
  
  html += `
        </tbody>
      </table>
    </div>
  `;
  
  return html;
}

// 下個月
function nextMonth() {
  // 計算月收入
  const baseRevenue = gameState.connectedCities.length * gameState.trainCount * 50000000;
  const satisfactionBonus = (gameState.satisfaction - 50) / 100;
  gameState.monthlyRevenue = Math.floor(baseRevenue * (1 + satisfactionBonus));
  
  // 計算支出
  const baseCost = gameState.trainCount * 10000000 + gameState.employeeCount * 500000;
  gameState.monthlyExpenses = baseCost;
  
  // 更新資金
  const netProfit = gameState.monthlyRevenue - gameState.monthlyExpenses;
  gameState.funds += netProfit;
  
  // 記錄財務歷史
  gameState.financialHistory.push({
    year: gameState.currentYear,
    month: gameState.currentMonth,
    revenue: gameState.monthlyRevenue,
    expenses: gameState.monthlyExpenses
  });
  
  // 更新時間
  gameState.currentMonth++;
  if (gameState.currentMonth > 12) {
    gameState.currentMonth = 1;
    gameState.currentYear++;
    
    // 檢查新技術解鎖
    gameState.availableTechnologies = getAvailableTechnologies(gameState.currentYear);
  }
  
  // 隨機事件
  if (Math.random() < 0.3) { // 30% 機率發生事件
    triggerRandomEvent();
  }
  
  // 更新顯示
  updateGameDisplay();
  
  // 顯示月度報告
  showNotification(`${gameState.currentYear}年${gameState.currentMonth}月 淨利：${formatCurrency(netProfit)}`, 
    netProfit >= 0 ? 'success' : 'error');
}

// 觸發隨機事件
function triggerRandomEvent() {
  const event = gameData.events[Math.floor(Math.random() * gameData.events.length)];
  gameState.currentEvent = event;
  
  elements.eventTitle.textContent = `${event.type}：${event.name}`;
  elements.eventDescription.textContent = event.description;
  
  elements.eventOptions.innerHTML = '';
  event.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'event-option';
    optionDiv.innerHTML = `
      <div class="option-text">${option.text}</div>
      <div class="option-effect">${option.effect}</div>
      ${option.cost > 0 ? `<div class="option-cost">費用：${formatCurrency(option.cost)}</div>` : ''}
    `;
    
    optionDiv.addEventListener('click', () => handleEventOption(option));
    elements.eventOptions.appendChild(optionDiv);
  });
  
  elements.eventModal.classList.add('active');
}

// 處理事件選項
function handleEventOption(option) {
  if (option.cost > 0 && gameState.funds < option.cost) {
    showNotification('資金不足！', 'error');
    return;
  }
  
  // 扣除費用
  gameState.funds -= option.cost;
  
  // 套用效果（簡化版本）
  if (option.effect.includes('滿意度')) {
    const match = option.effect.match(/滿意度([+-]\d+)%/);
    if (match) {
      const change = parseInt(match[1]);
      gameState.satisfaction = Math.max(0, Math.min(100, gameState.satisfaction + change));
    }
  }
  
  if (option.effect.includes('安全評級')) {
    const match = option.effect.match(/安全評級([+-]\d+)%/);
    if (match) {
      const change = parseInt(match[1]);
      gameState.safety = Math.max(0, Math.min(100, gameState.safety + change));
    }
  }
  
  if (option.effect.includes('環保指數')) {
    const match = option.effect.match(/環保指數([+-]\d+)%/);
    if (match) {
      const change = parseInt(match[1]);
      gameState.environmental = Math.max(0, Math.min(100, gameState.environmental + change));
    }
  }
  
  // 記錄事件
  gameState.eventHistory.push({
    year: gameState.currentYear,
    month: gameState.currentMonth,
    event: gameState.currentEvent.name,
    option: option.text,
    cost: option.cost
  });
  
  elements.eventModal.classList.remove('active');
  updateGameDisplay();
  showNotification(`已選擇：${option.text}`, 'success');
}

// 獲取可用技術
function getAvailableTechnologies(year) {
  return gameData.technologies.filter(tech => tech.startYear <= year);
}

// 顯示存檔對話框
function showSaveGame() {
  loadSaveSlots();
  elements.saveModal.classList.add('active');
}

// 顯示讀取對話框
function showLoadGame() {
  loadSaveSlots();
  elements.saveModal.classList.add('active');
}

// 載入存檔槽位
function loadSaveSlots() {
  elements.saveSlots.innerHTML = '';
  
  for (let i = 1; i <= 5; i++) {
    const saveKey = `railwayGame_save_${i}`;
    const saveData = localStorage.getItem(saveKey);
    
    const slotDiv = document.createElement('div');
    slotDiv.className = 'save-slot';
    
    if (saveData) {
      const data = JSON.parse(saveData);
      slotDiv.classList.add('occupied');
      slotDiv.innerHTML = `
        <div class="save-info">
          <div class="save-date">${data.saveDate}</div>
          <div class="save-details">
            ${data.currentYear}年${data.currentMonth}月 - 
            資金：${formatCurrency(data.funds)} - 
            難度：${data.difficulty}
          </div>
        </div>
        <div class="save-actions">
          <button class="btn btn--sm btn--primary" onclick="loadGame(${i})">載入</button>
          <button class="btn btn--sm btn--secondary" onclick="saveGame(${i})">覆蓋</button>
        </div>
      `;
    } else {
      slotDiv.innerHTML = `
        <div class="save-info">
          <div class="save-date">空槽位 ${i}</div>
          <div class="save-details">點擊保存遊戲進度</div>
        </div>
        <div class="save-actions">
          <button class="btn btn--sm btn--primary" onclick="saveGame(${i})">保存</button>
        </div>
      `;
    }
    
    elements.saveSlots.appendChild(slotDiv);
  }
}

// 保存遊戲
function saveGame(slot) {
  const saveData = {
    ...gameState,
    saveDate: new Date().toLocaleString('zh-TW')
  };
  
  localStorage.setItem(`railwayGame_save_${slot}`, JSON.stringify(saveData));
  showNotification(`遊戲已保存到槽位 ${slot}`, 'success');
  elements.saveModal.classList.remove('active');
}

// 載入遊戲
function loadGame(slot) {
  const saveData = localStorage.getItem(`railwayGame_save_${slot}`);
  if (saveData) {
    const data = JSON.parse(saveData);
    gameState = { ...data };
    delete gameState.saveDate;
    
    if (gameState.currentScreen === 'game') {
      switchToGameScreen();
      updateGameDisplay();
    }
    
    showNotification(`已載入槽位 ${slot} 的遊戲`, 'success');
    elements.saveModal.classList.remove('active');
  }
}

// 格式化貨幣
function formatCurrency(amount) {
  if (amount >= 1000000000000) {
    return (amount / 1000000000000).toFixed(1) + '兆';
  } else if (amount >= 100000000) {
    return (amount / 100000000).toFixed(1) + '億';
  } else if (amount >= 10000) {
    return (amount / 10000).toFixed(1) + '萬';
  } else {
    return amount.toLocaleString();
  }
  return amount.toLocaleString() + '日圓';
}

// 顯示通知
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// 初始化遊戲
document.addEventListener('DOMContentLoaded', initGame);