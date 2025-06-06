import mongoose from "mongoose";

// connection to database
const connectDB = async () => {
    mongoose.connection.on("connected", ()=> console.log("database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/pizza_delivery`);
};

export default connectDB;