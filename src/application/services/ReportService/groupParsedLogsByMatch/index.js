module.exports = function groupParsedLogsByMatch(parsedLogs) {
  const groupedLogs = {}

  parsedLogs.map(parsedLog => {
    const { matchId } = parsedLog
    if (!groupedLogs[matchId]) {
      groupedLogs[matchId] = []
    }
    groupedLogs[matchId].push(parsedLog)
  })

  return Object.values(groupedLogs)
}