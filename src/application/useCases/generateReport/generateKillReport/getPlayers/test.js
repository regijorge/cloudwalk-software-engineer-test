const getPlayers = require('./index')

describe('getPlayers', () => {
  it('Should get unique players', () => {
    const parsedLogs = [
      { data: { isKillerPlayer: true, killer: 'Player1', victim: 'Player2' }},
      { data: { isKillerPlayer: false, killer: '<world>>', victim: 'Player3' }},
      { data: { isKillerPlayer: true, killer: 'Player3', victim: 'Player2' }}
    ]

    const expectedPlayers = ['Player1', 'Player2', 'Player3']
    const players = getPlayers(parsedLogs)

    expect(players).toEqual(expectedPlayers)
  })
})