const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Bd Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error al Inciar la BD ver los logs')
        
    }
}

module.exports = {
    dbConnection
}