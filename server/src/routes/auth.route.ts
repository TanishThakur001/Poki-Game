import express, { Request, Response } from "express";

import { signup , signin, signout, checkAuth , updateProfile , getUserCard } from "../controllers/auth.controller";

import { protectRoute } from "../middleware/auth.middleware";


const router = express.Router();

router.post("/signup", signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.put('/checkAuth',protectRoute ,updateProfile);
router.get('/checkAuth',protectRoute ,getUserCard);
router.get('/checkAuth',protectRoute ,checkAuth);

export default router;
