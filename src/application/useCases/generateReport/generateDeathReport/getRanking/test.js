const getRanking = require('./index')

const getTotalDeaths = require('./getTotalDeaths')
const getWorldDeaths = require('./getWorldDeaths')
const getSelfDeaths = require('./getSelfDeaths')

jest.mock('./getTotalDeaths')
jest.mock('./getWorldDeaths')
jest.mock('./getSelfDeaths')

describe('getRanking', () => {
  it('Should get raking sorted correctly', () => {
    getTotalDeaths.mockImplementation(cause => {
      if (cause == 'MOD_SHOTGUN') return 3
      if (cause == 'MOD_RAILGUN') return 5
      if (cause == 'MOD_GAUNTLET') return 2
    })    

    getWorldDeaths.mockImplementation(cause => {
      if (cause == 'MOD_SHOTGUN') return 1
      if (cause == 'MOD_RAILGUN') return 4
      if (cause == 'MOD_GAUNTLET') return 3
    })    

    getSelfDeaths.mockImplementation(cause => {
      if (cause == 'MOD_SHOTGUN') return 1
      if (cause == 'MOD_RAILGUN') return 3
      if (cause == 'MOD_GAUNTLET') return 2
    })

    const causes = ['MOD_SHOTGUN', 'MOD_RAILGUN', 'MOD_GAUNTLET']

    const expectedRanking = [
      { cause: 'MOD_RAILGUN', totalDeaths: 5, worldDeaths: 4, selfDeaths: 3 },
      { cause: 'MOD_SHOTGUN', totalDeaths: 3, worldDeaths: 1, selfDeaths: 1 },
      { cause: 'MOD_GAUNTLET', totalDeaths: 2, worldDeaths: 3, selfDeaths: 2 }
    ]

    const ranking = getRanking(causes, [], 'death')
    expect(ranking).toEqual(expectedRanking)
  })
})