const getPlayerKills = require('./getPlayerKills')
const getPlayerDeaths = require('./getPlayerDeaths')
const getWorldDeaths = require('./getWorldDeaths')
const getSelfDeaths = require('./getSelfDeaths')

module.exports = function getRankings(players, killLogs, sortBy) {
  try {
    const ranking = players.map(player => {
      const playerKills = getPlayerKills(player, killLogs)
      const playerDeaths = getPlayerDeaths(player, killLogs)
      const worldDeaths = getWorldDeaths(player, killLogs)
      const selfDeaths = getSelfDeaths(player, killLogs)
      const totalDeaths = playerDeaths + worldDeaths + selfDeaths

      const score = playerKills - worldDeaths

      return {
        player,
        playerKills,
        totalDeaths,
        playerDeaths,
        worldDeaths,
        selfDeaths,
        score
      }
    })

    const sortKeys = {
      kill: 'playerKills',
      total: 'totalDeaths',
      player: 'playerDeaths',
      world: 'worldDeaths',
      self: 'selfDeaths',
      score: 'score'
    }
    const sortKey = sortKeys[sortBy]
    return ranking.sort((a, b) => b[sortKey] - a[sortKey])
  } catch (error) {

  }
}