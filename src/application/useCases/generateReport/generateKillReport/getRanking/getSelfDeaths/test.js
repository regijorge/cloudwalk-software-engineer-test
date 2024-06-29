const getSelfDeaths = require('./index')
const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

jest.mock('../../../utils/getKillLogsByPlayer')

describe('getSelfDeaths', () => {
  it('Should get totalDeaths', () => {
    getKillLogsByPlayer.mockReturnValue([{}])

    const totalDeaths = getSelfDeaths('Player', [{ data: { killer: 'Player', victim: 'Player' } }])
    expect(totalDeaths).toBe(1)
  })
})