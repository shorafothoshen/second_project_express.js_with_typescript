import express,{type Express,type Request, type Response} from 'express'

const app:Express=express()

const PORT=process.env.POST||5000;

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