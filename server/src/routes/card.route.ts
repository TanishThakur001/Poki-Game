import express, { Request, Response } from "express";

import { allCard } from "../controllers/card.controller";

// import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/allCard", allCard);

export default router;