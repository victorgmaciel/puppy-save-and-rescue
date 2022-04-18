/** **********************************************************
 *               DO NOT CHANGE THIS FILE
 ** ********************************************************** */
const api = require('../dist/api.js');

test('PET_BY_ID', async () => {
  let result = await api.getPets();
  expect(result.statusCode).toBe(200);

  let response = JSON.parse(result.body)
  expect(response).toHaveLength(3);

  expect(response[0].name).toBe('Bailey');
});


test('LOST_PETS', async () => {
  let result = await api.getPetById();
  expect(result.statusCode).toBe(200);
});




