const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// configuracion del puerto
const app = express();
const port = 9000;

//Middleware
app.use(express.json());

//definir rutas
app.get('/', (req, res) => {
    res.send('Welcome to API');
})

//MongoDB conección
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log(error));


// ejecutar servidor
app.listen(port, () => console.log('server running on port', port));