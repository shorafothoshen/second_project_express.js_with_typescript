import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to My API!",
    data: {
      name: "My Express API",
      version: "1.0.0",
      description: "Backend API built with Express.js and TypeScript",
      technologies: ["Express.js", "TypeScript", "Next.js"],
    },
  });
});

router.get("/about", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "About API",
    data: {
      description: "This is the backend API for my Next.js application.",
    },
  });
});

// Not Found API Example
router.get("/not-found", (req: Request, res: Response) => {
  res.sendStatus(404);
});

export default router;