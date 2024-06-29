const fs = require('fs')
const path = require('path')

module.exports = async function storeParsedLogs(parsedLogs) {
  const filePath = path.join(__dirname, '../../../fileStorage/logs/parsedLogs.json')

  try {
    fs.writeFileSync(filePath, JSON.stringify(parsedLogs, null, 2))
    return filePath
  } catch (error) {
    console.error('[ParsedLogRepository][storeParsedLogs] Could not store parsed logs', error)
    throw error
  }
}