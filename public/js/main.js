import * as store from "./store.js"; // Seria: const store = require("./store.js"); -> * é um wildcard que importa tudo

const socket = io("/"); // Conectar ao servidor socket.io na mesma origem

socket.on("connect", () => {
  console.log(`[SOCKET] Conectado! ID: ${socket.id}`);
  store.setSocketId(socket.id);
});
