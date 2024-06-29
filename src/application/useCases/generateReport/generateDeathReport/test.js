const generateDeathReport = require('./index')

const getParsedLogsByEvent = require('../utils/getParsedLogsByEvent')
const getPlayers = require('./getCauses')
const getRanking = require('./getRanking')
const getCauses = require('./getCauses')

jest.mock('../utils/getParsedLogsByEvent')
jest.mock('./getCauses')
jest.mock('./getRanking')

describe('generateDeathReport', () => {
  const parsedLogs = [
    { event: 'Kill', cause: 'MOD_SHOTGUN' },
    { event: 'Kill', cause: 'MOD_RAILGUN' },
    { event: 'Kill', cause: 'MOD_SHOTGUN' },
    { event: 'Connect', player: 'Player4' },
  ]

  const killLogs = [
    { event: 'Kill', cause: 'MOD_SHOTGUN' },
    { event: 'Kill', cause: 'MOD_RAILGUN' },
    { event: 'Kill', cause: 'MOD_SHOTGUN' }
  ]

  const causes = ['MOD_SHOTGUN', 'MOD_RAILGUN']
  const ranking = [
    { cause: 'MOD_SHOTGUN', totalDeaths: 2, worldDeaths: 0, selfDeaths: 2 },
    { cause: 'MOD_RAILGUN', totalDeaths: 1, worldDeaths: 1, selfDeaths: 0 }
  ]

  it('Should generate death report correctly', () => {
    const sortBy = 'death'

    getParsedLogsByEvent.mockReturnValue(killLogs)
    getPlayers.mockReturnValue(causes)
    getRanking.mockReturnValue(ranking)

    const expectedReport = {
      totalDeaths: 3,
      worldDeaths: 1,
      selfDeaths: 2,
      totalCauses: 2,
      causes,
      ranking,
    }

    const report = generateDeathReport(parsedLogs, sortBy)
    expect(report).toEqual(expectedReport)

    expect(getParsedLogsByEvent).toHaveBeenCalledWith('Kill', parsedLogs)
    expect(getCauses).toHaveBeenCalledWith(killLogs)
    expect(getRanking).toHaveBeenCalledWith(causes, killLogs, sortBy)
  })
})