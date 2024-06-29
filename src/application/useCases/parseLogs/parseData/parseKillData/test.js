const parseKillData = require('./index')

describe('parseKillData', () => {
  it('Should throw error when line is invalid', () => {
    const line = 'invalid line 21:42 Kill: 1022 2 22: <world> killed'
    expect(() => {
      parseKillData(line)
    }).toThrowError(`Line has not expected pattern ${line}`)
  })

  it('Should parse and get the kill data', () => {
    const line = '21:42 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT'
    
    const expectedKillData = {
      value1: '1022',
      value2: '2',
      value3: '22',
      isKillerPlayer: false,
      killer: '<world>',
      victim: 'Isgalamido',
      cause: 'MOD_TRIGGER_HURT'
    }
    const killData = parseKillData(line)

    expect(killData).toEqual(expectedKillData)
  })
})