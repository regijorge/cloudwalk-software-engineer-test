module.exports = class ParsedLogEntity {
  constructor(matchId, time, event, data) {
    this.matchId = matchId
    this.time = time
    this.event = event
    this.data = data || null
  }

  get() {
    return {
      matchId: this.matchId,
      time: this.time,
      event: this.event,
      data: this.data
    }
  }
}