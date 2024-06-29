const generateReport = require('./generateReport')

module.exports = class ReportController {
  static async generateReport(req, res) {
    return await generateReport(req, res)
  }
}