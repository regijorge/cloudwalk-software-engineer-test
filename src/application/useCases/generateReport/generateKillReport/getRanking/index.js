const getTotalKills = require('./getTotalKills')
const getTotalDeaths = require('./getTotalDeaths')
const getWorldDeaths = require('./getWorldDeaths')
const getSelfDeaths = require('./getSelfDeaths')

module.exports = function getRankings(players, killLogs, sortBy) {
  try {
    const ranking = players.map(player => {
      const totalKills = getTotalKills(player, killLogs)
      const totalDeaths = getTotalDeaths(player, killLogs)
      const worldDeaths = getWorldDeaths(player, killLogs)
      const selfDeaths = getSelfDeaths(player, killLogs)
      const score = totalKills - worldDeaths

      return {
        player,
        totalKills,
        totalDeaths,
        worldDeaths,
        selfDeaths,
        score
      }
    })

    const sortKeys = { 
      kill: 'totalKills', 
      death: 'totalDeaths', 
      world: 'worldDeaths', 
      self: 'selfDeaths', 
      score: 'score' 
    }
    const sortKey = sortKeys[sortBy]
    return ranking.sort((a, b) => b[sortKey] - a[sortKey])
  } catch (error) {
    
  }
}