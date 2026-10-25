import express, { type Express } from "express";
import cors from "cors";
import "dotenv/config";
import { registerRoutes } from "./routes/index.ts";

const app: Express = express();

const PORT = process.env.POST || 5000;

// Middleware
app.use(cors());
app.use(express.json());

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`TypeScript with Express http://localhost:${PORT}/`);
});