const storeParsedLogs = require('./storeParsedLogs')
const getParsedLogs = require('./getParsedLogs')

module.exports = class ParsedLogRepository {
  static async storeParsedLogs(logs) {
    return storeParsedLogs(logs)
  }

  static async getParsedLogs() {
    return getParsedLogs()
  }
}