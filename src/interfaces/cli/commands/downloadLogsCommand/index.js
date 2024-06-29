const LogRepository = require('../../../../infrastructure/repositories/LogRepository')
const LogService = require('../../../../application/services/LogService')

module.exports = async function downloadLogsCommand() {
  try {
    const logService = new LogService(LogRepository)

    const data = await logService.downloadLogs()
    console.log('Logs downloaded successfully.')

    const filePath = await logService.storeLogs()
    console.log('Logs stored successfully at:', filePath)

    process.exit()
  } catch (error) {
    console.error('[cli][downloadLogsCommand] Could not download the logs', error)
    process.exit(1)
  }
}