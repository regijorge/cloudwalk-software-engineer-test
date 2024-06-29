const fs = require('fs')
const path = require('path')
const getParsedLogs = require('./index')

describe('getParsedLogs', () => {
  const filePath = path.join(__dirname, '../../../fileStorage/logs/parsedLogs.json')
  const expectedParsedLogs = [{ time: '10:59', event: 'Kill', data: {} }]

  beforeEach(() => {
    fs.writeFileSync(filePath, JSON.stringify(expectedParsedLogs, null, 2))
  })

  afterEach(() => {
    fs.unlinkSync(filePath)
  })

  it('Should get parsed logs', async () => {
    const parsedLogs = await getParsedLogs()

    expect(parsedLogs).toBeInstanceOf(Object)
    expect(parsedLogs).toEqual(expectedParsedLogs)
  })
})