module.exports = class ReportEntity {
  constructor(matchId, report) {
    this.matchId = matchId
    this.report = report
  }

  get() {
    return {
      matchId: this.matchId,
      report: this.report
    }
  }
}