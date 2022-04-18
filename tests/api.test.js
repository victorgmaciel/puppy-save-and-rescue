const api = require('../dist/api.js');

test('getPets should return all rows', async () => {
  let result = await api.getPets();
  expect(result.statusCode).toBe(200);

  let response = JSON.parse(result.body)
  expect(response).toHaveLength(3);

  expect(response[0].name).toBe('Bailey');
});


test('getPetsById should return a single pet', async () => {
  let result = await api.getPetById();
  expect(result.statusCode).toBe(200);
});

