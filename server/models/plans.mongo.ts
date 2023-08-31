import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
      unique: true,
    },
    planPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PlanDB = mongoose.models.Plan || mongoose.model("Plan", planSchema);

export { PlanDB };
