const fs = require('fs')
const path = require('path')

module.exports = async function getLogs(logs) {
  const filePath = path.join(__dirname, '../../../fileStorage/logs/logs.txt')

  try {
    const logs = fs.readFileSync(filePath, 'utf8')
    return logs
  } catch (error) {
    console.error('[LogRepository][getLogs] Could not get the logs', error)
    throw error
  }
}