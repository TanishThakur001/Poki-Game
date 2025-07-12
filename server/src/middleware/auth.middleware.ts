import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prismaClient } from "../lib/db";

// no need for user type

export const protectRoute = async (
  req: Request, // Use AuthenticatedRequest
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return next(new Error("Unauthorized: No Token Provided"));
    }

    if (!process.env.JWT_SECRET) {
      return next(new Error("Server configuration error: JWT_SECRET not set"));
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload & {
      userId: number;
    };

    if (!decode) {
      return next(new Error("Unauthorized: Invalid Token"));
    }

    const user = await prismaClient.user.findUnique({
      where: {
        id: decode.userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        imageUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return next(new Error("Unauthorized: User not found"));
    }

    req.user = user;
    console.log("User is authenticated", req.user);
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    next(error);
  }
};
