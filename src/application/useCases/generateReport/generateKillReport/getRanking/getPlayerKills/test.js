const getPlayerKills = require('./index')
const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

jest.mock('../../../utils/getKillLogsByPlayer')

describe('getPlayerKills', () => {
  it('Should get playerKills', () => {
    getKillLogsByPlayer.mockReturnValue([{}, {}])

    const playerKills = getPlayerKills('Player', [])
    expect(playerKills).toBe(2)
  })
})