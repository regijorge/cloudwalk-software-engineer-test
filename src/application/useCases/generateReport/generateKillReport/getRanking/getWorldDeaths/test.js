const getWorldDeaths = require('./index')
const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

jest.mock('../../../utils/getKillLogsByPlayer')

describe('getWorldDeaths', () => {
  it('Should get totalDeaths', () => {
    getKillLogsByPlayer.mockReturnValue([{}])

    const totalDeaths = getWorldDeaths('Player', [])
    expect(totalDeaths).toBe(1)
  })
})