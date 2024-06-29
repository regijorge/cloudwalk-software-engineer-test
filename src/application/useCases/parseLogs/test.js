const ParsedLogEntity = require('../../../domain/entities/ParsedLogEntity')
const parseLogs = require('./index')

describe('parseLog', () => {
  it('Should parse logs correctly', () => {
    const log = `00:00 InitGame:
    20:59 Item: 2 weapon_rocketlauncher
    00:00 InitGame:
    02:00 InitGame:
    12:00 Item: 2 weapon_rocketlauncher
    21:42 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT`

    const expectedParsedLogs = [
      { matchId: '1', time: '00:00', event: 'InitGame', data: null },
      { matchId: '1', time: '20:59', event: 'Item', data: null },
      { matchId: '2', time: '00:00', event: 'InitGame', data: null },
      { matchId: '2', time: '02:00', event: 'InitGame', data: null },
      { matchId: '2', time: '12:00', event: 'Item', data: null },
      {
        matchId: '2',
        time: '21:42',
        event: 'Kill',
        data: {
          value1: '1022',
          value2: '2',
          value3: '22',
          isKillerPlayer: false,
          killer: '<world>',
          victim: 'Isgalamido',
          cause: 'MOD_TRIGGER_HURT'
        }
      }
    ]

    const parsedLogs = parseLogs(log)

    expect(parsedLogs).toEqual(expectedParsedLogs)
  })
})

