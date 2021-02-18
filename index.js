const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', socket => {
  socket.on('calculator', ( name, message ) => {
    io.emit('calculator', { name, message })
  })
})

const PORT = process.env.PORT || 5000

http.listen(PORT, function() {
  console.log(`listening on port ${PORT}`)
})

