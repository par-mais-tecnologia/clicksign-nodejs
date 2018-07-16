const test = require('ava')
const Clicksign = require('../')
const AppError = require('../lib/errorHandler/appError')
const mock = require('./helpers/mocks')

test('Clicksign should use a valid endpoint', t => {
  t.throws(() => {
    return new Clicksign('asd', 'asd')
  }, {instanceOf: AppError})
})

test('Send PDF to Clicksign', t => {
  const clicksign = new Clicksign(process.env.CLICKSIGN_API, process.env.CLICKSIGN_ENVIRONMENT)

  const document = mock.generateDocument()

  return clicksign.createDocument(document)
    .then((resp) => {
      t.is(resp.status, 201)
    })
})
