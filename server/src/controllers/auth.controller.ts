import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";

import { prismaClient } from "../lib/db";

import { genrateToken } from "../lib/jwt";

export const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    // console.log('req.body:', req.body);

    // Define the schema for signup validation
    const signupSchema = z.object({
      email: z
        .string()
        .email("Invalid email format")
        .min(3, "email must be at least 3 characters long"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
    });

    // Validate request body against the schema
    const parsed = signupSchema.safeParse(req.body);

    if (!parsed.success) {
      console.log("Validation errors:", parsed.error.flatten());
      return res.status(400).json({
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    // Extract validated data
    const { email, password } = parsed.data;

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    // If user already exists, return an error
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before storing it
    const saltRounds = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = await prismaClient.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Generate JWT token
    if (newUser) {
      const token = genrateToken(newUser.id, res);
      return res.status(201).json({
        message: "User created successfully",
        token,
      });
    } else {
      return res.status(500).json({ message: "Failed to create user" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signin = async (req: Request, res: Response): Promise<any> => {
  try {
    const signupSchema = z.object({
      email: z
        .string()
        .email("Invalid email format")
        .min(3, "email must be at least 3 characters long"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
    });

    // Validate request body against the schema
    const parsed = signupSchema.safeParse(req.body);

    if (!parsed.success) {
      console.log("Validation errors:", parsed.error.flatten());
      return res.status(400).json({
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { email, password } = parsed.data;

    // Check if user exists
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    // If user doesn't exist, return an error
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // compare password with hashed password
    const hashedPassword = existingUser.password;
    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Generate JWT token
    const token = genrateToken(existingUser.id, res);

    return res.status(200).json({
      message: "User signed in successfully",
      token,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signout = async (req: Request, res: Response): Promise<any> => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({
      message: "User signed out successfully",
    });
  } catch (error) {
    console.error("Error during signout:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    const { profilePic, name } = req.body;

    const userId = req?.user?.id;

    if (!profilePic || !name) {
      return res.status(400).json({
        message: "Invalid request body",
      });
    }

    await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        imageUrl: profilePic,
      },
    });

    res.status(200).json({
      message: "User profile updated successfully",
    });
  } catch (error) {
    console.log("error in updateProfile controller: ", error);
    res.status(500).json({
      message: "Internal Error",
    });
  }
};

export const getUserCard = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = req?.user?.id;

    const cards = await prismaClient.card.findMany({
      where: {
        userId,
      },
      include: {
        masterCard: true,
      },
    });
    
    console.log("cards", cards);
    res.status(200).json({
      message: "User profile updated successfully",
      cards,
    });
  } catch (error) {
    console.log("error in getUserCard controller: ", error);
    res.status(500).json({
      message: "Internal Error",
    });
  }
};

export const checkAuth = async (req: Request, res: Response): Promise<any> => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
