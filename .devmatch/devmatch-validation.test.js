/** **********************************************************
 *               DO NOT CHANGE THIS FILE
 ** ********************************************************** */
const api = require('../dist/api.js');

test('PET_BY_ID', async () => {
  let result = await api.getPetById.call(null, { pathParameters: { id: 1 } });
  expect(result.statusCode).toBe(200);
  let response = JSON.parse(result.body)
  expect(response.name).toBe('Bailey');

  result = await api.getPetById.call(null, { pathParameters: { id: 2 } });
  expect(result.statusCode).toBe(200);
  response = JSON.parse(result.body)
  expect(response.name).toBe('Miley');

  result = await api.getPetById.call(null, { pathParameters: { id: 3 } });
  expect(result.statusCode).toBe(200);
  response = JSON.parse(result.body)
  expect(response.name).toBe('Chip');
});


test('LOST_PETS', async () => {
  let result = await api.getLostPets();
  expect(result.statusCode).toBe(200);

  let response = JSON.parse(result.body)
  expect(response.length).toBe(2);

  expect(response[0].name).toBe('Miley');
  expect(response[1].name).toBe('Chip');
});




