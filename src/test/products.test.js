const request = require("supertest");
const { app } = require("../index");

describe("Products API Endpoints", () => {
  //Prueba 1
  test("Deberia traer todos los productos", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
  });

  //Prueba 2
  test("Deberia traer un producto por ID", async () => {
    const createdProduct = await request(app).post("/api/products").send({
      name: "mac book air 2023",
      description: "ram 16 gb 512gb ssd",
      price: 10000,
      stock: 10,
    });

    const res = await request(app).get(
      `/api/products/${createdProduct.body._id}`
    );
    expect(res.statusCode).toEqual(200);
  });

  //Prueba 3
  test("Deberia crear un nuevo producto", async () => {
    const res = await request(app).post("/api/products").send({
      name: "mac book pro 2023",
      description: "ram 32 gb 1tb ssd",
      price: 10000,
      stock: 10,
    });
    expect(res.statusCode).toEqual(200);
  });
});
