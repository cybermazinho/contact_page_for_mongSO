const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on("message", res => {
    socket.broadcast.emit('message', res)
  })

});

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("On").end()
})

server.listen(3001, () => {
  console.log('server running!');
});