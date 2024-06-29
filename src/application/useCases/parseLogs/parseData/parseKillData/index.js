module.exports = function parseKillData(line) {
  try {
    const regex = /^(\d+:\d+) Kill: (\d+) (\d+) (\d+): (.*) killed (.*) by (.*)$/
    const match = line.match(regex)

    if (!match) {
      throw new Error(`Line has not expected pattern ${line}`)
    }

    return {
      value1: match[2],
      value2: match[3],
      value3: match[4],
      isKillerPlayer: match[5] != '<world>',
      killer: match[5],
      victim: match[6],
      cause: match[7]
    }
  } catch (error) {
    console.error('[parseLog][parseKillData] Could not parse the event', error)
    throw error
  }
}