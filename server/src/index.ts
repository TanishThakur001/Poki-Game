import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./lib/db";

import authRouter from "./routes/auth.route";
import cardRouter from "./routes/card.route";

dotenv.config();

const app = express();

app.use(cors());


app.use(express.json());

app.use(cookieParser());


app.use("/api/auth",authRouter );

app.use("/api/card",cardRouter );


app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
    connectToDatabase();
});