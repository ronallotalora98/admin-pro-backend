
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

// Crear servidor Express
const app = express();

//Configurar cors
app.use(cors());

//Base de datos
dbConnection();
// CkvrVULJN2kwL8FZ
// mean_user
// RUTAS

app.get('/', (req, res) => {

    res.json({
        ok:true,
        msg: 'Holas mundo'
    })

})


app.listen( process.env.PORT,() => {
    console.log('servidor corriendo en puerto ' + 3000);
})