import { DEFAULT_PLAN, MEMBERSHIP_PLANS } from "@/config/plans";
import { PlanDB } from "./plans.mongo";
import UserDB, { TUser } from "./users.mongo";
import {
  TCreateUserSchema,
  createUserSchema,
} from "@/validations/users.validation";

const validateUser = (userData: TUser): TUser | null => {
  const user = new UserDB(userData);
  const validation = user.validateSync();

  if (validation) return null;

  return user;
};

const createNewUser = async (userData: TCreateUserSchema) => {
  try {
    const validatedUserData = createUserSchema.parse(userData);

    const isUserExist = await UserDB.exists({ email: validatedUserData.email });
    if (isUserExist) throw new Error("User already exist");

    const defaultPlan = await PlanDB.findOne({ planName: DEFAULT_PLAN });
    if (!defaultPlan) throw new Error("No default plan found");

    const newUser = await UserDB.create({
      ...validatedUserData,
      planId: defaultPlan._id,
    });
    return newUser;
  } catch (error: any) {
    console.error(error);
    throw new Error(`Error creating new user : ${error.message}`);
  }
};

const deleteUser = async (userId: string) => {
  try {
    const user = await UserDB.exists({ userId });
    if (!user) throw new Error("No user associated with this ID");

    return await UserDB.deleteOne({ userId });
  } catch (error: any) {
    console.error(error);
    throw new Error(`Error deleting user : ${error.message}`);
  }
};

export { createNewUser, deleteUser, validateUser };
