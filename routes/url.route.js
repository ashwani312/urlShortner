import express from "express";
import { generateShortURL, getTheTimestamps, getTheURL } from "../controllers/url.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();


//-----get The URL With ShortId-------
router.get("/:shortId", verifyToken, getTheURL);

//-----get The Url timestamps---------
router.get("/timestamps/:shortId", verifyToken, getTheTimestamps);

//-----create The ShortURL--------
router.post("/", verifyToken, generateShortURL);


export default router;

