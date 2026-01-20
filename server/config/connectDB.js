import mongoose from "mongoose";

const CONNECTION_URL = process.env.MONGODB_URI || "mongodb+srv://dvts:dvts@department-of-veterinar.pezb2.mongodb.net/?retryWrites=true&w=majority&appName=department-of-veterinary-services-qanda-2"
const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    console.log(`Connected to MongoDB successfully`.bgGreen.white)
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white)
  }
}

export default connectDB