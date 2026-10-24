import { MongoClient } from "mongodb";
import "dotenv/config";

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
export const db = connectedClient?.db("SimpleDataBase_Express");