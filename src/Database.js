import mongoose from 'mongoose';

export default class Database
{
    async connect() {
        try {
            console.log(process.env.MONGODB_URI);
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('✅ MongoDB connected');
        } catch (error) {
            console.error('❌ MongoDB connection error:', error.message);
            process.exit(1); // Exit on failure
        }
    }
}