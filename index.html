const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Statik dosyaları (HTML, CSS, JS vb.) doğrudan ana dizinden çeker
app.use(express.static(__dirname));

// Siteye ilk girildiğinde index.html dosyasını ekrana yansıtır
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Character database
const characters = [
  { id: "jean", name: "Jean", element: "Anemo", weapon: "Kılıç", region: "Mondstadt", gender: "Kadın" },
  { id: "diluc", name: "Diluc", element: "Pyro", weapon: "Çift Elli Kılıç", region: "Mondstadt", gender: "Erkek" },
  { id: "venti", name: "Venti", element: "Anemo", weapon: "Yay", region: "Mondstadt", gender: "Erkek" },
  { id: "keqing", name: "Keqing", element: "Electro", weapon: "Kılıç", region: "Liyue", gender: "Kadın" },
  { id: "mona", name: "Mona", element: "Hydro", weapon: "Katalizör", region: "Mondstadt", gender: "Kadın" },
  { id: "qiqi", name: "Qiqi", element: "Cryo", weapon: "Kılıç", region: "Liyue", gender: "Kadın" },
  { id: "zhongli", name: "Zhongli", element: "Geo", weapon: "Mızrak", region: "Liyue", gender: "Erkek" },
  { id: "xiao", name: "Xiao", element: "Anemo", weapon: "Mızrak", region: "Liyue", gender: "Erkek" },
  { id: "hutao", name: "Hu Tao", element: "Pyro", weapon: "Mızrak", region: "Liyue", gender: "Kadın" },
  { id: "ganyu", name: "Ganyu", element: "Cryo", weapon: "Yay", region: "Liyue", gender: "Kadın" },
  { id: "eula", name: "Eula", element: "Cryo", weapon: "Çift Elli Kılıç", region: "Mondstadt", gender: "Kadın" },
  { id: "raiden", name: "Raiden Shogun", element: "Electro", weapon: "Mızrak", region: "Inazuma", gender: "Kadın" },
  { id: "ayaka", name: "Kamisato Ayaka", element: "Cryo", weapon: "Kılıç", region: "Inazuma", gender: "Kadın" },
  { id: "kazuha", name: "Kaedehara Kazuha", element: "Anemo", weapon: "Kılıç", region: "Inazuma", gender: "Erkek" },
  { id: "yoimiya", name: "Yoimiya", element: "Pyro", weapon: "Yay", region: "Inazuma", gender: "Kadın" },
  { id: "yae", name: "Yae Miko", element: "Electro", weapon: "Katalizör", region: "Inazuma", gender: "Kadın" },
  { id: "nahida", name: "Nahida", element: "Dendro", weapon: "Katalizör", region: "Sumeru", gender: "Kadın" },
  { id: "alhaitham", name: "Alhaitham", element: "Dendro", weapon: "Kılıç", region: "Sumeru", gender: "Erkek" },
  { id: "nilou", name: "Nilou", element: "Hydro", weapon: "Kılıç", region: "Sumeru", gender: "Kadın" },
  { id: "furina", name: "Furina", element: "Hydro", weapon: "Kılıç", region: "Fontaine", gender: "Kadın" },
  { id: "neuvillette", name: "Neuvillette", element: "Hydro", weapon: "Katalizör", region: "Fontaine", gender: "Erkek" },
  { id: "navia", name: "Navia", element: "Geo", weapon: "Çift Elli Kılıç", region: "Fontaine", gender: "Kadın" },
  { id: "wriothesley", name: "Wriothesley", element: "Cryo", weapon: "Katalizör", region: "Fontaine", gender: "Erkek" },
  { id: "tartaglia", name: "Tartaglia", element: "Hydro", weapon: "Yay", region: "Snezhnaya", gender: "Erkek" }
];

// In-memory room manager
const rooms = {};

function generateRoomId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Readable random characters
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Create Room
  socket.on('createRoom', ({ nickname }) => {
    const roomId = generateRoomId();
    rooms[roomId] = {
      id: roomId,
      players: [
        {
          id: socket.id,
          nickname: nickname,
          secretCharacter: null,
          ready: false
        }
      ],
      gameState: 'waiting', // waiting, playing, finished
      turn: null
    };

    socket.join(roomId);
    socket.emit('roomCreated', { roomId, nickname });
    console.log(`Room created: ${roomId} by ${nickname}`);
  });

  // Join Room
  socket.on('joinRoom', ({ roomId, nickname }) => {
    const cleanRoomId = roomId.trim().toUpperCase();
    const room = rooms[cleanRoomId];

    if (!room) {
      socket.emit('errorMsg', { message: 'Oda bulunamadı! Lütfen kodu kontrol edin.' });
      return;
    }

    if (room.players.length >= 2) {
      socket.emit('errorMsg', { message: 'Oda zaten dolu! En fazla 2 oyuncu katılabilir.' });
      return;
    }

    if (room.gameState !== 'waiting') {
      socket.emit('errorMsg', { message: 'Bu oda zaten oyuna başlamış!' });
      return;
    }

    room.players.push({
      id: socket.id,
      nickname: nickname,
      secretCharacter: null,
      ready: false
    });

    socket.join(cleanRoomId);
    console.log(`${nickname} joined room ${cleanRoomId}`);

    // Notify current room
    io.to(cleanRoomId).emit('playerJoined', {
      players: room.players.map(p => ({ id: p.id, nickname: p.nickname }))
    });

    // Automatically trigger game start since we have 2 players now
    startGame(cleanRoomId);
  });

  // Chat message
  socket.on('chatMessage', ({ roomId, message }) => {
    const room = rooms[roomId];
    if (!room) return;

    const sender = room.players.find(p => p.id === socket.id);
    if (!sender) return;

    // Send the message to all clients in the room
    io.to(roomId).emit('messageReceived', {
      senderId: socket.id,
      senderName: sender.nickname,
      text: message,
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    });
  });

  // Player Guesses Opponent's Character
  socket.on('makeGuess', ({ roomId, characterId }) => {
    const room = rooms[roomId];
    if (!room) return;

    const playerIndex = room.players.findIndex(p => p.id === socket.id);
    if (playerIndex === -1) return;

    const opponentIndex = playerIndex === 0 ? 1 : 0;
    const opponent = room.players[opponentIndex];
    const player = room.players[playerIndex];

    const isCorrect = opponent.secretCharacter.id === characterId;

    if (isCorrect) {
      room.gameState = 'finished';
      io.to(roomId).emit('gameOver', {
        winnerId: player.id,
        winnerName: player.nickname,
        loserId: opponent.id,
        loserName: opponent.nickname,
        secretCharacter: opponent.secretCharacter
      });
    } else {
      // Switch turns and announce incorrect guess in chat
      room.turn = opponent.id;
      
      io.to(roomId).emit('incorrectGuess', {
        guesserId: player.id,
        guesserName: player.nickname,
        guessedCharName: characters.find(c => c.id === characterId)?.name || 'Bilinmeyen Karakter',
        nextTurnId: room.turn,
        nextTurnName: opponent.nickname
      });
    }
  });

  // Pass Turn
  socket.on('passTurn', ({ roomId }) => {
    const room = rooms[roomId];
    if (!room) return;

    const playerIndex = room.players.findIndex(p => p.id === socket.id);
    if (playerIndex === -1) return;

    const opponentIndex = playerIndex === 0 ? 1 : 0;
    const opponent = room.players[opponentIndex];

    room.turn = opponent.id;

    io.to(roomId).emit('turnSwapped', {
      currentTurnId: room.turn,
      currentTurnName: opponent.nickname
    });
  });

  // Restart Game / Play Again
  socket.on('playAgain', ({ roomId }) => {
    const room = rooms[roomId];
    if (!room) return;

    // Reset game state and restart
    room.gameState = 'waiting';
    room.players.forEach(p => {
      p.secretCharacter = null;
    });

    io.to(roomId).emit('restarted');
    startGame(roomId);
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    
    // Find room the player was in
    for (const roomId in rooms) {
      const room = rooms[roomId];
      const playerIndex = room.players.findIndex(p => p.id === socket.id);
      
      if (playerIndex !== -1) {
        // Remove player
        const leavingPlayer = room.players[playerIndex];
        room.players.splice(playerIndex, 1);

        if (room.players.length === 0) {
          // Delete empty room
          delete rooms[roomId];
          console.log(`Deleted empty room: ${roomId}`);
        } else {
          // Notify the remaining player
          room.gameState = 'waiting';
          io.to(roomId).emit('playerLeft', {
            nickname: leavingPlayer.nickname
          });
        }
        break;
      }
    }
  });
});

function startGame(roomId) {
  const room = rooms[roomId];
  if (!room || room.players.length < 2) return;

  // Select two different secret characters
  const char1 = characters[Math.floor(Math.random() * characters.length)];
  let char2 = characters[Math.floor(Math.random() * characters.length)];
  while (char2.id === char1.id) {
    char2 = characters[Math.floor(Math.random() * characters.length)];
  }

  room.players[0].secretCharacter = char1;
  room.players[1].secretCharacter = char2;

  room.gameState = 'playing';
  // Randomly assign the first turn
  const startingPlayer = room.players[Math.floor(Math.random() * 2)];
  room.turn = startingPlayer.id;

  // Send start event to each player privately with their respective secret character
  room.players.forEach((player, idx) => {
    const opponent = room.players[idx === 0 ? 1 : 0];
    io.to(player.id).emit('gameStarted', {
      secretCharacter: player.secretCharacter,
      opponentNickname: opponent.nickname,
      characters: characters, // Send characters database
      turnId: room.turn,
      turnName: startingPlayer.nickname
    });
  });

  console.log(`Game started in room ${roomId}. Turn: ${startingPlayer.nickname}`);
}

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
