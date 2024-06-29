const getRanking = require('./index')

const getTotalKills = require('./getTotalKills')
const getTotalDeaths = require('./getTotalDeaths')
const getWorldDeaths = require('./getWorldDeaths')
const getSelfDeaths = require('./getSelfDeaths')

jest.mock('./getTotalKills')
jest.mock('./getTotalDeaths')
jest.mock('./getWorldDeaths')
jest.mock('./getSelfDeaths')

describe('getRanking', () => {
  it('Should get raking sorted correctly', () => {
    getTotalKills.mockImplementation(player => {
      if (player == 'Player1') return 18
      if (player == 'Player2') return 21
      if (player == 'Player3') return 12
    })

    getTotalDeaths.mockImplementation(player => {
      if (player == 'Player1') return 3
      if (player == 'Player2') return 5
      if (player == 'Player3') return 2
    })

    getWorldDeaths.mockImplementation(player => {
      if (player == 'Player1') return 0
      if (player == 'Player2') return 2
      if (player == 'Player3') return 1
    })

    getSelfDeaths.mockImplementation(player => {
      if (player == 'Player1') return 0
      if (player == 'Player2') return 1
      if (player == 'Player3') return 2
    })    

    const players = ['Player1', 'Player2', 'Player3']

    const expectedRanking = [
      { player: 'Player2', totalKills: 21, totalDeaths: 5, worldDeaths: 2, selfDeaths: 1, score: 19 },
      { player: 'Player1', totalKills: 18, totalDeaths: 3, worldDeaths: 0, selfDeaths: 0, score: 18 },
      { player: 'Player3', totalKills: 12, totalDeaths: 2, worldDeaths: 1, selfDeaths: 2, score: 11 },
    ]

    const ranking = getRanking(players, [], 'kill')

    expect(ranking).toEqual(expectedRanking)
  })
})