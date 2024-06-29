module.exports = class ReportEntity {
  constructor(id, report) {
    this.id = id
    this.report = report
  }

  get() {
    return {
      id: this.id,
      report: this.report
    }
  }
}