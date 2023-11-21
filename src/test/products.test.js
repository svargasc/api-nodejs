const request = require('supertest');
const router = require('../routes/products.js');
const productSchema = require('../models/products.model.js')

// describe('POST /products', () => {
//   test('should be respond with a 200 status code', async () => {
//     const response = await request(router).post('/products').send({
//       name: "lala",
//       description: "la la land",
//       price: 100,
//       stock: 10
//     });
//     expect(response.statusCode.toBe(200));
//   });
// });

describe('GET /products', () => {
  test('should be respond with a 200 status code', async () => {
    const response = await request(router).get('/products').send();
    expect(response.statusCode.toBe(200));
  });
});