import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: [5, "Please Enter above 5 characters"],
        required: true
    }
});

const User = mongoose.model("user", userSchema);

export default User;