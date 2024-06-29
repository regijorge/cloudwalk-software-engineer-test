module.exports = function parseTime(line) {
  try {
    const regex = /^(\d+:\d+)/
    const match = line.match(regex)

    if (!match) {
      throw new Error(`Time not found in ${line}`)
    }

    return match[1]
  } catch (error) {
    console.error('[parseLog][parseTime] Could not parse the time', error)
    throw error
  }
}