import Url from '../Models/url_model.js';
import { nanoid } from 'nanoid';
import validator from 'validator';



export const shortenUrl = async (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl || !validator.isURL(longUrl)) {
        return res.status(400).json('Invalid URL');
    }


    const shortUrl = nanoid(10); // Generate a unique ID with a length of 10 characters

    try {
        let url = await Url.create({
            longUrl,
            shortUrl
        });

        res.json({ longUrl, shortUrl });
    } catch (err) {
        res.status(500).json('Server error');
    }
};


export const redirectUrl = async (req, res) => {
    const { shortUrl } = req.params;
    console.log(`Received request for shortUrl: ${shortUrl}`);

    try {
        // Basic SQL query using Sequelize
        const url = await Url.findOne({ where: { shortUrl } });
        console.log(`URL found in database: ${url}`);

        if (url) {
            // For debugging: Return the long URL as a string
            return res.send(`Redirecting to: ${url.longUrl}`);
        } else {
            return res.status(404).json('URL not found');
        }
    } catch (err) {
        console.error(`Error fetching URL: ${err}`);
        res.status(500).json('Server error');
    }
};

