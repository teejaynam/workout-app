import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import connectDB from '../db/db'
import userRoutes from '../routes/userRoutes';

const app = express(); //use express 
const PORT = 7777;

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));

app.use(express.json());

connectDB();

app.use('/api', userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send(`You are GET'ing backend${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Backend Server Running at localhost:${PORT}`)
});