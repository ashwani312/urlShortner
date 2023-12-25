import express from "express";
import urlRoute from "./routes/url.route.js";
import authRoute from './routes/auth.route.js';
import connectTheDB from "./config/mongoose.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

//middelwares
dotenv.config();
app.use(cors());
app.use(express.json());

// route middlewares
app.use("/url", urlRoute);
app.use("/auth", authRoute);

app.listen(8000, ()=>{
    console.log("server is running on port 8000");
    connectTheDB();
});