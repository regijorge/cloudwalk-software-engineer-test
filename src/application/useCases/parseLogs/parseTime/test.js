const parseTime = require('./index')

describe('parseTime', () => {
  it('Should throw error when line is invalid', () => {
    const line = 'invalid line 20:59 weapon_rocketlauncher'
    expect(() => {
      parseTime(line)
    }).toThrowError(`Time not found in ${line}`)
  })

  it('Should parse and get the time', () => {
    const line = '20:59 Item: 2 weapon_rocketlauncher'
    const time = parseTime(line)

    expect(time).toBe('20:59')
  })
})