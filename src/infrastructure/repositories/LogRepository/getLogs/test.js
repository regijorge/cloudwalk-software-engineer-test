const fs = require('fs')
const path = require('path')
const getLogs = require('./index')

describe('getLogs', () => {
  const filePath = path.join(__dirname, '../../../fileStorage/logs/logs.txt')
  const expectedLogs = 'Sample log\nOne more log\nAnother log'

  beforeEach(() => {
    fs.writeFileSync(filePath, expectedLogs)
  })

  afterEach(() => {
    fs.unlinkSync(filePath)
  })

  it('Should get the logs', async () => {
    const logs = await getLogs()
    
    expect(logs).toBeTruthy()
    expect(typeof logs).toBe('string')
    expect(logs).toBe(expectedLogs)
  })
})