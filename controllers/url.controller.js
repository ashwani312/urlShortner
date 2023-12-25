import { nanoid } from "nanoid"
import URL from "../models/url.models.js";



//-----------Generate Short URL-------------
export const generateShortURL = async (req, res, next) => {

    try {
        const body = req.body;
        if (!body.url) return res.status(400).json("url is required");

        const shortId = nanoid(8);

        const newUrl = await URL.create({
            shortId: shortId,
            redirectURL: body.url,
            visitHistory: []
        });

        return res.status(200).json({ id: shortId });

    } catch (error) {
        return res.status(500).json({err : error});
    }

}


//-------get The URL and redirect---------

export const getTheURL = async (req, res, next) => {
    try {
        const shortId = req.params.shortId;

        const url = await URL.findOneAndUpdate(
            {
                shortId : shortId
            },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                }
            }
        )
        return res.status(200).redirect(url.redirectURL);
    } catch (error) {
        return res.status(500).json({err : error});
    }
}

//----------get the timestapms of a particular url----------

export const getTheTimestamps = async(req, res, next)=>{
 try {
    const shortId = req.params.shortId;

    const urlInfo = await URL.findOne({shortId : shortId});

    return res.status(200).json({
        totalClicks : urlInfo.visitHistory.length,
        analytics : urlInfo.visitHistory
    });
 } catch (error) {
    return res.status(500).json({err : error});
 }
}