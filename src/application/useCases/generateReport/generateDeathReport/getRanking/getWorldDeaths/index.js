module.exports = function getWorldDeaths(cause, killLogs) {
  try {
    const worldLogs = killLogs.filter(log => log.data.cause == cause && log.data.killer == '<world>')
    return worldLogs.length
  } catch (error) {
    
  }
}