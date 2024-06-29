module.exports = function getRankingTotal(key, ranking) {
  try {
    return ranking.reduce((acc, r) => acc + r[key], 0)
  } catch (error) {
    
  }
}