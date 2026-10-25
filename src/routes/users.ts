import { Router, type Request, type Response } from "express";
import { users } from "../models/users.js";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const cursor = users?.find({});
  const allUsers = await cursor?.toArray();
  res.send(allUsers);
});

export default router;