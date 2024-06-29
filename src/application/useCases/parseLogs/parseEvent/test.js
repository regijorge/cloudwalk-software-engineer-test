const parseEvent = require('./index')

describe('parseEvent', () => {
  it('Should throw error when line is invalid', () => {
    const line = 'invalid line 20:59 weapon_rocketlauncher'
    expect(() => {
      parseEvent(line)
    }).toThrowError(`Event not found in ${line}`)
  })

  it('Should parse and get the event', () => {
    const line = '20:59 Item: 2 weapon_rocketlauncher'
    const time = parseEvent(line)

    expect(time).toBe('Item')
  })
})