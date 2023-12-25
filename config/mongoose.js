import mongoose from "mongoose";

const connectTheDB = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongoDB has connected");
    })
};

export default connectTheDB;