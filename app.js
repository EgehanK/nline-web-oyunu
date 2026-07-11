// ==========================================================================
// GENSHIN IMPACT GUESS WHO - PEER-TO-PEER CLIENT LOGIC (PEERJS)
// ==========================================================================

// Complete 48 Playable 5-Star Characters Database
const characters = [
 // --- Mondstadt ---
  { id: "albedo",       name: "Albedo",              element: "Geo",     weapon: "Kılıç",           region: "Mondstadt",  gender: "Erkek", img: "Albedo" },
  { id: "diluc",        name: "Diluc",               element: "Pyro",    weapon: "Çift Elli Kılıç", region: "Mondstadt",  gender: "Erkek", img: "Diluc" },
  { id: "eula",         name: "Eula",                element: "Cryo",    weapon: "Çift Elli Kılıç", region: "Mondstadt",  gender: "Kadın", img: "Eula" },
  { id: "jean",         name: "Jean",                element: "Anemo",   weapon: "Kılıç",           region: "Mondstadt",  gender: "Kadın", img: "Qin" },
  { id: "klee",         name: "Klee",                element: "Pyro",    weapon: "Katalizör",       region: "Mondstadt",  gender: "Kadın", img: "Klee" },
  { id: "mona",         name: "Mona",                element: "Hydro",   weapon: "Katalizör",       region: "Mondstadt",  gender: "Kadın", img: "Mona" },
  { id: "varka",        name: "Varka",               element: "Anemo",   weapon: "Çift Elli Kılıç", region: "Mondstadt",  gender: "Erkek", img: "Varka" },
  { id: "venti",        name: "Venti",               element: "Anemo",   weapon: "Yay",             region: "Mondstadt",  gender: "Erkek", img: "Venti" },

  // --- Liyue ---
  { id: "baizhu",       name: "Baizhu",              element: "Dendro",  weapon: "Katalizör",       region: "Liyue",      gender: "Erkek", img: "Baizhuer" },
  { id: "ganyu",        name: "Ganyu",               element: "Cryo",    weapon: "Yay",             region: "Liyue",      gender: "Kadın", img: "Ganyu" },
  { id: "hutao",        name: "Hu Tao",              element: "Pyro",    weapon: "Mızrak",          region: "Liyue",      gender: "Kadın", img: "Hutao" },
  { id: "keqing",       name: "Keqing",              element: "Electro", weapon: "Kılıç",           region: "Liyue",      gender: "Kadın", img: "Keqing" },
  { id: "qiqi",         name: "Qiqi",                element: "Cryo",    weapon: "Kılıç",           region: "Liyue",      gender: "Kadın", img: "Qiqi" },
  { id: "shenhe",       name: "Shenhe",              element: "Cryo",    weapon: "Mızrak",          region: "Liyue",      gender: "Kadın", img: "Shenhe" },
  { id: "xianyun",      name: "Xianyun",             element: "Anemo",   weapon: "Katalizör",       region: "Liyue",      gender: "Kadın", img: "Liuyun" },
  { id: "xiao",         name: "Xiao",                element: "Anemo",   weapon: "Mızrak",          region: "Liyue",      gender: "Erkek", img: "Xiao" },
  { id: "yelan",        name: "Yelan",               element: "Hydro",   weapon: "Yay",             region: "Liyue",      gender: "Kadın", img: "Yelan" },
  { id: "zhongli",      name: "Zhongli",             element: "Geo",     weapon: "Mızrak",          region: "Liyue",      gender: "Erkek", img: "Zhongli" },

  // --- Inazuma ---
  { id: "ayaka",        name: "Kamisato Ayaka",      element: "Cryo",    weapon: "Kılıç",           region: "Inazuma",    gender: "Kadın", img: "Ayaka" },
  { id: "ayato",        name: "Kamisato Ayato",      element: "Hydro",   weapon: "Kılıç",           region: "Inazuma",    gender: "Erkek", img: "Ayato" },
  { id: "chiori",       name: "Chiori",              element: "Geo",     weapon: "Kılıç",           region: "Inazuma",    gender: "Kadın", img: "Chiori" },
  { id: "itto",         name: "Arataki Itto",        element: "Geo",     weapon: "Çift Elli Kılıç", region: "Inazuma",    gender: "Erkek", img: "Itto" },
  { id: "kazuha",       name: "Kaedehara Kazuha",    element: "Anemo",   weapon: "Kılıç",           region: "Inazuma",    gender: "Erkek", img: "Kazuha" },
  { id: "kokomi",       name: "Sangonomiya Kokomi",  element: "Hydro",   weapon: "Katalizör",       region: "Inazuma",    gender: "Kadın", img: "Kokomi" },
  { id: "raiden",       name: "Raiden Shogun",       element: "Electro", weapon: "Mızrak",          region: "Inazuma",    gender: "Kadın", img: "Shougun" },
  { id: "yae",          name: "Yae Miko",            element: "Electro", weapon: "Katalizör",       region: "Inazuma",    gender: "Kadın", img: "Yae" },
  { id: "yoimiya",      name: "Yoimiya",             element: "Pyro",    weapon: "Yay",             region: "Inazuma",    gender: "Kadın", img: "Yoimiya" },

  // --- Sumeru ---
  { id: "alhaitham",    name: "Alhaitham",           element: "Dendro",  weapon: "Kılıç",           region: "Sumeru",     gender: "Erkek", img: "Alhatham" },
  { id: "cyno",         name: "Cyno",                element: "Electro", weapon: "Mızrak",          region: "Sumeru",     gender: "Erkek", img: "Cyno" },
  { id: "dehya",        name: "Dehya",               element: "Pyro",    weapon: "Çift Elli Kılıç", region: "Sumeru",     gender: "Kadın", img: "Dehya" },
  { id: "nahida",       name: "Nahida",              element: "Dendro",  weapon: "Katalizör",       region: "Sumeru",     gender: "Kadın", img: "Nahida" },
  { id: "nilou",        name: "Nilou",               element: "Hydro",   weapon: "Kılıç",           region: "Sumeru",     gender: "Kadın", img: "Nilou" },
  { id: "tighnari",     name: "Tighnari",            element: "Dendro",  weapon: "Yay",             region: "Sumeru",     gender: "Erkek", img: "Tighnari" },
  { id: "wanderer",     name: "Wanderer",            element: "Anemo",   weapon: "Katalizör",       region: "Sumeru",     gender: "Erkek", img: "Wanderer" },

  // --- Fontaine ---
  { id: "clorinde",     name: "Clorinde",            element: "Electro", weapon: "Kılıç",           region: "Fontaine",   gender: "Kadın", img: "Clorinde" },
  { id: "emilie",       name: "Emilie",              element: "Dendro",  weapon: "Mızrak",          region: "Fontaine",   gender: "Kadın", img: "Emilie" },
  { id: "furina",       name: "Furina",              element: "Hydro",   weapon: "Kılıç",           region: "Fontaine",   gender: "Kadın", img: "Furina" },
  { id: "lyney",        name: "Lyney",               element: "Pyro",    weapon: "Yay",             region: "Fontaine",   gender: "Erkek", img: "Liney" },
  { id: "navia",        name: "Navia",               element: "Geo",     weapon: "Çift Elli Kılıç", region: "Fontaine",   gender: "Kadın", img: "Navia" },
  { id: "neuvillette",  name: "Neuvillette",         element: "Hydro",   weapon: "Katalizör",       region: "Fontaine",   gender: "Erkek", img: "Neuvillette" },
  { id: "sigewinne",    name: "Sigewinne",           element: "Hydro",   weapon: "Yay",             region: "Fontaine",   gender: "Kadın", img: "Sigewinne" },
  { id: "wriothesley",  name: "Wriothesley",         element: "Cryo",    weapon: "Katalizör",       region: "Fontaine",   gender: "Erkek", img: "Wriothesley" },

  // --- Natlan ---
  { id: "chasca",       name: "Chasca",              element: "Anemo",   weapon: "Yay",             region: "Natlan",     gender: "Kadın", img: "Chasca" },
  { id: "citlali",      name: "Citlali",             element: "Cryo",    weapon: "Katalizör",       region: "Natlan",     gender: "Kadın", img: "Citlali" },
  { id: "kinich",       name: "Kinich",              element: "Dendro",  weapon: "Çift Elli Kılıç", region: "Natlan",     gender: "Erkek", img: "Kinich" },
  { id: "mavuika",      name: "Mavuika",             element: "Pyro",    weapon: "Çift Elli Kılıç", region: "Natlan",     gender: "Kadın", img: "Mavuika" },
  { id: "mualani",      name: "Mualani",             element: "Hydro",   weapon: "Katalizör",       region: "Natlan",     gender: "Kadın", img: "Mualani" },
  { id: "xilonen",      name: "Xilonen",             element: "Geo",     weapon: "Kılıç",           region: "Natlan",     gender: "Kadın", img: "Xilonen" },

  // --- Nod-Krai ---
  { id: "columbina",    name: "Columbina",           element: "Hydro",   weapon: "Katalizör",       region: "Nod-Krai",   gender: "Kadın", img: "Columbina" },
  { id: "escoffier",    name: "Escoffier",           element: "Cryo",    weapon: "Mızrak",          region: "Nod-Krai",   gender: "Kadın", img: "Escoffier" },
  { id: "flins",        name: "Flins",               element: "Electro", weapon: "Mızrak",          region: "Nod-Krai",   gender: "Erkek", img: "Flins" },
  { id: "ineffa",       name: "Ineffa",              element: "Electro", weapon: "Mızrak",          region: "Nod-Krai",   gender: "Kadın", img: "Ineffa" },
  { id: "lauma",        name: "Lauma",               element: "Dendro",  weapon: "Katalizör",       region: "Nod-Krai",   gender: "Kadın", img: "Lauma" },
  { id: "linnea",       name: "Linnea",              element: "Geo",     weapon: "Yay",             region: "Nod-Krai",   gender: "Kadın", img: "Linnea" },
  { id: "lohen",        name: "Lohen",               element: "Cryo",    weapon: "Mızrak",          region: "Nod-Krai",   gender: "Erkek", img: "Lohen" },
  { id: "mizuki",       name: "Mizuki",              element: "Anemo",   weapon: "Katalizör",       region: "Nod-Krai",   gender: "Kadın", img: "Mizuki" },
  { id: "nefer",        name: "Nefer",               element: "Dendro",  weapon: "Katalizör",       region: "Nod-Krai",   gender: "Kadın", img: "Nefer" },
  { id: "varesa",       name: "Varesa",              element: "Electro", weapon: "Katalizör",       region: "Nod-Krai",   gender: "Kadın", img: "Varesa" },
  { id: "zibai",        name: "Zibai",               element: "Geo",     weapon: "Kılıç",           region: "Nod-Krai",   gender: "Kadın", img: "Zibai" },

  // --- Snezhnaya ---
  { id: "arlecchino",   name: "Arlecchino",          element: "Pyro",    weapon: "Mızrak",          region: "Snezhnaya",  gender: "Kadın", img: "Arlecchino" },
  { id: "tartaglia",    name: "Tartaglia",           element: "Hydro",   weapon: "Yay",             region: "Snezhnaya",  gender: "Erkek", img: "Tartaglia" },

  // --- Diğer ---
  { id: "durin",        name: "Durin",               element: "Pyro",   weapon: "Çift Elli Kılıç", region: "Khaenri'ah", gender: "Erkek", img: "Durin" },
  { id: "nicole",       name: "Nicole",              element: "Pyro",   weapon: "Katalizör",       region: "Hexenzirkel",gender: "Kadın", img: "Nicole" },
  { id: "skirk",        name: "Skirk",               element: "Cryo",    weapon: "Kılıç",           region: "Hiçlik",     gender: "Kadın", img: "SkirkNew" }
];

// Helper: build image path using UI_AvatarIcon format
function imgSrc(char) {
  return `images/UI_AvatarIcon_${char.img}.png`;
}

// Helper: build element webp image path
function elementIconSrc(element) {
  return `images/${element}.webp`;
}

const elementTranslations = {
  Pyro: "Ateş",
  Hydro: "Su",
  Anemo: "Rüzgar",
  Electro: "Elektrik",
  Dendro: "Doğa",
  Cryo: "Buz",
  Geo: "Toprak"
};

// ==========================================================================
// PLAYER TITLES & CAREER STATS LOGIC
// ==========================================================================
const titleDefinitions = [
  { id: "rookie", name: "🌱 Maceracı Çaylağı", desc: "Maceracılar Loncası'na yeni katılan hevesli gezgin.", reqText: "Başlangıç (Herkese Açık)", checkUnlocked: (s) => true },
  { id: "explorer", name: "🧭 Lonca Keşifçisi", desc: "Teyvat'ın gizemli yollarını adımlamaya başlayan meraklı yolcu.", reqText: "1 Maç Kazan veya 2 Maç Oyna", checkUnlocked: (s) => (s.wins || 0) >= 1 || (s.totalMatches || 0) >= 2 },
  { id: "favonius", name: "⚔️ Favonius Şövalyesi", desc: "Mondstadt rüzgarının onurunu ve özgürlüğünü savunan savaşçı.", reqText: "3 Maç Kazan", checkUnlocked: (s) => (s.wins || 0) >= 3 },
  { id: "adeptus", name: "🪨 Liyue Adeptusu", desc: "Jueyun Karst tepelerindeki kadim bilgeliğe sahip strateji ustası.", reqText: "5 Maç Kazan", checkUnlocked: (s) => (s.wins || 0) >= 5 },
  { id: "streak3", name: "🔥 Yenilmez Serüvenci", desc: "Art arda galibiyetler alarak rakiplerine korku salan arena ustası.", reqText: "3 Maç Üst Üste Kazan (Seri)", checkUnlocked: (s) => (s.bestStreak || 0) >= 3 || (s.winStreak || 0) >= 3 },
  { id: "veteran", name: "🔎 Teyvat Dedektifi", desc: "Karakterlerin tüm gizemli ipuçlarını ve sırlarını şıp diye çözen zeka.", reqText: "Toplam 8 Maç Oyna", checkUnlocked: (s) => (s.totalMatches || 0) >= 8 },
  { id: "shogun", name: "⚡ Shogun Muhafızı", desc: "Inazuma'nın ebediyet kuralına sadık, yıldırım keskinliğinde taktikçi.", reqText: "10 Maç Kazan", checkUnlocked: (s) => (s.wins || 0) >= 10 },
  { id: "streak5", name: "☄️ Yıldırım İlahı", desc: "Raiden Shogun gibi rakiplerini ardı ardına dize getiren yenilmez güç.", reqText: "4 Maç Üst Üste Kazan (Seri)", checkUnlocked: (s) => (s.bestStreak || 0) >= 4 || (s.winStreak || 0) >= 4 },
  { id: "scholar", name: "🌿 Akademiya Bilgesi", desc: "Sumeru'nun Irminsul ağacındaki tüm gizli bilgilere erişmiş baş bilgin.", reqText: "14 Maç Kazan", checkUnlocked: (s) => (s.wins || 0) >= 14 },
  { id: "duelist", name: "⚖️ Fontaine Yargıcı", desc: "Epik düellolarda ve mahkeme salonunda mutlak adalet dağıtan yüce üstad.", reqText: "18 Maç Kazan", checkUnlocked: (s) => (s.wins || 0) >= 18 },
  { id: "natlan", name: "🐉 Natlan Savaşçı Başı", desc: "Kutsal ateşin ve savaşın diyarında yenilgisiz, efsanevi kahraman.", reqText: "22 Maç Kazan", checkUnlocked: (s) => (s.wins || 0) >= 22 },
  { id: "harbinger", name: "❄️ Fatui Öncüsü", desc: "Snezhnaya buzullarının ardındaki en gizemli ve tehlikeli stratejist.", reqText: "26 Maç Kazan veya 30 Maç Oyna", checkUnlocked: (s) => (s.wins || 0) >= 26 || (s.totalMatches || 0) >= 30 },
  { id: "legend", name: "👑 Teyvat Efsanesi", desc: "Yedi ulusun tamamında nam salmış nihai tahmin üstadı!", reqText: "30 Maç Kazan", checkUnlocked: (s) => (s.wins || 0) >= 30 },
  { id: "celestia", name: "✨ Celestia Hükümdarı", desc: "Gökyüzü tahtına oturmuş, Teyvat'taki her karakterin zihnini okuyan tanrısal güç!", reqText: "35 Maç Kazan veya 6 Seriye Ulaş", checkUnlocked: (s) => (s.wins || 0) >= 35 || (s.bestStreak || 0) >= 6 }
];

function getPlayerStats() {
  const saved = localStorage.getItem('genshin_career_stats');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return { wins: 0, winStreak: 0, bestStreak: 0, totalMatches: 0, selectedTitleId: "rookie" };
}

function savePlayerStats(stats) {
  localStorage.setItem('genshin_career_stats', JSON.stringify(stats));
}

function getActiveTitleLabel() {
  const stats = getPlayerStats();
  const t = titleDefinitions.find(x => x.id === stats.selectedTitleId) || titleDefinitions[0];
  return t.name;
}

function updateCareerStatsUI() {
  const stats = getPlayerStats();
  const activeLabelEl = document.getElementById('active-title-label');
  if (activeLabelEl) activeLabelEl.textContent = getActiveTitleLabel();

  const winEl = document.getElementById('stat-wins');
  const streakEl = document.getElementById('stat-streak');
  const totalEl = document.getElementById('stat-total');
  if (winEl) winEl.textContent = stats.wins || 0;
  if (streakEl) streakEl.textContent = stats.winStreak || 0;
  if (totalEl) totalEl.textContent = stats.totalMatches || 0;
}

// ==========================================================================
// DAILY GENSHIN TRIVIA (GÜNÜN BULMACASI) LOGIC
// ==========================================================================
const dailyTriviaQuestions = [
  {
    q: "Hu Tao'nun Wangsheng Cenaze Evi'nde çalışan gizemli danışmanı kimdir?",
    options: ["Xiao", "Zhongli", "Ganyu"],
    answer: 1,
    note: "Doğru! Zhongli, Wangsheng Cenaze Evi'nde saygın ve bilgili bir danışman olarak görev yapar."
  },
  {
    q: "Mondstadt'ın 'Favonius Şövalyeleri'nde Dandelion Şövalyesi unvanını taşıyan kimdir?",
    options: ["Eula", "Jean", "Klee"],
    answer: 1,
    note: "Doğru! Jean hem Büyük Üstat Vekili hem de Dandelion (Karahindiba) Şövalyesi unvanını taşır."
  },
  {
    q: "Inazuma'da 'Ebediyet'i arayan ve Yıldırım Tanrısı olan Raiden Shogun'un asıl adı nedir?",
    options: ["Ei (Beelzebul)", "Yae Miko", "Kujou Sara"],
    answer: 0,
    note: "Doğru! Raiden Shogun'un asıl adı Ei'dir ve Hükümdar unvanı Beelzebul'dur."
  },
  {
    q: "Fontaine'in Yüce Yargıcı Neuvillette'in gerçek ve gizli kimliği nedir?",
    options: ["Yüce Sular Ejderi (Hydro Dragon)", "Eski Bir Archon", "Fatui Öncüsü"],
    answer: 0,
    note: "Doğru! Neuvillette, Fontaine'in adaleti sağlayan Yüce Sular Ejderi'dir."
  },
  {
    q: "Ateş Archon'u Mavuika hangi ulusun lideridir?",
    options: ["Sumeru", "Natlan", "Snezhnaya"],
    answer: 1,
    note: "Doğru! Mavuika, savaş ve ateşin ulusu Natlan'ın Archon'udur."
  },
  {
    q: "Liyue'deki Wangshu Hanı'nın çatısında yalnız başına iblis avlayan Yaksha kimdir?",
    options: ["Xiao", "Chongyun", "Shenhe"],
    answer: 0,
    note: "Doğru! Xiao, binlerce yıldır Liyue'yi gölgelerden koruyan son Vigilant Yaksha'dır."
  },
  {
    q: "Sumeru'nun Bilgelik Archon'u olan Küçük Kusanali Lordu kimdir?",
    options: ["Nilou", "Nahida", "Collei"],
    answer: 1,
    note: "Doğru! Nahida, Sumeru halkına bilgelik ve rüyalarda rehberlik eden Dendro Archon'dur."
  },
  {
    q: "Fatui Öncüleri'nden 'Çocuk' (Childe) unvanına sahip Tartaglia, savaşta özellikle hangi silahı sevdiğini söyler?",
    options: ["Katalizör", "Yay (Çünkü en az usta olduğu silah)", "Çift Elli Kılıç"],
    answer: 1,
    note: "Doğru! Tartaglia, kendini zorlamak için en zayıf olduğu silah olan yayı kullanır."
  },
  {
    q: "Maceracılar Loncası'nın her ulusta bulunan ve 'Ad astra abyssosque' diyen resepsiyonisti kimdir?",
    options: ["Katheryne", "Ella Musk", "Ying'er"],
    answer: 0,
    note: "Doğru! Katheryne tüm Teyvat'ta maceracılara günlük görevlerini verir."
  },
  {
    q: "Klee'nin en sevdiği ve Balık Gümletme'de kullandığı patlayıcısının adı nedir?",
    options: ["Dodoco", "Jumpty Dumpty", "Baron Tavşan"],
    answer: 1,
    note: "Doğru! Jumpty Dumpty, Klee'nin sevimli ama süper patlayıcı bombasıdır."
  },
  {
    q: "Kamisato Ayaka'nın ağabeyi ve Yashiro Komisyonu'nun başındaki kişi kimdir?",
    options: ["Thoma", "Kamisato Ayato", "Kaedehara Kazuha"],
    answer: 1,
    note: "Doğru! Kamisato Ayato hem klanın lideri hem de Ayaka'nın ağabeyidir."
  },
  {
    q: "Shenhe, çocukluğunda hangi Liyue Adeptus'u tarafından dağlarda büyütülmüştür?",
    options: ["Madame Ping", "Xianyun (Bulutların Hâkimi)", "Zhongli"],
    answer: 1,
    note: "Doğru! Xianyun (Bulutların Hâkimi / Cloud Retainer), Shenhe ve Ganyu'nun ustasıdır."
  }
];

let triviaCountdownInterval = null;

function initDailyTriviaWidget() {
  const contentEl = document.getElementById('trivia-content');
  if (!contentEl) return;

  if (triviaCountdownInterval) clearInterval(triviaCountdownInterval);

  const todayStr = new Date().toDateString();
  const solvedDate = localStorage.getItem('genshin_trivia_solved_date');

  if (solvedDate === todayStr) {
    renderTriviaSolvedState(contentEl);
  } else {
    // Pick today's question based on day index
    const now = new Date();
    const daySeed = now.getFullYear() * 365 + (now.getMonth() + 1) * 31 + now.getDate();
    const qIndex = daySeed % dailyTriviaQuestions.length;
    const qData = dailyTriviaQuestions[qIndex];

    contentEl.innerHTML = `
      <div class="trivia-question-text">${qData.q}</div>
      <div class="trivia-options-grid" id="trivia-options-list"></div>
      <div id="trivia-feedback" style="margin-top:10px; font-size:0.85rem; font-weight:600;"></div>
    `;

    const optionsList = document.getElementById('trivia-options-list');
    const feedbackEl = document.getElementById('trivia-feedback');
    const letters = ['A', 'B', 'C'];

    qData.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'trivia-opt-btn';
      btn.innerHTML = `<span class="trivia-opt-letter">${letters[idx]}</span> <span style="flex:1;">${optText}</span>`;
      
      btn.addEventListener('click', () => {
        if (idx === qData.answer) {
          btn.style.borderColor = '#10b981';
          btn.style.background = 'rgba(16, 185, 129, 0.25)';
          if (typeof synth !== 'undefined' && synth.playTick) synth.playTick();

          feedbackEl.style.color = '#34d399';
          feedbackEl.innerHTML = `✨ <strong>Tebrikler!</strong> ${qData.note}`;

          // Mark solved
          localStorage.setItem('genshin_trivia_solved_date', todayStr);

          setTimeout(() => {
            renderTriviaSolvedState(contentEl);
          }, 3500);
        } else {
          btn.style.borderColor = '#ef4444';
          btn.style.background = 'rgba(239, 68, 68, 0.25)';
          if (typeof synth !== 'undefined' && synth.playError) synth.playError();

          feedbackEl.style.color = '#f87171';
          feedbackEl.textContent = '❌ Yanlış şık, tekrar denemeye ne dersin Gezgin?';
          setTimeout(() => {
            btn.style.borderColor = '';
            btn.style.background = '';
          }, 1200);
        }
      });

      optionsList.appendChild(btn);
    });
  }
}

function renderTriviaSolvedState(containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = `
    <div class="trivia-solved-box">
      <div class="trivia-solved-title">🎉 Günün Bulmacası Çözüldü!</div>
      <p style="font-size:0.85rem; color:#d1fae5; margin-top:4px;">Genshin evrenine dair harika bilgilere sahipsin!</p>
      <div class="trivia-countdown" id="trivia-timer-clock">⏳ Yeni bulmaca: --:--:--</div>
    </div>
  `;

  const updateClock = () => {
    const clockEl = document.getElementById('trivia-timer-clock');
    if (!clockEl) return;
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diffMs = midnight - now;
    if (diffMs <= 0) {
      initDailyTriviaWidget();
      return;
    }
    const hrs = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diffMs % (1000 * 60)) / 1000);
    clockEl.textContent = `⏳ Yeni bulmaca: ${String(hrs).padStart(2, '0')} saat ${String(mins).padStart(2, '0')} dk ${String(secs).padStart(2, '0')} sn`;
  };

  updateClock();
  triviaCountdownInterval = setInterval(updateClock, 1000);
}


// PeerJS Connection State
let peer = null;
let conn = null; // Used by Guest to talk to Host
let clients = []; // Array of { conn, peerId, nickname, team, isHost }
let isHost = false;
let gameMode = '1v1'; // '1v1' or '2v2'
let myPlayerInfo = null; // { nickname, team, isHost }

let myNickname = '';
let currentRoomId = '';
let isMyTurn = false;
let mySecretCharacter = null; // For 2v2, this will be the Team's character
let opponentSecretCharacter = null; 
let opponentName = ''; // Usually the opposing team name in 2v2

// Match State
let selectedCharacterLocally = null;
let isMySelectionLocked = false;
let isOpponentSelectionLocked = false;
let selectionTimerVal = 30;
let selectionTimerInterval = null;
let playAgainAccepts = new Set();
let activeTurnTimerInterval = null;
let currentTurnTime = 60;
let turnEndTime = 0;

// Reconnection state
let reconnectTimer = null;
let pingInterval = null;
let isReconnecting = false;

// PeerJS ID Prefix to isolate namespace
const PEER_PREFIX = 'genshinguesswho-';


// Web Audio Synthesizer (Silenced per user request)
const synth = {
  ctx: null,
  init() {},
  playTick() {},
  playSuccess() {},
  playError() {},
  playVictory() {}
};

// UI Elements
const lobbyScreen = document.getElementById('lobby-screen');
const waitingScreen = document.getElementById('waiting-screen');
const selectionScreen = document.getElementById('selection-screen');
const gameScreen = document.getElementById('game-screen');

const nicknameInput = document.getElementById('nickname-input');
const roomIdInput = document.getElementById('room-id-input');
const createRoomBtn = document.getElementById('create-room-btn');
const joinRoomBtn = document.getElementById('join-room-btn');
const displayRoomId = document.getElementById('display-room-id');
const copyCodeBtn = document.getElementById('copy-code-btn');
const leaveRoomBtn = document.getElementById('leave-room-btn');
const lobbyError = document.getElementById('lobby-error');
const peerStatus = document.getElementById('peer-status');
const startGameBtn = document.getElementById('start-game-btn');

// Auto-fill nickname from localStorage
const savedNick = localStorage.getItem('genshin_nickname');
if (savedNick) nicknameInput.value = savedNick;

// Auto-restore session from localStorage
let isRestoringSession = false;
const savedSessionStr = localStorage.getItem('genshin_session');
if (savedSessionStr) {
  try {
    const sess = JSON.parse(savedSessionStr);
    if (sess.nickname && sess.roomId) {
      myNickname = sess.nickname;
      currentRoomId = sess.roomId;
      isHost = sess.isHost;
      gameMode = sess.gameMode || '1v1';
      isRestoringSession = true;

      // Restore basic UI displays
      displayRoomId.textContent = currentRoomId;
      nicknameInput.value = myNickname;

      if (isHost) {
        myPlayerInfo = sess.myPlayerInfo || { peerId: 'host', nickname: myNickname, team: 'A', isHost: true };
        
        if (sess.clients && sess.clients.length > 0) {
          clients = sess.clients.map(c => ({
            conn: null,
            peerId: c.peerId,
            nickname: c.nickname,
            team: c.team,
            isHost: c.isHost,
            lockedCharacterId: c.lockedCharacterId || null
          }));
        } else {
          clients = [ { conn: null, ...myPlayerInfo } ];
        }
        
        mySecretCharacter = sess.mySecretChar;
        opponentSecretCharacter = sess.oppSecretChar;
        isMyTurn = sess.isMyTurn;
        if (sess.turnEndTime && sess.turnEndTime > Date.now()) turnEndTime = sess.turnEndTime;
        opponentName = sess.opponentName || 'Rakip';

        if (mySecretCharacter && opponentSecretCharacter) {
          showScreen(gameScreen);
          launchGameBoard(false);
        } else {
          showScreen(waitingScreen);
        }
        initPeer(currentRoomId);
      } else {
        mySecretCharacter = sess.mySecretChar;
        opponentSecretCharacter = sess.oppSecretChar;
        isMyTurn = sess.isMyTurn;
        if (sess.turnEndTime && sess.turnEndTime > Date.now()) turnEndTime = sess.turnEndTime;
        opponentName = sess.opponentName || 'Rakip';

        if (mySecretCharacter && opponentSecretCharacter) {
          showScreen(gameScreen);
        } else {
          showScreen(waitingScreen);
        }
        initPeer();
      }
    }
  } catch (e) {
    console.error("Error restoring session:", e);
    clearSession();
  }
}

// How to Play Modal Elements
const howToPlayBtn = document.getElementById('how-to-play-btn');
const howToPlayModal = document.getElementById('how-to-play-modal');
const closeHowToPlayBtn = document.getElementById('close-how-to-play-btn');

howToPlayBtn?.addEventListener('click', () => {
  howToPlayModal.classList.remove('hidden');
});

closeHowToPlayBtn?.addEventListener('click', () => {
  howToPlayModal.classList.add('hidden');
});

// Player Titles Modal Elements & Logic
const titleModal = document.getElementById('title-modal');
const openTitleModalBtn = document.getElementById('open-title-modal-btn');
const closeTitleModalBtn = document.getElementById('close-title-modal-btn');
const saveTitleBtn = document.getElementById('save-title-btn');
const titlesGridList = document.getElementById('titles-grid-list');

function renderTitleModal() {
  if (!titlesGridList) return;
  const stats = getPlayerStats();
  titlesGridList.innerHTML = '';

  titleDefinitions.forEach(t => {
    const isUnlocked = t.checkUnlocked(stats);
    const isSelected = stats.selectedTitleId === t.id;

    const card = document.createElement('div');
    card.className = `title-item-card ${isUnlocked ? 'unlocked' : 'locked'} ${isSelected ? 'active-selected' : ''}`;
    card.innerHTML = `
      <div class="title-item-header">
        <span class="title-item-name">${t.name}</span>
        <span class="title-status-icon">${isSelected ? '✅' : (isUnlocked ? '🔓' : '🔒')}</span>
      </div>
      <div class="title-item-desc">${t.desc}</div>
      <div class="title-item-req">${isUnlocked ? '✦ KİLİT AÇILDI ✦' : '🔒 Şart: ' + t.reqText}</div>
    `;

    if (isUnlocked) {
      card.addEventListener('click', () => {
        document.querySelectorAll('.title-item-card').forEach(c => c.classList.remove('active-selected'));
        card.classList.add('active-selected');
        stats.selectedTitleId = t.id;
        savePlayerStats(stats);
      });
    }

    titlesGridList.appendChild(card);
  });
}

openTitleModalBtn?.addEventListener('click', () => {
  renderTitleModal();
  titleModal?.classList.remove('hidden');
});

closeTitleModalBtn?.addEventListener('click', () => {
  titleModal?.classList.add('hidden');
});

saveTitleBtn?.addEventListener('click', () => {
  titleModal?.classList.add('hidden');
  updateCareerStatsUI();
});

// Initialize Career Stats and Daily Trivia on page load
updateCareerStatsUI();
initDailyTriviaWidget();

// Character Selection Elements
const selectionGrid = document.getElementById('selection-grid');
const detailCardPreview = document.getElementById('detail-card-preview');
const detailCharName = document.getElementById('detail-char-name');
const detailCharElement = document.getElementById('detail-char-element');
const detailCharWeapon = document.getElementById('detail-char-weapon');
const detailCharRegion = document.getElementById('detail-char-region');
const detailCharGender = document.getElementById('detail-char-gender');
const lockCharacterBtn = document.getElementById('lock-character-btn');
const selectionTimerText = document.getElementById('selection-timer-text');
const myReadyStatus = document.getElementById('my-ready-status');
const opponentReadyStatus = document.getElementById('opponent-ready-status');

// Game Playing Elements
const turnBadge = document.getElementById('turn-badge');
const turnStatusText = document.getElementById('turn-status-text');
const gameRoomId = document.getElementById('game-room-id');
const opponentNameLabel = document.getElementById('opponent-name');
const charactersGrid = document.getElementById('characters-grid');
const mySecretCardContainer = document.getElementById('my-secret-character-card');
const passTurnBtn = document.getElementById('pass-turn-btn');

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Guess Modal
const guessModal = document.getElementById('guess-modal');
const openGuessModalBtn = document.getElementById('open-guess-modal-btn');
const closeGuessModalBtn = document.getElementById('close-guess-modal-btn');
const cancelGuessBtn = document.getElementById('cancel-guess-btn');
const submitGuessBtn = document.getElementById('submit-guess-btn');
const guessSelect = document.getElementById('guess-select');

// Play Again Modal
const playAgainModal = document.getElementById('play-again-modal');
const acceptPlayAgainBtn = document.getElementById('accept-play-again-btn');
const rejectPlayAgainBtn = document.getElementById('reject-play-again-btn');

// Game Over Screen
const gameOverScreen = document.getElementById('game-over-screen');
const gameOverTitle = document.getElementById('game-over-title');
const gameOverMessage = document.getElementById('game-over-message');
const opponentSecretCardDisplay = document.getElementById('opponent-secret-card-display');
const playAgainBtn = document.getElementById('play-again-btn');
const exitLobbyBtn = document.getElementById('exit-lobby-btn');

// View Transition Helper
function showScreen(screen) {
  lobbyScreen.classList.remove('active');
  waitingScreen.classList.remove('active');
  selectionScreen.classList.remove('active');
  gameScreen.classList.remove('active');
  
  screen.classList.add('active');

  // Clear reconnection states if returning to lobby
  if (screen === lobbyScreen) {
    isReconnecting = false;
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
  }
}

// Generate Room ID (4 characters)
function generateRoomId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Show error messages in Lobby
function showLobbyError(msg) {
  lobbyError.textContent = msg;
  lobbyError.classList.remove('hidden');
  synth.playError();
}

// Event Listeners for Audio Context activation
document.addEventListener('click', () => {
  if (synth.ctx && synth.ctx.state === 'suspended') {
    synth.ctx.resume();
  }
});

// CREATE ROOM ACTION (Host)
createRoomBtn.addEventListener('click', () => {
  const nickname = nicknameInput.value.trim();
  if (!nickname) {
    showLobbyError('Lütfen bir kullanıcı adı girin!');
    return;
  }
  
  myNickname = nickname;
  isHost = true;
  gameMode = document.querySelector('input[name="game-mode"]:checked').value;
  currentRoomId = generateRoomId();
  
  // Save nickname for next visit
  localStorage.setItem('genshin_nickname', myNickname);
  
  myPlayerInfo = { peerId: 'host', nickname: myNickname, title: getActiveTitleLabel(), team: 'A', isHost: true };
  clients = [ { conn: null, ...myPlayerInfo } ];
  
  saveSession(); // Save host session
  
  peerStatus.textContent = 'Oyun sunucusuna bağlanılıyor...';
  displayRoomId.textContent = currentRoomId;
  showScreen(waitingScreen);
  updateLobbyUI();
  
  initPeer(currentRoomId);
});

// JOIN ROOM ACTION (Guest)
joinRoomBtn.addEventListener('click', () => {
  const nickname = nicknameInput.value.trim();
  const roomId = roomIdInput.value.trim().toUpperCase();
  
  if (!nickname) {
    showLobbyError('Lütfen bir kullanıcı adı girin!');
    return;
  }
  if (!roomId || roomId.length !== 4) {
    showLobbyError('Lütfen 4 haneli geçerli bir oda kodu girin!');
    return;
  }
  
  myNickname = nickname;
  isHost = false;
  currentRoomId = roomId;
  
  // Save nickname for next visit
  localStorage.setItem('genshin_nickname', myNickname);
  
  initPeer(); // random ID for Guest
});

function updateLobbyUI() {
  const is2v2 = gameMode === '2v2';
  document.getElementById('slot-a2').classList.toggle('hidden', !is2v2);
  document.getElementById('slot-b2').classList.toggle('hidden', !is2v2);
  
  const teamA = clients.filter(c => c.team === 'A');
  const teamB = clients.filter(c => c.team === 'B');
  
  // Fill A slots
  const aList = document.getElementById('team-a-list').querySelectorAll('.player-slot');
  aList.forEach((slot, i) => {
    if (i === 1 && !is2v2) return;
    if (teamA[i]) {
      slot.innerHTML = `${teamA[i].nickname} <span class="player-title-badge">${teamA[i].title || '🌱 Maceracı Çaylağı'}</span>`;
      slot.className = 'player-slot filled' + (teamA[i].isHost ? ' host' : '');
    } else {
      slot.textContent = 'Bekleniyor...';
      slot.className = 'player-slot empty' + (i===1 && !is2v2 ? ' hidden' : '');
    }
  });

  // Fill B slots
  const bList = document.getElementById('team-b-list').querySelectorAll('.player-slot');
  bList.forEach((slot, i) => {
    if (i === 1 && !is2v2) return;
    if (teamB[i]) {
      slot.innerHTML = `${teamB[i].nickname} <span class="player-title-badge">${teamB[i].title || '🌱 Maceracı Çaylağı'}</span>`;
      slot.className = 'player-slot filled' + (teamB[i].isHost ? ' host' : '');
    } else {
      slot.textContent = 'Bekleniyor...';
      slot.className = 'player-slot empty' + (i===1 && !is2v2 ? ' hidden' : '');
    }
  });

  // Host starts game logic
  if (isHost) {
    const maxPlayers = is2v2 ? 4 : 2;
    if (clients.length === maxPlayers) {
      startGameBtn.classList.remove('hidden');
      peerStatus.textContent = "Oda dolu! Oyunu başlatabilirsin.";
    } else {
      startGameBtn.classList.add('hidden');
      peerStatus.textContent = `${clients.length}/${maxPlayers} oyuncu katıldı. Bekleniyor...`;
    }
  } else {
    startGameBtn.classList.add('hidden');
  }
}

// Leave Room
leaveRoomBtn.addEventListener('click', () => {
  clearSession();
  window.location.reload();
});

// Copy Code Clipboard
copyCodeBtn.addEventListener('click', () => {
  const codeText = displayRoomId.textContent;
  navigator.clipboard.writeText(codeText).then(() => {
    const originalText = copyCodeBtn.textContent;
    copyCodeBtn.textContent = 'Kopyalandı!';
    setTimeout(() => {
      copyCodeBtn.textContent = '📋';
    }, 1500);
  });
});

// Start Game Action (Host only)
startGameBtn.addEventListener('click', () => {
  if (!isHost) return;
  broadcast({ type: 'start-game' });
  startSelectionPhase();
});

// Broadcast to all connected guests
function broadcast(data) {
  clients.forEach(c => {
    if (c.conn && c.conn.open) c.conn.send(data);
  });
}

// Send to specific connection
function sendData(connection, data) {
  if (connection && connection.open) connection.send(data);
}

// Initialize PeerJS
function initPeer(targetRoomId = null) {
  const peerId = targetRoomId ? (PEER_PREFIX + targetRoomId) : null;
  
  peer = new Peer(peerId, { debug: 1 });
  
  peer.on('open', (id) => {
    console.log('Peer connected. ID:', id);
    if (isHost) {
      setupHostConnectionListener();
    } else {
      peerStatus.textContent = `Odaya (${currentRoomId}) bağlanılıyor...`;
      displayRoomId.textContent = currentRoomId;
      showScreen(waitingScreen);
      const hostPeerId = PEER_PREFIX + currentRoomId;
      const connection = peer.connect(hostPeerId);
      setupGuestConnection(connection);
    }
  });
  
  peer.on('error', (err) => {
    console.error('Peer error:', err);
    if (isHost && err.type === 'unavailable-id') {
      currentRoomId = generateRoomId();
      displayRoomId.textContent = currentRoomId;
      initPeer(currentRoomId);
      return;
    }
    
    // Check if error is related to network drop or temporary disconnect
    if (err.type === 'network' || err.type === 'server-error' || err.type === 'disconnected' || (err.message && err.message.includes('Lost connection'))) {
      console.log('Network error detected. Reloading to auto-restore...');
      setTimeout(() => window.location.reload(), 1500);
      return;
    }
    
    // For peer-unavailable (wrong code or host dropped)
    if (err.type === 'peer-unavailable') {
      const isGameActive = selectionScreen.classList.contains('active') || gameScreen.classList.contains('active');
      if (isGameActive || isRestoringSession) {
        console.log('Host temporarily unavailable. Retrying...');
        setTimeout(() => window.location.reload(), 3000);
        return;
      }
    }

    // Fatal unrecoverable error for fresh joins
    clearSession();
    showScreen(lobbyScreen);
    showLobbyError(`Bağlantı hatası: ${err.message || err.type}`);
  });
}

function getBroadcastLobbyState() {
  return clients.map(c => ({ peerId: c.peerId, nickname: c.nickname, title: c.title || getActiveTitleLabel(), team: c.team, isHost: c.isHost, lockedCharacterId: c.lockedCharacterId }));
}

// --- Session Save/Restore ---
function saveSession() {
  if (!myNickname || !currentRoomId) return;
  
  const eliminated = [];
  document.querySelectorAll('.card.eliminated').forEach(c => eliminated.push(c.dataset.id));
  
  const session = {
    nickname: myNickname,
    roomId: currentRoomId,
    isHost,
    gameMode,
    team: myPlayerInfo?.team || null,
    myPlayerInfo: myPlayerInfo,
    clients: getBroadcastLobbyState(),
    mySecretChar: mySecretCharacter,
    oppSecretChar: opponentSecretCharacter,
    isMyTurn,
    turnEndTime,
    opponentName,
    eliminatedCards: eliminated
  };
  localStorage.setItem('genshin_session', JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem('genshin_session');
}



// --- Ping/Pong Keep-Alive ---
function startPing() {
  if (pingInterval) clearInterval(pingInterval);
  pingInterval = setInterval(() => {
    if (isHost) {
      broadcast({ type: 'ping' });
    } else if (conn && conn.open) {
      conn.send({ type: 'ping' });
    }
  }, 18000); // every 18 seconds
}

// Host connection listener
function setupHostConnectionListener() {
  peer.on('connection', (connection) => {
// early return removed. We accept the connection and wait for join/rejoin request to validate

    connection.on('open', () => {
      console.log('Guest connected/reconnected');
    });

    connection.on('data', (data) => {
      handleHostReceivedData(connection, data);
    });

    const handleConnectionLoss = () => {
      const disconnected = clients.find(c => c.conn === connection);
      if (!disconnected) return;
      
      const gameIsOver = !gameOverScreen.classList.contains('hidden');
      const inLobby = !waitingScreen.classList.contains('hidden') && !gameScreen.classList.contains('active') && !selectionScreen.classList.contains('active');
      
      if (inLobby) {
        // In lobby — remove immediately
        clients = clients.filter(c => c.conn !== connection);
        updateLobbyUI();
        broadcast({ type: 'lobby-update', gameMode, clients: getBroadcastLobbyState() });
      } else if (gameIsOver) {
        // Game already finished — silently remove, no alert needed
        clients = clients.filter(c => c.conn !== connection);
      } else {
        if (disconnected.isReconnecting) return;
        disconnected.isReconnecting = true;

        // During active game/selection
        const disconnectedNickname = disconnected.nickname || '?';
        
        broadcast({ type: 'player-reconnecting', nickname: disconnectedNickname });
        processGameEvent({ type: 'player-reconnecting', nickname: disconnectedNickname });
      }
    };

    connection.on('close', handleConnectionLoss);
    connection.on('error', handleConnectionLoss);
  });
}

// Guest connection setup (first join)
function setupGuestConnection(connection) {
  conn = connection;
  setupGuestDataHandlers(conn, false);
}

// Shared data handler setup for guest (used on first join AND reconnect)
function setupGuestDataHandlers(connection, isRejoining) {
  connection.on('open', () => {
    setTimeout(() => {
      if (isRestoringSession || isRejoining) {
        peerStatus.textContent = 'Yeniden bağlanılıyor...';
        connection.send({ type: 'rejoin-request', nickname: myNickname, title: getActiveTitleLabel() });
      } else {
        peerStatus.textContent = 'Bağlantı kuruldu, odanın durumu bekleniyor...';
        connection.send({ type: 'join-request', nickname: myNickname, title: getActiveTitleLabel() });
      }
      startPing();
    }, 250);
  });

  connection.on('data', (data) => {
    handleGuestReceivedData(data);
  });

  connection.on('close', () => {
    // If game over screen is visible, the game is done - just silently ignore disconnect
    const gameIsOver = !gameOverScreen.classList.contains('hidden');
    if (gameIsOver) return;

    const inLobby = !waitingScreen.classList.contains('hidden');
    if (inLobby) {
      const msg = `Oda kurucusu (Host) ayrıldı. Oyun sonlandırıldı.`;
      const modal = document.getElementById('game-cancelled-modal');
      const msgEl = document.getElementById('game-cancelled-message');
      if (modal && msgEl) {
        msgEl.textContent = msg;
        modal.classList.remove('hidden');
      }
      return;
    }

    console.log('Connection lost, reloading to auto-restore...');
    window.location.reload();
  });

  connection.on('error', () => {
    const gameIsOver = !gameOverScreen.classList.contains('hidden');
    if (gameIsOver) return;

    console.log('Connection error, reloading to auto-restore...');
    window.location.reload();
  });
}

// Page Visibility API — reconnect when phone comes back to foreground or goes to background
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (!isHost && conn && conn.open) {
      conn.send({ type: 'tab-minimized', nickname: myNickname });
    } else if (isHost) {
      broadcast({ type: 'tab-minimized', nickname: myNickname });
      processGameEvent({ type: 'tab-minimized', nickname: myNickname });
    }
  } else {
    if (!isHost && currentRoomId) {
      if (!conn || !conn.open) {
        console.log('Page visible again, connection is dead — reloading to auto-restore...');
        window.location.reload();
      } else {
        conn.send({ type: 'tab-restored', nickname: myNickname });
        if (gameScreen.classList.contains('active')) updateTurnUI(false);
      }
    } else if (isHost) {
      broadcast({ type: 'tab-restored', nickname: myNickname });
      processGameEvent({ type: 'tab-restored', nickname: myNickname });
      if (gameScreen.classList.contains('active')) {
        broadcast({ type: 'sync-turn', activeTeam: isMyTurn ? 'A' : 'B', hostTurn: isMyTurn, turnEndTime });
        updateTurnUI(false);
      }
    }
  }
});

// Host Data Handler
function handleHostReceivedData(connection, data) {
  switch (data.type) {
    case 'join-request': {
      // Check if nickname already exists in clients (e.g. they refreshed)
      const existingClient = clients.find(c => c.nickname === data.nickname);
      if (existingClient) {
        existingClient.conn = connection;
        existingClient.peerId = connection.peer;
        existingClient.isReconnecting = false;
        
        if (reconnectTimer) {
          clearTimeout(reconnectTimer);
          reconnectTimer = null;
        }
        
        updateLobbyUI();
        broadcast({ type: 'lobby-update', gameMode, clients: getBroadcastLobbyState() });
        
        // If the game has already started (selection phase or active game), send rejoin sync
        const isInSelection = selectionScreen.classList.contains('active');
        const isInGame = gameScreen.classList.contains('active');
        
        if (isInSelection || isInGame) {
          connection.send({
            type: 'rejoin-ack',
            gameMode,
            team: existingClient.team,
            mySecretCharId: existingClient.lockedCharacterId || null,
            clients: getBroadcastLobbyState(),
            isInSelectionPhase: isInSelection,
            activeTeam: isMyTurn ? 'A' : 'B',
            hostTurn: isMyTurn,
            turnEndTime: turnEndTime
          });
        }
        break;
      }

      // If it's a completely new player, check if room is full
      const maxPlayers = gameMode === '2v2' ? 4 : 2;
      if (clients.length >= maxPlayers) {
        connection.send({ type: 'game-cancelled', reason: 'room-full', nickname: data.nickname });
        setTimeout(() => connection.close(), 500);
        break;
      }

      // Assign team based on current counts
      let teamA_count = clients.filter(c => c.team === 'A').length;
      let teamB_count = clients.filter(c => c.team === 'B').length;
      let assignedTeam = 'A';
      if (gameMode === '2v2') {
        assignedTeam = (teamA_count <= teamB_count) ? 'A' : 'B';
      } else {
        assignedTeam = 'B'; // In 1v1, guest is always B
      }
      
      clients.push({
        conn: connection,
        peerId: connection.peer,
        nickname: data.nickname,
        title: data.title || '🌱 Maceracı Çaylağı',
        team: assignedTeam,
        isHost: false
      });
      
      updateLobbyUI();
      broadcast({ type: 'lobby-update', gameMode, clients: getBroadcastLobbyState() });
      break;
    }

    case 'chat':
      // Relay chat to everyone if global, or only team if team
      if (data.target === 'team') {
        const sender = clients.find(c => c.conn === connection);
        if (sender) {
          clients.filter(c => c.team === sender.team && c.conn).forEach(c => sendData(c.conn, data));
          // Host shows it if host is same team
          if (myPlayerInfo.team === sender.team) appendChatMessage(data.nickname, data.text, false, true);
        }
      } else {
        broadcast(data);
        appendChatMessage(data.nickname, data.text, false, false);
      }
      break;
      
    case 'rejoin-request': {
      // Player reconnecting - find their existing slot by nickname
      const existingClient = clients.find(c => c.nickname === data.nickname);
      if (existingClient) {
        existingClient.conn = connection;
        existingClient.peerId = connection.peer;
        existingClient.isReconnecting = false;
        
        if (reconnectTimer) {
          clearTimeout(reconnectTimer);
          reconnectTimer = null;
        }

        // Send them the current game state
        connection.send({
          type: 'rejoin-ack',
          gameMode,
          team: existingClient.team,
          mySecretCharId: existingClient.lockedCharacterId || null,
          clients: getBroadcastLobbyState(),
          isInSelectionPhase: selectionScreen.classList.contains('active'),
          activeTeam: isMyTurn ? 'A' : 'B',
          hostTurn: isMyTurn,
          turnEndTime: turnEndTime
        });
        // Notify everyone this player is back
        broadcast({ type: 'player-reconnected', nickname: data.nickname });
        processGameEvent({ type: 'player-reconnected', nickname: data.nickname });
      } else {
        // Unknown player - treat as fresh join
        handleHostReceivedData(connection, { ...data, type: 'join-request' });
      }
      break;
    }

    case 'tab-minimized': {
      const existingClient = clients.find(c => c.nickname === data.nickname);
      if (existingClient && !existingClient.isReconnecting) {
        existingClient.isReconnecting = true;
        broadcast({ type: 'player-reconnecting', nickname: data.nickname });
        processGameEvent({ type: 'player-reconnecting', nickname: data.nickname });
      }
      break;
    }

    case 'tab-restored': {
      const existingClient = clients.find(c => c.nickname === data.nickname);
      if (existingClient && existingClient.isReconnecting) {
        existingClient.isReconnecting = false;
        if (reconnectTimer) {
          clearTimeout(reconnectTimer);
          reconnectTimer = null;
        }
        broadcast({ type: 'player-reconnected', nickname: data.nickname });
        processGameEvent({ type: 'player-reconnected', nickname: data.nickname });
      }
      if (gameScreen.classList.contains('active')) {
        broadcast({ type: 'sync-turn', activeTeam: isMyTurn ? 'A' : 'B', hostTurn: isMyTurn, turnEndTime: turnEndTime });
        updateTurnUI(false);
      }
      break;
    }

    case 'ping':
      // Guest pinged host - respond
      if (connection && connection.open) connection.send({ type: 'pong' });
      break;

    case 'pong':
      // Guest ponged host - keep-alive response, do nothing
      break;

    // Relay all other game logic to all clients for now
    default:
      broadcast(data);
      processGameEvent(data);
      break;
  }
}

// Guest Data Handler
function handleGuestReceivedData(data) {
  switch (data.type) {
    case 'lobby-update':
      gameMode = data.gameMode;
      // Re-assign myPlayerInfo based on what host says
      myPlayerInfo = data.clients.find(c => c.nickname === myNickname);
      // Sync clients array locally (without conn objects)
      clients = data.clients;
      updateLobbyUI();
      if (gameMode === '1v1') {
        opponentName = clients.find(c => c.nickname !== myNickname)?.nickname || 'Rakip';
      } else {
        opponentName = 'Rakip Takım';
      }
      break;
      
    case 'start-game':
      startSelectionPhase();
      break;
    
    case 'ready-count':
      if (gameMode === '2v2') {
        myReadyStatus.textContent = `${data.readyCount}/${data.maxPlayers}`;
        myReadyStatus.className = data.readyCount === data.maxPlayers ? 'text-green' : 'text-muted';
      } else {
        if (data.lastReadyPlayer !== myNickname) {
          opponentReadyStatus.textContent = 'Hazır!';
          opponentReadyStatus.className = 'text-green';
        }
      }
      break;
      
    case 'rejoin-ack':
      // Restore state from host confirmation
      gameMode = data.gameMode;
      myPlayerInfo = data.clients.find(c => c.nickname === myNickname);
      clients = data.clients;
      {
        const overlay = document.getElementById('reconnect-overlay');
        if (overlay) overlay.classList.add('hidden');
      }
      isRestoringSession = false; // Reset the restoring flag
      
      if (data.isInSelectionPhase) {
        startSelectionPhase();
        const myClientState = data.clients.find(c => c.nickname === myNickname);
        if (myClientState && myClientState.lockedCharacterId) {
          selectedCharacterLocally = characters.find(c => c.id === myClientState.lockedCharacterId);
          isMySelectionLocked = true;
          mySecretCharacter = selectedCharacterLocally;
          lockCharacterBtn.disabled = true;
          lockCharacterBtn.textContent = 'Seçildi ve Kilitlendi';
          showPreviewDetails(selectedCharacterLocally);
          // Highlight selected character card in grid visually after rendering
          setTimeout(() => {
            document.querySelectorAll('.select-card').forEach(c => {
              c.classList.add('locked');
              if (c.dataset.id === selectedCharacterLocally.id) {
                c.classList.add('active');
              } else {
                c.style.opacity = '0.5';
              }
            });
          }, 100);
        }
      } else {
        // Restore game UI from local session
        const saved = localStorage.getItem('genshin_session');
        if (saved) {
          const sess = JSON.parse(saved);
          mySecretCharacter = sess.mySecretChar;
          opponentSecretCharacter = sess.oppSecretChar;
          const activeTeam = data.activeTeam !== undefined ? data.activeTeam : (data.hostTurn !== undefined ? (data.hostTurn ? 'A' : 'B') : null);
          isMyTurn = activeTeam ? (myPlayerInfo.team === activeTeam) : sess.isMyTurn;
          opponentName = sess.opponentName || 'Rakip';
          if (mySecretCharacter && opponentSecretCharacter) {
            launchGameBoard(false);
            if (data.turnEndTime) turnEndTime = data.turnEndTime;
            updateTurnUI(false);
          }
        }
      }
      saveSession(); // Save restored session state
      break;

    case 'game-cancelled':
      // Handled in processGameEvent now
      processGameEvent(data);
      break;

    case 'player-reconnecting':
    case 'tab-minimized':
      processGameEvent({ type: 'player-reconnecting', nickname: data.nickname });
      break;

    case 'player-reconnected':
    case 'tab-restored':
      processGameEvent({ type: 'player-reconnected', nickname: data.nickname });
      break;

    case 'sync-turn':
      {
        const activeTeam = data.activeTeam !== undefined ? data.activeTeam : (data.hostTurn !== undefined ? (data.hostTurn ? 'A' : 'B') : null);
        if (activeTeam) {
          isMyTurn = (myPlayerInfo.team === activeTeam);
          if (data.turnEndTime && data.turnEndTime > Date.now()) turnEndTime = data.turnEndTime;
          updateTurnUI(false);
          saveSession();
        }
      }
      break;

    case 'ping':
      // Host pinged - respond with pong
      if (conn && conn.open) conn.send({ type: 'pong' });
      break;

    case 'pong':
      // Keep-alive confirmed
      break;

    case 'chat':
      const isSelf = data.nickname === myNickname;
      if (!isSelf) {
        appendChatMessage(data.nickname, data.text, false, data.target === 'team');
      }
      break;
      
    default:
      processGameEvent(data);
      break;
  }
}

// Common logic (Used by both Host and Guest)
function processGameEvent(data) {
  switch (data.type) {
    case 'game-cancelled':
      const msg = `${data.nickname || 'Bir oyuncu'} odadan ayrıldı. Oyun sonlandırıldı.`;
      const modal = document.getElementById('game-cancelled-modal');
      const msgEl = document.getElementById('game-cancelled-message');
      if (modal && msgEl) {
        msgEl.textContent = msg;
        modal.classList.remove('hidden');
      } else {
        alert(msg);
        clearSession();
        window.location.reload();
      }
      break;

    case 'team-hover-char':
      if (gameMode === '2v2' && myPlayerInfo && data.team === myPlayerInfo.team && data.nickname !== myNickname) {
        document.querySelectorAll('.select-card').forEach(card => {
          if (card.dataset.id === data.characterId) {
            card.classList.add('teammate-hover');
            let badge = card.querySelector('.teammate-hover-badge');
            if (!badge) {
              badge = document.createElement('div');
              badge.className = 'teammate-hover-badge';
              card.appendChild(badge);
            }
            badge.textContent = `👀 ${data.nickname}`;
            badge.classList.remove('locked-badge');
          } else {
            card.classList.remove('teammate-hover');
            const badge = card.querySelector('.teammate-hover-badge');
            if (badge) badge.remove();
          }
        });
      }
      break;

    case 'ready-state':
      if (gameMode === '2v2' && myPlayerInfo && data.team === myPlayerInfo.team && data.nickname !== myNickname) {
        document.querySelectorAll('.select-card').forEach(card => {
          if (card.dataset.id === data.characterId) {
            card.classList.add('teammate-hover');
            card.classList.add('teammate-locked');
            let badge = card.querySelector('.teammate-hover-badge');
            if (!badge) {
              badge = document.createElement('div');
              badge.className = 'teammate-hover-badge';
              card.appendChild(badge);
            }
            badge.textContent = `🔒 ${data.nickname}`;
            badge.classList.add('locked-badge');
          } else {
            card.classList.remove('teammate-hover');
            card.classList.remove('teammate-locked');
            const badge = card.querySelector('.teammate-hover-badge');
            if (badge) badge.remove();
          }
        });
      }
      if (isHost) {
        const client = clients.find(c => c.nickname === data.nickname);
        if (client) client.lockedCharacterId = data.characterId;
        
        const maxPlayers = gameMode === '2v2' ? 4 : 2;
        const readyCount = clients.filter(c => c.lockedCharacterId).length;
        
        // Broadcast ready count to all guests for live display
        broadcast({ type: 'ready-count', readyCount, maxPlayers, lastReadyPlayer: data.nickname });
        
        // Update host's own UI
        if (gameMode === '2v2') {
          myReadyStatus.textContent = `${readyCount}/${maxPlayers}`;
          myReadyStatus.className = readyCount === maxPlayers ? 'text-green' : 'text-muted';
        } else {
          if (data.nickname !== myNickname) {
            opponentReadyStatus.textContent = 'Hazır!';
            opponentReadyStatus.className = 'text-green';
          }
        }
        
        const allReady = clients.length === maxPlayers && readyCount === maxPlayers;
        
        if (allReady) {
          if (selectionTimerInterval) clearInterval(selectionTimerInterval);
          
          let teamACharId, teamBCharId;
          
          if (gameMode === '2v2') {
             const teamA = clients.filter(c => c.team === 'A');
             const teamB = clients.filter(c => c.team === 'B');
             
             if (teamA.length < 2 || teamB.length < 2) {
               console.error('2v2: Takim dagitimi hatali!', clients);
               break;
             }
             
             teamACharId = teamA[0].lockedCharacterId === teamA[1].lockedCharacterId 
               ? teamA[0].lockedCharacterId 
               : (Math.random() < 0.5 ? teamA[0].lockedCharacterId : teamA[1].lockedCharacterId);
             teamBCharId = teamB[0].lockedCharacterId === teamB[1].lockedCharacterId 
               ? teamB[0].lockedCharacterId 
               : (Math.random() < 0.5 ? teamB[0].lockedCharacterId : teamB[1].lockedCharacterId);
          } else {
             teamACharId = clients.find(c => c.team === 'A').lockedCharacterId;
             teamBCharId = clients.find(c => c.team === 'B').lockedCharacterId;
          }
          
          const teamAChar = characters.find(c => c.id === teamACharId);
          const teamBChar = characters.find(c => c.id === teamBCharId);
          
          if (!teamAChar || !teamBChar) {
            console.error('2v2: Karakter bulunamadi!', teamACharId, teamBCharId);
            break;
          }
          
          const teamAStarts = Math.random() < 0.5;
          
          const exchangeData = {
            type: 'lock-exchange',
            teamAChar,
            teamBChar,
            teamAStarts
          };
          
          broadcast(exchangeData);
          processGameEvent(exchangeData); // process for host locally
        }
      }
      break;
      
    case 'player-reconnecting': {
      const chatMsg = document.createElement('div');
      chatMsg.className = 'system-message error reconnect-countdown-msg';
      chatMsg.dataset.nickname = data.nickname;
      
      let timeLeft = 60;
      chatMsg.textContent = `⏳ ${data.nickname} bağlantısı koptu, yeniden bağlanması bekleniyor (${timeLeft}sn)...`;
      
      if (chatMessages) {
        chatMessages.appendChild(chatMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
      
      const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          clearInterval(interval);
          if (isHost) {
            broadcast({ type: 'game-cancelled', reason: 'player-left', nickname: data.nickname });
          } else if (conn && conn.open) {
            conn.send({ type: 'game-cancelled', reason: 'player-left', nickname: data.nickname });
          }
          processGameEvent({ type: 'game-cancelled', reason: 'player-left', nickname: data.nickname });
        } else {
          chatMsg.textContent = `⏳ ${data.nickname} bağlantısı koptu, yeniden bağlanması bekleniyor (${timeLeft}sn)...`;
        }
      }, 1000);
      
      if (!window.reconnectIntervals) window.reconnectIntervals = {};
      window.reconnectIntervals[data.nickname] = interval;
      break;
    }

    case 'player-reconnected': {
      if (window.reconnectIntervals && window.reconnectIntervals[data.nickname]) {
        clearInterval(window.reconnectIntervals[data.nickname]);
        delete window.reconnectIntervals[data.nickname];
      }
      
      if (chatMessages) {
         const msgs = chatMessages.querySelectorAll('.reconnect-countdown-msg');
         msgs.forEach(msg => {
            if (msg.dataset.nickname === data.nickname) {
               msg.textContent = `⏳ ${data.nickname} dönüş yapıyor...`;
               msg.classList.remove('reconnect-countdown-msg');
            }
         });
      }

      const chatMsg2 = document.createElement('div');
      chatMsg2.className = 'system-message';
      chatMsg2.textContent = `✅ ${data.nickname} yeniden bağlandı!`;
      if (chatMessages) {
        chatMessages.appendChild(chatMsg2);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
      break;
    }
      
    case 'lock-exchange':
      if (myPlayerInfo.team === 'A') {
        mySecretCharacter = data.teamAChar;
        opponentSecretCharacter = data.teamBChar;
        isMyTurn = data.teamAStarts;
      } else {
        mySecretCharacter = data.teamBChar;
        opponentSecretCharacter = data.teamAChar;
        isMyTurn = !data.teamAStarts;
      }
      saveSession(); // Save state for potential reconnect
      launchGameBoard();
      if (isHost) {
        broadcast({ type: 'sync-turn', activeTeam: isMyTurn ? 'A' : 'B', hostTurn: isMyTurn, turnEndTime: turnEndTime });
      }
      break;
      
    case 'pass-turn':
      {
        const activeTeam = data.team === 'A' ? 'B' : 'A';
        isMyTurn = (myPlayerInfo.team === activeTeam);
        if (isHost) {
          turnEndTime = Date.now() + 60000;
          broadcast({ type: 'sync-turn', activeTeam: isMyTurn ? 'A' : 'B', hostTurn: isMyTurn, turnEndTime: turnEndTime });
        }
        updateTurnUI(isHost);
        saveSession();
      }
      break;
      
    case 'guess':
      if (isHost) {
        const charToCheck = (data.team === myPlayerInfo.team) ? opponentSecretCharacter : mySecretCharacter;
        const isCorrect = (data.characterId === charToCheck.id);
        
        const resultData = { type: 'guess-result', characterId: data.characterId, isCorrect, nickname: data.nickname, team: data.team };
        broadcast(resultData);
        processGameEvent(resultData); // process locally for host
      }
      break;
      
    case 'guess-result':
      handleGuessResolution(data.isCorrect, data.nickname, data.characterId, data.team);
      break;
      
    case 'play-again-request':
      // Show modal to everyone EXCEPT the requester
      if (data.requester !== myNickname) {
        playAgainModal.classList.remove('hidden');
      }
      // Host: add requester to accepts and broadcast the count
      if (isHost) {
        playAgainAccepts.add(data.requester);
        const maxPlayers = gameMode === '2v2' ? 4 : 2;
        broadcast({ type: 'play-again-count', count: playAgainAccepts.size, maxPlayers });
        // Process locally for host's own screen
        processGameEvent({ type: 'play-again-count', count: playAgainAccepts.size, maxPlayers });
      }
      break;
      
    case 'play-again-accept':
      if (isHost) {
        playAgainAccepts.add(data.nickname);
        const maxPlayers = gameMode === '2v2' ? 4 : 2;
        // Broadcast updated count to everyone
        broadcast({ type: 'play-again-count', count: playAgainAccepts.size, maxPlayers });
        processGameEvent({ type: 'play-again-count', count: playAgainAccepts.size, maxPlayers });
        
        if (playAgainAccepts.size >= maxPlayers) {
          const startMsg = { type: 'play-again-start' };
          broadcast(startMsg);
          processGameEvent(startMsg); // process locally
        }
      }
      break;

    case 'play-again-count': {
      const waiting = document.getElementById('play-again-waiting');
      const countText = document.getElementById('play-again-count-text');
      if (waiting) waiting.classList.remove('hidden');
      if (countText) countText.textContent = `${data.count}/${data.maxPlayers} hazır`;
      break;
    }

    case 'play-again-start':
      playAgainAccepts.clear();
      resetSelectionAndRestart();
      break;

    case 'play-again-reject':
      playAgainAccepts.clear();
      alert("Bir oyuncu tekrar oynama teklifini reddetti. Lobiye dönülüyor.");
      clearSession();
      window.location.reload();
      break;
  }
}

// Start Character Selection Phase
function startSelectionPhase() {
  selectedCharacterLocally = null;
  isMySelectionLocked = false;
  isOpponentSelectionLocked = false;
  selectionTimerVal = 30;
  // Always clear secret characters to prevent stale data from previous rounds
  mySecretCharacter = null;
  opponentSecretCharacter = null;
  
  saveSession();
  
  const is2v2 = gameMode === '2v2';
  const maxPlayers = is2v2 ? 4 : 2;
  
  if (isHost) {
    if (is2v2) {
      opponentName = 'Rakip Takım';
    } else {
      opponentName = clients.find(c => c.nickname !== myNickname)?.nickname || 'Rakip';
    }
  }

  // Update selection screen header labels - use existing DOM refs (don't replace innerHTML!)
  const myReadyLabelEl = document.getElementById('my-ready-label');
  const readySeparatorEl = document.getElementById('ready-separator');
  const opponentReadyLabelEl = document.getElementById('opponent-ready-label');
  
  if (is2v2) {
    // Unified ready counter mode
    if (myReadyLabelEl) myReadyLabelEl.textContent = 'Hazır:';
    myReadyStatus.textContent = `0/${maxPlayers}`;
    myReadyStatus.className = 'text-red';
    if (readySeparatorEl) readySeparatorEl.style.display = 'none';
    if (opponentReadyLabelEl) opponentReadyLabelEl.style.display = 'none';
    opponentReadyStatus.style.display = 'none';
  } else {
    // Individual status mode
    if (myReadyLabelEl) myReadyLabelEl.textContent = 'Sen:';
    myReadyStatus.textContent = 'Seçim Yapmadı';
    myReadyStatus.className = 'text-red';
    if (readySeparatorEl) readySeparatorEl.style.display = '';
    if (opponentReadyLabelEl) { opponentReadyLabelEl.style.display = ''; opponentReadyLabelEl.textContent = 'Rakip:'; }
    opponentReadyStatus.style.display = '';
    opponentReadyStatus.textContent = 'Seçim Yapıyor...';
    opponentReadyStatus.className = 'text-muted';
  }
  
  lockCharacterBtn.disabled = true;
  lockCharacterBtn.textContent = 'Karakteri Kilitle';
  
  renderSelectionGrid(characters);
  
  // Set default preview card detail
  showPreviewDetails(null);
  
  showScreen(selectionScreen);
  synth.playSuccess();
  
  // Start countdown timer
  if (selectionTimerInterval) clearInterval(selectionTimerInterval);
  selectionTimerText.textContent = selectionTimerVal;
  
  selectionTimerInterval = setInterval(() => {
    selectionTimerVal--;
    selectionTimerText.textContent = selectionTimerVal;
    
    if (selectionTimerVal <= 5) {
      synth.playTick();
    }
    
    if (selectionTimerVal <= 0) {
      clearInterval(selectionTimerInterval);
      autoLockRandomCharacter();
    }
  }, 1000);
}

// Render 48 Characters Selection Grid
function renderSelectionGrid(chars) {
  selectionGrid.innerHTML = '';
  // Sort alphabetically
  const sorted = [...chars].sort((a,b) => a.name.localeCompare(b.name, 'tr'));
  
  sorted.forEach(char => {
    const card = document.createElement('div');
    card.className = `select-card el-${char.element.toLowerCase()}`;
    card.dataset.id = char.id;
    
    const firstLetter = char.name.charAt(0);
    card.innerHTML = `
      <div class="select-card-el-badge" title="${char.element}"><img src="${elementIconSrc(char.element)}" class="element-icon-img" alt="${char.element}"></div>
      <div class="select-card-img-container">
        <img src="${imgSrc(char)}" onerror="this.style.display='none';" class="char-img">
        <div class="char-gfx">${firstLetter}</div>
      </div>
      <div class="select-card-name">${char.name}</div>
    `;
    
    // Select Action
    card.addEventListener('click', () => {
      if (isMySelectionLocked) return;
      
      // Remove active from others
      document.querySelectorAll('.select-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      selectedCharacterLocally = char;
      showPreviewDetails(char);
      lockCharacterBtn.disabled = false;
      synth.playTick();
      if (gameMode === '2v2' && myPlayerInfo && myPlayerInfo.team) {
        sendMessage({
          type: 'team-hover-char',
          characterId: char.id,
          nickname: myNickname,
          team: myPlayerInfo.team
        });
      }
    });
    
    selectionGrid.appendChild(card);
  });
}

// Show selection details on right preview card
function showPreviewDetails(char) {
  if (!char) {
    detailCharName.textContent = 'Karakter Seçin';
    detailCharElement.textContent = 'Element: -';
    detailCharWeapon.textContent = 'Silah: -';
    detailCharRegion.textContent = 'Bölge: -';
    detailCharGender.textContent = 'Cinsiyet: -';
    detailCardPreview.className = 'detail-card-preview';
    detailCardPreview.innerHTML = `<div class="preview-gfx">?</div>`;
    return;
  }
  
  const elClass = `el-${char.element.toLowerCase()}`;
  detailCardPreview.className = `detail-card-preview ${elClass}`;
  
  const firstLetter = char.name.charAt(0);
  detailCardPreview.innerHTML = `
    <img src="${imgSrc(char)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" class="preview-img">
    <div class="preview-gfx">${firstLetter}</div>
  `;
  
  const trElement = elementTranslations[char.element] || char.element;
  
  detailCharName.textContent = char.name;
  detailCharElement.textContent = `Bu karakter ${trElement} elementini kullanıyor.`;
  detailCharWeapon.textContent = `Silah olarak ${char.weapon} tercih ediyor.`;
  detailCharRegion.textContent = `Kökeni ${char.region} topraklarına dayanıyor.`;
  detailCharGender.textContent = `Kendisi ${char.gender} bir kahramandır.`;
}

// Lock Local Choice
lockCharacterBtn.addEventListener('click', () => {
  if (!selectedCharacterLocally || isMySelectionLocked) return;
  lockMySelection(selectedCharacterLocally);
});

function sendMessage(data) {
  if (isHost) {
    if (data.type === 'chat' && data.target === 'team') {
      // Host team chat - only send to guests on the same team
      clients.filter(c => c.team === myPlayerInfo.team && c.conn).forEach(c => sendData(c.conn, data));
    } else {
      broadcast(data);
    }
    processGameEvent(data);
  } else {
    if (conn && conn.open) conn.send(data);
  }
}

function lockMySelection(char) {
  mySecretCharacter = char; // Temporary local state, overridden by host
  isMySelectionLocked = true;
  
  lockCharacterBtn.disabled = true;
  lockCharacterBtn.textContent = 'Seçildi ve Kilitlendi';
  
  // Disable selection clicks visually
  document.querySelectorAll('.select-card').forEach(c => {
    c.classList.add('locked');
    if (c.dataset.id !== char.id) {
      c.style.opacity = '0.5';
    }
  });
  
  // In 1v1: show personal ready status. In 2v2: host's ready-count broadcast handles the counter
  if (gameMode !== '2v2') {
    myReadyStatus.textContent = 'Hazır!';
    myReadyStatus.className = 'text-green';
  }
  
  sendMessage({
    type: 'ready-state',
    isReady: true,
    characterId: char.id,
    nickname: myNickname,
    team: myPlayerInfo ? myPlayerInfo.team : null
  });
}

// Coerced lock when timer hits 0
function autoLockRandomCharacter() {
  if (isMySelectionLocked) return;
  
  // If player hasn't selected any, pick random
  if (!selectedCharacterLocally) {
    selectedCharacterLocally = characters[Math.floor(Math.random() * characters.length)];
  }
  
  lockMySelection(selectedCharacterLocally);
}

// Wait for Host to calculate team characters and trigger lock-exchange

// Trigger active game board
function launchGameBoard(resetTimer = true) {
  // Update header info
  gameRoomId.textContent = currentRoomId;
  opponentNameLabel.textContent = gameMode === '2v2' ? 'Rakip Takım' : opponentName;
  
  // Render Guess Board
  renderBoard(characters);
  
  // Render My Secret Badge
  if (mySecretCharacter) {
    renderSecretCharacter(mySecretCharacter);
  }
  
  // Populate Guess List
  populateGuessSelect(characters);
  
  // Manage team tab visibility
  const teamTab = document.getElementById('chat-tab-team');
  if (teamTab) {
    if (gameMode === '2v2') {
      teamTab.classList.remove('hidden');
    } else {
      teamTab.classList.add('hidden');
      const globalTab = document.getElementById('chat-tab-global');
      if (globalTab) {
        globalTab.classList.add('active');
        teamTab.classList.remove('active');
      }
    }
  }

  chatMessages.innerHTML = `<div class="system-message">Oyun başladı! ${gameMode === '2v2' ? 'Takımlı Mod' : 'Rakibin: ' + opponentName}. Sıra: ${isMyTurn ? 'Sen' : opponentName}.</div>`;
  updateTurnUI(resetTimer);
  
  showScreen(gameScreen);
  synth.playVictory();
}

// Render Character Card Grid
function renderBoard(chars) {
  charactersGrid.innerHTML = '';
  const sorted = [...chars].sort((a, b) => a.name.localeCompare(b.name, 'tr'));
  
  let eliminatedState = [];
  const saved = localStorage.getItem('genshin_session');
  if (saved) {
    try { eliminatedState = JSON.parse(saved).eliminatedCards || []; } catch(e){}
  }

  sorted.forEach(char => {
    const card = document.createElement('div');
    card.className = 'card';
    if (eliminatedState.includes(char.id)) {
      card.classList.add('eliminated');
    }
    card.dataset.id = char.id;
    
    const elClass = `el-${char.element.toLowerCase()}`;
    const firstLetter = char.name.charAt(0);
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front ${elClass}">
          <div class="element-badge" title="${char.element}"><img src="${elementIconSrc(char.element)}" class="element-icon-img" alt="${char.element}"></div>
          <div class="card-front-img-container">
            <img src="${imgSrc(char)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" class="char-img">
            <div class="character-avatar-gfx">${firstLetter}</div>
          </div>
          <div class="weapon-badge">${char.weapon}</div>
          <div class="gender-badge">${char.gender}</div>
          <div class="card-info">
            <span class="char-name">${char.name}</span>
            <span class="char-region">${char.region}</span>
          </div>
        </div>
        <div class="card-back">
          <div class="card-back-img-wrapper">
            <img src="${imgSrc(char)}" onerror="this.style.display='none';" class="char-img">
            <div class="eliminated-overlay"></div>
          </div>
          <div class="card-back-info">
            <span class="char-name-back">${char.name}</span>
          </div>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      if (card.classList.contains('eliminated')) {
        card.classList.remove('eliminated');
      } else {
        card.classList.add('eliminated');
      }
      synth.playTick();
      saveSession(); // Save eliminated state immediately
    });
    
    charactersGrid.appendChild(card);
  });
}

// Render Secret Character Panel
function renderSecretCharacter(char) {
  const elClass = `el-${char.element.toLowerCase()}`;
  mySecretCardContainer.innerHTML = `
    <div class="mini-char-card">
      <div class="card-front ${elClass}" style="position:relative">
        <div class="element-badge" title="${char.element}"><img src="${elementIconSrc(char.element)}" class="element-icon-img" alt="${char.element}"></div>
        <div class="card-front-img-container">
          <img src="${imgSrc(char)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" class="char-img">
          <div class="character-avatar-gfx">${char.name.charAt(0)}</div>
        </div>
        <div class="weapon-badge">${char.weapon}</div>
        <div class="gender-badge">${char.gender}</div>
        <div class="card-info">
          <span class="char-name">${char.name}</span>
          <span class="char-region">${char.region}</span>
        </div>
      </div>
    </div>
  `;
}

// Populate Guess Dropdown
function populateGuessSelect(chars) {
  guessSelect.innerHTML = '<option value="" disabled selected>Karakter seç...</option>';
  const sorted = [...chars].sort((a,b) => a.name.localeCompare(b.name, 'tr'));
  sorted.forEach(char => {
    const opt = document.createElement('option');
    opt.value = char.id;
    opt.textContent = char.name;
    guessSelect.appendChild(opt);
  });
}

// Send Turn Pass
passTurnBtn.addEventListener('click', () => {
  if (!isMyTurn) return;
  isMyTurn = false;
  updateTurnUI();
  sendMessage({ type: 'pass-turn', team: myPlayerInfo.team });
});

// Turn UI update helper
function updateTurnUI(resetTimer = true) {
  if (activeTurnTimerInterval) clearInterval(activeTurnTimerInterval);
  if (resetTimer || !turnEndTime || turnEndTime < Date.now()) {
    turnEndTime = Date.now() + 60000;
  }
  currentTurnTime = Math.max(0, Math.ceil((turnEndTime - Date.now()) / 1000));
  
  const timerTextEl = document.getElementById('turn-timer-text');

  if (isMyTurn) {
    turnBadge.classList.add('active-turn');
    turnStatusText.textContent = 'SENİN SIRAN';
    passTurnBtn.disabled = false;
    openGuessModalBtn.disabled = false;
    if (timerTextEl) {
      timerTextEl.classList.remove('hidden', 'timer-warning');
      timerTextEl.textContent = `(${currentTurnTime}s)`;
    }
  } else {
    turnBadge.classList.remove('active-turn');
    turnStatusText.textContent = `${opponentName.toUpperCase()} SIRASINDA`;
    passTurnBtn.disabled = true;
    openGuessModalBtn.disabled = true;
    if (timerTextEl) {
      timerTextEl.classList.add('hidden');
    }
  }

  activeTurnTimerInterval = setInterval(() => {
    currentTurnTime = Math.max(0, Math.ceil((turnEndTime - Date.now()) / 1000));
    if (timerTextEl && isMyTurn) {
      timerTextEl.textContent = `(${currentTurnTime}s)`;
      if (currentTurnTime <= 10) {
        timerTextEl.classList.add('timer-warning');
      } else {
        timerTextEl.classList.remove('timer-warning');
      }
    }

    if (currentTurnTime <= 0) {
      clearInterval(activeTurnTimerInterval);
      if (isMyTurn) {
        isMyTurn = false;
        updateTurnUI(true);
        sendMessage({ type: 'pass-turn', team: myPlayerInfo.team });
      }
    }
  }, 250);
}

// Chat submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  
  // Determine target from active tab
  const activeTab = document.querySelector('.chat-tab.active');
  const target = activeTab && activeTab.id === 'chat-tab-team' ? 'team' : 'global';
  
  appendChatMessage(myNickname, text, true, target === 'team');
  
  sendMessage({
    type: 'chat',
    text: text,
    target: target,
    nickname: myNickname
  });
  
  chatInput.value = '';
});

// Chat rendering bubble helper
function appendChatMessage(senderName, text, isSelf, isTeamMsg = false) {
  const msgClass = isSelf ? 'self' : 'other';
  const teamClass = isTeamMsg ? ' team-msg' : '';
  
  // Find sender's team from clients list
  const senderClient = clients.find(c => c.nickname === senderName);
  const senderTeam = senderClient ? senderClient.team : null;
  const teamColorClass = senderTeam ? ` team-${senderTeam.toLowerCase()}` : '';
  
  const timestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  
  const msgElement = document.createElement('div');
  msgElement.className = `chat-msg ${msgClass}${teamClass}${teamColorClass}`;
  
  const teamLabel = isTeamMsg ? ' <span class="team-chat-badge">🔒 Takım</span>' : '';
  msgElement.innerHTML = `
    <span class="msg-sender">${senderName}${teamLabel}</span>
    <div class="msg-bubble">
      <span>${text}</span>
      <span class="msg-time">${timestamp}</span>
    </div>
  `;
  
  chatMessages.appendChild(msgElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Modal open/close controls
openGuessModalBtn.addEventListener('click', () => {
  if (!isMyTurn) return;
  guessSelect.value = "";
  guessModal.classList.remove('hidden');
  synth.playTick();
});

closeGuessModalBtn.addEventListener('click', () => {
  guessModal.classList.add('hidden');
  synth.playTick();
});

cancelGuessBtn.addEventListener('click', () => {
  guessModal.classList.add('hidden');
  synth.playTick();
});

submitGuessBtn.addEventListener('click', () => {
  const selectedCharId = guessSelect.value;
  if (!selectedCharId) return;
  
  sendMessage({
    type: 'guess',
    characterId: selectedCharId,
    nickname: myNickname,
    team: myPlayerInfo.team
  });
  
  guessModal.classList.add('hidden');
});

// Handle Guess Result (Both Sides)
function handleGuessResolution(isCorrect, guesserName, guessedCharId, team) {
  const guessedChar = characters.find(c => c.id === guessedCharId);
  const guessedName = guessedChar ? guessedChar.name : 'Bilinmeyen';
  const isMyTeam = (team === myPlayerInfo.team);
  
  if (isCorrect) {
    if (activeTurnTimerInterval) clearInterval(activeTurnTimerInterval);
    const timerTextEl = document.getElementById('turn-timer-text');
    if (timerTextEl) timerTextEl.classList.add('hidden');

    const stats = getPlayerStats();
    stats.totalMatches = (stats.totalMatches || 0) + 1;

    if (isMyTeam) {
      stats.wins = (stats.wins || 0) + 1;
      stats.winStreak = (stats.winStreak || 0) + 1;
      if (stats.winStreak > (stats.bestStreak || 0)) stats.bestStreak = stats.winStreak;

      gameOverTitle.textContent = 'TEBRİKLER!';
      gameOverTitle.className = 'game-over-title win';
      gameOverMessage.textContent = `Takımınızdan ${guesserName}, rakibin gizli karakterini doğru tahmin etti!`;
    } else {
      stats.winStreak = 0;

      gameOverTitle.textContent = 'KAYBETTİN...';
      gameOverTitle.className = 'game-over-title lose';
      gameOverMessage.textContent = `${guesserName} sizin karakterinizi doğru tahmin etti!`;
    }
    savePlayerStats(stats);
    updateCareerStatsUI();
    
    const secretCharShow = isMyTeam ? opponentSecretCharacter : mySecretCharacter;
    const elClass = `el-${secretCharShow.element.toLowerCase()}`;
    opponentSecretCardDisplay.innerHTML = `
      <div class="mini-char-card" style="margin: 0 auto;">
        <div class="card-front ${elClass}" style="position:relative">
          <div class="element-badge" title="${secretCharShow.element}"><img src="${elementIconSrc(secretCharShow.element)}" class="element-icon-img" alt="${secretCharShow.element}"></div>
          <div class="card-front-img-container">
            <img src="${imgSrc(secretCharShow)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" class="char-img">
            <div class="character-avatar-gfx">${secretCharShow.name.charAt(0)}</div>
          </div>
          <div class="weapon-badge">${secretCharShow.weapon}</div>
          <div class="gender-badge">${secretCharShow.gender}</div>
          <div class="card-info">
            <span class="char-name">${secretCharShow.name}</span>
            <span class="char-region">${secretCharShow.region}</span>
          </div>
        </div>
      </div>
    `;
    
    gameOverScreen.classList.remove('hidden');
  } else {
    const logDiv = document.createElement('div');
    logDiv.className = 'system-message error';
    logDiv.innerHTML = `❌ <strong>${guesserName}</strong> yanlış tahminde bulundu (${guessedName})! Sıra devredildi.`;
    chatMessages.appendChild(logDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Auto swap turns
    isMyTurn = !isMyTeam;
    updateTurnUI();
  }
}

// Restart game round
playAgainBtn.addEventListener('click', () => {
  // Show waiting state immediately for the requester
  playAgainBtn.textContent = 'Talep Gönderildi...';
  playAgainBtn.disabled = true;
  const waiting = document.getElementById('play-again-waiting');
  const countText = document.getElementById('play-again-count-text');
  const maxPlayers = gameMode === '2v2' ? 4 : 2;
  if (waiting) waiting.classList.remove('hidden');
  if (countText) countText.textContent = `1/${maxPlayers} hazır`;
  
  sendMessage({ type: 'play-again-request', requester: myNickname });
});

acceptPlayAgainBtn.addEventListener('click', () => {
  playAgainModal.classList.add('hidden');
  // Disable Tekrar Oyna so player can't double-click
  playAgainBtn.disabled = true;
  playAgainBtn.textContent = 'Kabul Edildi...';
  // Show waiting state for the accepter too
  const waiting = document.getElementById('play-again-waiting');
  if (waiting) waiting.classList.remove('hidden');
  sendMessage({ type: 'play-again-accept', nickname: myNickname });
});

rejectPlayAgainBtn.addEventListener('click', () => {
  playAgainModal.classList.add('hidden');
  clearSession();
  sendMessage({ type: 'play-again-reject' });
});

function resetSelectionAndRestart() {
  gameOverScreen.classList.add('hidden');
  playAgainBtn.textContent = 'Tekrar Oyna';
  playAgainBtn.disabled = false;
  
  // Clear the board completely so saveSession doesn't see old eliminated cards
  charactersGrid.innerHTML = '';
  
  // Hide waiting indicator
  const waiting = document.getElementById('play-again-waiting');
  if (waiting) waiting.classList.add('hidden');
  
  // Reset modal text for next time
  playAgainModal.classList.add('hidden');
  
  // Clear old game state from memory
  mySecretCharacter = null;
  opponentSecretCharacter = null;
  selectedCharacterLocally = null;
  isMySelectionLocked = false;
  isOpponentSelectionLocked = false;
  
  // Clear old eliminated cards and characters from localStorage
  const saved = localStorage.getItem('genshin_session');
  if (saved) {
    try {
      const sess = JSON.parse(saved);
      sess.eliminatedCards = [];
      sess.mySecretChar = null;
      sess.oppSecretChar = null;
      localStorage.setItem('genshin_session', JSON.stringify(sess));
    } catch(e) {}
  }
  
  if (isHost) {
    clients.forEach(c => c.lockedCharacterId = null);
  }
  
  startSelectionPhase();
}

// Exit Lobby
exitLobbyBtn.addEventListener('click', () => {
  if (isHost) {
    broadcast({ type: 'game-cancelled', reason: 'host-left', nickname: myNickname });
  } else if (conn && conn.open) {
    conn.send({ type: 'game-cancelled', reason: 'player-left', nickname: myNickname });
  }
  clearSession();
  window.location.reload();
});

// Leave / Close Room
leaveRoomBtn.addEventListener('click', () => {
  if (isHost) {
    broadcast({ type: 'game-cancelled', reason: 'host-left', nickname: myNickname });
  } else if (conn && conn.open) {
    conn.send({ type: 'game-cancelled', reason: 'player-left', nickname: myNickname });
  }
  clearSession();
  window.location.reload();
});

// Disconnection Handling
function handleOpponentDisconnect() {
  console.log('Opponent disconnected');
  conn = null;
  
  if (selectionTimerInterval) clearInterval(selectionTimerInterval);
  
  const msg = `⚠️ <strong>${opponentName || 'Rakip'}</strong> bağlantıyı kesti! Yeniden bağlanılıyor...`;
  
  const logDiv = document.createElement('div');
  logDiv.className = 'system-message error';
  logDiv.innerHTML = msg;
  chatMessages.appendChild(logDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  synth.playError();
  
  peerStatus.textContent = 'Rakip ayrıldı. Yeni oyuncu bekleniyor...';
  displayRoomId.textContent = currentRoomId;
  showScreen(waitingScreen);
}

// Ack Game Cancelled
const ackGameCancelledBtn = document.getElementById('ack-game-cancelled-btn');
if (ackGameCancelledBtn) {
  ackGameCancelledBtn.addEventListener('click', () => {
    clearSession();
    window.location.reload();
  });
}
// Chat Tab Toggles
const chatTabGlobal = document.getElementById('chat-tab-global');
const chatTabTeam = document.getElementById('chat-tab-team');

if (chatTabGlobal && chatTabTeam) {
  chatTabGlobal.addEventListener('click', (e) => {
    e.target.classList.add('active');
    chatTabTeam.classList.remove('active');
  });

  chatTabTeam.addEventListener('click', (e) => {
    if (gameMode !== '2v2') return;
    e.target.classList.add('active');
    chatTabGlobal.classList.remove('active');
  });
}

// Mobile & Tablet Lobby Tab Switcher Logic
function initMobileLobbySwitcher() {
  const navButtons = document.querySelectorAll('.mobile-nav-btn');
  const heroCard = document.getElementById('lobby-hero-card') || document.querySelector('.center-hero-card');
  const triviaCard = document.getElementById('daily-trivia-widget');

  if (!navButtons.length || !heroCard || !triviaCard) return;

  // Initial state for tablet/mobile screen sizes (< 1100px)
  if (window.innerWidth < 1100) {
    triviaCard.classList.add('mobile-hidden');
    heroCard.classList.remove('mobile-hidden');
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.target;
      if (target === 'lobby') {
        heroCard.classList.remove('mobile-hidden');
        triviaCard.classList.add('mobile-hidden');
      } else if (target === 'trivia') {
        heroCard.classList.add('mobile-hidden');
        triviaCard.classList.remove('mobile-hidden');
      }
      synth.playTick();
    });
  });

  // Handle screen resize smoothly
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1100) {
      heroCard.classList.remove('mobile-hidden');
      triviaCard.classList.remove('mobile-hidden');
    } else {
      const activeBtn = document.querySelector('.mobile-nav-btn.active');
      if (activeBtn && activeBtn.dataset.target === 'trivia') {
        heroCard.classList.add('mobile-hidden');
        triviaCard.classList.remove('mobile-hidden');
      } else {
        heroCard.classList.remove('mobile-hidden');
        triviaCard.classList.add('mobile-hidden');
      }
    }
  });
}

// Initialize Mobile Switcher on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileLobbySwitcher);
} else {
  initMobileLobbySwitcher();
}
