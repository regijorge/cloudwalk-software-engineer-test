const fs = require('fs')
const path = require('path')

module.exports = async function storeLogs(logs) {
  const filePath = path.join(__dirname, '../../../fileStorage/logs/logs.txt')

  try {
    // throw new Error('teste')
    fs.writeFileSync(filePath, logs)
    return filePath
  } catch (error) {
    console.error('[LogRepository][storeLogs] Could not store logs', error)
    throw error
  }
}