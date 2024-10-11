import mongoose from 'mongoose';

export const ConnectMongoDB = () => {
    mongoose.connect("mongodb+srv://clavijomo:12345@prueba.nuapb.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB', error);
        });
}