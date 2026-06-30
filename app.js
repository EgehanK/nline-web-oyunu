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
// LOCALIZATION (TR / EN) SYSTEM
// ==========================================================================
let currentLang = localStorage.getItem('genshin_lang') || 'tr';

const i18nDict = {
  tr: {
    appSubtitle: "Çok Oyunculu Tahmin Oyunu (P2P)",
    labelNickname: "Kullanıcı Adın",
    placeholderNickname: "Gezgin...",
    labelGameMode: "Oyun Modu",
    mode2v2: "2v2 Takımlı",
    btnCreateRoom: "Yeni Oda Oluştur",
    textOr: "veya",
    placeholderRoomCode: "ODA KODU (örn. FG49)",
    btnJoin: "Katıl",
    btnHowToPlay: "Nasıl Oynanır?",
    titleHowToPlay: "Nasıl Oynanır?",
    step1: "Kendine gizli bir karakter seç.",
    step2: 'Rakibine "Kılıç mı kullanıyor?", "Fontaine\'den mi?" gibi Evet/Hayır soruları sor.',
    step3: "Aldığın cevaplara göre uymayan kartları ele (üzerine tıkla).",
    step4: "Rakibinin karakterini doğru tahmin eden ilk kişi kazanır!",
    btnGotIt: "Anladım",
    titleRoomCreated: "Oda Kuruldu!",
    descWaiting: "Diğer oyuncuların katılması bekleniyor...",
    labelRoomCode: "ODA KODU:",
    titleTeamA: "Takım A (Mavi)",
    titleTeamB: "Takım B (Kırmızı)",
    waitingPlayerSlot: "Bekleniyor...",
    mode1v1: "1v1 Normal",
    labelRoomHeader: "Oda:",
    labelOpponentHeader: "Rakip:",
    statusWaitingOpponent: "Bekleniyor...",
    btnStartGame: "Oyunu Başlat!",
    btnLeaveRoom: "Odayı Kapat",
    titleCharSelection: "Karakter Seçimi",
    labelTime: "Süre:",
    labelYou: "Sen:",
    statusNotSelected: "Seçim Yapmadı",
    labelOpponent: "Rakip:",
    statusSelecting: "Seçim Yapıyor...",
    titleCharDetails: "Karakter Detayları",
    defaultCharName: "Karakter Seçin",
    btnLockChar: "Karakteri Kilitle",
    titleYourChar: "Senin Karakterin",
    descYourChar: "Rakibin bu karakteri tahmin etmeye çalışıyor:",
    btnGuess: "✦ TAHMİN ET ✦",
    btnPassTurn: "Sırayı Devret",
    titleChat: "Sohbet",
    tabGlobal: "Genel",
    tabTeam: "Takım",
    sysMsgStart: "Oyun başladı! Sırayla birbirinize sorular sorun. Karakter özelliklerine göre sol taraftaki kartları eleyebilirsiniz.",
    placeholderChat: "Sorunu sor veya yazış...",
    btnSend: "Gönder",
    titleGuessModal: "Karakter Tahmini",
    descGuessModal: "Rakibinin gizli karakterinin kim olduğunu düşünüyorsun? Dikkat et, yanlış tahmin sırayı rakibine geçirecektir!",
    labelSelectChar: "Karakter Seç:",
    btnSubmitGuess: "Tahminimi Gönder",
    btnCancel: "İptal",
    titleCongrats: "TEBRİKLER!",
    msgCorrectGuess: "Rakibinin karakterini doğru tahmin ettin!",
    labelOpponentSecret: "Rakibinin Gizli Karakteri:",
    btnPlayAgain: "Tekrar Oyna",
    btnReturnLobby: "Odalara Dön",
    waitingPlayers: "Oyuncular bekleniyor...",
    titlePlayAgain: "Tekrar Oynayalım Mı?",
    descPlayAgain: "Rakibin yeni bir tur oynamak istiyor, kabul ediyor musun?",
    btnAccept: "Evet, Başla!",
    btnReject: "Hayır, Çık",
    titleDisconnected: "Bağlantı Koptu",
    msgPlayerLeft: "Bir oyuncu odadan ayrıldı.",
    btnOk: "Tamam"
  },
  en: {
    appSubtitle: "Multiplayer Guessing Game (P2P)",
    labelNickname: "Your Nickname",
    placeholderNickname: "Traveler...",
    labelGameMode: "Game Mode",
    mode2v2: "2v2 Team",
    btnCreateRoom: "Create New Room",
    textOr: "or",
    placeholderRoomCode: "ROOM CODE (e.g. FG49)",
    btnJoin: "Join",
    btnHowToPlay: "How to Play?",
    titleHowToPlay: "How to Play?",
    step1: "Select a secret character for yourself.",
    step2: 'Ask Yes/No questions like "Does they use a sword?", "Are they from Fontaine?".',
    step3: "Eliminate mismatching cards by clicking on them based on the answers.",
    step4: "The first player to correctly guess the opponent's character wins!",
    btnGotIt: "Got It",
    titleRoomCreated: "Room Created!",
    descWaiting: "Waiting for other players to join...",
    labelRoomCode: "ROOM CODE:",
    titleTeamA: "Team A (Blue)",
    titleTeamB: "Team B (Red)",
    waitingPlayerSlot: "Waiting...",
    mode1v1: "1v1 Classic",
    labelRoomHeader: "Room:",
    labelOpponentHeader: "Opponent:",
    statusWaitingOpponent: "Waiting...",
    btnStartGame: "Start Game!",
    btnLeaveRoom: "Close Room",
    titleCharSelection: "Character Selection",
    labelTime: "Time:",
    labelYou: "You:",
    statusNotSelected: "Not Selected",
    labelOpponent: "Opponent:",
    statusSelecting: "Selecting...",
    titleCharDetails: "Character Details",
    defaultCharName: "Select Character",
    btnLockChar: "Lock Character",
    titleYourChar: "Your Character",
    descYourChar: "Opponent is trying to guess this character:",
    btnGuess: "✦ GUESS WHO ✦",
    btnPassTurn: "Pass Turn",
    titleChat: "Chat",
    tabGlobal: "Global",
    tabTeam: "Team",
    sysMsgStart: "Game started! Take turns asking questions and eliminate cards on the left board.",
    placeholderChat: "Ask a question or chat...",
    btnSend: "Send",
    titleGuessModal: "Character Guess",
    descGuessModal: "Who do you think your opponent's secret character is? Be careful, a wrong guess passes your turn!",
    labelSelectChar: "Select Character:",
    btnSubmitGuess: "Submit Guess",
    btnCancel: "Cancel",
    titleCongrats: "CONGRATULATIONS!",
    msgCorrectGuess: "You correctly guessed your opponent's character!",
    labelOpponentSecret: "Opponent's Secret Character:",
    btnPlayAgain: "Play Again",
    btnReturnLobby: "Return to Lobby",
    waitingPlayers: "Waiting for players...",
    titlePlayAgain: "Play Again?",
    descPlayAgain: "Your opponent wants to play another round, do you accept?",
    btnAccept: "Yes, Start!",
    btnReject: "No, Leave",
    titleDisconnected: "Disconnected",
    msgPlayerLeft: "A player has left the room.",
    btnOk: "OK"
  }
};

function translateWeapon(weaponTr) {
  if (currentLang === 'tr') return weaponTr;
  const map = {
    "Kılıç": "Sword",
    "Çift Elli Kılıç": "Claymore",
    "Katalizör": "Catalyst",
    "Yay": "Bow",
    "Mızrak": "Polearm"
  };
  return map[weaponTr] || weaponTr;
}

function translateGender(genderTr) {
  if (currentLang === 'tr') return genderTr;
  return genderTr === 'Erkek' ? 'Male' : 'Female';
}

function translateElement(elementEn) {
  if (currentLang === 'en') return elementEn;
  return elementTranslations[elementEn] || elementEn;
}

function applyTranslations() {
  const dict = i18nDict[currentLang] || i18nDict.tr;
  
  // Update toggle button text
  const toggleTextEl = document.getElementById('lang-toggle-text');
  if (toggleTextEl) {
    toggleTextEl.textContent = currentLang === 'tr' ? 'EN' : 'TR';
  }

  // Update text content elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update waiting screen (lobby room) if active
  const waitingScreenEl = document.getElementById('waiting-screen');
  if (waitingScreenEl && !waitingScreenEl.classList.contains('hidden')) {
    updateLobbyUI();
  }

  // Re-render selection screen details if active
  const selectionScreenEl = document.getElementById('selection-screen');
  if (selectionScreenEl && selectionScreenEl.classList.contains('active')) {
    if (selectedCharacterLocally) {
      showPreviewDetails(selectedCharacterLocally);
    }
    if (typeof updateSelectionHeaders === 'function') {
      updateSelectionHeaders();
    }
  }
  
  // Update opponent name element if present
  const oppNameEl = document.getElementById('opponent-name');
  if (oppNameEl) {
    if (opponentName && opponentName !== 'Rakip' && opponentName !== 'Opponent' && opponentName !== 'Rakip...' && opponentName !== 'Waiting...' && opponentName !== 'Bekleniyor...') {
      oppNameEl.textContent = gameMode === '2v2' ? (currentLang === 'en' ? 'Opposing Team' : 'Rakip Takım') : opponentName;
    } else {
      oppNameEl.textContent = currentLang === 'en' ? 'Waiting...' : 'Bekleniyor...';
    }
  }

  // Update turn text and guess select if game screen is active
  const gameScreenEl = document.getElementById('game-screen');
  if (gameScreenEl && gameScreenEl.classList.contains('active')) {
    updateTurnUI(true);
    populateGuessSelect(characters);
    renderBoard(characters);
    if (mySecretCharacter && typeof renderSecretCharacter === 'function') {
      renderSecretCharacter(mySecretCharacter);
    }
    const oppLabel = document.getElementById('opponent-name-label');
    if (oppLabel) {
      if (gameMode === '2v2') {
        oppLabel.textContent = currentLang === 'en' ? 'Opposing Team:' : 'Rakip Takım:';
      } else {
        oppLabel.textContent = currentLang === 'en' ? 'Opponent:' : 'Rakip:';
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'tr' ? 'en' : 'tr';
      localStorage.setItem('genshin_lang', currentLang);
      applyTranslations();
    });
  }
  applyTranslations();
});



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

// Auto-restore session from localStorage or URL fallback
let isRestoringSession = false;
let savedSessionStr = localStorage.getItem('genshin_session');

// Fallback: If localStorage is wiped (e.g. In-App Browser), try to restore from URL params
const urlParams = new URLSearchParams(window.location.search);
if (!savedSessionStr && urlParams.get('room') && urlParams.get('nick')) {
  savedSessionStr = JSON.stringify({
    nickname: urlParams.get('nick'),
    roomId: urlParams.get('room'),
    isHost: urlParams.get('host') === 'true',
    gameMode: urlParams.get('mode') || '1v1'
  });
}

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
        opponentName = sess.opponentName || 'Rakip';

        if (sess.isInGame || (mySecretCharacter && opponentSecretCharacter)) {
          showScreen(gameScreen);
          if (mySecretCharacter && opponentSecretCharacter) launchGameBoard();
        } else if (sess.isInSelectionPhase) {
          startSelectionPhase();
        } else {
          showScreen(waitingScreen);
        }
        initPeer(currentRoomId);
      } else {
        mySecretCharacter = sess.mySecretChar;
        opponentSecretCharacter = sess.oppSecretChar;
        isMyTurn = sess.isMyTurn;
        opponentName = sess.opponentName || 'Rakip';

        if (sess.isInGame || (mySecretCharacter && opponentSecretCharacter)) {
          showScreen(gameScreen);
          if (mySecretCharacter && opponentSecretCharacter) launchGameBoard();
        } else if (sess.isInSelectionPhase) {
          startSelectionPhase();
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
  isRestoringSession = false;
  mySecretCharacter = null;
  opponentSecretCharacter = null;
  selectedCharacterLocally = null;
  isMySelectionLocked = false;
  isOpponentSelectionLocked = false;
  gameMode = document.querySelector('input[name="game-mode"]:checked').value;
  currentRoomId = generateRoomId();
  
  // Save nickname for next visit
  localStorage.setItem('genshin_nickname', myNickname);
  
  myPlayerInfo = { peerId: 'host', nickname: myNickname, team: 'A', isHost: true };
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
  isRestoringSession = false;
  mySecretCharacter = null;
  opponentSecretCharacter = null;
  selectedCharacterLocally = null;
  isMySelectionLocked = false;
  isOpponentSelectionLocked = false;
  currentRoomId = roomId;
  displayRoomId.textContent = currentRoomId;
  gameRoomId.textContent = currentRoomId;
  
  // Save nickname for next visit
  localStorage.setItem('genshin_nickname', myNickname);
  saveSession();
  
  initPeer(); // random ID for Guest
});

function updateLobbyUI() {
  const is2v2 = gameMode === '2v2';
  document.getElementById('slot-a2').classList.toggle('hidden', !is2v2);
  document.getElementById('slot-b2').classList.toggle('hidden', !is2v2);
  
  const teamA = clients.filter(c => c.team === 'A');
  const teamB = clients.filter(c => c.team === 'B');
  const waitingText = currentLang === 'en' ? 'Waiting...' : 'Bekleniyor...';
  
  // Fill A slots
  const aList = document.getElementById('team-a-list').querySelectorAll('.player-slot');
  aList.forEach((slot, i) => {
    if (i === 1 && !is2v2) return;
    if (teamA[i]) {
      slot.textContent = teamA[i].nickname;
      slot.className = 'player-slot filled' + (teamA[i].isHost ? ' host' : '');
    } else {
      slot.textContent = waitingText;
      slot.className = 'player-slot empty' + (i===1 && !is2v2 ? ' hidden' : '');
    }
  });

  // Fill B slots
  const bList = document.getElementById('team-b-list').querySelectorAll('.player-slot');
  bList.forEach((slot, i) => {
    if (i === 1 && !is2v2) return;
    if (teamB[i]) {
      slot.textContent = teamB[i].nickname;
      slot.className = 'player-slot filled' + (teamB[i].isHost ? ' host' : '');
    } else {
      slot.textContent = waitingText;
      slot.className = 'player-slot empty' + (i===1 && !is2v2 ? ' hidden' : '');
    }
  });

  const maxPlayers = is2v2 ? 4 : 2;
  // Host starts game logic
  if (isHost) {
    if (clients.length === maxPlayers) {
      startGameBtn.classList.remove('hidden');
      peerStatus.textContent = currentLang === 'en' ? "Room full! You can start the game." : "Oda dolu! Oyunu başlatabilirsin.";
    } else {
      startGameBtn.classList.add('hidden');
      peerStatus.textContent = currentLang === 'en' ? `${clients.length}/${maxPlayers} players joined. Waiting...` : `${clients.length}/${maxPlayers} oyuncu katıldı. Bekleniyor...`;
    }
  } else {
    startGameBtn.classList.add('hidden');
    if (clients.length === maxPlayers) {
      peerStatus.textContent = currentLang === 'en' ? "Room full! Waiting for host to start..." : "Oda dolu! Hostun başlatması bekleniyor...";
    } else {
      peerStatus.textContent = currentLang === 'en' ? `${clients.length}/${maxPlayers} players joined. Waiting...` : `${clients.length}/${maxPlayers} oyuncu katıldı. Bekleniyor...`;
    }
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
    copyCodeBtn.textContent = currentLang === 'en' ? 'Copied!' : 'Kopyalandı!';
    setTimeout(() => {
      copyCodeBtn.textContent = '📋';
    }, 1500);
  });
});

// Start Game Action (Host only)
startGameBtn.addEventListener('click', () => {
  if (!isHost) return;
  broadcast({ type: 'start-game', roomId: currentRoomId });
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
      peerStatus.textContent = currentLang === 'en' ? `Connecting to room (${currentRoomId})...` : `Odaya (${currentRoomId}) bağlanılıyor...`;
      displayRoomId.textContent = currentRoomId;
      if (!isRestoringSession) {
        showScreen(waitingScreen);
      }
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

    // For peer-unavailable or any error during an active room/session, NEVER clear the session!
    const hasSession = currentRoomId || localStorage.getItem('genshin_session') || isRestoringSession;
    const isGameActive = selectionScreen.classList.contains('active') || gameScreen.classList.contains('active');
    if (hasSession || isGameActive) {
      console.log('Peer error during active session. Retrying...', err);
      setTimeout(() => window.location.reload(), 2000);
      return;
    }

    // Fatal unrecoverable error for fresh joins
    clearSession();
    showScreen(lobbyScreen);
    showLobbyError(currentLang === 'en' ? `Connection error: ${err.message || err.type}` : `Bağlantı hatası: ${err.message || err.type}`);
  });
}

function getBroadcastLobbyState() {
  return clients.map(c => ({ peerId: c.peerId, nickname: c.nickname, team: c.team, isHost: c.isHost, lockedCharacterId: c.lockedCharacterId }));
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
    opponentName,
    eliminatedCards: eliminated,
    isInGame: gameScreen.classList.contains('active'),
    isInSelectionPhase: selectionScreen.classList.contains('active')
  };
  localStorage.setItem('genshin_session', JSON.stringify(session));
  
  // Update URL to preserve session even if localStorage is wiped
  const url = new URL(window.location);
  url.searchParams.set('room', currentRoomId);
  url.searchParams.set('nick', myNickname);
  url.searchParams.set('host', isHost);
  url.searchParams.set('mode', gameMode);
  window.history.replaceState({}, '', url);
}

function clearSession() {
  localStorage.removeItem('genshin_session');
  // Clear URL params
  const url = new URL(window.location);
  url.searchParams.delete('room');
  url.searchParams.delete('nick');
  url.searchParams.delete('host');
  url.searchParams.delete('mode');
  window.history.replaceState({}, '', url);
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
      const isPlaying = gameScreen.classList.contains('active') || selectionScreen.classList.contains('active');
      const inLobby = !isPlaying && !gameIsOver;
      
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
  let watchdogCleared = false;
  const openWatchdog = setTimeout(() => {
    if (!watchdogCleared && !connection.open && peer && !peer.destroyed && currentRoomId) {
      console.log('Connection open timed out (mobile radio wake-up delay), retrying...');
      try { connection.close(); } catch(e) {}
      const retryConn = peer.connect(PEER_PREFIX + currentRoomId, { reliable: true });
      setupGuestConnection(retryConn);
    }
  }, 3000);

  const sendJoinOrRejoin = () => {
    watchdogCleared = true;
    clearTimeout(openWatchdog);
    if (!myNickname && localStorage.getItem('genshin_session')) {
      try {
        const s = JSON.parse(localStorage.getItem('genshin_session'));
        if (s && s.nickname) myNickname = s.nickname;
      } catch(e) {}
    }
    const sendReq = () => {
      if (isRestoringSession || isRejoining || localStorage.getItem('genshin_session')) {
        peerStatus.textContent = currentLang === 'en' ? 'Reconnecting...' : 'Yeniden bağlanılıyor...';
        connection.send({ type: 'rejoin-request', nickname: myNickname });
      } else {
        peerStatus.textContent = currentLang === 'en' ? 'Connected, waiting for room state...' : 'Bağlantı kuruldu, odanın durumu bekleniyor...';
        connection.send({ type: 'join-request', nickname: myNickname });
      }
    };
    setTimeout(() => { sendReq(); startPing(); }, 100);
    setTimeout(() => { if (connection.open) sendReq(); }, 1200);
  };

  if (connection.open) {
    sendJoinOrRejoin();
  } else {
    connection.on('open', sendJoinOrRejoin);
  }

  connection.on('data', (data) => {
    handleGuestReceivedData(data);
  });

  connection.on('close', () => {
    const gameIsOver = !gameOverScreen.classList.contains('hidden');
    if (gameIsOver) return;

    // Only assume "Host left" if we are purely in initial lobby join without any saved session or active room.
    // If we have an active session/room, a connection close is simply network loss on mobile; attempt reload/reconnect.
    const hasSession = currentRoomId || localStorage.getItem('genshin_session') || isRestoringSession;
    const isPlayingOrSelecting = gameScreen.classList.contains('active') || selectionScreen.classList.contains('active');
    
    if (!hasSession && !isPlayingOrSelecting) {
      const msg = currentLang === 'en' ? 'Host left the room. Game ended.' : 'Oda kurucusu (Host) ayrıldı. Oyun sonlandırıldı.';
      const modal = document.getElementById('game-cancelled-modal');
      const msgEl = document.getElementById('game-cancelled-message');
      if (modal && msgEl) {
        msgEl.textContent = msg;
        modal.classList.remove('hidden');
      }
      return;
    }

    console.log('Connection lost, reloading to auto-restore...');
    setTimeout(() => window.location.reload(), 1000);
  });

  connection.on('error', () => {
    const gameIsOver = !gameOverScreen.classList.contains('hidden');
    if (gameIsOver) return;

    console.log('Connection error, reloading to auto-restore...');
    setTimeout(() => window.location.reload(), 1000);
  });

  if (connection.peerConnection) {
    connection.peerConnection.addEventListener('iceconnectionstatechange', () => {
      const state = connection.peerConnection.iceConnectionState;
      if (['disconnected', 'failed', 'closed'].includes(state)) {
        const gameIsOver = !gameOverScreen.classList.contains('hidden');
        if (!gameIsOver) {
          console.log('ICE connection state dead on guest:', state);
          setTimeout(() => window.location.reload(), 500);
        }
      }
    });
  }
}

let lastHiddenTime = 0;

// Page Visibility API — reconnect when phone comes back to foreground or goes to background
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    lastHiddenTime = Date.now();
    if (!isHost && conn && conn.open) {
      try { conn.send({ type: 'tab-minimized', nickname: myNickname }); } catch (e) {}
    } else if (isHost) {
      broadcast({ type: 'tab-minimized', nickname: myNickname });
      processGameEvent({ type: 'tab-minimized', nickname: myNickname });
    }
  } else {
    const timeHidden = lastHiddenTime ? (Date.now() - lastHiddenTime) : 0;
    if (!isHost && (currentRoomId || localStorage.getItem('genshin_session'))) {
      const isDead = !conn || !conn.open || (conn.peerConnection && ['disconnected', 'failed', 'closed'].includes(conn.peerConnection.iceConnectionState));
      if (isDead) {
        console.log('Connection dead after sleep — reloading to auto-restore...');
        setTimeout(() => window.location.reload(), 200);
      } else {
        try {
          conn.send({ type: 'tab-restored', nickname: myNickname });
        } catch (e) {
          console.log('Failed to send tab-restored over frozen socket, reloading...');
          setTimeout(() => window.location.reload(), 200);
        }
      }
    } else if (isHost) {
      if (!peer || peer.disconnected || peer.destroyed || timeHidden > 3000) {
        console.log('Host page visible again, peer disconnected/slept — reloading to auto-restore...');
        setTimeout(() => window.location.reload(), 200);
      } else {
        broadcast({ type: 'tab-restored', nickname: myNickname });
        processGameEvent({ type: 'tab-restored', nickname: myNickname });
      }
    }
  }
});

// Host Data Handler
function handleHostReceivedData(connection, data) {
  // UNIVERSAL ALIVE WATCHDOG:
  // If the host receives ANY data from a client (chat, ping, rejoin, etc.), that client is guaranteed alive.
  // Immediately cancel any reconnect timer for them!
  if (data && data.nickname && data.type !== 'tab-minimized') {
    let client = clients.find(c => c.nickname === data.nickname);
    if (!client && gameMode === '1v1' && clients.length === 2) {
      client = clients.find(c => !c.isHost);
    }
    if (client) {
      client.conn = connection;
      client.peerId = connection.peer;
      if (client.isReconnecting) {
        client.isReconnecting = false;
        broadcast({ type: 'player-reconnected', nickname: client.nickname });
      }
    }
    if (window.reconnectIntervals) {
      if (gameMode === '1v1') {
        Object.keys(window.reconnectIntervals).forEach(nick => {
          clearInterval(window.reconnectIntervals[nick]);
          delete window.reconnectIntervals[nick];
        });
      } else if (window.reconnectIntervals[data.nickname]) {
        clearInterval(window.reconnectIntervals[data.nickname]);
        delete window.reconnectIntervals[data.nickname];
      }
    }
    const msgs = document.querySelectorAll('.reconnect-countdown-msg');
    msgs.forEach(m => {
      if (gameMode === '1v1' || m.dataset.nickname === data.nickname) {
        m.remove();
      }
    });
  }

  switch (data.type) {
    case 'join-request': {
      // Check if nickname already exists in clients (e.g. they refreshed)
      let existingClient = clients.find(c => c.nickname === data.nickname);
      
      // Bulletproof fallback: If we couldn't find them by exact nickname, but we are in 1v1 
      // and there is a guest slot, it MUST be them reconnecting!
      if (!existingClient && gameMode === '1v1') {
        const guest = clients.find(c => !c.isHost);
        if (guest) {
          existingClient = guest;
          existingClient.nickname = data.nickname;
        }
      }

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
        broadcast({ type: 'player-reconnected', nickname: data.nickname });
        processGameEvent({ type: 'player-reconnected', nickname: data.nickname });
        
        // If the game has already started (selection phase or active game), send rejoin sync
        const isInSelection = selectionScreen.classList.contains('active');
        const isInGame = gameScreen.classList.contains('active');
        
        if (isInSelection || isInGame) {
          connection.send({
            type: 'rejoin-ack',
            roomId: currentRoomId,
            gameMode,
            team: existingClient.team,
            mySecretCharId: existingClient.lockedCharacterId || null,
            clients: getBroadcastLobbyState(),
            isInSelectionPhase: isInSelection,
            isInGame: isInGame,
            isHostTurn: isMyTurn,
            hostSecretChar: mySecretCharacter,
            guestSecretChar: opponentSecretCharacter,
            eliminatedCards: Array.from(document.querySelectorAll('.card.eliminated')).map(c => c.dataset.id)
          });
        }
        break;
      }

      // If it's a completely new player, check if room is full
      const maxPlayers = gameMode === '2v2' ? 4 : 2;
      if (clients.length >= maxPlayers) {
        connection.send({ type: 'join-rejected', reason: 'Room is full' });
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
      let existingClient = clients.find(c => c.nickname === data.nickname);
      
      if (!existingClient && gameMode === '1v1') {
        const guest = clients.find(c => !c.isHost);
        if (guest) {
          existingClient = guest;
          existingClient.nickname = data.nickname;
        }
      }

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
          roomId: currentRoomId,
          gameMode,
          team: existingClient.team,
          mySecretCharId: existingClient.lockedCharacterId || null,
          clients: getBroadcastLobbyState(),
          isInSelectionPhase: selectionScreen.classList.contains('active'),
          isInGame: gameScreen.classList.contains('active'),
          isHostTurn: isMyTurn,
          hostSecretChar: mySecretCharacter,
          guestSecretChar: opponentSecretCharacter,
          eliminatedCards: Array.from(document.querySelectorAll('.card.eliminated')).map(c => c.dataset.id)
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
      if (existingClient) {
        existingClient.isReconnecting = false;
        if (reconnectTimer) {
          clearTimeout(reconnectTimer);
          reconnectTimer = null;
        }
        broadcast({ type: 'player-reconnected', nickname: data.nickname });
        processGameEvent({ type: 'player-reconnected', nickname: data.nickname });
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
    case 'join-rejected':
      clearSession();
      showScreen(lobbyScreen);
      showLobbyError(data.reason === 'Room is full' ? 'Oda dolu!' : 'Bağlantı reddedildi.');
      break;

    case 'lobby-update':
      if (data.roomId) {
        currentRoomId = data.roomId;
        if (displayRoomId) displayRoomId.textContent = currentRoomId;
        if (gameRoomId) gameRoomId.textContent = currentRoomId;
      }
      gameMode = data.gameMode;
      // Re-assign myPlayerInfo based on what host says
      myPlayerInfo = data.clients.find(c => c.nickname === myNickname);
      // Sync clients array locally (without conn objects)
      clients = data.clients;
      updateLobbyUI();
      if (gameMode === '1v1') {
        opponentName = clients.find(c => c.nickname !== myNickname)?.nickname || (currentLang === 'en' ? 'Opponent' : 'Rakip');
      } else {
        opponentName = currentLang === 'en' ? 'Opposing Team' : 'Rakip Takım';
      }
      saveSession();
      break;
      
    case 'start-game':
      if (data.roomId) {
        currentRoomId = data.roomId;
        if (displayRoomId) displayRoomId.textContent = currentRoomId;
        if (gameRoomId) gameRoomId.textContent = currentRoomId;
      }
      startSelectionPhase();
      break;
    
    case 'ready-count':
      if (gameMode === '2v2') {
        myReadyStatus.textContent = `${data.readyCount}/${data.maxPlayers}`;
        myReadyStatus.className = data.readyCount === data.maxPlayers ? 'text-green' : 'text-muted';
      } else {
        if (data.lastReadyPlayer !== myNickname) {
          isOpponentSelectionLocked = true;
          opponentReadyStatus.textContent = currentLang === 'en' ? 'Ready!' : 'Hazır!';
          opponentReadyStatus.className = 'text-green';
        }
      }
      break;
      
    case 'rejoin-ack':
      // Restore state from host confirmation
      if (data.roomId) {
        currentRoomId = data.roomId;
        if (displayRoomId) displayRoomId.textContent = currentRoomId;
        if (gameRoomId) gameRoomId.textContent = currentRoomId;
      }
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
          lockCharacterBtn.textContent = currentLang === 'en' ? 'Selected & Locked' : 'Seçildi ve Kilitlendi';
          showPreviewDetails(selectedCharacterLocally);
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
      } else if (data.isInGame) {
        // Restore active game authoritative state from Host
        const saved = localStorage.getItem('genshin_session');
        const sess = saved ? JSON.parse(saved) : {};
        mySecretCharacter = data.guestSecretChar || sess.mySecretChar || mySecretCharacter || characters[0];
        opponentSecretCharacter = data.hostSecretChar || sess.oppSecretChar || opponentSecretCharacter || characters[1];
        isMyTurn = data.isHostTurn !== undefined ? !data.isHostTurn : (sess.isMyTurn !== undefined ? sess.isMyTurn : isMyTurn);
        opponentName = sess.opponentName || opponentName || (currentLang === 'en' ? 'Opponent' : 'Rakip');
        launchGameBoard(data.eliminatedCards || sess.eliminatedCards);
      } else {
        // Host is in waiting lobby room! Switch back to lobby room
        mySecretCharacter = null;
        opponentSecretCharacter = null;
        selectedCharacterLocally = null;
        showScreen(waitingScreen);
        updateLobbyUI();
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
      const msg = currentLang === 'en' ? `${data.nickname || 'A player'} left the room. Game ended.` : `${data.nickname || 'Bir oyuncu'} odadan ayrıldı. Oyun sonlandırıldı.`;
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

    case 'ready-state':
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
            isOpponentSelectionLocked = true;
            opponentReadyStatus.textContent = currentLang === 'en' ? 'Ready!' : 'Hazır!';
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
      if (!window.reconnectIntervals) window.reconnectIntervals = {};
      if (window.reconnectIntervals[data.nickname]) {
        clearInterval(window.reconnectIntervals[data.nickname]);
        delete window.reconnectIntervals[data.nickname];
      }

      const chatMsg = document.createElement('div');
      chatMsg.className = 'system-message error reconnect-countdown-msg';
      chatMsg.dataset.nickname = data.nickname;
      
      let timeLeft = 60;
      chatMsg.textContent = currentLang === 'en' ? `⏳ ${data.nickname} disconnected, waiting to reconnect (${timeLeft}s)...` : `⏳ ${data.nickname} bağlantısı koptu, yeniden bağlanması bekleniyor (${timeLeft}sn)...`;
      
      if (chatMessages) {
        chatMessages.appendChild(chatMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
      
      const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          clearInterval(interval);
          if (window.reconnectIntervals && window.reconnectIntervals[data.nickname]) {
            delete window.reconnectIntervals[data.nickname];
          }
          if (isHost) {
            const client = clients.find(c => c.nickname === data.nickname);
            if (!client || client.isReconnecting) {
              broadcast({ type: 'game-cancelled', reason: 'player-left', nickname: data.nickname });
              processGameEvent({ type: 'game-cancelled', reason: 'player-left', nickname: data.nickname });
            }
          }
        } else {
          chatMsg.textContent = currentLang === 'en' ? `⏳ ${data.nickname} disconnected, waiting to reconnect (${timeLeft}s)...` : `⏳ ${data.nickname} bağlantısı koptu, yeniden bağlanması bekleniyor (${timeLeft}sn)...`;
        }
      }, 1000);
      
      window.reconnectIntervals[data.nickname] = interval;
      break;
    }

    case 'player-reconnected': {
      if (window.reconnectIntervals) {
        if (gameMode === '1v1') {
          Object.keys(window.reconnectIntervals).forEach(nick => {
            clearInterval(window.reconnectIntervals[nick]);
            delete window.reconnectIntervals[nick];
          });
        } else {
          if (window.reconnectIntervals[data.nickname]) {
            clearInterval(window.reconnectIntervals[data.nickname]);
            delete window.reconnectIntervals[data.nickname];
          }
          Object.keys(window.reconnectIntervals).forEach(nick => {
            if (!data.nickname || nick.trim() === data.nickname.trim()) {
              clearInterval(window.reconnectIntervals[nick]);
              delete window.reconnectIntervals[nick];
            }
          });
        }
      }
      
      if (chatMessages) {
         const msgs = chatMessages.querySelectorAll('.reconnect-countdown-msg');
         msgs.forEach(msg => {
            if (gameMode === '1v1' || msg.dataset.nickname === data.nickname) {
               msg.textContent = currentLang === 'en' ? `⏳ ${data.nickname} is returning...` : `⏳ ${data.nickname} dönüş yapıyor...`;
               msg.classList.remove('reconnect-countdown-msg');
            }
         });
      }

      const chatMsg2 = document.createElement('div');
      chatMsg2.className = 'system-message';
      chatMsg2.textContent = currentLang === 'en' ? `✅ ${data.nickname} reconnected!` : `✅ ${data.nickname} yeniden bağlandı!`;
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
      break;
      
    case 'pass-turn':
      isMyTurn = (data.team !== myPlayerInfo.team);
      updateTurnUI();
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
      alert(currentLang === 'en' ? "A player rejected playing again. Returning to lobby." : "Bir oyuncu tekrar oynama teklifini reddetti. Lobiye dönülüyor.");
      clearSession();
      window.location.reload();
      break;
  }
}

function updateSelectionHeaders() {
  const is2v2 = gameMode === '2v2';
  const myReadyLabelEl = document.getElementById('my-ready-label');
  const opponentReadyLabelEl = document.getElementById('opponent-ready-label');
  
  if (is2v2) {
    if (myReadyLabelEl) myReadyLabelEl.textContent = currentLang === 'en' ? 'Ready:' : 'Hazır:';
  } else {
    if (myReadyLabelEl) myReadyLabelEl.textContent = currentLang === 'en' ? 'You:' : 'Sen:';
    if (opponentReadyLabelEl) opponentReadyLabelEl.textContent = currentLang === 'en' ? 'Opponent:' : 'Rakip:';
    if (isMySelectionLocked || myReadyStatus.textContent === 'Hazır!' || myReadyStatus.textContent === 'Ready!') {
      myReadyStatus.textContent = currentLang === 'en' ? 'Ready!' : 'Hazır!';
    } else if (myReadyStatus.textContent === 'Seçim Yapmadı' || myReadyStatus.textContent === 'Not Selected') {
      myReadyStatus.textContent = currentLang === 'en' ? 'Not Selected' : 'Seçim Yapmadı';
    }
    if (isOpponentSelectionLocked || opponentReadyStatus.textContent === 'Hazır!' || opponentReadyStatus.textContent === 'Ready!') {
      opponentReadyStatus.textContent = currentLang === 'en' ? 'Ready!' : 'Hazır!';
    } else if (opponentReadyStatus.textContent === 'Seçim Yapıyor...' || opponentReadyStatus.textContent === 'Selecting...') {
      opponentReadyStatus.textContent = currentLang === 'en' ? 'Selecting...' : 'Seçim Yapıyor...';
    }
  }
  if (lockCharacterBtn && lockCharacterBtn.disabled && !isMySelectionLocked) {
    lockCharacterBtn.textContent = currentLang === 'en' ? 'Lock Character' : 'Karakteri Kilitle';
  } else if (isMySelectionLocked) {
    lockCharacterBtn.textContent = currentLang === 'en' ? 'Selected & Locked' : 'Seçildi ve Kilitlendi';
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
      opponentName = currentLang === 'en' ? 'Opposing Team' : 'Rakip Takım';
    } else {
      opponentName = clients.find(c => c.nickname !== myNickname)?.nickname || (currentLang === 'en' ? 'Opponent' : 'Rakip');
    }
  }

  // Update selection screen header labels
  const readySeparatorEl = document.getElementById('ready-separator');
  const opponentReadyLabelEl = document.getElementById('opponent-ready-label');
  if (is2v2) {
    myReadyStatus.textContent = `0/${maxPlayers}`;
    myReadyStatus.className = 'text-red';
    if (readySeparatorEl) readySeparatorEl.style.display = 'none';
    if (opponentReadyLabelEl) opponentReadyLabelEl.style.display = 'none';
    opponentReadyStatus.style.display = 'none';
  } else {
    myReadyStatus.textContent = currentLang === 'en' ? 'Not Selected' : 'Seçim Yapmadı';
    myReadyStatus.className = 'text-red';
    if (readySeparatorEl) readySeparatorEl.style.display = '';
    if (opponentReadyLabelEl) opponentReadyLabelEl.style.display = '';
    opponentReadyStatus.style.display = '';
    opponentReadyStatus.textContent = currentLang === 'en' ? 'Selecting...' : 'Seçim Yapıyor...';
    opponentReadyStatus.className = 'text-muted';
  }
  
  lockCharacterBtn.disabled = true;
  updateSelectionHeaders();
  
  renderSelectionGrid(characters);
  
  // Set default preview card detail
  showPreviewDetails(null);
  
  showScreen(selectionScreen);
  saveSession();
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
  const sorted = [...chars].sort((a,b) => a.name.localeCompare(b.name, currentLang));
  
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
    });
    
    selectionGrid.appendChild(card);
  });
}

// Show selection details on right preview card
function showPreviewDetails(char) {
  if (!char) {
    const dict = i18nDict[currentLang] || i18nDict.tr;
    detailCharName.textContent = dict.defaultCharName;
    detailCharElement.textContent = currentLang === 'en' ? 'Element: -' : 'Element: -';
    detailCharWeapon.textContent = currentLang === 'en' ? 'Weapon: -' : 'Silah: -';
    detailCharRegion.textContent = currentLang === 'en' ? 'Region: -' : 'Bölge: -';
    detailCharGender.textContent = currentLang === 'en' ? 'Gender: -' : 'Cinsiyet: -';
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
  
  if (currentLang === 'en') {
    detailCharName.textContent = char.name;
    detailCharElement.textContent = `Uses the ${char.element} element.`;
    detailCharWeapon.textContent = `Wields a ${translateWeapon(char.weapon)}.`;
    detailCharRegion.textContent = `Hails from the region of ${char.region}.`;
    detailCharGender.textContent = `This hero is ${translateGender(char.gender).toLowerCase()}.`;
  } else {
    const trElement = elementTranslations[char.element] || char.element;
    detailCharName.textContent = char.name;
    detailCharElement.textContent = `Bu karakter ${trElement} elementini kullanıyor.`;
    detailCharWeapon.textContent = `Silah olarak ${char.weapon} tercih ediyor.`;
    detailCharRegion.textContent = `Kökeni ${char.region} topraklarına dayanıyor.`;
    detailCharGender.textContent = `Kendisi ${char.gender} bir kahramandır.`;
  }
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
  lockCharacterBtn.textContent = currentLang === 'en' ? 'Selected & Locked' : 'Seçildi ve Kilitlendi';
  
  // Disable selection clicks visually
  document.querySelectorAll('.select-card').forEach(c => {
    c.classList.add('locked');
    if (c.dataset.id !== char.id) {
      c.style.opacity = '0.5';
    }
  });
  
  // In 1v1: show personal ready status. In 2v2: host's ready-count broadcast handles the counter
  if (gameMode !== '2v2') {
    myReadyStatus.textContent = currentLang === 'en' ? 'Ready!' : 'Hazır!';
    myReadyStatus.className = 'text-green';
  }
  
  // Notify host
  sendMessage({
    type: 'ready-state',
    isReady: true,
    characterId: char.id,
    nickname: myNickname
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
function launchGameBoard(eliminatedList = null) {
  // Update header info
  gameRoomId.textContent = currentRoomId;
  const displayOppName = (opponentName === 'Rakip' || !opponentName) ? (currentLang === 'en' ? 'Opponent' : 'Rakip') : opponentName;
  opponentNameLabel.textContent = gameMode === '2v2' ? (currentLang === 'en' ? 'Opposing Team' : 'Rakip Takım') : displayOppName;
  
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

  const startMsgText = currentLang === 'en' 
    ? `Game started! ${gameMode === '2v2' ? 'Team Mode' : 'Opponent: ' + opponentName}. Turn: ${isMyTurn ? 'You' : opponentName}.`
    : `Oyun başladı! ${gameMode === '2v2' ? 'Takımlı Mod' : 'Rakibin: ' + opponentName}. Sıra: ${isMyTurn ? 'Sen' : opponentName}.`;
  chatMessages.innerHTML = `<div class="system-message">${startMsgText}</div>`;
  updateTurnUI();
  
  showScreen(gameScreen);
  let toEliminate = eliminatedList;
  if (!toEliminate && isRestoringSession) {
    try {
      const saved = localStorage.getItem('genshin_session');
      if (saved) {
        const sess = JSON.parse(saved);
        if (sess && Array.isArray(sess.eliminatedCards)) {
          toEliminate = sess.eliminatedCards;
        }
      }
    } catch(e) {}
  }
  if (toEliminate && Array.isArray(toEliminate)) {
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        if (toEliminate.includes(card.dataset.id)) {
          card.classList.add('eliminated');
        }
      });
      saveSession();
    }, 50);
  } else {
    saveSession();
  }
  synth.playVictory();
}

// Render Character Card Grid
function renderBoard(chars) {
  charactersGrid.innerHTML = '';
  const sorted = [...chars].sort((a, b) => a.name.localeCompare(b.name, currentLang));
  
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
          <div class="weapon-badge">${translateWeapon(char.weapon)}</div>
          <div class="gender-badge">${translateGender(char.gender)}</div>
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
        <div class="weapon-badge">${translateWeapon(char.weapon)}</div>
        <div class="gender-badge">${translateGender(char.gender)}</div>
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
  const placeholderText = currentLang === 'en' ? 'Select character...' : 'Karakter seç...';
  guessSelect.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
  const sorted = [...chars].sort((a,b) => a.name.localeCompare(b.name, currentLang));
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
function updateTurnUI(preserveTimer = false) {
  const timerTextEl = document.getElementById('turn-timer-text');

  if (isMyTurn) {
    turnBadge.classList.add('active-turn');
    turnStatusText.textContent = currentLang === 'en' ? 'YOUR TURN' : 'SENİN SIRAN';
    passTurnBtn.disabled = false;
    openGuessModalBtn.disabled = false;
    if (timerTextEl) {
      timerTextEl.classList.remove('hidden');
      if (!preserveTimer) timerTextEl.classList.remove('timer-warning');
      timerTextEl.textContent = `(${currentTurnTime}s)`;
    }
  } else {
    turnBadge.classList.remove('active-turn');
    turnStatusText.textContent = currentLang === 'en' ? `${opponentName.toUpperCase()}'S TURN` : `${opponentName.toUpperCase()} SIRASINDA`;
    passTurnBtn.disabled = true;
    openGuessModalBtn.disabled = true;
    if (timerTextEl) {
      timerTextEl.classList.add('hidden');
    }
  }

  if (preserveTimer) return;

  if (activeTurnTimerInterval) clearInterval(activeTurnTimerInterval);
  currentTurnTime = 60;

  activeTurnTimerInterval = setInterval(() => {
    currentTurnTime--;
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
        updateTurnUI();
        sendMessage({ type: 'pass-turn', team: myPlayerInfo.team });
      }
    }
  }, 1000);
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
  
  const teamLabel = isTeamMsg ? (currentLang === 'en' ? ' <span class="team-chat-badge">🔒 Team</span>' : ' <span class="team-chat-badge">🔒 Takım</span>') : '';
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
  const guessedName = guessedChar ? guessedChar.name : (currentLang === 'en' ? 'Unknown' : 'Bilinmeyen');
  const isMyTeam = (team === myPlayerInfo.team);
  
  if (isCorrect) {
    if (activeTurnTimerInterval) clearInterval(activeTurnTimerInterval);
    const timerTextEl = document.getElementById('turn-timer-text');
    if (timerTextEl) timerTextEl.classList.add('hidden');

    if (isMyTeam) {
      gameOverTitle.textContent = currentLang === 'en' ? 'CONGRATULATIONS!' : 'TEBRİKLER!';
      gameOverTitle.className = 'game-over-title win';
      gameOverMessage.textContent = currentLang === 'en' ? `${guesserName} from your team correctly guessed the secret character!` : `Takımınızdan ${guesserName}, rakibin gizli karakterini doğru tahmin etti!`;
    } else {
      gameOverTitle.textContent = currentLang === 'en' ? 'YOU LOST...' : 'KAYBETTİN...';
      gameOverTitle.className = 'game-over-title lose';
      gameOverMessage.textContent = currentLang === 'en' ? `${guesserName} correctly guessed your character!` : `${guesserName} sizin karakterinizi doğru tahmin etti!`;
    }
    
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
          <div class="weapon-badge">${translateWeapon(secretCharShow.weapon)}</div>
          <div class="gender-badge">${translateGender(secretCharShow.gender)}</div>
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
    logDiv.innerHTML = currentLang === 'en' ? `❌ <strong>${guesserName}</strong> made a wrong guess (${guessedName})! Turn passed.` : `❌ <strong>${guesserName}</strong> yanlış tahminde bulundu (${guessedName})! Sıra devredildi.`;
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
  playAgainBtn.textContent = currentLang === 'en' ? 'Request Sent...' : 'Talep Gönderildi...';
  playAgainBtn.disabled = true;
  const waiting = document.getElementById('play-again-waiting');
  const countText = document.getElementById('play-again-count-text');
  const maxPlayers = gameMode === '2v2' ? 4 : 2;
  if (waiting) waiting.classList.remove('hidden');
  if (countText) countText.textContent = currentLang === 'en' ? `1/${maxPlayers} ready` : `1/${maxPlayers} hazır`;
  
  sendMessage({ type: 'play-again-request', requester: myNickname });
});

acceptPlayAgainBtn.addEventListener('click', () => {
  playAgainModal.classList.add('hidden');
  // Disable Tekrar Oyna so player can't double-click
  playAgainBtn.disabled = true;
  playAgainBtn.textContent = currentLang === 'en' ? 'Accepted...' : 'Kabul Edildi...';
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
  const dict = i18nDict[currentLang] || i18nDict.tr;
  playAgainBtn.textContent = dict.btnPlayAgain || 'Tekrar Oyna';
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
  
  const msg = currentLang === 'en' ? `⚠️ <strong>${opponentName || 'Opponent'}</strong> disconnected! Reconnecting...` : `⚠️ <strong>${opponentName || 'Rakip'}</strong> bağlantıyı kesti! Yeniden bağlanılıyor...`;
  
  const logDiv = document.createElement('div');
  logDiv.className = 'system-message error';
  logDiv.innerHTML = msg;
  chatMessages.appendChild(logDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  synth.playError();
  
  peerStatus.textContent = currentLang === 'en' ? 'Opponent left. Waiting for new player...' : 'Rakip ayrıldı. Yeni oyuncu bekleniyor...';
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
