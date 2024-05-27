const socket = io("/"); // Conectar ao servidor socket.io na mesma origem

socket.on('connect', () => {
  console.log("Conectei-me ao servidor socket.io com o id " + socket.id);
});
