const express = require("express");
const productSchema = require("../models/products.model.js");

const router = express.Router();

//Crear producto
router.post("/products", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data), res.sendStatus(200))
    .catch((error) => res.json({ message: error }));
});

//Traer todos los productos
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data), res.status(200))
    .catch((error) => res.json({ message: error }));
});

//Traer un producto
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un producto
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { name, description, price, stock } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar producto
router.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    productSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
