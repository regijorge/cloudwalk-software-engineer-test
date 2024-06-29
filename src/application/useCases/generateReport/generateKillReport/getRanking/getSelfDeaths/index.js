module.exports = function getSelfDeaths(player, killLogs) {
  try {
    const selfLogs = killLogs.filter(log => log.data.killer == player && log.data.victim == player)
    return selfLogs.length
  } catch (error) {
    console.error('[generateKillReport][getRanking][getSelfDeaths] Error', error.message)
    throw error
  }
}