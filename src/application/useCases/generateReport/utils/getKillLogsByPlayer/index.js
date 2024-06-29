module.exports = function getKillLogsByPlayer(key, player, killLogs) {
  try {
    const logs = killLogs.filter(log => log.data[key] == player && log.data.killer != log.data.victim)
    return logs
  } catch (error) {
    console.error('[utils][getKillLogsPlayer] Could not access player', error)
    throw error    
  }
}