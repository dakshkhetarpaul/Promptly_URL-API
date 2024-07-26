import express from 'express';
import { shortenUrl, redirectUrl } from '../Controllers/url_controller.js';

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:shortUrl', redirectUrl);

export default router;
