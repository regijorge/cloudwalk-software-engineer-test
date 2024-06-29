const groupParsedLogsByMatch = require('./groupParsedLogsByMatch')
const generateReport = require('../../useCases/generateReport')

module.exports = class ReportService {
  constructor(parsedLogRepository) {
    this.parsedLogRepository = parsedLogRepository
  }

  async generateReport(matchId, reportType, sortBy) {
    const parsedLogs = await this.parsedLogRepository.getParsedLogs()

    if (!matchId) {
      const reports = []
      const groupedLogs = groupParsedLogsByMatch(parsedLogs)
      for (const parsedLogs of groupedLogs) {
        const report = generateReport(parsedLogs[0].matchId, reportType, sortBy, parsedLogs)
        reports.push(report)
      }

      return reports
    }

    const report = generateReport(matchId, reportType, sortBy, parsedLogs)
    return report
  }


}