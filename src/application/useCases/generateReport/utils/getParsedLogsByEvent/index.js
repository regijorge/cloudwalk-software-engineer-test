module.exports = function getParsedLogsByEvent(event, parsedLogs) {
  try {
    const logs = parsedLogs.filter(log => log.event == event)
    return logs
  } catch (error) {
    console.error('[utils][getParsedLogsByEvent] Could not access event', error)
    throw error    
  }
}