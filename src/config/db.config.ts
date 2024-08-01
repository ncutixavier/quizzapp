import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DEV_DB_URI!);
        console.log('---DB CONNECTED---');
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export { connectDB };
