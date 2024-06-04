const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app); // Criar servidor http com o express
const io = require("socket.io")(server); // Criar servidor socket.io com o servidor http criado anteriormente

app.use(express.static("public")); // Definir a pasta public como a pasta de ficheiros estáticos

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

let conexoes = [];
io.on("connection", (socket) => {
  // Evento para quando um utilizador se conecta ao socket [io é o servidor socket.io]
  console.log(`[SOCKET] Novo utilizador conectado! ID: ${socket.id}`);
  conexoes.push(socket.id);
  console.log(`Número de utilizadores conectados: ${conexoes.length}`);

  socket.on("disconnect", () => {
    // Evento para quando um utilizador se desconecta do socket [socket. seria o parametro do evento]
    console.log(`[SOCKET] Utilizador desconectado! ID: ${socket.id}`);
    conexoes = conexoes.filter((id) => id !== socket.id); // Filtrar o array de conexões para remover o id do utilizador que se desconectou
  });
});

server.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
