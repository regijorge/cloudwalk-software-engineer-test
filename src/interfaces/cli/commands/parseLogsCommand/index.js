const LogRepository = require('../../../../infrastructure/repositories/LogRepository')
const ParsedLogRepository = require('../../../../infrastructure/repositories/ParsedLogRepository')
const LogParserService = require('../../../../application/services/LogParserService')

module.exports = async function parseLogsCommand() {
  try {
    const logParserService = new LogParserService(LogRepository, ParsedLogRepository)

    const filePath = await logParserService.parseLogs()
    console.log('Logs parsed and stored successfully at', filePath)

    process.exit()
  } catch (error) {
    console.error('[cli][parseLogsCommand] Could not parse the logs', error)
    process.exit(1)
  }
}