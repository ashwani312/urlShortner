import mongoose from "mongoose";


//-----Connecting To The MongoDB
const connectTheDB = async () =>{
  await  mongoose.connect(`${process.env.MONGO_URL}`, {

  })
    .then(()=>{
        console.log("mongoDB has connected");
    }).catch((err)=>{
        console.log(`Something is wrong ${err}`)
    })
};

export default connectTheDB;