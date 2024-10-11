import mongoose from 'mongoose';

export const ConnectMongoDB = () => {

    try {
        mongoose.connect("mongodb+srv://clavijomo:12345@prueba.nuapb.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("DB CONECTADA")
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}