const getParsedLogsByEvent = require('./index')

describe('getParsedLogsByEvent', () => {
  it('Should get only Kill events', () => {
    const parsedLogs = [{
      time: '00:00',
      event: 'InitGame'
    }, {
      time: '01:00',
      event: 'Kill'
    }, , {
      time: '02:00',
      event: 'ClientConnect'
    }, , {
      time: '03:00',
      event: 'Kill'
    }]

    const expectedLogs = [{
      time: '01:00',
      event: 'Kill'
    }, {
      time: '03:00',
      event: 'Kill'
    }]

    const killLogs = getParsedLogsByEvent('Kill', parsedLogs)

    expect(killLogs).toEqual(expectedLogs)
  })
})