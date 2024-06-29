const getTotalDeaths = require('./index')
const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

jest.mock('../../../utils/getKillLogsByPlayer')

describe('getTotalDeaths', () => {
  it('Should get totalDeaths', () => {
    getKillLogsByPlayer.mockReturnValue([{}])

    const totalDeaths = getTotalDeaths('Player', [])
    expect(totalDeaths).toBe(1)
  })
})