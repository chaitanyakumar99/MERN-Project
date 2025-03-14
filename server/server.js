import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import cookieparser from "cookie-parser";
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js'

const app=express();
const port =process.env.PORT || 8080
connectDB()

app.use(express.json());
app.use(cookieparser())
app.use(cors({credentials:true}))


//API Endpoints


app.get('/',(req,resp)=>resp.send("API Working fine...!"));
app.use('/api/auth',authRouter)

app.listen(port,()=>console.log(`Server Started on PORT:${port} `));