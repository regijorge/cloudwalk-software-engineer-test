const getCauses = require('./index')

describe('getCauses', () => {
  it('Should get unique causes', () => {
    const parsedLogs = [
      { data: { cause: 'MOD_SHOTGUN' }},
      { data: { cause: 'MOD_RAILGUN' }},
      { data: { cause: 'MOD_SHOTGUN' }}
    ]

    const expectedCauses = ['MOD_SHOTGUN', 'MOD_RAILGUN']
    const causes = getCauses(parsedLogs)

    expect(causes).toEqual(expectedCauses)
  })
})