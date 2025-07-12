import jwt from "jsonwebtoken";

import { Response } from "express";

export const genrateToken = (
  userId: string | number,
  res: Response
): string => {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "2h",
    }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
    httpOnly: true, //prevents XSS attacks aross-sites scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
