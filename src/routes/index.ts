import type { Express } from "express";
import homeRoutes from "./home.ts";
import usersRoutes from "./users.ts";

export function registerRoutes(app: Express) {
  app.use("/", homeRoutes);
  app.use("/user", usersRoutes);
}