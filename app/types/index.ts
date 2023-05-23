import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "hashedPassword" | "id" | "accounts"
> & {
    createdAt: string;
    updatedAt: string;
};