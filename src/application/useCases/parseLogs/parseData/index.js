const parseKillData = require('./parseKillData')

module.exports = function parseData(event, line) {
  /**
   * There are 14 mapped events, their parsers should be implemented
   * when they are need for the project
   * InitGame, Exit, ClientConnect, ClientUserinfoChanged, ClientBegin, ShutdownGame, *
   * Item, Kill, ClientDisconnect, score, red8, red2, red0, say
   */

  if (event == 'Kill') {
    return parseKillData(line)
  }
}
