const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

module.exports = function getPlayerDeaths(cause, killLogs) {
  try {
    const logs = killLogs.filter(log => log.data.cause == cause && log.data.killer != '<world>' && log.data.killer != log.data.victim)

    return logs.length
  } catch (error) {

  }
}