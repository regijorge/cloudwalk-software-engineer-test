const getTotalKills = require('./index')
const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

jest.mock('../../../utils/getKillLogsByPlayer')

describe('getTotalKills', () => {
  it('Should get totalKills', () => {
    getKillLogsByPlayer.mockReturnValue([{}, {}])

    const totalKills = getTotalKills('Player', [])
    expect(totalKills).toBe(2)
  })
})