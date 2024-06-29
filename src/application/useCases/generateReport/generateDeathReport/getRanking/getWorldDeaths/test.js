const getWorldDeaths = require('./index')

describe('getWorldDeaths', () => {
  it('Should get totalDeaths', () => {

    const totalDeaths = getWorldDeaths('MOD_GAUNTLET', [{ data: { killer: '<world>', victim: 'Player2', cause: 'MOD_GAUNTLET' } }])
    expect(totalDeaths).toBe(1)
  })
})