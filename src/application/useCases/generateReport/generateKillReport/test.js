const generateKillReport = require('./index')

const getParsedLogsByEvent = require('../utils/getParsedLogsByEvent')
const getPlayers = require('./getPlayers')
const getRanking = require('./getRanking')

jest.mock('../utils/getParsedLogsByEvent')
jest.mock('./getPlayers')
jest.mock('./getRanking')

describe('generateKillReport', () => {
  const parsedLogs = [
    { event: 'Kill', killer: 'Player1', victim: 'Player2' },
    { event: 'Kill', killer: 'Player1', victim: 'Player3' },
    { event: 'Kill', killer: 'Player2', victim: 'Player3' },
    { event: 'Connect', player: 'Player4' },
  ]

  const killLogs = [
    { event: 'Kill', killer: 'Player1', victim: 'Player2' },
    { event: 'Kill', killer: 'Player1', victim: 'Player3' },
    { event: 'Kill', killer: 'Player2', victim: 'Player3' },
  ]

  const players = ['Player1', 'Player2', 'Player3']
  const ranking = [
    { player: 'Player1', playerKills: 2, totalDeaths: 0, worldDeaths: 0, selfDeaths: 2, score: 2 },
    { player: 'Player2', playerKills: 1, totalDeaths: 0, worldDeaths: 0, selfDeaths: 1, score: 1 },
    { player: 'Player3', playerKills: 0, totalDeaths: 2, worldDeaths: 0, selfDeaths: 0, score: -2 },
  ]

  it('Should generate kill report correctly', () => {
    getParsedLogsByEvent.mockReturnValue(killLogs)
    getPlayers.mockReturnValue(players)
    getRanking.mockReturnValue(ranking)

    const expectedReport = {
      totalKills: 6,
      playerKills: 3,
      worldkills: 0,
      selfKills: 3,
      totalPlayers: 3,
      players,
      ranking,
    }

    const report = generateKillReport(parsedLogs, 'score')
    expect(report).toEqual(expectedReport)

    expect(getParsedLogsByEvent).toHaveBeenCalledWith('Kill', parsedLogs)
    expect(getPlayers).toHaveBeenCalledWith(killLogs)
    expect(getRanking).toHaveBeenCalledWith(players, killLogs, 'score')
  })
})