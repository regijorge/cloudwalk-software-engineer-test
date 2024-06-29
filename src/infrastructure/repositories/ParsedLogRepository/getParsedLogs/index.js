const fs = require('fs')
const path = require('path')

module.exports = async function getParsedLogs() {
  const filePath = path.join(__dirname, '../../../fileStorage/logs/parsedLogs.json')

  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const logs = JSON.parse(content)
    return logs
  } catch (error) {
    console.error('[ParsedLogRepository][getParsedLogs] Could not get the logs', error)
    throw error
  }
}