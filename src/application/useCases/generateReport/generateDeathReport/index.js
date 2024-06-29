const getParsedLogsByEvent = require('../utils/getParsedLogsByEvent')
const getCauses = require('./getCauses')
const getRanking = require('./getRanking')

const getRankingTotal = require('../utils/getRankingTotal')

module.exports = function generateDeathReport(parsedLogs, sortBy) {
  const killLogs = getParsedLogsByEvent('Kill', parsedLogs)

  const causes = getCauses(killLogs)
  const totalCauses = causes.length

  const ranking = getRanking(causes, killLogs, sortBy)
  const totalDeaths = getRankingTotal('totalDeaths', ranking)
  const worldDeaths = getRankingTotal('worldDeaths', ranking)
  const selfDeaths = getRankingTotal('selfDeaths', ranking)

  return {
    totalDeaths,
    worldDeaths,
    selfDeaths,
    totalCauses,
    causes,
    ranking
  }
}