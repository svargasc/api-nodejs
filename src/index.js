const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productsRoutes = require('./routes/products.js');

const app = express();
const port = 9000;

// Middleware
app.use(express.json());
app.use('/api', productsRoutes);

// Definir rutas
app.get('/', (req, res) => {
    res.send('Welcome to API');
})

// MongoDB conexión
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log(error));

// Exportar la instancia del servidor
const server = app.listen(port, () => console.log('Server running on port', port));

module.exports = { app, server };  // Exportar app y server
