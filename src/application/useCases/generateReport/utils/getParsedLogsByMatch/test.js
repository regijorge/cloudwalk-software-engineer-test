const getParsedLogsByMatch = require('./index')

describe('getParsedLogsByMatch', () => {
  it('Should get only Kill events', () => {
    const parsedLogs = [
      { matchId: '1', event: 'InitGame' }, 
      { matchId: '1', event: 'Item' }, 
      { matchId: '2', event: 'InitGame' }
    ]
    const expectedLogs = [{ matchId: '2', event: 'InitGame' }]

    const matchLogs = getParsedLogsByMatch('2', parsedLogs)

    expect(matchLogs).toEqual(expectedLogs)
  })
})