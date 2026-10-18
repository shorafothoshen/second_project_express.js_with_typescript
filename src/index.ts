import express,{type Express,type Request, type Response} from 'express'
import cors from 'cors';
import { MongoClient } from 'mongodb';
import 'dotenv/config'


const app:Express=express()

const PORT=process.env.POST||5000;


// Middleware
app.use(cors());
app.use(express.json())


const client = new MongoClient(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_PASS}@cluster0.3fqxgpg.mongodb.net/`);


export async function ConnectToMongoDB(){
  try{
    await client.connect();
    console.log("Succesfully Connection to Mongodb");
    return client;
  }catch(err){
      console.dir(err)
  }
}

await ConnectToMongoDB();

app.get('/',(req:Request,res:Response)=>{
    res.send("This is Home Page");
})

app.get('/about',(req:Request, res:Response)=>{
    res.send("This is About Page")
})

const user=[
  {
    "id": 1,
    "name": "Rahim Ahmed",
    "email": "rahim@example.com",
    "age": 24,
    "city": "Dhaka",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Karim Hasan",
    "email": "karim@example.com",
    "age": 27,
    "city": "Chattogram",
    "isActive": true
  },
  {
    "id": 3,
    "name": "Nusrat Jahan",
    "email": "nusrat@example.com",
    "age": 22,
    "city": "Sylhet",
    "isActive": false
  },
  {
    "id": 4,
    "name": "Sadia Islam",
    "email": "sadia@example.com",
    "age": 25,
    "city": "Rajshahi",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Tanvir Hossain",
    "email": "tanvir@example.com",
    "age": 26,
    "city": "Khulna",
    "isActive": false
  }
]

app.get('/user',(req:Request, res:Response)=>{
    res.send(user);
})

app.listen(PORT, ()=>{
    console.log(`TypeScript with Express http://localhost:${PORT}/`);
})