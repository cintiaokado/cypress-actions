const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImVjN2ViYTllLTI2ZWEtNGVhMi04NDczLTY2MTk5ZTA2MTE2ZC0xNzIzMjI5MTgzMjA3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNGNlNjI5ZjEtZDUxNS00NTM1LTk3NDQtOGRhZGNlNTNhYWY5IiwidHlwZSI6InQifQ.G4uVSsuu6O2SvEj4IMQf1Z_G_KPgOFQ4f70SgWAyN9A'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
