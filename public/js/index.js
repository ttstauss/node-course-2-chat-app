const socket = io('/')

socket.on('connect', function() {})

socket.on('rooms', function(rooms) {
  const template = jQuery('#rooms-template').html()
  const html = Mustache.render(template, { rooms: rooms })
  jQuery('#rooms-field').html(html)
})

socket.on('disconnect', function() {
  console.log('disconnected from server')
})
