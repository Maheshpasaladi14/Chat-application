import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getAllusersForSidebar } from '../Controllers/users.js';


const router = express.Router();

router.get("/getUsers",protectRoute,getAllusersForSidebar);
export default router