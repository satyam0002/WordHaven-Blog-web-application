import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-frc9v4i-shard-00-00.knj8og2.mongodb.net:27017,ac-frc9v4i-shard-00-01.knj8og2.mongodb.net:27017,ac-frc9v4i-shard-00-02.knj8og2.mongodb.net:27017/?ssl=true&replicaSet=atlas-u8oz9v-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;