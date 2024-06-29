const ReportEntity = require('../../../domain/entities/ReportEntity')

const generateKillReport = require('./generateKillReport')
const generateDeathReport = require('./generateDeathReport')

const getParsedLogsByMatch = require('./utils/getParsedLogsByMatch')

module.exports = function generateReport(matchId, reportType, sortBy, parsedLogs) {
  let filteredParsedLogs = parsedLogs
  if (matchId) {
    filteredParsedLogs = getParsedLogsByMatch(matchId, parsedLogs)
  }

  let report
  if (reportType == 'kill') {
    report = generateKillReport(filteredParsedLogs, sortBy)
  }
  
  if (reportType == 'death') {
    report = generateDeathReport(filteredParsedLogs, sortBy)
  }

  const reportEntity = new ReportEntity(matchId, report)
  return reportEntity.get()
}