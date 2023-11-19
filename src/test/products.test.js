const request = require('supertest');
const { app, server } = require('../index');
const productSchema = require('../models/products.model');

describe('POST /api/products', () => {
  afterAll(async () => {
    await productSchema.deleteMany();
    await server.close(); // Cerrar la instancia del servidor después de todas las pruebas
  });

  it('should create a new product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'Test Description',
      price: 20.99,
      stock: 10,
    };

    const response = await request(app)
      .post('/api/products')
      .send(productData)
      .expect(200);

    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe(productData.name);
    expect(response.body.description).toBe(productData.description);
    expect(response.body.price).toBe(productData.price);
    expect(response.body.stock).toBe(productData.stock);
  });
});
