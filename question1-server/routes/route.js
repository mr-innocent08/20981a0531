import express from 'express';
import { getAPI } from '../controllers/API.js'
const router = express.Router();

router.route('/train').get(getAPI); 

export default router;