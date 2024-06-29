module.exports = function parseEvent(line) {
  try {
    const regex = /^\d+:\d+ (\w+):/
    const match = line.match(regex)

    if (!match) {
      throw new Error(`Event not found in ${line}`)
    }

    return match[1]
  } catch (error) {
    console.error('[parseLog][parseEvent] Could not parse the event', error)
    throw error
  }
}