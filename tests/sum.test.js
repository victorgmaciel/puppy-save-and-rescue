//const sum = require('./sum');
const api = require('../dist/api.js');

function sum (a,b) { return  a+b; }

test('adds 1 + 2 to equal 3', async () => {
  let result = await api.getPets();
    console.log(result);
  expect(sum(1, 2)).toBe(3);
});
