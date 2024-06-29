const generateReport = require('../../useCases/generateReport')

module.exports = class ReportService {
  constructor(parsedLogRepository) {
    this.parsedLogRepository = parsedLogRepository
  }

  async generateReport(matchId, reportType, sortBy) {
    const parsedLogs = await this.parsedLogRepository.getParsedLogs()
    const report = generateReport(matchId, reportType, sortBy, parsedLogs)
    return report
  }
}