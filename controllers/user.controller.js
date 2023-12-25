import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";


//-----registering The user--------
export const registerTheUser = async (req, res, next) => {

    try {
        const isExist = await User.findOne({ email: req.body.email });
        if (isExist) {
            return res.status(401).json({
                success: false,
                messege: "User has already exist"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPass
        });
        const user = await newUser.save();
        const { password, ...others } = user._doc;
        return res.status(200).json({
            success: true,
            user: others,
            messege: "User has been successfully registered"
        })

    } catch (error) {
        return res.status(500).json(error);
    }
}

//------------login the user------------
export const loginTheUser = async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ messege: "Email Not found" })
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "password is Wrong Found" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT);

        const { password, ...others } = user._doc;

        res.status(200).json({token, others});

    } catch (error) {
        return res.status(500).json({ err: error.message });
    }
}