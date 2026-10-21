import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";
import { ObjectId } from "mongodb";

const app: Express = express();

const PORT = process.env.POST || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_PASS}@cluster0.3fqxgpg.mongodb.net/`,
);

export async function ConnectToMongoDB() {
  try {
    await client.connect();
    console.log("Succesfully Connection to Mongodb");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connectedClient = await ConnectToMongoDB();
const db = connectedClient?.db("SimpleDataBase_Express");

export interface UserTy {
  _id: ObjectId;
  name: string;
  email: string;
  age: number;
  city: string;
}

const users = db?.collection<UserTy>("user");

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

app.listen(PORT, () => {
  console.log(`TypeScript with Express http://localhost:${PORT}/`);
});
