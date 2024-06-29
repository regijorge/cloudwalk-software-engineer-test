const getRanking = require('./index')

const getPlayerDeaths = require('./getPlayerDeaths')
const getWorldDeaths = require('./getWorldDeaths')
const getSelfDeaths = require('./getSelfDeaths')

jest.mock('./getPlayerDeaths')
jest.mock('./getWorldDeaths')
jest.mock('./getSelfDeaths')

describe('getRanking', () => {
  it('Should get raking sorted correctly', () => {
    getPlayerDeaths.mockImplementation(cause => {
      if (cause == 'MOD_SHOTGUN') return 3
      if (cause == 'MOD_RAILGUN') return 5
      if (cause == 'MOD_GAUNTLET') return 2
    })

    getWorldDeaths.mockImplementation(cause => {
      if (cause == 'MOD_SHOTGUN') return 1
      if (cause == 'MOD_RAILGUN') return 4
      if (cause == 'MOD_GAUNTLET') return 1
    })

    getSelfDeaths.mockImplementation(cause => {
      if (cause == 'MOD_SHOTGUN') return 1
      if (cause == 'MOD_RAILGUN') return 3
      if (cause == 'MOD_GAUNTLET') return 1
    })

    const causes = ['MOD_SHOTGUN', 'MOD_RAILGUN', 'MOD_GAUNTLET']

    const expectedRanking = [
      { cause: 'MOD_RAILGUN', totalDeaths: 12, playerDeaths: 5, worldDeaths: 4, selfDeaths: 3 },
      { cause: 'MOD_SHOTGUN', totalDeaths: 5, playerDeaths: 3, worldDeaths: 1, selfDeaths: 1 },
      { cause: 'MOD_GAUNTLET', totalDeaths: 4, playerDeaths: 2, worldDeaths: 1, selfDeaths: 1 }
    ]

    const ranking = getRanking(causes, [], 'total')
    expect(ranking).toEqual(expectedRanking)
  })
})