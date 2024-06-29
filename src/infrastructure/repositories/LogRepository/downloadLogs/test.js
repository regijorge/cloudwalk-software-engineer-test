const downloadLogs = require('./index')

describe('downloadLogs', () => {
  it('Should download logs from the env specified URL', async () => {
    const logs = await downloadLogs()
    expect(logs).toBeTruthy()
    expect(typeof logs).toBe('string')
  })
})