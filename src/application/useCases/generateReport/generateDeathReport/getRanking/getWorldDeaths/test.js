const getWorldDeaths = require('./index')

describe('getWorldDeaths', () => {
  it('Should get playerDeaths', () => {

    const playerDeaths = getWorldDeaths('MOD_GAUNTLET', [{ data: { killer: '<world>', victim: 'Player2', cause: 'MOD_GAUNTLET' } }])
    expect(playerDeaths).toBe(1)
  })
})