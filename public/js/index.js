const socket = io()

socket.on('connect', function() {
  console.log('connected to server')

  socket.emit('createMessage', {
    to: 'dudeman',
    text: "Hey. It's me."
  })
})

socket.on('newMessage', function(message) {
  console.log('new message', message)
})

socket.on('disconnect', function() {
  console.log('disconnected from server')
})
