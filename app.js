// 遊戲資料初始化
const gameData = {
  cities: [
    { id: "tokyo", name: "東京", population: 13960000, x: 350, y: 320, demand: 15000, industry: "政治商業", region: "關東", emoji: "️🏙️", unlocked: true },
    { id: "yokohama", name: "橫濱", population: 3777000, x: 370, y: 340, demand: 8000, industry: "港口工業", region: "關東", emoji: "🌊", unlocked: true },
    { id: "osaka", name: "大阪", population: 2737000, x: 200, y: 380, demand: 7000, industry: "商業金融", region: "關西", emoji: "🏰", unlocked: false },
    { id: "nagoya", name: "名古屋", population: 2327000, x: 280, y: 350, demand: 6000, industry: "汽車工業", region: "中部", emoji: "🏭", unlocked: false },
    { id: "sapporo", name: "札幌", population: 1976000, x: 380, y: 150, demand: 4500, industry: "北海道中心", region: "北海道", emoji: "❄️", unlocked: false },
    { id: "kobe", name: "神戶", population: 1525000, x: 180, y: 390, demand: 3500, industry: "港口貿易", region: "關西", emoji: "⛩️", unlocked: false },
    { id: "kyoto", name: "京都", population: 1475000, x: 220, y: 360, demand: 4000, industry: "觀光文化", region: "關西", emoji: "🎋", unlocked: false },
    { id: "fukuoka", name: "福岡", population: 1612000, x: 120, y: 480, demand: 4000, industry: "九州中心", region: "九州", emoji: "🌸", unlocked: false },
    { id: "kawasaki", name: "川崎", population: 1539000, x: 360, y: 330, demand: 3800, industry: "重工業", region: "關東", emoji: "🏢", unlocked: false },
    { id: "saitama", name: "埼玉", population: 1324000, x: 340, y: 300, demand: 3300, industry: "製造業", region: "關東", emoji: "️🏘️", unlocked: false },
    { id: "hiroshima", name: "廣島", population: 1199000, x: 140, y: 420, demand: 3200, industry: "重工業", region: "中國", emoji: "️🕊️", unlocked: false },
    { id: "sendai", name: "仙台", population: 1096000, x: 380, y: 250, demand: 3000, industry: "東北中心", region: "東北", emoji: "🌲", unlocked: false },
    { id: "chiba", name: "千葉", population: 979000, x: 400, y: 320, demand: 2400, industry: "港口工業", region: "關東", emoji: "️🏖️", unlocked: false },
    { id: "kitakyushu", name: "北九州", population: 937000, x: 130, y: 470, demand: 2300, industry: "製造業", region: "九州", emoji: "🚢", unlocked: false },
    { id: "hamamatsu", name: "濱松", population: 791000, x: 260, y: 360, demand: 2000, industry: "製造業", region: "中部", emoji: "🎸", unlocked: false },
    { id: "niigata", name: "新潟", population: 790000, x: 280, y: 270, demand: 2000, industry: "農業", region: "中部", emoji: "🌾", unlocked: false },
    { id: "kumamoto", name: "熊本", population: 740000, x: 110, y: 500, demand: 1800, industry: "農業", region: "九州", emoji: "🐻", unlocked: false },
    { id: "okayama", name: "岡山", population: 720000, x: 150, y: 405, demand: 1800, industry: "農業", region: "中國", emoji: "🍑", unlocked: false },
    { id: "shizuoka", name: "靜岡", population: 693000, x: 300, y: 340, demand: 1700, industry: "茶業", region: "中部", emoji: "🗻", unlocked: false },
    { id: "kagoshima", name: "鹿兒島", population: 595000, x: 100, y: 530, demand: 1500, industry: "觀光", region: "九州", emoji: "🌋", unlocked: false },
    { id: "kanazawa", name: "金澤", population: 466000, x: 180, y: 310, demand: 1200, industry: "觀光", region: "北陸", emoji: "⚡", unlocked: false },
    { id: "nagasaki", name: "長崎", population: 405000, x: 90, y: 490, demand: 1000, industry: "觀光", region: "九州", emoji: "⛪", unlocked: false }
  ],
  trains: [
    { id: "steam_c57", name: "C57型蒸汽機車", type: "蒸汽", era: 1950, speed: 65, capacity: 400, cost: 50000000, maintenance: 2000000, environmental: 2, unlocked: true },
    { id: "steam_d51", name: "D51型蒸汽機車", type: "蒸汽", era: 1950, speed: 85, capacity: 500, cost: 45000000, maintenance: 1800000, environmental: 2, unlocked: true },
    { id: "steam_c62", name: "C62型蒸汽機車", type: "蒸汽", era: 1950, speed: 95, capacity: 400, cost: 50000000, maintenance: 2000000, environmental: 2, unlocked: true },
    { id: "electric_80", name: "80系電氣列車", type: "電氣", era: 1950, speed: 110, capacity: 800, cost: 80000000, maintenance: 1500000, environmental: 2, unlocked: true },
    { id: "electric_181", name: "181系電聯車", type: "電氣", era: 1960, speed: 120, capacity: 480, cost: 80000000, maintenance: 1500000, environmental: 6, unlocked: false },
    { id: "electric_101", name: "101系電聯車", type: "電氣", era: 1964, speed: 100, capacity: 1000, cost: 150000000, maintenance: 1500000, environmental: 6, unlocked: false },
    { id: "limited_485", name: "485系特急列車", type: "特急", era: 1987, speed: 120, capacity: 600, cost: 200000000, maintenance: 2000000, environmental: 6, unlocked: false },
    { id: "commuter_e231", name: "E231系通勤電車", type: "通勤", era: 2010, speed: 120, capacity: 1200, cost: 180000000, maintenance: 1800000, environmental: 8, unlocked: false },
    { id: "shinkansen_0", name: "0系新幹線", type: "新幹線", era: 1964, speed: 210, capacity: 1300, cost: 300000000, maintenance: 5000000, environmental: 8, unlocked: false },
    { id: "shinkansen_100", name: "100系新幹線", type: "新幹線", era: 1985, speed: 220, capacity: 1323, cost: 400000000, maintenance: 6000000, environmental: 8, unlocked: false },
    { id: "shinkansen_300", name: "300系新幹線", type: "新幹線", era: 1992, speed: 270, capacity: 1330, cost: 500000000, maintenance: 7000000, environmental: 9, unlocked: false },
    { id: "shinkansen_n700", name: "N700系新幹線", type: "新幹線", era: 2007, speed: 320, capacity: 1300, cost: 700000000, maintenance: 8000000, environmental: 9, unlocked: false },
    { id: "shinkansen_e5", name: "E5系新幹線", type: "新幹線", era: 2010, speed: 320, capacity: 731, cost: 500000000, maintenance: 7000000, environmental: 9, unlocked: false },
    { id: "maglev_l0", name: "L0系磁浮列車", type: "磁浮", era: 2027, speed: 505, capacity: 1000, cost: 1000000000, maintenance: 12000000, environmental: 10, unlocked: false }
  ],
  technologies: [
    { id: "steam_tech", name: "蒸汽機關技術", cost: 0, duration: 0, unlocked: true, year: 1950, benefits: "解鎖蒸汽列車" },
    { id: "electric_tech", name: "電氣化技術", cost: 100000000, duration: 12, unlocked: false, year: 1964, benefits: "解鎖電氣化列車，降低維護成本15%" },
    { id: "shinkansen_tech", name: "新幹線技術", cost: 500000000, duration: 24, unlocked: false, year: 1964, benefits: "解鎖高速新幹線列車" },
    { id: "maglev_tech", name: "磁浮技術", cost: 2000000000, duration: 36, unlocked: false, year: 2027, benefits: "解鎖超高速磁浮列車" },
    { id: "safety_system", name: "安全控制系統", cost: 200000000, duration: 18, unlocked: false, year: 2010, benefits: "提升安全評級，降低事故風險" },
    { id: "automation", name: "自動化系統", cost: 300000000, duration: 20, unlocked: false, year: 2010, benefits: "降低營運成本20%" }
  ],
  events: [
    { id: "tokyo_olympics_1964", name: "1964年東京奧運", year: 1964, effect: "客流量增加50%", duration: 6 },
    { id: "osaka_expo_1970", name: "1970年大阪萬博", year: 1970, effect: "大阪地區客流增加100%", duration: 12 },
    { id: "oil_crisis_1973", name: "1973年石油危機", year: 1973, effect: "燃料成本增加200%", duration: 24 },
    { id: "jnr_privatization", name: "1987年國鐵民營化", year: 1987, effect: "政府補助減少，但經營自主權增加", duration: 0 },
    { id: "earthquake_kobe", name: "1995年阪神大地震", year: 1995, effect: "關西路線暫停，重建成本增加", duration: 6 },
    {
      type: "自然災害",
      name: "大地震",
      description: "發生規模7.2地震，部分路線受損，需要緊急應對措施",
      options: [
        { text: "緊急修復", cost: 500000000, effect: "快速恢復營運，滿意度+5%" },
        { text: "全面檢修", cost: 1000000000, effect: "提升安全評級+10%，工期較長" },
        { text: "暫時停運", cost: 0, effect: "收入損失20%，但確保安全" }
      ]
    },
    {
      type: "政策變化",
      name: "政府補助",
      description: "政府宣布基礎建設補助計劃，可申請相關支援",
      options: [
        { text: "申請新線補助", cost: 0, effect: "下次建設成本減少30%" },
        { text: "申請技術研發補助", cost: 0, effect: "下次技術升級成本減少50%" }
      ]
    },
    {
      type: "經濟變化",
      name: "觀光熱潮",
      description: "日本觀光業蓬勃發展，旅客需求大幅增加",
      options: [
        { text: "增加班次", cost: 100000000, effect: "收入增加25%，滿意度+10%" },
        { text: "維持現狀", cost: 0, effect: "收入增加10%" }
      ]
    },
    {
      type: "技術發展",
      name: "新能源技術",
      description: "研發出新型環保列車技術，可大幅提升環保指數",
      options: [
        { text: "投資研發", cost: 300000000, effect: "環保指數+15%，長期營運成本降低" },
        { text: "繼續觀望", cost: 0, effect: "維持現狀" }
      ]
    }
  ],
  difficulties: [
    { name: "初心者", funds: 1500000000000, revenueBonus: 1.2, description: "起始資金1.5兆日圓，營收加成20%，事件頻率低" },
    { name: "標準", funds: 1000000000000, revenueBonus: 1.0, description: "起始資金1兆日圓，正常營收，標準事件頻率" },
    { name: "上級者", funds: 750000000000, revenueBonus: 0.9, description: "起始資金0.75兆日圓，維護成本較高，營收減少10%" },
    { name: "專家", funds: 500000000000, revenueBonus: 0.8, description: "起始資金0.5兆日圓，高事件頻率，維護成本增加50%" }
  ]
};

// 遊戲狀態初始化
let gameState = {
  currentScreen: "mainMenu",
  difficulty: "初心者",
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
  cities: [],
  trains: [],
  ownedTrains: [],
  researchProgress: {},
  activeEvents: [],
  monthlyRevenue: 0,
  monthlyExpenses: 0,
  financialHistory: [],
  eventHistory: [],
  currentEvent: null,
  availableTechnologies: [],
  revenueBonus: 1.0,
  revenueModifier: 1.0,
  costModifier: 1.0,
  nextBuildDiscount: 0,
  nextResearchDiscount: 0
};

// DOM 元素快取
const elements = {
  mainMenu: document.getElementById("mainMenu"),
  gameScreen: document.getElementById("gameScreen"),
  newGameBtn: document.getElementById("newGameBtn"),
  loadGameBtn: document.getElementById("loadGameBtn"),
  yearSlider: document.getElementById("yearSlider"),
  selectedYear: document.getElementById("selectedYear"),
  presetYears: document.querySelectorAll(".preset-year"),
  currentDate: document.getElementById("currentDate"),
  currentFunds: document.getElementById("currentFunds"),
  totalMileage: document.getElementById("totalMileage"),
  trainCount: document.getElementById("trainCount"),
  employeeCount: document.getElementById("employeeCount"),
  networkMap: document.getElementById("networkMap"),
  satisfactionBar: document.getElementById("satisfactionBar"),
  satisfactionValue: document.getElementById("satisfactionValue"),
  safetyBar: document.getElementById("safetyBar"),
  safetyValue: document.getElementById("safetyValue"),
  ecoBar: document.getElementById("ecoBar"),
  ecoValue: document.getElementById("ecoValue"),
  nextMonthBtn: document.getElementById("nextMonthBtn"),
  saveGameBtn: document.getElementById("saveGameBtn"),
  backToMenuBtn: document.getElementById("backToMenuBtn"),
  actionTitle: document.getElementById("actionTitle"),
  actionContent: document.getElementById("actionContent"),
  eventModal: document.getElementById("eventModal"),
  eventTitle: document.getElementById("eventTitle"),
  eventDescription: document.getElementById("eventDescription"),
  eventOptions: document.getElementById("eventOptions"),
  saveModal: document.getElementById("saveModal"),
  saveSlots: document.getElementById("saveSlots"),
  closeSaveModal: document.getElementById("closeSaveModal"),
  researchBtn: document.getElementById("researchBtn")
};

// 遊戲初始化函式
function initGame() {
  setupEventListeners();
  updateYearDisplay();
  generateNetworkMap();
  loadSaveSlots();
}

// 綁定事件監聽
function setupEventListeners() {
  // 主選單按鈕
  elements.newGameBtn.addEventListener("click", startNewGame);
  elements.loadGameBtn.addEventListener("click", showLoadGame);

  // FIXME: 1. 實作存檔/讀檔功能
  function saveGame() {
    // FIXME: 實際存檔邏輯
    localStorage.setItem("jrsim_save", JSON.stringify(gameState));
    showNotification("遊戲已保存", "success");
  }
  function loadGame() {
    // FIXME: 實際讀檔邏輯
    const saveData = localStorage.getItem("jrsim_save");
    if (!saveData) {
      showNotification("沒有可讀取的存檔", "error");
      return;
    }
    gameState = JSON.parse(saveData);
    switchToGameScreen();
    updateGameDisplay();
    showNotification("遊戲已載入", "success");
  }
  function showSaveGame() {
    // FIXME: 可設計多檔存檔選擇UI，目前先直接存
    saveGame();
  }
  function showLoadGame() {
    // FIXME: 可設計多檔讀檔選擇UI，目前先直接載入
    loadGame();
  }

  // 年份選擇
  elements.yearSlider.addEventListener("input", updateYearDisplay);
  elements.presetYears.forEach(btn => {
    btn.addEventListener("click", e => {
      const year = parseInt(e.target.dataset.year);
      elements.yearSlider.value = year;
      updateYearDisplay();
    });
  });

  // 遊戲操作控制
  elements.nextMonthBtn.addEventListener("click", nextMonth);
  elements.saveGameBtn.addEventListener("click", showSaveGame);
  elements.backToMenuBtn.addEventListener("click", backToMenu);

  // 操作選單按鈕
  document.getElementById("settingsBtn").addEventListener("click", function () {
    showNotification("設定功能尚未實作", "info");
  });
  document.getElementById("buildRouteBtn").addEventListener("click", () =>
    showAction("buildRoute")
  );
  document.getElementById("buyTrainBtn").addEventListener("click", () =>
    showAction("buyTrain")
  );
  document.getElementById("strategyBtn").addEventListener("click", () =>
    showAction("strategy")
  );
  document.getElementById("financeBtn").addEventListener("click", () =>
    showAction("finance")
  );
  const researchButton = document.getElementById("researchBtn");
  if (researchButton) {
    researchButton.addEventListener("click", () => showAction("research"));
  }

  // 關閉存檔 Modal
  elements.closeSaveModal.addEventListener("click", () => {
    elements.saveModal.classList.remove("active");
  });
  // 點擊 Modal 外部關閉事件/存檔視窗
  elements.eventModal.addEventListener("click", e => {
    if (e.target === elements.eventModal) {
      elements.eventModal.classList.remove("active");
    }
  });
  elements.saveModal.addEventListener("click", e => {
    if (e.target === elements.saveModal) {
      elements.saveModal.classList.remove("active");
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
  const selectedDifficulty = document.querySelector("input[name='difficulty']:checked").value;
  const selectedYear = parseInt(elements.yearSlider.value);
  const difficultyData = gameData.difficulties.find(d => d.name === selectedDifficulty);
  // 初始化遊戲狀態
  gameState = {
    currentScreen: "game",
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
    cities: JSON.parse(JSON.stringify(gameData.cities)),
    trains: JSON.parse(JSON.stringify(gameData.trains)),
    ownedTrains: [],
    researchProgress: {},
    activeEvents: [],
    monthlyRevenue: 0,
    monthlyExpenses: 0,
    financialHistory: [],
    eventHistory: [],
    currentEvent: null,
    availableTechnologies: [],
    revenueBonus: difficultyData.revenueBonus,
    revenueModifier: 1.0,
    costModifier: 1.0,
    nextBuildDiscount: 0,
    nextResearchDiscount: 0
  };
  // 根據起始年份解鎖初始城市
  gameState.cities.forEach(city => {
    if (city.id === "tokyo" || city.id === "yokohama") {
      city.unlocked = true;
    } else if (selectedYear >= 1964 && (city.id === "nagoya" || city.id === "osaka")) {
      city.unlocked = true;
    }
  });
  // 解鎖當前年份之前可用的列車
  gameState.trains.forEach(train => {
    if (train.era <= gameState.currentYear) {
      train.unlocked = true;
    }
  });
  // 初始化技術並解鎖當前年份之前的技術
  gameState.technologies = JSON.parse(JSON.stringify(gameData.technologies));
  gameState.technologies.forEach(tech => {
    if (gameState.currentYear >= tech.year) {
      tech.unlocked = true;
    }
  });
  // 套用初始已解鎖技術的效果
  gameState.technologies.forEach(tech => {
    if (tech.unlocked) {
      unlockTechnologyEffects(tech);
    }
  });
  // 根據難度調整成本係數
  if (selectedDifficulty === "上級者") {
    gameState.costModifier = 1.1;
  }
  if (selectedDifficulty === "專家") {
    gameState.costModifier = 1.5;
  }
  // 切換至遊戲主畫面
  switchToGameScreen();
  updateGameDisplay();
  showNotification("遊戲開始！歡迎來到日本鐵道經營世界", "success");
}

// 切換至遊戲畫面
function switchToGameScreen() {
  elements.mainMenu.classList.remove("active");
  elements.gameScreen.classList.add("active");
  gameState.currentScreen = "game";
}

// 返回主選單
function backToMenu() {
  elements.gameScreen.classList.remove("active");
  elements.mainMenu.classList.add("active");
  gameState.currentScreen = "mainMenu";
}

// 更新遊戲畫面上各項數據
function updateGameDisplay() {
  elements.currentDate.textContent = `${gameState.currentYear}年${gameState.currentMonth}月`;
  elements.currentFunds.textContent = formatCurrency(gameState.funds);
  elements.totalMileage.textContent = `${gameState.totalMileage}公里`;
  elements.trainCount.textContent = `${gameState.trainCount}輛`;
  elements.employeeCount.textContent = `${gameState.employeeCount}人`;
  updateStatusBar("satisfaction", gameState.satisfaction);
  updateStatusBar("safety", gameState.safety);
  updateStatusBar("eco", gameState.environmental);
}

// 更新單一狀態指標的顯示
function updateStatusBar(type, value) {
  const bar = elements[`${type}Bar`];
  const val = elements[`${type}Value`];
  if (bar && val) {
    bar.style.width = value + "%";
    val.textContent = value + "%";
  }
}

// 建立鐵路網絡圖節點
function generateNetworkMap() {
  elements.networkMap.innerHTML = "";
  gameData.cities.forEach(city => {
    const cityNode = document.createElement("div");
    cityNode.className = "city-node";
    cityNode.dataset.cityName = city.name;
    if (gameState.connectedCities.includes(city.name)) {
      cityNode.classList.add("connected");
    }
    cityNode.innerHTML = `
      <div class="city-emoji">${city.emoji || ""}</div>
      <div class="city-name">${city.name}</div>
    `;
    elements.networkMap.appendChild(cityNode);
  });
}

// 更新鐵路網絡圖（標記已連接的城市）
function updateNetworkMap() {
  const cityNodes = document.querySelectorAll(".city-node");
  cityNodes.forEach(node => {
    const cityName = node.dataset.cityName;
    if (gameState.connectedCities.includes(cityName)) {
      node.classList.add("connected");
    } else {
      node.classList.remove("connected");
    }
  });
}

// 顯示不同的操作面板
function showAction(actionType) {
  const actionTitle = elements.actionTitle;
  const actionContent = elements.actionContent;
  switch (actionType) {
    case "buildRoute":
      actionTitle.textContent = "建設新路線";
      actionContent.innerHTML = createRouteBuilder();
      break;
    case "buyTrain":
      actionTitle.textContent = "購買/升級列車";
      actionContent.innerHTML = createTrainShop();
      break;
    case "strategy":
      actionTitle.textContent = "⚙️ 調整營運策略";
      actionContent.innerHTML = createStrategyPanel();
      break;
    case "finance":
      actionTitle.textContent = "財務報表";
      actionContent.innerHTML = createFinanceReport();
      break;
    case "research":
      actionTitle.textContent = "技術研發";
      actionContent.innerHTML = createTechPanel();
      break;
  }
}

// 建立新路線建設面板 HTML
function createRouteBuilder() {
  const unconnectedCities = gameData.cities.filter(city => !gameState.connectedCities.includes(city.name));
  const connectedCities = gameData.cities.filter(city => gameState.connectedCities.includes(city.name));
  let html = `
    <div class="city-selector">
      <label class="form-label">起點城市</label>
      <select id="startCity" class="form-control">
        <option value="">請選擇起點</option>
        ${
          connectedCities.length === 0
            ? `<option value="東京" selected>東京 ️</option>`
            : connectedCities.map(city => `<option value="${city.name}">${city.name} ${city.emoji || ""}</option>`).join("")
        }
      </select>
    </div>
    <div class="city-selector">
      <label class="form-label">終點城市</label>
      <select id="endCity" class="form-control">
        <option value="">請選擇終點</option>
        ${unconnectedCities.map(city => `<option value="${city.name}">${city.name} ${city.emoji || ""}</option>`).join("")}
      </select>
    </div>
    <div id="routeInfo" class="route-info" style="display:none; margin-top: 8px;">
      <h4>路線資訊</h4>
      <p>建設費用：<span id="buildCost">0</span> 日圓</p>
      <p>預計工期：<span id="buildTime">0</span> 個月</p>
      <p>預估距離：<span id="routeDistance">0</span> 公里</p>
      <button id="buildRouteConfirm" class="btn btn--primary" disabled>開始建設</button>
    </div>
  `;
  // 綁定事件 - 城市下拉選單變化時更新路線資訊
  setTimeout(() => {
    const startSelect = document.getElementById("startCity");
    const endSelect = document.getElementById("endCity");
    const routeInfo = document.getElementById("routeInfo");
    const buildBtn = document.getElementById("buildRouteConfirm");
    function updateRouteInfo() {
      const start = startSelect.value;
      const end = endSelect.value;
      if (start && end && start !== end) {
        const startCity = gameData.cities.find(c => c.name === start);
        const endCity = gameData.cities.find(c => c.name === end);
        const distance = Math.floor(Math.random() * 300) + 100; // 100-400 km
        let cost = distance * 2000000; // 2,000,000 JPY per km
        // FIXME: 顯示折扣後價格
        if (gameState.nextBuildDiscount > 0) {
          cost = cost * (1 - gameState.nextBuildDiscount);
        }
        const time = Math.ceil(distance / 50); // 1 month per 50 km
        document.getElementById("buildCost").textContent = formatCurrency(cost);
        document.getElementById("buildTime").textContent = time;
        document.getElementById("routeDistance").textContent = distance;
        routeInfo.style.display = "block";
        buildBtn.disabled = gameState.funds < cost;
        buildBtn.onclick = () => buildRoute(start, end, cost, time, distance);
      } else {
        routeInfo.style.display = "none";
        buildBtn.disabled = true;
      }
    }
    startSelect.addEventListener("change", updateRouteInfo);
    endSelect.addEventListener("change", updateRouteInfo);
  }, 100);
  return html;
}

// 建立新路線（更新遊戲狀態）
function buildRoute(start, end, cost, time, distance) {
  if (gameState.funds < cost) {
    showNotification("資金不足！", "error");
    return;
  }
  gameState.funds -= cost;
  // 重置下一次建設折扣
  gameState.nextBuildDiscount = 0;
  gameState.totalMileage += distance;
  // 將起終點城市標記為已連接
  if (!gameState.connectedCities.includes(start)) {
    gameState.connectedCities.push(start);
  }
  if (!gameState.connectedCities.includes(end)) {
    gameState.connectedCities.push(end);
  }
  // 記錄已建成的路線
  gameState.routes.push({ start: start, end: end, distance: distance, cost: cost, buildTime: time, completed: true });
  updateGameDisplay();
  updateNetworkMap();
  showNotification(`成功建設 ${start} - ${end} 路線！`, "success");
  // 刷新建設面板以建設下一條路線
  showAction("buildRoute");
}

// 建立列車商店面板 HTML
function createTrainShop() {
  const availableTrains = gameState.trains.filter(t => t.unlocked);
  let html = `<h4>可購買列車</h4>`;
  availableTrains.forEach(train => {
    const canAfford = gameState.funds >= train.cost;
    html += `
      <div class="train-card">
        <div class="train-name">${train.name}</div>
        <div class="train-specs">
          <div class="spec-item"><span class="spec-label">最高速度</span><span class="spec-value">${train.speed}km/h</span></div>
          <div class="spec-item"><span class="spec-label">載客量</span><span class="spec-value">${train.capacity}人</span></div>
          <div class="spec-item"><span class="spec-label">環保指數</span><span class="spec-value">${train.environmental}/10</span></div>
          <div class="spec-item"><span class="spec-label">價格</span><span class="spec-value">${formatCurrency(train.cost)}</span></div>
        </div>
        <button class="btn btn--sm btn--primary" ${canAfford ? `onclick="buyTrain('${train.id}')"` : "disabled"}>
          ${canAfford ? "購買列車" : "資金不足"}
        </button>
      </div>
    `;
  });
  return html;
}

// 購買列車（更新遊戲狀態）
function buyTrain(trainId) {
  const train = gameState.trains.find(t => t.id === trainId);
  if (!train || !train.unlocked || gameState.funds < train.cost) {
    showNotification("無法購買此列車", "error");
    return;
  }
  gameState.funds -= train.cost;
  gameState.trainCount += 1;
  gameState.ownedTrains.push({ trainId: trainId, route: null, monthlyRevenue: 0 });
  // 購買列車提升環保指數（示意效果）
  gameState.environmental = Math.min(100, gameState.environmental + 2);
  updateGameDisplay();
  showNotification(`成功購買 ${train.name}！`, "success");
  // 刷新列車商店
  showAction("buyTrain");
}

// 建立營運策略面板 HTML
function createStrategyPanel() {
  return `
    <h4>票價策略</h4>
    <select id="priceStrategy" class="form-control">
      <option value="low">低價策略 (收入-10%, 滿意度+5%)</option>
      <option value="normal" selected>標準定價</option>
      <option value="high">高價策略 (收入+15%, 滿意度-5%)</option>
    </select>
    <h4>服務密度</h4>
    <select id="serviceFrequency" class="form-control">
      <option value="low">低密度 (成本-20%, 滿意度-10%)</option>
      <option value="normal" selected>標準密度</option>
      <option value="high">高密度 (成本+25%, 滿意度+10%)</option>
    </select>
    <h4>維護標準</h4>
    <select id="maintenanceLevel" class="form-control">
      <option value="basic">基本維護 (成本-15%, 安全度-5%)</option>
      <option value="normal" selected>標準維護</option>
      <option value="premium">高標準維護 (成本+20%, 安全度+10%)</option>
    </select>
    <button class="btn btn--primary btn--lg" onclick="applyStrategy()">套用策略</button>
  `;
}

// 套用營運策略設定
function applyStrategy() {
  const priceStrategy = document.getElementById("priceStrategy").value;
  const serviceFrequency = document.getElementById("serviceFrequency").value;
  const maintenanceLevel = document.getElementById("maintenanceLevel").value;
  // 重置修正係數
  gameState.revenueModifier = 1;
  gameState.costModifier = 1;
  let satisfactionChange = 0;
  let safetyChange = 0;
  // 票價策略
  switch (priceStrategy) {
    case "low":
      gameState.revenueModifier *= 0.9;
      satisfactionChange += 5;
      break;
    case "high":
      gameState.revenueModifier *= 1.15;
      satisfactionChange -= 5;
      break;
  }
  // 班次密度
  switch (serviceFrequency) {
    case "low":
      gameState.costModifier *= 0.8;
      satisfactionChange -= 10;
      break;
    case "high":
      gameState.costModifier *= 1.25;
      satisfactionChange += 10;
      break;
  }
  // 維護水準
  switch (maintenanceLevel) {
    case "basic":
      gameState.costModifier *= 0.85;
      safetyChange -= 5;
      break;
    case "premium":
      gameState.costModifier *= 1.2;
      safetyChange += 10;
      break;
  }
  // 更新滿意度與安全度
  gameState.satisfaction = Math.max(0, Math.min(100, Math.round(gameState.satisfaction + satisfactionChange)));
  gameState.safety = Math.max(0, Math.min(100, Math.round(gameState.safety + safetyChange)));
  updateGameDisplay();
  showNotification("營運策略已更新！", "success");
  // FIXME: 操作面板應即時更新
  showAction("strategy");
}

// 建立財務報表面板 HTML
function createFinanceReport() {
  const history = gameState.financialHistory.slice(-12);
  let html = `<h4>本月財務狀況</h4>`;
  html += `<p>收入：${formatCurrency(gameState.monthlyRevenue)}</p>`;
  html += `<p>支出：${formatCurrency(gameState.monthlyExpenses)}</p>`;
  const netProfit = gameState.monthlyRevenue - gameState.monthlyExpenses;
  html += `<p>淨利：${formatCurrency(netProfit)}</p>`;
  html += `<h4>最近12個月</h4><ul>`;
  history.forEach(record => {
    html += `<li>${record.year}年${record.month}月 - 收入: ${formatCurrency(record.revenue)}, 支出: ${formatCurrency(record.expenses)}</li>`;
  });
  html += `</ul>`;
  return html;
}

// 建立技術研發面板 HTML
function createTechPanel() {
  let html = `<h4>技術研發</h4>`;
  gameState.technologies.forEach(tech => {
    const progress = gameState.researchProgress[tech.id] || 0;
    const isResearching = progress > 0 && progress < 100;
    const canResearch = !tech.unlocked && !isResearching && gameState.funds >= tech.cost;
    html += `<div class="card tech-card" style="margin-bottom: 12px; padding: 12px;">`;
    html += `<h5>${tech.name}</h5>`;
    html += `<p>成本: ¥${tech.cost.toLocaleString()}</p>`;
    html += `<p>時間: ${tech.duration}個月</p>`;
    html += `<p>效果: ${tech.benefits}</p>`;
    if (isResearching) {
      html += `<p>研發進度: ${Math.round(progress)}%</p>`;
    }
    html += `<div>`;
    if (tech.unlocked) {
      html += `<span class="status status--success">已完成</span>`;
    } else if (isResearching) {
      html += `<span class="status status--info">研發中... ${Math.round(progress)}%</span>`;
    } else if (canResearch) {
      html += `<button class="btn btn--primary btn--sm" onclick="startResearch('${tech.id}')">開始研發</button>`;
    } else {
      html += `<span class="status status--warning">條件不足</span>`;
    }
    html += `</div></div>`;
  });
  return html;
}

// 每月更新技術研發進度
function updateResearchProgress() {
  Object.keys(gameState.researchProgress).forEach(techId => {
    const tech = gameState.technologies.find(t => t.id === techId);
    if (tech && !tech.unlocked) {
      let progress = gameState.researchProgress[techId];
      progress += 100 / tech.duration;
      if (progress >= 100) {
        progress = 100;
        tech.unlocked = true;
        unlockTechnologyEffects(tech);
        showNotification(`技術研發完成：${tech.name}`, "success");
      }
      gameState.researchProgress[techId] = progress;
    }
  });
}
// **備註**: 在 nextMonth() 中會調用 updateResearchProgress()

// 進入下個月模擬循環
function nextMonth() {
  if (gameState.funds <= 0) {
    showNotification("遊戲結束：資金耗盡！", "error");
    // 可以在此加入返回主選單或鎖定操作的處理
  }
  // 時間推進一個月
  gameState.currentMonth++;
  if (gameState.currentMonth > 12) {
    gameState.currentMonth = 1;
    gameState.currentYear++;
    // 自動解鎖當年技術
    gameState.technologies.forEach(tech => {
      if (!tech.unlocked && gameState.currentYear >= tech.year) {
        tech.unlocked = true;
        unlockTechnologyEffects(tech);
        showNotification(`技術研發完成：${tech.name}`, "success");
      }
    });
  }
  // 研發進度推進
  updateResearchProgress();
  // 每月收入與支出計算
  let totalRevenue = 0;
  let totalCost = 0;
  // 計算各路線收入 (粗略模型)
  gameState.routes.forEach(route => {
    const fromCity = gameState.cities.find(c => c.name === route.start);
    const toCity = gameState.cities.find(c => c.name === route.end);
    if (fromCity && toCity) {
      let routeRevenue = ((fromCity.population + toCity.population) / 1000) * route.distance * 0.05;
      // 若大阪萬博事件發生，包含大阪的路線收入加倍
      if (gameState.activeEvents.some(e => e.id === "osaka_expo_1970") && (route.start.includes("大阪") || route.end.includes("大阪"))) {
        routeRevenue *= 2;
      }
      totalRevenue += routeRevenue;
    }
  });
  // 滿意度對收入的影響
  totalRevenue *= (1 + (gameState.satisfaction - 50) / 100);
  // 全域收入與策略修正
  totalRevenue *= gameState.revenueBonus * gameState.revenueModifier;
  // 列車營運收入（此處簡化處理，假設已包含在路線收入中）
  // 計算每月固定成本
  gameState.ownedTrains.forEach(ownedTrain => {
    const trainType = gameState.trains.find(t => t.id === ownedTrain.trainId);
    if (trainType) {
      totalCost += trainType.maintenance;
    }
  });
  // 員工薪資成本
  totalCost += gameState.employeeCount * 500000;
  // 策略成本修正
  totalCost *= gameState.costModifier;
  // 活動事件影響 （減少剩餘持續時間）
  gameState.activeEvents.forEach(event => {
    event.remainingDuration--;
  });
  // 移除已結束的事件
  gameState.activeEvents = gameState.activeEvents.filter(event => event.remainingDuration > 0);
  // 作用於當月的事件效果
  gameState.activeEvents.forEach(event => {
    if (event.id === "tokyo_olympics_1964") {
      totalRevenue *= 1.5;
    } else if (event.id === "oil_crisis_1973") {
      totalCost *= 3;
    }
  });
  // 計算損益並更新資金
  gameState.monthlyRevenue = Math.floor(totalRevenue);
  gameState.monthlyExpenses = Math.floor(totalCost);
  gameState.funds += gameState.monthlyRevenue - gameState.monthlyExpenses;
  if (gameState.funds < 0) {
    gameState.funds = 0;
    showNotification("資金不足！請注意財務狀況", "warning");
  }
  // 記錄財務歷史
  gameState.financialHistory.push({
    year: gameState.currentYear,
    month: gameState.currentMonth,
    revenue: gameState.monthlyRevenue,
    expenses: gameState.monthlyExpenses
  });
  if (gameState.financialHistory.length > 60) {
    gameState.financialHistory.shift();
  }
  // 檢查時間線上的歷史事件
  gameData.events.forEach(event => {
    if (event.year && event.year === gameState.currentYear && (!event.month || event.month === gameState.currentMonth) && !event.options) {
      if (event.duration && event.duration > 0) {
        if (!gameState.activeEvents.some(e => e.id === event.id)) {
          gameState.activeEvents.push({ ...event, remainingDuration: event.duration });
          showNotification(`歷史事件：${event.name}`, "warning");
        }
      } else {
        // 即時發生的一次性事件效果
        if (event.id === "jnr_privatization") {
          gameState.revenueBonus *= 1.2;
          showNotification(`歷史事件：${event.name}`, "warning");
        }
      }
    }
  });
  // 依難度觸發隨機事件的機率
  let eventChance = 0.3;
  if (gameState.difficulty === "初心者") eventChance = 0.2;
  if (gameState.difficulty === "專家") eventChance = 0.5;
  if (Math.random() < eventChance) {
    triggerRandomEvent();
  }
  // 更新介面數據
  updateGameDisplay();
  // 當月損益提示
  const netProfit = gameState.monthlyRevenue - gameState.monthlyExpenses;
  showNotification(`${gameState.currentYear}年${gameState.currentMonth}月 淨利：${formatCurrency(netProfit)}`, netProfit >= 0 ? "success" : "error");
}

// 觸發隨機事件
function triggerRandomEvent() {
  const randomEvents = gameData.events.filter(e => e.options && !e.year);
  if (randomEvents.length === 0) return;
  const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
  gameState.currentEvent = event;
  elements.eventTitle.textContent = `${event.type}：${event.name}`;
  elements.eventDescription.textContent = event.description;
  elements.eventOptions.innerHTML = "";
  event.options.forEach(option => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "event-option";
    optionDiv.innerHTML = `
      <div class="option-text">${option.text}</div>
      <div class="option-effect">${option.effect}</div>
      ${option.cost > 0 ? `<div class="option-cost">費用：${formatCurrency(option.cost)}</div>` : ""}
    `;
    optionDiv.addEventListener("click", () => handleEventOption(option));
    elements.eventOptions.appendChild(optionDiv);
  });
  elements.eventModal.classList.add("active");
}

// 處理隨機事件選項
function handleEventOption(option) {
  if (option.cost > 0 && gameState.funds < option.cost) {
    showNotification("資金不足！", "error");
    return;
  }
  // 扣除花費
  gameState.funds -= option.cost;
  // 應用效果
  if (option.effect.includes("滿意度")) {
    const match = option.effect.match(/滿意度([+-]\d+)%/);
    if (match) {
      const change = parseInt(match[1]);
      gameState.satisfaction = Math.max(0, Math.min(100, gameState.satisfaction + change));
    }
  }
  if (option.effect.includes("安全評級")) {
    const match = option.effect.match(/安全評級([+-]\d+)%/);
    if (match) {
      const change = parseInt(match[1]);
      gameState.safety = Math.max(0, Math.min(100, gameState.safety + change));
    }
  }
  if (option.effect.includes("環保指數")) {
    const match = option.effect.match(/環保指數([+-]\d+)%/);
    if (match) {
      const change = parseInt(match[1]);
      gameState.environmental = Math.max(0, Math.min(100, gameState.environmental + change));
    }
  }
  if (option.effect.includes("收入增加")) {
    const match = option.effect.match(/收入增加(\d+)%/);
    if (match) {
      const inc = parseInt(match[1]);
      gameState.revenueBonus *= 1 + inc / 100;
    }
  }
  if (option.effect.includes("收入損失")) {
    const match = option.effect.match(/收入損失(\d+)%/);
    if (match) {
      const dec = parseInt(match[1]);
      gameState.revenueBonus *= 1 - dec / 100;
    }
  }
  if (option.effect.includes("建設成本減少")) {
    const match = option.effect.match(/建設成本減少(\d+)%/);
    if (match) {
      const perc = parseInt(match[1]);
      gameState.nextBuildDiscount = perc / 100;
    }
  }
  if (option.effect.includes("技術升級成本減少")) {
    const match = option.effect.match(/技術升級成本減少(\d+)%/);
    if (match) {
      const perc = parseInt(match[1]);
      gameState.nextResearchDiscount = perc / 100;
    }
  }
  if (option.effect.includes("長期營運成本降低")) {
    gameState.costModifier *= 0.9;
  }
  // 記錄事件選項
  gameState.eventHistory.push({
    year: gameState.currentYear,
    month: gameState.currentMonth,
    event: gameState.currentEvent.name,
    option: option.text,
    cost: option.cost
  });
  elements.eventModal.classList.remove("active");
  updateGameDisplay();
  showNotification(`已選擇：${option.text}`, "success");
}

// 開始研發技術
function startResearch(techId) {
  const tech = gameState.technologies.find(t => t.id === techId);
  if (!tech || tech.unlocked || gameState.funds < tech.cost * (1 - gameState.nextResearchDiscount)) {
    showNotification("無法開始研發", "error");
    return;
  }
  const actualCost = tech.cost * (1 - gameState.nextResearchDiscount);
  gameState.funds -= actualCost;
  gameState.nextResearchDiscount = 0;
  gameState.researchProgress[techId] = 0;
  updateGameDisplay();
  showNotification(`開始研發：${tech.name}`, "success");
  // 刷新技術面板
  showAction("research");
}

// 解鎖技術的效果
function unlockTechnologyEffects(tech) {
  switch (tech.id) {
    case "electric_tech":
      // 解鎖電氣列車相關類型
      gameState.trains.forEach(train => {
        if (train.type === "電氣" || train.type === "特急" || train.type === "通勤") {
          train.unlocked = true;
        }
      });
      // 降低維護成本
      gameState.costModifier *= 0.85;
      break;
    case "shinkansen_tech":
      // 解鎖當前年份起5年內的所有新幹線列車
      gameState.trains.forEach(train => {
        if (train.type === "新幹線" && train.era <= gameState.currentYear + 5) {
          train.unlocked = true;
        }
      });
      break;
    case "maglev_tech":
      // 解鎖磁浮列車
      gameState.trains.forEach(train => {
        if (train.type === "磁浮") {
          train.unlocked = true;
        }
      });
      break;
    case "safety_system":
      // 安全評級提升
      gameState.safety = Math.min(100, gameState.safety + 10);
      break;
    case "automation":
      // 營運成本降低
      gameState.costModifier *= 0.8;
      break;
  }
  // (可選)刷新相關UI
  updateGameDisplay();
}

// 顯示通知訊息
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// 格式化貨幣數字
function formatCurrency(amount) {
  if (amount >= 1000000000000) {
    return (amount / 1000000000000).toFixed(1) + "兆";
  } else if (amount >= 100000000) {
    return (amount / 100000000).toFixed(1) + "億";
  } else if (amount >= 10000) {
    return (amount / 10000).toFixed(1) + "萬";
  } else {
    return amount.toLocaleString();
  }
}

// 將部分函式設為全域可調用（供 HTML inline onclick）
window.buyTrain = buyTrain;
window.buildRoute = buildRoute;
window.startResearch = startResearch;
window.saveGame = null;       // 如果需要，可將 saveGame 曝露
window.loadGame = null;       // 同上（暫不提供多存檔UI）
window.showSaveGame = null;   // 同上
window.showLoadGame = null;   // 同上
window.assignTrainToRoute = () => {};
window.upgradeStation = () => {};

// 等待 DOM 完全載入後初始化遊戲
document.addEventListener("DOMContentLoaded", initGame);
