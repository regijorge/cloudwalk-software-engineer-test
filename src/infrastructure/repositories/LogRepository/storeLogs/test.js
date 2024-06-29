const fs = require('fs')
const path = require('path')
const storeLogs = require('./index')

describe('storeLogs', () => {
  afterEach(() => {
    const filePath = path.join(__dirname, '../../../fileStorage/logs/logs.txt')
    fs.unlinkSync(filePath)
  })

  it('Should store the logs', async () => {
    const logs = 'Sample log\nOne more log\nAnother log'
    const filePath = await storeLogs(logs)

    expect(filePath).toBeTruthy()

    const fileContent = fs.readFileSync(filePath, 'utf8')
    expect(fileContent).toBe(logs)
  })
})