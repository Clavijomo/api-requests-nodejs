import mongoose from 'mongoose';

export const ConnectMongoDB = () => {

    try {
        mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://clavijomo:12345@prueba.nuapb.mongodb.net/")
        console.log("DB CONECTADA")
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}