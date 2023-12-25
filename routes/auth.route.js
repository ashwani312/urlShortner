import express from "express";
import { loginTheUser, registerTheUser } from "../controllers/user.controller.js";

const router = express.Router();

//login The User
router.post("/login", loginTheUser);

//register The User
router.post("/register", registerTheUser);


export default router;