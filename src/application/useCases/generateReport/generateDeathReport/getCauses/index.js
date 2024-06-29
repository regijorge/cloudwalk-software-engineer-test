module.exports = function getCauses(killLogs) {
  const causes = new Set()
  killLogs.map(killLog => causes.add(killLog.data.cause))

  return Array.from(causes)
}