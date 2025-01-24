import express, { Request, Response } from "express";

const app = express();
const PORT = 7777;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send(`You are GET'ing backend${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Backend Server Running at localhost:${PORT}`)
});