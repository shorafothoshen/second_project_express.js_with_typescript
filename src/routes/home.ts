import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("This is Home Page");
});

router.get("/about", (req: Request, res: Response) => {
  res.send("This is About Page");
});

export default router;