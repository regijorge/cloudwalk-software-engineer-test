const ParsedLogEntity = require('../../../domain/entities/ParsedLogEntity')

const parseTime = require('./parseTime')
const parseEvent = require('./parseEvent')
const parseData = require('./parseData')

module.exports = function parseLogs(logs) {
  const lines = logs.split('\n')

  const parsedLogs = []
  let matchId = 1
  let matchLogCount = 0
  for (const rawLine of lines) {
    if (rawLine.includes('--------')) continue

    const line = rawLine.trim()
    const time = parseTime(line)
    const event = parseEvent(line)
    const data = parseData(event, line)

    if (event == 'InitGame' && matchLogCount > 1) {
      matchId++
      matchLogCount = 0
    }
    
    const parsedLog = new ParsedLogEntity(matchId.toString(), time, event, data)
    parsedLogs.push(parsedLog.get())
    matchLogCount++
  }
  
  return parsedLogs
}
