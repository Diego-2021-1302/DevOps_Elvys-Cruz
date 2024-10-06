const helloWorld = require('./main');

test('returns Hola Mundo', () => {
  expect(helloWorld()).toBe('Hola Mundo');
});
