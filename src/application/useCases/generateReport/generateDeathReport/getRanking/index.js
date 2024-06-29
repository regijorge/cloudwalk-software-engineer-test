const getTotalDeaths = require('./getTotalDeaths')
const getWorldDeaths = require('./getWorldDeaths')
const getSelfDeaths = require('./getSelfDeaths')

module.exports = function getRanking(causes, killLogs, sortBy) {
  try {
    const ranking = causes.map(cause => {
      const totalDeaths = getTotalDeaths(cause, killLogs)
      const worldDeaths = getWorldDeaths(cause, killLogs)
      const selfDeaths = getSelfDeaths(cause, killLogs)

      return {
        cause,
        totalDeaths,
        worldDeaths,
        selfDeaths
      }
    })

    const sortKeys = { 
      death: 'totalDeaths', 
      world: 'worldDeaths', 
      self: 'selfDeaths' 
    }
    console.log({sortBy})
    const sortKey = sortKeys[sortBy]
    return ranking.sort((a, b) => b[sortKey] - a[sortKey])
  } catch (error) {
    
  }
}