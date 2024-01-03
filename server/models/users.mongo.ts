import mongoose, { InferSchemaType } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    userPalettes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Palette",
      },
    ],
  },
  {
    timestamps: true,
  }
);
// User Types
export type TUser = InferSchemaType<typeof userSchema>;

const UserDB: mongoose.Model<TUser> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default UserDB;
