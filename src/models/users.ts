import type { ObjectId } from "mongodb";
import { db } from "../config/db.ts";

export interface UserTy {
  _id: ObjectId;
  name: string;
  email: string;
  age: number;
  city: string;
}

export const users = db?.collection<UserTy>("user");