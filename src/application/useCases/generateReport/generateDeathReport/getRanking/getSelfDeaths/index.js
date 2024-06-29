module.exports = function getSelfDeaths(cause, killLogs) {
  try {
    const selfLogs = killLogs.filter(log => log.data.cause == cause && log.data.killer == log.data.victim)
    return selfLogs.length
  } catch (error) {
    console.error('[generateDeathReport][getRanking][getSelfDeaths] Error', error.message)
    throw error
  }
}