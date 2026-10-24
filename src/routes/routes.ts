import type { Express, Request, Response } from "express";
import { users } from "../models/users.ts";

export function registerRoutes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("This is Home Page");
  });

  app.get("/about", (req: Request, res: Response) => {
    res.send("This is About Page");
  });

  app.get("/user", async (req: Request, res: Response) => {
    const cursor = users?.find({});
    const allUsers = await cursor?.toArray();
    res.send(allUsers);
  });
}