import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos conectada con éxito!');
    }
    catch(error) {
        console.error('Errr conectando a la base de datos: ', error.message);
        process.exit(1);
    }
}

export default connectDB;