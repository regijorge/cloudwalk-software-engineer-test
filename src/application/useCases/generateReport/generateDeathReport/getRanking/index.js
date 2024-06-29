const getPlayerDeaths = require('./getPlayerDeaths')
const getWorldDeaths = require('./getWorldDeaths')
const getSelfDeaths = require('./getSelfDeaths')

module.exports = function getRanking(causes, killLogs, sortBy) {
  try {
    const ranking = causes.map(cause => {
      const playerDeaths = getPlayerDeaths(cause, killLogs)
      const worldDeaths = getWorldDeaths(cause, killLogs)
      const selfDeaths = getSelfDeaths(cause, killLogs)
      const totalDeaths = playerDeaths + worldDeaths + selfDeaths

      return {
        cause,
        totalDeaths,
        playerDeaths,
        worldDeaths,
        selfDeaths
      }
    })

    const sortKeys = {
      total: 'totalDeaths',
      player: 'playerDeaths',
      world: 'worldDeaths',
      self: 'selfDeaths'
    }

    const sortKey = sortKeys[sortBy]
    return ranking.sort((a, b) => b[sortKey] - a[sortKey])
  } catch (error) {

  }
}