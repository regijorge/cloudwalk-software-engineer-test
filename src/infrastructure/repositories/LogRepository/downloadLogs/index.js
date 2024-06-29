const axios = require('axios')

module.exports = async function downloadLogs() {
  const url = process.env.LOG_URL
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.error('[LogRepository][downloadLogs] Could not download logs', error)
    throw error
  }
}