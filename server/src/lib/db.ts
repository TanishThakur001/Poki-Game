import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();

export async function connectToDatabase() {
  try {
    await prismaClient.$connect();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}