import { Request, Response } from "express";
import { z } from "zod";

import { prismaClient } from "../lib/db";

export const allCard = async (req: Request, res: Response): Promise<any> => {
  try {
    const allCard = await prismaClient.masterCard.findMany();
    console.log("allCard", allCard);
    res.status(200).json({
      allCard,
    });
  } catch (error) {
    console.log("Error in allCard controller", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
