const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

module.exports = function getPlayerDeaths(player, killLogs) {
  try {
    const logs = killLogs.filter(log => log.data.victim == player && ![player, '<world>'].includes(log.data.killer))
    return logs.length
  } catch (error) {

  }
}