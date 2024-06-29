module.exports = function getPlayers(killLogs) {
  const players = new Set()
  for (const killLog of killLogs) {
    const { isKillerPlayer, killer, victim } = killLog.data

    if (isKillerPlayer) {
      players.add(killer)
    }
    
    players.add(victim)
  }

  return Array.from(players)
}