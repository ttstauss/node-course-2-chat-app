const socket = io()

socket.on('connect', function() {
  console.log('connected to server')
})

socket.on('newMessage', function(message) {
  console.log('new message', message)
  const li = jQuery('<li></li>')
  li.text(`${message.from}: ${message.text}`)

  jQuery('#messages').append(li)
})

socket.on('newLocationMessage', function(message) {
  console.log('new location message', message)
  const li = jQuery('<li></li>')
  const a = jQuery('<a target="_blank">My current location</a>')

  li.text(`${message.from}: `)
  a.attr('href', message.url)
  li.append(a)

  jQuery('#messages').append(li)
})

socket.on('disconnect', function() {
  console.log('disconnected from server')
})

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault()

  const messageTextbox = jQuery('[name=message]')
  socket.emit(
    'createMessage',
    {
      from: 'User',
      text: messageTextbox.val()
    },
    function() {
      messageTextbox.val('')
    }
  )
})

const locationButton = jQuery('#send-location')
locationButton.on('click', function() {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser')
  }

  locationButton.attr('disabled', 'disabled').text('Sending Location...')

  navigator.geolocation.getCurrentPosition(
    function(position) {
      locationButton.removeAttr('disabled').text('Send Location')
      socket.emit('createLocationMessage', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    },
    function() {
      locationButton.removeAttr('disabled').text('Send Location')
      alert('Unable to fetch location')
    }
  )
})
