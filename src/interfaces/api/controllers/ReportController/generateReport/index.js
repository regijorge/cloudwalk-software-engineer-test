const ParsedLogRepository = require('../../../../../infrastructure/repositories/ParsedLogRepository')
const ReportService = require('../../../../../application/services/ReportService')

module.exports = async function generateReport(req, res) {
  try {
    const matchId = req.params.matchId
    let { sortBy, reportType } = req.query

    const allowedReportTypes = ['kill', 'death']
    if (!reportType || !allowedReportTypes.includes(reportType)) {
      return res.status(400).json({ message: 'reportType should be either "kill" or "death"' })
    }

    if (!sortBy) {
      sortBy = reportType === 'kill' ? 'score' : 'death'
    }

    const allowedKillSortBy = ['kill', 'total', 'player', 'world', 'self', 'score']
    if (reportType== 'kill' && !allowedKillSortBy.includes(sortBy)) {
      return res.status(400).json({ message: `sortBy should be either 'kill', 'total', 'player', 'world', 'self', or 'score'` })
    }


    const allowedDeathSortBy = ['total', 'player', 'world', 'self']
    if (reportType== 'death' && !allowedDeathSortBy.includes(sortBy)) {
      return res.status(400).json({ message: `sortBy should be either 'total', 'player', 'world', or 'self'` })
    }

    const reportService = new ReportService(ParsedLogRepository)
    const report = await reportService.generateReport(matchId, reportType, sortBy)

    return res.status(200).json(report)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
