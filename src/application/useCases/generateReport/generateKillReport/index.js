const getParsedLogsByEvent = require('../utils/getParsedLogsByEvent')
const getPlayers = require('./getPlayers')
const getRanking = require('./getRanking')

const getRankingTotal = require('../utils/getRankingTotal')

module.exports = function generateKillReport(parsedLogs, sortBy) {
  const killLogs = getParsedLogsByEvent('Kill', parsedLogs)

  const players = getPlayers(killLogs)
  const totalPlayers = players.length

  const ranking = getRanking(players, killLogs, sortBy)
  const playerKills = getRankingTotal('playerKills', ranking)
  const worldkills = getRankingTotal('worldDeaths', ranking)
  const selfKills = getRankingTotal('selfDeaths', ranking)

  const totalKills = playerKills + worldkills + selfKills

  return {
    totalKills,
    playerKills,
    worldkills,
    selfKills,
    totalPlayers,
    players,
    ranking
  }
}