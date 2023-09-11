import mongoose from "mongoose";

import { MONGO_URI } from "@/environments";

let cachedDb: typeof mongoose | null = null;

export const connectToDatabase = async () => {
  if (!!cachedDb) return cachedDb;

  try {
    const db = await mongoose.connect(MONGO_URI, {
      appName: "savvy-palette-saas",
    });
    console.log("this is the db : ", db.connection.host);

    cachedDb = db;

    return db;
  } catch (error: any) {
    cachedDb = null;
    throw new Error(error);
  }
};
