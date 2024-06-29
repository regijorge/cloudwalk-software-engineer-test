const ParsedLogRepository = require('../../../../infrastructure/repositories/ParsedLogRepository')
const ReportService = require('../../../../application/services/ReportService')

module.exports = async function generateReportCommand(options) {
  try {
    const { matchId, reportType, sortBy } = options
    if (reportType != 'kill' && reportType != 'death') {
      throw new Error('Report type is rrquired')
    }

    const reportService = new ReportService(ParsedLogRepository)
    const report = await reportService.generateReport(matchId, reportType, sortBy)

    console.log(JSON.stringify(report, null, 2))
    process.exit(0)
  } catch (error) {
    console.error('[cli][generateReportCommand] Error generating report:', error.message)
    process.exit(1)
  }
}