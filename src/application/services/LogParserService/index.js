const parseLogs = require('../../useCases/parseLogs')

module.exports = class LogParserService {
  constructor(logRepository, parsedLogRepository) {
    this.logRepository = logRepository
    this.parsedLogRepository = parsedLogRepository
    this.logs = null
    this.parsedLogs = null
  }

  async parseLogs() {
    this.logs = await this.logRepository.getLogs()
    this.parsedLogs = parseLogs(this.logs)

    const filePath = await this.parsedLogRepository.storeParsedLogs(this.parsedLogs)
    return filePath
  }
}