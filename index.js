const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  socket.on('a', ( name, message ) => {
    io.emit('a', { name, message })
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})
