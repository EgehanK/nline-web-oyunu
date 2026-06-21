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
  { id: "venti",        name: "Venti",               element: "Anemo",   weapon: "Yay",             region: "Mondstadt",  gender: "Erkek", img: "Venti" },
  { id: "varka",        name: "Varka",               element: "Anemo",   weapon: "Çift Elli Kılıç", region: "Mondstadt",  gender: "Erkek", img: "Varka" },
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
  { id: "zibai",        name: "Zibai",               element: "Geo",     weapon: "Kılıç",           region: "Liyue",      gender: "Kadın", img: "Zibai" },
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
  { id: "arlecchino",   name: "Arlecchino",          element: "Pyro",    weapon: "Mızrak",          region: "Fontaine",   gender: "Kadın", img: "Arlecchino" },
  { id: "clorinde",     name: "Clorinde",            element: "Electro", weapon: "Kılıç",           region: "Fontaine",   gender: "Kadın", img: "Clorinde" },
  { id: "emilie",       name: "Emilie",              element: "Dendro",  weapon: "Mızrak",          region: "Fontaine",   gender: "Kadın", img: "Emilie" },
  { id: "escoffier",    name: "Escoffier",           element: "Cryo",    weapon: "Mızrak",          region: "Fontaine",   gender: "Erkek", img: "Escoffier" },
  { id: "flins",        name: "Flins",               element: "Electro", weapon: "Mızrak",          region: "Fontaine",   gender: "Erkek", img: "Flins" },
  { id: "furina",       name: "Furina",              element: "Hydro",   weapon: "Kılıç",           region: "Fontaine",   gender: "Kadın", img: "Furina" },
  { id: "ineffa",       name: "Ineffa",              element: "Electro", weapon: "Mızrak",          region: "Fontaine",   gender: "Kadın", img: "Ineffa" },
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
  { id: "nefer",        name: "Nefer",               element: "Dendro",  weapon: "Katalizör",       region: "Natlan",     gender: "Kadın", img: "Nefer" },
  { id: "varesa",       name: "Varesa",              element: "Electro", weapon: "Katalizör",       region: "Natlan",     gender: "Kadın", img: "Varesa" },
  { id: "xilonen",      name: "Xilonen",             element: "Geo",     weapon: "Kılıç",           region: "Natlan",     gender: "Kadın", img: "Xilonen" },
  // --- Snezhnaya ---
  { id: "tartaglia",    name: "Tartaglia",           element: "Hydro",   weapon: "Yay",             region: "Snezhnaya",  gender: "Erkek", img: "Tartaglia" },
  { id: "columbina",    name: "Columbina",           element: "Cryo",    weapon: "Katalizör",       region: "Snezhnaya",  gender: "Kadın", img: "Columbina" },
  // --- Lauma/Diğer ---
  { id: "lauma",        name: "Lauma",               element: "Dendro",  weapon: "Katalizör",       region: "Bilinmiyor", gender: "Kadın", img: "Lauma" },
  { id: "linnea",       name: "Linnea",              element: "Geo",     weapon: "Yay",             region: "Bilinmiyor", gender: "Kadın", img: "Linnea" },
  { id: "lohen",        name: "Lohen",               element: "Cryo",    weapon: "Mızrak",          region: "Bilinmiyor", gender: "Erkek", img: "Lohen" },
  { id: "mizuki",       name: "Mizuki",              element: "Anemo",   weapon: "Katalizör",       region: "Bilinmiyor", gender: "Kadın", img: "Mizuki" },
  { id: "nicole",       name: "Nicole",              element: "Anemo",   weapon: "Katalizör",       region: "Bilinmiyor", gender: "Kadın", img: "Nicole" },
  { id: "skirk",        name: "Skirk",               element: "Cryo",    weapon: "Kılıç",           region: "Bilinmiyor", gender: "Kadın", img: "SkirkNew" },
  { id: "aloy",         name: "Aloy",                element: "Cryo",    weapon: "Yay",             region: "Horizon",    gender: "Kadın", img: "Aloy" },
  { id: "durin",        name: "Durin",               element: "Anemo",   weapon: "Çift Elli Kılıç", region: "Bilinmiyor", gender: "Erkek", img: "Durin" }
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
  
  myPlayerInfo = { peerId: 'host', nickname: myNickname, team: 'A', isHost: true };
  clients = [ { conn: null, ...myPlayerInfo } ];
  
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
      slot.textContent = teamA[i].nickname;
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
      slot.textContent = teamB[i].nickname;
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
    } else {
      showScreen(lobbyScreen);
      showLobbyError(`Bağlantı hatası: ${err.message || err.type}`);
    }
  });
}

function getBroadcastLobbyState() {
  return clients.map(c => ({ peerId: c.peerId, nickname: c.nickname, team: c.team, isHost: c.isHost }));
}

// Host connection listener
function setupHostConnectionListener() {
  peer.on('connection', (connection) => {
    const maxPlayers = gameMode === '2v2' ? 4 : 2;
    if (clients.length >= maxPlayers) {
      setTimeout(() => connection.close(), 500);
      return;
    }

    connection.on('open', () => {
      console.log('Guest connected');
    });

    connection.on('data', (data) => {
      handleHostReceivedData(connection, data);
    });

    connection.on('close', () => {
      clients = clients.filter(c => c.conn !== connection);
      if (!waitingScreen.classList.contains('hidden')) {
        updateLobbyUI();
        broadcast({ type: 'lobby-update', gameMode, clients: getBroadcastLobbyState() });
      } else {
        alert('Bir oyuncu bağlantıyı kesti. Oyun iptal edildi, lobiye dönülüyor.');
        window.location.reload();
      }
    });
    
    connection.on('error', () => {
      clients = clients.filter(c => c.conn !== connection);
      if (!waitingScreen.classList.contains('hidden')) {
        updateLobbyUI();
        broadcast({ type: 'lobby-update', gameMode, clients: getBroadcastLobbyState() });
      } else {
        alert('Bir oyuncu bağlantı hatası yaşadı. Oyun iptal edildi, lobiye dönülüyor.');
        window.location.reload();
      }
    });
  });
}

// Guest connection
function setupGuestConnection(connection) {
  conn = connection;
  
  conn.on('open', () => {
    peerStatus.textContent = 'Bağlantı kuruldu, odanın durumu bekleniyor...';
    conn.send({ type: 'join-request', nickname: myNickname });
  });
  
  conn.on('data', (data) => {
    handleGuestReceivedData(data);
  });
  
  conn.on('close', () => {
    alert('Kurucu odadan ayrıldı veya bağlantı koptu.');
    window.location.reload();
  });
  
  conn.on('error', (err) => {
    alert('Bağlantı hatası.');
    window.location.reload();
  });
}

// Host Data Handler
function handleHostReceivedData(connection, data) {
  switch (data.type) {
    case 'join-request':
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
    case 'ready-state':
      if (isHost) {
        const client = clients.find(c => c.nickname === data.nickname);
        if (client) client.lockedCharacterId = data.characterId;
        
        const maxPlayers = gameMode === '2v2' ? 4 : 2;
        const allReady = clients.length === maxPlayers && clients.every(c => c.lockedCharacterId);
        
        if (allReady) {
          if (selectionTimerInterval) clearInterval(selectionTimerInterval);
          
          let teamACharId, teamBCharId;
          
          if (gameMode === '2v2') {
             const teamA = clients.filter(c => c.team === 'A');
             const teamB = clients.filter(c => c.team === 'B');
             
             teamACharId = teamA[0].lockedCharacterId === teamA[1].lockedCharacterId ? teamA[0].lockedCharacterId : (Math.random() < 0.5 ? teamA[0].lockedCharacterId : teamA[1].lockedCharacterId);
             teamBCharId = teamB[0].lockedCharacterId === teamB[1].lockedCharacterId ? teamB[0].lockedCharacterId : (Math.random() < 0.5 ? teamB[0].lockedCharacterId : teamB[1].lockedCharacterId);
          } else {
             teamACharId = clients.find(c => c.team === 'A').lockedCharacterId;
             teamBCharId = clients.find(c => c.team === 'B').lockedCharacterId;
          }
          
          const teamAChar = characters.find(c => c.id === teamACharId);
          const teamBChar = characters.find(c => c.id === teamBCharId);
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
      } else {
        // UI feedback for guest that someone is ready (optional)
        opponentReadyStatus.textContent = 'Bir oyuncu hazır...';
      }
      break;
      
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
      if (data.requester !== myNickname) {
        playAgainModal.classList.remove('hidden');
      }
      if (isHost) {
        playAgainAccepts.add(data.requester);
      }
      break;
      
    case 'play-again-accept':
      if (isHost) {
        playAgainAccepts.add(data.nickname);
        const maxPlayers = gameMode === '2v2' ? 4 : 2;
        if (playAgainAccepts.size >= maxPlayers) {
          const startMsg = { type: 'play-again-start' };
          broadcast(startMsg);
          processGameEvent(startMsg); // process locally
        }
      }
      break;

    case 'play-again-start':
      playAgainAccepts.clear();
      resetSelectionAndRestart();
      break;

    case 'play-again-reject':
      playAgainAccepts.clear();
      alert("Bir oyuncu tekrar oynama teklifini reddetti. Lobiye dönülüyor.");
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
  
  myReadyStatus.textContent = 'Seçim Yapmadı';
  myReadyStatus.className = 'text-red';
  opponentReadyStatus.textContent = 'Seçim Yapıyor...';
  opponentReadyStatus.className = 'text-muted';
  
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
    broadcast(data);
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
  
  myReadyStatus.textContent = 'Hazır!';
  myReadyStatus.className = 'text-green';
  
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
function launchGameBoard() {
  // Render Guess Board
  renderBoard(characters);
  
  // Render My Secret Badge
  renderSecretCharacter(mySecretCharacter);
  
  // Populate Guess List
  populateGuessSelect(characters);
  
  chatMessages.innerHTML = `<div class="system-message">Oyun başladı! Rakibin: ${opponentName}. Sıra: ${isMyTurn ? 'Sen' : opponentName}.</div>`;
  updateTurnUI();
  
  showScreen(gameScreen);
  synth.playVictory();
}

// Render Character Card Grid
function renderBoard(chars) {
  charactersGrid.innerHTML = '';
  const sorted = [...chars].sort((a, b) => a.name.localeCompare(b.name, 'tr'));
  sorted.forEach(char => {
    const card = document.createElement('div');
    card.className = 'card';
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
function updateTurnUI() {
  if (isMyTurn) {
    turnBadge.classList.add('active-turn');
    turnStatusText.textContent = 'SENİN SIRAN';
    passTurnBtn.disabled = false;
    openGuessModalBtn.disabled = false;
  } else {
    turnBadge.classList.remove('active-turn');
    turnStatusText.textContent = `${opponentName.toUpperCase()} SIRASINDA`;
    passTurnBtn.disabled = true;
    openGuessModalBtn.disabled = true;
  }
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
  const timestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  
  const msgElement = document.createElement('div');
  msgElement.className = `chat-msg ${msgClass}${teamClass}`;
  msgElement.innerHTML = `
    <span class="msg-sender">${senderName}${isTeamMsg ? ' [Takım]' : ''}</span>
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
    if (isMyTeam) {
      gameOverTitle.textContent = 'TEBRİKLER!';
      gameOverTitle.style.color = 'var(--color-gold-bright)';
      gameOverMessage.textContent = `Takımınızdan ${guesserName}, rakibin gizli karakterini doğru tahmin etti!`;
    } else {
      gameOverTitle.textContent = 'KAYBETTİN...';
      gameOverTitle.style.color = '#ef4444';
      gameOverMessage.textContent = `${guesserName} sizin karakterinizi doğru tahmin etti!`;
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
  sendMessage({ type: 'play-again-request', requester: myNickname });
  playAgainBtn.textContent = 'Talep Gönderildi...';
  playAgainBtn.disabled = true;
});

acceptPlayAgainBtn.addEventListener('click', () => {
  playAgainModal.classList.add('hidden');
  sendMessage({ type: 'play-again-accept', nickname: myNickname });
});

rejectPlayAgainBtn.addEventListener('click', () => {
  playAgainModal.classList.add('hidden');
  sendMessage({ type: 'play-again-reject' });
});

function resetSelectionAndRestart() {
  gameOverScreen.classList.add('hidden');
  playAgainBtn.textContent = 'Tekrar Oyna';
  playAgainBtn.disabled = false;
  
  if (isHost) {
    clients.forEach(c => c.lockedCharacterId = null);
  }
  
  startSelectionPhase();
}

// Exit Lobby
exitLobbyBtn.addEventListener('click', () => {
  window.location.reload();
});

// Leave / Close Room
leaveRoomBtn.addEventListener('click', () => {
  window.location.reload();
});

// Disconnection Handling
function handleOpponentDisconnect() {
  console.log('Opponent disconnected');
  conn = null;
  
  if (selectionTimerInterval) clearInterval(selectionTimerInterval);
  
  const logDiv = document.createElement('div');
  logDiv.className = 'system-message error';
  logDiv.innerHTML = `⚠️ <strong>${opponentName || 'Rakip'}</strong> bağlantıyı kesti! Yeniden bağlanılıyor...`;
  chatMessages.appendChild(logDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  synth.playError();
  
  peerStatus.textContent = 'Rakip ayrıldı. Yeni oyuncu bekleniyor...';
  displayRoomId.textContent = currentRoomId;
  showScreen(waitingScreen);
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
