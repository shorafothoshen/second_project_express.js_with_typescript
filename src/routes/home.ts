import { Router, type Request, type Response, type NextFunction } from "express";

const router = Router();
interface ContactBody {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateContact = (body: Partial<ContactBody>): string[] => {
  const errors: string[] = [];

  if (!body.name || body.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long.");
  }
  if (!body.email || !EMAIL_REGEX.test(body.email)) {
    errors.push("A valid email address is required.");
  }
  if (!body.message || body.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long.");
  }

  return errors;
};

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };

router.get("/", (_req: Request, res: Response<ApiResponse>) => {
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

router.get("/about", (_req: Request, res: Response<ApiResponse>) => {
  res.status(200).json({
    success: true,
    message: "About API",
    data: {
      description: "This is the backend API for my Next.js application.",
    },
  });
});

router.post(
  "/contact",
  asyncHandler(async (req: Request<{}, {}, Partial<ContactBody>>, res: Response<ApiResponse>) => {
    const errors = validateContact(req.body);

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
      return;
    }

    const { name, email, message } = req.body as ContactBody;


    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully!",
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
      },
    });
  })
);

router.get("/not-found", (_req: Request, res: Response<ApiResponse>) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
  });
});

export default router;