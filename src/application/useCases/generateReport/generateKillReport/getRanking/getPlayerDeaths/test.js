const getPlayerDeaths = require('./index')
const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

jest.mock('../../../utils/getKillLogsByPlayer')

describe('getPlayerDeaths', () => {
  it('Should get playerDeaths', () => {
    getKillLogsByPlayer.mockReturnValue([{}])

    const playerDeaths = getPlayerDeaths('Player', [{ data: { killer: 'Player2', victim: 'Player' } }])
    expect(playerDeaths).toBe(1)
  })
})