const getParsedLogsByEvent = require('../utils/getParsedLogsByEvent')
const getPlayers = require('./getPlayers')
const getRanking = require('./getRanking')

const getRankingTotal = require('../utils/getRankingTotal')

module.exports = function generateKillReport(parsedLogs, sortBy) {
  const killLogs = getParsedLogsByEvent('Kill', parsedLogs)

  const players = getPlayers(killLogs)
  const totalPlayers = players.length

  const ranking = getRanking(players, killLogs, sortBy)
  const totalKills = getRankingTotal('totalKills', ranking)
  const totalDeaths = getRankingTotal('totalDeaths', ranking)
  const worldDeaths = getRankingTotal('worldDeaths', ranking)
  const selfDeaths = getRankingTotal('selfDeaths', ranking)

  return {
    totalKills,
    totalDeaths,
    worldDeaths,
    selfDeaths,
    totalPlayers,
    players,
    ranking
  }
}