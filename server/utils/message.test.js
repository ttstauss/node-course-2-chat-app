const expect = require('expect')

const { generateMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'testman'
    const text = 'Yo, dude'
    const message = generateMessage(from, text)

    expect(typeof message.createdAt).toBe('number')
    expect(message).toMatchObject({ from, text })
  })
})
