import { Router, type Request, type Response } from "express";
import { ObjectId } from "mongodb";
import { users } from "../models/users.js";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const cursor = users?.find({});
  const allUsers = await cursor?.toArray();
  res.send(allUsers);
});

router.post("/", async (req: Request, res: Response) => {
  if (!users) {
    return res.status(500).send({ message: "Database not connected" });
  }

  const newUser = req.body;
  const result = await users.insertOne(newUser);

  res.status(201).send(result);
});

router.patch("/:id", async (req: Request, res: Response) => {
  if (!users) {
    return res.status(500).send({ message: "Database not connected" });
  }

  const id = String(req.params.id);

  if (!ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid user id" });
  }

  const updatedData = req.body;

  const result = await users.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );

  if (result.matchedCount === 0) {
    return res.status(404).send({ message: "User not found" });
  }

  res.send(result);
});

export default router;