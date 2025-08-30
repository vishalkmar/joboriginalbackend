import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vishalkumar:VishalKumar@jobportal.a2xtkdd.mongodb.net/?retryWrites=true&w=majority&appName=jobportal');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;