const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

module.exports = function getPlayerKills(player, killLogs) {
  try {
    const logs = getKillLogsByPlayer('killer', player, killLogs)
    return logs.length
  } catch (error) {

  }
}