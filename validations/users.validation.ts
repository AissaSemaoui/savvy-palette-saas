import { DEFAULT_PLAN, MEMBERSHIP_PLANS } from "@/config/plans";
import * as z from "zod";

const createUserSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(2, { message: "First name should be at least 2 characters" }),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(2, { message: "Last name should be at least 2 characters" }),
  username: z
    .string({ required_error: "username is required" })
    .min(2, { message: "username should be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  userId: z
    .string({ required_error: "User ID is required" })
    .min(24, "ObjectId must be at least "),
  planId: z.nativeEnum(MEMBERSHIP_PLANS).default(DEFAULT_PLAN).optional(),
  userPalettes: z.array(z.string()).default([]).optional(),
});

export type TCreateUserSchema = z.infer<typeof createUserSchema>;

export { createUserSchema };
