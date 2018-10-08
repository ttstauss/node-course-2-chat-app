const expect = require('expect')

const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'testman'
    const text = 'Yo, dude'
    const message = generateMessage(from, text)

    expect(typeof message.createdAt).toBe('number')
    expect(message).toMatchObject({ from, text })
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'testman'
    const latitude = '123'
    const longitude = '321'
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`
    const message = generateLocationMessage(from, latitude, longitude)

    expect(typeof message.createdAt).toBe('number')
    expect(message).toMatchObject({ from, url })
  })
})
