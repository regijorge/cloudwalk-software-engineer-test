const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

module.exports = function getTotalDeaths(player, killLogs) {
  try {
    const logs = getKillLogsByPlayer('victim', player, killLogs)
    return logs.length
  } catch (error) {

  }
}