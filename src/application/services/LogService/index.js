module.exports = class LogService {
  constructor(logRepository) {
    this.logRepository = logRepository
    this.logs = null
  }

  async downloadLogs() {
    this.logs = await this.logRepository.downloadLogs()
  }

  async storeLogs() {
    if (!this.logs) {
      throw new Error('No data to store. Download logs first.')
    }

    const filePath = await this.logRepository.storeLogs(this.logs)
    return filePath
  }
}