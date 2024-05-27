const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app); // Criar servidor http com o express
const io = require('socket.io')(server); // Criar servidor socket.io com o servidor http criado anteriormente

app.use(express.static('public')); // Definir a pasta public como a pasta de ficheiros estáticos

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

let conexoes = [];
io.on('connection', (socket) => {
    console.log(`Utilizador conectado ao socket com o id ${socket.id}`);
    conexoes.push(socket.id);
    console.log(`Número de utilizadores conectados: ${conexoes.length}`);

    socket.on('disconnect', () => {
        console.log(`Utilizador desconectado do socket com o id ${socket.id}`);
        conexoes = conexoes.filter((id) => id !== socket.id);
        console.log(`Número de utilizadores conectados: ${conexoes.length}`);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});