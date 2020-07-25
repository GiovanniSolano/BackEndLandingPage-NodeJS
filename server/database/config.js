const mongoose = require('mongoose');

const dbConexion = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos online');



    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD')

    }
}

module.exports = {
    dbConexion
};