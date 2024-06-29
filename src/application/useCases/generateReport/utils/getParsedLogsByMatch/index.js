module.exports = function getParsedLogsByMatch(matchId, parsedLogs) {
  try {
    const logs = parsedLogs.filter(log => log.matchId == matchId)
    return logs
  } catch (error) {
    console.error('[utils][getParsedLogsByMatch] Could not access event', error)
    throw error    
  }
}