// types/express.d.ts
import { User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        name: string | null;
        role: string | null;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
    }
  }
}