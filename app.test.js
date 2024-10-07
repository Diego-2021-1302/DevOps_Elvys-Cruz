const holaMundo = require('./src/js/app');

test('debe devolver "Hola Mundo"', () => {
  expect(holaMundo()).toBe("Hola Mundo");
});
