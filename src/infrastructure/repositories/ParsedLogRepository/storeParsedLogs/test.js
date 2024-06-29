const fs = require('fs')
const path = require('path')
const storeParsedLogs = require('./index')

describe('storeParsedLogs', () => {
  afterEach(() => {
    const filePath = path.join(__dirname, '../../../fileStorage/logs/parsedLogs.json')
    fs.unlinkSync(filePath)
  })

  it('Should store the logs', async () => {
    const parsedLogs = [{ time: '10:59', event: 'Kill', data: {} }]
    const filePath = await storeParsedLogs(parsedLogs)

    expect(filePath).toBeTruthy()

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const parsedContent = JSON.parse(fileContent)
    expect(parsedContent).toEqual(parsedLogs)
  })
})