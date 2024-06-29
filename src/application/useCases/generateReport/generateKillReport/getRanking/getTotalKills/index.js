const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

module.exports = function getTotalKills(player, killLogs) {
  try {
    const logs = getKillLogsByPlayer('killer', player, killLogs)
    return logs.length
  } catch (error) {

  }
}