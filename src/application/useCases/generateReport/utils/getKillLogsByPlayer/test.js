const getKillLogsByPlayer = require('./index')

describe('getKillLogsByPlayer', () => {
  it('Should get kill logs for specified killer', () => {
    const killLogs = [
      { data: { killer: 'Player1' } },
      { data: { killer: 'Player2' } },
      { data: { killer: 'Player2' } },
      { data: { killer: 'Player3' } }
    ]

    const expectedLogs = [
      { data: { killer: 'Player2' } },
      { data: { killer: 'Player2' } }
    ]
    const playerLogs = getKillLogsByPlayer('killer', 'Player2', killLogs)

    expect(playerLogs).toEqual(expectedLogs)
  })

  it('Should get kill logs for specified victim', () => {
    const killLogs = [
      { data: { victim: 'Player1' } },
      { data: { victim: 'Player2' } },
      { data: { victim: 'Player2' } },
      { data: { victim: 'Player3' } }
    ]

    const expectedLogs = [
      { data: { victim: 'Player1' } }
    ]
    const playerLogs = getKillLogsByPlayer('victim', 'Player1', killLogs)

    expect(playerLogs).toEqual(expectedLogs)
  })
})