const getKillLogsByPlayer = require('../../../utils/getKillLogsByPlayer')

module.exports = function getWorldDeaths(player, killLogs) {
  try {
    const logs = getKillLogsByPlayer('victim', player, killLogs)
    const worldLogs = getKillLogsByPlayer('killer', '<world>', logs)

    return worldLogs.length
  } catch (error) {

  }
}