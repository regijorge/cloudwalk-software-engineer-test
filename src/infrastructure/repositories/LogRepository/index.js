const downloadLogs = require('./downloadLogs')
const storeLogs = require('./storeLogs')
const getLogs = require('./getLogs')

module.exports = class LogRepository {
  static async downloadLogs() {
    return await downloadLogs()
  }

  static async storeLogs(logs) {
    return storeLogs(logs)
  }

  static async getLogs() {
    return getLogs()
  }
}